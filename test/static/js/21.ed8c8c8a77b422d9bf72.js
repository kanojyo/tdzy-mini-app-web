webpackJsonp([21],{"4ufZ":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.info {\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.info .left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 30px;\n}\n.info .left .avatar {\n  width: 75px;\n  height: 75px;\n  margin-right: 20px;\n}\n.info .left .avatar img {\n  width: 75px;\n  height: 75px;\n}\n.info .left .text p {\n  line-height: 25px;\n}\n.info .right p {\n  line-height: 25px;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Doctor/BookingOrder.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB",file:"BookingOrder.vue",sourcesContent:["\n.info {\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.info .left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 30px;\n}\n.info .left .avatar {\n  width: 75px;\n  height: 75px;\n  margin-right: 20px;\n}\n.info .left .avatar img {\n  width: 75px;\n  height: 75px;\n}\n.info .left .text p {\n  line-height: 25px;\n}\n.info .right p {\n  line-height: 25px;\n}\n"],sourceRoot:""}])},"96mP":function(t,e,a){var n=a("4ufZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3460e430",n,!1,{})},"9o0h":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(a("Xxa5")),i=r(a("exGp")),s=a("4mdi"),l=r(a("YaEn"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{params:{doctor_id:"",user_id:"",status:"",name:"",start_time:"",end_time:"",appointment_code:"",mobile:"",page:1,pageSize:30},count:0,list:[],status:[{type:1,value:"未就诊"},{type:2,value:"已就诊"},{type:3,value:"已取消"},{type:4,value:"已失效"}],timeValue:"",doctorInfo:{},info:{},cancelVisible:!1,editVisible:!1,title:"",cancelParams:{id:"",remarks:""},logVisible:!1,logList:[],logCount:0,logParams:{appointment_id:"",page:1,pagesize:30}}},mounted:function(){this.index()},methods:{index:function(){var t=this;return(0,i.default)(n.default.mark(function e(){var a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.default.beforeEach(function(e,a,n){a.path==e.path&&a.query!==e.query?(t.params.doctor_id="",n(),window.location.reload()):n()}),t.$route.query.doctor_id?t.params.doctor_id=t.$route.query.doctor_id:t.params.doctor_id="",e.next=4,(0,s.appointmentList)(t.params);case 4:200===(a=e.sent).code&&(t.list=a.data.list,t.doctorInfo=a.data.doctor_info,t.count=a.data.total);case 6:case"end":return e.stop()}},e,t)}))()},handleCurrentChange:function(t){this.params.page=t,this.index()},handleCurrentChange2:function(t){this.logParams.page=t,this.getLogList()},handleSizeChange:function(t){this.params.pageSize=t,this.index()},handleSizeChange2:function(t){this.logParams.pageSize=t,this.getLogList()},search:function(){this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1],this.params.page=1,this.index()},empty:function(){this.params.order_status="",this.timeValue="",this.index()},cancelPop:function(t){this.cancelParams.id=t,this.cancelParams.remarks="",this.cancelVisible=!0},cancel:function(){var t=this;return(0,i.default)(n.default.mark(function e(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.cancelParams.remarks){e.next=3;break}return t.$message({message:"请输入备注",type:"warning"}),e.abrupt("return");case 3:return e.next=5,(0,s.appointmentCancel)(t.cancelParams);case 5:200===e.sent.code&&(t.$message({message:"取消预约成功",type:"success"}),t.cancelVisible=!1,t.cancelParams.remarks="",t.index());case 7:case"end":return e.stop()}},e,t)}))()},confirmPop:function(t){this.title="确认就诊",this.editVisible=!0,this.info=t},confirm:function(){var t=this;return(0,i.default)(n.default.mark(function e(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.info.handle_at){e.next=3;break}return t.$message({message:"请输入确认就诊时间",type:"warning"}),e.abrupt("return");case 3:if(""!=t.info.remarks){e.next=6;break}return t.$message({message:"请输入备注",type:"warning"}),e.abrupt("return");case 6:return e.next=8,(0,s.appointmentConfirm)({id:t.info.id,handle_at:t.info.handle_at,remarks:t.info.remarks});case 8:200===e.sent.code&&(t.$message({message:"确认就诊成功",type:"success"}),t.editVisible=!1,t.index());case 10:case"end":return e.stop()}},e,t)}))()},detailPop:function(t){var e=this;this.title="预约详情",this.editVisible=!0,(0,s.appointmentInfo)({id:t}).then(function(t){200===t.code&&(e.info=t.data)})},logPop:function(t){this.logParams.appointment_id=t,this.logVisible=!0,this.getLogList()},getLogList:function(){var t=this;return(0,i.default)(n.default.mark(function e(){var a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.appointmentLog)(t.logParams);case 2:200===(a=e.sent).code&&(t.logList=a.data.list,t.logCount=a.data.total);case 4:case"end":return e.stop()}},e,t)}))()}}}},jTfD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9o0h"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var l=a("rDkE"),r=!1;var o=function(t){r||a("96mP")},c=a("VU/8")(i.a,l.a,!1,o,null,null);c.options.__file="src\\views\\Doctor\\BookingOrder.vue",e.default=c.exports},rDkE:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.params.doctor_id?a("div",{staticClass:"info"},[a("div",{staticClass:"left"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.doctorInfo.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"text"},[a("p",[t._v("姓名:"+t._s(t.doctorInfo.name))]),t._v(" "),a("p",[t._v("职位:"+t._s(t.doctorInfo.position))]),t._v(" "),a("p",[t._v("科室:"+t._s(t.doctorInfo.office))])])]),t._v(" "),a("div",{staticClass:"right"},[a("p",[t._v("预约总数量:"+t._s(t.doctorInfo.order_sale_num))]),t._v(" "),a("p",[t._v("实际预约数:"+t._s(t.doctorInfo.order_use_num))])])]):t._e(),t._v(" "),a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入预约编号"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入预约人姓名"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入预约人手机号"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"预约状态"},model:{value:t.params.scheduling_status,callback:function(e){t.$set(t.params,"scheduling_status",e)},expression:"params.scheduling_status"}},t._l(t.status,function(t){return a("el-option",{key:t.type,attrs:{label:t.value,value:t.type}})}))],1),t._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:t.search}},[t._v("查询结果")])],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:t.empty}},[t._v("清空删选条件")])],1)])]),t._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.list,border:"",height:"650","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"50px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"appointment_code",label:"预约编号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"预约人姓名"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"mobile",label:"手机号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_time",label:"预约日期",width:"110px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"时间段",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.time_slot?a("span",[t._v("上午(9:00-12:00)")]):t._e(),t._v(" "),2===e.row.time_slot?a("span",[t._v("下午(14:00-18:00)")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"就诊状态",width:"75px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.status?a("span",{staticClass:"cursor color-f8494c"},[t._v("未就诊")]):t._e(),t._v(" "),2===e.row.status?a("span",{staticClass:"cursor color-f8494c"},[t._v("已就诊")]):t._e(),t._v(" "),3===e.row.status?a("span",{staticClass:"cursor color_red"},[t._v("已取消")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_money",label:"预约挂号费用",width:"75px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"确认就诊时间",width:"110px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[2===e.row.status?a("span",{staticClass:"cursor color-f8494c"},[t._v(t._s(e.row.handle_at))]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"已取消时间",width:"110px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[3===e.row.status?a("span",{staticClass:"cursor color-f8494c"},[t._v(t._s(e.row.handle_at))]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"handle_at",label:"操作时间",width:"110px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"doctor_name",label:"医生姓名"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"医生头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{width:"60px"}},[a("img",{attrs:{src:t.row.avatar,alt:""}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"office",label:"科室"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"110px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.confirmPop(e.row)}}},[t._v("确认就诊")]),t._v(" "),a("span",{staticClass:"cursor color_red",on:{click:function(a){t.cancelPop(e.row.id)}}},[t._v("取消预约")]),t._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.detailPop(e.row.id)}}},[t._v("预约详情")]),t._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.logPop(e.row.id)}}},[t._v("操作日志")])]):a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.detailPop(e.row.id)}}},[t._v("预约详情")]),t._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.logPop(e.row.id)}}},[t._v("操作日志")])])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.params.page,"page-sizes":[30,50,100],"page-size":t.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"确认取消",visible:t.cancelVisible,width:"650px"},on:{"update:visible":function(e){t.cancelVisible=e}}},[a("el-form",{attrs:{"label-width":"60px"}},[a("el-form-item",{attrs:{label:"* 备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",maxlength:100},model:{value:t.cancelParams.remarks,callback:function(e){t.$set(t.cancelParams,"remarks",e)},expression:"cancelParams.remarks"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.cancelVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.cancel}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.editVisible,width:"650px"},on:{"update:visible":function(e){t.editVisible=e}}},[a("table",{staticClass:"ajun-table"},[a("tr",[a("td",[t._v("预约编号")]),t._v(" "),a("td",[t._v(t._s(t.info.appointment_code))])]),t._v(" "),a("tr",[a("td",[t._v("预约人姓名")]),t._v(" "),a("td",[t._v(t._s(t.info.name))])]),t._v(" "),a("tr",[a("td",[t._v("手机号")]),t._v(" "),a("td",[t._v(t._s(t.info.mobile))])]),t._v(" "),"确认就诊"==t.title?a("tr",[a("td",[t._v("预约就诊时间")]),t._v(" "),a("td",[t._v(t._s(t.info.order_time)+" "+t._s(t._f("timeSlot")(t.info.time_slot)))])]):t._e(),t._v(" "),"确认就诊"==t.title?a("tr",[a("td",[t._v("确认就诊时间")]),t._v(" "),a("td",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.info.handle_at,callback:function(e){t.$set(t.info,"handle_at",e)},expression:"info.handle_at"}})],1)]):t._e(),t._v(" "),2==t.info.status?a("tr",[a("td",[t._v("确认就诊时间")]),t._v(" "),a("td",[t._v(t._s(t.info.handle_at))])]):t._e(),t._v(" "),3==t.info.status?a("tr",[a("td",[t._v("已取消时间")]),t._v(" "),a("td",[t._v(t._s(t.info.handle_at))])]):t._e(),t._v(" "),4==t.info.status?a("tr",[a("td",[t._v("已失效时间")]),t._v(" "),a("td",[t._v(t._s(t.info.handle_at))])]):t._e(),t._v(" "),"确认就诊"==t.title?a("tr",[a("td",[t._v("* 备注")]),t._v(" "),a("td",[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",maxlength:100},model:{value:t.info.remarks,callback:function(e){t.$set(t.info,"remarks",e)},expression:"info.remarks"}})],1)]):a("tr",[a("td",[t._v("备注")]),t._v(" "),a("td",[t._v(t._s(t.info.remarks))])])]),t._v(" "),"确认就诊"==t.title?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1):t._e()]),t._v(" "),a("el-dialog",{attrs:{title:"操作日志",visible:t.logVisible,width:"850px"},on:{"update:visible":function(e){t.logVisible=e}}},[a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.logList,border:"",height:"550","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_name",label:"操作人"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_at",label:"操作时间",width:"200px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"log_content",label:"操作内容",width:"300px"}})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.logParams.page,"page-sizes":[30,50,100],"page-size":t.logParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.logCount},on:{"size-change":t.handleSizeChange2,"current-change":t.handleCurrentChange2}})],1)])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.logVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.logVisible=!1}}},[t._v("确 定")])],1)])],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i}});