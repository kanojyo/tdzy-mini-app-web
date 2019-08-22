
<template>
    <div class>
        <div class="info">
            <div class="left">
              <div class="avatar">
                <img :src="doctorInfo.avatar" alt="">
              </div>
              <div class="text">
                <p>姓名:{{doctorInfo.name}}</p>
                <p>职位:{{doctorInfo.position}}</p>
                <p>科室:{{doctorInfo.office}}</p>
              </div>
            </div>
            <div class="right">
              <p>预约总数量:{{doctorInfo.order_use_num}}</p>
              <!-- <p>实际预约数:{{doctorInfo.order_use_num}}</p> -->
            </div>
        </div>
        <div class="operation">
            <div class="pull-left">
              <div class="input">
                    <el-select v-model="params.order_status" clearable size="mini" placeholder="预约状态">
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
                <el-button icon="el-icon-circle-plus-outline" type="primary" size="mini" @click="add">添加排班</el-button>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="650" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="order_time" label="日期"></el-table-column>
                    <el-table-column align="center"  label="时间段" width="180px">
                      <template slot-scope="scope">
                        <div>
                          <span>{{scope.row.time_slot|timeSlot}}</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center"  label="预约费用">
                      <template slot-scope="scope">
                        <div>
                          <span>¥{{scope.row.order_money}}</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" prop="order_max_num" label="预约上限人数"></el-table-column>
                    <el-table-column align="center" prop="order_use_num" label="此次排班预约数"></el-table-column>
                    <!-- <el-table-column align="center" prop="order_use_num" label="此次排班实际预约"></el-table-column> -->
                    <el-table-column align="center"  label="预约状态">
                      <template slot-scope="scope">
                        <div>
                          <span class="cursor color-f8494c" v-if="scope.row.order_status === 1">正常预约</span>
                          <span class="cursor color_red" v-if="scope.row.order_status === 2">暂停预约</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" prop="admin" label="创建人"></el-table-column>
                    <el-table-column align="center" prop="ctime" label="创建时间" width="200px"></el-table-column>
                    <el-table-column align="center"  label="操作">
                      <template slot-scope="scope">
                        <div>
                          <span class="cursor color-f8494c" @click="edit(scope.row.id)">修改</span>
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
        <!-- "添加排班 -->
        <el-dialog title="添加排班" :visible.sync="addVisible" width="1050px" :close-on-click-modal="false">
          <div class="table">
            <div class="table-list">
                <el-table :data="addData.scheduling_json" border height="750" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="排班日期" width="170px">
                      <template slot-scope="scope">
                        <div>
                          <el-date-picker
                            v-model="scope.row.order_time"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions"
                            value-format="yyyy-MM-dd">
                          </el-date-picker>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center"  label="时间段" width="220px">
                      <template slot-scope="scope">
                        <div>
                          <el-select v-model="scope.row.time_slot" placeholder="请选择">
                            <el-option :value="1" label="上午(8:00-12:00)"></el-option>
                            <el-option :value="2" label="下午(14:00-18:00)"></el-option>
                          </el-select>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" prop="order_time" label="预约状态">
                      <template slot-scope="scope">
                        <div>
                          <el-select v-model="scope.row.order_status" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.type" :value="item.type" :label="item.value"></el-option>
                          </el-select>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" prop="order_money" label="预约上限人数">
                      <template slot-scope="scope">
                        <div>
                          <el-input v-model="scope.row.order_max_num" @change="num(scope.row.order_max_num,scope.$index)" placeholder="请输入预约上限"></el-input>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" prop="order_max_num" label="预约费用">
                      <template slot-scope="scope">
                        <div>
                          <el-input v-model="scope.row.order_money"  @change="val=>money(val,scope.$index)" placeholder="请输入预约费用"></el-input>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column align="center"  label="操作">
                      <template slot-scope="scope"> 
                        <div>
                          <span class="cursor color-f8494c" @click="copy(scope.$index,scope.row)">复制</span>
                          <span class="cursor color_red" @click="del(scope.$index, scope.row)">删除</span>
                        </div>
                      </template>
                    </el-table-column>
                </el-table>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 修改排班 -->
        <el-dialog title="修改排班" :visible.sync="editVisible" width="650px" :close-on-click-modal="false">
           <el-form label-width="120px" :model="editData">
                <el-form-item label="* 排班日期">
                    <el-date-picker
                      v-model="editData.order_time"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="* 预约状态">
                  <el-select v-model="editData.order_status" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.type" :value="item.type" :label="item.value"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="* 预约时间段">
                  <el-select v-model="editData.time_slot" placeholder="请选择">
                    <el-option :value="1" label="上午(8:00-12:00)"></el-option>
                    <el-option :value="2" label="下午(14:00-18:00)"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="* 预约上限/人">
                    <el-input v-model="editData.order_max_num" placeholder="请输入预约上限"></el-input>
                </el-form-item>
                <el-form-item label="* 预约费用/元" >
                    <el-input v-model="editData.order_money" @change="editMoney(editData.order_money)"  placeholder="请输入预约费用"></el-input>
                </el-form-item>
            </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="modify">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { schedulingList, schedulingDetail, schedulingUpdate, schedulingSave} from "@/api/doctor.js";
import {positiveInteger, positiveFloatNum2} from "@/utils/validate.js"

export default {
    data() {
        return {
            params: {
                doctor_id:"",
                order_status: "", 
                start_time: "", 
                end_time: "", 
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            status: [{ type: 1, value: "正常预约" }, { type: 2, value: "暂停预约" }], //  状态
            timeValue:"",
            doctorInfo:{},
            addVisible:false, //添加dialog状态
            editVisible:false, //修改dialog状态
            editData:{ //修改排班的数据
              id:"",
              doctor_id:"",
              order_time:"",
              time_slot:"",
              order_status:"",
              order_max_num:"",
              order_money:"",
            },
            options:[{type:1,value:'正常预约'},{type:2,value:'暂停预约'}],
            addData:{
              doctor_id:"",
              scheduling_json:[
                {
                  order_time:"",
                  time_slot:1,
                  order_status:1,
                  order_max_num:"",
                  order_money:0,
                }
              ]
            },
            originData:[
                {
                  order_time:"",
                  time_slot:"",
                  order_status:"",
                  order_max_num:"",
                  order_money:"",
                }
            ],
            pickerOptions: {
              disabledDate(time) {
                return time.getTime() < Date.now()- 8.64e7;
              }
            }
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        async index() {
            //  主页列表数据
            this.params.doctor_id = this.$route.query.doctor_id
            this.addData.doctor_id = this.$route.query.doctor_id;
            let data = await schedulingList(this.params);
            if (data.code === 200) {
                this.list = data.data.list;
                this.doctorInfo=data.data.doctor_info;
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
        search() {
            //  检索
            this.params.start_time=this.timeValue[0];
            this.params.end_time=this.timeValue[1];
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.timeValue="";
            this.params.order_status = "";
            this.params.start_time = "";
            this.params.end_time = "";
            this.index();
        },
        //添加
        add(){
          this.addVisible=true;
          this.addData.scheduling_json=[
            {
              order_time:"",
              time_slot:1,
              order_status:1,
              order_max_num:"",
              order_money:0,
            }
          ]
        },
        //监听排班设置中数量；
        num(val,index){
          if(!positiveInteger(val)){
            this.$message({ message: "预约上限人数为正整数", type: "warning" });
            this.addData.scheduling_json[index].order_max_num='';
            return
          }
        },
        //监听排班设置中金额
        money(val,index){
          // console.log(val)
          if(!(positiveFloatNum2(val) || val ==0)){
            this.$message({ message: "预约费用为正数，保留2位小数！", type: "warning" });
            this.addData.scheduling_json[index].order_money='';
            return
          }
        },
        editMoney(val){
          if(!(positiveFloatNum2(val) || val ==0)){
            this.$message({ message: "预约费用为正数，保留2位小数！", type: "warning" });
            this.editData.order_money='';
            return
          }
        },
        //复制
        copy(index,item){
          // console.log(index)
          let data={};
          data.order_time=item.order_time;
          data.time_slot=item.time_slot;
          data.order_status=item.order_status;
          data.order_max_num=item.order_max_num;
          data.order_money=item.order_money;
          // this.addData.scheduling_json.push(data)
          this.addData.scheduling_json.splice(index,0,data)
        },
        //删除
        del(index){
          this.addData.scheduling_json.splice(index, 1)
        },
        //添加排班
        async save(){
          this.addData.scheduling_json.forEach(item=>{
            if(item.order_max_num !== ''){
              item.order_max_num=parseInt(item.order_max_num)
            }
          })
          let data = await schedulingSave(this.addData);
          if(data.code === 200){
            this.$message({ message: "添加成功", type: "success" });
            this.addVisible=false;
            this.index();
            this.addData.scheduling_json=this.originData;
          }
        },
        //取消添加排班弹框
        cancel(){
          this.addVisible=false;
          this.addData.scheduling_json=this.originData;
        },
        //修改
        async edit(id){
          let data = await schedulingDetail({id:id});
          if(data.code === 200){
            this.editData= data.data;
            if(this.editData.order_max_num){
              this.editData.order_max_num=this.editData.order_max_num.toString();
            }
            this.editVisible=true;
          }
        },
        time(){
        },
        //修改排班
        modify(){
          
           if (this.editData.order_time == "") {
                this.$message({ message: "请选择排班日期", type: "warning" });
                return;
            }
           if (this.editData.order_status == "") {
                this.$message({ message: "请选择预约状态", type: "warning" });
                return;
            }
           if (this.editData.time_slot == "") {
                this.$message({ message: "请选择预约时间段", type: "warning" });
                return;
            }
           if (this.editData.order_max_num == "") {
                this.$message({ message: "请选择预约上限", type: "warning" });
                return;
            }
            if(!positiveInteger(this.editData.order_max_num)){
              this.$message({ message: "预约上限人数为正整数", type: "warning" });
              return
            }
           if (this.editData.order_money === "") {
                this.$message({ message: "预约费用为正数，保留2位小数！", type: "warning" });
                return;
            }
            this.editData.order_max_num=parseInt(this.editData.order_max_num)
            schedulingUpdate(this.editData).then(data=>{
              if(data.code === 200){
                this.$message({ message: "修改成功", type: "success" });
                this.editVisible=false;
                this.index();
              }
            })
        }
    }
};
</script>
<style lang="less">
.info{
  margin:10px 0;
  display: flex;
  .left{
    display: flex;
    margin-right: 30px;
    .avatar{
      width: 75px;
      height: 75px;
      margin-right: 20px;
      img{
        width: 75px;
        height: 75px;
      }
    }
    .text{
      p{
        line-height: 25px;
      }
    }
  }
  .right{
    p{
      line-height: 25px;
    }
  }
}
</style>