
<template>
    <div class>
        <div class="operation">
            <div class="pull-left">
                <div class="input">
                    <el-input size="mini" v-model="params.customer_code" placeholder="用户档案编号"></el-input>
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
                    <el-table-column align="center" prop="customer_code" label="用户档案编号"></el-table-column>
                    <el-table-column align="center" prop="nickname" label="用户昵称"></el-table-column>
                    <el-table-column align="center" prop="created_at" label="签到时间"></el-table-column>
                    <el-table-column align="center" prop="change_score" label="获得积分"></el-table-column>
                    <el-table-column align="center" prop="score" label="当前积分"></el-table-column>
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
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { signList} from "@/api/goods.js";

export default {
    data() {
        return {
            params: {
                customer_code:"",
                page: 1, //  分页
                pagesize: 30 //    每页显示条数
            },
            count: 0, //	总数据
            list: [], //	    列表数据
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
                if(item.name =='积分商品'){
                    item.data.forEach(it=>{
                        if(it.route_web =='/Goods/signRecord'){
                            this.menuData = it.role_arr;
                        }
                    })
                }
            })
        },
        async index() {
            //  主页列表数据
            let data = await signList(this.params);
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
            this.params.pagesize = val;
            this.index();
        },
        search() {
            //  检索
            this.params.page = 1;
            this.index();
        },
        empty() {
            //  清空删选条件
            this.params.customer_code = "";
            this.index();
        },
    }
};
</script>
<style lang="less">

  
</style>