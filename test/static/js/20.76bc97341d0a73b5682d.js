webpackJsonp([20],{"K+b4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(a("Xxa5")),r=n(a("exGp")),s=a("4mdi");function n(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{doctor_id:"",order_status:"",start_time:"",end_time:"",page:1,pageSize:30},count:0,list:[],status:[{type:1,value:"正常预约"},{type:2,value:"暂停预约"}],timeValue:"",doctorInfo:{},addVisible:!1,editVisible:!1,editData:{id:"",doctor_id:"",order_time:"",time_slot:"",order_status:"",order_max_num:"",order_money:""},options:[{type:1,value:"正常预约"},{type:2,value:"暂停预约"}],addData:{doctor_id:"",scheduling_json:[{order_time:"",time_slot:"",order_status:"",order_max_num:"",order_money:""}]},originData:[{order_time:"",time_slot:"",order_status:"",order_max_num:"",order_money:""}]}},mounted:function(){this.index()},methods:{index:function(){var e=this;return(0,r.default)(i.default.mark(function t(){var a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.params.doctor_id=e.$route.query.doctor_id,e.addData.doctor_id=e.$route.query.doctor_id,t.next=4,(0,s.schedulingList)(e.params);case 4:200===(a=t.sent).code&&(e.list=a.data.list,e.doctorInfo=a.data.doctor_info,e.count=a.data.total);case 6:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pageSize=e,this.index()},search:function(){this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1],this.params.page=1,this.index()},empty:function(){this.timeValue="",this.params.order_status="",this.params.start_time="",this.params.end_time="",this.index()},add:function(){this.addVisible=!0},copy:function(e,t){var a={};a.order_time=t.order_time,a.time_slot=t.time_slot,a.order_status=t.order_status,a.order_max_num=t.order_max_num,a.order_money=t.order_money,this.addData.scheduling_json.splice(e,0,a)},del:function(e){this.addData.scheduling_json.splice(e,1)},save:function(){var e=this;return(0,r.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.addData.scheduling_json.forEach(function(e){e.order_max_num=parseInt(e.order_max_num)}),t.next=3,(0,s.schedulingSave)(e.addData);case 3:200===t.sent.code&&(e.$message({message:"添加成功",type:"success"}),e.addVisible=!1,e.index(),e.addData.scheduling_json=e.originData);case 5:case"end":return t.stop()}},t,e)}))()},cancel:function(){this.addVisible=!1,this.addData.scheduling_json=this.originData},edit:function(e){var t=this;return(0,r.default)(i.default.mark(function a(){var r;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,s.schedulingDetail)({id:e});case 2:200===(r=a.sent).code&&(t.editData=r.data,t.editVisible=!0);case 4:case"end":return a.stop()}},a,t)}))()},modify:function(){var e=this;""!=this.editData.order_time?""!=this.editData.order_status?""!=this.editData.time_slot?""!=this.editData.order_max_num?""!==this.editData.order_money?(0,s.schedulingUpdate)(this.editData).then(function(t){200===t.code&&(e.$message({message:"修改成功",type:"success"}),e.editVisible=!1,e.index())}):this.$message({message:"请选择预约费用",type:"warning"}):this.$message({message:"请选择预约上限",type:"warning"}):this.$message({message:"请选择预约时间段",type:"warning"}):this.$message({message:"请选择预约状态",type:"warning"}):this.$message({message:"请选择排班日期",type:"warning"})}}}},Pjtg:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.info {\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.info .left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 30px;\n}\n.info .left .avatar {\n  width: 75px;\n  height: 75px;\n  margin-right: 20px;\n}\n.info .left .avatar img {\n  width: 75px;\n  height: 75px;\n}\n.info .left .text p {\n  line-height: 25px;\n}\n.info .right p {\n  line-height: 25px;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Doctor/Schedule.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB",file:"Schedule.vue",sourcesContent:["\n.info {\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.info .left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 30px;\n}\n.info .left .avatar {\n  width: 75px;\n  height: 75px;\n  margin-right: 20px;\n}\n.info .left .avatar img {\n  width: 75px;\n  height: 75px;\n}\n.info .left .text p {\n  line-height: 25px;\n}\n.info .right p {\n  line-height: 25px;\n}\n"],sourceRoot:""}])},YYq5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("K+b4"),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var n=a("ihay"),l=!1;var o=function(e){l||a("pL3X")},d=a("VU/8")(r.a,n.a,!1,o,null,null);d.options.__file="src\\views\\Doctor\\Schedule.vue",t.default=d.exports},ihay:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"info"},[a("div",{staticClass:"left"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e.doctorInfo.avatar,alt:""}})]),e._v(" "),a("div",{staticClass:"text"},[a("p",[e._v("姓名:"+e._s(e.doctorInfo.name))]),e._v(" "),a("p",[e._v("职位:"+e._s(e.doctorInfo.position))]),e._v(" "),a("p",[e._v("科室:"+e._s(e.doctorInfo.office))])])]),e._v(" "),a("div",{staticClass:"right"},[a("p",[e._v("预约总数量:"+e._s(e.doctorInfo.order_sale_num))]),e._v(" "),a("p",[e._v("实际预约数:"+e._s(e.doctorInfo.order_use_num))])])]),e._v(" "),a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"预约状态"},model:{value:e.params.order_status,callback:function(t){e.$set(e.params,"order_status",t)},expression:"params.order_status"}},e._l(e.status,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加排班")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"650","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_time",label:"日期"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"时间段",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",[e._v(e._s(e._f("timeSlot")(t.row.time_slot)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_money",label:"预约费用"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_max_num",label:"预约上限人数"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_sale_num",label:"此次排班预约数"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_use_num",label:"此次排班实际预约"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.order_status?a("span",{staticClass:"cursor color-f8494c"},[e._v("正常预约")]):e._e(),e._v(" "),2===t.row.order_status?a("span",{staticClass:"cursor color_red"},[e._v("暂停预约")]):e._e()])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"ctime",label:"创建时间",width:"200px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("修改")])])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"添加排班",visible:e.addVisible,width:"1050px"},on:{"update:visible":function(t){e.addVisible=t}}},[a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.addData.scheduling_json,border:"",height:"750","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"排班日期",width:"170px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.row.order_time,callback:function(a){e.$set(t.row,"order_time",a)},expression:"scope.row.order_time"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"时间段",width:"220px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.time_slot,callback:function(a){e.$set(t.row,"time_slot",a)},expression:"scope.row.time_slot"}},[a("el-option",{attrs:{value:1,label:"上午(8:00-12:00)"}}),e._v(" "),a("el-option",{attrs:{value:2,label:"下午(14:00-18:00)"}})],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_time",label:"预约状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.order_status,callback:function(a){e.$set(t.row,"order_status",a)},expression:"scope.row.order_status"}},e._l(e.options,function(e){return a("el-option",{key:e.type,attrs:{value:e.type,label:e.value}})}))],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_money",label:"预约上限人数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-input",{attrs:{placeholder:"请输入预约上限"},model:{value:t.row.order_max_num,callback:function(a){e.$set(t.row,"order_max_num",a)},expression:"scope.row.order_max_num"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_max_num",label:"预约费用"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-input",{attrs:{placeholder:"请输入预约费用"},model:{value:t.row.order_money,callback:function(a){e.$set(t.row,"order_money",a)},expression:"scope.row.order_money"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.copy(t.$index,t.row)}}},[e._v("复制")]),e._v(" "),a("span",{staticClass:"cursor color_red",on:{click:function(a){e.del(t.$index,t.row)}}},[e._v("删除")])])]}}])})],1)],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改排班",visible:e.editVisible,width:"650px"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{attrs:{"label-width":"120px",model:e.editData}},[a("el-form-item",{attrs:{label:"* 排班日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.editData.order_time,callback:function(t){e.$set(e.editData,"order_time",t)},expression:"editData.order_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 预约状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editData.order_status,callback:function(t){e.$set(e.editData,"order_status",t)},expression:"editData.order_status"}},e._l(e.options,function(e){return a("el-option",{key:e.type,attrs:{value:e.type,label:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"* 预约时间段"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editData.time_slot,callback:function(t){e.$set(e.editData,"time_slot",t)},expression:"editData.time_slot"}},[a("el-option",{attrs:{value:1,label:"上午(8:00-12:00)"}}),e._v(" "),a("el-option",{attrs:{value:2,label:"下午(14:00-18:00)"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"* 预约上限/人"}},[a("el-input",{attrs:{placeholder:"请输入预约上限"},model:{value:e.editData.order_max_num,callback:function(t){e.$set(e.editData,"order_max_num",t)},expression:"editData.order_max_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 预约费用/元"}},[a("el-input",{attrs:{placeholder:"请输入预约费用"},model:{value:e.editData.order_money,callback:function(t){e.$set(e.editData,"order_money",t)},expression:"editData.order_money"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.modify}},[e._v("确 定")])],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},pL3X:function(e,t,a){var i=a("Pjtg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("6fdba956",i,!1,{})}});