webpackJsonp([17],{jTfD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),n=a("exGp"),r=a.n(n),l=a("Dd8w"),o=a.n(l),c=a("NYxO"),u=a("4mdi"),d=a("YaEn"),p={data:function(){return{params:{doctor_id:"",user_id:"",status:"",pay_status:"",name:"",start_time:"",end_time:"",appointment_code:"",mobile:"",page:1,pagesize:30},count:0,list:[],status:[{type:1,value:"未就诊"},{type:2,value:"已就诊"},{type:3,value:"已取消"},{type:4,value:"已失效"}],payStatus:[{type:3,value:"已支付"},{type:7,value:"退款中"},{type:8,value:"已退款"},{type:9,value:"退款失败"}],timeValue:"",doctorInfo:{},info:{},cancelVisible:!1,editVisible:!1,title:"",cancelParams:{id:"",remarks:""},logVisible:!1,logList:[],logCount:0,logParams:{appointment_id:"",page:1,pagesize:30},OrderStatus:"process",PayStatus:"wait",LogStatus:"wait",menuData:[]}},computed:Object(c.c)({menu:function(t){return t.login.menu}}),mounted:function(){this.index(),this.menuGet()},methods:o()({},Object(c.b)({getMenu:"getMenu"}),{menuGet:function(){var t=this;this.menu.forEach(function(e){"医生"==e.name&&e.data.forEach(function(e){"/Doctor/BookingOrder"==e.route_web&&(t.menuData=e.role_arr)})})},index:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d.a.beforeEach(function(e,a,s){a.path==e.path&&a.query!==e.query?(t.params.doctor_id="",s(),window.location.reload()):s()}),t.$route.query.doctor_id?t.params.doctor_id=t.$route.query.doctor_id:t.params.doctor_id="",e.next=4,Object(u.d)(t.params);case 4:200===(a=e.sent).code&&(t.list=a.data.list,t.doctorInfo=a.data.doctor_info,t.count=a.data.total);case 6:case"end":return e.stop()}},e,t)}))()},handleCurrentChange:function(t){this.params.page=t,this.index()},handleCurrentChange2:function(t){this.logParams.page=t,this.getLogList()},handleSizeChange:function(t){this.params.pagesize=t,this.index()},handleSizeChange2:function(t){this.logParams.pagesize=t,this.getLogList()},search:function(){this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1],this.params.page=1,this.index()},empty:function(){this.params.appointment_code="",this.params.name="",this.params.mobile="",this.params.status="",this.params.pay_status="",this.timeValue="",this.params.start_time="",this.params.end_time="",this.index()},cancelPop:function(t){this.cancelParams.id=t,this.cancelParams.remarks="",this.cancelVisible=!0},cancel:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.cancelParams.remarks){e.next=3;break}return t.$message({message:"请输入备注",type:"warning"}),e.abrupt("return");case 3:return e.next=5,Object(u.a)(t.cancelParams);case 5:200===(a=e.sent).code&&(t.$message({message:a.data.msg,type:"success"}),t.cancelVisible=!1,t.cancelParams.remarks="",t.index());case 7:case"end":return e.stop()}},e,t)}))()},refund:function(t){var e=this;this.$confirm("此操作将申请退款, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(u.k)({id:t}).then(function(t){200===t.code&&(e.$message({message:"退款成功",type:"success"}),e.index())})}).catch(function(){e.$message({type:"info",message:"已取消操作~"})})},confirmPop:function(t){this.title="确认就诊",this.editVisible=!0,this.info=t},confirm:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.info.handle_at){e.next=3;break}return t.$message({message:"请输入确认就诊时间",type:"warning"}),e.abrupt("return");case 3:if(""!=t.info.remarks){e.next=6;break}return t.$message({message:"请输入备注",type:"warning"}),e.abrupt("return");case 6:return e.next=8,Object(u.b)({id:t.info.id,handle_at:t.info.handle_at,remarks:t.info.remarks});case 8:200===e.sent.code&&(t.$message({message:"确认就诊成功",type:"success"}),t.editVisible=!1,t.index());case 10:case"end":return e.stop()}},e,t)}))()},detailPop:function(t){var e=this;this.title="预约详情",this.editVisible=!0,Object(u.c)({id:t}).then(function(t){200===t.code&&(e.info=t.data)}),this.logParams.appointment_id=t,this.getLogList()},logPop:function(t){this.logParams.appointment_id=t,this.logVisible=!0,this.getLogList()},getLogList:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.e)(t.logParams);case 2:200===(a=e.sent).code&&(t.logList=a.data.list,t.logCount=a.data.total);case 4:case"end":return e.stop()}},e,t)}))()},returnOrder:function(){this.OrderStatus="process",this.PayStatus="wait",this.LogStatus="wait";var t=document.querySelector("#order");t&&t.scrollIntoView(!0)},returnPay:function(){this.OrderStatus="wait",this.PayStatus="process",this.LogStatus="wait";var t=document.querySelector("#pay");t&&t.scrollIntoView(!0)},returnLog:function(){this.OrderStatus="wait",this.PayStatus="wait",this.LogStatus="process";var t=document.querySelector("#log");t&&t.scrollIntoView(!0)}})},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.params.doctor_id?a("div",{staticClass:"info"},[a("div",{staticClass:"left"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.doctorInfo.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"text"},[a("p",[t._v("姓名:"+t._s(t.doctorInfo.name))]),t._v(" "),a("p",[t._v("职位:"+t._s(t.doctorInfo.position))]),t._v(" "),a("p",[t._v("科室:"+t._s(t.doctorInfo.office))])])]),t._v(" "),a("div",{staticClass:"right"},[a("p",[t._v("预约总数量:"+t._s(t.doctorInfo.order_sale_num))]),t._v(" "),a("p",[t._v("实际预约数:"+t._s(t.doctorInfo.order_use_num))])])]):t._e(),t._v(" "),a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入预约编号"},model:{value:t.params.appointment_code,callback:function(e){t.$set(t.params,"appointment_code",e)},expression:"params.appointment_code"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入预约人姓名"},model:{value:t.params.name,callback:function(e){t.$set(t.params,"name",e)},expression:"params.name"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入预约人手机号"},model:{value:t.params.mobile,callback:function(e){t.$set(t.params,"mobile",e)},expression:"params.mobile"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"就诊状态"},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}},t._l(t.status,function(t){return a("el-option",{key:t.type,attrs:{label:t.value,value:t.type}})}))],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"支付状态"},model:{value:t.params.pay_status,callback:function(e){t.$set(t.params,"pay_status",e)},expression:"params.pay_status"}},t._l(t.payStatus,function(t){return a("el-option",{key:t.type,attrs:{label:t.value,value:t.type}})}))],1),t._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"预约开始日期","end-placeholder":"预约结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:t.search}},[t._v("查询结果")])],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:t.empty}},[t._v("清空删选条件")])],1)])]),t._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.list,border:"",height:"650","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"50px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"appointment_code",label:"预约编号",width:"150px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"预约人姓名",width:"120px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"mobile",label:"手机号",width:"150px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_time",label:"预约日期",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",[t._v(t._s(e.row.order_time))]),a("br"),t._v(" "),a("span",[t._v(t._s(t._f("timeSlot")(e.row.time_slot)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"就诊状态",width:"95px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.status?a("span",{staticClass:"cursor color-f2690e"},[t._v("未就诊")]):t._e(),t._v(" "),2===e.row.status?a("span",{staticClass:"cursor color-f8494c"},[t._v("已就诊")]):t._e(),t._v(" "),3===e.row.status?a("span",{staticClass:"cursor color_999"},[t._v("已取消")]):t._e(),t._v(" "),4===e.row.status?a("span",{staticClass:"cursor color_999"},[t._v("已失效")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"支付状态",width:"95px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",[t._v(t._s(t._f("payStatus")(e.row.pay_status)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约挂号费用",width:"75px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",[t._v("¥"+t._s(e.row.order_money))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"doctor_name",label:"医生姓名",width:"80px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"医生头像",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{width:"60px"}},[a("img",{attrs:{src:t.row.avatar,alt:""}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"office",label:"科室",width:"100px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("div",[t.menuData.confirm_use?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.confirmPop(e.row)}}},[t._v("确认就诊")]):t._e(),t._v(" "),t.menuData.cancel?a("span",{staticClass:"cursor color_red",on:{click:function(a){t.cancelPop(e.row.id)}}},[t._v("取消预约")]):t._e(),t._v(" "),t.menuData.details?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.detailPop(e.row.id)}}},[t._v("预约详情")]):t._e(),t._v(" "),9==e.row.pay_status&&t.menuData.refund?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.refund(e.row.id)}}},[t._v("申请退款")]):t._e()]):a("div",[t.menuData.details?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.detailPop(e.row.id)}}},[t._v("预约详情")]):t._e(),t._v(" "),9==e.row.pay_status&&t.menuData.refund?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.refund(e.row.id)}}},[t._v("申请退款")]):t._e()])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.params.page,"page-sizes":[30,50,100],"page-size":t.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"确认取消",visible:t.cancelVisible,width:"650px","close-on-click-modal":!1},on:{"update:visible":function(e){t.cancelVisible=e}}},[a("el-form",{attrs:{"label-width":"60px"}},[a("el-form-item",{attrs:{label:"* 备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",maxlength:100},model:{value:t.cancelParams.remarks,callback:function(e){t.$set(t.cancelParams,"remarks",e)},expression:"cancelParams.remarks"}}),t._v(" "),a("p",{staticStyle:{"text-align":"right"}},[t._v("字数在100字以内")])],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.cancelVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.cancel}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.editVisible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(e){t.editVisible=e}}},[a("div",{staticClass:"anchor"},["预约详情"==t.title?a("div",{staticClass:"left"},[a("el-steps",{attrs:{direction:"vertical",space:60}},[a("el-step",{attrs:{title:"预约信息",status:t.OrderStatus},nativeOn:{click:function(e){return t.returnOrder(e)}}}),t._v(" "),0!==t.info.order_money?a("el-step",{attrs:{title:"支付信息",status:t.PayStatus},nativeOn:{click:function(e){return t.returnPay(e)}}}):t._e(),t._v(" "),a("el-step",{attrs:{title:"日志信息",status:t.LogStatus},nativeOn:{click:function(e){return t.returnLog(e)}}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"right"},["预约详情"==t.title?a("div",{staticClass:"title",attrs:{id:"order"}},[a("p",[t._v("预约信息")])]):t._e(),t._v(" "),a("table",{staticClass:"ajun-table"},[a("tr",[a("td",{staticStyle:{width:"140px"}},[t._v("预约编号")]),t._v(" "),a("td",[t._v(t._s(t.info.appointment_code))])]),t._v(" "),a("tr",[a("td",[t._v("预约人姓名")]),t._v(" "),a("td",[t._v(t._s(t.info.name))])]),t._v(" "),a("tr",[a("td",[t._v("手机号")]),t._v(" "),a("td",[t._v(t._s(t.info.mobile))])]),t._v(" "),a("tr",[a("td",[t._v("预约挂号费用")]),t._v(" "),a("td",[t._v("¥"+t._s(t.info.order_money))])]),t._v(" "),a("tr",[a("td",[t._v("预约就诊时间")]),t._v(" "),a("td",[t._v(t._s(t.info.order_time)+" "+t._s(t._f("timeSlot")(t.info.time_slot)))])]),t._v(" "),"确认就诊"==t.title?a("tr",[a("td",[t._v("确认就诊时间")]),t._v(" "),a("td",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.info.handle_at,callback:function(e){t.$set(t.info,"handle_at",e)},expression:"info.handle_at"}})],1)]):t._e(),t._v(" "),2==t.info.status?a("tr",[a("td",[t._v("确认就诊时间")]),t._v(" "),a("td",[t._v(t._s(t.info.handle_at))])]):t._e(),t._v(" "),3==t.info.status?a("tr",[a("td",[t._v("已取消时间")]),t._v(" "),a("td",[t._v(t._s(t.info.handle_at))])]):t._e(),t._v(" "),4==t.info.status?a("tr",[a("td",[t._v("已失效时间")]),t._v(" "),a("td",[t._v(t._s(t.info.handle_at))])]):t._e(),t._v(" "),"确认就诊"==t.title?a("tr",[a("td",[t._v("* 备注")]),t._v(" "),a("td",[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",maxlength:100},model:{value:t.info.remarks,callback:function(e){t.$set(t.info,"remarks",e)},expression:"info.remarks"}}),t._v(" "),a("p",{staticStyle:{"text-align":"right"}},[t._v("字数在100字以内")])],1)]):a("tr",[a("td",[t._v("备注")]),t._v(" "),a("td",[t._v(t._s(t.info.remarks))])])]),t._v(" "),"预约详情"==t.title&&0!==t.info.order_money?a("div",{staticClass:"title",attrs:{id:"pay"}},[a("p",[t._v("支付信息")])]):t._e(),t._v(" "),"预约详情"==t.title&&0!==t.info.order_money?a("table",{staticClass:"ajun-table"},[a("tr",[a("td",{staticStyle:{width:"140px"}},[t._v("支付时间")]),t._v(" "),a("td",[t._v(t._s(t.info.pay_time))])]),t._v(" "),a("tr",[a("td",[t._v("支付状态")]),t._v(" "),a("td",[t._v(t._s(t._f("payStatus")(t.info.pay_status)))])]),t._v(" "),8==t.info.pay_status?a("tr",[a("td",[t._v("退款时间")]),t._v(" "),a("td",[t._v(t._s(t.info.refund_time))])]):t._e()]):t._e(),t._v(" "),"预约详情"==t.title?a("div",{staticClass:"title",attrs:{id:"log"}},[a("p",[t._v("日志信息")])]):t._e(),t._v(" "),"预约详情"==t.title?a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.logList,border:"",height:"550","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"80px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_at",label:"记录时间",width:"200px"}}),t._v(" "),a("el-table-column",{attrs:{align:"left",prop:"log_content",label:"操作内容"}})],1)],1)]):t._e()])]),t._v(" "),"确认就诊"==t.title?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1):t._e()]),t._v(" "),a("el-dialog",{attrs:{title:"操作日志",visible:t.logVisible,width:"850px","close-on-click-modal":!1},on:{"update:visible":function(e){t.logVisible=e}}},[a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.logList,border:"",height:"550","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_name",label:"操作人"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_at",label:"操作时间",width:"200px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"log_content",label:"操作内容",width:"300px"}})],1)],1)])])],1)},staticRenderFns:[]};var v=a("VU/8")(p,_,!1,function(t){a("v5Pj")},null,null);e.default=v.exports},v5Pj:function(t,e){}});