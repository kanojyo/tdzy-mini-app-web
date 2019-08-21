
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input size="mini" v-model="params.name" placeholder="科室"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.state" clearable size="mini" placeholder="状态">
                        <el-option v-for="item in type" :key="item.type" :label="item.value" :value="item.type" ></el-option>
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
                <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}" fit>
                    <el-table-column align="center" prop="id" label="ID" width="150px"></el-table-column>
                    <el-table-column align="center" prop="name" label="科室" width="150px"></el-table-column>
                    <el-table-column align="center" label="科室图标" width="100px">
                        <template slot-scope="scope">
                            <img :src="scope.row.office_img"  >
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="sort" label="排序值" width="150px"></el-table-column>
                    <el-table-column align="center"  label="状态" width="150px">
                        <template slot-scope="scope">
                            <div v-if="scope.row.state ==1">
                                <span class="cursor color-f8494c">正常</span>
                            </div>
                            <div v-if="scope.row.state ==2">
                                <span class="cursor color_red">下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="ctime" :formatter="formatDate" label="创建时间" width="300px"></el-table-column>
                    <el-table-column align="center" prop="admin"  label="创建人" ></el-table-column>
                    <el-table-column align="center" label="操作" >
                        <template slot-scope="scope">
                            <div v-if="scope.row.state === 2">
                                <span class="cursor color-f8494c" @click="statusChange(scope.row.id, 1)">上架</span>
                                <span class="cursor color-f8494c" @click="edit(scope.row.id)">编辑</span>
                                <span class="cursor color-f8494c" @click="preview(scope.row.office_details)">科室预览</span>
                            </div>
                            <div v-if="scope.row.state === 1">
                                <span class="cursor color_red" @click="statusChange(scope.row.id, 2)">下架</span>
                                <span class="cursor color-f8494c" @click="edit(scope.row.id)">编辑</span>
                                <span class="cursor color-f8494c" @click="preview(scope.row.office_details)">科室预览</span>
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
        <el-dialog :title="title+'科室' " :visible.sync="dialogVisible" width="650px" :close-on-click-modal="false">
            <el-form label-width="120px" :model="formLabelAlign">
                <!-- <el-form-item label="* ID">
                    <el-input v-model="formLabelAlign.id" placeholder="请输入ID" ></el-input>
                </el-form-item> -->
                <el-form-item label="* 科室">
                    <el-input v-model="formLabelAlign.name" placeholder="请输入科室" :maxlength="10"></el-input>
                </el-form-item>
                <el-form-item label="* 科室图标">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :beforeUpload="beforeAvatarUpload1"
                        limit="1"
                        list-type="picture">
                        <el-button size="mini" type="primary">点击上传</el-button>
                    </el-upload>
                    <span class="font_12">只可上传1个图标,上传图标格式只能为PNG,大小小于4M，建议为44*44px</span>
                </el-form-item>
                <el-form-item label="* 上传图片">
                    <el-upload
                        :action="uploadUrl"
                        list-type="picture-card"
                        :on-success="handleSuccess2"
                        :file-list="fileList2"
                        :beforeUpload="beforeAvatarUpload"
                        :on-remove="handleRemove2">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog title="图片查看" :visible.sync="imgVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="* 排序值">
                    <el-input v-model="formLabelAlign.sort" placeholder="请输入排序值"></el-input>
                </el-form-item>
                <el-form-item label="* 状态">
                    <el-radio-group v-model="formLabelAlign.state">
                        <el-radio v-for="item in status"   :key="item.type" :label="item.type" >{{item.value}}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 文章预览 -->
        <el-dialog title="预览" :visible.sync="previewShow" width="980px" :close-on-click-modal="false">
            <div class="centens" v-for="(item,index) in  " v-key="index" style="font-size:0;">
                <img  :src="item" alt="">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="previewShow = false">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { office, officeUpdate, officeState, officeDetail} from "@/api/office.js";
import { uploadUrl } from "@/api/imageUrl.js";
import { integer, positiveInteger, positiveNum365 } from "@/utils/validate.js";
import { dateFtt } from "@/utils/index.js";

export default {
    data() {
        return {
            params: {
                name:"",
                state: 1, //   1:正常 2：下架
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {   //  添加/编辑
                id: '',
                name: '',
                office_img: '',
                office_details: '',
                sort: '',
                state: 1,
            },
            fileList: [],   //  科室图标容器
            fileList2: [],   //  科室图片
            picList:[],
            uploadUrl: uploadUrl(), //  上传地址
            type:[{type: 1, value: "正常" }, {type: 2, value: "下架" }], //商品类型
            status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }],    //  状态
            previewShow:false,
            previewImgList:[],
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        //时间戳转时间
        formatDate(row, column) {
            let date = new Date(parseInt(row.ctime) * 1000);
            let Y = date.getFullYear() + '-';
            let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
            let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
            let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
            let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return Y + M + D + h + m + s;
        },
        async index() {
            //  主页列表数据
            let data = await office(this.params);
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
                this.formLabelAlign.office_img = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.office_img = '';
            }
        },
        handleSuccess2(file) {   //  上传附件
            if(file.code === 200){
                this.fileList2.push({url: file.data.url});
                this.picList.push(file.data.url);
                this.formLabelAlign.office_details = this.picList;
            }
        },
        handleRemove2(file, fileList2) {
            if(fileList2.length === 0){
                this.fileList2 = [];
                this.picList=[];
                this.formLabelAlign.office_details='';
            }else{
                var list =[];
                fileList2.forEach(item=>{
                    list.push(item.url);
                });
                this.fileList2=fileList2;
                this.formLabelAlign.office_details =list;
                this.picList =list;
            }
        },
        beforeAvatarUpload(file){   //  限制上传附件大小
            const isJPG = file.type === 'image/jpg';
            const isJPEG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt4M = file.size / 1024 / 1024 <= 4;
            if (!isJPG && !isJPEG && !isPNG) {
                this.$message.error('上传头像图片只能是 jpg,png,jpeg 格式!');
            }
            if (!isLt4M) {
                this.$message.error('上传头像图片大小不能超过 4MB!');
            }
            return (isJPG || isJPEG || isPNG) && isLt4M
        },
        beforeAvatarUpload1(file){   //  限制科室图片大小
            const isPNG = file.type === 'image/png';
            const isLt4M = file.size / 1024 / 1024 <= 4;
            if (!isPNG) {
                this.$message.error('上传头像图片只能是png格式!');
            }
            if (!isLt4M) {
                this.$message.error('上传头像图片大小不能超过 4MB!');
            }
            return isPNG && isLt4M
        },
        async edit(id) { //  编辑
            this.title = "编辑";
            this.fileList = [];
            this.fileList2 = [];
            let data = await officeDetail({id: id});
            if (data.code === 200) {
                this.formLabelAlign = data.data;
                this.fileList = [{name: '', url: data.data.office_img}];
                // if(this.formLabelAlign.sort){
                //    this.formLabelAlign.sort =this.formLabelAlign.sort.toString() ;
                // }
                if(this.formLabelAlign.office_details !== ""){
                    this.picList= JSON.parse(this.formLabelAlign.office_details);
                    this.picList.forEach(item => {
                        this.fileList2.push({url: item})
                    })
                }
                this.dialogVisible = true;
            }
        },
        add() {  //添加
            this.title = "添加";
            this.formLabelAlign = {
                id: '',
                name: '',
                office_img: '',
                office_details: '',
                sort: '',
                state: 1,
            };
            this.fileList = [];
            this.dialogVisible = true;
        },
        async handleClose() {
            //  添加/编辑
            // if (this.formLabelAlign.id == "") {
            //     this.$message({ message: "请輸入科室id", type: "warning" });
            //     return;
            // }
            if (this.formLabelAlign.name == "") {
                this.$message({ message: "请选择科室名称", type: "warning" });
                return;
            }
            if (this.formLabelAlign.office_img == "") {
                this.$message({ message: "请上传科室图标", type: "warning" });
                return;
            }
            if (this.formLabelAlign.office_details == "") {
                this.$message({ message: "请上传科室图片", type: "warning" });
                return;
            }
            if(this.formLabelAlign.sort !== '' && !integer(this.formLabelAlign.sort)){
                this.$message({ message: "排序值请输入正整数或0~", type: "warning" });
                return;
            }
            // if(this.formLabelAlign.sort !== ''){
            //     this.formLabelAlign.sort=parseInt(this.formLabelAlign.sort);
            // }
            if(typeof(this.formLabelAlign.office_details) !== 'string'){
                this.formLabelAlign.office_details = JSON.stringify(this.formLabelAlign.office_details);
            }
            let data;
            if (this.title === "添加") {
                data = await officeUpdate(this.formLabelAlign);
            } else {
                data = await officeUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index(this.params);
                this.$message({ message: data.data.msg, type: "success" });
            }else{
                // if(this.formLabelAlign.sort){
                //    this.formLabelAlign.sort =this.formLabelAlign.sort.toString() ;
                // }
            }
        },
        statusChange(id, val){ //  上架、下架、暂停兑换
            let title = '';
            if(val === 1){
                title = '上架';
            }else if(val ===2)
            {
                title = '下架';
            }
            this.$confirm("将" + title + "此科室, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    officeState({id: id, state: val}).then(data => {
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
        async preview(val){    //  打开医生预览
            this.previewImgList='';
            if(val !== ''){
                this.previewImgList=JSON.parse(val);
            }
            this.previewShow=true;
        },
        search() {
            //  检索
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.name = "";
            this.params.state = "";
            this.index();
        },
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