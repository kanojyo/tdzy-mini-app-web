<template>
    <div>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input v-model="params.customer_code" clearable size="mini" placeholder="自建档案编号"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.app_customer_code" clearable size="mini" placeholder="App档案编号"></el-input>
                </div>
                <div class="input">
                    <el-input v-model="params.admin" clearable size="mini" placeholder="操作人"></el-input>
                </div>
                <div class="input">
                    <el-date-picker v-model="createdTime" size="mini" type="datetimerange" range-separator="至" start-placeholder="操作开始时间" end-placeholder="操作结束时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
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
                <el-table :data="list" border height="700" :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="id" label="ID"></el-table-column>
                    <el-table-column align="center" prop="customer_code" label="自建档案编号" width="150px"></el-table-column>
                    <el-table-column align="center" prop="customer_num" label="自建档案提点值" width="150px"></el-table-column>
                    <el-table-column align="center" prop="app_customer_code" label="App档案编号" width="150px"></el-table-column>
                    <el-table-column align="center" prop="app_customer_num" label="APP档案提点值" width="150px"></el-table-column>
                    <el-table-column align="center" prop="admin" label="操作人"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="操作时间" width="180px"></el-table-column>
                    <el-table-column align="center" prop="content" label="日志详情" width="250px"></el-table-column>
                </el-table>
            </div>
            <div class="table-peg">
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
    </div>
</template>
<script type="text/javascript">
import { archiveLog } from "@/api/user.js";

export default {
    data() {
        return {
            params: {
                customer_code: "", //  自建档案编号
                app_customer_code: "", //  App档案编号
                admin: "",   //  操作人
                created_at_begin: '', //  操作开始时间
                created_at_end: "", //  操作结束时间
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            },
            createdTime: '',    //  操作时间
            count: 0, //	总数据
            list: [], //	列表数据
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        async index() { //  主页列表数据
            let data = await archiveLog(this.params);
            if (data.code === 200) {
                this.list = data.data.list;
                this.count = data.data.total;
            }
        },
        handleCurrentChange(val) {  //	请求多少页
            this.params.page = val;
            this.index();
        },
        handleSizeChange(val) { //	每页多少条
            this.params.pageSize = val;
            this.index();
        },
        search() {  //  检索
            if (this.createdTime === null) {
                this.params.created_at_begin = "";
                this.params.created_at_end = "";
            } else {
                this.params.created_at_begin = this.createdTime[0];
                this.params.created_at_end = this.createdTime[1];
            }
            this.params.page = 1;
            this.index();
        },
        empty() {   //  清空删选条件
            this.createdTime = '';
            this.params = {
                customer_code: "", //  自建档案编号
                app_customer_code: "", //  App档案编号
                admin: "",   //  操作人
                created_at_begin: '', //  操作开始时间
                created_at_end: "", //  操作结束时间
                page: 1, //  分页
                pageSize: 30 //    每页显示条数
            };
            this.index();
        },
    }
};
</script>
<style type="text/css" scoped lang="less">

</style>