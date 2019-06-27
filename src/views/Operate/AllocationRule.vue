
<template>
    <div class>
        <div class="table">
            <div class="table-list">
                <el-table :data="list" border :header-cell-style="{background:'#f3f3f3'}">
                    <el-table-column align="center" prop="name" label="科室"></el-table-column>
                    <el-table-column align="center" prop="department" label="部门"></el-table-column>
                    <el-table-column align="center" prop="address" label="操作" width="250px">
                        <template slot-scope="scope">
                            <div>
                                <span class="cursor color-f8494c" @click="edit(scope.row)">编辑</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- 编辑 -->
        <el-dialog title="分配规则编辑" :visible.sync="dialogVisible" width="650px">
            <div class="title">
                <p>说明:</p>
                <p>1.分配顺序为规则包含部门中所有医助的创建时间升序为顺序</p>
                <p>2.只会分配正常状态医助，与在线离线无关</p>
                <h2>{{office.name}}</h2>
            </div>
            <div class="form">
                <div>
                    <el-select v-model="department_id" clearable size="mini" placeholder="请选择部门">
                        <el-option v-for="item in department" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                    </el-select>
                </div>
                <div>
                    <el-button type="primary" size="mini" @click="add">添加部门</el-button>
                </div>
            </div>
            <table class="ajun-table">
                <tr>
                    <td>部门</td>
                    <td>操作</td>
                </tr>
                <tr v-for="(item, index) in office.department" :key="index">
                    <td>{{item.name}}</td>
                    <td>
                        <span class="cursor color-f8494c" @click="remove(index)">删除</span>
                    </td>
                </tr>
            </table>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleClose">提 交</el-button>
                <el-button type="warning" @click="eliminate">全部清除</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import { ruleIndex, officeInfo, officeSaveSepartment } from "@/api/operate.js";

export default {
    data() {
        return {
            list: [], //	    列表数据
            dialogVisible: false, //	添加/编辑公司 弹框
            formLabelAlign: {}, //  科室部门编辑
            params: {
                office_id: '',
                department_id: [],
            },
            department_id: '',  //  部门ID
            office: '', //  科室详情
            pushShow: false,    //  用户判断是否重复添加
        };
    },
    computed: mapState({
        department: (state) => state.selector.department,   //   部门
    }),
    mounted() {
        this.index();
        this.getDepartment();
    },
    methods: {
        ...mapActions({ 
            getLaboratory: 'getLaboratory',  //  科室
            getYzList: 'getYzList',  //  医助
            getDepartment: 'getDepartment', //  部门
        }),
        async index() {
            //  主页列表数据
            let data = await ruleIndex();
            if (data.code === 200) {
                this.list = data.data;
            }
        },
        add(){  //  添加部门
            if (this.department_id == "") {
                this.$message({ message: "请选择部门", type: "warning" });
                return;
            }
            if(this.office.department.length > 0){
                for(var i = 0; i < this.office.department.length; i++){
                    if(this.department_id === this.office.department[i].department_id){
                        this.$message({ message: "不可重复添加", type: "warning" });
                        this.pushShow = true;
                        break;
                    }else{
                        this.pushShow = false;
                    }
                }
            }
            if(!this.pushShow){
                this.department.forEach((item) => {
                    if(this.department_id === item.id){
                        this.office.department.push({
                            department_id: this.department_id,
                            name: item.name
                        })
                    }
                });
            }
        },
        async edit(row) {
            //  编辑
            this.params.office_id = row.id;
            this.department_id === "";
            let data = await officeInfo({id: row.id});
            if (data.code === 200) {
                this.office = data.data;
                this.dialogVisible = true;
            }
        },
        eliminate(){    //  全部清除
            this.office.department = [];
            this.params.department_id = [];
        },
        async handleClose() {   //  添加/编辑
            this.params.department_id = [];
            if(this.office.department.length > 0){
                this.office.department.forEach((item) => {
                    this.params.department_id.push(item.department_id);
                });
            }else{
                this.params.department_id = [];
                this.$message({ message: "请添加部门", type: "warning" });
                return;
            }
            let data = await officeSaveSepartment(this.params);
            if (data.code === 200) {
                this.dialogVisible = false;
                this.index();
                this.$message({ message: '编辑成功~', type: "success" });
            }
        },
        remove(index){   //  删除部门
            this.$confirm("是否删除该部门, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.office.department.splice(index, 1);
                })
                .catch(() => {
                    this.$message({ type: "info", message: "已取消操作~" });
                });
        },
        // moveUp(index){   //  上移
        //     if(index!= 0){
        //         this.swapArray(this.office.department, index, index-1);
        //     }
        // },
        // moveDown(index){   //  下移
        //     if(index+1 != this.office.department.length){
        //         this.swapArray(this.office.department, index, index+1);
        //     }
        // },
        // swapArray(arr, index1, index2){
        //     arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        //     return arr;
        // },
    }
};
</script>
<style type="text/css" scoped lang="less">
    .title{
        p{
            margin-bottom: 10px;
        }
        h2{
            font-size: 18px;
            font-weight: bold;
            padding: 20px 0;
        }
    }
    .form{
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 30px;
        div{
            margin-right: 15px;
        }
    }
</style>