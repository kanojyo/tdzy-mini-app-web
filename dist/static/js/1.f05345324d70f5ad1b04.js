webpackJsonp([1],{HYFb:function(e,t){},M9A7:function(e,t,a){"use strict";t.b=function(){return Object(r.a)({url:"/v1/device",method:"GET"})},t.a=function(e){return Object(r.a)({url:"/v1/authenticate",method:"POST",data:e})},t.d=function(){return Object(r.a)({url:"/v1/myInfo",method:"GET"})},t.e=function(){return Object(r.a)({url:"/v1/signOut",method:"POST"})},t.c=function(e){return Object(r.a)({url:"/v1/edit_password",method:"POST",data:e})};var r=a("Vo7i")},lmfZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),s=a("exGp"),i=a.n(s),c=a("Dd8w"),o=a.n(c),u=a("M9A7"),d=a("NYxO"),l={data:function(){return{params:{username:"",password:"",verifyCode:""},captchaURL:"http://tdxcx.whtdzyy.com:8899",deviceData:""}},computed:Object(d.c)({random:function(e){return e.login.random}}),mounted:function(){localStorage.getItem("device")?this.deviceData=localStorage.getItem("device"):this.index()},methods:o()({},Object(d.b)({getAdmin:"getAdmin",getToken:"getToken",getDevice:"getDevice",getRandom:"getRandom"}),{index:function(){var e=this;return i()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.b)();case 2:200===(a=t.sent).code&&(e.getDevice(a.data.device),e.deviceData=a.data.device);case 4:case"end":return t.stop()}},t,e)}))()},submitForm:function(){var e=this;return i()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.params.username){t.next=3;break}return e.$message({message:"请输入账号",type:"warning"}),t.abrupt("return");case 3:if(""!==e.params.password){t.next=6;break}return e.$message({message:"请输入密码",type:"warning"}),t.abrupt("return");case 6:if(""!==e.params.verifyCode){t.next=9;break}return e.$message({message:"请输入验证码",type:"warning"}),t.abrupt("return");case 9:return t.next=11,Object(u.a)(e.params);case 11:200===(a=t.sent).code?(e.getToken(a.data.token),e.$router.push("/main")):e.refresh();case 13:case"end":return t.stop()}},t,e)}))()},refresh:function(){this.getRandom()}})},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"bg"}),e._v(" "),a("div",{staticClass:"login-auto"},[a("h1",[e._v("泰斗医聊小程序后台管理系统")]),e._v(" "),a("p",[e._v("Business Management System")]),e._v(" "),a("div",{staticClass:"login-input"},[a("div",[a("el-input",{attrs:{size:"large",placeholder:"请输入用户名称",clearable:""},model:{value:e.params.username,callback:function(t){e.$set(e.params,"username",t)},expression:"params.username"}},[a("i",{staticClass:"icon iconfont icon-zhanghao",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),a("div",[a("el-input",{attrs:{size:"large",type:"password",placeholder:"请输入登录密码",clearable:""},model:{value:e.params.password,callback:function(t){e.$set(e.params,"password",t)},expression:"params.password"}},[a("i",{staticClass:"icon iconfont icon-mima",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),a("div",{staticClass:"verifyCode"},[a("el-input",{attrs:{size:"large",placeholder:"请输入验证码",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submitForm(t):null}},model:{value:e.params.verifyCode,callback:function(t){e.$set(e.params,"verifyCode",t)},expression:"params.verifyCode"}}),e._v(" "),a("img",{attrs:{src:e.captchaURL+"/v1/captcha?device="+e.deviceData+"&random="+e.random,alt:""},on:{click:e.refresh}})],1),e._v(" "),a("div",{},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submitForm(t):null}}},[e._v("登 录")])],1)]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"text"},[e._v("鄂ICP备18011707号-2")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text"},[this._v("\n            @2019\n            "),t("a",{attrs:{href:"http://www.whtdzyy.com/",target:"_blank"}},[this._v("泰斗中医院")]),this._v(" 版权所有\n        ")])}]};var v=a("VU/8")(l,m,!1,function(e){a("HYFb")},"data-v-bdb18aa4",null);t.default=v.exports}});