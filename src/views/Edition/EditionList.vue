
<template>
    <div class>
        <div class="operation">
            <div class="pull-right">
                <el-button icon="el-icon-circle-plus-outline" type="primary" size="mini" @click="add">添加</el-button>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="os_type" label="版本分类">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.os_type === 1">Android</span>
                                <span v-else>iOS</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="ver_num" label="版本号"></el-table-column>
                    <el-table-column align="center" prop="channel_id" label="渠道标识"></el-table-column>
                    <el-table-column align="center" prop="status" label="使用状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.status === 1">启用</span>
                                <span class="color_red" v-else>停用</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="admin_username" label="创建人"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" fixed="right" label="操作" width="250px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" @click="edit(scope.row.id)">编辑</span>&nbsp;
                                <span class="cursor color_red" v-if="scope.row.status === 1" @click="statusChange(scope.row.id, 2)">停用</span>
                                <span class="cursor color-f8494c" v-else @click="statusChange(scope.row.id, 1)">启用</span>&nbsp;
                                <span class="cursor color-f8494c" @click="detailsChange(scope.row.id)">详情</span>
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
        <el-dialog :title="title + '版本'" :visible.sync="dialogVisible" width="650px">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="* 版本分类">
                    <el-select v-model="formLabelAlign.os_type" clearable size="mini" placeholder="请选择版本">
                        <el-option v-for="item in version" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="* 版本号">
                    <el-input v-model="formLabelAlign.ver_num" clearable size="mini" placeholder="请输入版本号"></el-input>
                    <span>格式为:1.0.0</span>
                </el-form-item>
                <el-form-item label="* 下载地址">
                    <el-input v-model="formLabelAlign.file_url" clearable size="mini" placeholder="请输入下载地址"></el-input>
                </el-form-item>
                <el-form-item label="* 渠道标识">
                    <el-select v-model="formLabelAlign.channel_id" clearable size="mini" placeholder="请选择渠道标识">
                        <el-option v-for="item in channel" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="* 版本介绍">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        limit="1"
                        list-type="picture">
                        <el-button size="mini" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="* 描述">
                    <el-input v-model="formLabelAlign.description" type="textarea" :rows="2" clearable placeholder="请输入描述"></el-input>
                </el-form-item>
                <el-form-item label="* 生效时间">
                    <el-date-picker v-model="formLabelAlign.take_effect_at" clearable :picker-options="pickerOptions" type="datetime" size="mini" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </el-form-item>
                <el-form-item label="使用状态">
                    <el-switch v-model="formLabelAlign.status" :active-value="2" :inactive-value="1" active-text="停用" inactive-text="正常" active-color="#e4e4e4" inactive-color="#1ABC9C"></el-switch>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 查看详情 -->
        <el-dialog title="版本详情" :visible.sync="detailsShow" width="650px">
            <table class="ajun-table">
                <tr>
                    <td>版本分类</td>
                    <td v-if="formLabelAlign.os_type === 1">Android</td>
                    <td v-else>iOS</td>
                </tr>
                <!-- <tr>
                    <td>更新类型</td>
                    <td v-if="formLabelAlign.up_type === 1">普通更新</td>
                    <td v-else>强制更新</td>
                </tr> -->
                <tr>
                    <td>版本号</td>
                    <td>{{formLabelAlign.ver_num}}</td>
                </tr>
                <tr>
                    <td>版本介绍</td>
                    <td>
                        <img :src="formLabelAlign.ver_introduce" class="img-width-100" alt="">
                    </td>
                </tr>
                <tr>
                    <td>描述</td>
                    <td>{{formLabelAlign.description}}</td>
                </tr>
                <tr>
                    <td>生效时间</td>
                    <td>{{formLabelAlign.take_effect_at}}</td>
                </tr>
                <tr>
                    <td>状态</td>
                    <td v-if="formLabelAlign.status === 1">正常</td>
                    <td v-else>停用</td>
                </tr>
                <tr>
                    <td>创建人</td>
                    <td>{{formLabelAlign.admin_username}}</td>
                </tr>
                <tr>
                    <td>创建时间</td>
                    <td>{{formLabelAlign.created_at}}</td>
                </tr>
            </table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="detailsShow = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { version, versionStore, versionShow, versionUpdate } from "@/api/editionList.js";
import { uploadUrl } from "@/api/imageUrl.js";

export default {
    data() {
        return {
            params: {
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑 弹框
            formLabelAlign: {   //  添加/修改
                os_type: "",
                file_url: '',
                channel_id: '',
                ver_num: '',
                ver_introduce: '',
                description: '',
                take_effect_at: '',
                status: '',
            },
            fileList: [],   //  附件容器
            uploadUrl: uploadUrl(), //  上传地址
            version: [{type: 1, value: 'Android'}, {type: 2, value: 'iOS'}],    //  版本
            update: [{type: 1, value: '普通更新'}, {type: 2, value: '强制更新'}],    //   更新
            detailsShow: false, //  查看详情显示
            pickerOptions: {    //  大于当前时间
                disabledDate(time){
                    let _now = Date.now();
                    return time.getTime() < _now;
                }
            },
        };
    },
    computed: mapState({
        channel: (state) => state.selector.channel,   //   渠道
    }),
    mounted() {
        this.index();
    },
    methods: {
        async index() {
            //  主页列表数据
            let data = await version(this.params);
            if (data.code === 200) {
                if(data.data.data.length > 0){
                    data.data.data.forEach( (item) => {
                        this.channel.forEach( (val) => {
                            if(item.channel_id === val.type){
                                item.channel_id = val.value;
                            }
                        });
                    });
                }
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
        handleSuccess(file) {   //  上传附件
            if(file.code === 200){
                this.fileList = [
                    {name: file.data.originName, url: file.data.url}
                ];
                this.formLabelAlign.ver_introduce = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.ver_introduce = '';
            }
        },
        detailsChange(id){    //  查看版本详情
            this.details(id);
            this.detailsShow = true;
        },
        async details(id){    //  版本详情
            let data = await versionShow({id: id});
            if (data.code === 200) {
                this.formLabelAlign = data.data;
                this.fileList = [
                    {name: '', url: this.formLabelAlign.ver_introduce}
                ];
                this.formLabelAlign.id = id;
            }
        },
        edit(id) { //  编辑
            this.title = "编辑";
            this.details(id);
            this.dialogVisible = true;
        },
        add() {
            this.title = "添加";
            this.formLabelAlign = {   //  添加/修改
                os_type: "",
                file_url: '',
                channel_id: '',
                ver_num: '',
                ver_introduce: '',
                description: '',
                take_effect_at: '',
                status: 1,
            };
            this.fileList = [];
            this.dialogVisible = true;
        },
        async handleClose() {   //  添加/编辑
            if (this.formLabelAlign.os_type === "") {
                this.$message({ message: "请选择版本分类", type: "warning" });
                return;
            }
            if (this.formLabelAlign.ver_num == "") {
                this.$message({ message: "请输入版本号", type: "warning" });
                return;
            }
            if (this.formLabelAlign.file_url === "") {
                this.$message({ message: "请输入下载地址", type: "warning" });
                return;
            }
            if (this.formLabelAlign.channel_id === "") {
                this.$message({ message: "请选择渠道标识", type: "warning" });
                return;
            }
            if (this.formLabelAlign.ver_introduce == "") {
                this.$message({ message: "请上传版本介绍", type: "warning" });
                return;
            }
            if (this.formLabelAlign.description == "") {
                this.$message({ message: "请输入描述", type: "warning" });
                return;
            }
            if (this.formLabelAlign.take_effect_at == "") {
                this.$message({ message: "请选择生效时间", type: "warning" });
                return;
            }
            let data = "";
            if (this.title === "添加") {
                data = await versionStore(this.formLabelAlign);
            } else {
                data = await versionUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: this.title + '成功~', type: "success" });
            }
        },
        statusChange(id, val){ //  上架、下架
            let value;
            if(val === 1){
                value = '启用';
            }else{
                value = '停用';
            }
            this.$confirm("此操作将" + value + "此版本, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    versionUpdate({id: id, status: val}).then(data => {
                        if (data.code === 200) {
                            this.index();
                            this.$message({ message: value + '成功', type: "success"});
                        }
                    });
                })
                .catch(() => {
                    this.$message({ type: "info", message: "已取消操作" });
                });
        },
    }
};
</script>