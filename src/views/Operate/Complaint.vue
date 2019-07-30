
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.admin" clearable size="mini" placeholder="管理员账号"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.account" clearable size="mini" placeholder="用户昵称"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="处理状态">
                        <el-option v-for="item in status" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-date-picker v-model="created" size="mini" type="datetimerange" range-separator="至" start-placeholder="登记开始日期" end-placeholder="登记结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </div>
                <div class="input">
                    <el-date-picker v-model="updated" size="mini" type="datetimerange" range-separator="至" start-placeholder="处理开始日期" end-placeholder="处理结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </div>
                <div class="search">
                    <el-button icon="el-icon-search" type="primary" size="mini" @click="search">查询结果</el-button>
                </div>
                <div class="search">
                    <el-button icon="el-icon-delete" type="primary" size="mini" @click="empty">清空删选条件</el-button>
                </div>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="700" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="投诉编号"></el-table-column>
                    <el-table-column align="center" prop="account" label="用户昵称"></el-table-column>
                    <el-table-column align="center" prop="status" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.status === 1" >待处理</span>
                                <span v-if="scope.row.status === 2" >待反馈</span>
                                <span v-if="scope.row.status === 3" >已反馈</span>
                                <span v-if="scope.row.status === 4" >已结束</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="updated_at" label="最后处理时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="admin" label="管理员"></el-table-column>
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" v-if="scope.row.status !== 4" @click="detailsChange(scope.row.id, 2)">处理</span>&nbsp;
                                <span class="cursor color-f8494c" @click="detailsChange(scope.row.id, 1)">详情</span>&nbsp;
                                <span class="cursor color_red" v-if="scope.row.close === 2" @click="closeChange(scope.row.id)">关闭</span>
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
                        :page-size="params.pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="count"
                    ></el-pagination>
                </div>
            </div>
        </div>
        <!-- 投诉记录/处理 -->
        <el-dialog :title="'投诉' + title" :visible.sync="dialogVisible" width="1080px">
            <div class="details">
                <div class="title">基本信息</div>
                <table class="ajun-table">
                    <tr>
                        <td>状态</td>
                        <td>用户账号</td>
                        <td>创建时间</td>
                        <td>管理员</td>
                    </tr>
                    <tr>
                        <td v-if="detailsData.status === 1">待处理</td>
                        <td v-if="detailsData.status === 2">待反馈</td>
                        <td v-if="detailsData.status === 3">已反馈</td>
                        <td v-if="detailsData.status === 4">已结束</td>
                        <td>{{detailsData.account}}</td>
                        <td>{{detailsData.created_at}}</td>
                        <td>{{detailsData.admin}}</td>
                    </tr>
                </table>
            </div>
            <div class="feedback">
                <ul class="list">
                    <li class="item" v-for="(item, index) in content" :key="index">
                        <div class="title" v-if="item.type === 1" >{{detailsData.account}}</div>
                        <div class="title" v-else>{{detailsData.admin}}</div>
                        <div class="img-list">
                            <div class="content">{{item.content}}</div>
                            <div class="img">
                                <img :src="img.url" alt="" v-for="(img, i) in item.image" :key="i" @click="imgChange(item.image, i)">
                            </div>
                            <div class="time">{{item.created_at}}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="from" v-if="title === '处理' && content.length > 0">
                <el-form label-width="150px" :model="formLabelAlign">
                    <el-form-item label="反馈问题">
                        <el-input v-model="formLabelAlign.content" type="textarea" :rows="3" clearable placeholder="请输入反馈问题"></el-input>
                    </el-form-item>
                    <el-form-item label="反馈图片">
                        <el-upload
                            class="upload-demo"
                            :action="uploadUrl"
                            :on-success="handleSuccess"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :beforeUpload="beforeAvatarUpload"
                            limit="6"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">图片最多上传6张</div>
                        </el-upload>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" v-if="title === '处理'" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <transition name="el-fade-in-linear">
            <Carousel v-if="carouselShow" :carouselArray="carouselArray" :carouselIndex="carouselIndex" :carouselShow="carouselShow" @iconChange="iconChange"></Carousel>
        </transition>
    </div>
</template>

<script type="text/javascript">
import { complaintIndex, complaintInfo, complaintProcess, complaintClose } from "@/api/operate.js";
import { uploadUrl } from "@/api/imageUrl.js";
import Carousel from '@/components/Carousel.vue';

export default {
    data() {
        return {
            params: {
                status: "", //  状态值，1处理2待反馈3已反馈4已结束，不传代表查询全部
                admin: "", //  管理员账号
                account:"",
                created_at_begin: "",   //  登记开始时间,举例 2019-03-06 15:36:12
                created_at_end: "", //  登记结束时间,举例 2019-03-06 15:36:12
                updated_at_begin: "",   //  处理开始时间,举例 2019-03-06 15:36:12
                updated_at_end: "", //  处理结束时间,举例 2019-03-06 15:36:12
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            created: '',    //  登记时间
            updated: '',    //  处理时间
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {   //  反馈问题
                id: '',
                content: "",
                image: [],
            },
            fileList: [],   //  附件容器
            uploadUrl: uploadUrl(), //  上传地址
            status: [{ type: 1, value: "待处理" }, { type: 2, value: "待反馈" }, { type: 3, value: "已反馈" }, { type: 4, value: "已结束" }],    //  状态
            detailsData: '',    //  详情数据
            content: [],    //  用户反馈问题
            imgArr: [],  //  图片宽高
            carouselShow: false, //  查看图片
            carouselArray: [],  //  图片集合
            carouselIndex: 0,  //  图片下标
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        async index() {
            //  主页列表数据
            let data = await complaintIndex(this.params);
            if (data.code === 200) {
                this.list = data.data.list;
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
            this.params.pagesize = val;
            this.index();
        },
        handleSuccess(file) {   //  上传附件
            if(file.code === 200){
                this.imgWidthHeight(file.data.url);
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            this.formLabelAlign.image = [];
            this.fileList = [];
            fileList.forEach(item => {
                this.imgWidthHeight(item.url);
            });
        },
        beforeAvatarUpload(file){   //  限制上传附件大小
            let size = file.size/1000/1024;
            if(size > 4){
                this.$message({ message: '图片大于4M，请重新上传~', type: "warning" });
                return false;
            }
        },
        imgWidthHeight(url){   //  获取图片宽高 
            let img = new Image();
            img.src = url;
            img.onload = () => {
                this.imgArr[0] = img.width;
                this.imgArr[1] = img.height;
                this.formLabelAlign.image.push({
                    url:url,
                    width: this.imgArr[0],
                    height: this.imgArr[1]
                });
                this.fileList.push({ name: '', url: url })
            };
        },
        async complaintGet(id){
            let data = await complaintInfo({id: id});
            if (data.code === 200) {
                this.detailsData = data.data;
                this.content = data.data.content;
            }
        },
        detailsChange(id, val) {    //  编辑
            if( val === 1 ){
                this.title = "记录";
            }else{
                this.title = "处理";
            }
            this.formLabelAlign.id = id;
            this.formLabelAlign.content = '';
            this.formLabelAlign.image = [];
            this.fileList = [];
            this.complaintGet(id);
            this.dialogVisible = true;
        },
        async handleClose() {   //  提交反馈问题
            if (this.formLabelAlign.content == "" &&  this.formLabelAlign.image == "") {
                this.$message({ message: "请输入反馈问题或者反馈图片", type: "warning" });
                return;
            }
            let data = await complaintProcess(this.formLabelAlign);
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        search() {
            //  检索
            if(this.created === null){
                this.params.created_at_begin = '';
                this.params.created_at_end = '';
            }else{
                this.params.created_at_begin = this.created[0];
                this.params.created_at_end = this.created[1];
            }
            if(this.updated === null){
                this.params.updated_at_begin = '';
                this.params.updated_at_end = '';
            }else{
                this.params.updated_at_begin = this.updated[0];
                this.params.updated_at_end = this.updated[1];
            }
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.created = '';
            this.updated = '';
            this.params = {
                status: "", //  状态值，1处理2待反馈3已反馈4已结束，不传代表查询全部
                admin: "", //  管理员账号
                account: "", 
                created_at_begin: "",   //  登记开始时间,举例 2019-03-06 15:36:12
                created_at_end: "", //  登记结束时间,举例 2019-03-06 15:36:12
                updated_at_begin: "",   //  处理开始时间,举例 2019-03-06 15:36:12
                updated_at_end: "", //  处理结束时间,举例 2019-03-06 15:36:12
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            };
            this.index(this.params);
        },
        closeChange(id){  //  关闭投诉
            this.$confirm("此操作将关闭投诉记录, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    complaintClose({id: id}).then(data => {
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
        imgChange(item, index){    //  查看图片
            this.carouselShow = true; //  查看图片
            this.carouselArray = item;  //  图片集合
            this.carouselIndex = Number(index);  //  图片下标
        },
        iconChange(data){   //  隐藏图片
            this.carouselShow = data;
        },
    },
    components: {
        Carousel
    }
};
</script>
<style type="text/css" scoped lang="less">
    .details{
        margin-bottom: 10px;
        .title{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
    .feedback{
        margin-top: 20px;
        .list{
            .item{
                display: flex;
                margin-bottom: 15px;
                .title{
                    width: 150px;
                    font-size: 18px;
                }
                .img-list{
                    flex: 1;
                    overflow: hidden;
                    border-bottom: 1px solid #e2e2e2;
                    padding-bottom: 15px;
                    .content{
                        margin-bottom: 10px;
                    }
                    .img{
                        // display: flex;
                        // flex-wrap: row;
                        // margin-bottom: 10px;
                        overflow: hidden;
                        img{
                            display: block;
                            width: 135px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            float: left;
                        }
                    }
                }
            }
        }
    }
</style>