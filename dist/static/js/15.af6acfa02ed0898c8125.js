webpackJsonp([15],{XXya:function(e,a){},ZCM1:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("Xxa5"),s=t.n(r),n=t("exGp"),i=t.n(n),o=t("Vo7i");t("0xDb");var l=t("JGDk"),c={data:function(){return{formParams:{pic:"",link:""},uploadUrl:Object(l.a)(),fileList:[]}},mounted:function(){this.index()},methods:{index:function(e){var a=this;return i()(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r={id:4},Object(o.a)({url:"/v1/hospital/show/"+r.id,method:"GET"});case 2:200===(t=e.sent).code&&(a.formParams=t.data,a.fileList=[{name:"",url:t.data.pic}]);case 4:case"end":return e.stop()}var r},e,a)}))()},withdrawChange:function(){var e=this;return i()(s.a.mark(function a(){var t;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=e.formParams.pic){a.next=3;break}return e.$message({message:"请上传医院介绍图片",type:"warning"}),a.abrupt("return");case 3:return e.formParams.id=4,a.next=6,r=e.formParams,Object(o.a)({url:"/v1/hospital/update/"+r.id,method:"POST",data:r});case 6:200===(t=a.sent).code&&e.$message({message:t.data.msg,type:"success"});case 8:case"end":return a.stop()}var r},a,e)}))()},handleSuccess:function(e){200===e.code&&(this.fileList=[{name:e.data.originName,url:e.data.url}],this.formParams.pic=e.data.url)},handleRemove:function(e,a){0===a.length&&(this.fileList=[],this.formParams.pic="")},beforeAvatarUpload:function(e){if(e.size/1e3/1024>4)return this.$message({message:"图片大于4M，请重新上传~",type:"warning"}),!1}}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"centens"},[t("el-form",{attrs:{"label-width":"150px",model:e.formParams}},[t("el-form-item",{attrs:{label:"* 医院介绍图片"}},[t("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,beforeUpload:e.beforeAvatarUpload,limit:"1","list-type":"picture"}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"跳转链接"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入跳转链接"},model:{value:e.formParams.link,callback:function(a){e.$set(e.formParams,"link",a)},expression:"formParams.link"}})],1)],1),e._v(" "),t("div",{staticClass:"primary"},[t("el-button",{attrs:{type:"primary"},on:{click:e.withdrawChange}},[e._v("提 交")])],1)],1)},staticRenderFns:[]};var m=t("VU/8")(c,u,!1,function(e){t("XXya")},"data-v-3334ba0e",null);a.default=m.exports}});