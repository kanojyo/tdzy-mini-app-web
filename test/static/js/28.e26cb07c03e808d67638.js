webpackJsonp([28],{"Ai0/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("tIQC"),i=a.n(s);for(var l in s)"default"!==l&&function(e){a.d(t,e,function(){return s[e]})}(l);var n=a("tm9p"),r=a("VU/8")(i.a,n.a,!1,null,null,null);r.options.__file="src\\views\\Doctor\\DoctorIntroduce.vue",t.default=r.exports},tIQC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=u(a("mvHQ")),i=u(a("Xxa5")),l=u(a("exGp")),n=a("4mdi"),r=a("JGDk"),o=a("E4LH"),c=u(a("dC0T"));function u(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{status:1,scheduling_status:"",start_time:"",end_time:"",page:1,pageSize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{avatar:"",name:"",brief:"",office:"",position:"",remark:"",sort:"",status:1,scheduling_status:"",doctor_details:""},fileList:[],uploadUrl:(0,r.uploadUrl)(),status:[{type:1,value:"可预约"},{type:2,value:"不可预约"}],status1:[{type:1,value:"正常"},{type:2,value:"下架"}],timeValue:"",defaultMsg:"",id:"DoctorIntroduce",previewShow:!1,detailsData:"",fileList2:[],dialogImageUrl:[],picList:[],previewImgList:[]}},components:{Ueditor:c.default},mounted:function(){this.index()},methods:{index:function(){var e=this;return(0,l.default)(i.default.mark(function t(){var a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.doctorIndex)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.list,e.count=a.data.total);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pageSize=e,this.index()},handleSuccess:function(e){200===e.code&&(this.fileList=[{name:e.data.originName,url:e.data.url}],this.formLabelAlign.avatar=e.data.url)},handleRemove:function(e,t){0===t.length&&(this.fileList=[],this.formLabelAlign.avatar="")},beforeAvatarUpload:function(e){if(e.size/1e3/1024>4)return this.$message({message:"图片大于4M，请重新上传~",type:"warning"}),!1},handleSuccess2:function(e){200===e.code&&(this.fileList2.push({url:e.data.url}),this.picList.push(e.data.url),this.formLabelAlign.doctor_details=this.picList)},handleRemove2:function(e,t){if(0===t.length)this.fileList2=[],this.picList=[],this.formLabelAlign.doctor_details="";else{var a=[];t.forEach(function(e){a.push(e.url)}),this.fileList2=t,this.formLabelAlign.doctor_details=a,this.picList=a}},edit:function(e){var t=this;return(0,l.default)(i.default.mark(function a(){var s;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.fileList2=[],t.picList=[],t.formLabelAlign.doctor_details="",t.title="编辑",a.next=6,(0,n.doctorInfo)({id:e});case 6:200===(s=a.sent).code&&(t.formLabelAlign=s.data,t.fileList=[{name:"",url:s.data.avatar}],t.dialogVisible=!0,""!==t.formLabelAlign.doctor_details&&(t.picList=JSON.parse(t.formLabelAlign.doctor_details),t.picList.forEach(function(e){t.fileList2.push({url:e})})));case 8:case"end":return a.stop()}},a,t)}))()},add:function(){this.title="添加",this.fileList2=[],this.formLabelAlign={avatar:"",name:"",brief:"",office:"",position:"",remark:"",doctor_details:"",scheduling_status:1,sort:"",status:1},this.fileList=[],this.picList=[],this.dialogVisible=!0},handleClose:function(){var e=this;return(0,l.default)(i.default.mark(function t(){var a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.formLabelAlign.avatar){t.next=3;break}return e.$message({message:"请上传医生头像",type:"warning"}),t.abrupt("return");case 3:if(""!=e.formLabelAlign.name){t.next=6;break}return e.$message({message:"请输入医生名称",type:"warning"}),t.abrupt("return");case 6:if(""!=e.formLabelAlign.brief){t.next=9;break}return e.$message({message:"请输入医生擅长",type:"warning"}),t.abrupt("return");case 9:if(""!=e.formLabelAlign.position){t.next=12;break}return e.$message({message:"请输入医生职位",type:"warning"}),t.abrupt("return");case 12:if(""!=e.formLabelAlign.remark){t.next=15;break}return e.$message({message:"请输入医生标签",type:"warning"}),t.abrupt("return");case 15:if(""===e.formLabelAlign.sort||(0,o.integer)(e.formLabelAlign.sort)){t.next=18;break}return e.$message({message:"排序值请输入正整数或0~",type:"warning"}),t.abrupt("return");case 18:if(""!=e.formLabelAlign.scheduling_status){t.next=21;break}return e.$message({message:"请输入预约状态",type:"warning"}),t.abrupt("return");case 21:if(0!=e.formLabelAlign.doctor_details.length){t.next=24;break}return e.$message({message:"请上传图片",type:"warning"}),t.abrupt("return");case 24:if(e.formLabelAlign.doctor_details=(0,s.default)(e.formLabelAlign.doctor_details),a="","添加"!==e.title){t.next=32;break}return t.next=29,(0,n.doctorSave)(e.formLabelAlign);case 29:a=t.sent,t.next=35;break;case 32:return t.next=34,(0,n.doctorUpdate)(e.formLabelAlign);case 34:a=t.sent;case 35:200===a.code&&(e.dialogVisible=!1,e.index(e.params),e.$message({message:a.data.msg,type:"success"}));case 36:case"end":return t.stop()}},t,e)}))()},statusChange:function(e,t){var a=this,s="";s=1===t?"上架":"下架",this.$confirm("此操作将"+s+"此医生, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,n.doctorStatus)({id:e,status:t}).then(function(e){200===e.code&&(a.index(),a.$message({message:s+"成功~",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作~"})})},preview:function(e){var t=this;return(0,l.default)(i.default.mark(function a(){var s;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.previewImgList="",a.next=3,(0,n.doctorInfo)({id:e});case 3:200===(s=a.sent).code&&(t.detailsData=s.data,t.previewShow=!0,""!==t.detailsData.doctor_details&&(t.previewImgList=JSON.parse(t.detailsData.doctor_details)));case 5:case"end":return a.stop()}},a,t)}))()},search:function(){this.params.page=1,this.params.start_time=this.timeValue[0],this.params.end_time=this.timeValue[1],this.index()},empty:function(){this.params.status="",this.params.scheduling_status="",this.timeValue="",this.params.start_time="",this.params.end_time="",this.index()},scheduleChange:function(e,t){var a=this,s="";s=1===t?"开启预约":"关闭预约",this.$confirm("此操作将"+s+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,n.schedulingStatus)({id:e,scheduling_status:t}).then(function(e){200===e.code&&(a.index(),a.$message({message:s+"成功~",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作~"})})},paiban:function(e){this.$router.push({path:"Schedule",query:{doctor_id:e}})},book:function(e){this.$router.push({path:"BookingOrder",query:{doctor_id:e}})}}}},tm9p:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"状态"},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}},e._l(e.status1,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"预约状态"},model:{value:e.params.scheduling_status,callback:function(t){e.$set(e.params,"scheduling_status",t)},expression:"params.scheduling_status"}},e._l(e.status,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","range-separator":"至","start-placeholder":"创建开始日期","end-placeholder":"创建结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"医生头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",[a("img",{staticClass:"img-width-50",attrs:{src:e.row.avatar,alt:""}})])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"医生姓名"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"office",label:"科室"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"position",label:"职位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.scheduling_status?a("span",{staticClass:"color-f8494c"},[e._v("可预约")]):a("span",{staticClass:"color_red"},[e._v("不可预约")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序值"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.status?a("span",{staticClass:"color-f8494c"},[e._v("正常")]):a("span",{staticClass:"color_red"},[e._v("下架")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"ctime",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[2===t.row.scheduling_status?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.scheduleChange(t.row.id,1)}}},[e._v("开启预约")]):e._e(),e._v(" "),1===t.row.scheduling_status?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.scheduleChange(t.row.id,2)}}},[e._v("关闭预约")]):e._e(),e._v(" \n                            "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]),e._v(" \n                            "),2===t.row.status?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.statusChange(t.row.id,1)}}},[e._v("上架")]):e._e(),e._v(" "),1===t.row.status?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,2)}}},[e._v("下架")]):e._e(),e._v(" \n                            "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.preview(t.row.id)}}},[e._v("预览")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.paiban(t.row.id)}}},[e._v("排班设置")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.book(t.row.id)}}},[e._v("预约记录")])])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"首页医生介绍"+e.title,visible:e.dialogVisible,width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"120px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 医生头像"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,beforeUpload:e.beforeAvatarUpload,limit:"1","list-type":"picture"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"* 医生名称"}},[a("el-input",{attrs:{placeholder:"请输入医生名称"},model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("长度限制:2至10个英文,数字或汉字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 医生擅长"}},[a("el-input",{attrs:{placeholder:"请输入医生擅长"},model:{value:e.formLabelAlign.brief,callback:function(t){e.$set(e.formLabelAlign,"brief",t)},expression:"formLabelAlign.brief"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("长度限制:为2~50字符")])],1),e._v(" "),a("el-form-item",{attrs:{label:"医生科室"}},[a("el-input",{attrs:{placeholder:"请输入医生科室"},model:{value:e.formLabelAlign.office,callback:function(t){e.$set(e.formLabelAlign,"office",t)},expression:"formLabelAlign.office"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("长度限制:2至10个英文,数字或汉字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 医生职位"}},[a("el-input",{attrs:{placeholder:"请输入医生职位"},model:{value:e.formLabelAlign.position,callback:function(t){e.$set(e.formLabelAlign,"position",t)},expression:"formLabelAlign.position"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("长度限制:2至10个英文,数字或汉字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 医生标签"}},[a("el-input",{attrs:{placeholder:"请输入医生标签"},model:{value:e.formLabelAlign.remark,callback:function(t){e.$set(e.formLabelAlign,"remark",t)},expression:"formLabelAlign.remark"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("每个标签用英文逗号分隔,标签内容为英文,数字或汉字，如：标签a,标签b")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 上传图片"}},[a("el-upload",{attrs:{action:e.uploadUrl,"list-type":"picture-card","on-success":e.handleSuccess2,"file-list":e.fileList2,beforeUpload:e.beforeAvatarUpload,"on-remove":e.handleRemove2}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{title:"图片查看",visible:e.imgVisible,size:"tiny"},on:{"update:visible":function(t){e.imgVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",{attrs:{label:"排序值"}},[a("el-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.formLabelAlign.sort,callback:function(t){e.$set(e.formLabelAlign,"sort",t)},expression:"formLabelAlign.sort"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("排序值越高权重越大")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 预约状态"}},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"预约状态"},model:{value:e.formLabelAlign.scheduling_status,callback:function(t){e.$set(e.formLabelAlign,"scheduling_status",t)},expression:"formLabelAlign.scheduling_status"}},e._l(e.status,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-value":2,"inactive-value":1,"active-text":"下架","inactive-text":"正常","active-color":"#e4e4e4","inactive-color":"#1ABC9C"},model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"预览",visible:e.previewShow,width:"980px"},on:{"update:visible":function(t){e.previewShow=t}}},[e._l(e.previewImgList,function(e,t){return a("div",{directives:[{name:"key",rawName:"v-key",value:t,expression:"index"}],staticClass:"centens",staticStyle:{"font-size":"0"}},[a("img",{attrs:{src:e,alt:""}})])}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.previewShow=!1}}},[e._v("关 闭")])],1)],2)],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};t.a=i}});