webpackJsonp([5],{"376w":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("sJj6"),s=a.n(i);for(var l in i)"default"!==l&&function(e){a.d(t,e,function(){return i[e]})}(l);var n=a("CP0v"),r=!1;var o=function(e){r||a("Q8QV")},c=a("VU/8")(s.a,n.a,!1,o,null,null);c.options.__file="src\\views\\Office\\office.vue",t.default=c.exports},"5WaB":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Office/office.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,iBAAiB;CAClB",file:"office.vue",sourcesContent:["\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},CP0v:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"科室"},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"状态"},model:{value:e.params.state,callback:function(t){e.$set(e.params,"state",t)},expression:"params.state"}},e._l(e.type,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"},fit:""}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"科室",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"科室图标",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.office_img}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序值",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("div",[a("span",{staticClass:"cursor color-f8494c"},[e._v("正常")])]):e._e(),e._v(" "),2==t.row.state?a("div",[a("span",{staticClass:"cursor color_red"},[e._v("下架")])]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"ctime",formatter:e.formatDate,label:"创建时间",width:"300px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.state?a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.statusChange(t.row.id,1)}}},[e._v("上架")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.preview(t.row.office_details)}}},[e._v("科室预览")])]):e._e(),e._v(" "),1===t.row.state?a("div",[a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,2)}}},[e._v("下架")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.preview(t.row.office_details)}}},[e._v("科室预览")])]):e._e()]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:e.title+"科室",visible:e.dialogVisible,width:"650px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"120px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 科室"}},[a("el-input",{attrs:{placeholder:"请输入科室",maxlength:10},model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 科室图标"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,beforeUpload:e.beforeAvatarUpload1,limit:"1","list-type":"picture"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),a("span",{staticClass:"font_12"},[e._v("只可上传1个图标,上传图标格式只能为PNG,大小小于4M，建议为44*44px")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 上传图片"}},[a("el-upload",{attrs:{action:e.uploadUrl,"list-type":"picture-card","on-success":e.handleSuccess2,"file-list":e.fileList2,beforeUpload:e.beforeAvatarUpload,"on-remove":e.handleRemove2}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{title:"图片查看",visible:e.imgVisible,size:"tiny"},on:{"update:visible":function(t){e.imgVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 排序值"}},[a("el-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.formLabelAlign.sort,callback:function(t){e.$set(e.formLabelAlign,"sort",t)},expression:"formLabelAlign.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 状态"}},[a("el-radio-group",{model:{value:e.formLabelAlign.state,callback:function(t){e.$set(e.formLabelAlign,"state",t)},expression:"formLabelAlign.state"}},e._l(e.status,function(t){return a("el-radio",{key:t.type,attrs:{label:t.type}},[e._v(e._s(t.value))])}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"预览",visible:e.previewShow,width:"980px"},on:{"update:visible":function(t){e.previewShow=t}}},[a("div",{directives:[{name:"key",rawName:"v-key",value:e.index,expression:"index"}],staticClass:"centens",staticStyle:{"font-size":"0"}},[a("img",{attrs:{src:e.item,alt:""}})]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.previewShow=!1}}},[e._v("关 闭")])],1)],2)],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s},Q8QV:function(e,t,a){var i=a("5WaB");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("23bf93b5",i,!1,{})},k6Wt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.office=function(e){return(0,l.default)({url:"/v1/office?"+(0,n.urlEncode)(e),method:"GET"})},t.officeUpdate=function(e){return(0,l.default)({url:"/v1/office/update",method:"POST",data:e})},t.officeState=function(e){return(0,l.default)({url:"/v1/office_state?"+(0,n.urlEncode)(e),method:"GET"})},t.officeDetail=function(e){return(0,l.default)({url:"/v1/office_details?id="+e.id,method:"GET"})};var i,s=a("Vo7i"),l=(i=s)&&i.__esModule?i:{default:i},n=a("0xDb")},sJj6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(a("mvHQ")),s=c(a("Xxa5")),l=c(a("exGp")),n=a("k6Wt"),r=a("JGDk"),o=a("E4LH");a("0xDb");function c(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{name:"",state:"",page:1,pagesize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{id:"",name:"",office_img:"",office_details:"",sort:"",state:1},fileList:[],fileList2:[],picList:[],uploadUrl:(0,r.uploadUrl)(),type:[{type:1,value:"正常"},{type:2,value:"下架"}],status:[{type:1,value:"正常"},{type:2,value:"下架"}],previewShow:!1,previewImgList:[]}},mounted:function(){this.index()},methods:{formatDate:function(e,t){var a=new Date(1e3*parseInt(e.ctime));return a.getFullYear()+"-"+(a.getMonth()+1<10?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-")+(a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ")+(a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":")+(a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":")+(a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds())},index:function(){var e=this;return(0,l.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.office)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.list,e.count=a.data.total);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pagesize=e,this.index()},handleSuccess:function(e){200===e.code&&(this.fileList=[{name:e.data.originName,url:e.data.url}],this.formLabelAlign.office_img=e.data.url)},handleRemove:function(e,t){0===t.length&&(this.fileList=[],this.formLabelAlign.office_img="")},handleSuccess2:function(e){200===e.code&&(this.fileList2.push({url:e.data.url}),this.picList.push(e.data.url),this.formLabelAlign.office_details=this.picList)},handleRemove2:function(e,t){if(0===t.length)this.fileList2=[],this.picList=[],this.formLabelAlign.office_details="";else{var a=[];t.forEach(function(e){a.push(e.url)}),this.fileList2=t,this.formLabelAlign.office_details=a,this.picList=a}},beforeAvatarUpload:function(e){var t="image/jpg"===e.type,a="image/jpeg"===e.type,i="image/png"===e.type,s=e.size/1024/1024<=4;return t||a||i||this.$message.error("上传头像图片只能是 jpg,png,jpeg 格式!"),s||this.$message.error("上传头像图片大小不能超过 4MB!"),(t||a||i)&&s},beforeAvatarUpload1:function(e){var t="image/png"===e.type,a=e.size/1024/1024<=4;return t||this.$message.error("上传头像图片只能是png格式!"),a||this.$message.error("上传头像图片大小不能超过 4MB!"),t&&a},edit:function(e){var t=this;return(0,l.default)(s.default.mark(function a(){var i;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.title="编辑",t.fileList=[],t.fileList2=[],a.next=5,(0,n.officeDetail)({id:e});case 5:200===(i=a.sent).code&&(t.formLabelAlign=i.data,t.fileList=[{name:"",url:i.data.office_img}],""!==t.formLabelAlign.office_details&&(t.picList=JSON.parse(t.formLabelAlign.office_details),t.picList.forEach(function(e){t.fileList2.push({url:e})})),t.dialogVisible=!0);case 7:case"end":return a.stop()}},a,t)}))()},add:function(){this.title="添加",this.formLabelAlign={id:"",name:"",office_img:"",office_details:"",sort:"",state:1},this.fileList=[],this.dialogVisible=!0},handleClose:function(){var e=this;return(0,l.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.formLabelAlign.name){t.next=3;break}return e.$message({message:"请选择科室名称",type:"warning"}),t.abrupt("return");case 3:if(""!=e.formLabelAlign.office_img){t.next=6;break}return e.$message({message:"请上传科室图标",type:"warning"}),t.abrupt("return");case 6:if(""!=e.formLabelAlign.office_details){t.next=9;break}return e.$message({message:"请上传科室图片",type:"warning"}),t.abrupt("return");case 9:if(""===e.formLabelAlign.sort||(0,o.integer)(e.formLabelAlign.sort)){t.next=12;break}return e.$message({message:"排序值请输入正整数或0~",type:"warning"}),t.abrupt("return");case 12:if("string"!=typeof e.formLabelAlign.office_details&&(e.formLabelAlign.office_details=(0,i.default)(e.formLabelAlign.office_details)),a=void 0,"添加"!==e.title){t.next=20;break}return t.next=17,(0,n.officeUpdate)(e.formLabelAlign);case 17:a=t.sent,t.next=23;break;case 20:return t.next=22,(0,n.officeUpdate)(e.formLabelAlign);case 22:a=t.sent;case 23:200===a.code&&(e.dialogVisible=!1,e.index(e.params),e.$message({message:a.data.msg,type:"success"}));case 24:case"end":return t.stop()}},t,e)}))()},statusChange:function(e,t){var a=this,i="";1===t?i="上架":2===t&&(i="下架"),this.$confirm("将"+i+"此科室, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,n.officeState)({id:e,state:t}).then(function(e){200===e.code&&(a.index(),a.$message({message:i+"成功~",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作~"})})},preview:function(e){var t=this;return(0,l.default)(s.default.mark(function a(){return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.previewImgList="",""!==e&&(t.previewImgList=JSON.parse(e)),t.previewShow=!0;case 3:case"end":return a.stop()}},a,t)}))()},search:function(){this.params.page=1,this.index()},empty:function(){this.params.name="",this.params.state="",this.index()}}}}});