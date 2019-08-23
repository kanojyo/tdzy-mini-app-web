<template>
 <div class>
        <div class="operation" style="display:block !important;">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.customer_code" clearable size="mini" placeholder="用户档案编号"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.nickname" clearable size="mini" placeholder="用户昵称"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.department_id" clearable size="mini" placeholder="所属部门">
                        <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-input v-model="params.name" clearable size="mini" placeholder="姓名"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.account" clearable size="mini" placeholder="手机号"></el-input>
                </div>
                
            </div>
            <div class="pull-left">
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
                <el-table :data="list" border height="700px" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="user_id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="customer_code" label="用户档案编号"></el-table-column>
                    <el-table-column align="center"  label="用户头像" width="80px">
                        <template slot-scope="scope">
                            <div>
                                <img v-if="scope.row.avatarurl" :src="scope.row.avatarurl" >
                                <img v-else src="https://taidouapp.oss-cn-hangzhou.aliyuncs.com/avatar/avatar.png" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="nickname" label="用户昵称"></el-table-column>
                    <el-table-column align="center" prop="yz_account" label="绑定医助"></el-table-column>
                    <el-table-column align="center" prop="yz_department" label="所属部门"></el-table-column>
                    <el-table-column align="center" prop="name" label="用户姓名"></el-table-column>
                    <el-table-column align="center"  label="性别">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.gender === 1">男</span>
                                <span v-if="scope.row.gender === 2">女</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="age" label="年龄"></el-table-column>
                    <el-table-column align="center" prop="account" label="手机号"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="200px"></el-table-column>
                    <el-table-column align="center" label="操作" width="180px">
                        <template slot-scope="scope">
                            <div >
                                <span class="cursor color-f8494c" @click="popLog(scope.row.user_id)">预约记录</span>
                                <span class="cursor color-f8494c" @click="detail(scope.row.user_id)">用户详情</span>
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
        <!-- 用户个人信息 -->
        <el-dialog title="用户个人信息" :visible.sync="dialogVisible" width="650px" :close-on-click-modal="false">
            <div class="anchor">
                <div class="left">
                    <el-steps direction="vertical"  :space="60">
                        <el-step title="档案信息" :status="FileStatus" @click.native="returnFile"></el-step>
                        <el-step title="用户信息" :status="UserInfoStatus" @click.native="returnUserInfo"></el-step>
                    </el-steps>
                </div>
                <div class="right">
                    <div class="user">
                        <div class="title" id="File">档案信息</div>
                        <table class="ajun-table">
                            <tr>
                                <td style="width: 150px;">档案编号</td>
                                <td>{{userInfo.customer_code}}</td>
                            </tr>
                            <tr>
                                <td>绑定医助</td>
                                <td>{{userInfo.yz_account}}</td>
                            </tr>
                            <tr>
                                <td>所属部门</td>
                                <td>{{userInfo.yz_department}}</td>
                            </tr>
                            <tr>
                                <td>用户姓名</td>
                                <td>{{userInfo.customer_name}}</td>
                            </tr>
                            <tr>
                                <td>性别</td>
                                <td>{{userInfo.customer_sex|filterSex}}</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>{{userInfo.customer_age}}</td>
                            </tr>
                            <tr>
                                <td>手机号</td>
                                <td>{{userInfo.customer_mobile}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="user">
                        <div class="title" id="userInfo">用户信息</div>
                        <table class="ajun-table">
                            <tr>
                                <td style="width: 150px;">用户头像</td>
                                <td>
                                    <div style="width:80px;">
                                        <img v-if="userInfo.avatarurl" :src="userInfo.avatarurl" alt="">
                                        <img v-else src="https://taidouapp.oss-cn-hangzhou.aliyuncs.com/avatar/avatar.png" alt="">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>昵称</td>
                                <td>{{userInfo.nickname}}</td>
                            </tr>
                            <tr>
                                <td>用户姓名</td>
                                <td>{{userInfo.name}}</td>
                            </tr>
                            <tr>
                                <td>性别</td>
                                <td>{{userInfo.gender|filterSex}}</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>{{userInfo.age}}</td>
                            </tr>
                            <tr>
                                <td>手机号</td>
                                <td>{{userInfo.account}}</td>
                            </tr>
                            <tr>
                                <td>累计签到天数</td>
                                <td>{{userInfo.sum_sign_day}}</td>
                            </tr>
                            <tr>
                                <td>累计获取积分</td>
                                <td>{{userInfo.get_score_num}}</td>
                            </tr>
                            <tr>
                                <td>累计使用积分</td>
                                <td>{{userInfo.use_score_num}}</td>
                            </tr>
                            <tr>
                                <td>当前积分</td>
                                <td>{{userInfo.score}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </el-dialog>
        <!-- 预约记录 -->
        <el-dialog title="预约记录" :visible.sync="logVisible" width="1250px" :close-on-click-modal="false">
          <div class="table">
            <div class="table-list">
                <el-table :data="logList" border height="550" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="appointment_code" label="预约编号"></el-table-column>
                    <el-table-column align="center" prop="office" label="就诊科室"></el-table-column>
                    <el-table-column align="center" prop="doctor_name" label="预约医生" ></el-table-column>
                    <el-table-column align="center"  label="预约状态" >
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.status == 1">未就诊</span>
                                <span v-if="scope.row.status == 2">已就诊</span>
                                <span v-if="scope.row.status == 3">已取消</span>
                            </div>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column align="center" prop="order_time" label="预约日期" ></el-table-column> -->
                    <el-table-column align="center" label="预约时间" >
                        <template slot-scope="scope">
                            <div>
                                <span>{{scope.row.order_time}}</span><br>
                                <span >{{scope.row.time_slot|timeSlot}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="200px"></el-table-column>
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
                        :page-size="logParams.pagesize"
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

<script>
import { departmentList, getIndex, userInfo, getLog} from "@/api/user.js";
 export default {
   data () {
     return {
            params: {
                customer_code: '', 
                account: '', 
                name: '',   
                start_time: '', 
                end_time: '', 
                nickname: '', 
                department_id: '', //  部门id
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑 弹框
            userInfo:[], //用户信息
            timeValue:'',
            departList:[],//部门列表
            logParams:{
              doctor_id:0,
              user_id:"",
              status:"",
              name:"",
              start_time:"",
              end_time:"",
              appointment_code:"",
              mobile:"",
              page:1,
              pagesize:30
            },
            logList:[], //预约记录列表数据
            logCount:0,
            logVisible:false, //预约记录状态
            FileStatus:'process',
            UserInfoStatus:'wait',
        };
   },
   filters:{
       filterSex(val){
           if(val === 1) return '男'
           if(val === 2) return '女'
       }
   },
   components: {

   },
   mounted() {
        this.index();
        this.getDepartment();
    },
    methods: {
        async getDepartment(){
            let data = await departmentList();
            if(data.code ===200){
                this.departList=data.data;
            }
        },
        async index() {
            //  主页列表数据
            let data = await getIndex(this.params);
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
        handleCurrentChange2(val) {
            //	请求多少页
            this.logParams.page = val;
            this.getLogList();
        },
        handleSizeChange(val) {
            //	每页多少条
            this.params.pagesize = val;
            this.index();
        },
        handleSizeChange2(val) {
            //	每页多少条
            this.logParams.pagesize = val;
            this.getLogList();
        },
        search() {
            //  检索
            this.params.start_time=this.timeValue[0];
            this.params.end_time=this.timeValue[1];
            this.params.page = 1;
            console.log(this.params)
            this.index();
        },
        empty() {
            //  清空删选条件
            this.timeValue="";
            this.params.start_time = "";
            this.params.end_time = "";
            this.params.customer_code = "";
            this.params.account = "";
            this.params.name = "";
            this.params.nickname = "";
            this.params.department_id = "";
            this.index();
        },
        //用户详情
        async detail(id){
            console.log(id)
            let data = await userInfo({id:id})
            if(data.code ===200){
                this.userInfo=data.data;
                this.dialogVisible=true;
            }
        },
        //预约记录弹框
        popLog(id){
            this.logParams.user_id=id;
            this.logVisible=true;
            this.getLogList();
        },
        async getLogList(){
            let data = await getLog(this.logParams);
            if(data.code === 200){
                this.logList=data.data.list;
                this.logCount=data.data.total;
            }
        },
        //锚点跳转档案信息
        returnFile(){
            this.FileStatus='process';
            this.UserInfoStatus='wait';
            const returnEle = document.querySelector("#File");
            if (!!returnEle) {
            returnEle.scrollIntoView(true);
            }
        },
        //锚点跳转档案信息
        returnUserInfo(){
            this.FileStatus='wait';
            this.UserInfoStatus='process';
            const returnEle = document.querySelector("#userInfo");
            if (!!returnEle) {
            returnEle.scrollIntoView(true);
            }
        },

    }
 }
</script>

<style type="text/css" scoped lang="less">
.ajun-table{
    margin:20px 0;
}
.info{
    display:flex;
}
</style>
