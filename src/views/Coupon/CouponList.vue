
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.coupon_name" clearable size="mini" placeholder="优惠券名称"></el-input>
                </div>
                <div class="input">
                    <el-select v-model="params.grant_type" clearable size="mini" placeholder="领取渠道">
                        <el-option v-for="item in channel" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-select v-model="params.office_id" clearable size="mini" placeholder="适用科室">
                        <el-option v-for="item in departmentData" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-select v-model="params.status" clearable size="mini" placeholder="优惠券状态">
                        <el-option v-for="item in status" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-date-picker v-model="time" size="mini" type="datetimerange" range-separator="至" start-placeholder="创建开始日期" end-placeholder="创建结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </div>
                <div class="search">
                    <el-button icon="el-icon-search" type="primary" size="mini" @click="search">查询结果</el-button>
                </div>
                <div class="search">
                    <el-button icon="el-icon-delete" type="primary" size="mini" @click="empty">清空删选条件</el-button>
                </div>
            </div>
            <div class="pull-right">
                <el-button icon="el-icon-circle-plus-outline" type="primary" size="mini" @click="add">添加</el-button>
            </div>
        </div>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border height="700" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="coupon_name" label="名称" width="180px"></el-table-column>
                    <el-table-column align="center" prop="grant_type" label="发放类型">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.grant_type === 1">注册发放</span>
                                <span class="color_red" v-else>邀请发放</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="office_name" label="适用科室"></el-table-column>
                    <el-table-column align="center" prop="conditions_of_use" label="使用门槛">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.conditions_of_use === '0'">无门槛</span>
                                <span v-else>{{scope.row.conditions_of_use}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="denomination" label="面额"></el-table-column>
                    <el-table-column align="center" prop="validity_period" label="有效期" width="180px">
                        <template slot-scope="scope">
                            <div>
                                <span v-if="scope.row.validity_period_type === 1">{{scope.row.validity_period}}</span>
                                <span v-else>{{scope.row.validity_period}} 天</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="admin_username" label="创建人"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="创建时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="status" label="状态">
                        <template slot-scope="scope">
                            <div>
                                <span class="color-f8494c" v-if="scope.row.status === 1">正常</span>
                                <span class="color_red" v-else>下架</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="address" fixed="right" label="操作" width="170px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" @click="record(scope.row.id)">发放记录</span>&nbsp;
                                <span class="cursor color-f8494c" @click="edit(scope.row.id)">编辑</span>&nbsp;
                                <span class="cursor color_red" v-if="scope.row.status === 1" @click="statusChange(scope.row.id, 2)">下架</span>
                                <span class="cursor color-f8494c" v-if="scope.row.status === 2" @click="statusChange(scope.row.id, 1)">上架</span>
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
        <el-dialog :title="title + '优惠券'" :visible.sync="dialogVisible" width="650px">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="* 优惠券名称">
                    <el-input v-model="formLabelAlign.coupon_name" clearable size="mini" placeholder="请输入优惠券名称" maxlength="30"></el-input>
                    <span class="font_12">1至30字符或汉字</span>
                </el-form-item>
                <el-form-item label="* 发放类型">
                    <el-select v-model="formLabelAlign.grant_type" :disabled="title === '编辑'" clearable size="mini" placeholder="请选择发放类型">
                        <el-option v-for="item in channel" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="* 适用科室">
                    <el-radio v-model="formLabelAlign.apply_office" :disabled="title === '编辑'" :label="1">全科室</el-radio>
                    <el-radio v-model="formLabelAlign.apply_office" :disabled="title === '编辑'" :label="2">部分科室</el-radio>
                    <el-select v-model="officeId" v-if="formLabelAlign.apply_office === 2" :disabled="title === '编辑'" multiple clearable size="mini" placeholder="请选择科室(多选)">
                        <el-option v-for="item in department" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="* 发行总量">
                    <el-input v-model="formLabelAlign.grant_total" clearable size="mini" placeholder="正整数，0为不限量"></el-input>
                </el-form-item>
                <el-form-item label="* 每人限领">
                    <el-input v-model="formLabelAlign.limited_per_person" clearable size="mini" placeholder="正整数，0为不限量">
                        <template slot="append">张</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="* 面额">
                    <el-input v-model="formLabelAlign.denomination" :disabled="title === '编辑'" clearable size="mini" maxlength="4" placeholder="请输入面额"></el-input>
                    <span class="font_12">单位元,1至9999的整数</span>
                </el-form-item>
                <el-form-item label="* 使用门槛">
                    <el-input v-model="formLabelAlign.conditions_of_use" :disabled="title === '编辑'" clearable size="mini" placeholder="0为无门槛">
                        <template slot="prepend">满</template>
                        <template slot="append">元可用</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="* 有效期">
                    <el-radio v-model="formLabelAlign.validity_period_type" @change="validity" :disabled="title === '编辑'" :label="1">日期范围</el-radio>
                    <el-radio v-model="formLabelAlign.validity_period_type" @change="validity" :disabled="title === '编辑'" :label="2">固定天数</el-radio>
                    <div v-if="formLabelAlign.validity_period_type === 1">
                        <el-date-picker v-model="formLabelAlign.validity_period" :picker-options="pickerOptions" :disabled="title === '编辑'" clearable type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </div>
                    <div v-if="formLabelAlign.validity_period_type === 2">
                        <el-input v-model="formLabelAlign.validity_period" :disabled="title === '编辑'" clearable size="mini" maxlength="3" placeholder="领取后到期天数"></el-input>
                        <span class="font_12">1至365的整数</span>
                    </div>
                </el-form-item>
                <el-form-item label="分类状态">
                    <el-switch v-model="formLabelAlign.status" :disabled="title === '编辑'" :active-value="2" :inactive-value="1" active-text="下架" inactive-text="正常" active-color="#e4e4e4" inactive-color="#1ABC9C"></el-switch>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 优惠券发放记录 -->
        <el-dialog title="优惠券发放记录" :visible.sync="detailsShow" width="1200px">
            <div class="details">
                <div class="title">基本信息</div>
                <table class="ajun-table">
                    <tr>
                        <td>名称</td>
                        <td>发放类型</td>
                        <td>适用科室</td>
                        <td>使用门槛</td>
                        <td>个人领取量</td>
                        <td>面额</td>
                        <td>有效期</td>
                        <td>状态</td>
                    </tr>
                    <tr>
                        <td>{{couponData.coupon_name}}</td>
                        <td v-if="couponData.grant_type === 1">注册发放</td>
                        <td v-else>邀请发放</td>
                        <td>{{couponData.office_name}}</td>
                        <td v-if="couponData.conditions_of_use == 0">无门槛</td>
                        <td v-else>{{couponData.conditions_of_use}}</td>
                        <td>{{couponData.limited_per_person}}</td>
                        <td>{{couponData.denomination}}</td>
                        <td v-if="couponData.validity_period_type === 1">{{couponData.validity_period}}</td>
                        <td v-else>{{couponData.validity_period}} 天</td>
                        <td v-if="couponData.status === 1">正常</td>
                        <td v-else>下架</td>
                    </tr>
                </table>
            </div>
            <div class="details">
                <div class="title">发放信息</div>
                <table class="ajun-table">
                    <tr>
                        <td>发放总量</td>
                        <td>已领取</td>
                        <td>已使用</td>
                    </tr>
                    <tr>
                        <td>{{couponData.grant_total}}</td>
                        <td>{{couponData.receive_total}}</td>
                        <td>{{couponData.use_total}}</td>
                    </tr>
                </table>
            </div>
            <div class="details">
                <div class="title">领取记录</div>
                <div class="operation">
                    <div class="pull-left">
                        <div class="input">
                            <el-select v-model="details.status" clearable size="mini" placeholder="优惠券状态">
                                <el-option v-for="item in detailsStatus" :key="item.type" :label="item.value" :value="item.type" ></el-option>
                            </el-select>
                        </div>
                        <div class="input">
                            <el-input v-model="details.nickname" clearable size="mini" placeholder="用户名称"></el-input>
                        </div>
                        <div class="input">
                            <el-input v-model="details.order_sn" clearable size="mini" placeholder="订单号"></el-input>
                        </div>
                        <div class="input">
                            <el-date-picker v-model="received" size="mini" type="datetimerange" range-separator="至" start-placeholder="领取开始日期" end-placeholder="领取结束日期" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                        </div>
                        <div class="search">
                            <el-button icon="el-icon-search" type="primary" size="mini" @click="detailsSearch">查询结果</el-button>
                        </div>
                        <div class="search">
                            <el-button icon="el-icon-delete" type="primary" size="mini" @click="detailsEmpty">清空删选条件</el-button>
                        </div>
                    </div>
                </div>
                <div class="table">
                    <div class="table-list">
                        <el-table :data="receiveLog.data" border :header-cell-style="{background:'#f3f3f3'}">
                            <el-table-column align="center" prop="id" label="记录ID"></el-table-column>
                            <el-table-column align="center" prop="user_nickname" label="领取用户"></el-table-column>
                            <el-table-column align="center" prop="received_at" label="领取时间"></el-table-column>
                            <el-table-column align="center" prop="status" label="使用状态">
                                <template slot-scope="scope">
                                    <div>
                                        <span class="color-f8494c" v-if="scope.row.status === 1">未使用</span>
                                        <span class="color_red" v-else>已使用</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" prop="used_at" label="使用时间"></el-table-column>
                            <el-table-column align="center" prop="order_sn" label="订单编号"></el-table-column>
                        </el-table>
                    </div>
                    <div class="table-peg">
                        <div class="pull-left"></div>
                        <div class="pull-right">
                            <el-pagination
                                @size-change="detailsChange"
                                @current-change="detailsCurrentChange"
                                :current-page="details.page"
                                :page-sizes="[30, 50, 100]"
                                :page-size="details.pageSize"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="receiveLog.total"
                            ></el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { coupon, couponStore, couponShow, couponUpdate, couponReceiveLog } from "@/api/coupon.js";
import { integer, decimals } from "@/utils/validate.js";

export default {
    data() {
        return {
            params: {
                coupon_name: "", //  优惠券名称
                office_id: "", //  科室
                created_at_start: "",   //  创建开始时间
                created_at_end: "", //  创建结束时间
                grant_type: "",   //  发放类型
                status: "", //  查询状态
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            time: '',   //  创建时间
            count: 0, //	总数据
            list: [], //	    列表数据
            title: "", //  添加/编辑
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {
                //  添加/编辑
                coupon_name: "",
                grant_type: '',
                grant_total: '',
                office_id: '',
                limited_per_person: '',
                denomination: '',
                conditions_of_use: '',
                validity_period_type: '',
                validity_period: '',
                status: 1,
            },
            office: '', //  适用科室
            officeId: [],   //  科室ID
            channel: [{ type: 1, value: "注册发放" }, { type: 2, value: "邀请发放" }],  //  渠道
            status: [{ type: 1, value: "正常" }, { type: 2, value: "下架" }],    //  状态
            pickerOptions: {    //  大于当前时间
                disabledDate(time){
                    let _now = Date.now();
                    return time.getTime() < _now;
                }
            },

            detailsShow: false, //  详情显示
            details: {  //  详情数据
                id: '',
                status: '',
                nickname: '',
                order_sn: '',
                received_at_start: '',
                received_at_end: '',
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            couponData: '',    //  详情数据
            receiveLog: '',    //  详情数据
            received: '',   //  领取时间
            detailsStatus: [{ type: 1, value: "未使用" }, { type: 2, value: "已使用" }],    //  状态
            departmentData: [], //  全科室
        };
    },
    computed: mapState({
        department: (state) => state.selector.laboratory,   //   科室
    }),
    mounted() {
        this.index();
        this.getLaboratory();
        this.departmentData = [{id: -1, name: '全科室'}, ...this.department];
    },
    methods: {
        ...mapActions({ 
            getLaboratory: 'getLaboratory',  //  科室
        }),
        async index() {
            //  主页列表数据
            let data = await coupon(this.params);
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
        async edit(id) {
            //  编辑
            this.title = "编辑";
            let data = await couponShow({id: id});
            if (data.code === 200) {
                this.formLabelAlign = data.data;
                this.officeId = this.formLabelAlign.office_id;
                this.formLabelAlign.id = id;
                this.dialogVisible = true;
            }
        },
        add() {
            this.title = "添加";
            this.formLabelAlign = {
                coupon_name: "",
                grant_type: '',
                grant_total: '',
                apply_office: '',
                office_id: '',
                limited_per_person: '',
                denomination: '',
                conditions_of_use: '',
                validity_period_type: '',
                validity_period: '',
                status: 1,
            };
            this.officeId = [];   //  科室ID
            this.dialogVisible = true;
        },
        async handleClose() {
            //  添加/编辑
            if (this.formLabelAlign.coupon_name === "") {
                this.$message({ message: "请输入优惠券名称", type: "warning" });
                return;
            }
            if (this.formLabelAlign.grant_type === "") {
                this.$message({ message: "请选择发放类型", type: "warning" });
                return;
            }
            if(this.formLabelAlign.apply_office === ''){
                this.$message({ message: "请选择适用科室", type: "warning" });
                return;
            }else{
                if(this.formLabelAlign.apply_office === 1){
                    this.formLabelAlign.office_id = [];
                }else{
                    this.formLabelAlign.office_id = this.officeId.join(",");
                    if(this.formLabelAlign.office_id ===''){
                        this.$message({ message: "请选择适用科室", type: "warning" });
                        return;
                    }
                }
            }
            if (this.formLabelAlign.grant_total === "") {
                this.$message({ message: "请输入发行总量", type: "warning" });
                return;
            }
            if (!integer(this.formLabelAlign.grant_total)) {
                this.$message({ message: "发行总量为包含0的正整数~", type: "warning" });
                return;
            }
            if (this.formLabelAlign.limited_per_person === "") {
                this.$message({ message: "请输入每人限领", type: "warning" });
                return;
            }
            if (!integer(this.formLabelAlign.limited_per_person)) {
                this.$message({ message: "每人限领为包含0的正整数~", type: "warning" });
                return;
            }
            this.formLabelAlign.limited_per_person = Number(this.formLabelAlign.limited_per_person);
            if (this.formLabelAlign.denomination === "") {
                this.$message({ message: "请输入面额", type: "warning" });
                return;
            }
            if (!decimals(this.formLabelAlign.denomination)) {
                this.$message({ message: "金额单位元，最多保留2位小数~", type: "warning" });
                return;
            }
            if (this.formLabelAlign.conditions_of_use === "") {
                this.$message({ message: "请输入使用门槛", type: "warning" });
                return;
            }
            if (!decimals(this.formLabelAlign.conditions_of_use)) {
                this.$message({ message: "金额单位元，最多保留2位小数~", type: "warning" });
                return;
            }
            if (this.formLabelAlign.validity_period_type === "") {
                this.$message({ message: "请选择有效期", type: "warning" });
                return;
            }
            if(this.formLabelAlign.validity_period_type === 1){
                if(this.formLabelAlign.validity_period === ""){
                    this.$message({ message: "请选择时间", type: "warning" });
                    return;
                }
            }else{
                if(this.formLabelAlign.validity_period === ""){
                    this.$message({ message: "请输入固定日期", type: "warning" });
                    return;
                }
            }
            let data = "";
            if (this.title === "添加") {
                data = await couponStore(this.formLabelAlign);
            } else {
                data = await couponUpdate(this.formLabelAlign);
            }
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: this.title + '成功~', type: "success" });
            }
        },
        validity(){ //  触发后清空时间跟天数
            this.formLabelAlign.validity_period = "";
        },
        statusChange(id, val){ //  上架、下架
            let value;
            if(val === 1){
                value = '上架';
            }else{
                value = '下架';
            }
            this.$confirm("此操作将" + value + "此优惠劵, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    couponUpdate({id: id, status: val}).then(data => {
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
        search() {
            //  检索
            if (this.time === null) {
                this.params.date_at_start = "";
                this.params.date_at_end = "";
            } else {
                this.params.created_at_start = this.time[0];
                this.params.created_at_end = this.time[1];
            }
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.time = "";
            this.params.coupon_name = "";
            this.params.office_id = "";
            this.params.created_at_start = "";
            this.params.created_at_end = "";
            this.params.grant_type = "";
            this.params.status = "";
            this.index();
        },
        record(id){   //  领取记录
            this.details.id = id;
            this.detailsShow = true;
            this.recordGet();
        },
        async recordGet(){    //  请求领取记录数据
            let data = await couponReceiveLog(this.details);
            if (data.code === 200) {
                this.couponData = data.data.coupon_data;
                this.receiveLog = data.data.receive_log_data;
            }
        },
        detailsCurrentChange(val) {
            //	请求多少页
            this.details.page = val;
            this.recordGet();
        },
        detailsSizeChange(val) {
            //	每页多少条
            this.details.pageSize = val;
            this.recordGet();
        },
        detailsSearch() {
            //  检索
            if (this.received === null) {
                this.details.received_at_start = "";
                this.details.received_at_end = "";
            } else {
                this.details.received_at_start = this.received[0];
                this.details.received_at_end = this.received[1];
            }
            this.details.page = 1;
            this.recordGet();
        },
        detailsEmpty() {
            //  清空删选条件
            this.received = "";
            this.details.status = "";
            this.details.nickname = "";
            this.details.order_sn = "";
            this.details.received_at_start = "";
            this.details.received_at_end = "";
            this.recordGet();
        },
    }
};
</script>
<style type="text/css" scoped lang="less">
    .details{
        margin-bottom: 10px;
        .title{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
</style>