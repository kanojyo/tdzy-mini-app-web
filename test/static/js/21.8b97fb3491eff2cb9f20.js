webpackJsonp([21],{"+P4A":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\ntable td {\n  padding: 10px 10px;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Goods/exchange.vue"],names:[],mappings:";AACA;EACE,mBAAmB;CACpB",file:"exchange.vue",sourcesContent:["\ntable td {\n  padding: 10px 10px;\n}\n"],sourceRoot:""}])},"2Tf6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("BlY8"),n=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);var l=a("UKUw"),r=!1;var o=function(e){r||a("oQz6")},c=a("VU/8")(n.a,l.a,!1,o,null,null);c.options.__file="src\\views\\Goods\\exchange.vue",t.default=c.exports},BlY8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(a("Xxa5")),n=o(a("exGp")),i=o(a("Dd8w")),l=a("NYxO"),r=a("qsHl");function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{name:"",mobile:"",start_time:"",end_time:"",status:"",exchange_code:"",page:1,pagesize:30},count:0,list:[],timeValue:"",type:[{type:1,value:"未使用"},{type:2,value:"已使用"},{type:3,value:"已失效"}],logParams:{exchange_id:"",page:1,pagesize:30},logList:[],logCount:0,dialogData:{},dialogVisible:!1,remarks:"",logVisible:!1,menuData:[]}},computed:(0,l.mapState)({menu:function(e){return e.login.menu}}),watch:{"$store.state.login.menu":function(){var e=this;this.$nextTick(function(){e.menuGet()})}},mounted:function(){this.index(),this.menuGet()},methods:(0,i.default)({},(0,l.mapActions)({getMenu:"getMenu"}),{menuGet:function(){var e=this;this.menu.forEach(function(t){"商品"==t.name&&t.data.forEach(function(t){"/Goods/exchange"==t.route_web&&(e.menuData=t.role_arr)})})},index:function(){var e=this;return(0,n.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,r.exchangeList)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.list,e.count=a.data.total);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleCurrentChange2:function(e){this.logParams.page=e,this.getLogList()},handleSizeChange:function(e){this.params.pagesize=e,this.index()},handleSizeChange2:function(e){this.logParams.pagesize=e,this.getLogList()},search:function(){this.params.page=1,this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1],this.index()},empty:function(){this.params.exchange_code="",this.params.customer_code="",this.params.status="",this.timeValue="",this.params.start_time="",this.params.end_time="",this.index()},confirm:function(e){this.dialogData=e,this.remarks="",this.dialogVisible=!0},use:function(){var e=this;return(0,n.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,r.goodsConfirm)({exchange_id:e.dialogData.id,remarks:e.remarks});case 2:200===t.sent.code&&(e.$message({message:"确认使用成功~",type:"success"}),e.dialogVisible=!1,e.index());case 4:case"end":return t.stop()}},t,e)}))()},log:function(e){this.logParams.exchange_id=e,this.getLogList()},getLogList:function(){var e=this;return(0,n.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,r.exchangeLogList)(e.logParams);case 2:200===(a=t.sent).code&&(e.logList=a.data.list,e.logCount=a.data.total,e.logVisible=!0);case 4:case"end":return t.stop()}},t,e)}))()}})}},UKUw:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"兑换编号"},model:{value:e.params.exchange_code,callback:function(t){e.$set(e.params,"exchange_code",t)},expression:"params.exchange_code"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"用户档案编号"},model:{value:e.params.customer_code,callback:function(t){e.$set(e.params,"customer_code",t)},expression:"params.customer_code"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"状态"},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}},e._l(e.type,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"兑换开始日期","end-placeholder":"兑换结束日期","value-format":"yyyy-MM-dd HH-mm-ss"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)])]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"goods_id",label:"商品ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"exchange_code",label:"兑换编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"customer_code",label:"用户档案编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nickname",label:"用户昵称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"exchange_score",label:"兑换积分"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"goods_name",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.status?a("span",{staticClass:"color-f2690e"},[e._v("未使用")]):e._e(),e._v(" "),2===t.row.status?a("span",{staticClass:"color-f8494c"},[e._v("已使用")]):e._e(),e._v(" "),3===t.row.status?a("span",{staticClass:"color_999"},[e._v("已失效")]):e._e()])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"兑换时间",width:"200px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?a("div",[e.menuData.confirm?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.confirm(t.row)}}},[e._v("确认使用")]):e._e(),e._v(" "),e.menuData.log?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.log(t.row.id)}}},[e._v("操作日志")]):e._e()]):a("div",[e.menuData.log?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.log(t.row.id)}}},[e._v("操作日志")]):e._e()])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"确认使用",visible:e.dialogVisible,width:"650px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("table",{staticClass:"ajun-table"},[a("tbody",[a("tr",[a("td",{staticStyle:{width:"150px"}},[e._v("用户姓名")]),e._v(" "),a("td",[e._v(e._s(e.dialogData.name))])]),e._v(" "),a("tr",[a("td",[e._v("用户手机号")]),e._v(" "),a("td",[e._v(e._s(e.dialogData.mobile))])]),e._v(" "),a("tr",[a("td",[e._v("兑换所用积分")]),e._v(" "),a("td",[e._v(e._s(e.dialogData.exchange_score))])]),e._v(" "),a("tr",[a("td",[e._v("兑换商品名称")]),e._v(" "),a("td",[e._v(e._s(e.dialogData.goods_name))])]),e._v(" "),a("tr",[a("td",[e._v("* 备注")]),e._v(" "),a("td",[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注内容",maxlength:100},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}}),e._v(" "),a("p",{staticStyle:{"text-align":"right"}},[e._v("字数在100字以内")])],1)])])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.use()}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"操作日志",visible:e.logVisible,width:"850px","close-on-click-modal":!1},on:{"update:visible":function(t){e.logVisible=t}}},[a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.logList,border:"",height:"550","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_name",label:"操作人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"create_at",label:"操作时间",width:"200px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"log_content",label:"操作内容"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"remarks",label:"备注"}})],1)],1)])])],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n},oQz6:function(e,t,a){var s=a("+P4A");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("1c2e7918",s,!1,{})}});