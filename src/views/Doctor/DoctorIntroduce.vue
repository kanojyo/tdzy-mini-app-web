
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-select v-model="params.scheduling_status" clearable size="mini" placeholder="预约状态">
                        <el-option v-for="item in status" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-date-picker
                        size="mini"
                        v-model="timeValue"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd HH:mm:ss"
                    ></el-date-picker>
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
                    <el-table-column align="center" label="医生头像">
                        <template slot-scope="scope">
                            <div>
                                <img :src="scope.row.avatar" class="img-width-50" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="name" label="医生姓名"></el-table-column>
                    <!-- <el-table-column align="center" prop="name" label="科室"></el-table-column>
                    <el-table-column align="center" prop="name" label="职位"></el-table-column> -->
                    <el-table-column align="center" label="预约状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.scheduling_status === 1">可预约</span>
                                <span class="color_red" v-else>不可预约</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="sort" label="排序值"></el-table-column>
                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.status === 1">正常</span>
                                <span class="color_red" v-else>下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="admin" label="创建人"></el-table-column>
                    <el-table-column align="center" prop="ctime" label="创建时间" width="180"></el-table-column>
                    <el-table-column align="center" label="操作" width="250px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" v-if="scope.row.scheduling_status === 2" @click="scheduleChange(scope.row.id, 1)">开启预约</span>
                                <span class="cursor color_red" v-if="scope.row.scheduling_status === 1" @click="scheduleChange(scope.row.id, 2)">关闭预约</span>&nbsp;
                                <span class="cursor color-f8494c" @click="edit(scope.row.id)">编辑</span>&nbsp;
                                <span class="cursor color-f8494c" v-if="scope.row.status === 2" @click="statusChange(scope.row.id, 1)">上架</span>
                                <span class="cursor color_red" v-if="scope.row.status === 1" @click="statusChange(scope.row.id, 2)">下架</span>&nbsp;
                                <span class="cursor color-f8494c" @click="preview(scope.row.id)">预览</span>
                                <span class="cursor color-f8494c" @click="paiban(scope.row.id)">排班设置</span>
                                <span class="cursor color-f8494c" @click="book(scope.row.id)">预约记录</span>
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
                        :page-size="params.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="count"
                    ></el-pagination>
                </div>
            </div>
        </div>
        <!-- 添加/编辑 -->
        <el-dialog :title="'首页医生介绍' + title" :visible.sync="dialogVisible" width="900px">
            <el-form label-width="120px" :model="formLabelAlign">
                <el-form-item label="* 医生头像">
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
                </el-form-item>
                <el-form-item label="* 医生名称">
                    <el-input v-model="formLabelAlign.name" placeholder="请输入医生名称"></el-input>
                    <span class="font_12">长度限制:2至10个英文,数字或汉字</span>
                </el-form-item>
                <el-form-item label="* 医生擅长">
                    <el-input v-model="formLabelAlign.brief" placeholder="请输入医生擅长"></el-input>
                    <span class="font_12">长度限制:为2~50字符</span>
                </el-form-item>
                <el-form-item label="医生科室">
                    <el-input v-model="formLabelAlign.office" placeholder="请输入医生科室"></el-input>
                    <span class="font_12">长度限制:2至10个英文,数字或汉字</span>
                </el-form-item>
                <el-form-item label="* 医生职位">
                    <el-input v-model="formLabelAlign.position" placeholder="请输入医生职位"></el-input>
                    <span class="font_12">长度限制:2至10个英文,数字或汉字</span>
                </el-form-item>
                <el-form-item label="* 医生标签">
                    <el-input v-model="formLabelAlign.remark" placeholder="请输入医生标签"></el-input>
                    <span class="font_12">每个标签用英文逗号分隔,标签内容为英文,数字或汉字，如：标签a,标签b</span>
                </el-form-item>
                <!-- <el-form-item label="* 医生资料链接">
                    <el-input v-model="formLabelAlign.link_url" placeholder="请输入医生资料链接"></el-input>
                </el-form-item> -->
                <!-- <el-form-item label="* 内容编辑">
                    <Ueditor :defaultMsg="defaultMsg" :id="id" ref="ue"></Ueditor>
                </el-form-item> -->
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
                <el-form-item label="排序值">
                    <el-input v-model="formLabelAlign.sort" placeholder="请输入排序值"></el-input>
                    <span class="font_12">排序值越高权重越大</span>
                </el-form-item>
                <el-form-item label="预约状态">
                    <el-select v-model="formLabelAlign.scheduling_status" clearable size="mini" placeholder="预约状态">
                        <el-option v-for="item in status" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态">
                    <el-switch v-model="formLabelAlign.status" :active-value="2" :inactive-value="1" active-text="下架" inactive-text="正常" active-color="#e4e4e4" inactive-color="#1ABC9C"></el-switch>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 文章预览 -->
        <el-dialog title="预览" :visible.sync="previewShow" width="980px">
            <div class="centens" v-for="(item,index) in previewImgList" v-key="index" style="font-size:0;">
                <img  :src="item" alt="">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="previewShow = false">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { doctorIndex, doctorSave, doctorUpdate, doctorInfo, doctorStatus, schedulingStatus} from "@/api/doctor.js";
import { uploadUrl } from "@/api/imageUrl.js";
import { integer } from "@/utils/validate.js";
import Ueditor from '@/components/Ueditor.vue';

export default {
    data() {
        return {
            params: {
                scheduling_status: "", //  查询状态 1：可预约，2：不可预约
                start_time:"",
                end_time:"",
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {   //  添加/编辑
                avatar: "",
                name: '',
                brief: '',
                office: '',
                position: '',
                remark: '',
                // link_url: '',
                sort: '',
                status: 1,
                scheduling_status:'',
                doctor_details:""  //医生简介内容
            },
            fileList: [],   //  附件容器
            uploadUrl: uploadUrl(), //  上传地址
            status: [{ type: 1, value: "可预约" }, { type: 2, value: "不可预约" }],    //  状态
            timeValue:"",
            defaultMsg: '', //  编辑器内容
            id: 'DoctorIntroduce', //  编辑器ID
            previewShow:false,
            detailsData:'',
            fileList2:[],
            dialogImageUrl:[],
            picList:[],
            previewImgList:[],
        };
    },
    components: {
        Ueditor,
    },
    mounted() {
        this.index();
    },
    methods: {
        async index() {
            //  主页列表数据
            let data = await doctorIndex(this.params);
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
            this.params.pageSize = val;
            this.index();
        },
        handleSuccess(file) {   //  上传附件
            if(file.code === 200){
                this.fileList = [
                    {name: file.data.originName, url: file.data.url}
                ];
                this.formLabelAlign.avatar = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.avatar = '';
            }
        },
        beforeAvatarUpload(file){   //  限制上传附件大小
            let size = file.size/1000/1024;
            if(size > 4){
                this.$message({ message: '图片大于4M，请重新上传~', type: "warning" });
                return false;
            }
        },
         handleSuccess2(file) {   //  上传附件
            if(file.code === 200){
                this.fileList2.push({url: file.data.url});
                this.picList.push(file.data.url);
                this.formLabelAlign.doctor_details = this.picList;
                console.log(this.formLabelAlign.doctor_details)
            }
        },
        handleRemove2(file, fileList2) {
            if(fileList2.length === 0){
                this.fileList2 = [];
                this.formLabelAlign.doctor_details='';
            }else{
                var list =[];
                fileList2.forEach(item=>{
                    list.push(item.url);
                });
                this.fileList2=fileList2;
                this.formLabelAlign.doctor_details =list;
                this.picList =list;
            }
        },
        // handlePictureCardPreview2(file) {
        //     this.dialogImageUrl = file.url;
        //     this.imgVisible = true;
        // },
        async edit(id) { //  编辑
            this.fileList2 = [];
            this.formLabelAlign.doctor_details='';
            this.title = "编辑";
            let data = await doctorInfo({id: id});
            if (data.code === 200) {
                this.formLabelAlign = data.data;
                this.fileList = [
                    {name: '', url: data.data.avatar}
                ];
                // this.defaultMsg=this.formLabelAlign.doctor_details;
                this.dialogVisible = true;
                if(this.formLabelAlign.doctor_details !== ""){
                    this.picList= JSON.parse(this.formLabelAlign.doctor_details);
                    this.picList.forEach(item => {
                        this.fileList2.push({url: item})
                    })
                }
                
            }
        },
        add() {
            this.title = "添加";
            this.formLabelAlign = {
                avatar: "",
                name: '',
                brief: '',
                office: '',
                position: '',
                remark: '',
                // link_url: '',
                doctor_details:'',
                sort: '',
                status: 1,
            };
            this.fileList = [];
            this.dialogVisible = true;
        },
        async handleClose() {
            //  添加/编辑
            if (this.formLabelAlign.avatar == "") {
                this.$message({ message: "请上传医生头像", type: "warning" });
                return;
            }
            if (this.formLabelAlign.name == "") {
                this.$message({ message: "请输入医生名称", type: "warning" });
                return;
            }
            if (this.formLabelAlign.brief == "") {
                this.$message({ message: "请输入医生擅长", type: "warning" });
                return;
            }
            if (this.formLabelAlign.position == "") {
                this.$message({ message: "请输入医生职位", type: "warning" });
                return;
            }
            if (this.formLabelAlign.remark == "") {
                this.$message({ message: "请输入医生标签", type: "warning" });
                return;
            }
            // if (this.formLabelAlign.link_url == "") {
            //     this.$message({ message: "请输入资料链接", type: "warning" });
            //     return;
            // }
            if(this.formLabelAlign.sort !== '' && !integer(this.formLabelAlign.sort)){
                this.$message({ message: "排序值请输入正整数或0~", type: "warning" });
                return;
            }
            // this.formLabelAlign.doctor_details = this.$refs.ue.getUEContent();
            if (this.formLabelAlign.doctor_details.length == 0) {
                this.$message({ message: "请上传图片", type: "warning" });
                return;
            }
            this.formLabelAlign.doctor_details = JSON.stringify(this.formLabelAlign.doctor_details);
            let data = "";
            if (this.title === "添加") {
                data = await doctorSave(this.formLabelAlign);
            } else {
                data = await doctorUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index(this.params);
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        statusChange(id, val){ //  上架、下架
            let title = '';
            if(val === 1){
                title = '上架';
            }else{
                title = '下架';
            }
            this.$confirm("此操作将" + title + "此医生, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    doctorStatus({id: id, status: val}).then(data => {
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
        async preview(id){    //  打开医生预览
            this.previewImgList='';
            let data = await doctorInfo({id: id});
            if (data.code === 200) {
                this.detailsData = data.data;
                this.previewShow = true;
                if(this.detailsData.doctor_details !==''){
                    this.previewImgList = JSON.parse(this.detailsData.doctor_details);
                }
            }
        },
        search() {
            //  检索
            this.params.page = 1;
            this.params.start_time=this.timeValue[0]
            this.params.end_time=this.timeValue[1]
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.status = "";
            this.timeValue="";
            this.params.start_time="",
            this.params.end_time="",
            this.index();
        },
        scheduleChange(id,val){
            let title = '';
            if(val === 1){
                title = '开启预约';
            }else{
                title = '关闭预约';
            }
            this.$confirm("此操作将" + title + ", 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    schedulingStatus({id: id, scheduling_status: val}).then(data => {
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
        paiban(id){
            this.$router.push({path:'Schedule',query:{doctor_id:id}});
        },
        book(id){
            this.$router.push({path:'BookingOrder',query:{doctor_id:id}});
        }
    }
};
</script>