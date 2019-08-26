
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.title" clearable size="mini" placeholder="公告标题"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="公告状态">
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
                <el-table :data="list" border height="700" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="title" label="公告标题" width="180px"></el-table-column>
                    <el-table-column align="center" prop="status" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.status === 1">正常</span>
                                <span class="color_red" v-else>下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="admin" label="创建人" width="100px"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="publish_at" label="发布时间" width="180px"></el-table-column>
                    <el-table-column align="center" label="操作" width="250px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" v-if="scope.row.status === 1 && menuData.edit" @click="edit(scope.row)">编辑</span>&nbsp;
                                <span class="cursor color-f8494c" v-if="scope.row.status === 1 && menuData.back" @click="withdraw(scope.row.id)">撤回</span>&nbsp;
                                <span class="cursor color-f8494c" v-if="menuData.details" @click="details(scope.row)">详情</span>
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
        <el-dialog :title="title" :visible.sync="dialogVisible" width="450px" :close-on-click-modal="false">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="* 公告封面">
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
                <el-form-item label="* 公告标题">
                    <el-input v-model="formLabelAlign.title" clearable placeholder="请输入公告标题" maxlength="30"></el-input>
                    <span class="font_12">1至30字符或汉字</span>
                </el-form-item>
                <el-form-item label="* 公告链接">
                    <el-input v-model="formLabelAlign.link_url" clearable placeholder="请输入公告链接"></el-input>
                </el-form-item>
                <el-form-item label="* 发布时间">
                    <el-date-picker v-model="formLabelAlign.publish_at" clearable :picker-options="pickerOptions" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
                    <span class="font_12">发布时间必须大于当前时间</span>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 撤回 -->
        <el-dialog title="撤回" :visible.sync="withdrawShow" width="450px" :close-on-click-modal="false">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="* 撤回原因">
                    <el-input v-model="withdrawFrom.withdraw_reason" clearable placeholder="请输入撤回原因"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="withdrawShow = false">取 消</el-button>
                <el-button type="primary" @click="withdrawChange">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 查看详情 -->
        <el-dialog title="公告详情" :visible.sync="detailsShow" width="980px" :close-on-click-modal="false">
            <table class="ajun-table">
                <tr>
                    <td>公告标题</td>
                    <td>{{detailsData.title}}</td>
                </tr>
                <tr>
                    <td>封面</td>
                    <td >
                        <img :src="detailsData.cover" alt="" style="width: 200px;height: 100px;">
                    </td>
                </tr>
                <tr>
                    <td>链接</td>
                    <td class="cursor color-f8494c" @click="open(detailsData.link_url)">点我查看</td>
                </tr>
                <tr>
                    <td>状态</td>
                    <td v-if="detailsData.status === 1">正常</td>
                    <td v-else>下架</td>
                </tr>
                <tr>
                    <td>创建人</td>
                    <td>{{detailsData.admin}}</td>
                </tr>
                <tr>
                    <td>创建时间</td>
                    <td>{{detailsData.created_at}}</td>
                </tr>
                <tr>
                    <td>发布时间</td>
                    <td>{{detailsData.publish_at}}</td>
                </tr>
                <tr>
                    <td>撤回人</td>
                    <td>{{detailsData.withdraw_er}}</td>
                </tr>
                <tr>
                    <td>撤回时间</td>
                    <td>{{detailsData.withdraw_at}}</td>
                </tr>
                <tr>
                    <td>撤回原因</td>
                    <td>{{detailsData.withdraw_reason}}</td>
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
import { announcementIndex, announcementInfo, authenticateUpdate, authenticateAdd, authenticateWithdraw } from "@/api/operate.js";
import { uploadUrl } from "@/api/imageUrl.js";

export default {
    data() {
        return {
            params: {
                title: "", //  公告标题
                status: 1, //  状态值，1正常 2下架，不传代表查询所有
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {
                //  添加/删除
                cover: '',
                title: "",
                link_url: "",
                publish_at: '',
            },
            fileList: [],   //  附件容器
            uploadUrl: uploadUrl(), //  上传地址
            status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }],   //  状态值
            pickerOptions: {    //  大于当前时间
                disabledDate(time){
                    let _now = Date.now();
                    return time.getTime() < _now;
                }
            },
            withdrawFrom: {
                id: '',
                withdraw_reason: ''
            },
            withdrawShow: false,    //  撤回显示隐藏
            detailsShow: false, //  查看详情
            detailsData: '',    //  详情数据
            menuData:[], //权限控制Data
        };
    },
    computed: mapState({
        menu:(state) => state.login.menu,
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
                if(item.name =='运营'){
                    item.data.forEach(it=>{
                        if(it.route_web =='/Operate/AnnouncementManagement'){
                            this.menuData = it.role_arr;
                        }
                    })
                }
            })
        },
        async index() {
            //  主页列表数据
            let data = await announcementIndex(this.params);
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
                this.formLabelAlign.cover = file.data.url;
            }
        },
        handleRemove(file, fileList) {  // 移除附件
            if(fileList.length === 0){
                this.fileList = [];
                this.formLabelAlign.cover = '';
            }
        },
        beforeAvatarUpload(file){   //  限制上传附件大小
            let size = file.size/1000/1024;
            if(size > 4){
                this.$message({ message: '图片大于4M，请重新上传~', type: "warning" });
                return false;
            }
        },
        edit(row) {
            //  编辑
            this.title = "编辑";
            this.announcementGet(row.id);
            this.dialogVisible = true;
        },
        add() {
            //  添加
            this.title = "添加";
            delete this.formLabelAlign.id;
            this.formLabelAlign.title = '';
            this.formLabelAlign.cover = '';
            this.formLabelAlign.link_url = '';
            this.formLabelAlign.publish_at = '';
            this.fileList = [];
            this.dialogVisible = true;
        },
        async handleClose() {
        //     //  添加/编辑
            if (this.formLabelAlign.cover === "") {
                this.$message({ message: "请上传封面图", type: "warning" });
                return;
            }
            if (this.formLabelAlign.title === "") {
                this.$message({ message: "请输入标题", type: "warning" });
                return;
            }
            if (this.formLabelAlign.link_url === "") {
                this.$message({ message: "请输入链接", type: "warning" });
                return;
            }
            if (this.formLabelAlign.publish_at === "") {
                this.$message({ message: "请选择时间", type: "warning" });
                return;
            }
            let data = "";
            if (this.title === "添加") {
                data = await authenticateAdd(this.formLabelAlign);
            } else {
                data = await authenticateUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: this.title + '成功', type: "success" });
            }
        },
        async announcementGet(id){  //  获取公告详情
            let data = await announcementInfo({id: id});
            if (data.code === 200) {
                this.detailsData = data.data;
                this.formLabelAlign.id = id;
                this.formLabelAlign.title = data.data.title;
                this.formLabelAlign.cover = data.data.cover;
                this.formLabelAlign.link_url = data.data.link_url;
                this.formLabelAlign.publish_at = data.data.publish_at;
                this.fileList = [
                        {name: '', url: data.data.cover}
                    ];
                
            }
        },
        withdraw(id){   //  撤回显示
            this.withdrawFrom.id = id;
            this.withdrawFrom.withdraw_reason = '';
            this.withdrawShow = true;
        },
        withdrawChange(){   //  撤回提交
            if (this.withdrawFrom.withdraw_reason === "") {
                this.$message({ message: "请输入撤回原因", type: "warning" });
                return;
            }
            this.$confirm("此操作将撤回此公告, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    authenticateWithdraw(this.withdrawFrom).then(data => {
                        if (data.code === 200) {
                            this.index();
                            this.withdrawShow = false;
                            this.$message({ message: '撤回成功', type: "success"});
                        }
                    });
                })
                .catch(() => {
                    this.$message({ type: "info", message: "已取消操作~" });
                });
        },
        details(row){    //  查看详情
            this.announcementGet(row.id);
            this.detailsShow = true;
        },
        search() {
            //  检索
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.title = "";
            this.params.status = "";
            this.index();
        },
        open(url){ //  点我查看 url必须带http://
            window.open(url);
        },
    }
};
</script>