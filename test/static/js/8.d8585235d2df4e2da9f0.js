webpackJsonp([8],{FzpJ:function(t,e,a){var s=a("QjWx");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("1aa3e7f6",s,!1,{})},QjWx:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.ajun-table[data-v-4cd9f4a7] {\n  margin: 20px 0;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/User/FileList.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB",file:"FileList.vue",sourcesContent:["\n.ajun-table[data-v-4cd9f4a7] {\n  margin: 20px 0;\n}\n"],sourceRoot:""}])},Rpgp:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"operation",staticStyle:{display:"block !important"}},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"用户档案编号"},model:{value:t.params.customer_code,callback:function(e){t.$set(t.params,"customer_code",e)},expression:"params.customer_code"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"用户昵称"},model:{value:t.params.nickname,callback:function(e){t.$set(t.params,"nickname",e)},expression:"params.nickname"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"平台"},model:{value:t.params.department_id,callback:function(e){t.$set(t.params,"department_id",e)},expression:"params.department_id"}},t._l(t.departList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"姓名"},model:{value:t.params.name,callback:function(e){t.$set(t.params,"name",e)},expression:"params.name"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"手机号"},model:{value:t.params.account,callback:function(e){t.$set(t.params,"account",e)},expression:"params.account"}})],1)]),t._v(" "),a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH-mm-ss"},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:t.search}},[t._v("查询结果")])],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:t.empty}},[t._v("清空删选条件")])],1)])]),t._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.list,border:"",height:"700px","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"user_id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"customer_code",label:"用户档案编号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户头像",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[a("img",{attrs:{src:t.row.avatarurl}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nickname",label:"用户昵称"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"yz_account",label:"绑定医助"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"yz_department",label:"部门"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"用户姓名"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.gender?a("span",[t._v("男")]):t._e(),t._v(" "),2===e.row.gender?a("span",[t._v("女")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"age",label:"年龄"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"account",label:"手机号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"200px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.popLog(e.row.user_id)}}},[t._v("预约记录")]),t._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.detail(e.row.user_id)}}},[t._v("用户详情")])])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.params.page,"page-sizes":[30,50,100],"page-size":t.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"用户个人信息",visible:t.dialogVisible,width:"650px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"user"},[a("div",{staticClass:"title"},[t._v("档案信息")]),t._v(" "),a("table",{staticClass:"ajun-table"},[a("tr",[a("td",{staticStyle:{width:"150px"}},[t._v("档案编号")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.customer_code))])]),t._v(" "),a("tr",[a("td",[t._v("绑定医助")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.yz_account))])]),t._v(" "),a("tr",[a("td",[t._v("所属部门")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.yz_department))])]),t._v(" "),a("tr",[a("td",[t._v("用户姓名")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.customer_name))])]),t._v(" "),a("tr",[a("td",[t._v("性别")]),t._v(" "),a("td",[t._v(t._s(t._f("filterSex")(t.userInfo.customer_sex)))])]),t._v(" "),a("tr",[a("td",[t._v("年龄")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.customer_age))])]),t._v(" "),a("tr",[a("td",[t._v("手机号")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.account))])])])]),t._v(" "),a("div",{staticClass:"user"},[a("div",{staticClass:"title"},[t._v("用户信息")]),t._v(" "),a("table",{staticClass:"ajun-table"},[a("tr",[a("td",{staticStyle:{width:"150px"}},[t._v("用户头像")]),t._v(" "),a("td",[a("div",{staticStyle:{width:"80px"}},[a("img",{attrs:{src:t.userInfo.avatarurl,alt:""}})])])]),t._v(" "),a("tr",[a("td",[t._v("昵称")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.nickname))])]),t._v(" "),a("tr",[a("td",[t._v("用户姓名")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.name))])]),t._v(" "),a("tr",[a("td",[t._v("性别")]),t._v(" "),a("td",[t._v(t._s(t._f("filterSex")(t.userInfo.gender)))])]),t._v(" "),a("tr",[a("td",[t._v("年龄")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.age))])]),t._v(" "),a("tr",[a("td",[t._v("手机号")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.account))])]),t._v(" "),a("tr",[a("td",[t._v("累计签到天数")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.sum_sign_day))])]),t._v(" "),a("tr",[a("td",[t._v("累计获取积分")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.get_score_num))])]),t._v(" "),a("tr",[a("td",[t._v("累计使用积分")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.use_score_num))])]),t._v(" "),a("tr",[a("td",[t._v("当前积分")]),t._v(" "),a("td",[t._v(t._s(t.userInfo.score))])])])])]),t._v(" "),a("el-dialog",{attrs:{title:"预约记录",visible:t.logVisible,width:"1250px"},on:{"update:visible":function(e){t.logVisible=e}}},[a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.logList,border:"",height:"550","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"appointment_code",label:"预约编号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"office",label:"就诊科室"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"doctor_name",label:"预约医生"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.status?a("span",[t._v("未就诊")]):t._e(),t._v(" "),2==e.row.status?a("span",[t._v("已就诊")]):t._e(),t._v(" "),3==e.row.status?a("span",[t._v("已取消")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_time",label:"预约日期"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.time_slot?a("span",[t._v("上午(9:00-12:00)")]):t._e(),t._v(" "),2==e.row.time_slot?a("span",[t._v("下午(14:00-18:00)")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"200px"}})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.logParams.page,"page-sizes":[30,50,100],"page-size":t.logParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.logCount},on:{"size-change":t.handleSizeChange2,"current-change":t.handleCurrentChange2}})],1)])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.logVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.logVisible=!1}}},[t._v("确 定")])],1)])],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},VRm4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("zA8F"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("Rpgp"),l=!1;var o=function(t){l||a("FzpJ")},c=a("VU/8")(n.a,r.a,!1,o,"data-v-4cd9f4a7",null);c.options.__file="src\\views\\User\\FileList.vue",e.default=c.exports},zA8F:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(a("Xxa5")),n=r(a("exGp")),i=a("vMJZ");function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{params:{customer_code:"",account:"",name:"",start_time:"",end_time:"",nickname:"",department_id:"",page:1,pageSize:30},count:0,list:[],title:"",dialogVisible:!1,userInfo:[],timeValue:"",departList:[],logParams:{doctor_id:0,user_id:"",status:"",name:"",start_time:"",end_time:"",appointment_code:"",mobile:"",page:1,pagesize:30},logList:[],logCount:0,logVisible:!1}},filters:{filterSex:function(t){return 1===t?"男":2===t?"女":void 0}},components:{},mounted:function(){this.index(),this.getDepartment()},methods:{getDepartment:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.departmentList)();case 2:200===(a=e.sent).code&&(t.departList=a.data);case 4:case"end":return e.stop()}},e,t)}))()},index:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getIndex)(t.params);case 2:200===(a=e.sent).code&&(t.list=a.data.list,t.count=a.data.total);case 4:case"end":return e.stop()}},e,t)}))()},handleCurrentChange:function(t){this.params.page=t,this.index()},handleCurrentChange2:function(t){this.logParams.page=t,this.getLogList()},handleSizeChange:function(t){this.params.pageSize=t,this.index()},handleSizeChange2:function(t){this.logParams.pageSize=t,this.getLogList()},search:function(){this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1],this.params.page=1,console.log(this.params),this.index()},empty:function(){this.timeValue="",this.params.start_time="",this.params.end_time="",this.params.customer_code="",this.params.account="",this.params.name="",this.params.nickname="",this.params.department_id="",this.index()},detail:function(t){var e=this;return(0,n.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),a.next=3,(0,i.userInfo)({id:t});case 3:200===(n=a.sent).code&&(e.userInfo=n.data,e.dialogVisible=!0);case 5:case"end":return a.stop()}},a,e)}))()},popLog:function(t){this.logParams.user_id=t,this.logVisible=!0,this.getLogList()},getLogList:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getLog)(t.logParams);case 2:200===(a=e.sent).code&&(t.logList=a.data.list,t.logCount=a.data.total);case 4:case"end":return e.stop()}},e,t)}))()}}}}});