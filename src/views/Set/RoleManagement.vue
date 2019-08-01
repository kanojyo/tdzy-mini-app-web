
<template>
    <div class>
        <div class="operation">
            <div class="pull-right">
                <el-button icon="el-icon-circle-plus-outline" type="primary" size="mini" @click="add">添加</el-button>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="角色ID"></el-table-column>
                    <el-table-column align="center" prop="name" label="角色名称"></el-table-column>
                    <el-table-column align="center" prop="desc" label="角色描述"></el-table-column>
                    <!-- <el-table-column align="center" prop="seq_order" label="排序序号"></el-table-column> -->
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" @click="edit(scope.row)">编辑</span>
                                <span class="cursor color-f8494c" @click="remove(scope.row.id)">删除</span>
                                <span class="cursor color-f8494c" @click="permissionSetting(scope.row.id)">权限设置</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="table-peg">
                <div class="pull-left"></div>
                <div class="pull-right">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="params.page"
                        :page-sizes="[30, 50, 100]"
                        :page-size="params.page_size"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="count"
                    ></el-pagination>
                </div>
            </div>
        </div>
        <!-- 编辑/添加 -->
        <el-dialog :title="title + '角色'" :visible.sync="dialogVisible" width="450px">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="* 角色名称">
                    <el-input v-model="formLabelAlign.name" placeholder="请输入角色名称"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="formLabelAlign.desc" placeholder="请输入描述"></el-input>
                </el-form-item>
                <!-- <el-form-item label="排序">
                    <el-input v-model="formLabelAlign.seq_order" placeholder="请输入排序"></el-input>
                </el-form-item> -->
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 权限设置 -->
        <el-dialog title="权限设置" :visible.sync="permissionShow" width="650px">
            <div class="permission">
                <el-tree
                        :data="zthreeData"
                        @check="check"
                        show-checkbox
                        :default-expand-all="true"
                        check-strictly
                        node-key="id"
                        ref="tree"
                        :default-checked-keys="keys"
                        highlight-current
                        :props="defaultProps"
                    ></el-tree>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="permissionShow = false">取 消</el-button>
                <el-button type="primary" @click="preservation">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { roleIndex, rolePost, roleUpdate, roleDelete, rolePermission } from "@/api/set.js";

export default {
    data() {
        return {
            params: {
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: '',  //  添加/编辑
            dialogVisible: false, //	添加/编辑 弹框
            formLabelAlign: {
                //  添加/修改
                name: "",
                desc: '',
                // seq_order: '',
            },
            roleList: [],   //  角色列表
            permissionShow: false,  //  权限设置 弹框
            zthreeData: [], //	权限数据
            keys: [], //	权限
            defaultProps: {
                children: "data",
                label: "name"
            },
            permission: {
                id: '',
                menu_ids: [],
            },
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        async index() {
            //  主页列表数据
            let data = await roleIndex(this.params);
            if (data.code === 200) {
                this.list = data.data.data;
                this.count = data.data.count;
            }
        },
        handleCurrentChange(val) {
            //	请求多少页
            this.params.page = val;
            this.index();
        },
        handleSizeChange(val) {
            //	每页多少条
            this.params.pageSize = val;
            this.index();
        },
        edit(row) {
            //  编辑
            this.title = '编辑';
            this.formLabelAlign.id = row.id;
            this.formLabelAlign.name = row.name;
            this.formLabelAlign.desc = row.desc;
            // this.formLabelAlign.seq_order = row.seq_order;
            this.dialogVisible = true;
        },
        add(){  //  添加
            this.title = '添加';
            this.formLabelAlign = {
                name: "",
                desc: '',
                // seq_order: '',
            }
            this.dialogVisible = true;
        },
        async handleClose() {
            //  编辑
            if (this.formLabelAlign.name == "") {
                this.$message({ message: "请输入角色名称", type: "warning" });
                return;
            }
            let data = '';
            if(this.title === '编辑'){
                data = await roleUpdate(this.formLabelAlign);
            }else{
                data = await rolePost(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        remove(id){   //  删除
            this.$confirm("此操作将删除此角色, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    roleDelete({id: id}).then(data => {
                        if (data.code === 200) {
                            this.index();
                            this.$message({ message: data.data.msg, type: "success"});
                        }
                    });
                })
                .catch(() => {
                    this.$message({ type: "info", message: "已取消操作~" });
                });
        },
        async permissionSetting(id) {   //  权限设置显示
            let data = await rolePermission({id: id});
            if (data.code == 200) {
                this.zthreeData = data.data.roleMenu;
                console.log(this.zthreeData , id)
                this.keys=[];
                this.traverseTree(this.zthreeData);
                this.permission.id = id;
                this.permissionShow = true;
                
            }
        },
        traverseTree(zthree) {
            //	递归，显示权限
            if (!zthree) return;
            if (zthree.length > 0) {
                zthree.forEach(v => {
                    if (v.selected === true) {
                        this.keys.push(v.id);
                    }
                    this.traverseTree(v.data);
                });
            }
        },
        check(data, Keys) {
            //	获取权限id
            this.keys = Keys.checkedKeys;
        },
        async preservation() {
            //	设置权限
            this.permission.menu_ids = this.keys;
            if (this.permission.menu_ids === "") {
                this.$message({ message: "请设置权限", type: "warning" });
                return;
            }
            let data = await roleUpdate(this.permission);
            if (data.code == 200) {
                this.permissionShow = false;
                this.$message({ message: data.data.msg, type: "success" });
            }
        }
    }
};
</script>