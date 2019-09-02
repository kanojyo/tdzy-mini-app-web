
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input size="mini" v-model="params.exchange_code" placeholder="兑换编号"></el-input>
                </div>
                <div class="input">
                    <el-input size="mini" v-model="params.customer_code" placeholder="用户档案编号"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="状态">
                        <el-option v-for="item in type" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-date-picker
                        size="mini"
                        v-model="timeValue"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="兑换开始日期"
                        end-placeholder="兑换结束日期"
                        value-format="yyyy-MM-dd HH-mm-ss"
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
                <el-table :data="list" border height="750" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="goods_id" label="商品ID"></el-table-column>
                    <el-table-column align="center" prop="exchange_code" label="兑换编号"></el-table-column>
                    <el-table-column align="center" prop="customer_code" label="用户档案编号"></el-table-column>
                    <el-table-column align="center" prop="nickname" label="用户昵称"></el-table-column>
                    <el-table-column align="center" prop="exchange_score" label="兑换积分"></el-table-column>
                    <el-table-column align="center" prop="goods_name" label="商品名称"></el-table-column>
                    <el-table-column align="center" label="状态">
                      <template slot-scope="scope">
                          <div>
                            <span class="color-f2690e" v-if="scope.row.status === 1">未使用</span>
                            <span class="color-f8494c" v-if="scope.row.status === 2">已使用</span>
                            <span class="color_999" v-if="scope.row.status === 3">已失效</span>
                          </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="created_at" label="兑换时间" width="200px"></el-table-column>
                     <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <div  v-if="scope.row.status === 1">
                                <span class="cursor color-f8494c" v-if="menuData.confirm" @click="confirm(scope.row)">确认使用</span>
                                <span class="cursor color-f8494c" v-if="menuData.log" @click="log(scope.row.id)">操作日志</span>
                            </div>
                            <div v-else>
                              <span class="cursor color-f8494c" v-if="menuData.log" @click="log(scope.row.id)">操作日志</span>
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
           <!-- 确认兑换 -->
        <el-dialog title="确认使用" :visible.sync="dialogVisible" width="650px" :close-on-click-modal="false">
            <table class="ajun-table">
              <tbody>
                <tr>
                  <td style="width:150px;">用户姓名</td>
                  <td>{{dialogData.name}}</td>
                </tr>
                <tr>
                  <td>用户手机号</td>
                  <td>{{dialogData.mobile}}</td>
                </tr>
                <tr>
                  <td>兑换所用积分</td>
                  <td>{{dialogData.exchange_score}}</td>
                </tr>
                <tr>
                  <td>兑换商品名称</td>
                  <td>{{dialogData.goods_name}}</td>
                </tr>
                <tr>
                  <td>* 备注</td>
                  <td>
                    <el-input type="textarea" v-model="remarks" placeholder="请输入备注内容" :maxlength="100"></el-input>
                    <p style="text-align:right;">字数在100字以内</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="use()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="操作日志" :visible.sync="logVisible" width="850px" :close-on-click-modal="false">
          <div class="table">
            <div class="table-list">
                <el-table :data="logList" border height="550" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="admin_name" label="操作人"></el-table-column>
                    <el-table-column align="center" prop="create_at" label="操作时间" width="200px"></el-table-column>
                    <el-table-column align="center" prop="log_content" label="操作内容"></el-table-column>
                    <el-table-column align="center" prop="remarks" label="备注"></el-table-column>
                </el-table>
            </div>
            <!-- <div class="table-peg">
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
            </div> -->
          </div>
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="logVisible = false">取 消</el-button>
            <el-button type="primary" @click="logVisible = false">确 定</el-button>
          </span> -->
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { exchangeList, exchangeLogList, goodsConfirm} from "@/api/goods.js";

export default {
    data() {
        return {
            params: {
                name:"",
                mobile:"",
                start_time:"",
                end_time:"",
                status:"",
                exchange_code:"",
                page:1,
                pagesize:30
            },
            count: 0, //	总数据
            list: [], //	    列表数据
            timeValue:"",
            type:[{type: 1, value: "未使用" }, {type: 2, value: "已使用" }, {type: 3, value: "已失效" }], //商品类型
            logParams:{
              exchange_id:'',
              page:1,
              pagesize:30
            },
            logList:[], //操作日志列表数据
            logCount:0,
            dialogData:{},
            dialogVisible:false,
            remarks:"",
            logVisible:false, //操作日志状态
            menuData:[], //权限控制Data
        };
    },
    computed: mapState({
        menu:state => state.login.menu,
    }),
    watch: {
        '$store.state.login.menu': function () {
            this.$nextTick(()=>{
                this.menuGet(); //权限控制页面按钮
            })
        }
    },
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
                if(item.id == 33){
                    item.data.forEach(it=>{
                        if(it.route_web =='/Goods/exchange'){
                            this.menuData = it.role_arr;
                        }
                    })
                }
            })
        },
        async index() {
            //  主页列表数据
            let data = await exchangeList(this.params);
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
            this.params.page = 1;
            this.params.start_time=this.timeValue[0];
            this.params.end_time=this.timeValue[1];
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.exchange_code = "";
            this.params.customer_code = "";
            this.params.status = "";
            this.timeValue="";
            this.params.start_time="";
            this.params.end_time="";
            this.index();
        },
        confirm(item){
          //确认兑换弹框
          // console.log(item)
          this.dialogData=item;
          this.remarks='';
          this.dialogVisible=true;
        },
        async use(){
          //确认兑换
          let data = await goodsConfirm({exchange_id:this.dialogData.id,remarks:this.remarks});
          if(data.code ===200){
            this.$message({ message: '确认使用成功~', type: "success"});
            this.dialogVisible=false;
            this.index();
          }
        },
        //操作日志列表
        log(id){
          this.logParams.exchange_id=id;
          this.getLogList();
        },
        async getLogList(){
          let data = await exchangeLogList(this.logParams);
          if(data.code===200){
            this.logList=data.data.list;
            this.logCount = data.data.total;
            this.logVisible=true;
          }
        }
    }
};
</script>
<style lang="less">
table{
  td{
    padding: 10px 10px;
  }
}
  
</style>