webpackJsonp([29],{"7Mlb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(a("Xxa5")),l=c(a("exGp")),n=c(a("Dd8w")),s=a("NYxO"),r=a("3/Li"),o=a("JGDk");function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{params:{title:"",status:1,page:1,pagesize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{cover:"",title:"",link_url:"",publish_at:""},fileList:[],uploadUrl:(0,o.uploadUrl)(),status:[{type:1,value:"正常"},{type:2,value:"下架"}],pickerOptions:{disabledDate:function(t){var e=Date.now();return t.getTime()<e}},withdrawFrom:{id:"",withdraw_reason:""},withdrawShow:!1,detailsShow:!1,detailsData:"",menuData:[]}},computed:(0,s.mapState)({menu:function(t){return t.login.menu}}),watch:{"$store.state.login.menu":function(){var t=this;this.$nextTick(function(){t.menuGet()})}},mounted:function(){this.index(),this.menuGet()},methods:(0,n.default)({},(0,s.mapActions)({getMenu:"getMenu"}),{menuGet:function(){var t=this;this.menu.forEach(function(e){14==e.id&&e.data.forEach(function(e){"/Operate/AnnouncementManagement"==e.route_web&&(t.menuData=e.role_arr)})})},index:function(){var t=this;return(0,l.default)(i.default.mark(function e(){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.announcementIndex)(t.params);case 2:200===(a=e.sent).code&&(t.list=a.data.list,t.count=a.data.total);case 4:case"end":return e.stop()}},e,t)}))()},handleCurrentChange:function(t){this.params.page=t,this.index()},handleSizeChange:function(t){this.params.pageSize=t,this.index()},handleSuccess:function(t){200===t.code&&(this.fileList=[{name:t.data.originName,url:t.data.url}],this.formLabelAlign.cover=t.data.url)},handleRemove:function(t,e){0===e.length&&(this.fileList=[],this.formLabelAlign.cover="")},beforeAvatarUpload:function(t){if(t.size/1e3/1024>4)return this.$message({message:"图片大于4M，请重新上传~",type:"warning"}),!1},edit:function(t){var e=this;return(0,l.default)(i.default.mark(function a(){return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.title="编辑",e.announcementGet(t.id);case 2:case"end":return a.stop()}},a,e)}))()},add:function(){this.title="添加",delete this.formLabelAlign.id,this.formLabelAlign.title="",this.formLabelAlign.cover="",this.formLabelAlign.link_url="",this.formLabelAlign.publish_at="",this.fileList=[],this.dialogVisible=!0},handleClose:function(){var t=this;return(0,l.default)(i.default.mark(function e(){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.formLabelAlign.cover){e.next=3;break}return t.$message({message:"请上传封面图",type:"warning"}),e.abrupt("return");case 3:if(""!==t.formLabelAlign.title){e.next=6;break}return t.$message({message:"请输入标题",type:"warning"}),e.abrupt("return");case 6:if(""!==t.formLabelAlign.link_url){e.next=9;break}return t.$message({message:"请输入链接",type:"warning"}),e.abrupt("return");case 9:if(""!==t.formLabelAlign.publish_at){e.next=12;break}return t.$message({message:"请选择时间",type:"warning"}),e.abrupt("return");case 12:if(a="","添加"!==t.title){e.next=19;break}return e.next=16,(0,r.authenticateAdd)(t.formLabelAlign);case 16:a=e.sent,e.next=22;break;case 19:return e.next=21,(0,r.authenticateUpdate)(t.formLabelAlign);case 21:a=e.sent;case 22:200===a.code&&(t.dialogVisible=!1,t.index(),t.$message({message:t.title+"成功",type:"success"}));case 23:case"end":return e.stop()}},e,t)}))()},announcementGet:function(t){var e=this;return(0,l.default)(i.default.mark(function a(){var l;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.announcementInfo)({id:t});case 2:200===(l=a.sent).code&&(e.detailsData=l.data,e.formLabelAlign.id=t,e.formLabelAlign.title=l.data.title,e.formLabelAlign.cover=l.data.cover,e.formLabelAlign.link_url=l.data.link_url,e.formLabelAlign.publish_at=l.data.publish_at,e.fileList=[{name:"",url:l.data.cover}],e.dialogVisible=!0);case 4:case"end":return a.stop()}},a,e)}))()},withdraw:function(t){this.withdrawFrom.id=t,this.withdrawFrom.withdraw_reason="",this.withdrawShow=!0},withdrawChange:function(){var t=this;""!==this.withdrawFrom.withdraw_reason?this.$confirm("此操作将撤回此公告, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,r.authenticateWithdraw)(t.withdrawFrom).then(function(e){200===e.code&&(t.index(),t.withdrawShow=!1,t.$message({message:"撤回成功",type:"success"}))})}).catch(function(){t.$message({type:"info",message:"已取消操作~"})}):this.$message({message:"请输入撤回原因",type:"warning"})},details:function(t){this.announcementGet(t.id)},search:function(){this.params.page=1,this.index()},empty:function(){this.params.title="",this.params.status="",this.index()},open:function(t){window.open(t)}})}},"8HXn":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"公告标题"},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"公告状态"},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}},t._l(t.status,function(t){return a("el-option",{key:t.type,attrs:{label:t.value,value:t.type}})}))],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:t.search}},[t._v("查询结果")])],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:t.empty}},[t._v("清空删选条件")])],1)]),t._v(" "),a("div",{staticClass:"pull-right"},[t.menuData.add?a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:t.add}},[t._v("添加")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.list,border:"",height:"700","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"title",label:"公告标题",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.status?a("span",{staticClass:"color-f8494c"},[t._v("正常")]):a("span",{staticClass:"color_red"},[t._v("下架")])])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin",label:"创建人",width:"100px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"publish_at",label:"发布时间",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.status&&t.menuData.edit?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.edit(e.row)}}},[t._v("编辑")]):t._e(),t._v(" \n                            "),1===e.row.status&&t.menuData.back?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.withdraw(e.row.id)}}},[t._v("撤回")]):t._e(),t._v(" \n                            "),t.menuData.details?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.details(e.row)}}},[t._v("详情")]):t._e()])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.params.page,"page-sizes":[30,50,100],"page-size":t.params.page_size,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"450px","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{"label-width":"100px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 公告封面"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadUrl,"on-success":t.handleSuccess,"on-remove":t.handleRemove,"file-list":t.fileList,beforeUpload:t.beforeAvatarUpload,limit:"1","list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"* 公告标题"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入公告标题",maxlength:"30"},model:{value:t.formLabelAlign.title,callback:function(e){t.$set(t.formLabelAlign,"title",e)},expression:"formLabelAlign.title"}}),t._v(" "),a("span",{staticClass:"font_12"},[t._v("1至30字符或汉字")])],1),t._v(" "),a("el-form-item",{attrs:{label:"* 公告链接"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入公告链接"},model:{value:t.formLabelAlign.link_url,callback:function(e){t.$set(t.formLabelAlign,"link_url",e)},expression:"formLabelAlign.link_url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"* 发布时间"}},[a("el-date-picker",{attrs:{clearable:"","picker-options":t.pickerOptions,type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.formLabelAlign.publish_at,callback:function(e){t.$set(t.formLabelAlign,"publish_at",e)},expression:"formLabelAlign.publish_at"}}),t._v(" "),a("span",{staticClass:"font_12"},[t._v("发布时间必须大于当前时间")])],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"撤回",visible:t.withdrawShow,width:"450px","close-on-click-modal":!1},on:{"update:visible":function(e){t.withdrawShow=e}}},[a("el-form",{attrs:{"label-width":"100px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 撤回原因"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入撤回原因"},model:{value:t.withdrawFrom.withdraw_reason,callback:function(e){t.$set(t.withdrawFrom,"withdraw_reason",e)},expression:"withdrawFrom.withdraw_reason"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.withdrawShow=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.withdrawChange}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"公告详情",visible:t.detailsShow,width:"980px","close-on-click-modal":!1},on:{"update:visible":function(e){t.detailsShow=e}}},[a("table",{staticClass:"ajun-table"},[a("tr",[a("td",[t._v("公告标题")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.title))])]),t._v(" "),a("tr",[a("td",[t._v("封面")]),t._v(" "),a("td",[a("img",{staticStyle:{width:"200px",height:"100px"},attrs:{src:t.detailsData.cover,alt:""}})])]),t._v(" "),a("tr",[a("td",[t._v("链接")]),t._v(" "),a("td",{staticClass:"cursor color-f8494c",on:{click:function(e){t.open(t.detailsData.link_url)}}},[t._v("点我查看")])]),t._v(" "),a("tr",[a("td",[t._v("状态")]),t._v(" "),1===t.detailsData.status?a("td",[t._v("正常")]):a("td",[t._v("下架")])]),t._v(" "),a("tr",[a("td",[t._v("创建人")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.admin))])]),t._v(" "),a("tr",[a("td",[t._v("创建时间")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.created_at))])]),t._v(" "),a("tr",[a("td",[t._v("发布时间")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.publish_at))])]),t._v(" "),a("tr",[a("td",[t._v("撤回人")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.withdraw_er))])]),t._v(" "),a("tr",[a("td",[t._v("撤回时间")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.withdraw_at))])]),t._v(" "),a("tr",[a("td",[t._v("撤回原因")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.withdraw_reason))])])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.detailsShow=!1}}},[t._v("取 消")])],1)])],1)};i._withStripped=!0;var l={render:i,staticRenderFns:[]};e.a=l},Ri5P:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7Mlb"),l=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var s=a("8HXn"),r=a("VU/8")(l.a,s.a,!1,null,null,null);r.options.__file="src\\views\\Operate\\AnnouncementManagement.vue",e.default=r.exports}});