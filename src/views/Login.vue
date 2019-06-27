<template>
    <div class="login">
        <div class="bg"></div>
        <div class="login-auto">
            <h1>泰斗医聊APP后台管理系统</h1>
            <p>Business Management System</p>
            <div class="login-input">
                <div>
                    <el-input size="large" v-model="params.username" placeholder="请输入用户名称" clearable>
                        <i slot="prefix" class="icon iconfont icon-zhanghao"></i>
                    </el-input>
                </div>
                <div>
                    <el-input size="large" type="password" v-model="params.password" placeholder="请输入登录密码" clearable>
                        <i slot="prefix" class="icon iconfont icon-mima"></i>
                    </el-input>
                </div>
                <div class="verifyCode">
                    <el-input size="large" v-model="params.verifyCode" @keyup.enter.native="submitForm" placeholder="请输入验证码" clearable></el-input>
                    <img :src="captchaURL + '/v1/captcha?device=' + deviceData + '&random=' + random" alt="" @click="refresh">
                </div>
                <div class>
                    <el-button type="primary" @click.enter="submitForm">登 录</el-button>
                </div>
            </div>
            <div class="text">
                @2019
                <a href="http://www.whtdzyy.com/" target="_blank">泰斗中医院</a> 版权所有
            </div>
            <div class="text">鄂ICP备18011707号-2</div>
        </div>
    </div>
</template>
<script type="text/javascript">

import { device, captcha, authenticate } from "@/api/login.js";
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            params: {
                username: "",   //  string 用户名
                password: "",   //  string 密码
                verifyCode: ''  //  string 图形验证码
            },
            captchaURL: process.env.BASE_API,   //  图形验证码地址
            deviceData: '', //  设备号
        };
    },
    computed: mapState({
        random: (state) => state.login.random,   //   验证随机码
    }),
    mounted(){
        this.index();
        if(!localStorage.getItem('device')){
            this.index();
        }else{
            this.deviceData = localStorage.getItem('device');
        }
    },
    methods: {
        ...mapActions({
            getAdmin: "getAdmin",   //  存储登录信息
            getToken: "getToken",    //  存储toKen
            getDevice: "getDevice",  //  存储device
            getRandom: 'getRandom', //  验证随机码
        }),
        async index(){    //  获取设备号
            let data = await device();
            if(data.code === 200){
                this.getDevice(data.data.device);
                this.deviceData = data.data.device;
            }
        },
        async submitForm() {
            if (this.params.username === '') {
                this.$message({ message: "请输入账号", type: "warning" });
                return;
            }
            if (this.params.password === '') {
                this.$message({ message: "请输入密码", type: "warning" });
                return;
            }
            if (this.params.verifyCode === '') {
                this.$message({ message: "请输入验证码", type: "warning" });
                return;
            }
            let data = await authenticate(this.params);
            if(data.code === 200){
                this.getToken(data.data.token);
                this.$router.push('/main');
            }else{
                this.refresh();
            }
        },
        refresh(){  //  刷新验证码
            this.getRandom();
        },
    }
};
</script>
<style type="text/css" scoped lang="less">
@color_f8494c: #1abc9c;

.verifyCode{
    display: flex;
    flex-wrap: row;
    img{
        display: block;
        height: 40px;
        margin-left: 10px;
    }
}
.login {
    position: relative;
    background: @color_f8494c;
    height: calc(100vh);
    .bg {
        width: 100%;
        height: 360px;
        background: url(https://cdn-statis.mangguokandian.com/ajun-web-cdn/img/u0_state0.png);
        position: relative;
        top: 200px;
    }
    .login-auto {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.6);
        padding: 30px 60px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        text-align: center;
        color: #fff;
        h1 {
            font-size: 28px;
            color: @color_f8494c;
            margin-bottom: 8px;
        }
        p {
            font-size: 18px;
            color: @color_f8494c;
        }
        .login-input {
            width: 300px;
            margin: 35px 0 20px;
            div {
                margin-bottom: 10px;
                button {
                    width: 100%;
                    background: @color_f8494c;
                    border: none;
                    padding: 12px 0px;
                }
            }
        }
        .text {
            font-size: 12px;
            a {
                color: #fff;
            }
        }
    }
}
</style>