
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input size="mini" v-model="params.source" placeholder="视频来源"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="状态">
                        <el-option v-for="item in type" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-input size="mini" v-model="params.title" placeholder="视频标题"></el-input>
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
                <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}" fit>
                    <el-table-column align="center" prop="id" label="ID" width="80px"></el-table-column>
                    <el-table-column align="center" prop="source" label="来源" width="150px"></el-table-column>
                    <el-table-column align="center" label="来源头像" width="100px">
                        <template slot-scope="scope">
                            <img :src="scope.row.source_img"  >
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="title" label="视频标题" ></el-table-column>
                    <el-table-column align="center"  label="视频图片" width="150px">
                        <template slot-scope="scope">
                            <img :src="scope.row.cover_img"  >
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="look_num" label="浏览数量" width="80px"></el-table-column>
                    <el-table-column align="center" prop="sort" label="排序值" width="100px"></el-table-column>
                    <el-table-column align="center"  label="状态" width="80px">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status ==1">
                                <span class="cursor color-f8494c">正常</span>
                            </div>
                            <div v-if="scope.row.status ==2">
                                <span class="cursor color_red">下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="admin" label="创建人" width="150px"></el-table-column>
                    <el-table-column align="center" prop="ctime" :formatter="formatDate" label="创建时间" width="200px"></el-table-column>
                    
                    <el-table-column align="center" label="操作" >
                        <template slot-scope="scope">
                            <div v-if="scope.row.status === 2">
                                <span class="cursor color-f8494c" v-if="menuData.start" @click="statusChange(scope.row.id, 1)">上架</span>
                                <span class="cursor color-f8494c" v-if="menuData.look" @click="preview(scope.row.video)">查看视频</span>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row.id)">编辑</span>
                            </div>
                            <div v-if="scope.row.status === 1">
                                <span class="cursor color_red" v-if="menuData.stop" @click="statusChange(scope.row.id, 2)">下架</span>
                                <span class="cursor color-f8494c" v-if="menuData.look" @click="preview(scope.row.video)">查看视频</span>
                                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row.id)">编辑</span>
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
        <el-dialog :title="title+'视频' " :visible.sync="dialogVisible" width="650px" :close-on-click-modal="false">
            <el-form label-width="120px" :model="formLabelAlign">
                <el-form-item label="* 视频标题">
                    <el-input v-model="formLabelAlign.title" placeholder="请输入视频标题" :maxlength="10"></el-input>
                    <span class="font_12">长度限制：1-10英文，数字或汉字</span>
                </el-form-item>
                <el-form-item label="* 视频主图">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :beforeUpload="beforeAvatarUpload"
                        :on-change="aaa"
                        limit="1"
                        list-type="picture">
                        <el-button size="mini" type="primary">点击上传</el-button>
                    </el-upload>
                    <span class="font_12">上传图片格式只能为JPG、PNG、JPEG,<span class="color_red">建议为690px*480px</span></span>
                </el-form-item>
                <el-form-item label="* 视频科普">
                    <el-upload  class="upload-demo" action=""
                            :http-request="fnUploadRequest"
                            :show-file-list="true"
                            :file-list="fileList3"
                            :limit=1
                            :on-success="handleVideoSuccess"
                            :on-remove="videoRemove"
                            :before-upload="beforeUploadVideo"
                            list-type="text">
                        <el-button size="mini" type="primary">点击上传</el-button>
                        <!-- <div class="el-upload__tip" slot="tip">上传视频文件，且不超过500mb</div> -->
                    </el-upload>
                </el-form-item>
                <el-form-item label="* 视频时长">
                    <el-input v-model="formLabelAlign.video_length" placeholder="请输入视频时长" ></el-input>
                    <span class="font_12">视频时长为秒做单位</span>
                </el-form-item>
                <el-form-item label="* 来源头像">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess2"
                        :on-remove="handleRemove2"
                        :file-list="fileList2"
                        :beforeUpload="beforeAvatarUpload"
                        limit="1"
                        list-type="picture">
                        <el-button size="mini" type="primary" >点击上传</el-button>
                    </el-upload>
                    <span class="font_12">上传图片格式只能为JPG、PNG、JPEG,最大为4M</span>
                </el-form-item>
                <el-form-item label="* 来源">
                    <el-input v-model="formLabelAlign.source" placeholder="请输入泰斗中医院" :maxlength="10"></el-input>
                    <span class="font_12">长度限制：1-10英文，数字或汉字</span>
                </el-form-item>
                <el-form-item label="排序值">
                    <el-input v-model="formLabelAlign.sort" placeholder="请输入排序值"></el-input>
                    <span class="font_12">排序值越大权重越大</span>
                </el-form-item>
                <el-form-item label="* 状态">
                    <el-radio-group v-model="formLabelAlign.status">
                        <el-radio v-for="item in status"   :key="item.type" :label="item.type" >{{item.value}}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 视频预览 -->
        <el-dialog title="视频预览" :visible.sync="previewShow" width="700px" :before-close="close" :close-on-click-modal="false">
            <video :src="previewVideo" style="width:100%;" controls="controls"></video>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import oss from '@/utils/oss.js'
import { video, videoStatus, videoDetails, videoUpdate} from "@/api/video.js";
import { uploadUrl } from "@/api/imageUrl.js";
import { integer, positiveInteger, positiveNum365 } from "@/utils/validate.js";
import { dateFtt } from "@/utils/index.js";

export default {
    data() {
        return {
            params: {
                source:"",
                status: 1, //   1:正常 2：下架
                title:'',
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {   //  添加/编辑
                id: '',
                title:'',
                cover_img: '',
                video:'',
                source_img: '',
                source: '',
                sort: '',
                status: 1,
            },
            fileList: [],   //  科室图标容器
            fileList2: [],   //  科室图片
            fileList3:[],//视频
            picList:[],
            uploadUrl: uploadUrl(), //  上传地址
            type:[{type: 1, value: "正常" }, {type: 2, value: "下架" }], //商品类型
            status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }],    //  状态
            previewShow:false,
            previewVideo:'',
            menuData:[], //权限控制Data
        };
    },
    computed: mapState({
        menu:state => state.login.menu,
    }),
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
                if(item.name =='视频'){
                item.data.forEach(it=>{
                    if(it.route_web =='/Video/video'){
                        this.menuData = it.role_arr;
                    }
                })
                }
            })
        },
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
            let data = await video(this.params);
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
         async fnUploadRequest(option) {
            oss.ossUploadFile(option)
        },
        // 视频上传
        beforeUploadVideo(file) {
            const isMP4 = file.type === 'video/mp4';
            if (!isMP4) {
                this.$message.error('上传的视频只能是Mp4格式!');
            }
            return isMP4
        },
        // 视频上传成功后
        handleVideoSuccess(response, file, fileList3) {
            // todo
            // console.log(response)
            if(response && response.res.statusCode === 200){
                var url=response.res.requestUrls[0]
                var str1 = url.split("?uploadId")[0];
                this.formLabelAlign.video=str1;
            }
        },
        //删除视频
        videoRemove(file, fileList3){
            this.formLabelAlign.video='';
        },
        handleSuccess(file) {   //  上传附件
            if(file.code === 200){
                this.fileList = [{name: file.data.originName, url: file.data.url}];
                this.formLabelAlign.cover_img = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.cover_img = '';
            }
        },
        handleSuccess2(file) {   //  上传附件
            if(file.code === 200){
                this.fileList2 = [{name: file.data.originName, url: file.data.url}];
                this.formLabelAlign.source_img = file.data.url;
            }
        },
        handleRemove2(file, fileList2) {  // 移除附件
            if(fileList2.length === 0){
                this.fileList2 = [];
                this.formLabelAlign.source_img = '';
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
            this.fileList = [];
            this.fileList2 = [];
            this.fileList3 = [];
            let data = await videoDetails({id: id});
            if (data.code === 200) {
                this.formLabelAlign = data.data;
                this.fileList = [
                    {name: '', url: data.data.cover_img}
                ];
                this.fileList2 = [
                    {name: '', url: data.data.source_img}
                ];
                this.fileList3 = [
                    {name: '', url: data.data.video}
                ];
                this.dialogVisible = true;
                this.formLabelAlign.video_length = this.formLabelAlign.video_length.toString();
            }
        },
        add() {  //添加
            this.title = "添加";
            this.formLabelAlign = {
                id: '',
                title:'',
                cover_img: '',
                video:'',
                source_img: '',
                source: '',
                sort: '',
                status: 1,
            };
            this.fileList = [];
            this.fileList2 = [];
            this.fileList3 = [];
            this.dialogVisible = true;
        },
        async handleClose() {
            //  添加/编辑
            if (this.formLabelAlign.title == "") {
                this.$message({ message: "请輸入视频标题", type: "warning" });
                return;
            }
            if (this.formLabelAlign.cover_img == "") {
                this.$message({ message: "请上传视频主图", type: "warning" });
                return;
            }
            if (this.formLabelAlign.video == "") {
                this.$message({ message: "请上传视频", type: "warning" });
                return;
            }
            if (this.formLabelAlign.video_length == "") {
                this.$message({ message: "请输入视频时长", type: "warning" });
                return;
            }
            if(!positiveInteger(this.formLabelAlign.video_length)){
              this.$message({ message: "视频时长必须为大于0的正整数", type: "warning" });
              return
            }
            if (this.formLabelAlign.source_img == "") {
                this.$message({ message: "请上传来源头像", type: "warning" });
                return;
            }
            if (this.formLabelAlign.source == "") {
                this.$message({ message: "请输入来源", type: "warning" });
                return;
            }
            // if(this.formLabelAlign.sort !== '' && !integer(this.formLabelAlign.sort)){
            //     this.$message({ message: "排序值请输入正整数或0~", type: "warning" });
            //     return;
            // }
            this.formLabelAlign.video_length = parseInt(this.formLabelAlign.video_length);
            let data = await videoUpdate(this.formLabelAlign);
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index(this.params);
                this.$message({ message: data.data.msg, type: "success" });
            }else{
                this.formLabelAlign.video_length = this.formLabelAlign.video_length.toString();
            }
        },
        statusChange(id, val){ //  上架、下架、暂停兑换
            let title = '';
            console.log(id,val)
            if(val === 1){
                title = '上架';
            }else if(val ===2)
            {
                title = '下架';
            }
            this.$confirm("将" + title + "此视频, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    videoStatus({id: id, status: val}).then(data => {
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
            this.previewVideo='';
            if(val !== ''){
                this.previewVideo=val;
            }
            this.previewShow=true;
        },
        close(){
            this.previewVideo='';
            this.previewShow=false;
        },
        search() {
            //  检索
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.source = "";
            this.params.status = "";
            this.params.title = "";
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