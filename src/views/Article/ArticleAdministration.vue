
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.article_title" clearable size="mini" placeholder="文章标题"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="文章状态">
                        <el-option v-for="item in status" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-select v-model="params.category_id" clearable size="mini" placeholder="文章分类">
                        <el-option v-for="item in category" :key="item.id" :label="item.category_name" :value="item.id" ></el-option>
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
                <el-button icon="el-icon-circle-plus-outline" v-if="menuData.add" type="primary" size="mini" @click="add">添加</el-button>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="category_name" label="分类" width="120px"></el-table-column>
                    <el-table-column align="center" prop="article_title" label="文章标题" width="200px"></el-table-column>
                    <el-table-column align="center" label="封面图">
                        <template slot-scope="scope">
                            <div>
                                <img :src="scope.row.article_cover" class="img-width-50" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="article_tag" label="文章标签" width="180px"></el-table-column>
                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.status === 1">正常</span>
                                <span class="color_red" v-if="scope.row.status === 2">下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="sort" label="排序值"></el-table-column>
                    <el-table-column align="center" prop="article_views" label="浏览量"></el-table-column>
                    <el-table-column align="center" prop="article_collection" label="收藏量"></el-table-column>
                    <el-table-column align="center" prop="admin_username" label="创建人" width="120px"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" fixed="right" label="操作" width="180px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row)">编辑</span>&nbsp;
                                <span class="cursor color-f8494c" v-if="scope.row.status === 2 && menuData.start" @click="undercarriage(scope.row.id, 1)">上架</span>
                                <span class="cursor color_red" v-if="scope.row.status === 1 && menuData.stop" @click="undercarriage(scope.row.id, 2)">下架</span>&nbsp;
                                <span class="cursor color-f8494c" v-if="menuData.details " @click="details(scope.row.id)">详情</span>&nbsp;
                                <span class="cursor color-f8494c" v-if="menuData.review" @click="previewChange(scope.row.id)">预览</span>
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
        <!-- <el-dialog :title="title + '文章'" :visible.sync="dialogVisible" @closed="closedCahnge" width="980px"> -->
        <transition name="el-fade-in-linear">
        <div class="dialogVisible" v-if="dialogVisible">
            <div class="contens">
                <div class="icon" @click="dialogVisible = !dialogVisible">
                    <i class="el-icon-close"></i>
                </div>
                <el-form label-width="100px" :model="formLabelAlign">
                    <el-form-item label="* 文章封面">
                        <el-upload
                            class="upload-demo"
                            :action="uploadUrl"
                            :on-success="handleSuccess"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :beforeUpload="beforeAvatarUpload"
                            limit="1"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="* 文章分类">
                        <el-select v-model="formLabelAlign.category_id" clearable size="mini" placeholder="请选择文章分类">
                            <el-option v-for="item in category" :key="item.id" :label="item.category_name" :value="item.id" ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="* 文章标签">
                        <el-select v-model="label" multiple clearable size="mini" placeholder="请选择文章标签(多选)">
                            <el-option v-for="item in tagData" :key="item.id" :label="item.name" :value="item.name" ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="* 文章标题">
                        <el-input v-model="formLabelAlign.article_title" size="mini" placeholder="请输入文章标题" maxlength="30"></el-input>
                        <span class="font_12">1至30字符或汉字</span>
                    </el-form-item>
                    <el-form-item label="* 文章简介">
                        <el-input type="textarea" :rows="2" v-model="formLabelAlign.article_description" size="mini" placeholder="请输入文章简介" maxlength="50"></el-input>
                        <span class="font_12">1至50字符或汉字</span>
                    </el-form-item>
                    <el-form-item label="* 内容编辑">
                        <Ueditor :defaultMsg="defaultMsg" :id="id" ref="ue"></Ueditor>
                    </el-form-item>
                    <el-form-item label="排序值">
                        <el-input v-model="formLabelAlign.sort" size="mini" placeholder="请输入排序"></el-input>
                        <span class="font_12">排序值越高权重越大</span>
                    </el-form-item>
                    <el-form-item label="文章状态">
                        <el-switch v-model="formLabelAlign.status" :active-value="2" :inactive-value="1" active-text="下架" inactive-text="正常" active-color="#e4e4e4" inactive-color="#1ABC9C"></el-switch>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">返 回</el-button>
                    <el-button type="primary" @click="handleClose">确 定</el-button>
                </span>
            </div>
        </div>
        </transition>
        <!-- </el-dialog> -->
        <!-- 文章详情 -->
        <el-dialog title="文章详情" :visible.sync="detailsShow" width="980px" :close-on-click-modal="false">
            <table class="ajun-table">
                <tr>
                    <td>文章分类</td>
                    <td>{{detailsData.category_id}}</td>
                </tr>
                <tr>
                    <td>文章标签</td>
                    <td>{{detailsData.article_tag}}</td>
                </tr>
                <tr>
                    <td>封面</td>
                    <td>
                        <img :src="detailsData.article_cover" class="img-width-50" alt="">
                    </td>
                </tr>
                <tr>
                    <td>标题</td>
                    <td>{{detailsData.article_title}}</td>
                </tr>
                <tr>
                    <td>简介</td>
                    <td>{{detailsData.article_description}}</td>
                </tr>
                <tr>
                    <td>文章内容</td>
                    <!-- <td>{{detailsData.article_content}}</td> -->
                    <td class="cursor color-f8494c" @click="previewChange(detailsData.id)">点击查看</td>
                </tr>
                <tr>
                    <td>排序值</td>
                    <td>{{detailsData.sort}}</td>
                </tr>
                <tr>
                    <td>状态</td>
                    <td v-if="detailsData.status === 1">正常</td>
                    <td v-else>下架</td>
                </tr>
                <tr>
                    <td>创建人</td>
                    <td>{{detailsData.admin_username}}</td>
                </tr>
                <tr>
                    <td>创建时间</td>
                    <td>{{detailsData.created_at}}</td>
                </tr>
            </table>
        </el-dialog>
        <!-- 文章预览 -->
        <el-dialog title="文章预览" :visible.sync="previewShow" width="980px" :close-on-click-modal="false">
            <div class="centens">
                <div class="title">{{detailsData.article_title}}</div>
                <div class="user-time">发稿时间：{{detailsData.created_at}} 来源：{{detailsData.admin_username}}</div>
                <div class="text" v-html="detailsData.article_content"></div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="previewShow = false">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import Ueditor from '@/components/Ueditor.vue';
import { article, articleStore, articleUpdate, articleShow, articleTag } from "@/api/article.js";
import { uploadUrl } from "@/api/imageUrl.js";

export default {
    data() {
        return {
            params: {
                article_title: "", //  文章标题
                status: 1, //  文章状态
                category_id: '', //  文章分类
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {
                //  添加/删除
                article_title: "",
                article_cover: '',
                category_id: '',
                article_description: '',
                article_tag: '',
                article_content: '',
                sort: '',
                status: 1,
            },
            fileList: [],   //  附件容器
            uploadUrl: uploadUrl(), //  上传地址
            detailsData: '',    //  文章详情数据
            defaultMsg: '', //  编辑器内容
            id: 'ArticleAdministration', //  编辑器ID
            status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }],    //  文章状态
            label: [],  //  文章标签
            detailsShow: false, //  显示文章详情
            previewShow: false, //  文章预览
            tagData:[],//tag标签
            menuData:[], //权限控制Data
        };
    },
    computed: mapState({
        labelData: (state) => state.selector.laboratory,   //   科室
        category: (state) => state.selector.category,   //   文章分类
        menu:(state) => state.login.menu,
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
        this.getLaboratory();
        this.articleTagGet();
        this.getCategory({status: 0});
        this.menuGet(); //权限控制页面按钮
    },
    methods: {
        ...mapActions({ 
            getLaboratory: 'getLaboratory',  //  科室
            getCategory: 'getCategory', //  文章分类
        }),
        //权限控制
        menuGet(){
            this.menu.forEach(item=>{
                if(item.name =='文章'){
                    item.data.forEach(it=>{
                        if(it.route_web =='/Article/ArticleAdministration'){
                            this.menuData = it.role_arr;
                        }
                    })
                }
            })
        },
        async index() {
            //  主页列表数据
            let data = await article(this.params);
            if (data.code === 200) {
                this.list = data.data.data;
                this.count = data.data.total;
            }
        },
        //文章标签
        async articleTagGet(){
            let data = await articleTag();
            if(data.code ===200){
                this.tagData=data.data;
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
        handleSuccess(file) {   //  上传附件
            if(file.code === 200){
                this.fileList = [
                    {name: file.data.originName, url: file.data.url}
                ];
                this.formLabelAlign.article_cover = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.article_cover = '';
            }
        },
        beforeAvatarUpload(file){   //  限制上传附件大小
            let size = file.size/1000/1024;
            if(size > 4){
                this.$message({ message: '图片大于4M，请重新上传~', type: "warning" });
                return false;
            }
        },
        details(id){  //  文章详情显示
            this.detailsShow = true;
            this.detailsGet(id);
        },
        async detailsGet(id){   //  文章详情
            let data = await articleShow({id: id});
            if (data.code === 200) {
                this.detailsData = this.formLabelAlign = data.data;
                this.category.forEach((item) => {
                    if(item.id === this.detailsData.category_id){
                        this.detailsData.category_id = item.category_name;
                    }
                });
                this.formLabelAlign.id = id;
                this.fileList = [
                        {name: '', url: data.data.article_cover}
                ];
                this.defaultMsg = data.data.article_content;
                this.label = data.data.article_tag.split(",");
            }
        },
        previewChange(id){    //  文章预览
            this.previewShow = true;
            this.detailsGet(id);
        },
        edit(row) {
            //  编辑
            this.title = "编辑";
            this.detailsGet(row.id);
            this.dialogVisible = true;
            this.getCategory({status: 1});
        },
        add() {
            this.title = "添加";
            this.getCategory({status: 1});
            this.formLabelAlign = {
                article_title: "",
                article_cover: '',
                category_id: '',
                article_description: '',
                article_tag: '',
                article_content: '',
                sort: '',
                status: 1,
            },
            this.defaultMsg = '';
            this.fileList = [];
            this.label = [];
            this.dialogVisible = true;
        },
        closedCahnge(){ //  关闭弹框回调
            this.getCategory({status: 0});
        },
        async handleClose() {
            //  添加/编辑
            if (this.formLabelAlign.article_cover == "") {
                this.$message({ message: "请上传文章封面", type: "warning" });
                return;
            }
            if (this.formLabelAlign.category_id == "") {
                this.$message({ message: "请选择文章分类", type: "warning" });
                return;
            }
            if (this.label == "") {
                this.$message({ message: "请选择文章标签", type: "warning" });
                return;
            }
            if (this.formLabelAlign.article_title == "") {
                this.$message({ message: "请输入文章标题", type: "warning" });
                return;
            }
            if (this.formLabelAlign.article_description == "") {
                this.$message({ message: "请输入文章简介", type: "warning" });
                return;
            }
            this.formLabelAlign.article_content = this.$refs.ue.getUEContent();
            if (this.formLabelAlign.article_content == "") {
                this.$message({ message: "请编辑文章内容", type: "warning" });
                return;
            }
            this.formLabelAlign.article_tag = this.label.join(",");
            let data = "";
            if (this.title === "添加") {
                data = await articleStore(this.formLabelAlign);
            } else {
                this.category.forEach((item) => {
                    if(item.category_name === this.formLabelAlign.category_id){
                        this.formLabelAlign.category_id = item.id;
                    }
                });
                data = await articleUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
            }
        },
        undercarriage(id, val){    //  下架、上架  
            let title = '';
            if(val === 1){
                title = '上架';
            }else{
                title = '下架';
            }
            this.$confirm("此操作将"+ title +"此文章, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    articleUpdate({id: id, status: val}).then(data => {
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
        search() {
            //  检索
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.article_title = "";
            this.params.category_id = "";
            this.params.status = "";
            this.index();
        },
        target(url){
            this.$message({ type: "info", message: "此功能暂不支持~" });
        },
    },
    components: {
        Ueditor,
    }
};
</script>
<style type="text/css" scoped lang="less">
    .dialogVisible{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 9;
        overflow-y: scroll;
        .contens{
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translate(-50%, 0);
            background: #fff;
            width: 1100px;
            padding: 50px;
            .dialog-footer{
                float: right;
            }
        }
        .icon{
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 32px;
            color: #999;
            cursor: pointer;
        }
    }
    .centens{
        .title{
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
        .user-time{
            text-align: center;
            margin: 10px;
        }
        .text{
            line-height: 1.5;
        }
    }
</style>