webpackJsonp([16],{"3HDx":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"table"},[n("div",{staticClass:"table-list"},[n("el-table",{attrs:{data:e.list,border:"","header-cell-style":{background:"#f3f3f3"}}},[n("el-table-column",{attrs:{align:"center",prop:"name",label:"科室"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"department",label:"部门"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"address",label:"操作",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[n("span",{staticClass:"cursor color-f8494c",on:{click:function(n){e.edit(t.row)}}},[e._v("编辑")])])]}}])})],1)],1)]),e._v(" "),n("el-dialog",{attrs:{title:"分配规则编辑",visible:e.dialogVisible,width:"650px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticClass:"title"},[n("p",[e._v("说明:")]),e._v(" "),n("p",[e._v("1.分配顺序为规则包含部门中所有医助的创建时间升序为顺序")]),e._v(" "),n("p",[e._v("2.只会分配正常状态医助，与在线离线无关")]),e._v(" "),n("h2",[e._v(e._s(e.office.name))])]),e._v(" "),n("div",{staticClass:"form"},[n("div",[n("el-select",{attrs:{clearable:"",size:"mini",placeholder:"请选择部门"},model:{value:e.department_id,callback:function(t){e.department_id=t},expression:"department_id"}},e._l(e.department,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("div",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.add}},[e._v("添加部门")])],1)]),e._v(" "),n("table",{staticClass:"ajun-table"},[n("tr",[n("td",[e._v("部门")]),e._v(" "),n("td",[e._v("操作")])]),e._v(" "),e._l(e.office.department,function(t,a){return n("tr",{key:a},[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[n("span",{staticClass:"cursor color-f8494c",on:{click:function(t){e.remove(a)}}},[e._v("删除")])])])})],2),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("提 交")]),e._v(" "),n("el-button",{attrs:{type:"warning"},on:{click:e.eliminate}},[e._v("全部清除")])],1)])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};t.a=i},Cc1n:function(e,t,n){var a=n("MNxk");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("1e56d930",a,!1,{})},MNxk:function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n.title p[data-v-3fce4f70] {\n  margin-bottom: 10px;\n}\n.title h2[data-v-3fce4f70] {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 20px 0;\n}\n.form[data-v-3fce4f70] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  margin-bottom: 30px;\n}\n.form div[data-v-3fce4f70] {\n  margin-right: 15px;\n}\n","",{version:3,sources:["f:/泰斗中医院/kx-tdzyy-manage-web/src/views/Operate/AllocationRule.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,kBAAkB;EACtB,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB",file:"AllocationRule.vue",sourcesContent:["\n.title p[data-v-3fce4f70] {\n  margin-bottom: 10px;\n}\n.title h2[data-v-3fce4f70] {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 20px 0;\n}\n.form[data-v-3fce4f70] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  margin-bottom: 30px;\n}\n.form div[data-v-3fce4f70] {\n  margin-right: 15px;\n}\n"],sourceRoot:""}])},TfXB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n("Xxa5")),i=l(n("exGp")),r=l(n("Dd8w")),s=n("NYxO"),o=n("3/Li");function l(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{list:[],dialogVisible:!1,formLabelAlign:{},params:{office_id:"",department_id:[]},department_id:"",office:"",pushShow:!1}},computed:(0,s.mapState)({department:function(e){return e.selector.department}}),mounted:function(){this.index(),this.getDepartment()},methods:(0,r.default)({},(0,s.mapActions)({getLaboratory:"getLaboratory",getYzList:"getYzList",getDepartment:"getDepartment"}),{index:function(){var e=this;return(0,i.default)(a.default.mark(function t(){var n;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.ruleIndex)();case 2:200===(n=t.sent).code&&(e.list=n.data);case 4:case"end":return t.stop()}},t,e)}))()},add:function(){var e=this;if(""!=this.department_id){if(this.office.department.length>0)for(var t=0;t<this.office.department.length;t++){if(this.department_id===this.office.department[t].department_id){this.$message({message:"不可重复添加",type:"warning"}),this.pushShow=!0;break}this.pushShow=!1}this.pushShow||this.department.forEach(function(t){e.department_id===t.id&&e.office.department.push({department_id:e.department_id,name:t.name})})}else this.$message({message:"请选择部门",type:"warning"})},edit:function(e){var t=this;return(0,i.default)(a.default.mark(function n(){var i;return a.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.params.office_id=e.id,t.department_id,n.next=4,(0,o.officeInfo)({id:e.id});case 4:200===(i=n.sent).code&&(t.office=i.data,t.dialogVisible=!0);case 6:case"end":return n.stop()}},n,t)}))()},eliminate:function(){this.office.department=[],this.params.department_id=[]},handleClose:function(){var e=this;return(0,i.default)(a.default.mark(function t(){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.params.department_id=[],!(e.office.department.length>0)){t.next=5;break}e.office.department.forEach(function(t){e.params.department_id.push(t.department_id)}),t.next=8;break;case 5:return e.params.department_id=[],e.$message({message:"请添加部门",type:"warning"}),t.abrupt("return");case 8:return t.next=10,(0,o.officeSaveSepartment)(e.params);case 10:200===t.sent.code&&(e.dialogVisible=!1,e.index(),e.$message({message:"编辑成功~",type:"success"}));case 12:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;this.$confirm("是否删除该部门, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.office.department.splice(e,1)}).catch(function(){t.$message({type:"info",message:"已取消操作~"})})}})}},yhOl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("TfXB"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var s=n("3HDx"),o=!1;var l=function(e){o||n("Cc1n")},d=n("VU/8")(i.a,s.a,!1,l,"data-v-3fce4f70",null);d.options.__file="src\\views\\Operate\\AllocationRule.vue",t.default=d.exports}});