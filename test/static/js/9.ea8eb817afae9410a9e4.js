webpackJsonp([9],{Ghkd:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.dialogVisible[data-v-0425da4a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9;\n  overflow-y: scroll;\n}\n.dialogVisible .contens[data-v-0425da4a] {\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  background: #fff;\n  width: 1100px;\n  padding: 50px;\n}\n.dialogVisible .contens .dialog-footer[data-v-0425da4a] {\n  float: right;\n}\n.dialogVisible .icon[data-v-0425da4a] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 32px;\n  color: #999;\n  cursor: pointer;\n}\n.centens .title[data-v-0425da4a] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n.centens .user-time[data-v-0425da4a] {\n  text-align: center;\n  margin: 10px;\n}\n.centens .text[data-v-0425da4a] {\n  line-height: 1.5;\n}\n","",{version:3,sources:["F:/泰斗中医院/kx-tdzyy-manage-web/src/views/Article/ArticleAdministration.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,+BAA+B;EAC/B,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,sCAAsC;UAC9B,8BAA8B;EACtC,iBAAiB;EACjB,cAAc;EACd,cAAc;CACf;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,iBAAiB;CAClB",file:"ArticleAdministration.vue",sourcesContent:["\n.dialogVisible[data-v-0425da4a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9;\n  overflow-y: scroll;\n}\n.dialogVisible .contens[data-v-0425da4a] {\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  background: #fff;\n  width: 1100px;\n  padding: 50px;\n}\n.dialogVisible .contens .dialog-footer[data-v-0425da4a] {\n  float: right;\n}\n.dialogVisible .icon[data-v-0425da4a] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 32px;\n  color: #999;\n  cursor: pointer;\n}\n.centens .title[data-v-0425da4a] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n.centens .user-time[data-v-0425da4a] {\n  text-align: center;\n  margin: 10px;\n}\n.centens .text[data-v-0425da4a] {\n  line-height: 1.5;\n}\n"],sourceRoot:""}])},eLuQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(a("Xxa5")),l=d(a("exGp")),n=d(a("Dd8w")),r=a("NYxO"),s=d(a("dC0T")),o=a("viA7"),c=a("JGDk");function d(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{params:{article_title:"",status:1,category_id:"",page:1,pageSize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{article_title:"",article_cover:"",category_id:"",article_description:"",article_tag:"",article_content:"",sort:"",status:1},fileList:[],uploadUrl:(0,c.uploadUrl)(),detailsData:"",defaultMsg:"",id:"ArticleAdministration",status:[{type:1,value:"正常"},{type:2,value:"下架"}],label:[],detailsShow:!1,previewShow:!1,tagData:[]}},computed:(0,r.mapState)({labelData:function(t){return t.selector.laboratory},category:function(t){return t.selector.category},menu:function(t){return t.login.menu}}),mounted:function(){this.index(),this.getLaboratory(),this.articleTagGet(),this.getCategory({status:0}),console.log(this.menu)},methods:(0,n.default)({},(0,r.mapActions)({getLaboratory:"getLaboratory",getCategory:"getCategory",getMenu:"getMenu"}),{index:function(){var t=this;return(0,l.default)(i.default.mark(function e(){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.article)(t.params);case 2:200===(a=e.sent).code&&(t.list=a.data.data,t.count=a.data.total);case 4:case"end":return e.stop()}},e,t)}))()},articleTagGet:function(){var t=this;return(0,l.default)(i.default.mark(function e(){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.articleTag)();case 2:200===(a=e.sent).code&&(t.tagData=a.data);case 4:case"end":return e.stop()}},e,t)}))()},handleCurrentChange:function(t){this.params.page=t,this.index()},handleSizeChange:function(t){this.params.pageSize=t,this.index()},handleSuccess:function(t){200===t.code&&(this.fileList=[{name:t.data.originName,url:t.data.url}],this.formLabelAlign.article_cover=t.data.url)},handleRemove:function(t,e){0===e.length&&(this.fileList=[],this.formLabelAlign.article_cover="")},beforeAvatarUpload:function(t){if(t.size/1e3/1024>4)return this.$message({message:"图片大于4M，请重新上传~",type:"warning"}),!1},details:function(t){this.detailsShow=!0,this.detailsGet(t)},detailsGet:function(t){var e=this;return(0,l.default)(i.default.mark(function a(){var l;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.articleShow)({id:t});case 2:200===(l=a.sent).code&&(e.detailsData=e.formLabelAlign=l.data,e.category.forEach(function(t){t.id===e.detailsData.category_id&&(e.detailsData.category_id=t.category_name)}),e.formLabelAlign.id=t,e.fileList=[{name:"",url:l.data.article_cover}],e.defaultMsg=l.data.article_content,e.label=l.data.article_tag.split(","));case 4:case"end":return a.stop()}},a,e)}))()},previewChange:function(t){this.previewShow=!0,this.detailsGet(t)},edit:function(t){this.title="编辑",this.detailsGet(t.id),this.dialogVisible=!0,this.getCategory({status:1})},add:function(){this.title="添加",this.getCategory({status:1}),this.formLabelAlign={article_title:"",article_cover:"",category_id:"",article_description:"",article_tag:"",article_content:"",sort:"",status:1},this.defaultMsg="",this.fileList=[],this.label=[],this.dialogVisible=!0},closedCahnge:function(){this.getCategory({status:0})},handleClose:function(){var t=this;return(0,l.default)(i.default.mark(function e(){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.formLabelAlign.article_cover){e.next=3;break}return t.$message({message:"请上传文章封面",type:"warning"}),e.abrupt("return");case 3:if(""!=t.formLabelAlign.category_id){e.next=6;break}return t.$message({message:"请选择文章分类",type:"warning"}),e.abrupt("return");case 6:if(""!=t.label){e.next=9;break}return t.$message({message:"请选择文章标签",type:"warning"}),e.abrupt("return");case 9:if(""!=t.formLabelAlign.article_title){e.next=12;break}return t.$message({message:"请输入文章标题",type:"warning"}),e.abrupt("return");case 12:if(""!=t.formLabelAlign.article_description){e.next=15;break}return t.$message({message:"请输入文章简介",type:"warning"}),e.abrupt("return");case 15:if(t.formLabelAlign.article_content=t.$refs.ue.getUEContent(),""!=t.formLabelAlign.article_content){e.next=19;break}return t.$message({message:"请编辑文章内容",type:"warning"}),e.abrupt("return");case 19:if(t.formLabelAlign.article_tag=t.label.join(","),a="","添加"!==t.title){e.next=27;break}return e.next=24,(0,o.articleStore)(t.formLabelAlign);case 24:a=e.sent,e.next=31;break;case 27:return t.category.forEach(function(e){e.category_name===t.formLabelAlign.category_id&&(t.formLabelAlign.category_id=e.id)}),e.next=30,(0,o.articleUpdate)(t.formLabelAlign);case 30:a=e.sent;case 31:200===a.code&&(t.dialogVisible=!1,t.index());case 32:case"end":return e.stop()}},e,t)}))()},undercarriage:function(t,e){var a=this,i="";i=1===e?"上架":"下架",this.$confirm("此操作将"+i+"此文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,o.articleUpdate)({id:t,status:e}).then(function(t){200===t.code&&(a.index(),a.$message({message:i+"成功",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作~"})})},search:function(){this.params.page=1,this.index()},empty:function(){this.params.article_title="",this.params.category_id="",this.params.status="",this.index()},target:function(t){this.$message({type:"info",message:"此功能暂不支持~"})}}),components:{Ueditor:s.default}}},"iF/J":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{clearable:"",size:"mini",placeholder:"文章标题"},model:{value:t.params.article_title,callback:function(e){t.$set(t.params,"article_title",e)},expression:"params.article_title"}})],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"文章状态"},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}},t._l(t.status,function(t){return a("el-option",{key:t.type,attrs:{label:t.value,value:t.type}})}))],1),t._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"文章分类"},model:{value:t.params.category_id,callback:function(e){t.$set(t.params,"category_id",e)},expression:"params.category_id"}},t._l(t.category,function(t){return a("el-option",{key:t.id,attrs:{label:t.category_name,value:t.id}})}))],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:t.search}},[t._v("查询结果")])],1),t._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:t.empty}},[t._v("清空删选条件")])],1)]),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:t.add}},[t._v("添加")])],1)]),t._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:t.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"category_name",label:"分类",width:"120px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"article_title",label:"文章标题",width:"200px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"封面图"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[a("img",{staticClass:"img-width-50",attrs:{src:t.row.article_cover,alt:""}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"article_tag",label:"文章标签",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1===e.row.status?a("span",{staticClass:"color-f8494c"},[t._v("正常")]):t._e(),t._v(" "),2===e.row.status?a("span",{staticClass:"color_red"},[t._v("下架")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序值"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"article_views",label:"浏览量"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"article_collection",label:"收藏量"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_username",label:"创建人",width:"120px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.edit(e.row)}}},[t._v("编辑")]),t._v(" \n                            "),2===e.row.status?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.undercarriage(e.row.id,1)}}},[t._v("上架")]):t._e(),t._v(" "),1===e.row.status?a("span",{staticClass:"cursor color_red",on:{click:function(a){t.undercarriage(e.row.id,2)}}},[t._v("下架")]):t._e(),t._v(" \n                            "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.details(e.row.id)}}},[t._v("详情")]),t._v(" \n                            "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){t.previewChange(e.row.id)}}},[t._v("预览")])])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":t.params.page,"page-sizes":[30,50,100],"page-size":t.params.page_size,layout:"total, sizes, prev, pager, next, jumper",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.dialogVisible?a("div",{staticClass:"dialogVisible"},[a("div",{staticClass:"contens"},[a("div",{staticClass:"icon",on:{click:function(e){t.dialogVisible=!t.dialogVisible}}},[a("i",{staticClass:"el-icon-close"})]),t._v(" "),a("el-form",{attrs:{"label-width":"100px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 文章封面"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadUrl,"on-success":t.handleSuccess,"on-remove":t.handleRemove,"file-list":t.fileList,beforeUpload:t.beforeAvatarUpload,limit:"1","list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"* 文章分类"}},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"请选择文章分类"},model:{value:t.formLabelAlign.category_id,callback:function(e){t.$set(t.formLabelAlign,"category_id",e)},expression:"formLabelAlign.category_id"}},t._l(t.category,function(t){return a("el-option",{key:t.id,attrs:{label:t.category_name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"* 文章标签"}},[a("el-select",{attrs:{multiple:"",clearable:"",size:"mini",placeholder:"请选择文章标签(多选)"},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}},t._l(t.tagData,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"* 文章标题"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入文章标题",maxlength:"30"},model:{value:t.formLabelAlign.article_title,callback:function(e){t.$set(t.formLabelAlign,"article_title",e)},expression:"formLabelAlign.article_title"}}),t._v(" "),a("span",{staticClass:"font_12"},[t._v("1至30字符或汉字")])],1),t._v(" "),a("el-form-item",{attrs:{label:"* 文章简介"}},[a("el-input",{attrs:{type:"textarea",rows:2,size:"mini",placeholder:"请输入文章简介",maxlength:"50"},model:{value:t.formLabelAlign.article_description,callback:function(e){t.$set(t.formLabelAlign,"article_description",e)},expression:"formLabelAlign.article_description"}}),t._v(" "),a("span",{staticClass:"font_12"},[t._v("1至50字符或汉字")])],1),t._v(" "),a("el-form-item",{attrs:{label:"* 内容编辑"}},[a("Ueditor",{ref:"ue",attrs:{defaultMsg:t.defaultMsg,id:t.id}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序值"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入排序"},model:{value:t.formLabelAlign.sort,callback:function(e){t.$set(t.formLabelAlign,"sort",e)},expression:"formLabelAlign.sort"}}),t._v(" "),a("span",{staticClass:"font_12"},[t._v("排序值越高权重越大")])],1),t._v(" "),a("el-form-item",{attrs:{label:"文章状态"}},[a("el-switch",{attrs:{"active-value":2,"inactive-value":1,"active-text":"下架","inactive-text":"正常","active-color":"#e4e4e4","inactive-color":"#1ABC9C"},model:{value:t.formLabelAlign.status,callback:function(e){t.$set(t.formLabelAlign,"status",e)},expression:"formLabelAlign.status"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("返 回")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("确 定")])],1)],1)]):t._e()]),t._v(" "),a("el-dialog",{attrs:{title:"文章详情",visible:t.detailsShow,width:"980px","close-on-click-modal":!1},on:{"update:visible":function(e){t.detailsShow=e}}},[a("table",{staticClass:"ajun-table"},[a("tr",[a("td",[t._v("文章分类")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.category_id))])]),t._v(" "),a("tr",[a("td",[t._v("文章标签")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.article_tag))])]),t._v(" "),a("tr",[a("td",[t._v("封面")]),t._v(" "),a("td",[a("img",{staticClass:"img-width-50",attrs:{src:t.detailsData.article_cover,alt:""}})])]),t._v(" "),a("tr",[a("td",[t._v("标题")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.article_title))])]),t._v(" "),a("tr",[a("td",[t._v("简介")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.article_description))])]),t._v(" "),a("tr",[a("td",[t._v("文章内容")]),t._v(" "),a("td",{staticClass:"cursor color-f8494c",on:{click:function(e){t.previewChange(t.detailsData.id)}}},[t._v("点击查看")])]),t._v(" "),a("tr",[a("td",[t._v("排序值")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.sort))])]),t._v(" "),a("tr",[a("td",[t._v("状态")]),t._v(" "),1===t.detailsData.status?a("td",[t._v("正常")]):a("td",[t._v("下架")])]),t._v(" "),a("tr",[a("td",[t._v("创建人")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.admin_username))])]),t._v(" "),a("tr",[a("td",[t._v("创建时间")]),t._v(" "),a("td",[t._v(t._s(t.detailsData.created_at))])])])]),t._v(" "),a("el-dialog",{attrs:{title:"文章预览",visible:t.previewShow,width:"980px","close-on-click-modal":!1},on:{"update:visible":function(e){t.previewShow=e}}},[a("div",{staticClass:"centens"},[a("div",{staticClass:"title"},[t._v(t._s(t.detailsData.article_title))]),t._v(" "),a("div",{staticClass:"user-time"},[t._v("发稿时间："+t._s(t.detailsData.created_at)+" 来源："+t._s(t.detailsData.admin_username))]),t._v(" "),a("div",{staticClass:"text",domProps:{innerHTML:t._s(t.detailsData.article_content)}})]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.previewShow=!1}}},[t._v("关 闭")])],1)])],1)};i._withStripped=!0;var l={render:i,staticRenderFns:[]};e.a=l},viA7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.articleCategory=function(t){return(0,n.default)({url:"/v1/article/category?"+(0,r.urlEncode)(t),method:"GET"})},e.categoryStore=function(t){return(0,n.default)({url:"/v1/article/category/store",method:"POST",data:t})},e.categoryUpdate=function(t){return(0,n.default)({url:"/v1/article/category/update/"+t.id,method:"POST",data:t})},e.article=function(t){return(0,n.default)({url:"/v1/article?"+(0,r.urlEncode)(t),method:"GET"})},e.articleStore=function(t){return(0,n.default)({url:"/v1/article/store",method:"POST",data:t})},e.articleUpdate=function(t){return(0,n.default)({url:"/v1/article/update/"+t.id,method:"POST",data:t})},e.articleShow=function(t){return(0,n.default)({url:"/v1/article/show/"+t.id,method:"GET"})},e.articleTag=function(t){return(0,n.default)({url:"/v1/article/tag",method:"GET"})};var i,l=a("Vo7i"),n=(i=l)&&i.__esModule?i:{default:i},r=a("0xDb")},xjXs:function(t,e,a){var i=a("Ghkd");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("def1b72e",i,!1,{})},y6dg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("eLuQ"),l=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var r=a("iF/J"),s=!1;var o=function(t){s||a("xjXs")},c=a("VU/8")(l.a,r.a,!1,o,"data-v-0425da4a",null);c.options.__file="src\\views\\Article\\ArticleAdministration.vue",e.default=c.exports}});