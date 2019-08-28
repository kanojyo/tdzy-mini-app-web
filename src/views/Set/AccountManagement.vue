
<template>
    <div class>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="800" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="帐号ID"></el-table-column>
                    <el-table-column align="center" prop="username" label="登录帐号"></el-table-column>
                    <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                    <el-table-column align="center" prop="role_name" label="角色名称"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="address" label="操作">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row)">编辑</span>
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
        <!-- 编辑 -->
        <el-dialog title="编辑帐号" :visible.sync="dialogVisible" width="450px" :close-on-click-modal="false">
            <el-form label-width="100px" :model="form">
                <el-form-item label="* 角色">
                    <el-select clearable v-model="form.role_id" placeholder="请选择角色">
                        <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { userIndex, userUpdate, roleSelect } from "@/api/set.js";

export default {
    data() {
        return {
            params: {
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            dialogVisible: false, //	添加/编辑公司 弹框
            form: {
                id: '',
                role_id: '',    //  角色ID
            },
            roleList: [],   //  角色列表
            menuData:[], //权限控制Data
        };
    },
    computed: mapState({
        menu:state => state.login.menu,
    }),
    watch: {
        '$store.state.login.menu': function () {
            this.$nextTick(()=>{
                this.menuGet(); //权限控制页面按钮
            })
        }
    },
    mounted() {
        this.index();
        this.selectGet();
        this.menuGet(); //权限控制页面按钮
    },
    methods: {
        //权限控制
        menuGet(){
            this.menu.forEach(item=>{
                if(item.name =='设置'){
                    item.data.forEach(it=>{
                        if(it.route_web =='/Set/AccountManagement'){
                            this.menuData = it.role_arr;
                        }
                    })
                }
            })
        },
        async index() {
            //  主页列表数据
            let data = await userIndex(this.params);
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
        async selectGet(){
            //  系统角色列表下拉框
            let data = await roleSelect();
            if (data.code === 200) {
                this.roleList = data.data.roleList;
            }
        },
        edit(row) {
            //  编辑
            if(row.role_id === 0){
                this.form.role_id = '';
            }else{
                this.form.role_id = row.role_id;
            }
            this.form.id = row.id;
            this.dialogVisible = true;
        },
        async handleClose() {
            //  编辑
            let data = await userUpdate(this.form);
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
    }
};
</script>