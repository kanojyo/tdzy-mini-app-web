<template>
 <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.customer_code" clearable size="mini" placeholder="用户档案编号"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.account" clearable size="mini" placeholder="用户账号"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.yz_account" clearable size="mini" placeholder="医助账号"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.os_type" clearable size="mini" placeholder="平台">
                        <el-option v-for="item in channel" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-select v-model="params.department_id" clearable size="mini" placeholder="医助部门">
                        <el-option v-for="item in department" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                    </el-select>
                </div>
                <div class="search">
                    <el-button icon="el-icon-search" type="primary" size="mini" @click="search">查询结果</el-button>
                </div>
                <div class="search">
                    <el-button icon="el-icon-delete" type="primary" size="mini" @click="empty">清空删选条件</el-button>
                </div>
                <div class="search">
                    <el-button type="primary" size="mini" @click="relevanceClick">关联自建档案</el-button>
                </div>
            </div>
            <div class="pull-right"></div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="700" @selection-change="handleSelectionChange" :header-cell-style="{background:'#f3f3f3'}" ref="multipleTable">
                    <el-table-column align="center" type="selection" width="58px"></el-table-column>
                    <el-table-column align="center" prop="user_id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="customer_code" label="档案编号" width="150px"></el-table-column>
                    <el-table-column align="center" prop="account" label="用户账号" width="120px"></el-table-column>
                    <el-table-column align="center" prop="yz_account" label="绑定医助" width="120px"></el-table-column>
                    <el-table-column align="center" prop="yz_department" label="医助部门" width="120px"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="os_type" label="所在平台">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.os_type === 0" >全平台</span>
                                <span v-if="scope.row.os_type === 1" >Android</span>
                                <span v-if="scope.row.os_type === 2">iOS</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="mobile_version" label="当前版本"></el-table-column>
                    <el-table-column align="center" prop="mobile_model" label="手机型号" width="150px"></el-table-column>
                    <el-table-column align="center" fixed="right" label="操作" width="220px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" @click="diseaseRecordsChange(scope.row.user_id)">病症记录</span>&nbsp;
                                <span class="cursor color-f8494c" @click="orderChange(scope.row.user_id)">订单记录</span>&nbsp;
                                <span class="cursor color-f8494c" @click="chatChange(scope.row.user_id)">聊天记录</span>&nbsp;
                                <span class="cursor color-f8494c" @click="personalDetails(scope.row.user_id)">个人信息</span>&nbsp;
                                <span class="cursor color-f8494c" @click="allocation(scope.row.user_id)">分配医助</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- 用户个人信息 -->
        <el-dialog title="用户个人信息" :visible.sync="userChangeShow" width="650px">
            <div class="user">
                <div class="title">用户信息</div>
                <table class="ajun-table">
                    <tr>
                        <td style="width: 150px;">用户账号</td>
                        <td>{{userData.account}}</td>
                    </tr>
                    <tr>
                        <td>头像</td>
                        <td>
                            <img :src="userData.avatar" class="img-width-50" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td>绑定医助</td>
                        <td>{{userData.yz_account}}</td>
                    </tr>
                    <tr>
                        <td>医助所属部门</td>
                        <td>{{userData.yz_department}}</td>
                    </tr>
                    <tr>
                        <td>主科室</td>
                        <td>{{userData.office}}</td>
                    </tr>
                    <tr>
                        <td>所在平台</td>
                        <td v-if="userData.os_type === 1">Android</td>
                        <td v-else>iOS</td>
                    </tr>
                    <tr>
                        <td>当前版本</td>
                        <td>{{userData.mobile_version}}</td>
                    </tr>
                    <tr>
                        <td>手机型号</td>
                        <td>{{userData.mobile_model}}</td>
                    </tr>
                    <tr>
                        <td>创建时间</td>
                        <td>{{userData.created_at}}</td>
                    </tr>
                    <tr>
                        <td>最后登录时间</td>
                        <td>{{userData.login_at}}</td>
                    </tr>
                    <tr>
                        <td>邀请人</td>
                        <td>{{userData.inviter_username}}</td>
                    </tr>
                    <tr>
                        <td>邀请数</td>
                        <td>{{userData.intite_num}}</td>
                    </tr>
                </table>
            </div>
            <div class="user">
                <div class="title">档案信息</div>
                <table class="ajun-table">
                    <tr>
                        <td style="width: 150px;">档案编号</td>
                        <td>{{customerData.customer_code}}</td>
                    </tr>
                    <tr>
                        <td>基础提点数</td>
                        <td>{{customerData.extract_base}}</td>
                    </tr>
                    <tr>
                        <td>关联档案号</td>
                        <td>{{customerData.app_customer_code}}</td>
                    </tr>
                    <tr>
                        <td>真实姓名</td>
                        <td>{{customerData.name}}</td>
                    </tr>
                    <tr>
                        <td>年龄</td>
                        <td>{{customerData.age}}</td>
                    </tr>
                    <tr>
                        <td>职业</td>
                        <td>{{customerData.job}}</td>
                    </tr>
                    <tr>
                        <td>患者性别</td>
                        <td v-if="customerData.sex === 0">未知</td>
                        <td v-if="customerData.sex === 2">女</td>
                        <td v-if="customerData.sex === 1">男</td>
                    </tr>
                    <tr>
                        <td>患病时间</td>
                        <td>{{customerData.sick_time}}</td>
                    </tr>
                    <tr>
                        <td>病症备注</td>
                        <td>{{customerData.disease_note}}</td>
                    </tr>
                    <tr>
                        <td>病史备注</td>
                        <td>{{customerData.disease_history}}</td>
                    </tr>
                    <tr>
                        <td>成交备注</td>
                        <td>{{customerData.deal_note}}</td>
                    </tr>
                </table>
            </div>
        </el-dialog>
    </div>
</template>

<script>
 export default {
   data () {
     return {
            params: {
                customer_code: "", //  用户ID
                account: "", //  用户账号
                yz_account: "",   //  医助账号
                os_type: 0, //  Android,2=>IOS,不传默认全平台
                department_id: "", //  部门id
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            userIdList: [], //  选中用户ID
            all_user_id: [],    //  筛选出来的用户id
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑 弹框
            batchShow: true,   //  是否检索
            yzId: '',   //  医助ID
            userData: '',   //  用户个人信息
            userShow: false,    //  显示用户个人信息
            customerData: '',   //  档案信息

            orderParams: {  //  用户订单记录检索数据
                user_id: '',
                receiver: '',   //  收货人
                yz_account: '',   //  医助账号
                department_id: '',   //  部门
                order_sn: '',   //  订单号
                state: '',   //  订单状态
                jiesuan_state: '',   //  结算状态
                created_at_begin: '',   //  提交时间开始时间
                created_at_end: '',   //  提交时间结束时间
                page: 1, //  分页
                pageSize: 30 //  每页显示条数
            },
            orderTime: '',  //  提交时间
            orderList: [],  //  订单记录数据
            orderCount: 0,  //  订单总数
            orderStatistical: {},   //  统计信息
            orderShow: false,   //  显示订单
            orderState: [   //  订单状态
                {type: 5, name: '医师待审核'},
                {type: 6, name: '医师驳回'}, 
                {type: 64, name: '已放弃'},
                {type: 1, name: '用户待支付'},
                {type: 2, name: '用户已取消'}, 
                {type: 4, name: '支付超时'}, 
                {type: 0, name: '平台待审核'},
                {type: 12, name: '平台驳回'},
                {type: 10, name: '平台审核通过'}, 
                {type: 21, name: '物流驳回'},
                {type: 20, name: '物流通过'},
                {type: 31, name: '发货驳回'}, 
                {type: 30, name: '已发货'},
                {type: 50, name: '已收货'},
                {type: 63, name: '订单拒收'}, 
                {type: 62, name: '异常结算'},
                {type: 65, name: '售后待审核'},
                {type: 66, name: '售后审核通过'},
                {type: 68, name: '已退货'},
            ],
            orderJiesuanState: [    //  结算状态
                {type: 0, name: '未结算'},
                {type: 1, name: '已结算'}, 
            ],
            orderParticularsShow: false,    //  订单详情显示
            orderinfoData: {    //  订单详情
                orderinfo: {},
                check: {},  //  审核信息
                disease: {},    //  病症信息
            },
            carouselArray: [],  //  图片集合
            carouselIndex: 0,  //  图片下标

            diseaseRecordsShow: false,  //  显示病症信息
            diseaseRecordList: [],  //  病症记录数据
            diseaseRecordCount: 0,  //  病症记录总数
            diseaseRecordParams: {  //  检索条件
                user_id: '',
                id: '',
                state: '',
                ctime_begin: '',
                ctime_end: '',
                diagnosis_time_begin: '',
                diagnosis_time_end: '',
                prescription_time_begin: '',
                prescription_time_end: '',
                page: 1,
                pageSize: 30,
            },
            diseaseRecordState: [   //  病症状态
                {type: 1, name: '待诊断'},
                {type: 2, name: '已诊断'}, 
                {type: 9, name: '已驳回'}, 
                {type: 7, name: '已下单'},
                {type: 8, name: '未成单'},
            ],
            establishTime: '',  //  创建时间
            firstVisitTime: '', //  初诊时间
            prescriptionTime: '',   //  处方时间

            relevanceShow: false,   //  关联私号档案
            relevanceParams: {  //  关联私号档案参数
                customer_id: '',    //  私号档案id
                app_customer_id: '',    //  app档案
                extract_base: '',   //  关联后提点数
                customer_code: '',  //  私号档案编号
                app_code: '',   //  app档案编号
            },
            relevanceData: '',  //  查询数据
            relevanceSearchShow: false, //  查询后显示
        };
   },
   components: {

   }
 }
</script>

<style type="text/css" scoped lang="less">
    .user{
        margin-bottom: 15px;
        .title{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
    .up{
        margin-bottom: 20px;
    }
    .centens{
        height: 600px;
        overflow-y: scroll;
        border: 1px solid #e4e4e4;
        padding: 20px;
        &::-webkit-scrollbar {
            display:none
        }
        .list{
            .item{
                margin-bottom: 10px;
                .type-1{
                    display: flex;
                    flex-direction: row;
                    .avatar{
                        width: 40px;
                        height: 40px;
                        margin-right: 15px;
                    }
                    .contens{
                        .username-time{
                            margin-bottom: 5px;
                        }
                        .chat{
                            .img{
                                max-width: 200px;
                            }
                            .office{
                                width: 200px;
                                float: right;
                                text-align: left;
                                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                                .h1{
                                    padding: 8px 10px;
                                    font-size: 18px;
                                    background: #f3f3f3;
                                    border-bottom: 1px solid #e2e2e2;
                                }
                                .p{
                                    padding: 8px 10px;
                                }
                            }
                        }
                    }
                }
                .type-2{
                    display: flex;
                    flex-direction: row-reverse;
                    .avatar{
                        width: 50px;
                        height: 50px;
                        margin-left: 15px;
                    }
                    .contens{
                        .username-time{
                            margin-bottom: 5px;
                        }
                        .chat{
                            text-align: right;
                            .img{
                                max-width: 200px;
                            }
                            .office{
                                width: 200px;
                                float: right;
                                text-align: left;
                                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                                .h1{
                                    padding: 8px 10px;
                                    font-size: 12px;
                                    background: #f3f3f3;
                                    border-bottom: 1px solid #e2e2e2;
                                }
                                .p{
                                    padding: 8px 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .details{
        margin-bottom: 10px;
        .title{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .ajun-table{
            tr{
                td{
                    &:first-child{
                        width: 200px;
                    }
                    .text{
                        margin-bottom: 10px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .content{
                            display: flex;
                            flex-wrap: nowrap;
                            div{
                                margin-right: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer{
        .text{
            padding: 5px 5px;
            font-size: 16px;
        }
    }
    .new-info {
        width: 750px;
        margin: 10px auto;
        h3 {
            text-align: center;
            margin-top: 10px;
            font-size: 22px;
            margin-bottom: 10px;
        }
        ul {
            display: flex;
            border: 1px solid grey;
            li {
                flex: 1;
                padding: 5px 0;
                padding-left: 5px;
                vertical-align: top;
            }
        }
        ul + ul {
            border-top: 0;
            margin-bottom: 10px;
        }
        .info {
            height: 30px;
            vertical-align: middle;
            font-size: 14px;
            width: 100%;
            border-bottom: 1px solid grey;
            label {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                vertical-align: middle;
                margin-right: 50px;
                .rp{
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
        .wenzhen_content {
            position: relative;
            border: 1px solid grey;
            margin-top: 10px;
            .upright{
                position: absolute;
                top: 20px;
                right: 100px;
                width: 20px;
                padding: 8px 6px;
                border: 1px solid #000;
                span{
                    display: inline-block;
                    font-size: 20px;
                }
            }
            .h2{
                font-size: 18px;
                text-align: center;
                margin-bottom: 20px;
            }
            .h3{
                font-size: 22px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 30px;
            }
            .content_title {
                border-bottom: 1px solid grey;
                border-top: 1px solid grey;
                text-align: center;
                height: 30px;
                line-height: 30px;
                font-weight: 500;
            }
            ul {
                border: none;
                li {
                    min-height: 200px;
                    .p{
                        padding: 20px 5px;
                        font-size: 16px;
                        color: #333;
                    }
                    .h1{
                        padding: 5px 0;
                        font-size: 16px;
                        color: #333;
                        .time{
                            display: inline-block;
                            padding-left: 20px;
                        }
                    }
                    .text-right{
                        padding-right: 100px;
                    }
                }
                li + li {
                    border-top: 1px solid grey;
                }
            }
        }
        .diagnose {
            padding: 5px 10px;
            border-top: 0;
            div {
                display: flex;
                justify-content: space-between;
                p {
                    span {
                        padding-left: 30px;
                    }
                }
            }
        }
        table {
            width: 750px;
            margin: 20px auto;
            tbody {
                tr {
                    td {
                        width: 300px;
                        padding: 5px 10px;
                    }
                    td + td {
                        width: 450px;
                    }
                }
            }
        }
    }
</style>
