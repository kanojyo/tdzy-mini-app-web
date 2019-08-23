<template>
    <div class="main">
        <el-container>
            <el-header class="centered">
                <div class="head clearfix">
                    <div class="pull-left">
                        <img src="https://cdn-statis.mangguokandian.com/ajun-web-cdn/ico/tdzyyLogo.png" alt>
                        <span class="text">泰斗医聊小程序后台管理系统</span>
                    </div>
                    <div class="pull-right">
                        <div class="avatar">
                            <img :src="user.avatar" alt>
                        </div>
                        <el-dropdown>
                            <span class="el-dropdown-link username">
                                {{user.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item >
                                    <span @click="changePassword">修改密码</span>
                                </el-dropdown-item>
                                <el-dropdown-item >
                                    <span @click="exit">退出登录</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                        <!-- <div class="username">{{user.username}}</div>
                        <div>|</div>
                        <div class="icon" @click="headClick(1)">
                            <el-tooltip content="返回上一步" placement="bottom" effect="light">
                                <i class="icon iconfont icon-fanhuishangyibu-"></i>
                            </el-tooltip>
                        </div>
                        <div>|</div>
                        <div class="icon" @click="headClick(2)">
                            <el-tooltip content="刷新" placement="bottom" effect="light">
                                <i class="icon iconfont icon-shuaxin"></i>
                            </el-tooltip>
                        </div>
                        <div>|</div>
                        <div class="icon" @click="exit">
                            <el-tooltip content="退出登录" placement="bottom" effect="light">
                                <i class="icon iconfont icon-tuichu"></i>
                            </el-tooltip>
                        </div> -->
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div class="oneMenu">
                        <ul class="list-1">
                            <li
                                class="item centered"
                                @click="oneMenuClick(item)"
                                :class="{active: isActive === item.id}"
                                v-for="(item, index) in menu"
                                :key="index"
                            >
                                <i class="icon iconfont icon-ai-article" v-if="item.name === '文章'"></i>
                                <!-- <i class="icon iconfont icon-wodeyouhuijuan" v-if="item.name === '优惠劵'"></i> -->
                                <!-- <i class="icon iconfont icon-banben" v-if="item.name === '版本'"></i> -->
                                <i class="icon iconfont icon-333" v-if="item.name === '科室'"></i>
                                <i class="icon iconfont icon-banben" v-if="item.name === '商品'"></i>
                                <i class="icon iconfont icon-yonghu" v-if="item.name === '用户'"></i>
                                <i class="icon iconfont icon-yunyingguanli" v-if="item.name === '运营'"></i>
                                <i class="icon iconfont icon-yisheng" v-if="item.name === '医生'"></i>
                                <i class="icon iconfont icon-lunbotu" v-if="item.name === '轮播图'"></i>
                                <i class="icon iconfont icon-lunbotu" v-if="item.name === '视频'"></i>
                                <i class="icon iconfont icon-333" v-if="item.name === '医院'"></i>
                                <i class="icon iconfont icon-shezhi" v-if="item.name === '设置'"></i>
                                &nbsp;{{item.name}}
                                <i
                                    class="el-icon-caret-left"
                                    v-if="isActive === item.id"
                                ></i>
                            </li>
                        </ul>
                        <ul class="list-2">
                            <li
                                class="item"
                                @click="twoMenuClick(item)"
                                :class="{active: isActiveShow === item.id}"
                                v-for="(item, index) in twoNavList"
                                :key="index"
                            >• {{item.name}}</li>
                        </ul>
                    </div>
                </el-aside>
                <el-main>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </el-main>
            </el-container>
            <el-dialog title="修改密码" :visible.sync="dialogVisible" :width="dialogWidth" :close-on-click-modal="false">
                <el-form :model="params">
                    <!-- <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="params.userName" autocomplete="off" disabled></el-input>
                    </el-form-item> -->
                    <el-form-item label="原密码" :label-width="formLabelWidth">
                    <el-input
                        size="large"
                        type="password"
                        v-model="params.old_password"
                        placeholder="请输入原密码"
                        clearable
                        show-password
                    ></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input
                        size="large"
                        type="password"
                        v-model="params.new_password"
                        placeholder="请输入新密码"
                        clearable
                        show-password
                    ></el-input>
                    </el-form-item>
                    <p style="padding-left:120px;">新密码长度6到16位,可以是数字,字母,或者特殊符号组成</p>
                    <el-form-item label="重复新密码" :label-width="formLabelWidth">
                    <el-input
                        size="large"
                        type="password"
                        v-model="params.re_new_password"
                        placeholder="重复新密码"
                        clearable
                        show-password
                    ></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </div>
            </el-dialog>
        </el-container>
    </div>
</template>
<script>
import { myInfo, signOut, editPassword } from "@/api/login.js";
import { mapState, mapActions } from 'vuex';
import {isvalidPassword} from '@/utils/validate.js'

export default {
    data() {
        return {
            isActive: 0, //	一级导航默认样式
            isActiveShow: 0, //	子导航选中样式
            twoNavList: [], //	子导航数组
            user: '',   //  用户信息
            menu: [],   //  菜单
            dialogVisible:false,
            formLabelWidth: "100px",
            dialogWidth: "30%",
            params:{
                old_password:'',
                new_password:'',
                re_new_password:'',
            }
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        ...mapActions({
            getRandom: 'getRandom', //  验证随机码
        }),
        async index() {
            //  用户信息
            let data = await myInfo();
            if (data.code == 200) {
                this.menu = data.data.menu;
                this.user = data.data.user;
                if(sessionStorage.getItem("oneId") && sessionStorage.getItem("twoId")){
                    this.isActive = Number(sessionStorage.getItem("oneId"));
                    this.isActiveShow = Number(sessionStorage.getItem("twoId"));
                    this.menu.forEach((item) => {
                        if(this.isActive === item.id){
                            this.twoNavList = item.data;
                        }
                    });
                }else{
                    this.isActive = data.data.menu[0].id;
                    this.twoNavList = data.data.menu[0].data;
                    this.isActiveShow = data.data.menu[0].data[0].id;
                    this.$router.push(data.data.menu[0].data[0].route_web);
                }
            }
        },
        oneMenuClick(item) {
            //	一级导航
            sessionStorage.setItem("oneId", item.id); //  存储当前导航菜单ID
            this.isActive = item.id;
            this.twoNavList = item.data;
        },
        twoMenuClick(item) {
            //	二级导航
            // console.log(item)
            sessionStorage.setItem("twoId", item.id); //  存储当前导航菜单ID
            this.isActiveShow = item.id;
            this.$router.push(item.route_web);
        },
        headClick(val) {
            if (val === 1) {
                this.$router.go(-1);
            }
            if (val === 2) {
                window.location.reload();
            }
        },
        async exit(){ //退出登陆
            let data = await signOut();
            if (data.code == 200) {
                this.$router.push("/out");
                this.getRandom();
                sessionStorage.clear();
                this.$message({ message: data.data.msg, type: "success" });
            }
        },
        //修改密码弹框
        changePassword(){
            this.dialogVisible = true;
            this.params.password = "";
            this.params.newPassword = "";
        },
        //修改密码
        async submitForm() {
            if (this.params.old_password == "") {
                this.$message({ message: "请输入原密码", type: "warning" });
                return;
            }
            if (this.params.new_password == "") {
                this.$message({ message: "请输入新密码", type: "warning" });
                return;
            }
            if (this.params.re_new_password == "") {
              this.$message({ message: "请输入重复新密码", type: "warning" });
              return;
            }
            let data = await editPassword(this.params);
            if (data.code == 200) {
                this.$message({ message: "密码修改成功", type: "success" });
                this.dialogVisible=false;
                // this.$router.push("/");
                // sessionStorage.clear();
                // window.location.reload();
            }
        },
    }
};
</script>
<style type="text/css" scoped lang="less">
@color_f8494c: #1abc9c;

.oneMenu {
    display: flex;
    background-color: #464c5b;
    .list-1 {
        width: 85px;
        .item {
            position: relative;
            width: 85px;
            height: 40px;
            color: #ccc;
            font-size: 12px;
            cursor: pointer;
            .el-icon-caret-left {
                position: absolute;
                top: 10px;
                right: -7px;
                font-size: 20px;
            }
            .icon{
                font-size: 14px;
            }
        }
        .active {
            color: #fff;
        }
    }
    .list-2 {
        flex: 1;
        height: calc(100vh - 60px);
        background: #eaedf1;
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        .item {
            line-height: 40px;
            color: #666;
            font-size: 12px;
            border-bottom: 1px solid #e4e4e4;
            padding-left: 20px;
            text-align: left;
            cursor: pointer;
        }
        .active {
            color: @color_f8494c;
            background: #fff;
        }
    }
}
.head {
    width: 100%;
    height: 60px;
    .pull-left {
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
            display: inline-block;
            width: 28px;
            height: 28px;
            margin-right: 10px;
        }
        .text {
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }
    }
    .pull-right {
        height: 60px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff;
        div {
            margin-right: 15px;
        }
        .avatar {
            width: 32px;
            height: 32px;
            img {
                border-radius: 50%;
            }
        }
        .el-dropdown{
            .username{
                color:#fff;
            }
        }
        .icon {
            .icon {
                font-size: 24px;
                color: #fff;
                cursor: pointer;
            }
        }
    }
}
.main {
    width: 100%;
    height: calc(100vh);
    .is-vertical {
        width: 100%;
        height: 100%;
        .el-header {
            width: 100;
            min-width: 1400px;
            background-color: @color_f8494c;
        }
        .el-container {
            .el-main {
                min-width: 1250px;
            }
        }
    }
}
</style>