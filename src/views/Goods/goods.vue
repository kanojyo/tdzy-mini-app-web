
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input size="mini" v-model="params.goods_name" placeholder="商品名称"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.goods_type" clearable size="mini" placeholder="商品类型">
                        <el-option v-for="item in type" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-select v-model="params.goods_status" clearable size="mini" placeholder="状态">
                        <el-option v-for="item in status" :key="item.type" :label="item.value" :value="item.type" ></el-option>
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
                    <el-table-column align="center" prop="id" label="商品ID"></el-table-column>
                    <el-table-column align="center" label="商品图片">
                        <template slot-scope="scope">
                            <img :src="scope.row.pic_url"  >
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="goods_name" label="商品名称"></el-table-column>
                    <el-table-column align="center" prop="now_score" label="兑换所需积分"></el-table-column>
                    <el-table-column align="center" prop="original_score" label="原兑换所需积分"></el-table-column>
                    <el-table-column align="center" prop="exchange_max_num" label="兑换上限"></el-table-column>
                    <el-table-column align="center" prop="exchange_get_num" label="已兑换数量"></el-table-column>
                    <el-table-column align="center" label="有效期" width="200px">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.valid_type ==1">{{scope.row.surplus_days}}</span>
                                <span v-if="scope.row.valid_type ==2">{{scope.row.surplus_days}}天</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="商品类型">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.goods_type === 1">诊疗类</span>
                                <span class="color-f8494c" v-if="scope.row.goods_type === 2">实物类</span>
                                <span class="color-f8494c" v-if="scope.row.goods_type === 3">虚拟类</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.goods_status === 1">正常</span>
                                <span class="color_red" v-if="scope.row.goods_status === 2">下架</span>
                                <span class="color_red" v-if="scope.row.goods_status === 3">暂停兑换</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="sort" label="排序值"></el-table-column>
                    <el-table-column align="center" prop="admin_name" label="创建人"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="120px"></el-table-column>
                    <el-table-column align="center" label="操作" width="150px">
                        <template slot-scope="scope">
                            <div v-if="scope.row.goods_status === 2">
                                <span class="cursor color-f8494c" v-if="menuData.start_stop" @click="statusChange(scope.row.id, 1)">上架</span>
                                <span class="cursor color_red" v-if="menuData.start_stop" @click="statusChange(scope.row.id, 3)">暂停兑换</span>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row.id)">编辑</span>
                                <span class="cursor color-f8494c" v-if="menuData.details" @click="detail(scope.row.id)">商品详情</span>
                            </div>
                            <div v-if="scope.row.goods_status === 1">
                                <span class="cursor color_red" v-if="menuData.start_stop" @click="statusChange(scope.row.id, 2)">下架</span>
                                <span class="cursor color_red" v-if="menuData.start_stop" @click="statusChange(scope.row.id, 3)">暂停兑换</span>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row.id)">编辑</span>
                                <span class="cursor color-f8494c" v-if="menuData.details" @click="detail(scope.row.id)">商品详情</span>
                            </div>
                            <div v-if="scope.row.goods_status === 3">
                                <span class="cursor color-f8494c" v-if="menuData.start_stop" @click="statusChange(scope.row.id, 1)">上架</span>
                                <span class="cursor color_red" v-if="menuData.start_stop" @click="statusChange(scope.row.id, 2)">下架</span>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row.id)">编辑</span>
                                <span class="cursor color-f8494c" v-if="menuData.details" @click="detail(scope.row.id)">商品详情</span>
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
        <!-- 添加/编辑 -->
        <el-dialog :title="'商品' + title" :visible.sync="dialogVisible" width="650px" :close-on-click-modal="false">
            <el-form label-width="120px" :model="formLabelAlign">
                <el-form-item label="* 商品名称">
                    <el-input v-model="formLabelAlign.goods_name" placeholder="请输入商品名称" :maxlength="30"></el-input>
                    <span class="font_12">1至30字符或汉字</span>
                </el-form-item>
                <el-form-item label="* 商品类型">
                    <el-select v-model="formLabelAlign.goods_type" clearable size="mini" placeholder="请选择商品类型">
                        <el-option v-for="item in type" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="* 商品主图">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :beforeUpload="beforeAvatarUpload"
                        limit="1"
                        list-type="picture">
                        <el-button size="mini" type="primary">点击上传</el-button>
                    </el-upload>
                    <span class="font_12">上传图片格式只能为JPG、PNG、JPEG,最大为4M<span class="color_red">建义尺寸750px*680px</span></span>
                </el-form-item>
                <el-form-item label="* 商品轮播图">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess1"
                        :on-remove="handleRemove1"
                        :file-list="fileList1"
                        :beforeUpload="beforeAvatarUpload"
                        limit="10"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <span class="font_12">上传图片格式只能为JPG、PNG、JPEG,最大为4M<span class="color_red">建义尺寸750px*680px</span></span>
                </el-form-item>
                <el-form-item label="* 商品详情图">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess2"
                        :on-remove="handleRemove2"
                        :file-list="fileList2"
                        :beforeUpload="beforeAvatarUpload"
                        limit="20"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <span class="font_12">上传图片格式只能为JPG、PNG、JPEG,最大为4M<span class="color_red">建义尺寸750px*680px</span></span>
                </el-form-item>
                <el-form-item label="* 商品使用规则">
                    <el-input type="textarea" v-model="formLabelAlign.goods_rules" placeholder="请输入商品使用规则" :maxlength="500" ></el-input>
                    <span class="font_12" style="display:block;text-align:right;">500字以内</span>
                </el-form-item>
                <el-form-item label="* 兑换所需积分">
                    <el-input v-model="formLabelAlign.now_score" placeholder="请输入正整数"></el-input>
                </el-form-item>
                <el-form-item label="* 原有积分">
                    <el-input v-model="formLabelAlign.original_score" placeholder="请输入正整数"></el-input>
                </el-form-item>
                <el-form-item label="* 兑换上限">
                    <el-input v-model="formLabelAlign.exchange_max_num" placeholder="请输入正整数 0为不限量"></el-input>
                </el-form-item>
                <el-form-item class="date" label="* 有效期">
                    <el-radio v-model="formLabelAlign.valid_type" :label="1">
                        <el-date-picker
                        v-model="timeValue"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        @change="date()"
                        value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </el-radio>
                    <el-radio v-model="formLabelAlign.valid_type" :label="2">
                        <el-input v-model="formLabelAlign.surplus_days" placeholder="请输入天数"></el-input>
                        <span>1至365的整数</span>
                    </el-radio>
                </el-form-item>
                <el-form-item label="排序值">
                    <el-input v-model="formLabelAlign.sort" placeholder="请输入排序值"></el-input>
                    <span class="font_12">排序值越高权重越大</span>
                </el-form-item>
                <el-form-item label="* 状态">
                    <el-radio-group v-model="formLabelAlign.goods_status">
                        <el-radio v-for="item in status"   :key="item.type" :label="item.type" >{{item.value}}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 商品详情 -->
        <el-dialog title="商品详情" :visible.sync="detailVisible" width="800px" :close-on-click-modal="false">
            <table class="ajun-table">
                <tr>
                    <td style="width:100px;">商品名称</td>
                    <td>{{detailData.goods_name}}</td>
                </tr>
                <tr>
                    <td>商品主图</td>
                    <td>
                        <img :src="detailData.pic_url" alt="" style="width:60%;margin:0 auto;">
                    </td>
                </tr>
                <tr>
                    <td>商品轮播图</td>
                    <td>
                        <p style="display:block;">
                            <img v-for="(item,index) in detailData.goods_loop" :src="item" alt="" style="width:150px;margin-right:10px;">
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>商品详情图</td>
                    <td>
                        <p style="display:block;">
                            <img v-for="(item,index) in detailData.goods_details" :src="item" alt="" style="width:150px;margin-right:10px;">
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>商品详情说明</td>
                    <td>{{detailData.goods_rules}}</td>
                </tr>
                <tr>
                    <td>兑换所需积分</td>
                    <td>{{detailData.now_score}}</td>
                </tr>
                <tr>
                    <td>原有积分</td>
                    <td>{{detailData.original_score}}</td>
                </tr>
                <tr>
                    <td>排序值</td>
                    <td>{{detailData.sort}}</td>
                </tr>
                <tr>
                    <td>状态</td>
                    <td>{{detailData.goods_status|goodsStatus}}</td>
                </tr>
                <tr>
                    <td>创建时间</td>
                    <td>{{detailData.created_at}}</td>
                </tr>
            </table>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { goodsIndex, changeStatus, goodsAdd, goodsUpdate, goodsDetails} from "@/api/goods.js";
import { uploadUrl } from "@/api/imageUrl.js";
import { integer, positiveInteger, positiveNum365 } from "@/utils/validate.js";
export default {
    data() {
        return {
            params: {
                goods_name:"",
                goods_type: "", //  商品类型 0:全部 1：诊疗类，2：实物类, 3:虚拟类
                goods_status: 1, //  状态 1：正常，2：下架, 3:暂停兑换
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            detailVisible: false, //	商品详情 弹框
            formLabelAlign: {   //  添加/编辑
                pic_url: '', //商品主图
                goods_loop: '', //商品轮播图
                goods_details: '', //商品详情图
                goods_name: '',
                goods_rules: '',
                goods_type: '',
                original_score: '',
                now_score: '',
                exchange_max_num: '',
                valid_type: '',
                start_time: '',
                end_time: '',
                surplus_days: '',
                sort: '',
                goods_status: '',
            },
            fileList: [],   //  主图附件容器
            fileList1: [],   //  轮播图附件容器
            fileList2: [],   //  详情图附件容器
            uploadUrl: uploadUrl(), //  上传地址
            type:[{type: 1, value: "诊疗类" }, {type: 2, value: "实物类" }, {type: 3, value: "虚拟类"}], //商品类型
            status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }, { type:3, value: "暂停兑换"}],    //  状态
            timeValue:"",
            imgList1:[],
            imgList2:[],
            detailData:[],
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
        this.menuGet(); //权限控制页面按钮
    },
    methods: {
        ...mapActions({ 
            getMenu:'getMenu'
        }),
        //权限控制
        menuGet(){
            this.menu.forEach(item=>{
                if(item.id == 33){
                    item.data.forEach(it=>{
                        if(it.route_web =='/Goods/goods'){
                            this.menuData = it.role_arr;
                        }
                    })
                }
            })
        },
        async index() {
            //  主页列表数据
            let data = await goodsIndex(this.params);
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
                this.fileList = [{name: file.data.originName, url: file.data.url}];
                this.formLabelAlign.pic_url = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.pic_url = '';
            }
        },
        handleSuccess1(file,fileList1) {   //  上传附件
            if(file.code === 200){
                this.fileList1.push({name: file.data.originName, url: file.data.url});
                this.imgList1.push(file.data.url);
                this.formLabelAlign.goods_loop=this.imgList1;
            }
        },
        handleRemove1(file, fileList1) {  // 移除附件
            if(fileList1.length === 0){
                this.fileList1 = [];
                this.imgList1=[];
                this.formLabelAlign.goods_loop = '';
            }else{
                var list=[];
                this.fileList1= fileList1;
                fileList1.forEach(item=>{
                    list.push(item.url);
                });
                this.imgList1 = list
                this.formLabelAlign.goods_loop =list;
            }
        },
        handleSuccess2(file) {   //  上传附件
            if(file.code === 200){
                this.fileList2.push({name: file.data.originName, url: file.data.url});
                this.imgList2.push(file.data.url);
                this.formLabelAlign.goods_details=this.imgList2;
                // this.formLabelAlign.goods_details = file.data.url;
            }
        },
        handleRemove2(file, fileList2) {  // 移除附件
            if(fileList2.length === 0){
                this.fileList2 = [];
                this.imgList2=[];
                this.formLabelAlign.goods_details = '';
            }else{
                var list=[];
                this.fileList2= fileList2;
                fileList2.forEach(item=>{
                    list.push(item.url);
                });
                this.imgList2 = list
                this.formLabelAlign.goods_details =list;
            }
        },
        beforeAvatarUpload(file){   //  限制上传附件大小
            const isJPG = file.type === 'image/jpg';
            const isJPEG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt4M = file.size / 1024 / 1024 <= 4;
            if (!isJPG && !isJPEG && !isPNG) {
                this.$message.error('上传图片只能是 jpg,png,jpeg 格式!');
                }
            if (!isLt4M) {
                this.$message.error('上传图片大小不能超过 4MB!');
            }
            return (isJPG || isJPEG || isPNG) && isLt4M
        },
        async edit(id) { //  编辑
            this.title = "编辑";
            this.timeValue='';
            this.fileList = [];
            this.fileList1 = [];
            this.fileList2 = [];
            this.imgList1=[];
            this.imgList2=[];
            let data = await goodsDetails({id: id});
            if (data.code === 200) {
                this.formLabelAlign = data.data;
                console.log(this.formLabelAlign)
                if(this.formLabelAlign.valid_type == 1){
                    var time =[];
                    time[0]=this.formLabelAlign.start_time;
                    time[1]=this.formLabelAlign.end_time;
                    this.timeValue=time;
                }
                this.fileList = [
                    {name: '', url: data.data.pic_url}
                ];
                if(this.formLabelAlign.goods_loop !== ""){
                    let List1= JSON.parse(this.formLabelAlign.goods_loop);
                    this.imgList1 =List1;
                    // let List1= this.formLabelAlign.goods_loop;
                    // this.fileList1 = {url:List1}
                    List1.forEach(item => {
                        this.fileList1.push({url: item})
                    })
                    console.log(this.fileList1)
                }
                if(this.formLabelAlign.goods_details !== ""){
                    let list2= JSON.parse(this.formLabelAlign.goods_details);
                    this.imgList2 =list2;
                    console.log(list2,'goods_details')
                    // let list2= this.formLabelAlign.goods_details;
                    // this.fileList1 = {url:list2}
                    list2.forEach(item => {
                        this.fileList2.push({url: item})
                    })
                    console.log(this.fileList2)
                }
                if(this.formLabelAlign.valid_type){
                    this.formLabelAlign.valid_type =parseFloat(this.formLabelAlign.valid_type);
                }
                if(this.formLabelAlign.sort){
                   this.formLabelAlign.sort =this.formLabelAlign.sort.toString() ;
                }
                if(this.formLabelAlign.surplus_days){
                   this.formLabelAlign.surplus_days =this.formLabelAlign.surplus_days.toString() ;
                }
                if(this.formLabelAlign.exchange_max_num){
                   this.formLabelAlign.exchange_max_num =this.formLabelAlign.exchange_max_num.toString() ;
                }
                if(this.formLabelAlign.original_score){
                   this.formLabelAlign.original_score =this.formLabelAlign.original_score.toString() ;
                }
                if(this.formLabelAlign.now_score){
                   this.formLabelAlign.now_score =this.formLabelAlign.now_score.toString() ;
                }
                if(this.formLabelAlign.goods_status){
                   this.formLabelAlign.goods_status =parseFloat(this.formLabelAlign.goods_status);
                }
                this.dialogVisible = true;
            }
        },
        add() {  //添加
            this.title = "添加";
            this.timeValue="";
            this.formLabelAlign = {
                pic_url: '', //商品主图
                goods_loop: '', //商品轮播图
                goods_details: '', //商品详情图
                goods_name: '',
                goods_rules: '',
                goods_type: '',
                original_score: '',
                now_score: '',
                exchange_max_num: '',
                valid_type: '',
                start_time: '',
                end_time: '',
                surplus_days: '',
                sort: '',
                goods_status: 1,
            };
            this.fileList = [];
            this.fileList1 = [];
            this.fileList2 = [];
            this.imgList1=[];
            this.imgList2=[];
            this.dialogVisible = true;
        },
        //监听添加中的时间控件;
        date(){
            console.log(this.timeValue)
            this.formLabelAlign.start_time=this.timeValue[0];
            this.formLabelAlign.end_time=this.timeValue[1];
            if(Date.parse(this.formLabelAlign.start_time)<Date.parse(new Date())){
                this.$message({ message: "选择的有效期开始时间应该大于当前日期", type: "warning" });
                return;
            }
        },
        async handleClose() {
            //  添加/编辑
            if (this.formLabelAlign.goods_name == "") {
                this.$message({ message: "请輸入商品名称", type: "warning" });
                return;
            }
            if (this.formLabelAlign.goods_type == "") {
                this.$message({ message: "请选择商品类型", type: "warning" });
                return;
            }
            if (this.formLabelAlign.pic_url == "") {
                this.$message({ message: "请上传商品图片", type: "warning" });
                return;
            }
            if (this.formLabelAlign.goods_loop.length == 0) {
                this.$message({ message: "请上传商品轮播图", type: "warning" });
                return;
            }
            if(typeof(this.formLabelAlign.goods_loop) !== 'string'){
                this.formLabelAlign.goods_loop = JSON.stringify(this.formLabelAlign.goods_loop);
            }
            if (this.formLabelAlign.goods_details.length == 0) {
                this.$message({ message: "请上传商品详情图", type: "warning" });
                return;
            }
            if(typeof(this.formLabelAlign.goods_details) !== 'string'){
                this.formLabelAlign.goods_details = JSON.stringify(this.formLabelAlign.goods_details);
            }
            if (this.formLabelAlign.goods_rules == "") {
                this.$message({ message: "请输入商品規則", type: "warning" });
                return;
            }
            if(this.formLabelAlign.now_score == "" || !positiveInteger(this.formLabelAlign.now_score)){
                this.$message({ message: "兑换所需积分只能填写大于0的正整数", type: "warning" });
                return;
            }
            if (this.formLabelAlign.original_score == "" || !positiveInteger(this.formLabelAlign.original_score)) {
                this.$message({ message: "商品原有积分只能填写大于0的正整数", type: "warning" });
                return;
            }
            if (this.formLabelAlign.exchange_max_num === "" || !integer(this.formLabelAlign.exchange_max_num)) {
                this.$message({ message: "兑换上限只能填写正整数或者0", type: "warning" });
                return;
            }
            if (this.formLabelAlign.valid_type == "") {
                this.$message({ message: "请输入有效期类型", type: "warning" });
                return;
            }
            if(this.formLabelAlign.sort !== '' && !integer(this.formLabelAlign.sort)){
                this.$message({ message: "排序值请输入正整数或0~", type: "warning" });
                return;
            }
            if(this.formLabelAlign.sort !== ''){
                this.formLabelAlign.sort=parseInt(this.formLabelAlign.sort);
            }
            if(this.formLabelAlign.valid_type ==1 && this.timeValue == ""){
                this.$message({ message: "请选择有效期", type: "warning" });
                return;
            }
            if(this.formLabelAlign.valid_type ==2 && (this.formLabelAlign.surplus_days == "" || !positiveNum365(this.formLabelAlign.surplus_days))){
                this.$message({ message: "天数为1到365的整数", type: "warning" });
                return;
            }
            if(this.formLabelAlign.valid_type ==1){
                this.formLabelAlign.surplus_days='';
                this.formLabelAlign.start_time=this.timeValue[0];
                this.formLabelAlign.end_time=this.timeValue[1];
            }else if(this.formLabelAlign.valid_type ==2){
                this.formLabelAlign.surplus_days=parseInt(this.formLabelAlign.surplus_days);
                this.formLabelAlign.start_time="";
                this.formLabelAlign.end_time="";
            }
            if(this.formLabelAlign.valid_type){
                this.formLabelAlign.valid_type=parseInt(this.formLabelAlign.valid_type);
            }
            if(this.formLabelAlign.exchange_max_num){
                this.formLabelAlign.exchange_max_num=parseInt(this.formLabelAlign.exchange_max_num);
            }
            if(this.formLabelAlign.original_score){
                this.formLabelAlign.original_score=parseInt(this.formLabelAlign.original_score);
            }
            if(this.formLabelAlign.now_score){
                this.formLabelAlign.now_score=parseInt(this.formLabelAlign.now_score);
            }
            
            if(this.formLabelAlign.goods_status){
                this.formLabelAlign.goods_status=parseInt(this.formLabelAlign.goods_status);
            }
            
            let data;
            if (this.title === "添加") {
                data = await goodsAdd(this.formLabelAlign);
            } else {
                data = await goodsUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index(this.params);
                this.$message({ message: data.data.msg, type: "success" });
            }else{
                if(this.formLabelAlign.valid_type){
                    this.formLabelAlign.valid_type =parseFloat(this.formLabelAlign.valid_type);
                }
                if(this.formLabelAlign.sort){
                   this.formLabelAlign.sort =this.formLabelAlign.sort.toString() ;
                }
                if(this.formLabelAlign.surplus_days){
                   this.formLabelAlign.surplus_days =this.formLabelAlign.surplus_days.toString() ;
                }
                if(this.formLabelAlign.exchange_max_num){
                   this.formLabelAlign.exchange_max_num =this.formLabelAlign.exchange_max_num.toString() ;
                }
                if(this.formLabelAlign.original_score){
                   this.formLabelAlign.original_score =this.formLabelAlign.original_score.toString() ;
                }
                if(this.formLabelAlign.now_score){
                   this.formLabelAlign.now_score =this.formLabelAlign.now_score.toString() ;
                }
                if(this.formLabelAlign.goods_status){
                   this.formLabelAlign.goods_status =parseFloat(this.formLabelAlign.goods_status);
                }
            }
        },
        statusChange(id, val){ //  上架、下架、暂停兑换
            let title = '';
            if(val === 1){
                title = '上架';
            }else if(val ===2)
            {
                title = '下架';
            }else if(val ===3){
                title = '暂停兑换';
            }
            this.$confirm("将" + title + "此商品, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    changeStatus({id: id, goods_status: val}).then(data => {
                        if (data.code === 200) {
                            this.index();
                            this.$message({ message: title + '成功~', type: "success"});
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
            this.params.goods_name = "";
            this.params.goods_type = "";
            this.params.goods_status = "";
            this.index();
        },
        async detail(id){
            this.detailData =[];
            let data = await goodsDetails({id:id});
            if(data.code ==200){
                // console.log(data.data);
                this.detailData = data.data;
                if(this.detailData.goods_loop !== ""){
                    this.detailData.goods_loop= JSON.parse(this.detailData.goods_loop);
                }
                if(this.detailData.goods_details !== ""){
                    this.detailData.goods_details= JSON.parse(this.detailData.goods_details);
                }
                this.detailVisible= true;
            }
        }
    }
};
</script>
<style lang="less">
.el-dialog{
    .date{
        .el-radio+.el-radio{
        margin-left: 0;
        margin-top: 10px;
        }
    }
    
}

    
</style>