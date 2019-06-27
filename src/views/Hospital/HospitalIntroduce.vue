
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
        </el-form>
        <div class="primary">
            <el-button type="primary" @click="withdrawChange">提 交</el-button>
        </div>
    </div>
</template>

<script type="text/javascript">
import { hospitalShow, hospitalUpdate } from "@/api/hospital.js";
import { uploadUrl } from "@/api/imageUrl.js";

export default {
    data() {
        return {
            formParams: {
                pic: '',
                link: '',
            },
            uploadUrl: uploadUrl(), //  上传附件地址
            fileList: [],   //  附件容器
        };
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
            }
        },
        async withdrawChange(){   //  提交设置
            if (this.formParams.pic == "") {
                this.$message({ message: "请上传医院介绍图片", type: "warning" });
                return;
            }
            this.formParams.id = 4
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
    }
};
</script>
<style type="text/css" scoped lang="less">
    .centens{
        width: 600px;
        padding: 50px;
        border: 1px solid #e2e2e2;
        .primary{
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }
    }
</style>