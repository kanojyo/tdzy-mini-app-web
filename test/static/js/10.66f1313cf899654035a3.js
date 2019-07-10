webpackJsonp([10],{"4cjj":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.coupon=function(e){return(0,n.default)({url:"/v1/coupon?"+(0,s.urlEncode)(e),method:"GET"})},t.couponStore=function(e){return(0,n.default)({url:"/v1/coupon/store",method:"POST",data:e})},t.couponUpdate=function(e){return(0,n.default)({url:"/v1/coupon/update/"+e.id,method:"POST",data:e})},t.couponReceiveLog=function(e){return(0,n.default)({url:"/v1/coupon/receive_log/"+e.id+"?"+(0,s.urlEncode)(e),method:"GET"})},t.couponShow=function(e){return(0,n.default)({url:"/v1/coupon/show/"+e.id,method:"GET"})};var i,l=a("Vo7i"),n=(i=l)&&i.__esModule?i:{default:i},s=a("0xDb")},"7J3q":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"优惠券名称"},model:{value:e.params.coupon_name,callback:function(t){e.$set(e.params,"coupon_name",t)},expression:"params.coupon_name"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"领取渠道"},model:{value:e.params.grant_type,callback:function(t){e.$set(e.params,"grant_type",t)},expression:"params.grant_type"}},e._l(e.channel,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"适用科室"},model:{value:e.params.office_id,callback:function(t){e.$set(e.params,"office_id",t)},expression:"params.office_id"}},e._l(e.departmentData,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"优惠券状态"},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}},e._l(e.status,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"创建开始日期","end-placeholder":"创建结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"700","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"coupon_name",label:"名称",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"grant_type",label:"发放类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.grant_type?a("span",{staticClass:"color-f8494c"},[e._v("注册发放")]):a("span",{staticClass:"color_red"},[e._v("邀请发放")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"office_name",label:"适用科室"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"conditions_of_use",label:"使用门槛"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",["0"===t.row.conditions_of_use?a("span",[e._v("无门槛")]):a("span",[e._v(e._s(t.row.conditions_of_use))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"denomination",label:"面额"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"validity_period",label:"有效期",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.validity_period_type?a("span",[e._v(e._s(t.row.validity_period))]):a("span",[e._v(e._s(t.row.validity_period)+" 天")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_username",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.status?a("span",{staticClass:"color-f8494c"},[e._v("正常")]):a("span",{staticClass:"color_red"},[e._v("下架")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"address",fixed:"right",label:"操作",width:"170px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.record(t.row.id)}}},[e._v("发放记录")]),e._v(" \n                            "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]),e._v(" \n                            "),1===t.row.status?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,2)}}},[e._v("下架")]):e._e(),e._v(" "),2===t.row.status?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.statusChange(t.row.id,1)}}},[e._v("上架")]):e._e()])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:e.title+"优惠券",visible:e.dialogVisible,width:"650px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"100px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 优惠券名称"}},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"请输入优惠券名称",maxlength:"30"},model:{value:e.formLabelAlign.coupon_name,callback:function(t){e.$set(e.formLabelAlign,"coupon_name",t)},expression:"formLabelAlign.coupon_name"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("1至30字符或汉字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 发放类型"}},[a("el-select",{attrs:{disabled:"编辑"===e.title,clearable:"",size:"mini",placeholder:"请选择发放类型"},model:{value:e.formLabelAlign.grant_type,callback:function(t){e.$set(e.formLabelAlign,"grant_type",t)},expression:"formLabelAlign.grant_type"}},e._l(e.channel,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"* 适用科室"}},[a("el-radio",{attrs:{disabled:"编辑"===e.title,label:1},model:{value:e.formLabelAlign.apply_office,callback:function(t){e.$set(e.formLabelAlign,"apply_office",t)},expression:"formLabelAlign.apply_office"}},[e._v("全科室")]),e._v(" "),a("el-radio",{attrs:{disabled:"编辑"===e.title,label:2},model:{value:e.formLabelAlign.apply_office,callback:function(t){e.$set(e.formLabelAlign,"apply_office",t)},expression:"formLabelAlign.apply_office"}},[e._v("部分科室")]),e._v(" "),2===e.formLabelAlign.apply_office?a("el-select",{attrs:{disabled:"编辑"===e.title,multiple:"",clearable:"",size:"mini",placeholder:"请选择科室(多选)"},model:{value:e.officeId,callback:function(t){e.officeId=t},expression:"officeId"}},e._l(e.department,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"* 发行总量"}},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"正整数，0为不限量"},model:{value:e.formLabelAlign.grant_total,callback:function(t){e.$set(e.formLabelAlign,"grant_total",t)},expression:"formLabelAlign.grant_total"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 每人限领"}},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"正整数，0为不限量"},model:{value:e.formLabelAlign.limited_per_person,callback:function(t){e.$set(e.formLabelAlign,"limited_per_person",t)},expression:"formLabelAlign.limited_per_person"}},[a("template",{slot:"append"},[e._v("张")])],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"* 面额"}},[a("el-input",{attrs:{disabled:"编辑"===e.title,clearable:"",size:"mini",maxlength:"4",placeholder:"请输入面额"},model:{value:e.formLabelAlign.denomination,callback:function(t){e.$set(e.formLabelAlign,"denomination",t)},expression:"formLabelAlign.denomination"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("单位元,1至9999的整数")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 使用门槛"}},[a("el-input",{attrs:{disabled:"编辑"===e.title,clearable:"",size:"mini",placeholder:"0为无门槛"},model:{value:e.formLabelAlign.conditions_of_use,callback:function(t){e.$set(e.formLabelAlign,"conditions_of_use",t)},expression:"formLabelAlign.conditions_of_use"}},[a("template",{slot:"prepend"},[e._v("满")]),e._v(" "),a("template",{slot:"append"},[e._v("元可用")])],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"* 有效期"}},[a("el-radio",{attrs:{disabled:"编辑"===e.title,label:1},on:{change:e.validity},model:{value:e.formLabelAlign.validity_period_type,callback:function(t){e.$set(e.formLabelAlign,"validity_period_type",t)},expression:"formLabelAlign.validity_period_type"}},[e._v("日期范围")]),e._v(" "),a("el-radio",{attrs:{disabled:"编辑"===e.title,label:2},on:{change:e.validity},model:{value:e.formLabelAlign.validity_period_type,callback:function(t){e.$set(e.formLabelAlign,"validity_period_type",t)},expression:"formLabelAlign.validity_period_type"}},[e._v("固定天数")]),e._v(" "),1===e.formLabelAlign.validity_period_type?a("div",[a("el-date-picker",{attrs:{"picker-options":e.pickerOptions,disabled:"编辑"===e.title,clearable:"",type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.formLabelAlign.validity_period,callback:function(t){e.$set(e.formLabelAlign,"validity_period",t)},expression:"formLabelAlign.validity_period"}})],1):e._e(),e._v(" "),2===e.formLabelAlign.validity_period_type?a("div",[a("el-input",{attrs:{disabled:"编辑"===e.title,clearable:"",size:"mini",maxlength:"3",placeholder:"领取后到期天数"},model:{value:e.formLabelAlign.validity_period,callback:function(t){e.$set(e.formLabelAlign,"validity_period",t)},expression:"formLabelAlign.validity_period"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("1至365的整数")])],1):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"分类状态"}},[a("el-switch",{attrs:{disabled:"编辑"===e.title,"active-value":2,"inactive-value":1,"active-text":"下架","inactive-text":"正常","active-color":"#e4e4e4","inactive-color":"#1ABC9C"},model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"优惠券发放记录",visible:e.detailsShow,width:"1200px"},on:{"update:visible":function(t){e.detailsShow=t}}},[a("div",{staticClass:"details"},[a("div",{staticClass:"title"},[e._v("基本信息")]),e._v(" "),a("table",{staticClass:"ajun-table"},[a("tr",[a("td",[e._v("名称")]),e._v(" "),a("td",[e._v("发放类型")]),e._v(" "),a("td",[e._v("适用科室")]),e._v(" "),a("td",[e._v("使用门槛")]),e._v(" "),a("td",[e._v("个人领取量")]),e._v(" "),a("td",[e._v("面额")]),e._v(" "),a("td",[e._v("有效期")]),e._v(" "),a("td",[e._v("状态")])]),e._v(" "),a("tr",[a("td",[e._v(e._s(e.couponData.coupon_name))]),e._v(" "),1===e.couponData.grant_type?a("td",[e._v("注册发放")]):a("td",[e._v("邀请发放")]),e._v(" "),a("td",[e._v(e._s(e.couponData.office_name))]),e._v(" "),0==e.couponData.conditions_of_use?a("td",[e._v("无门槛")]):a("td",[e._v(e._s(e.couponData.conditions_of_use))]),e._v(" "),a("td",[e._v(e._s(e.couponData.limited_per_person))]),e._v(" "),a("td",[e._v(e._s(e.couponData.denomination))]),e._v(" "),1===e.couponData.validity_period_type?a("td",[e._v(e._s(e.couponData.validity_period))]):a("td",[e._v(e._s(e.couponData.validity_period)+" 天")]),e._v(" "),1===e.couponData.status?a("td",[e._v("正常")]):a("td",[e._v("下架")])])])]),e._v(" "),a("div",{staticClass:"details"},[a("div",{staticClass:"title"},[e._v("发放信息")]),e._v(" "),a("table",{staticClass:"ajun-table"},[a("tr",[a("td",[e._v("发放总量")]),e._v(" "),a("td",[e._v("已领取")]),e._v(" "),a("td",[e._v("已使用")])]),e._v(" "),a("tr",[a("td",[e._v(e._s(e.couponData.grant_total))]),e._v(" "),a("td",[e._v(e._s(e.couponData.receive_total))]),e._v(" "),a("td",[e._v(e._s(e.couponData.use_total))])])])]),e._v(" "),a("div",{staticClass:"details"},[a("div",{staticClass:"title"},[e._v("领取记录")]),e._v(" "),a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"优惠券状态"},model:{value:e.details.status,callback:function(t){e.$set(e.details,"status",t)},expression:"details.status"}},e._l(e.detailsStatus,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"用户名称"},model:{value:e.details.nickname,callback:function(t){e.$set(e.details,"nickname",t)},expression:"details.nickname"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"订单号"},model:{value:e.details.order_sn,callback:function(t){e.$set(e.details,"order_sn",t)},expression:"details.order_sn"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"领取开始日期","end-placeholder":"领取结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.received,callback:function(t){e.received=t},expression:"received"}})],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.detailsSearch}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.detailsEmpty}},[e._v("清空删选条件")])],1)])]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.receiveLog.data,border:"","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"记录ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"user_nickname",label:"领取用户"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"received_at",label:"领取时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"status",label:"使用状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.status?a("span",{staticClass:"color-f8494c"},[e._v("未使用")]):a("span",{staticClass:"color_red"},[e._v("已使用")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"used_at",label:"使用时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"order_sn",label:"订单编号"}})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.details.page,"page-sizes":[30,50,100],"page-size":e.details.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.receiveLog.total},on:{"size-change":e.detailsChange,"current-change":e.detailsCurrentChange}})],1)])])])])],1)};i._withStripped=!0;var l={render:i,staticRenderFns:[]};t.a=l},Fuik:function(e,t,a){var i=a("LgQd");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("6db8786b",i,!1,{})},LgQd:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.details[data-v-65a74554] {\n  margin-bottom: 10px;\n}\n.details .title[data-v-65a74554] {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Coupon/CouponList.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;CACrB",file:"CouponList.vue",sourcesContent:["\n.details[data-v-65a74554] {\n  margin-bottom: 10px;\n}\n.details .title[data-v-65a74554] {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},MUOw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(a("Xxa5")),l=d(a("exGp")),n=d(a("Dd8w")),s=d(a("Gu7T")),r=a("NYxO"),o=a("4cjj"),c=a("E4LH");function d(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{coupon_name:"",office_id:"",created_at_start:"",created_at_end:"",grant_type:"",status:"",page:1,pageSize:30},time:"",count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{coupon_name:"",grant_type:"",grant_total:"",office_id:"",limited_per_person:"",denomination:"",conditions_of_use:"",validity_period_type:"",validity_period:"",status:1},office:"",officeId:[],channel:[{type:1,value:"注册发放"},{type:2,value:"邀请发放"}],status:[{type:1,value:"正常"},{type:2,value:"下架"}],pickerOptions:{disabledDate:function(e){var t=Date.now();return e.getTime()<t}},detailsShow:!1,details:{id:"",status:"",nickname:"",order_sn:"",received_at_start:"",received_at_end:"",page:1,pageSize:30},couponData:"",receiveLog:"",received:"",detailsStatus:[{type:1,value:"未使用"},{type:2,value:"已使用"}],departmentData:[]}},computed:(0,r.mapState)({department:function(e){return e.selector.laboratory}}),mounted:function(){this.index(),this.getLaboratory(),this.departmentData=[{id:-1,name:"全科室"}].concat((0,s.default)(this.department))},methods:(0,n.default)({},(0,r.mapActions)({getLaboratory:"getLaboratory"}),{index:function(){var e=this;return(0,l.default)(i.default.mark(function t(){var a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.coupon)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.data,e.count=a.data.total);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pageSize=e,this.index()},edit:function(e){var t=this;return(0,l.default)(i.default.mark(function a(){var l;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.title="编辑",a.next=3,(0,o.couponShow)({id:e});case 3:200===(l=a.sent).code&&(t.formLabelAlign=l.data,t.officeId=t.formLabelAlign.office_id,t.formLabelAlign.id=e,t.dialogVisible=!0);case 5:case"end":return a.stop()}},a,t)}))()},add:function(){this.title="添加",this.formLabelAlign={coupon_name:"",grant_type:"",grant_total:"",apply_office:"",office_id:"",limited_per_person:"",denomination:"",conditions_of_use:"",validity_period_type:"",validity_period:"",status:1},this.officeId=[],this.dialogVisible=!0},handleClose:function(){var e=this;return(0,l.default)(i.default.mark(function t(){var a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.formLabelAlign.coupon_name){t.next=3;break}return e.$message({message:"请输入优惠券名称",type:"warning"}),t.abrupt("return");case 3:if(""!==e.formLabelAlign.grant_type){t.next=6;break}return e.$message({message:"请选择发放类型",type:"warning"}),t.abrupt("return");case 6:if(""!==e.formLabelAlign.apply_office){t.next=11;break}return e.$message({message:"请选择适用科室",type:"warning"}),t.abrupt("return");case 11:if(1!==e.formLabelAlign.apply_office){t.next=15;break}e.formLabelAlign.office_id=[],t.next=19;break;case 15:if(e.formLabelAlign.office_id=e.officeId.join(","),""!==e.formLabelAlign.office_id){t.next=19;break}return e.$message({message:"请选择适用科室",type:"warning"}),t.abrupt("return");case 19:if(""!==e.formLabelAlign.grant_total){t.next=22;break}return e.$message({message:"请输入发行总量",type:"warning"}),t.abrupt("return");case 22:if((0,c.integer)(e.formLabelAlign.grant_total)){t.next=25;break}return e.$message({message:"发行总量为包含0的正整数~",type:"warning"}),t.abrupt("return");case 25:if(""!==e.formLabelAlign.limited_per_person){t.next=28;break}return e.$message({message:"请输入每人限领",type:"warning"}),t.abrupt("return");case 28:if((0,c.integer)(e.formLabelAlign.limited_per_person)){t.next=31;break}return e.$message({message:"每人限领为包含0的正整数~",type:"warning"}),t.abrupt("return");case 31:if(e.formLabelAlign.limited_per_person=Number(e.formLabelAlign.limited_per_person),""!==e.formLabelAlign.denomination){t.next=35;break}return e.$message({message:"请输入面额",type:"warning"}),t.abrupt("return");case 35:if((0,c.decimals)(e.formLabelAlign.denomination)){t.next=38;break}return e.$message({message:"金额单位元，最多保留2位小数~",type:"warning"}),t.abrupt("return");case 38:if(""!==e.formLabelAlign.conditions_of_use){t.next=41;break}return e.$message({message:"请输入使用门槛",type:"warning"}),t.abrupt("return");case 41:if((0,c.decimals)(e.formLabelAlign.conditions_of_use)){t.next=44;break}return e.$message({message:"金额单位元，最多保留2位小数~",type:"warning"}),t.abrupt("return");case 44:if(""!==e.formLabelAlign.validity_period_type){t.next=47;break}return e.$message({message:"请选择有效期",type:"warning"}),t.abrupt("return");case 47:if(1!==e.formLabelAlign.validity_period_type){t.next=53;break}if(""!==e.formLabelAlign.validity_period){t.next=51;break}return e.$message({message:"请选择时间",type:"warning"}),t.abrupt("return");case 51:t.next=56;break;case 53:if(""!==e.formLabelAlign.validity_period){t.next=56;break}return e.$message({message:"请输入固定日期",type:"warning"}),t.abrupt("return");case 56:if(a="","添加"!==e.title){t.next=63;break}return t.next=60,(0,o.couponStore)(e.formLabelAlign);case 60:a=t.sent,t.next=66;break;case 63:return t.next=65,(0,o.couponUpdate)(e.formLabelAlign);case 65:a=t.sent;case 66:200===a.code&&(e.dialogVisible=!1,e.index(),e.$message({message:e.title+"成功~",type:"success"}));case 67:case"end":return t.stop()}},t,e)}))()},validity:function(){this.formLabelAlign.validity_period=""},statusChange:function(e,t){var a=this,i=void 0;i=1===t?"上架":"下架",this.$confirm("此操作将"+i+"此优惠劵, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,o.couponUpdate)({id:e,status:t}).then(function(e){200===e.code&&(a.index(),a.$message({message:i+"成功",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作"})})},search:function(){null===this.time?(this.params.date_at_start="",this.params.date_at_end=""):(this.params.created_at_start=this.time[0],this.params.created_at_end=this.time[1]),this.params.page=1,this.index()},empty:function(){this.time="",this.params.coupon_name="",this.params.office_id="",this.params.created_at_start="",this.params.created_at_end="",this.params.grant_type="",this.params.status="",this.index()},record:function(e){this.details.id=e,this.detailsShow=!0,this.recordGet()},recordGet:function(){var e=this;return(0,l.default)(i.default.mark(function t(){var a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.couponReceiveLog)(e.details);case 2:200===(a=t.sent).code&&(e.couponData=a.data.coupon_data,e.receiveLog=a.data.receive_log_data);case 4:case"end":return t.stop()}},t,e)}))()},detailsCurrentChange:function(e){this.details.page=e,this.recordGet()},detailsSizeChange:function(e){this.details.pageSize=e,this.recordGet()},detailsSearch:function(){null===this.received?(this.details.received_at_start="",this.details.received_at_end=""):(this.details.received_at_start=this.received[0],this.details.received_at_end=this.received[1]),this.details.page=1,this.recordGet()},detailsEmpty:function(){this.received="",this.details.status="",this.details.nickname="",this.details.order_sn="",this.details.received_at_start="",this.details.received_at_end="",this.recordGet()}})}},zY93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("MUOw"),l=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);var s=a("7J3q"),r=!1;var o=function(e){r||a("Fuik")},c=a("VU/8")(l.a,s.a,!1,o,"data-v-65a74554",null);c.options.__file="src\\views\\Coupon\\CouponList.vue",t.default=c.exports}});