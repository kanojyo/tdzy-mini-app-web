webpackJsonp([20],{"+wIk":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("6E1v"),s=a.n(l);for(var o in l)"default"!==o&&function(e){a.d(t,e,function(){return l[e]})}(o);var i=a("sDmm"),n=!1;var r=function(e){n||a("MK11")},c=a("VU/8")(s.a,i.a,!1,r,null,null);c.options.__file="src\\views\\Goods\\goods.vue",t.default=c.exports},"6E1v":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a("mvHQ")),s=d(a("Xxa5")),o=d(a("exGp")),i=d(a("Dd8w")),n=a("NYxO"),r=a("qsHl"),c=a("JGDk"),u=a("E4LH");function d(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{params:{goods_name:"",goods_type:"",goods_status:1,page:1,pagesize:30},count:0,list:[],title:"",dialogVisible:!1,detailVisible:!1,formLabelAlign:{pic_url:"",goods_loop:"",goods_details:"",goods_name:"",goods_rules:"",goods_type:"",original_score:"",now_score:"",exchange_max_num:"",valid_type:"",start_time:"",end_time:"",surplus_days:"",sort:"",goods_status:""},fileList:[],fileList1:[],fileList2:[],uploadUrl:(0,c.uploadUrl)(),type:[{type:1,value:"诊疗类"},{type:2,value:"实物类"},{type:3,value:"虚拟类"}],status:[{type:1,value:"正常"},{type:2,value:"下架"},{type:3,value:"暂停兑换"}],timeValue:"",imgList1:[],imgList2:[],detailData:[],menuData:[]}},computed:(0,n.mapState)({menu:function(e){return e.login.menu}}),watch:{"$store.state.login.menu":function(){var e=this;this.$nextTick(function(){e.menuGet()})}},mounted:function(){this.index(),this.menuGet()},methods:(0,i.default)({},(0,n.mapActions)({getMenu:"getMenu"}),{menuGet:function(){var e=this;this.menu.forEach(function(t){33==t.id&&t.data.forEach(function(t){"/Goods/goods"==t.route_web&&(e.menuData=t.role_arr)})})},index:function(){var e=this;return(0,o.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,r.goodsIndex)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.list,e.count=a.data.total);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pagesize=e,this.index()},handleSuccess:function(e){200===e.code&&(this.fileList=[{name:e.data.originName,url:e.data.url}],this.formLabelAlign.pic_url=e.data.url)},handleRemove:function(e,t){0===t.length&&(this.fileList=[],this.formLabelAlign.pic_url="")},handleSuccess1:function(e,t){200===e.code&&(this.fileList1.push({name:e.data.originName,url:e.data.url}),this.imgList1.push(e.data.url),this.formLabelAlign.goods_loop=this.imgList1)},handleRemove1:function(e,t){if(0===t.length)this.fileList1=[],this.imgList1=[],this.formLabelAlign.goods_loop="";else{var a=[];this.fileList1=t,t.forEach(function(e){a.push(e.url)}),this.imgList1=a,this.formLabelAlign.goods_loop=a}},handleSuccess2:function(e){200===e.code&&(this.fileList2.push({name:e.data.originName,url:e.data.url}),this.imgList2.push(e.data.url),this.formLabelAlign.goods_details=this.imgList2)},handleRemove2:function(e,t){if(0===t.length)this.fileList2=[],this.imgList2=[],this.formLabelAlign.goods_details="";else{var a=[];this.fileList2=t,t.forEach(function(e){a.push(e.url)}),this.imgList2=a,this.formLabelAlign.goods_details=a}},beforeAvatarUpload:function(e){var t="image/jpg"===e.type,a="image/jpeg"===e.type,l="image/png"===e.type,s=e.size/1024/1024<=4;return t||a||l||this.$message.error("上传图片只能是 jpg,png,jpeg 格式!"),s||this.$message.error("上传图片大小不能超过 4MB!"),(t||a||l)&&s},edit:function(e){var t=this;return(0,o.default)(s.default.mark(function a(){var l,o,i,n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.title="编辑",t.timeValue="",t.fileList=[],t.fileList1=[],t.fileList2=[],t.imgList1=[],t.imgList2=[],a.next=9,(0,r.goodsDetails)({id:e});case 9:200===(l=a.sent).code&&(t.formLabelAlign=l.data,console.log(t.formLabelAlign),1==t.formLabelAlign.valid_type&&((o=[])[0]=t.formLabelAlign.start_time,o[1]=t.formLabelAlign.end_time,t.timeValue=o),t.fileList=[{name:"",url:l.data.pic_url}],""!==t.formLabelAlign.goods_loop&&(i=JSON.parse(t.formLabelAlign.goods_loop),t.imgList1=i,i.forEach(function(e){t.fileList1.push({url:e})}),console.log(t.fileList1)),""!==t.formLabelAlign.goods_details&&(n=JSON.parse(t.formLabelAlign.goods_details),t.imgList2=n,console.log(n,"goods_details"),n.forEach(function(e){t.fileList2.push({url:e})}),console.log(t.fileList2)),t.formLabelAlign.valid_type&&(t.formLabelAlign.valid_type=parseFloat(t.formLabelAlign.valid_type)),t.formLabelAlign.sort&&(t.formLabelAlign.sort=t.formLabelAlign.sort.toString()),t.formLabelAlign.surplus_days&&(t.formLabelAlign.surplus_days=t.formLabelAlign.surplus_days.toString()),t.formLabelAlign.exchange_max_num&&(t.formLabelAlign.exchange_max_num=t.formLabelAlign.exchange_max_num.toString()),t.formLabelAlign.original_score&&(t.formLabelAlign.original_score=t.formLabelAlign.original_score.toString()),t.formLabelAlign.now_score&&(t.formLabelAlign.now_score=t.formLabelAlign.now_score.toString()),t.formLabelAlign.goods_status&&(t.formLabelAlign.goods_status=parseFloat(t.formLabelAlign.goods_status)),t.dialogVisible=!0);case 11:case"end":return a.stop()}},a,t)}))()},add:function(){this.title="添加",this.timeValue="",this.formLabelAlign={pic_url:"",goods_loop:"",goods_details:"",goods_name:"",goods_rules:"",goods_type:"",original_score:"",now_score:"",exchange_max_num:"",valid_type:"",start_time:"",end_time:"",surplus_days:"",sort:"",goods_status:1},this.fileList=[],this.fileList1=[],this.fileList2=[],this.imgList1=[],this.imgList2=[],this.dialogVisible=!0},date:function(){console.log(this.timeValue),this.formLabelAlign.start_time=this.timeValue[0],this.formLabelAlign.end_time=this.timeValue[1],Date.parse(this.formLabelAlign.start_time)<Date.parse(new Date)&&this.$message({message:"选择的有效期开始时间应该大于当前日期",type:"warning"})},handleClose:function(){var e=this;return(0,o.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.formLabelAlign.goods_name){t.next=3;break}return e.$message({message:"请輸入商品名称",type:"warning"}),t.abrupt("return");case 3:if(""!=e.formLabelAlign.goods_type){t.next=6;break}return e.$message({message:"请选择商品类型",type:"warning"}),t.abrupt("return");case 6:if(""!=e.formLabelAlign.pic_url){t.next=9;break}return e.$message({message:"请上传商品图片",type:"warning"}),t.abrupt("return");case 9:if(0!=e.formLabelAlign.goods_loop.length){t.next=12;break}return e.$message({message:"请上传商品轮播图",type:"warning"}),t.abrupt("return");case 12:if("string"!=typeof e.formLabelAlign.goods_loop&&(e.formLabelAlign.goods_loop=(0,l.default)(e.formLabelAlign.goods_loop)),0!=e.formLabelAlign.goods_details.length){t.next=16;break}return e.$message({message:"请上传商品详情图",type:"warning"}),t.abrupt("return");case 16:if("string"!=typeof e.formLabelAlign.goods_details&&(e.formLabelAlign.goods_details=(0,l.default)(e.formLabelAlign.goods_details)),""!=e.formLabelAlign.goods_rules){t.next=20;break}return e.$message({message:"请输入商品規則",type:"warning"}),t.abrupt("return");case 20:if(""!=e.formLabelAlign.now_score&&(0,u.positiveInteger)(e.formLabelAlign.now_score)){t.next=23;break}return e.$message({message:"兑换所需积分只能填写大于0的正整数",type:"warning"}),t.abrupt("return");case 23:if(""!=e.formLabelAlign.original_score&&(0,u.positiveInteger)(e.formLabelAlign.original_score)){t.next=26;break}return e.$message({message:"商品原有积分只能填写大于0的正整数",type:"warning"}),t.abrupt("return");case 26:if(""!==e.formLabelAlign.exchange_max_num&&(0,u.integer)(e.formLabelAlign.exchange_max_num)){t.next=29;break}return e.$message({message:"兑换上限只能填写正整数或者0",type:"warning"}),t.abrupt("return");case 29:if(""!=e.formLabelAlign.valid_type){t.next=32;break}return e.$message({message:"请输入有效期类型",type:"warning"}),t.abrupt("return");case 32:if(""===e.formLabelAlign.sort||(0,u.integer)(e.formLabelAlign.sort)){t.next=35;break}return e.$message({message:"排序值请输入正整数或0~",type:"warning"}),t.abrupt("return");case 35:if(""!==e.formLabelAlign.sort&&(e.formLabelAlign.sort=parseInt(e.formLabelAlign.sort)),1!=e.formLabelAlign.valid_type||""!=e.timeValue){t.next=39;break}return e.$message({message:"请选择有效期",type:"warning"}),t.abrupt("return");case 39:if(2!=e.formLabelAlign.valid_type||""!=e.formLabelAlign.surplus_days&&(0,u.positiveNum365)(e.formLabelAlign.surplus_days)){t.next=42;break}return e.$message({message:"天数为1到365的整数",type:"warning"}),t.abrupt("return");case 42:if(1==e.formLabelAlign.valid_type?(e.formLabelAlign.surplus_days="",e.formLabelAlign.start_time=e.timeValue[0],e.formLabelAlign.end_time=e.timeValue[1]):2==e.formLabelAlign.valid_type&&(e.formLabelAlign.surplus_days=parseInt(e.formLabelAlign.surplus_days),e.formLabelAlign.start_time="",e.formLabelAlign.end_time=""),e.formLabelAlign.valid_type&&(e.formLabelAlign.valid_type=parseInt(e.formLabelAlign.valid_type)),e.formLabelAlign.exchange_max_num&&(e.formLabelAlign.exchange_max_num=parseInt(e.formLabelAlign.exchange_max_num)),e.formLabelAlign.original_score&&(e.formLabelAlign.original_score=parseInt(e.formLabelAlign.original_score)),e.formLabelAlign.now_score&&(e.formLabelAlign.now_score=parseInt(e.formLabelAlign.now_score)),e.formLabelAlign.goods_status&&(e.formLabelAlign.goods_status=parseInt(e.formLabelAlign.goods_status)),a=void 0,"添加"!==e.title){t.next=55;break}return t.next=52,(0,r.goodsAdd)(e.formLabelAlign);case 52:a=t.sent,t.next=58;break;case 55:return t.next=57,(0,r.goodsUpdate)(e.formLabelAlign);case 57:a=t.sent;case 58:200===a.code?(e.dialogVisible=!1,e.index(e.params),e.$message({message:a.data.msg,type:"success"})):(e.formLabelAlign.valid_type&&(e.formLabelAlign.valid_type=parseFloat(e.formLabelAlign.valid_type)),e.formLabelAlign.sort&&(e.formLabelAlign.sort=e.formLabelAlign.sort.toString()),e.formLabelAlign.surplus_days&&(e.formLabelAlign.surplus_days=e.formLabelAlign.surplus_days.toString()),e.formLabelAlign.exchange_max_num&&(e.formLabelAlign.exchange_max_num=e.formLabelAlign.exchange_max_num.toString()),e.formLabelAlign.original_score&&(e.formLabelAlign.original_score=e.formLabelAlign.original_score.toString()),e.formLabelAlign.now_score&&(e.formLabelAlign.now_score=e.formLabelAlign.now_score.toString()),e.formLabelAlign.goods_status&&(e.formLabelAlign.goods_status=parseFloat(e.formLabelAlign.goods_status)));case 59:case"end":return t.stop()}},t,e)}))()},statusChange:function(e,t){var a=this,l="";1===t?l="上架":2===t?l="下架":3===t&&(l="暂停兑换"),this.$confirm("将"+l+"此商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,r.changeStatus)({id:e,goods_status:t}).then(function(e){200===e.code&&(a.index(),a.$message({message:l+"成功~",type:"success"}))})}).catch(function(){a.$message({type:"info",message:"已取消操作~"})})},search:function(){this.params.page=1,this.index()},empty:function(){this.params.goods_name="",this.params.goods_type="",this.params.goods_status="",this.index()},detail:function(e){var t=this;return(0,o.default)(s.default.mark(function a(){var l;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.detailData=[],a.next=3,(0,r.goodsDetails)({id:e});case 3:200==(l=a.sent).code&&(t.detailData=l.data,""!==t.detailData.goods_loop&&(t.detailData.goods_loop=JSON.parse(t.detailData.goods_loop)),""!==t.detailData.goods_details&&(t.detailData.goods_details=JSON.parse(t.detailData.goods_details)),t.detailVisible=!0);case 5:case"end":return a.stop()}},a,t)}))()}})}},MK11:function(e,t,a){var l=a("fKLe");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("04f1d1f4",l,!1,{})},fKLe:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n","",{version:3,sources:["f:/泰斗中医院/kx-tdzyy-manage-web/src/views/Goods/goods.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,iBAAiB;CAClB",file:"goods.vue",sourcesContent:["\n.el-dialog .date .el-radio + .el-radio {\n  margin-left: 0;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},sDmm:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"mini",placeholder:"商品名称"},model:{value:e.params.goods_name,callback:function(t){e.$set(e.params,"goods_name",t)},expression:"params.goods_name"}})],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"商品类型"},model:{value:e.params.goods_type,callback:function(t){e.$set(e.params,"goods_type",t)},expression:"params.goods_type"}},e._l(e.type,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"input"},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"状态"},model:{value:e.params.goods_status,callback:function(t){e.$set(e.params,"goods_status",t)},expression:"params.goods_status"}},e._l(e.status,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询结果")])],1),e._v(" "),a("div",{staticClass:"search"},[a("el-button",{attrs:{icon:"el-icon-delete",type:"primary",size:"mini"},on:{click:e.empty}},[e._v("清空删选条件")])],1)]),e._v(" "),a("div",{staticClass:"pull-right"},[e.menuData.add?a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"",height:"750","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"商品ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.pic_url}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"goods_name",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"now_score",label:"兑换所需积分"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"original_score",label:"原兑换所需积分"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"exchange_max_num",label:"兑换上限"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"exchange_get_num",label:"已兑换数量"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"有效期",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1==t.row.valid_type?a("span",[e._v(e._s(t.row.surplus_days))]):e._e(),e._v(" "),2==t.row.valid_type?a("span",[e._v(e._s(t.row.surplus_days)+"天")]):e._e()])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.goods_type?a("span",{staticClass:"color-f8494c"},[e._v("诊疗类")]):e._e(),e._v(" "),2===t.row.goods_type?a("span",{staticClass:"color-f8494c"},[e._v("实物类")]):e._e(),e._v(" "),3===t.row.goods_type?a("span",{staticClass:"color-f8494c"},[e._v("虚拟类")]):e._e()])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1===t.row.goods_status?a("span",{staticClass:"color-f8494c"},[e._v("正常")]):e._e(),e._v(" "),2===t.row.goods_status?a("span",{staticClass:"color_red"},[e._v("下架")]):e._e(),e._v(" "),3===t.row.goods_status?a("span",{staticClass:"color_red"},[e._v("暂停兑换")]):e._e()])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序值"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"admin_name",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"120px"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.goods_status?a("div",[e.menuData.start_stop?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.statusChange(t.row.id,1)}}},[e._v("上架")]):e._e(),e._v(" "),e.menuData.start_stop?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,3)}}},[e._v("暂停兑换")]):e._e(),e._v(" "),e.menuData.edit?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]):e._e(),e._v(" "),e.menuData.details?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.detail(t.row.id)}}},[e._v("商品详情")]):e._e()]):e._e(),e._v(" "),1===t.row.goods_status?a("div",[e.menuData.start_stop?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,2)}}},[e._v("下架")]):e._e(),e._v(" "),e.menuData.start_stop?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,3)}}},[e._v("暂停兑换")]):e._e(),e._v(" "),e.menuData.edit?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]):e._e(),e._v(" "),e.menuData.details?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.detail(t.row.id)}}},[e._v("商品详情")]):e._e()]):e._e(),e._v(" "),3===t.row.goods_status?a("div",[e.menuData.start_stop?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.statusChange(t.row.id,1)}}},[e._v("上架")]):e._e(),e._v(" "),e.menuData.start_stop?a("span",{staticClass:"cursor color_red",on:{click:function(a){e.statusChange(t.row.id,2)}}},[e._v("下架")]):e._e(),e._v(" "),e.menuData.edit?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row.id)}}},[e._v("编辑")]):e._e(),e._v(" "),e.menuData.details?a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.detail(t.row.id)}}},[e._v("商品详情")]):e._e()]):e._e()]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"商品"+e.title,visible:e.dialogVisible,width:"650px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"120px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 商品名称"}},[a("el-input",{attrs:{placeholder:"请输入商品名称",maxlength:30},model:{value:e.formLabelAlign.goods_name,callback:function(t){e.$set(e.formLabelAlign,"goods_name",t)},expression:"formLabelAlign.goods_name"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("1至30字符或汉字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 商品类型"}},[a("el-select",{attrs:{clearable:"",size:"mini",placeholder:"请选择商品类型"},model:{value:e.formLabelAlign.goods_type,callback:function(t){e.$set(e.formLabelAlign,"goods_type",t)},expression:"formLabelAlign.goods_type"}},e._l(e.type,function(e){return a("el-option",{key:e.type,attrs:{label:e.value,value:e.type}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"* 商品主图"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,beforeUpload:e.beforeAvatarUpload,limit:"1","list-type":"picture"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),a("span",{staticClass:"font_12"},[e._v("上传图片格式只能为JPG、PNG、JPEG,最大为4M"),a("span",{staticClass:"color_red"},[e._v("建义尺寸750px*680px")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 商品轮播图"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess1,"on-remove":e.handleRemove1,"file-list":e.fileList1,beforeUpload:e.beforeAvatarUpload,limit:"10","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("span",{staticClass:"font_12"},[e._v("上传图片格式只能为JPG、PNG、JPEG,最大为4M"),a("span",{staticClass:"color_red"},[e._v("建义尺寸750px*680px")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 商品详情图"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-success":e.handleSuccess2,"on-remove":e.handleRemove2,"file-list":e.fileList2,beforeUpload:e.beforeAvatarUpload,limit:"20","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("span",{staticClass:"font_12"},[e._v("上传图片格式只能为JPG、PNG、JPEG,最大为4M"),a("span",{staticClass:"color_red"},[e._v("建义尺寸750px*680px")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 商品使用规则"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入商品使用规则",maxlength:500},model:{value:e.formLabelAlign.goods_rules,callback:function(t){e.$set(e.formLabelAlign,"goods_rules",t)},expression:"formLabelAlign.goods_rules"}}),e._v(" "),a("span",{staticClass:"font_12",staticStyle:{display:"block","text-align":"right"}},[e._v("500字以内")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 兑换所需积分"}},[a("el-input",{attrs:{placeholder:"请输入正整数"},model:{value:e.formLabelAlign.now_score,callback:function(t){e.$set(e.formLabelAlign,"now_score",t)},expression:"formLabelAlign.now_score"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 原有积分"}},[a("el-input",{attrs:{placeholder:"请输入正整数"},model:{value:e.formLabelAlign.original_score,callback:function(t){e.$set(e.formLabelAlign,"original_score",t)},expression:"formLabelAlign.original_score"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"* 兑换上限"}},[a("el-input",{attrs:{placeholder:"请输入正整数 0为不限量"},model:{value:e.formLabelAlign.exchange_max_num,callback:function(t){e.$set(e.formLabelAlign,"exchange_max_num",t)},expression:"formLabelAlign.exchange_max_num"}})],1),e._v(" "),a("el-form-item",{staticClass:"date",attrs:{label:"* 有效期"}},[a("el-radio",{attrs:{label:1},model:{value:e.formLabelAlign.valid_type,callback:function(t){e.$set(e.formLabelAlign,"valid_type",t)},expression:"formLabelAlign.valid_type"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:function(t){e.date()}},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),e._v(" "),a("el-radio",{attrs:{label:2},model:{value:e.formLabelAlign.valid_type,callback:function(t){e.$set(e.formLabelAlign,"valid_type",t)},expression:"formLabelAlign.valid_type"}},[a("el-input",{attrs:{placeholder:"请输入天数"},model:{value:e.formLabelAlign.surplus_days,callback:function(t){e.$set(e.formLabelAlign,"surplus_days",t)},expression:"formLabelAlign.surplus_days"}}),e._v(" "),a("span",[e._v("1至365的整数")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"排序值"}},[a("el-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.formLabelAlign.sort,callback:function(t){e.$set(e.formLabelAlign,"sort",t)},expression:"formLabelAlign.sort"}}),e._v(" "),a("span",{staticClass:"font_12"},[e._v("排序值越高权重越大")])],1),e._v(" "),a("el-form-item",{attrs:{label:"* 状态"}},[a("el-radio-group",{model:{value:e.formLabelAlign.goods_status,callback:function(t){e.$set(e.formLabelAlign,"goods_status",t)},expression:"formLabelAlign.goods_status"}},e._l(e.status,function(t){return a("el-radio",{key:t.type,attrs:{label:t.type}},[e._v(e._s(t.value))])}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"商品详情",visible:e.detailVisible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.detailVisible=t}}},[a("table",{staticClass:"ajun-table"},[a("tr",[a("td",{staticStyle:{width:"100px"}},[e._v("商品名称")]),e._v(" "),a("td",[e._v(e._s(e.detailData.goods_name))])]),e._v(" "),a("tr",[a("td",[e._v("商品主图")]),e._v(" "),a("td",[a("img",{staticStyle:{width:"60%",margin:"0 auto"},attrs:{src:e.detailData.pic_url,alt:""}})])]),e._v(" "),a("tr",[a("td",[e._v("商品轮播图")]),e._v(" "),a("td",[a("p",{staticStyle:{display:"block"}},e._l(e.detailData.goods_loop,function(e,t){return a("img",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{src:e,alt:""}})}))])]),e._v(" "),a("tr",[a("td",[e._v("商品详情图")]),e._v(" "),a("td",[a("p",{staticStyle:{display:"block"}},e._l(e.detailData.goods_details,function(e,t){return a("img",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{src:e,alt:""}})}))])]),e._v(" "),a("tr",[a("td",[e._v("商品详情说明")]),e._v(" "),a("td",[e._v(e._s(e.detailData.goods_rules))])]),e._v(" "),a("tr",[a("td",[e._v("兑换所需积分")]),e._v(" "),a("td",[e._v(e._s(e.detailData.now_score))])]),e._v(" "),a("tr",[a("td",[e._v("原有积分")]),e._v(" "),a("td",[e._v(e._s(e.detailData.original_score))])]),e._v(" "),a("tr",[a("td",[e._v("排序值")]),e._v(" "),a("td",[e._v(e._s(e.detailData.sort))])]),e._v(" "),a("tr",[a("td",[e._v("状态")]),e._v(" "),a("td",[e._v(e._s(e._f("goodsStatus")(e.detailData.goods_status)))])]),e._v(" "),a("tr",[a("td",[e._v("创建时间")]),e._v(" "),a("td",[e._v(e._s(e.detailData.created_at))])])])])],1)};l._withStripped=!0;var s={render:l,staticRenderFns:[]};t.a=s}});