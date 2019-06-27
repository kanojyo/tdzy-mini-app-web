
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.customer_code" clearable size="mini" placeholder="档案编号"></el-input>
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
            <div class="table-peg">
                <div class="pull-left">
                    <!-- <el-button type="primary" size="mini" @click="toggleSelection(list)">全 选</el-button> -->
                    <el-button type="primary" size="mini" v-if="userIdList.length > 0" @click="batchChange(1)">选中分配医助</el-button>
                    <el-button type="primary" size="mini" v-if="batchShow" @click="batchChange(2)">批量分配医助</el-button>
                </div>
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
        <!-- 分配医助 -->
        <el-dialog title="分配医助" :visible.sync="dialogVisible" width="450px">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="已选择">
                    <div v-if="userShow">{{userIdList.length}}个用户</div>
                    <div v-else>{{count}}个用户</div>
                </el-form-item>
                <el-form-item label="分配医助">
                    <el-select v-model="yzId" clearable size="mini" placeholder="请选择医助人员">
                        <el-option v-for="item in yzList" :key="item.id" :label="item.username" :value="item.id" ></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
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
        <!-- 用户订单记录 -->
        <el-dialog title="用户订单记录" :visible.sync="orderShow" width="1300px">
            <div class="operation">
                <div class="pull-left">
                    <div class="input">
                        <el-input v-model="orderParams.receiver" clearable size="mini" placeholder="收货人"></el-input>
                    </div>
                    <div class="input">
                        <el-input v-model="orderParams.yz_account" clearable size="mini" placeholder="医助账号"></el-input>
                    </div>
                    <div class="input">
                        <el-input v-model="orderParams.order_sn" clearable size="mini" placeholder="订单号"></el-input>
                    </div>
                    <div class="input">
                        <el-select v-model="orderParams.department_id" clearable size="mini" placeholder="部门">
                            <el-option v-for="item in department" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                        </el-select>
                    </div>
                    <div class="input">
                        <el-select v-model="orderParams.state" clearable size="mini" placeholder="订单状态">
                            <el-option v-for="item in orderState" :key="item.type" :label="item.name" :value="item.type" ></el-option>
                        </el-select>
                    </div>
                    <div class="input">
                        <el-select v-model="orderParams.jiesuan_state" clearable size="mini" placeholder="结算状态">
                            <el-option v-for="item in orderJiesuanState" :key="item.type" :label="item.name" :value="item.type" ></el-option>
                        </el-select>
                    </div>
                    <div class="input">
                        <el-date-picker v-model="orderTime" size="mini" type="datetimerange" range-separator="至" start-placeholder="提交开始日期" end-placeholder="提交结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </div>
                    <div class="search">
                        <el-button icon="el-icon-search" type="primary" size="mini" @click="orderSearch">查询结果</el-button>
                    </div>
                    <div class="search">
                        <el-button icon="el-icon-delete" type="primary" size="mini" @click="orderEmpty">清空删选条件</el-button>
                    </div>
                </div>
                <div class="pull-right"></div>
            </div>
            <div style="padding: 10px 0">药品总计:{{orderStatistical.good_price}}元; 订单总计:{{orderStatistical.price}}元; 实付款:{{orderStatistical.true_pay}}元; 总订单{{orderStatistical.total_order}}; 总微收:{{orderStatistical.wechat_money}}元; 总代收{{orderStatistical.dai_money}}元</div>
            <div class="table">
                <div class="table-list">
                    <el-table :data="orderList" border :header-cell-style="{background:'#f3f3f3'}">
                        <el-table-column align="center" prop="order_type" label="订单类型">
                            <template slot-scope="scope">
                                <div>
                                    <span v-if="scope.row.order_type === 1">原系统订单</span>
                                    <span v-if="scope.row.order_type === 2">App订单</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="order_sn" label="订单号" width="160"></el-table-column>
                        <el-table-column align="center" prop="yz_account" label="医助"></el-table-column>
                        <el-table-column align="center" prop="department" label="部门"></el-table-column>
                        <el-table-column align="center" prop="receiver" label="收货人"></el-table-column>
                        <el-table-column align="center" prop="created_at" label="提交时间" width="180"></el-table-column>
                        <el-table-column align="center" prop="state" label="订单状态"></el-table-column>
                        <el-table-column align="center" prop="jiesuan_state" label="结算状态"></el-table-column>
                        <el-table-column align="center" label="操作">
                            <template slot-scope="scope">
                                <div>
                                    <span class="cursor color-f8494c" @click="particularsChange(scope.row.order_id)">详情</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="table-peg">
                    <div class="pull-left"></div>
                    <div class="pull-right">
                        <el-pagination
                            @size-change="orderHandleSizeChange"
                            @current-change="orderHandleCurrentChange"
                            :current-page="orderParams.page"
                            :page-sizes="[30, 50, 100]"
                            :page-size="orderParams.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="orderCount"
                        ></el-pagination>
                    </div>
                </div>
            </div>
        </el-dialog>
        <!-- 订单详情 -->
        <el-dialog title="订单详情" :visible.sync="orderParticularsShow" width="1250px">
            <div class="details">
                <div class="title">订单信息</div>
                <table class="ajun-table">
                    <tr>
                        <td>订单来源</td>
                        <td v-if="orderinfoData.orderinfo.order_source === 1">原系统订单</td>
                        <td v-else>APP订单</td>
                    </tr>
                    <tr>
                        <td>订单类型</td>
                        <td v-if="orderinfoData.orderinfo.order_type === 1">线上订单</td>
                        <td v-else>自提订单</td>
                    </tr>
                    <tr>
                        <td>订单号</td>
                        <td>{{orderinfoData.orderinfo.order_sn}}</td>
                    </tr>
                    <tr>
                        <td>主科室</td>
                        <td>{{orderinfoData.orderinfo.office}}</td>
                    </tr>
                    <tr>
                        <td>延展单</td>
                        <td>{{orderinfoData.orderinfo.extension}}</td>
                    </tr>
                    <tr>
                        <td>部门</td>
                        <td>{{orderinfoData.orderinfo.department}}</td>
                    </tr>
                    <tr>
                        <td>成交途径</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 1">一线</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 2">复购</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 3">复1</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 4">复2</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 5">复3</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 6">复4</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 7">复5</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 8">复6</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 9">复7</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 10">复8</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 11">复9</td>
                        <td v-if="orderinfoData.orderinfo.deal_type === 12">复10</td>
                    </tr>
                    <tr>
                    <tr>
                        <td>医助账号</td>
                        <td>{{orderinfoData.orderinfo.yz_account}}</td>
                    </tr>
                    <tr>
                        <td>医助编号</td>
                        <td>{{orderinfoData.orderinfo.kf_order}}</td>
                    </tr>
                    <tr>
                        <td>治疗方案</td>
                        <td v-html="orderinfoData.orderinfo.zhiliao_fangan"></td>
                    </tr>
                    <tr>
                        <td>订单药品</td>
                        <td>
                            <div class="text" v-for="(item, index) in orderinfoData.orderinfo.order_goods" :key="index">
                                <div class="p" v-if="item.goods_type === 1 ">协定方</div>
                                <div class="p" v-if="item.goods_type === 2 ">组方</div>
                                <div class="p" v-if="item.goods_type === 3 ">补发</div>
                                <div class="p" v-if="item.goods_type === 4 ">西成药</div>
                                <div class="content" v-for="(i, k) in item.data" :key="k">
                                    <div>{{i.office_name}}</div>
                                    <div>商品名称: {{i.goods_name}} 数量：{{i.goods_shuliang}} 金额：{{i.price}}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>仓库药品</td>
                        <td>
                            <div  class="text" v-for="(item, index) in orderinfoData.orderinfo.wh_goods" :key="index">{{item.goods_name}}*{{item.goods_num}}</div>
                        </td>
                    </tr>
                    <tr>
                        <td>支付方式</td>
                        <td v-if="orderinfoData.orderinfo.pay_way === 0">未知</td>
                        <td v-if="orderinfoData.orderinfo.pay_way === 1">线上全款</td>
                        <td v-if="orderinfoData.orderinfo.pay_way === 2">支付订金</td>
                        <td v-if="orderinfoData.orderinfo.pay_way === 3">货到付款</td>
                    </tr>
                    <tr>
                        <td>药品总计</td>
                        <td>{{orderinfoData.orderinfo.good_price}}</td>
                    </tr>
                    <tr>
                        <td>运费</td>
                        <td>{{orderinfoData.orderinfo.express_money}}</td>
                    </tr>
                    <tr>
                        <td>订单总计</td>
                        <td>{{orderinfoData.orderinfo.price}}</td>
                    </tr>
                    <tr>
                        <td>优惠券</td>
                        <td>{{orderinfoData.orderinfo.coupon_name}}</td>
                    </tr>
                    <tr>
                        <td>优惠金额</td>
                        <td>{{orderinfoData.orderinfo.coupon_price}}</td>
                    </tr>
                    <tr>
                        <td>代收货款</td>
                        <td>{{orderinfoData.orderinfo.daishou_price}}</td>
                    </tr>
                    <tr>
                        <td>微信收款</td>
                        <td>{{orderinfoData.orderinfo.wechat_shoukuan}}</td>
                    </tr>
                    <tr>
                        <td>实际支付</td>
                        <td>{{orderinfoData.orderinfo.true_pay}}</td>
                    </tr>
                    <tr>
                        <td>价格分层</td>
                        <td>
                            <div class="text" v-for="(item, index) in orderinfoData.orderinfo.price_list" :key="index">
                                <span v-if="item.goods_type === 1">协定方总价：</span>
                                <span v-if="item.goods_type === 2">组方总价：</span>
                                <span v-if="item.goods_type === 4">西成药总价：</span>
                                总价{{item.price}}元
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>收货人</td>
                        <td>{{orderinfoData.orderinfo.name}}</td>
                    </tr>
                    <tr>
                        <td>收货人联系方式</td>
                        <td>{{orderinfoData.orderinfo.mobile}}</td>
                    </tr>
                    <tr>
                        <td>客户昵称</td>
                        <td>{{orderinfoData.orderinfo.nickname}}</td>
                    </tr>
                    <tr>
                        <td>仓库</td>
                        <td>{{orderinfoData.orderinfo.warehouse}}</td>
                    </tr>
                    <tr>
                        <td>地区</td>
                        <td>{{orderinfoData.orderinfo.area}}</td>
                    </tr>
                    <tr>
                        <td>地址</td>
                        <td>{{orderinfoData.orderinfo.address}}</td>
                    </tr>
                    <tr>
                        <td>物流公司</td>
                        <td>{{orderinfoData.orderinfo.wuliu_name}}</td>
                    </tr>
                    <tr>
                        <td>物流单号</td>
                        <td>{{orderinfoData.orderinfo.express}}</td>
                    </tr>
                    <tr>
                        <td>提交时间</td>
                        <td>{{orderinfoData.orderinfo.created_at}}</td>
                    </tr>
                    <tr>
                        <td>备注</td>
                        <td>{{orderinfoData.orderinfo.notes}}</td>
                    </tr>
                    <tr>
                        <td>订单状态</td>
                        <td>{{orderinfoData.orderinfo.state}}</td>
                    </tr>
                    <tr>
                        <td>订单结算状态</td>
                        <td v-if="orderinfoData.orderinfo.jiesuan_state === 0">未结算</td>
                        <td v-if="orderinfoData.orderinfo.jiesuan_state === 1">已结算</td>
                    </tr>

                    <tr>
                        <td>预提点值</td>
                        <td v-html="orderinfoData.orderinfo.extract_ready"></td>
                    </tr>
                    <tr>
                        <td>结算类型</td>
                        <td v-html="orderinfoData.orderinfo.jiesuan_type"></td>
                    </tr>
                    <tr>
                        <td>结算提点值</td>
                        <td v-html="orderinfoData.orderinfo.extract_over"></td>
                    </tr>
                    <tr>
                        <td>结算提点金额</td>
                        <td v-html="orderinfoData.orderinfo.extract_money"></td>
                    </tr>
                    <tr>
                        <td>结算时间</td>
                        <td>{{orderinfoData.orderinfo.jiesuan_at}}</td>
                    </tr>
                    <tr>
                        <td>结算管理员</td>
                        <td>{{orderinfoData.orderinfo.jiesuan_admin}}</td>
                    </tr>
                    <tr>
                        <td>结算编号</td>
                        <td>{{orderinfoData.orderinfo.jiesuan_code}}</td>
                    </tr>
                </table>
            </div>
            <div class="details">
                <div class="title">审核信息</div>
                <table class="ajun-table">
                    <tr>
                        <td>平台审核人</td>
                        <td>{{orderinfoData.check.pt_aduit_name}}</td>
                    </tr>
                    <tr >
                        <td>平台审核时间</td>
                        <td>{{orderinfoData.check.pt_aduit_time}}</td>
                    </tr>
                    <tr >
                        <td>物流审核人</td>
                        <td>{{orderinfoData.check.wuliu_aduit_name}}</td>
                    </tr>
                    <tr >
                        <td>物流审核时间</td>
                        <td>{{orderinfoData.check.wuliu_aduit_time}}</td>
                    </tr>
                    <tr >
                        <td>仓库审核人</td>
                        <td>{{orderinfoData.check.fahuo_aduit_name}}</td>
                    </tr>
                    <tr >
                        <td>仓库审核时间</td>
                        <td>{{orderinfoData.check.fahuo_aduit_time}}</td>
                    </tr>
                    <tr >
                        <td>发货时间</td>
                        <td>{{orderinfoData.check.fahuo_time}}</td>
                    </tr>
                    <tr >
                        <td>驳回原因</td>
                        <td>{{orderinfoData.check.bohui_reason}}</td>
                    </tr>
                    <tr >
                        <td>确认收货管理员</td>
                        <td>{{orderinfoData.check.shouhuo_name}}</td>
                    </tr>
                    <tr >
                        <td>收货时间</td>
                        <td>{{orderinfoData.check.shouhuo_time}}</td>
                    </tr>
                    <tr >
                        <td>拒收管理员</td>
                        <td>{{orderinfoData.check.jushou_name}}</td>
                    </tr>
                    <tr >
                        <td>拒收时间</td>
                        <td>{{orderinfoData.check.jushou_time}}</td>
                    </tr>
                </table>
            </div>
            <div class="details">
                <div class="title">病症信息</div>
                <table class="ajun-table">
                    <tr>
                        <td>档案编号</td>
                        <td>{{orderinfoData.disease.customer_code}}</td>
                    </tr>
                    <tr>
                        <td>病症编号</td>
                        <td>{{orderinfoData.disease.disease_id}}</td>
                    </tr>
                    <tr>
                        <td>就诊科室</td>
                        <td>{{orderinfoData.disease.office}}</td>
                    </tr>
                    <tr>
                        <td>电子问诊单</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.wenzhen_json" :key="index" @click="electronicChange(1, item)" >点我查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>电子病历</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.bingli_json" :key="index" @click="electronicChange(2, item)" >点我查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>电子处方笺&电子护理单&电子治疗单</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.chufang_json" :key="index" @click="electronicChange(3, item)" >点我查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>问诊单pdf</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.wenzhen_url" :key="index"  @click="open(item)">点击查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>病历pdf</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.bingli_url" :key="index"  @click="open(item)">点击查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>处方笺pdf</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.chufang_url" :key="index"  @click="open(item)">点击查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>护理单pdf</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.huli_url" :key="index"  @click="open(item)">点击查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>治疗单pdf</td>
                        <td>
                            <span class="color-f8494c cursor" v-for="(item, index) in orderinfoData.disease.huli_zhiliao_url" :key="index"  @click="open(item)">点击查看<br/></span>
                        </td>
                    </tr>
                    <tr>
                        <td>体检图片</td>
                        <td>
                            <div class="color-f8494c cursor" @click="imgShowChange(orderinfoData.disease.tijian_pic)">点我查看</div>
                        </td>
                    </tr>
                    <tr>
                        <td>体检补充内容</td>
                        <td>{{orderinfoData.disease.tijian}}</td>
                    </tr>
                    <tr>
                        <td>辅助检查结果图片</td>
                        <td>
                            <div class="color-f8494c cursor" @click="imgShowChange(orderinfoData.disease.fuzhu_pic)">点我查看</div>
                        </td>
                    </tr>
                    <tr>
                        <td>辅助检查结果补充</td>
                        <td>{{orderinfoData.disease.fuzhu_result}}</td>
                    </tr>
                    <tr>
                        <td>病症备注</td>
                        <td>{{orderinfoData.disease.beizhu}}</td>
                    </tr>
                    <tr>
                        <td>确诊备注</td>
                        <td>{{orderinfoData.disease.quezhen_beizhu}}</td>
                    </tr>
                    <tr>
                        <td>处方状态</td>
                        <td>{{orderinfoData.disease.is_save}}</td>
                    </tr>
                </table>
            </div>
        </el-dialog>
        <!-- 用户病症记录 -->
        <el-dialog title="用户病症记录" :visible.sync="diseaseRecordsShow" width="1300px">
            <div class="operation">
                <div class="pull-left">
                    <div class="input">
                        <el-input v-model="diseaseRecordParams.id" clearable size="mini" placeholder="病症编号"></el-input>
                    </div>
                    <div class="input">
                        <el-select v-model="diseaseRecordParams.state" clearable size="mini" placeholder="病症状态">
                            <el-option v-for="item in diseaseRecordState" :key="item.type" :label="item.name" :value="item.type" ></el-option>
                        </el-select>
                    </div>
                    <div class="input">
                        <el-date-picker v-model="establishTime" size="mini" type="datetimerange" range-separator="至" start-placeholder="创建开始日期" end-placeholder="创建结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </div>
                    <div class="input">
                        <el-date-picker v-model="firstVisitTime" size="mini" type="datetimerange" range-separator="至" start-placeholder="初诊开始日期" end-placeholder="初诊结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </div>
                    <div class="input">
                        <el-date-picker v-model="prescriptionTime" size="mini" type="datetimerange" range-separator="至" start-placeholder="处方开始日期" end-placeholder="处方结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </div>
                    <div class="search">
                        <el-button icon="el-icon-search" type="primary" size="mini" @click="diseaseSearch">查询结果</el-button>
                    </div>
                    <div class="search">
                        <el-button icon="el-icon-delete" type="primary" size="mini" @click="diseaseEmpty">清空删选条件</el-button>
                    </div>
                </div>
                <div class="pull-right"></div>
            </div>
            <div class="table">
                <div class="table-list">
                    <el-table :data="diseaseRecordList" border :header-cell-style="{background:'#f3f3f3'}">
                        <el-table-column align="center" prop="id" label="病症编号"></el-table-column>
                        <el-table-column align="center" prop="office_name" label="就诊科室"></el-table-column>
                        <el-table-column align="center" prop="yz_account" label="医助"></el-table-column>
                        <el-table-column align="center" prop="dactor_name" label="主治医生"></el-table-column>
                        <el-table-column align="center" prop="ctime" label="创建时间" width="180"></el-table-column>
                        <el-table-column align="center" prop="diagnosis_time" label="初步诊断时间"  width="180"></el-table-column>
                        <el-table-column align="center" prop="prescription_time" label="病历处方时间"  width="180"></el-table-column>
                        <el-table-column align="center" prop="state" label="病症状态"></el-table-column>
                        <el-table-column align="center" fixed="right" label="操作">
                            <template slot-scope="scope">
                                <div>
                                    <span class="cursor color-f8494c" @click="diseaseTarget(scope.row.id)">病症详情</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="table-peg">
                    <div class="pull-left"></div>
                    <div class="pull-right">
                        <el-pagination
                            @size-change="diseaseHandleSizeChange"
                            @current-change="diseaseHandleCurrentChange"
                            :current-page="diseaseRecordParams.page"
                            :page-sizes="[30, 50, 100]"
                            :page-size="diseaseRecordParams.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="diseaseRecordCount"
                        ></el-pagination>
                    </div>
                </div>
            </div>
        </el-dialog>
        <!-- 病症详情 -->
        <el-dialog title="病症详情" :visible.sync="newInfoShow" width="980px">
            <div class="new-info">
                <h3>《患者档案登记表》</h3>
                <ul>
                    <li>
                        <label>档案编号：{{newInfoData.customer_code}}</label>
                    </li>
                    <li>
                        <label>病症编号：{{newInfoData.disease_id}}</label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>医助编号：{{newInfoData.yz_code}}</label>
                    </li>
                    <li>
                        <label>建档日期：{{newInfoData.customer_create_time}}</label>
                    </li>
                </ul>
                <div class="info">
                    <label>姓名: {{newInfoData.name}}</label>
                    <label>性别: {{newInfoData.sex}}</label>
                    <label>年龄: {{newInfoData.age}}</label>
                    <label>职业: {{newInfoData.job}}</label>
                    <label>联系方式: {{newInfoData.mobile}}</label>
                </div>
                <div class="info">
                    <label>昵称: {{newInfoData.nickname}}</label>
                    <label>微信号: {{newInfoData.wechat}}</label>
                </div>
                <div class="info">
                    <label>详细地址: {{newInfoData.address}}</label>
                </div>
                <div class="wenzhen_content">
                    <div class="content_title" style="border-top:0;">问诊单内容</div>
                    <ul>
                        <li>
                            <div class="text">
                                <div>主诉症状：</div>
                                <div>主诉：{{wenzhen_content.wenzhen_zhusu}}</div>
                                <div>现病史：{{wenzhen_content.wenzhen_disease_ing}}</div>
                                <div>既往史：{{wenzhen_content.wenzhen_disease_ed}}</div>
                                <div>过敏史：{{wenzhen_content.guomin}}</div>
                                <div>体检信息：{{wenzhen_content.tijian}}</div>
                                <div>辅助检查结果信息：{{wenzhen_content.fuzhu_result}}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="content_title">治疗方案</div>
                    <ul>
                        <li>
                            <div class="text">
                                <div>{{zhiliao.disease_view}}</div>
                                <div>{{zhiliao.chubu_xiedingfang}}</div>
                                <div>{{zhiliao.chubu_zufang}}</div>
                                <div>{{zhiliao.chubu_xichengyao}}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="content_title">医师诊断</div>
                    <ul>
                        <li>
                            <div class="text">
                                <div>{{zhenduan.diagnosis}}</div>
                                <div>{{zhenduan.chubu_fenxi}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="diagnose">
                    <div>
                        <label>医师签章:</label>
                        <p>
                            <span>{{diagnosis_time.year}}年</span>
                            <span>{{diagnosis_time.month}}月</span>
                            <span>{{diagnosis_time.day}}日</span>
                            <span>{{diagnosis_time.hour}}时</span>
                            <span>{{diagnosis_time.minute}}分</span>
                        </p>
                    </div>
                </div>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>体检图片</td>
                            <td class="cursor color-f8494c" @click="imgShowChange(newInfoData.tijian_pic)">点击查看</td>
                        </tr>
                        <tr>
                            <td>体检信息</td>
                            <td>{{newInfoData.tijian}}</td>
                        </tr>
                        <tr>
                            <td>辅助检查结果图片</td>
                            <td class="cursor color-f8494c"  @click="imgShowChange(newInfoData.fuzhu_pic)">点击查看</td>
                        </tr>
                        <tr>
                            <td>辅助检查结果补充</td>
                            <td>{{newInfoData.fuzhu_result}}</td>
                        </tr>
                        <tr>
                            <td>病症备注</td>
                            <td>{{newInfoData.beizhu}}</td>
                        </tr>
                        <tr>
                            <td>订单编号</td>
                            <td>{{newInfoData.order_sn}}</td>
                        </tr>
                        <tr v-for="(item, index) in chufang" :key="index" v-show="newInfoData.is_show === 1">
                            <td>处方笺pdf</td>
                            <td  >
                                <span class="cursor color-f8494c" @click="open(item)">点击查看</span>
                            </td>
                        </tr>
                        <tr v-for="(item, index) in huli" :key="index" v-show="newInfoData.is_show === 1">
                            <td>护理单pdf</td>
                            <td>
                                <span class="cursor color-f8494c" @click="open(item)">点击查看</span>
                            </td>
                        </tr>
                        <tr v-for="(item, index) in zhiLiao" :key="index" v-show="newInfoData.is_show === 1">
                            <td>治疗单pdf</td>
                            <td>
                                <span class="cursor color-f8494c"  @click="open(item)">点击查看</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="newInfoShow = false">取 消</el-button>
            </span>
        </el-dialog>
        <!-- 关联私号档案 -->
        <el-dialog title="关联自建档案" :visible.sync="relevanceShow" width="450px">
            <el-form label-width="120px" :model="formLabelAlign">
                <el-form-item label="自建档案编号">
                    <el-input v-model="relevanceParams.customer_code" clearable size="mini" placeholder="自建档案编号"></el-input>
                </el-form-item>
                <el-form-item label="app档案编号">
                    <el-input v-model="relevanceParams.app_code" clearable size="mini" placeholder="app档案编号"></el-input>
                </el-form-item>
            </el-form>
            <div class="centered">
                <el-button icon="el-icon-search" type="primary" size="mini" v-show="!relevanceSearchShow" @click="relevanceSearch">查 询</el-button>
                <el-button icon="el-icon-search" type="primary" size="mini" v-show="relevanceSearchShow" @click="relevanceBin">绑 定</el-button>
            </div>
            <div class="footer" v-show="relevanceSearchShow">
                <div class="text">自建档案提点数: {{relevanceData.customer_extract_base}}</div>
                <div class="text">app用户提点数: {{relevanceData.app_customer_extract_base}}</div>
                <div class="text">关联后提点数: {{relevanceParams.extract_base}}</div>
            </div>
        </el-dialog> 
        <!-- 用户聊天记录 -->
        <el-dialog title="用户聊天记录" :visible.sync="chatShow" width="1200px">
            <div class="operation">
                <div class="pull-left">
                    <div class="input">
                        <el-input v-model="chatParams.msg" clearable size="mini" placeholder="聊天内容"></el-input>
                    </div>
                    <!-- <div class="input">
                        <el-select v-model="chatParams.office_id" clearable size="mini" placeholder="科室">
                            <el-option v-for="item in laboratory" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                        </el-select>
                    </div> -->
                    <div class="input">
                        <el-date-picker v-model="chatTime" size="mini" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </div>
                    <div class="search">
                        <el-button icon="el-icon-search" type="primary" size="mini" @click="chatSearch">查询结果</el-button>
                    </div>
                    <div class="search">
                        <el-button icon="el-icon-delete" type="primary" size="mini" @click="chatEmpty">清空删选条件</el-button>
                    </div>
                </div>
                <div class="pull-right"></div>
            </div>
            <div class="centens">
                <div class="centered" v-if="chatDataShow">暂无聊天记录</div>
                <div class="up color-f8494c cursor centered" v-if="upShow" @click="upDownChange('up')">加载更多</div>
                <ul class="list">
                    <li class="item" v-for="(item, index) in chatList" :key="index">
                        <div class="color-f8494c cursor centered" v-show="backShow" @click="back(item.id)">查看前后消息</div>
                        <div class="type-1" v-if="item.stype === 1">
                            <div class="avatar">
                                <img :src="item.avatar" alt="">
                            </div>
                            <div class="contens">
                                <div class="username-time"><span class="color-f8494c">{{item.account}}</span> {{item.created_at}}</div>
                                <div class="chat">
                                    <div class="text" v-if="item.msg_type === 1">{{item.msg.content}}</div>
                                    <div class="img" v-if="item.msg_type === 2">
                                        <img :src="item.msg.picUrl" alt="">
                                    </div>
                                    <div class="audio" v-if="item.msg_type === 3">
                                        <audio :src="item.msg.audioUrl" controls>您的浏览器不支持 audio 标签。</audio>
                                    </div>
                                    <div class="office" v-if="item.msg_type === 4">
                                        <div class="h1">{{item.msg.officeName}}</div>
                                        <div class="p">{{item.msg.officeDesc}}</div>
                                    </div>
                                    <div class="office" v-if="item.msg_type === 5">
                                        <div class="h1">{{item.msg.officeName}}</div>
                                        <div class="p">{{item.msg.officeDesc}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="type-2" v-if="item.stype === 2 || item.stype === 3">
                            <div class="avatar">
                                <img :src="item.avatar" alt="">
                            </div>
                            <div class="contens">
                                <div class="username-time">{{item.created_at}} <span class="color-f8494c">{{item.account}}</span></div>
                                <div class="chat">
                                    <div class="text" v-if="item.msg_type === 1">{{item.msg.content}}</div>
                                    <div class="img" v-if="item.msg_type === 2">
                                        <img :src="item.msg.picUrl" alt="">
                                    </div>
                                    <div class="audio" v-if="item.msg_type === 3">
                                        <audio :src="item.msg.audioUrl" controls>您的浏览器不支持 audio 标签。</audio>
                                    </div>
                                    <div class="office" v-if="item.msg_type === 4">
                                        <div class="h1">{{item.msg.officeName}}</div>
                                        <div class="p">{{item.msg.officeDesc}}</div>
                                    </div>
                                    <div class="office" v-if="item.msg_type === 5">
                                        <div class="h1">订单编号: {{item.msg.order_sn}}</div>
                                        <div class="p">{{item.msg.orderDesc}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="down color-f8494c cursor centered" v-if="downShow" @click="upDownChange('down')">加载更多</div>
            </div>
        </el-dialog>
        <!-- 电子问诊单 -->
        <el-dialog title="电子问诊单" :visible.sync="electronicShow1" width="980px">
            <div class="new-info">
                <h3>《患者档案登记表》</h3>
                <ul>
                    <li>
                        <label>档案编号：{{disease_wenzhen_json.customer_code}}</label>
                    </li>
                    <li>
                        <label>病症编号：{{disease_wenzhen_json.prescription_code}}</label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>医助编号：{{disease_wenzhen_json.kf_name}}</label>
                    </li>
                    <li>
                        <label>建档日期：{{disease_wenzhen_json.customer_date}}</label>
                    </li>
                </ul>
                <div class="info">
                    <label>姓名: {{disease_wenzhen_json.wenzhen_name}}</label>
                    <label>性别: {{disease_wenzhen_json.wenzhen_sex}}</label>
                    <label>年龄: {{disease_wenzhen_json.wenzhen_age}}</label>
                    <label>职业: {{disease_wenzhen_json.wenzhen_job}}</label>
                    <label>联系方式: {{disease_wenzhen_json.wenzhen_mobile}}</label>
                </div>
                <div class="info">
                    <label>昵称: {{disease_wenzhen_json.wenzhen_nickname}}</label>
                    <label>微信号: {{disease_wenzhen_json.wenzhen_wechat}}</label>
                </div>
                <div class="info">
                    <label>详细地址: {{disease_wenzhen_json.wenzhen_address}}</label>
                </div>
                <div class="wenzhen_content">
                    <div class="content_title" style="border-top:0;">问诊单内容</div>
                    <ul>
                        <li>
                            <div class="text">
                                <div v-html="disease_wenzhen_json.main_complaint"></div>
                            </div>
                        </li>
                    </ul>
                    <div class="content_title">治疗方案</div>
                    <ul>
                        <li>
                            <div class="text">
                                <div v-html="disease_wenzhen_json.other_beizhu"></div>
                            </div>
                        </li>
                    </ul>
                    <div class="content_title">医师诊断</div>
                    <ul>
                        <li>
                            <div class="text">
                                <div v-html="disease_wenzhen_json.disease_zhenduan"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="diagnose">
                    <div>
                        <label>医师签章:</label>
                        <p>
                            <span>{{disease_wenzhen_json.year}}年</span>
                            <span>{{disease_wenzhen_json.month}}月</span>
                            <span>{{disease_wenzhen_json.date}}日</span>
                            <span>{{disease_wenzhen_json.hour}}时</span>
                            <span>{{disease_wenzhen_json.min}}分</span>
                        </p>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="electronicShow1 = false">取 消</el-button>
            </span>
        </el-dialog>
        <!-- 电子病历 -->
        <el-dialog title="电子病历" :visible.sync="electronicShow2" width="980px">
            <div class="new-info">
                <h3>病 历 内 容</h3>
                <div class="wenzhen_content">
                    <ul style="border-bottom: 1px solid grey;">
                        <li style="min-height: 0;">
                            <div class="text">
                                <div class="h1">就诊医院:{{disease_bingli_json.hospital}}</div>
                                <div class="h1">就诊科室:{{disease_bingli_json.office}}</div>
                                <div class="h1">
                                    时  间:
                                    <span class="time">{{disease_bingli_json.year}}</span>
                                    <span class="time">年</span>
                                    <span class="time">{{disease_bingli_json.month}}</span>
                                    <span class="time">月</span>
                                    <span class="time">{{disease_bingli_json.day}}</span>
                                    <span class="time">日</span>
                                    <span class="time">{{disease_bingli_json.hour}}</span>
                                    <span class="time">时</span>
                                    <span class="time">{{disease_bingli_json.min}}</span>
                                    <span class="time">分</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div class="text">
                                <div class="p">主诉: <br> {{disease_bingli_json.main_complaint}}</div>
                                <div class="p">现病史: <br> {{disease_bingli_json.disease_ing}}</div>
                                <div class="p">既往史: <br> {{disease_bingli_json.disease_ed}}</div>
                                <div class="p">体检: <br> {{disease_bingli_json.tijian}}</div>
                                <div class="p">辅助检查结果: <br> {{disease_bingli_json.fuzhu_result}}</div>
                                <div class="p">初步诊断: <br> {{disease_bingli_json.chubu}}</div>
                                <div class="p">治疗意见: <br> {{disease_bingli_json.zhiliao}}</div>
                                <div class="p text-right">医师签名：</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="electronicShow2 = false">取 消</el-button>
            </span>
        </el-dialog>
        <!-- 电子处方笺&电子护理单&电子治疗单 -->
        <el-dialog title="电子处方笺&电子护理单&电子治疗单" :visible.sync="electronicShow3" width="980px">
            <div class="new-info">
                <div class="wenzhen_content" style="padding: 20px;">
                    <div class="upright">
                        <span>正</span>
                        <span>方</span>
                    </div>
                    <div class="h2">武汉泰斗中医院</div>
                    <div class="h3">处 方 笺</div>
                    <div class="info">
                        <label style="width: 70%;">NO: {{disease_chufang_json.prescription_code}}</label>
                        <label>档案号: {{disease_chufang_json.customer_code}}</label>
                    </div>
                    <div class="info">
                        <label style="width: 15%;">姓名: {{disease_chufang_json.name}}</label>
                        <label style="width: 15%;">性别: {{disease_chufang_json.sex}}</label>
                        <label style="width: 14%;">年龄: {{disease_chufang_json.age}}</label>
                        <label>日期: {{disease_chufang_json.year}} 年 {{disease_chufang_json.month}} 月 {{disease_chufang_json.day}} 日 </label>
                    </div>
                    <div class="info">
                        <label style="width: 40%;">地址: {{disease_chufang_json.address}}</label>
                        <label>电话: {{disease_chufang_json.mobile}}</label>
                    </div>
                    <div style="border-bottom: 1px solid grey;">
                        <div style="padding: 10px 0;">初步(诊断): {{disease_chufang_json.chubu}}</div>
                    </div>
                    <div style="border-bottom: 1px solid grey;">
                        <div style="padding: 10px 0;"><span style="font-size: 24px;font-weight: bold;">Rp:</span></div>
                        <div style="padding: 0 20px 20px 30px;font-size: 16px;height: 400px;">{{disease_chufang_json.content}}</div>
                    </div>
                    <div class="info">
                        <label style="width: 40%;">医师: </label>
                        <label>审核: </label>
                    </div>
                    <div class="info">
                        <label style="width: 25%;">调配: </label>
                        <label style="width: 25%;">核发: </label>
                        <label>金额: </label>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="electronicShow3 = false">取 消</el-button>
            </span>
        </el-dialog>
        <!-- 游览图片 -->
        <transition name="el-fade-in-linear">
            <Carousel v-if="carouselShow" :carouselArray="carouselArray" :carouselIndex="carouselIndex" :carouselShow="carouselShow" @iconChange="iconChange"></Carousel>
        </transition>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { userIndex, userAssign, userInfo, orderIndex, orderInfo, orderCheck, diseaseCheck, archiveSearch, archiveBind, chatList, diseaseList, chatSign, userCustomer, newInfo } from "@/api/user.js";
import Carousel from '@/components/Carousel.vue';

export default {
    data() {
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
            channel: [{ type: 0, value: "全平台" }, { type: 1, value: "Android" }, { type: 2, value: "iOS" }],  //  平台
            batchShow: true,   //  是否检索
            userChangeShow: false,  //  选中分配/批量分配
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
            disease_wenzhen_json: '',   //  电子问诊单
            disease_bingli_json : '',    //  电子病历，病历内容
            disease_chufang_json: '',   //  电子处方笺&电子护理单&电子治疗单
            electronicShow1: false,  //  电子问诊单显示
            electronicShow2: false,  //  电子病历单显示
            electronicShow3: false,  //  电子处方笺&电子护理单&电子治疗单显示
            carouselShow: false, //  查看图片
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

            chatShow: false,    //  显示聊天记录
            chatParams: {  //  聊天记录参数
                user_id: '',    //  用户ID
                msg: '',   //  聊天内容
                created_at_begin: '',  //  开始范围时间
                created_at_end: '',   //  结束范围时间
                mode: '',   //  查找方式 up向上查找 down向下查找
                sign: '',   //  聊天记录标识，此参数必须和mode参数一起使用，示例：1553054327.195
                id: '', //  聊天记录id，查找某一条聊天记录上下15条记录
            },
            chatTime: '',   //  聊天时间段
            chatList: [],   //  聊天记录数据
            upShow: false,  //  显示向上加载
            downShow: false,    //  显示向下加载
            chatDataShow: false,    //  是否有数据
            backShow: false,    //  显示前后消息

            newInfoData: '',    //  病症记录详情
            newInfoShow: false, //  病症记录显示
            wenzhen_content: '',    //  问诊单内容
            zhiliao: '',    //  治疗方案
            zhenduan: '',    //  医师诊断
            diagnosis_time: '',    //  诊断时间
            chufang: '',    //  处方笺pdf
            huli: '',   //  护理单pdf
            zhiLiao: '',    //  治疗单pdf
        };
    },
    computed: mapState({
        yzList: (state) => state.selector.yzList,   //   医助
        department: (state) => state.selector.department,   //   部门
        laboratory: (state) => state.selector.laboratory,   //   科室
    }),
    mounted() {
        this.index();
        this.getDepartment();
        this.getYzList();
        this.getLaboratory();
    },
    methods: {
        ...mapActions({ 
            getDepartment: 'getDepartment',  //  部门
            getYzList: 'getYzList',  //  医助
            getLaboratory: 'getLaboratory',     //  科室
        }),
        async index() {
            //  主页列表数据
            let data = await userIndex(this.params);
            if (data.code === 200) {
                this.list = data.data.list;
                this.count = data.data.total;
                this.all_user_id = data.data.all_user_id;
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
        handleSelectionChange(val){ //  选中
            this.userIdList = [];
            val.forEach( (item) => {
                this.userIdList.push(item.user_id);
            });
        },
        search() {
            //  检索
            if(this.params.user_id == '' || this.params.account == '' || this.params.yz_account == '' || this.params.os_type == '' || this.params.department_id == ''){
                this.batchShow = true;
            }else{
                this.batchShow = false;
            }
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.batchShow = false;
            this.params = {
                customer_code: "", //  用户ID
                account: "", //  用户账号
                yz_account: "",   //  医助账号
                os_type: "", //  Android,2=>IOS,不传默认全平台
                department_id: "", //  部门id
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            };
            this.index();
        },
        toggleSelection(rows){  //  全选
            // if (rows) {
            //     rows.forEach(row => {
            //         this.$refs.multipleTable.toggleRowSelection(row);
            //     });
            // } else {
            //     this.$refs.multipleTable.clearSelection();
            // }
        },
        batchChange(val){   //  分配医助显示
            if(val === 1){
                this.userShow = true;
            }else{
                this.userShow = false;
            }
            this.dialogVisible = true;
        },
        allocation(id){ //  分配医助
            this.userIdList[0] = id;
            this.userShow = true;
            this.dialogVisible = true;
        },
        async handleClose() {   //  分配医助提交
            if (this.yzId == "") {
                this.$message({ message: "请选择医助", type: "warning" });
                return;
            }
            let data = "";
            if (this.userShow) {
                data = await userAssign({yz_id: this.yzId, user_id: this.userIdList});
            } else {
                data = await userAssign({yz_id: this.yzId, user_id: this.all_user_id});
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.userIdList = [];
                this.yzId = '';
                this.index();
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        async personalDetails(id){    //  用户个人信息
            let data = await userInfo({id: id});
            if(data.code === 200){
                this.userData = data.data;
                this.userChangeShow = !this.userChangeShow;
            }
            let customer = await userCustomer({user_id: id});
            if(customer.code === 200){
                this.customerData = customer.data;
            }
        },
        orderChange(id){    //  查看订单记录
            this.orderParams = {  //  用户订单记录检索数据
                user_id: id,
                receiver: '',   //  收货人
                yz_account: '',   //  医助账号
                department_id: '',   //  部门
                order_sn: '',   //  订单号
                state: '',   //  订单状态
                jiesuan_state: '',   //  结算状态
                created_at_begin: '',   //  提交时间开始时间
                created_at_end: '',   //  提交时间结束时间
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            };
            this.orderShow = true;
            this.orderIndex();
        },
        async orderIndex() {
            //  订单列表数据
            let data = await orderIndex(this.orderParams);
            if (data.code === 200) {
                this.orderList = data.data.list;
                this.orderCount = data.data.total;
                this.orderStatistical = data.data.statistical;
                this.orderList.forEach((item) => {
                    this.orderState.forEach((val) => {
                        if(item.state === val.type){
                            item.state = val.name;
                        }
                    });
                    this.orderJiesuanState.forEach((val) => {
                        if(item.jiesuan_state === val.type){
                            item.jiesuan_state = val.name;
                        }
                    });
                });
            }
        },
        orderHandleCurrentChange(val) {
            //	请求多少页
            this.orderParams.page = val;
            this.orderIndex();
        },
        orderHandleSizeChange(val) {
            //	每页多少条
            this.orderParams.pageSize = val;
            this.orderIndex();
        },
        orderSearch() {
            //  检索
            if(this.orderTime === null){
                this.orderParams.created_at_begin = '';
                this.orderParams.created_at_end = '';
            }else{
                this.orderParams.created_at_begin = this.orderTime[0];
                this.orderParams.created_at_end = this.orderTime[1];
            }
            this.orderParams.page = 1;
            this.orderIndex();
        },
        orderEmpty() {
            //  清空删选条件
            this.orderTime = '';
            this.orderParams.order_sn = '';
            this.orderParams.receiver = '';
            this.orderParams.yz_account = '';
            this.orderParams.department_id = '';
            this.orderParams.state = '';
            this.orderParams.jiesuan_state = '';
            this.orderParams.created_at_begin = '';
            this.orderParams.created_at_end = '';
            this.orderIndex();
        },
        async particularsChange(id){    //  订单详情
            let data = await orderInfo({id: id});
            if (data.code === 200) {
                this.orderinfoData.check = data.data.check;
                this.orderinfoData.disease = data.data.disease;
                this.orderState.forEach((item) => {
                    if(item.type === data.data.orderinfo.state){
                        data.data.orderinfo.state = item.name;
                    }
                });
                this.orderinfoData.orderinfo = data.data.orderinfo;
                this.orderParticularsShow = true;
                this.orderState
            }
        },
        electronicChange(val, item){   //  打开电子单
            if(val === 1){
                this.electronicShow1 = true;
                this.disease_wenzhen_json = item;
            }
            if(val === 2){
                this.electronicShow2 = true;
                this.disease_bingli_json = item;
            }
            if(val === 3){
                this.electronicShow3 = true;
                this.disease_chufang_json = item;
            }
        },
        imgShowChange(imgarray){    //  查看图片
            this.carouselArray = [];
            if(imgarray.length === 0){
                this.$message({ message: '暂无图片', type: "warning" });
            }else{
                const loading = this.$loading({
                    lock: true,
                    text: '加载中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                imgarray.forEach((item, index) => {
                    let img = new Image();
                    img.src = item;
                    img.onload = () => {
                        this.carouselArray.push({
                            url: item,
                            width: img.width,
                            height: img.height,
                        });
                        if(imgarray.length === index + 1){
                            this.carouselShow = true;
                            loading.close();
                        }
                    };
                });
            }
        },
        iconChange(data){   //  隐藏图片
            this.carouselShow = data;
        },
        diseaseRecordsChange(id){   //  用户病症记录显示
            this.diseaseRecordParams = {  //  检索条件
                user_id: id,
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
            };
            this.diseaseRecordsShow = true;
            this.diseaseRecordsGet();
        },
        async diseaseRecordsGet(){   //  用户病症记录请求
            let data = await diseaseList(this.diseaseRecordParams);
            if (data.code === 200) {
                if(data.data.list.length > 0){
                    data.data.list.forEach((item) => {
                        this.diseaseRecordState.forEach((val) => {
                            if(item.state === val.type){
                                item.state = val.name;
                            }
                        });
                    });
                }
                this.diseaseRecordList = data.data.list;
                this.diseaseRecordCount = data.data.total;
                this.diseaseRecordsShow = true;
            }
        },
        diseaseHandleCurrentChange(val) {
            //	请求多少页
            this.diseaseRecordParams.page = val;
            this.diseaseRecordsGet();
        },
        diseaseHandleSizeChange(val) {
            //	每页多少条
            this.diseaseRecordParams.pageSize = val;
            this.diseaseRecordsGet();
        },
        async diseaseTarget(id){ //  病症详情
            let data = await newInfo({id: id});
            if(data.code === 200){
                this.newInfoData = data.data;

                this.chufang = data.data.chufang_info.chufang;    //  处方笺pdf
                this.huli = data.data.chufang_info.huli;   //  护理单pdf
                this.zhiLiao = data.data.chufang_info.zhiliao;    //  治疗单pdf

                this.wenzhen_content = data.data.wenzhen_content;
                this.zhiliao = data.data.zhiliao;
                this.zhenduan = data.data.zhenduan;
                this.diagnosis_time = data.data.diagnosis_time;
                this.newInfoShow = true;
            }
        },
        open(url){ //  病症详情打开图片
            if(url.length !== 0){
                window.open(url);
            }
        },
        diseaseSearch() {
            //  检索
            if(this.establishTime === null){
                this.diseaseRecordParams.ctime_begin = '';
                this.diseaseRecordParams.ctime_end = '';
            }else{
                this.diseaseRecordParams.ctime_begin = this.establishTime[0];
                this.diseaseRecordParams.ctime_end = this.establishTime[1];
            }
            if(this.firstVisitTime === null){
                this.diseaseRecordParams.diagnosis_time_begin = '';
                this.diseaseRecordParams.diagnosis_time_end = '';
            }else{
                this.diseaseRecordParams.diagnosis_time_begin = this.firstVisitTime[0];
                this.diseaseRecordParams.diagnosis_time_end = this.firstVisitTime[1];
            }
            if(this.prescriptionTime === null){
                this.diseaseRecordParams.prescription_time_begin = '';
                this.diseaseRecordParams.prescription_time_end = '';
            }else{
                this.diseaseRecordParams.prescription_time_begin = this.prescriptionTime[0];
                this.diseaseRecordParams.prescription_time_end = this.prescriptionTime[1];
            }
            this.diseaseRecordParams.page = 1;
            this.diseaseRecordsGet();
        },
        diseaseEmpty() {
            //  清空删选条件
            this.establishTime = '';
            this.firstVisitTime = '';
            this.prescriptionTime = '';
            this.diseaseRecordParams.id = '';
            this.diseaseRecordParams.state = '';
            this.diseaseRecordParams.ctime_begin = '';
            this.diseaseRecordParams.ctime_end = '';
            this.diseaseRecordParams.diagnosis_time_begin = '';
            this.diseaseRecordParams.diagnosis_time_end = '';
            this.diseaseRecordParams.prescription_time_begin = '';
            this.diseaseRecordParams.prescription_time_end = '';
            this.diseaseRecordsGet();
        },
        relevanceClick(){   //  关联私号档案
            this.relevanceShow = true;
            this.relevanceSearchShow = false;
            this.relevanceParams.customer_code = '';
            this.relevanceParams.app_code = '';
        },
        async relevanceSearch(){    //  档案编号搜索
            let data = await archiveSearch({customer_code: this.relevanceParams.customer_code, app_code: this.relevanceParams.app_code});
            if(data.code === 200){
                this.relevanceData = data.data;
                this.relevanceSearchShow = true;
                if(data.data.customer_extract_base > data.data.app_customer_extract_base){
                    this.relevanceParams.extract_base = data.data.customer_extract_base;
                }else{
                    this.relevanceParams.extract_base = data.data.app_customer_extract_base;
                }
                this.relevanceParams.customer_id = data.data.customer_id;
                this.relevanceParams.app_customer_id = data.data.app_customer_id;
            }
        },
        async relevanceBin(){ //  绑定档案编号
            let data = await archiveBind({customer_id: this.relevanceParams.customer_id, app_customer_id: this.relevanceParams.app_customer_id, extract_base: this.relevanceParams.extract_base});
            if(data.code === 200){
                this.relevanceShow = false;
                this.relevanceSearchShow = false;
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        chatChange(id){   //  显示聊天记录
            this.chatShow = true;
            this.chatParams = {  //  聊天记录参数
                user_id: id,    //  用户ID
                msg: '',   //  聊天内容
                created_at_begin: '',  //  开始范围时间
                created_at_end: '',   //  结束范围时间
                mode: '',   //  查找方式 up向上查找 down向下查找
                sign: '',   //  聊天记录标识，此参数必须和mode参数一起使用，示例：1553054327.195
                id: '', //  聊天记录id，查找某一条聊天记录上下15条记录
            };
            this.chatList = [];
            this.chatIndex();
        },
        async chatIndex(){    //  请求聊天记录数据
            if(this.chatParams.msg !== '' ||  this.chatTime !== ''){
                this.backShow = true;
            }else{
                this.backShow = false;
            }
            let data = await chatList(this.chatParams);
            if(data.code === 200){
                if(this.chatParams.mode === 'up'){
                    if(data.data.list.length === 0){
                        this.upShow = false;
                    }else{
                        this.chatList.unshift(...data.data.list);
                    }
                }else if(this.chatParams.mode === 'down'){
                    if(data.data.list.length === 0){
                        this.downShow = false;
                    }else{
                        this.chatList.push(...data.data.list);
                    }
                }else{
                    this.upShow = true;
                    this.downShow = true;
                    this.chatList = data.data.list;
                }
                if(this.chatList.length === 0){
                    this.upShow = false;
                    this.downShow = false;
                    this.chatDataShow = true;
                }else{
                    this.chatDataShow = false;
                }
                this.chatParams.id = '';
            }
        },
        chatSearch(){   //  查询聊天记录
            this.chatList = [];
            this.chatParams.mode = '';
            if(this.chatTime === null){
                this.chatParams.created_at_begin = '';
                this.chatParams.created_at_end = '';
            }else{
                this.chatParams.created_at_begin = this.chatTime[0];
                this.chatParams.created_at_end = this.chatTime[1];
            }
            // this.chatParams.page = 1;
            this.chatIndex();
        },
        chatEmpty(){    //  清空检索条件
            this.chatList = [];
            this.chatTime = '';
            this.chatParams.msg = '';
            this.chatParams.mode = '';
            this.chatParams.sign = '';
            this.chatParams.created_at_begin = '';
            this.chatParams.created_at_end = '';
            this.backShow = false;
            this.chatIndex();
        },
        back(id){ //  查看前后消息
            this.chatList = [];
            this.chatParams.msg = '';
            this.chatTime = '';
            this.chatParams.id = id;
            this.chatIndex();
        },
        async upDownChange(val){ //  加载更多
            let id;
            if(val === 'up'){
                id = this.chatList[0].id;
            }else{
                id = this.chatList[this.chatList.length - 1].id
            }
            let data = await chatSign({id: id});
            if(data.code === 200){
                this.chatParams.mode = val;
                this.chatParams.sign = data.data;
                this.chatIndex();
            }
        },
    },
    components: {
        Carousel
    }
};
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