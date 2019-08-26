
<template>
  <div class>
    <div class="operation">
      <div class="pull-left">
        <div class="input">
          <el-select v-model="params.status" clearable size="mini" placeholder="分类状态">
            <el-option
              v-for="item in status"
              :key="item.type"
              :label="item.value"
              :value="item.type"
            ></el-option>
          </el-select>
        </div>
        <div class="input">
          <el-date-picker
            size="mini"
            v-model="timeValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-M-d"
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
        <el-button icon="el-icon-circle-plus-outline" v-if="menuData.add" type="primary" size="mini" @click="add">添加</el-button>
      </div>
    </div>
    <div class="table">
      <div class="table-list">
        <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}">
          <el-table-column align="center" prop="id" label="ID"></el-table-column>
          <el-table-column align="center" label="轮播图图片">
            <template slot-scope="scope">
              <div>
                <img :src="scope.row.pic" class="img-width-50" alt>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="link" label="链接地址"></el-table-column>
          <el-table-column align="center" label="状态">
            <template slot-scope="scope">
              <div>
                <span class="color-f8494c" v-if="scope.row.status === 1">正常</span>
                <span class="color_red" v-else>下架</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="admin_username" label="创建人"></el-table-column>
          <el-table-column align="center" prop="sort" label="排序"></el-table-column>
          <el-table-column align="center" prop="created_at" label="创建时间" width="180"></el-table-column>
          <el-table-column align="center" label="操作" width="250px">
            <template slot-scope="scope">
              <div>
                <span class="cursor color-f8494c" v-if="menuData.edit" @click="edit(scope.row.id)">编辑</span>&nbsp;
                <span
                  class="cursor color-f8494c"
                  v-if="scope.row.status === 2 && menuData.start"
                  @click="statusChange(scope.row.id, 1)"
                >上架</span>
                <span
                  class="cursor color_red"
                  v-if="scope.row.status === 1 && menuData.stop"
                  @click="statusChange(scope.row.id, 2)"
                >下架</span>&nbsp;
                <span class="cursor color-f8494c" v-if="menuData.review" @click="target(scope.row.link)">预览</span>
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
    <el-dialog :title="'首页轮播图' + title" :visible.sync="dialogVisible" width="450px" :close-on-click-modal="false">
      <el-form label-width="100px" :model="formLabelAlign">
        <el-form-item label="* 轮播图图片">
          <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :file-list="fileList"
            :beforeUpload="beforeAvatarUpload"
            limit="1"
            list-type="picture"
          >
            <el-button size="mini" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="formLabelAlign.link" placeholder="请输入链接"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="formLabelAlign.description" placeholder="描述信息不能超过20字" :maxlength=20></el-input>
        </el-form-item>
        <el-form-item label="排序值">
          <el-input v-model="formLabelAlign.sort" placeholder="请输入排序值"></el-input>
          <span class="font_12">排序值越高权重越大</span>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="formLabelAlign.status"
            :active-value="2"
            :inactive-value="1"
            active-text="下架"
            inactive-text="正常"
            active-color="#e4e4e4"
            inactive-color="#1ABC9C"
          ></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import {
  slideIndex,
  slideUpdate,
  slideStore,
  slideShow
} from "@/api/slideshow.js";
import { uploadUrl } from "@/api/imageUrl.js";
import { integer } from "@/utils/validate.js";

export default {
  data() {
    return {
      params: {
        status: 1, //  查询状态 1：正常，2：下架
        start_time:'',
        end_time:'',
        page: 1, //  分页
        pageSize: 30 //    每页显示条数
      },
      count: 0, //	总数据
      list: [], //	    列表数据
      title: "", //  添加/编辑
      dialogVisible: false, //	添加/编辑公司 弹框
      formLabelAlign: {
        //  添加/编辑
        pic: "",
        link: "",
        sort: "",
        description:"",
        status: 1
      },
      fileList: [], //  附件容器
      uploadUrl: uploadUrl(), //  上传地址
      status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }], //  状态
      timeValue:'',
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
        if(item.name =='轮播图'){
          item.data.forEach(it=>{
            if(it.route_web =='/Slideshow/HomeSlideshow'){
                this.menuData = it.role_arr;
            }
          })
        }
      })
    },
    async index() {
      //  主页列表数据
      let data = await slideIndex(this.params);
      if (data.code === 200) {
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
    handleSuccess(file) {
      //  上传附件
      if (file.code === 200) {
        this.fileList = [{ name: file.data.originName, url: file.data.url }];
        this.formLabelAlign.pic = file.data.url;
      }
    },
    handleRemove(file, fileList) {
      // 移除附件
      if (fileList.length === 0) {
        this.fileList = [];
        this.formLabelAlign.pic = "";
      }
    },
    beforeAvatarUpload(file) {
      //  限制上传附件大小
      let size = file.size / 1000 / 1024;
      if (size > 4) {
        this.$message({ message: "图片大于4M，请重新上传~", type: "warning" });
        return false;
      }
    },
    async edit(id) {
      //  编辑
      this.title = "编辑";
      let data = await slideShow({ id: id });
      if (data.code === 200) {
        this.formLabelAlign = data.data;
        this.fileList = [{ name: "", url: data.data.pic }];
        this.dialogVisible = true;
      }
    },
    add() {
      //  添加
      this.title = "添加";
      this.formLabelAlign = {
        pic: "",
        link: "",
        sort: "",
        status: 1
      };
      this.fileList = [];
      this.dialogVisible = true;
    },
    async handleClose() {
      //  添加/编辑
      if (this.formLabelAlign.pic == "") {
        this.$message({ message: "请上传轮播图图片", type: "warning" });
        return;
      }
      if (
        this.formLabelAlign.sort !== "" &&
        !integer(this.formLabelAlign.sort)
      ) {
        this.$message({ message: "排序值请输入正整数或0~", type: "warning" });
        return;
      }
      let data = "";
      if (this.title === "添加") {
        data = await slideStore(this.formLabelAlign);
      } else {
        data = await slideUpdate(this.formLabelAlign);
      }
      if (data.code === 200) {
        this.dialogVisible = false;
        this.index(this.params);
        this.$message({ message: data.data.msg, type: "success" });
      }
    },
    statusChange(id, val) {
      //  上架、下架
      let title = "";
      if (val === 1) {
        title = "上架";
      } else {
        title = "下架";
      }
      this.$confirm("此操作将" + title + "此轮播图, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          slideUpdate({ id: id, status: val }).then(data => {
            if (data.code === 200) {
              this.index();
              this.$message({ message: title + "成功~", type: "success" });
            }
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消操作~" });
        });
    },
    target(url) {
      //  打开轮播图
      window.open(url);
    },
    search() {
      //  检索
      this.params.start_time = this.timeValue[0];
      this.params.end_time = this.timeValue[1];
      this.params.page = 1;
      this.index();
    },
    empty() {
      //  清空删选条件
      this.params.status = "";
      this.timeValue="";
      this.index();
    }
  }
};
</script>