webpackJsonp([5],{"376w":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("sJj6"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var l=a("CP0v"),r=!1;var o=function(e){r||a("Q8QV")},c=a("VU/8")(n.a,l.a,!1,o,null,null);c.options.__file="src\\views\\Office\\office.vue",t.default=c.exports},"5WaB":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n","",{version:3,sources:["f:/泰斗中医院/kx-tdzyy-manage-web/src/views/Office/office.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,iBAAiB;CAClB",file:"office.vue",sourcesContent:["\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},CP0v:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"科室"},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"状态"},model:{value:e.params.state,callback:function(t){e.$set(e.params,"state",t)},expression:"params.state"}},e._l(e.type,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),a("div",{staticClass:"pull-right"},[e.menuData.add?a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"},fit:""}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"科室",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"科室图标",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.office_img}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"科室二维码",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.qrcode}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序值",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("div",[a("span",{staticClass:"cursor color-f8494c"},[e._v("正常")])]):e._e(),e._v(" "),2==t.row.state?a("div",[a("span",{staticClass:"cursor color_red"},[e._v("下架")])]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"ctime",formatter:e.formatDate,label:"创建时间",width:"300px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.state?a("div",[e.menuData.start_stop?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.statusChange(t.row.id,1)}}},[e._v("上架")]):e._e(),e._v(" "),e.menuData.edit?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]):e._e(),e._v(" "),e.menuData.review?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.preview(t.row.id)}}},[e._v("科室预览")]):e._e()]):e._e(),e._v(" "),1===t.row.state?a("div",[e.menuData.start_stop?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,2)}}},[e._v("下架")]):e._e(),e._v(" "),e.menuData.edit?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]):e._e(),e._v(" "),e.menuData.review?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.preview(t.row.id)}}},[e._v("科室预览")]):e._e()]):e._e()]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:e.title+"科室",visible:e.dialogVisible,width:"650px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"120px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 科室"}},[a("el-input",{attrs:{placeholder:"请输入科室",maxlength:10},model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("长度限制：1-10英文，数字或汉字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 科室图标"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,beforeUpload:e.beforeAvatarUpload1,limit:"1","list-type":"picture"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),a("span",{staticClass:"font_12"},[e._v("只可上传1个图标,上传图标格式只能为PNG,最大为4M，"),a("span",{staticClass:"color_red"},[e._v("建议为44*44px")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 科室图片"}},[a("el-upload",{attrs:{action:e.uploadUrl,"list-type":"picture-card","on-success":e.handleSuccess2,"file-list":e.fileList2,beforeUpload:e.beforeAvatarUpload,"on-remove":e.handleRemove2}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("span",{staticClass:"font_12"},[e._v("上传图片格式只能为JPG、PNG、JPEG,"),a("span",{staticClass:"color_red"},[e._v("建议为690px*454px")])]),e._v(" "),a("el-dialog",{attrs:{title:"图片查看",visible:e.imgVisible,size:"tiny"},on:{"update:visible":function(t){e.imgVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",{attrs:{label:"排序值"}},[a("el-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.formLabelAlign.sort,callback:function(t){e.$set(e.formLabelAlign,"sort",t)},expression:"formLabelAlign.sort"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("排序值越大权重越大")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 状态"}},[a("el-radio-group",{model:{value:e.formLabelAlign.state,callback:function(t){e.$set(e.formLabelAlign,"state",t)},expression:"formLabelAlign.state"}},e._l(e.status,function(t){return a("el-radio",{key:t.type,attrs:{label:t.type}},[e._v(e._s(t.value))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:" 关联部门"}},[a("el-select",{attrs:{multiple:"",clearable:"",size:"mini",placeholder:"请选择关联部门"},model:{value:e.formLabelAlign.department_json,callback:function(t){e.$set(e.formLabelAlign,"department_json",t)},expression:"formLabelAlign.department_json"}},e._l(e.departmentData,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"预览",visible:e.previewShow,width:"600px","close-on-click-modal":!1},on:{"update:visible":function(t){e.previewShow=t}}},[e._l(e.previewImgList,function(e,t){return a("div",{directives:[{name:"key",rawName:"v-key",value:t,expression:"index"}],staticClass:"centens",staticStyle:{"font-size":"0"}},[a("img",{attrs:{src:e,alt:""}})])}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.previewShow=!1}}},[e._v("关 闭")])],1)],2)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n},Q8QV:function(e,t,a){var i=a("5WaB");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("23bf93b5",i,!1,{})},k6Wt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.office=function(e){return(0,s.default)({url:"/v1/office?"+(0,l.urlEncode)(e),method:"GET"})},t.officeUpdate=function(e){return(0,s.default)({url:"/v1/office/update",method:"POST",data:e})},t.officeState=function(e){return(0,s.default)({url:"/v1/office_state?"+(0,l.urlEncode)(e),method:"GET"})},t.officeDetail=function(e){return(0,s.default)({url:"/v1/office_details?id="+e.id,method:"GET"})},t.departmentList=function(e){return(0,s.default)({url:"/v1/rule/department-list?from="+e.from,method:"GET"})};var i,n=a("Vo7i"),s=(i=n)&&i.__esModule?i:{default:i},l=a("0xDb")},sJj6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=f(a("mvHQ")),n=f(a("Xxa5")),s=f(a("exGp")),l=f(a("Dd8w")),r=a("NYxO"),o=a("k6Wt"),c=a("JGDk");a("E4LH"),a("0xDb");function f(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{name:"",state:1,page:1,pagesize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{id:"",name:"",office_img:"",office_details:"",sort:"",state:1,department_json:[]},fileList:[],fileList2:[],picList:[],uploadUrl:(0,c.uploadUrl)(),type:[{type:1,value:"正常"},{type:2,value:"下架"}],status:[{type:1,value:"正常"},{type:2,value:"下架"}],previewShow:!1,previewImgList:[],menuData:[],departmentData:[],listParmas:"office"}},computed:(0,r.mapState)({menu:function(e){return e.login.menu}}),watch:{"$store.state.login.menu":function(){var e=this;this.$nextTick(function(){e.menuGet()})}},mounted:function(){this.index(),this.menuGet()},methods:(0,l.default)({},(0,r.mapActions)({getMenu:"getMenu"}),{menuGet:function(){var e=this;this.menu.forEach(function(t){39==t.id&&t.data.forEach(function(t){"/Office/office"==t.route_web&&(e.menuData=t.role_arr)})})},formatDate:function(e,t){var a=new Date(1e3*parseInt(e.ctime));return a.getFullYear()+"-"+(a.getMonth()+1<10?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-")+(a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ")+(a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":")+(a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":")+(a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds())},departmentListGet:function(e){var t=this;return(0,s.default)(n.default.mark(function a(){var i;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.departmentList)({from:e});case 2:200==(i=a.sent).code&&(t.departmentData=i.data);case 4:case"end":return a.stop()}},a,t)}))()},index:function(){var e=this;return(0,s.default)(n.default.mark(function t(){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.office)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.list,e.count=a.data.total);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pagesize=e,this.index()},handleSuccess:function(e){200===e.code&&(this.fileList=[{name:e.data.originName,url:e.data.url}],this.formLabelAlign.office_img=e.data.url)},handleRemove:function(e,t){0===t.length&&(this.fileList=[],this.formLabelAlign.office_img="")},handleSuccess2:function(e){200===e.code&&(this.fileList2.push({url:e.data.url}),this.picList.push(e.data.url),this.formLabelAlign.office_details=this.picList)},handleRemove2:function(e,t){if(0===t.length)this.fileList2=[],this.picList=[],this.formLabelAlign.office_details="";else{var a=[];t.forEach(function(e){a.push(e.url)}),this.fileList2=t,this.formLabelAlign.office_details=a,this.picList=a}},beforeAvatarUpload:function(e){var t="image/jpg"===e.type,a="image/jpeg"===e.type,i="image/png"===e.type,n=e.size/1024/1024<=4;return t||a||i||this.$message.error("上传图片只能是 jpg,png,jpeg 格式!"),n||this.$message.error("上传图片大小不能超过 4MB!"),(t||a||i)&&n},beforeAvatarUpload1:function(e){var t="image/png"===e.type,a=e.size/1024/1024<=4;return t||this.$message.error("上传图片只能是png格式!"),a||this.$message.error("上传图片大小不能超过 4MB!"),t&&a},edit:function(e){var t=this;return(0,s.default)(n.default.mark(function a(){var i;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.title="编辑",t.fileList=[],t.fileList2=[],a.next=5,(0,o.officeDetail)({id:e});case 5:200===(i=a.sent).code&&(t.formLabelAlign=i.data,t.fileList=[{name:"",url:i.data.office_img}],""!==t.formLabelAlign.office_details&&(t.picList=JSON.parse(t.formLabelAlign.office_details),t.picList.forEach(function(e){t.fileList2.push({url:e})})),""!==t.formLabelAlign.department_json?t.formLabelAlign.department_json=JSON.parse(t.formLabelAlign.department_json):t.formLabelAlign.department_json=[],t.dialogVisible=!0),t.departmentListGet(t.listParmas);case 8:case"end":return a.stop()}},a,t)}))()},add:function(){this.title="添加",this.formLabelAlign={id:"",name:"",office_img:"",office_details:"",sort:"",state:1,department_json:[]},this.fileList=[],this.fileList2=[],this.picList=[],this.departmentListGet(this.listParmas),this.dialogVisible=!0},handleClose:function(){var e=this;return(0,s.default)(n.default.mark(function t(){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.formLabelAlign.name){t.next=3;break}return e.$message({message:"请选择科室名称",type:"warning"}),t.abrupt("return");case 3:if(""!=e.formLabelAlign.office_img){t.next=6;break}return e.$message({message:"请上传科室图标",type:"warning"}),t.abrupt("return");case 6:if(""!=e.formLabelAlign.office_details){t.next=9;break}return e.$message({message:"请上传科室图片",type:"warning"}),t.abrupt("return");case 9:if("string"!=typeof e.formLabelAlign.office_details&&(e.formLabelAlign.office_details=(0,i.default)(e.formLabelAlign.office_details)),e.formLabelAlign.department_json.length>0?e.formLabelAlign.department_json=(0,i.default)(e.formLabelAlign.department_json):e.formLabelAlign.department_json="",a=void 0,"添加"!==e.title){t.next=18;break}return t.next=15,(0,o.officeUpdate)(e.formLabelAlign);case 15:a=t.sent,t.next=21;break;case 18:return t.next=20,(0,o.officeUpdate)(e.formLabelAlign);case 20:a=t.sent;case 21:200===a.code?(e.dialogVisible=!1,e.index(e.params),e.$message({message:a.data.msg,type:"success"})):e.formLabelAlign.department_json&&(e.formLabelAlign.department_json=JSON.parse(e.formLabelAlign.department_json));case 22:case"end":return t.stop()}},t,e)}))()},statusChange:function(e,t){var a=this,i="";1===t?i="上架":2===t&&(i="下架"),this.$confirm("将"+i+"此科室, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,o.officeState)({id:e,state:t}).then(function(e){200===e.code&&(a.index(),a.$message({message:i+"成功~",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作~"})})},preview:function(e){var t=this;return(0,s.default)(n.default.mark(function a(){var i;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.previewImgList="",a.next=3,(0,o.officeDetail)({id:e});case 3:200==(i=a.sent).code&&(t.previewImgList=i.data.office_details,""!==t.previewImgList&&(t.previewImgList=JSON.parse(t.previewImgList)),t.previewShow=!0);case 5:case"end":return a.stop()}},a,t)}))()},search:function(){this.params.page=1,this.index()},empty:function(){this.params.name="",this.params.state="",this.index()}})}}});