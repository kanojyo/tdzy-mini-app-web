webpackJsonp([19],{"+wIk":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("6E1v"),s=t.n(l);for(var o in l)"default"!==o&&function(e){t.d(a,e,function(){return l[e]})}(o);var n=t("sDmm"),r=!1;var i=function(e){r||t("MK11")},c=t("VU/8")(s.a,n.a,!1,i,null,null);c.options.__file="src\\views\\Goods\\goods.vue",a.default=c.exports},"6E1v":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=i(t("Xxa5")),s=i(t("exGp")),o=t("qsHl"),n=t("JGDk"),r=t("E4LH");function i(e){return e&&e.__esModule?e:{default:e}}a.default={data:function(){return{params:{goods_name:"",goods_type:"",goods_status:"",page:1,pageSize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{pic_url:"",goods_name:"",goods_rules:"",goods_type:"",original_score:"",now_score:"",exchange_max_num:"",valid_type:"",start_time:"",end_time:"",surplus_days:"",sort:"",goods_status:""},fileList:[],uploadUrl:(0,n.uploadUrl)(),type:[{type:1,value:"诊疗类"},{type:2,value:"实物类"},{type:3,value:"虚拟类"}],status:[{type:1,value:"正常"},{type:2,value:"下架"},{type:3,value:"暂停兑换"}],timeValue:""}},mounted:function(){this.index()},methods:{index:function(){var e=this;return(0,s.default)(l.default.mark(function a(){var t;return l.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.goodsIndex)(e.params);case 2:200===(t=a.sent).code&&(e.list=t.data.list,e.count=t.data.total);case 4:case"end":return a.stop()}},a,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pageSize=e,this.index()},handleSuccess:function(e){200===e.code&&(this.fileList=[{name:e.data.originName,url:e.data.url}],this.formLabelAlign.pic_url=e.data.url)},handleRemove:function(e,a){0===a.length&&(this.fileList=[],this.formLabelAlign.pic_url="")},beforeAvatarUpload:function(e){if(e.size/1e3/1024>4)return this.$message({message:"图片大于4M，请重新上传~",type:"warning"}),!1},edit:function(e){var a=this;return(0,s.default)(l.default.mark(function t(){var s;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.title="编辑",t.next=3,(0,o.goodsDetails)({id:e});case 3:200===(s=t.sent).code&&(a.formLabelAlign=s.data,a.fileList=[{name:"",url:s.data.pic_url}],a.dialogVisible=!0);case 5:case"end":return t.stop()}},t,a)}))()},add:function(){this.title="添加",this.formLabelAlign={pic_url:"",goods_name:"",goods_rules:"",goods_type:"",original_score:"",now_score:"",exchange_max_num:"",valid_type:"",start_time:"",end_time:"",surplus_days:"",sort:"",goods_status:""},this.fileList=[],this.dialogVisible=!0},handleClose:function(){var e=this;return(0,s.default)(l.default.mark(function a(){var t;return l.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=e.formLabelAlign.goods_name){a.next=3;break}return e.$message({message:"请輸入商品名称",type:"warning"}),a.abrupt("return");case 3:if(""!=e.formLabelAlign.goods_type){a.next=6;break}return e.$message({message:"请输入商品类型",type:"warning"}),a.abrupt("return");case 6:if(""!=e.formLabelAlign.pic_url){a.next=9;break}return e.$message({message:"请输入商品图片",type:"warning"}),a.abrupt("return");case 9:if(""!=e.formLabelAlign.goods_rules){a.next=12;break}return e.$message({message:"请输入商品規則",type:"warning"}),a.abrupt("return");case 12:if(""!=e.formLabelAlign.now_score){a.next=15;break}return e.$message({message:"请输入兑换所需积分",type:"warning"}),a.abrupt("return");case 15:if(""!=e.formLabelAlign.original_score){a.next=18;break}return e.$message({message:"请输入商品原有积分",type:"warning"}),a.abrupt("return");case 18:if(""!=e.formLabelAlign.exchange_max_num){a.next=21;break}return e.$message({message:"请输入兑换上限",type:"warning"}),a.abrupt("return");case 21:if(""!=e.formLabelAlign.valid_type){a.next=24;break}return e.$message({message:"请输入有效期类型",type:"warning"}),a.abrupt("return");case 24:if(""===e.formLabelAlign.sort||(0,r.integer)(e.formLabelAlign.sort)){a.next=27;break}return e.$message({message:"排序值请输入正整数或0~",type:"warning"}),a.abrupt("return");case 27:if(1==e.formLabelAlign.valid_type?(e.formLabelAlign.start_time=e.timeValue[0],e.formLabelAlign.end_time=e.timeValue[1]):e.formLabelAlign.surplus_days=parseInt(e.formLabelAlign.surplus_days),e.formLabelAlign.original_score=parseInt(e.formLabelAlign.original_score),e.formLabelAlign.now_score=parseInt(e.formLabelAlign.now_score),e.formLabelAlign.exchange_max_num=parseInt(e.formLabelAlign.exchange_max_num),e.formLabelAlign.valid_type=parseInt(e.formLabelAlign.valid_type),e.formLabelAlign.sort&&(e.formLabelAlign.sort=parseInt(e.formLabelAlign.sort)),e.formLabelAlign.goods_status&&(e.formLabelAlign.goods_status=parseInt(e.formLabelAlign.goods_status)),t=void 0,"添加"!==e.title){a.next=41;break}return a.next=38,(0,o.goodsAdd)(e.formLabelAlign);case 38:t=a.sent,a.next=44;break;case 41:return a.next=43,(0,o.goodsUpdate)(e.formLabelAlign);case 43:t=a.sent;case 44:200===t.code&&(e.dialogVisible=!1,e.index(e.params),e.$message({message:t.data.msg,type:"success"}));case 45:case"end":return a.stop()}},a,e)}))()},statusChange:function(e,a){var t=this,l="";1===a?l="上架":2===a?l="下架":3===a&&(l="暂停兑换"),this.$confirm("将"+l+"此商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,o.changeStatus)({id:e,goods_status:a}).then(function(e){200===e.code&&(t.index(),t.$message({message:l+"成功~",type:"success"}))})}).catch(function(){t.$message({type:"info",message:"已取消操作~"})})},search:function(){this.params.page=1,this.index()},empty:function(){this.params.goods_name="",this.params.goods_type="",this.params.goods_status="",this.index()}}}},MK11:function(e,a,t){var l=t("fKLe");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t("rjj0")("04f1d1f4",l,!1,{})},fKLe:function(e,a,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Goods/goods.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,iBAAiB;CAClB",file:"goods.vue",sourcesContent:["\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},sDmm:function(e,a,t){"use strict";var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{},[t("div",{staticClass:"operation"},[t("div",{staticClass:"pull-left"},[t("div",{staticClass:"input"},[t("el-input",{attrs:{size:"mini",placeholder:"商品名称"},model:{value:e.params.goods_name,callback:function(a){e.$set(e.params,"goods_name",a)},expression:"params.goods_name"}})],1),e._v(" "),t("div",{staticClass:"input"},[t("el-select",{attrs:{clearable:"",size:"mini",placeholder:"商品类型"},model:{value:e.params.goods_type,callback:function(a){e.$set(e.params,"goods_type",a)},expression:"params.goods_type"}},e._l(e.type,function(e){return t("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),t("div",{staticClass:"input"},[t("el-select",{attrs:{clearable:"",size:"mini",placeholder:"状态"},model:{value:e.params.goods_status,callback:function(a){e.$set(e.params,"goods_status",a)},expression:"params.goods_status"}},e._l(e.status,function(e){return t("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),t("div",{staticClass:"search"},[t("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),t("div",{staticClass:"search"},[t("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),t("div",{staticClass:"pull-right"},[t("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")])],1)]),e._v(" "),t("div",{staticClass:"table"},[t("div",{staticClass:"table-list"},[t("el-table",{attrs:{data:e.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"}}},[t("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"商品图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{attrs:{src:e.row.pic_url}})]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"goods_name",label:"商品名称"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"now_score",label:"兑换所需积分"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"original_score",label:"原兑换所需积分"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"exchange_max_num",label:"兑换上限"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"exchange_get_num",label:"已兑换数量"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"surplus_days",label:"有效期",width:"200px"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"商品类型"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[1===a.row.goods_type?t("span",{staticClass:"color-f8494c"},[e._v("诊疗类")]):e._e(),e._v(" "),2===a.row.goods_type?t("span",{staticClass:"color-f8494c"},[e._v("实物类")]):e._e(),e._v(" "),3===a.row.goods_type?t("span",{staticClass:"color-f8494c"},[e._v("虚拟类")]):e._e()])]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[1===a.row.goods_status?t("span",{staticClass:"color-f8494c"},[e._v("正常")]):e._e(),e._v(" "),2===a.row.goods_status?t("span",{staticClass:"color_red"},[e._v("下架")]):e._e(),e._v(" "),3===a.row.goods_status?t("span",{staticClass:"color_red"},[e._v("暂停兑换")]):e._e()])]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序值"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"admin_name",label:"创建人"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"120px"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"操作",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(a){return[2===a.row.goods_status?t("div",[t("span",{staticClass:"cursor color-f8494c",on:{click:function(t){e.statusChange(a.row.id,1)}}},[e._v("上架")]),e._v(" "),t("span",{staticClass:"cursor color_red",on:{click:function(t){e.statusChange(a.row.id,3)}}},[e._v("暂停兑换")]),e._v(" "),t("span",{staticClass:"cursor color-f8494c",on:{click:function(t){e.edit(a.row.id)}}},[e._v("编辑")])]):e._e(),e._v(" "),1===a.row.goods_status?t("div",[t("span",{staticClass:"cursor color_red",on:{click:function(t){e.statusChange(a.row.id,2)}}},[e._v("下架")]),e._v(" "),t("span",{staticClass:"cursor color_red",on:{click:function(t){e.statusChange(a.row.id,3)}}},[e._v("暂停兑换")]),e._v(" "),t("span",{staticClass:"cursor color-f8494c",on:{click:function(t){e.edit(a.row.id)}}},[e._v("编辑")])]):e._e(),e._v(" "),3===a.row.goods_status?t("div",[t("span",{staticClass:"cursor color-f8494c",on:{click:function(t){e.statusChange(a.row.id,1)}}},[e._v("上架")]),e._v(" "),t("span",{staticClass:"cursor color_red",on:{click:function(t){e.statusChange(a.row.id,2)}}},[e._v("下架")]),e._v(" "),t("span",{staticClass:"cursor color-f8494c",on:{click:function(t){e.edit(a.row.id)}}},[e._v("编辑")])]):e._e()]}}])})],1)],1),e._v(" "),t("div",{staticClass:"table-peg"},[t("div",{staticClass:"pull-left"}),e._v(" "),t("div",{staticClass:"pull-right"},[t("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),t("el-dialog",{attrs:{title:"商品"+e.title,visible:e.dialogVisible,width:"650px"},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("el-form",{attrs:{"label-width":"120px",model:e.formLabelAlign}},[t("el-form-item",{attrs:{label:"* 商品名称"}},[t("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.formLabelAlign.goods_name,callback:function(a){e.$set(e.formLabelAlign,"goods_name",a)},expression:"formLabelAlign.goods_name"}}),e._v(" "),t("span",{staticClass:"font_12"},[e._v("1至30字符或汉字")])],1),e._v(" "),t("el-form-item",{attrs:{label:"* 商品类型"}},[t("el-select",{attrs:{clearable:"",size:"mini",placeholder:"请商品类型"},model:{value:e.formLabelAlign.goods_type,callback:function(a){e.$set(e.formLabelAlign,"goods_type",a)},expression:"formLabelAlign.goods_type"}},e._l(e.type,function(e){return t("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"* 商品图片"}},[t("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,beforeUpload:e.beforeAvatarUpload,limit:"1","list-type":"picture"}},[t("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"* 商品使用规则"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入商品使用规则","max-length":500},model:{value:e.formLabelAlign.goods_rules,callback:function(a){e.$set(e.formLabelAlign,"goods_rules",a)},expression:"formLabelAlign.goods_rules"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"* 兑换所需积分"}},[t("el-input",{attrs:{placeholder:"请输入兑换所需积分"},model:{value:e.formLabelAlign.now_score,callback:function(a){e.$set(e.formLabelAlign,"now_score",a)},expression:"formLabelAlign.now_score"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"* 原有积分"}},[t("el-input",{attrs:{placeholder:"请输入原有积分"},model:{value:e.formLabelAlign.original_score,callback:function(a){e.$set(e.formLabelAlign,"original_score",a)},expression:"formLabelAlign.original_score"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"* 兑换上限"}},[t("el-input",{attrs:{placeholder:"请输入兑换上限"},model:{value:e.formLabelAlign.exchange_max_num,callback:function(a){e.$set(e.formLabelAlign,"exchange_max_num",a)},expression:"formLabelAlign.exchange_max_num"}})],1),e._v(" "),t("el-form-item",{staticClass:"date",attrs:{label:"* 有效期"}},[t("el-radio",{attrs:{label:"1"},model:{value:e.formLabelAlign.valid_type,callback:function(a){e.$set(e.formLabelAlign,"valid_type",a)},expression:"formLabelAlign.valid_type"}},[t("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.timeValue,callback:function(a){e.timeValue=a},expression:"timeValue"}})],1),e._v(" "),t("el-radio",{attrs:{label:"2"},model:{value:e.formLabelAlign.valid_type,callback:function(a){e.$set(e.formLabelAlign,"valid_type",a)},expression:"formLabelAlign.valid_type"}},[t("el-input",{attrs:{placeholder:"请输入天数"},model:{value:e.formLabelAlign.surplus_days,callback:function(a){e.$set(e.formLabelAlign,"surplus_days",a)},expression:"formLabelAlign.surplus_days"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"排序值"}},[t("el-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.formLabelAlign.sort,callback:function(a){e.$set(e.formLabelAlign,"sort",a)},expression:"formLabelAlign.sort"}}),e._v(" "),t("span",{staticClass:"font_12"},[e._v("排序值越高权重越大")])],1),e._v(" "),t("el-form-item",{attrs:{label:"状态"}},[t("el-radio-group",{model:{value:e.formLabelAlign.goods_status,callback:function(a){e.$set(e.formLabelAlign,"goods_status",a)},expression:"formLabelAlign.goods_status"}},e._l(e.status,function(a){return t("el-radio",{key:a.type,attrs:{label:a.type}},[e._v(e._s(a.value))])}))],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1)],1)};l._withStripped=!0;var s={render:l,staticRenderFns:[]};a.a=s}});