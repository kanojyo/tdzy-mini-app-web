webpackJsonp([18],{mq33:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),i=a("exGp"),r=a.n(i),l=a("Cgi1"),o={data:function(){return{params:{page:1,pageSize:30},count:0,list:[],title:"",dialogVisible:!1,formLabelAlign:{name:"",desc:""},roleList:[],permissionShow:!1,zthreeData:[],keys:[],defaultProps:{children:"data",label:"name"},permission:{id:"",menu_ids:[]}}},mounted:function(){this.index()},methods:{index:function(){var e=this;return r()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.g)(e.params);case 2:200===(a=t.sent).code&&(e.list=a.data.data,e.count=a.data.count);case 4:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.params.page=e,this.index()},handleSizeChange:function(e){this.params.pageSize=e,this.index()},edit:function(e){this.title="编辑",this.formLabelAlign.id=e.id,this.formLabelAlign.name=e.name,this.formLabelAlign.desc=e.desc,this.dialogVisible=!0},add:function(){this.title="添加",this.formLabelAlign={name:"",desc:""},this.dialogVisible=!0},handleClose:function(){var e=this;return r()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.formLabelAlign.name){t.next=3;break}return e.$message({message:"请输入角色名称",type:"warning"}),t.abrupt("return");case 3:if(a="","编辑"!==e.title){t.next=10;break}return t.next=7,Object(l.k)(e.formLabelAlign);case 7:a=t.sent,t.next=13;break;case 10:return t.next=12,Object(l.i)(e.formLabelAlign);case 12:a=t.sent;case 13:200===a.code&&(e.dialogVisible=!1,e.index(),e.$message({message:a.data.msg,type:"success"}));case 14:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;this.$confirm("此操作将删除此角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.f)({id:e}).then(function(e){200===e.code&&(t.index(),t.$message({message:e.data.msg,type:"success"}))})}).catch(function(){t.$message({type:"info",message:"已取消操作~"})})},permissionSetting:function(e){var t=this;return r()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(l.h)({id:e});case 2:200==(n=a.sent).code&&(t.zthreeData=n.data.roleMenu,t.traverseTree(t.zthreeData),t.permission.id=e,t.permissionShow=!0);case 4:case"end":return a.stop()}},a,t)}))()},traverseTree:function(e){var t=this;e&&e.length>0&&e.forEach(function(e){e.selected&&t.keys.push(e.id),t.traverseTree(e.data)})},check:function(e,t){this.keys=t.checkedKeys},preservation:function(){var e=this;return r()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.permission.menu_ids=e.keys,""!==e.permission.menu_ids){t.next=4;break}return e.$message({message:"请设置权限",type:"warning"}),t.abrupt("return");case 4:return t.next=6,Object(l.k)(e.permission);case 6:200==(a=t.sent).code&&(e.permissionShow=!1,e.$message({message:a.data.msg,type:"success"}));case 8:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"operation"},[a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.list,border:"","header-cell-style":{background:"#f3f3f3"}}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"角色ID"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"角色名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"desc",label:"角色描述"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.remove(t.row.id)}}},[e._v("删除")]),e._v(" "),a("span",{staticClass:"cursor color-f8494c",on:{click:function(a){e.permissionSetting(t.row.id)}}},[e._v("权限设置")])])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-peg"},[a("div",{staticClass:"pull-left"}),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[30,50,100],"page-size":e.params.page_size,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:e.title+"角色",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"100px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"* 角色名称"}},[a("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{placeholder:"请输入描述"},model:{value:e.formLabelAlign.desc,callback:function(t){e.$set(e.formLabelAlign,"desc",t)},expression:"formLabelAlign.desc"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"权限设置",visible:e.permissionShow,width:"650px"},on:{"update:visible":function(t){e.permissionShow=t}}},[a("div",{staticClass:"permission"},[a("el-tree",{ref:"tree",attrs:{data:e.zthreeData,"show-checkbox":"","default-expand-all":!0,"check-strictly":"","node-key":"id","default-checked-keys":e.keys,"highlight-current":"",props:e.defaultProps},on:{check:e.check}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.permissionShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.preservation}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]},u=a("VU/8")(o,c,!1,null,null,null);t.default=u.exports}});