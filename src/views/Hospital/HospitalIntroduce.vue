
<template>
    <div class="centens">
        <el-form label-width="150px" :model="formParams">
            <el-form-item label="* 医院介绍图片">
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
            <el-form-item label="跳转链接">
                <el-input v-model="formParams.link" clearable placeholder="请输入跳转链接"></el-input>
            </el-form-item>
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
             </el-form-item>
        </el-form>
        <div class="primary">
            <el-button type="primary" @click="withdrawChange">提 交</el-button>
        </div>
        <el-dialog title="图片查看" :visible.sync="dialogVisible" size="tiny" show-close="false">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { hospitalShow, hospitalUpdate } from "@/api/hospital.js";
import { uploadUrl } from "@/api/imageUrl.js";
import Ueditor from '@/components/Ueditor.vue';

export default {
    data() {
        return {
            formParams: {
                pic: '',
                link: '',
                details:[],
            },
            uploadUrl: uploadUrl(), //  上传附件地址
            fileList: [],   //  附件容器
            fileList2: [],   //  附件容器
            defaultMsg: '', //  编辑器内容
            id: 'HospitalIntroduce', //  编辑器ID
            dialogImageUrl:[],
            picList:[],
        };
    },
    components: {
        Ueditor,
    },
    mounted() {
        this.index();
    },
    methods: {
        async index(params) {
            //  主页列表数据
            let data = await hospitalShow({id: 4});
            if (data.code === 200) {
                this.formParams = data.data;
                this.fileList = [
                    {name: '', url: data.data.pic}
                ];
                if(this.formParams.details !== ""){
                    this.picList= JSON.parse(this.formParams.details);
                    this.picList.forEach(item => {
                        this.fileList2.push({url: item})
                    })
                }
                
            }
        },
        async withdrawChange(){   //  提交设置
            console.log(111)
            if (this.formParams.pic == "") {
                this.$message({ message: "请上传医院介绍图片", type: "warning" });
                return;
            }
            if (this.formParams.details.length == 0) {
                this.$message({ message: "请上传图片", type: "warning" });
                return;
            }
            this.formParams.details = JSON.stringify(this.formParams.details)
            this.formParams.id = 4;
            let data = await hospitalUpdate(this.formParams);
            if (data.code === 200) {
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        handleSuccess(file) {   //  上传附件
            if(file.code === 200){
                this.fileList = [
                    {name: file.data.originName, url: file.data.url}
                ];
                this.formParams.pic = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formParams.pic = '';
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
                this.formParams.details = this.picList;
            }
        },
        handleRemove2(file, fileList2) {
            if(fileList2.length === 0){
                this.fileList2 = [];
                this.formParams.details='';
            }else{
                var list =[];
                this.fileList2=fileList2;
                this.fileList2.forEach(item=>{
                    list.push(item.url);
                });
                this.picList =list;
                this.formParams.details =list;
            }
            
        },
        // handlePictureCardPreview2(file) {
        //     this.dialogImageUrl = file.url;
        //     this.dialogVisible = true;
        // }
    }
};
</script>
<style type="text/css" scoped lang="less">
    .centens{
        width: 1000px;
        height: 800px;
        padding: 20px 50px;
        border: 1px solid #e2e2e2;
        overflow-y:scroll;
        .primary{
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }
    }
</style>