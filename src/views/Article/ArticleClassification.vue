
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.category_name" clearable size="mini" placeholder="分类名称"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="分类状态">
                        <el-option v-for="item in state" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="search">
                    <el-button icon="el-icon-search" type="primary" size="mini" @click="search">查询结果</el-button>
                </div>
                <div class="search">
                    <el-button icon="el-icon-delete" type="primary" size="mini" @click="empty">清空删选条件</el-button>
                </div>
            </div>
            <div class="pull-right">
                <el-button icon="el-icon-circle-plus-outline" type="primary" size="mini" @click="add">添加</el-button>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="category_name" label="分类名称"></el-table-column>
                    <el-table-column align="center" prop="status" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.status === 1">正常</span>
                                <span class="color_red" v-if="scope.row.status === 2">下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="sort" label="排序值"></el-table-column>
                    <el-table-column align="center" prop="admin_username" label="创建人"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="address" label="操作" width="250px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" @click="edit(scope.row)">编辑</span>&nbsp;
                                <span class="cursor color_red" v-if="scope.row.status === 1" @click="undercarriage(scope.row.id, 2)">下架</span>
                                <span class="cursor color-f8494c" v-if="scope.row.status === 2" @click="undercarriage(scope.row.id, 1)">上架</span>
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
        <!-- 添加/编辑 -->
        <el-dialog :title="title + '文章分类'" :visible.sync="dialogVisible" width="450px" :close-on-click-modal="false">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="* 分类名称">
                    <el-input v-model="formLabelAlign.category_name" placeholder="请输入分类名称" maxlength="10"></el-input>
                    <span class="font_12">长度限制:2至10个英文,数字或汉字</span>
                </el-form-item>
                <el-form-item label="排序值">
                    <el-input v-model="formLabelAlign.sort" placeholder="请输入排序值" maxlength="10"></el-input>
                    <span class="font_12">排序值越高权重越大</span>
                </el-form-item>
                <el-form-item label="分类状态">
                    <el-switch v-model="formLabelAlign.status" :active-value="2" :inactive-value="1" active-text="下架" inactive-text="正常" active-color="#e4e4e4" inactive-color="#1ABC9C"></el-switch>
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
import { articleCategory, categoryStore, categoryUpdate } from "@/api/article.js";
import { integer } from "@/utils/validate.js";

export default {
    data() {
        return {
            params: {
                category_name: "", //  分类名称
                status: 1, //  状态
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {
                //  添加/删除
                category_name: "",
                sort: '',
                status: 1,
            },
            state: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }]
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        ...mapActions({ 
            getCategory: 'getCategory', //  文章分类
        }),
        async index() {
            //  主页列表数据
            let data = await articleCategory(this.params);
            if (data.code === 200) {
                this.list = data.data.data;
                this.count = data.data.total;
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
        undercarriage(id, val){    //  下架/上架
            let title = '';
            if(val === 1){
                title = '上架';
            }else{
                title = '下架';
            }
            this.$confirm("此操作将"+ title +"此文章分类, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    categoryUpdate({id: id, status: val}).then(data => {
                        if (data.code === 200) {
                            this.index();
                            this.$message({ message: title +'成功', type: "success"});
                        }
                    });
                })
                .catch(() => {
                    this.$message({ type: "info", message: "已取消操作~" });
                });
        },
        edit(row) {
            //  编辑
            this.title = "编辑";
            this.formLabelAlign.id = row.id;
            this.formLabelAlign.category_name = row.category_name;
            this.formLabelAlign.sort = row.sort;
            this.formLabelAlign.status = row.status;
            this.dialogVisible = true;
        },
        add() {
            this.title = "添加";
            delete this.formLabelAlign.id;
            this.formLabelAlign.category_name = '';
            this.formLabelAlign.sort = '';
            this.formLabelAlign.status = 1;
            this.dialogVisible = true;
        },
        async handleClose() {
            //  添加/编辑
            if (this.formLabelAlign.category_name == "") {
                this.$message({ message: "请输入文章分类名称", type: "warning" });
                return;
            }
            if (this.formLabelAlign.category_name.length < 2) {
                this.$message({ message: "请输入长度:2至10个英文,数字或汉字", type: "warning" });
                return;
            }
            if (this.formLabelAlign.sort !== "") {
                if(!integer(this.formLabelAlign.sort)){
                    this.$message({ message: "请输入排序值为正整数", type: "warning" });
                }
            }
            let data = "";
            if (this.title === "添加") {
                data = await categoryStore(this.formLabelAlign);
            } else {
                data = await categoryUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.getCategory({status: 0});
                this.index();
            }
        },
        search() {
            //  检索
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.category_name = "";
            this.params.status = "";
            this.index();
        }
    }
};
</script>