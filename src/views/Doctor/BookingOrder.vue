
<template>
  <div class>
    <div class="info" v-if="params.doctor_id">
      <div class="left">
        <div class="avatar">
          <img :src="doctorInfo.avatar" alt>
        </div>
        <div class="text">
          <p>姓名:{{doctorInfo.name}}</p>
          <p>职位:{{doctorInfo.position}}</p>
          <p>科室:{{doctorInfo.office}}</p>
        </div>
      </div>
      <div class="right">
        <p>预约总数量:{{doctorInfo.order_sale_num}}</p>
        <p>实际预约数:{{doctorInfo.order_use_num}}</p>
      </div>
    </div>
    <div class="operation">
      <div class="pull-left">
        <div class="input">
          <el-input size="mini" v-model="params.appointment_code" placeholder="请输入预约编号"></el-input>
        </div>
        <div class="input">
          <el-input size="mini" v-model="params.name" placeholder="请输入预约人姓名"></el-input>
        </div>
        <div class="input">
          <el-input size="mini" v-model="params.mobile" placeholder="请输入预约人手机号"></el-input>
        </div>
        <div class="input">
          <el-select v-model="params.status" clearable size="mini" placeholder="预约状态">
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
    </div>
    <div class="table">
      <div class="table-list">
        <el-table :data="list" border height="650" :header-cell-style="{background:'#f3f3f3'}">
          <el-table-column align="center" prop="id" label="ID" width="50px"></el-table-column>
          <el-table-column align="center" prop="appointment_code" label="预约编号"></el-table-column>
          <el-table-column align="center" prop="name" label="预约人姓名"></el-table-column>
          <el-table-column align="center" prop="mobile" label="手机号"></el-table-column>
          <el-table-column align="center" prop="order_time" label="预约日期" width="110px"></el-table-column>
          <el-table-column align="center" label="时间段" width="150px">
            <template slot-scope="scope">
              <div>
                <span>{{scope.row.time_slot|timeSlot}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="就诊状态" width="75px">
            <template slot-scope="scope">
              <div>
                <span class="cursor color-f8494c" v-if="scope.row.status === 1">未就诊</span>
                <span class="cursor color-f8494c" v-if="scope.row.status === 2">已就诊</span>
                <span class="cursor color_red" v-if="scope.row.status === 3">已取消</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="order_money" label="预约挂号费用" width="75px"></el-table-column>
          <el-table-column align="center" label="确认就诊时间" width="110px">
            <template slot-scope="scope">
              <div>
                <span
                  class="cursor color-f8494c"
                  v-if="scope.row.status === 2"
                >{{scope.row.handle_at}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="已取消时间" width="110px">
            <template slot-scope="scope">
              <div>
                <span
                  class="cursor color-f8494c"
                  v-if="scope.row.status === 3"
                >{{scope.row.handle_at}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="handle_at" label="操作时间" width="110px"></el-table-column>
          <el-table-column align="center" prop="doctor_name" label="医生姓名"></el-table-column>
          <el-table-column align="center" label="医生头像">
            <template slot-scope="scope">
              <div style="width:60px;">
                <img :src="scope.row.avatar" alt>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="office" label="科室"></el-table-column>
          <el-table-column align="center" prop="created_at" label="创建时间" width="110px"></el-table-column>
          <el-table-column align="center" label="操作" width="150px">
            <template slot-scope="scope">
              <div v-if="scope.row.status ===1">
                <span class="cursor color-f8494c" @click="confirmPop(scope.row)">确认就诊</span>
                <span class="cursor color_red" @click="cancelPop(scope.row.id)">取消预约</span>
                <span class="cursor color-f8494c" @click="detailPop(scope.row.id)">预约详情</span>
                <span class="cursor color-f8494c" @click="logPop(scope.row.id)">操作日志</span>
              </div>
              <div v-else>
                <span class="cursor color-f8494c" @click="detailPop(scope.row.id)">预约详情</span>
                <span class="cursor color-f8494c" @click="logPop(scope.row.id)">操作日志</span>
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
    <!-- 取消预约 -->
    <el-dialog title="确认取消" :visible.sync="cancelVisible" width="650px">
      <el-form label-width="60px">
        <el-form-item label="* 备注">
          <el-input
            type="textarea"
            v-model="cancelParams.remarks"
            placeholder="请输入备注"
            :maxlength="100"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelVisible = false">取 消</el-button>
        <el-button type="primary" @click="cancel">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 确认就诊or预约详情 -->
    <el-dialog :title="title" :visible.sync="editVisible" width="650px">
      <table class="ajun-table">
        <tr>
          <td>预约编号</td>
          <td>{{info.appointment_code}}</td>
        </tr>
        <tr>
          <td>预约人姓名</td>
          <td>{{info.name}}</td>
        </tr>
        <tr>
          <td>手机号</td>
          <td>{{info.mobile}}</td>
        </tr>
        <tr v-if="title == '确认就诊'">
          <td>预约就诊时间</td>
          <td>{{info.order_time}} {{info.time_slot|timeSlot}}</td>
        </tr>
        <!-- <tr v-else>
						<td>预约就诊时间</td>
                        <td>{{info.created_at}} </td>
        </tr>-->
        <tr v-if="title == '确认就诊'">
          <td>确认就诊时间</td>
          <td>
            <el-date-picker
              v-model="info.handle_at"
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </td>
        </tr>
        <tr v-if="info.status == 2">
          <td>确认就诊时间</td>
          <td>{{info.handle_at}}</td>
        </tr>
        <tr v-if="info.status == 3">
          <td>已取消时间</td>
          <td>{{info.handle_at}}</td>
        </tr>
        <tr v-if="info.status == 4">
          <td>已失效时间</td>
          <td>{{info.handle_at}}</td>
        </tr>
        <tr v-if="title == '确认就诊'">
          <td>* 备注</td>
          <td>
            <el-input type="textarea" v-model="info.remarks" placeholder="请输入备注" :maxlength="100"></el-input>
          </td>
        </tr>
        <tr v-else>
          <td>备注</td>
          <td>{{info.remarks}}</td>
        </tr>
      </table>
      <span slot="footer" class="dialog-footer" v-if="title == '确认就诊'">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 预约操作日志列表 -->
    <el-dialog title="操作日志" :visible.sync="logVisible" width="850px">
      <div class="table">
        <div class="table-list">
          <el-table :data="logList" border height="550" :header-cell-style="{background:'#f3f3f3'}">
            <el-table-column align="center" prop="id" label="ID"></el-table-column>
            <el-table-column align="center" prop="admin_name" label="操作人"></el-table-column>
            <el-table-column align="center" prop="admin_at" label="操作时间" width="200px"></el-table-column>
            <el-table-column align="center" prop="log_content" label="操作内容" width="300px"></el-table-column>
          </el-table>
        </div>
        <div class="table-peg">
          <div class="pull-left"></div>
          <div class="pull-right">
            <el-pagination
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
              :current-page="logParams.page"
              :page-sizes="[30, 50, 100]"
              :page-size="logParams.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="logCount"
            ></el-pagination>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logVisible = false">取 消</el-button>
        <el-button type="primary" @click="logVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import {
  appointmentList,
  appointmentConfirm,
  appointmentCancel,
  appointmentInfo,
  appointmentLog
} from "@/api/doctor.js";
import router from "@/router";
export default {
  data() {
    return {
      params: {
        doctor_id: "",
        user_id: "",
        status: "",
        name: "",
        start_time: "",
        end_time: "",
        appointment_code: "",
        mobile: "",
        page: 1, //  分页
        pageSize: 30 //    每页显示条数
      },
      count: 0, //	总数据
      list: [], //	    列表数据
      status: [
        { type: 1, value: "未就诊" },
        { type: 2, value: "已就诊" },
        { type: 3, value: "已取消" },
        { type: 4, value: "已失效" }
      ], //  状态
      timeValue: "",
      doctorInfo: {},
      info: {},
      cancelVisible: false, //确认取消状态
      editVisible: false, //修改dialog状态
      title: "",
      cancelParams: {
        id: "",
        remarks: ""
      },
      logVisible: false, //操作日志
      logList: [],
      logCount: 0,
      logParams: {
        appointment_id: "",
        page: 1,
        pagesize: 30
      }
    };
  },
  mounted() {
    this.index();
  },
  methods: {
    async index() {
      router.beforeEach((to, from, next) => {
        if (from.path == to.path && from.query !== to.query) {
          this.params.doctor_id = "";
          // appointmentList(this.params).then(data=>{
          // 	if(data.code === 200){
          // 		this.list = data.data.list;
          // 		this.doctorInfo=data.data.doctor_info;
          // 		this.count = data.data.total;
          // 	}
          // });
          next();
          window.location.reload();
        } else {
          next();
        }
      });
      //  主页列表数据
      if (this.$route.query.doctor_id) {
        this.params.doctor_id = this.$route.query.doctor_id;
      } else {
        this.params.doctor_id = "";
      }
      let data = await appointmentList(this.params);
      if (data.code === 200) {
        this.list = data.data.list;
        this.doctorInfo = data.data.doctor_info;
        this.count = data.data.total;
      }
    },
    handleCurrentChange(val) {
      //	请求多少页
      this.params.page = val;
      this.index();
    },
    handleCurrentChange2(val) {
      //	请求多少页
      this.logParams.page = val;
      this.getLogList();
    },
    handleSizeChange(val) {
      //	每页多少条
      this.params.pageSize = val;
      this.index();
    },
    handleSizeChange2(val) {
      //	每页多少条
      this.logParams.pageSize = val;
      this.getLogList();
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
      this.params.appointment_code = "";
      this.params.name = "";
      this.params.mobile = "";
      this.params.status = "";
      this.timeValue="";
      this.params.start_time = "";
      this.params.end_time = "";
      this.index();
    },
    //取消预约弹框
    cancelPop(id) {
      this.cancelParams.id = id;
      this.cancelParams.remarks = "";
      this.cancelVisible = true;
    },
    //取消预约
    async cancel() {
      if (this.cancelParams.remarks == "") {
        this.$message({ message: "请输入备注", type: "warning" });
        return;
      }
      let data = await appointmentCancel(this.cancelParams);
      if (data.code === 200) {
        this.$message({ message: "取消预约成功", type: "success" });
        this.cancelVisible = false;
        this.cancelParams.remarks = "";
        this.index();
      }
    },
    //确认就诊弹框
    confirmPop(item) {
      this.title = "确认就诊";
      this.editVisible = true;
      this.info = item;
    },
    //确认
    async confirm() {
      if (this.info.handle_at == "") {
        this.$message({ message: "请输入确认就诊时间", type: "warning" });
        return;
      }
      if (this.info.remarks == "") {
        this.$message({ message: "请输入备注", type: "warning" });
        return;
      }
      let data = await appointmentConfirm({
        id: this.info.id,
        handle_at: this.info.handle_at,
        remarks: this.info.remarks
      });
      if (data.code === 200) {
        this.$message({ message: "确认就诊成功", type: "success" });
        this.editVisible = false;
        this.index();
      }
    },
    //预约详情弹框
    detailPop(id) {
      this.title = "预约详情";
      this.editVisible = true;
      appointmentInfo({ id: id }).then(data => {
        if (data.code === 200) {
          this.info = data.data;
        }
      });
    },
    //操作日志弹框
    logPop(id) {
      this.logParams.appointment_id = id;
      this.logVisible = true;
      this.getLogList();
    },
    async getLogList() {
      let data = await appointmentLog(this.logParams);
      if (data.code === 200) {
        this.logList = data.data.list;
        this.logCount = data.data.total;
      }
    }
  }
};
</script>
<style lang="less">
.info {
  margin: 10px 0;
  display: flex;
  .left {
    display: flex;
    margin-right: 30px;
    .avatar {
      width: 75px;
      height: 75px;
      margin-right: 20px;
      img {
        width: 75px;
        height: 75px;
      }
    }
    .text {
      p {
        line-height: 25px;
      }
    }
  }
  .right {
    p {
      line-height: 25px;
    }
  }
}
</style>