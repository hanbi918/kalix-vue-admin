!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("KalixVueAdmin",[],t):"object"==typeof exports?exports.KalixVueAdmin=t():e.KalixVueAdmin=t()}(this,function(){return function(e){function t(o){if(l[o])return l[o].exports;var a=l[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var l={};return t.m=e,t.c=l,t.i=function(e){return e},t.d=function(e,l,o){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=15)}([function(e,t,l){"use strict";function o(e,t,l,o,a,i,r,n){e=e||{};var d=typeof e.default;"object"!==d&&"function"!==d||(e=e.default);var s="function"==typeof e?e.options:e;t&&(s.render=t,s.staticRenderFns=l,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId=i);var m;if(r?(m=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=m):a&&(m=n?function(){a.call(this,this.$root.$options.shadowRoot)}:a),m)if(s.functional){s._injectStyles=m;var u=s.render;s.render=function(e,t){return m.call(t),u(e,t)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,m):[m]}return{exports:e,options:s}}t.a=o},function(e,t,l){"use strict";var o={id:null,userType:null,code:"",position:null,sex:"",loginName:"",name:"",password:"",confirmPassword:"",email:"",phone:"",mobile:"",available:1,icon:""};t.a=o},function(e,t){e.exports={AdminDictURL:"/camel/rest/admin/dicts",AdminDictsTypesListURL:"/camel/rest/admin/dicts/types/list",usersURL:"/camel/rest/users",rolesURL:"/camel/rest/roles",dutyURL:"/camel/rest/dutys",orgURL:"/camel/rest/orgs",appsURL:"/camel/rest/system/applications",applicationsURL:"/camel/rest/applications/extend/config",appsStartURL:"/camel/rest/osgi/bundle/start",appsStopURL:"/camel/rest/osgi/bundle/stop",workgroupURL:"/camel/rest/workgroups",dataauthURL:"/camel/rest/dataauths",addusersURL:"/camel/rest//dataauths/[id]/users",functionMenuURL:"camel/rest/applications/extend/tree",functionItemBaseURL:"/camel/rest/functions/application/",functionURL:"/camel/rest/functions",templateURL:"/camel/rest/admin/templates",templateConfigURL:"/camel/rest/templateconfigs",templateContentURL:"/camel/rest/templatecontents",auditURL:"/camel/rest/audits",auditConfigURL:"/camel/rest/auditconfigs",userBtnPermissionPrefix:"admin:permissionModule:userMenu:",roleBtnPermissionPrefix:"admin:permissionModule:roleMenu:",workGroupBtnPermissionPrefix:"admin:permissionModule:workGroupMenu:",dataAuthBtnPermissionPrefix:"admin:permissionModule:dataAuthMenu:",AdminCacheKey:"ADMIN-DICT-KEY",configAdminURL:"/camel/rest/system/config",AdminConfiguerComponent:[{path:"admin/config/configureView",name:"AdminConfiguer"}],ConfigToolbarList:[{id:"editSelf",title:"编辑",isShow:!0,isPermission:!0}],DutyButtonList:[{id:"view",title:"查看",isShow:!0,isPermission:!0},{id:"edit",title:"编辑",isShow:!0,isPermission:!0},{id:"delete",title:"删除",isShow:!0,isPermission:!0},{id:"addUser",title:"添加",toolTipTitle:"添加用户",isShow:!0,isPermission:!0}],OrgToolbarList:[{id:"view",title:"查看",icon:"icon-view",type:"success",isShow:!0,isPermission:!0},{id:"edit",title:"编辑",icon:"icon-edit",type:"info",isShow:!0,isPermission:!0},{id:"delete",title:"删除",icon:"icon-delete",type:"danger",isShow:!0,isPermission:!0}],DataAuthToolButtonList:[{id:"view",title:"查看",isShow:!0,isPermission:!0},{id:"edit",title:"编辑",isShow:!0,isPermission:!0},{id:"delete",title:"删除",isShow:!0,isPermission:!0},{id:"addUser",title:"用户",toolTipTitle:"添加用户",isShow:!0,isPermission:!0}],ToolButtonList:[{id:"view",title:"查看",isShow:!0,isPermission:!0},{id:"edit",title:"编辑",isShow:!0,isPermission:!0},{id:"delete",title:"删除",isShow:!0,isPermission:!0}],WorkGroupComponent:[{path:"admin/workgroup/workgroupView",name:"AdminWorkGroupView"},{path:"admin/workgroup/workgroupAdd",name:"AdminWorkGroupAdd"},{path:"admin/workgroup/workgroupSearch",name:"AdminWorkGroupSearch"},{path:"admin/workgroup/workgroupAddUser",name:"AdminWorkGroupAddUser"},{path:"admin/workgroup/workgroupAddRole",name:"AdminWorkGroupAddRole"}],UserComponent:[{path:"admin/user/userView",name:"AdminUserView"},{path:"admin/user/userAdd",name:"AdminUserAdd"},{path:"admin/user/userSearch",name:"AdminUserSearch"},{path:"admin/user/userEdit",name:"AdminUserEdit"},{path:"admin/user/userResetpwd",name:"AdminUserResetpwd"},{path:"admin/user/userAuthView",name:"AdminUserAuthView"}],ApplicationComponent:[{path:"admin/application/applicationSearch",name:"AdminApplicationSearch"},{path:"admin/application/applicationView",name:"AdminApplicationView"}],DataAuthComponent:[{path:"admin/dataauth/dataauthView",name:"AdminDataAuthView"},{path:"admin/dataauth/dataauthAdd",name:"AdminDataAuthAdd"},{path:"admin/dataauth/dataauthSearch",name:"AdminDataAuthSearch"},{path:"admin/dataauth/dataauthAddUser",name:"AdminDataAuthAddUser"},{path:"admin/dataauth/dataauthView",name:"AdminDataAuthView"},{path:"admin/dataauth/dataauthAdd",name:"AdminDataAuthAdd"},{path:"admin/dataauth/dataauthSearch",name:"AdminDataAuthSearch"},{path:"admin/dataauth/dataauthAddUser",name:"AdminDataAuthAddUser"}],DutyComponent:[{path:"admin/duty/dutyView",name:"AdminDutyView"},{path:"admin/duty/dutyAdd",name:"AdminDutyAdd"},{path:"admin/duty/dutySearch",name:"AdminDutySearch"},{path:"admin/duty/dutyAddUser",name:"AdminDutyAddUser"}],OrgComponent:[{path:"admin/org/orgAddUser",name:"AdminOrgAddUser"},{path:"admin/org/orgEdit",name:"AdminOrgEdit"},{path:"admin/org/orgAdd",name:"AdminOrgAdd"},{path:"admin/org/orgSearch",name:"AdminOrgSearch"}],RoleComponent:[{path:"admin/role/roleView",name:"AdminRoleView"},{path:"admin/role/roleAdd",name:"AdminRoleAdd"},{path:"admin/role/roleSearch",name:"AdminRoleSearch"},{path:"admin/role/roleAdd",name:"AdminRoleEdit"},{path:"admin/role/roleAddUser",name:"AdminRoleAddUser"},{path:"admin/role/roleAuth",name:"AdminRoleAuth"}],FunctionComponent:[{path:"admin/function/functionAdd",name:"AdminFunctionAdd"},{path:"admin/function/functionEdit",name:"AdminFunctionEdit"}],TemplateComponent:[{path:"admin/template/templateSearch",name:"AdminTemplateSearch"},{path:"admin/template/templateAdd",name:"AdminTemplateAdd"},{path:"admin/template/templateView",name:"AdminTemplateView"},{path:"admin/template/templateEdit",name:"AdminTemplateEdit"},{path:"admin/template/templatePreview",name:"AdminTemplatePreview"},{path:"admin/template/templateConfigAdd",name:"AdminTemplateConfigAdd"},{path:"admin/template/templateConfigView",name:"AdminTemplateConfigView"},{path:"admin/template/templateConfigEdit",name:"AdminTemplateConfigEdit"},{path:"admin/template/templateContentAdd",name:"AdminTemplateContentAdd"},{path:"admin/template/templateContentEdit",name:"AdminTemplateContentEdit"},{path:"admin/template/templateContentView",name:"AdminTemplateContentView"}],TemplateEditComponent:[{path:"admin/template/templatePopTable",name:"AdminTemplatePopTable"}],AuditComponent:[{path:"admin/audit/auditView",name:"AdminAuditView"},{path:"admin/audit/auditSearch",name:"AdminAuditSearch"}],AuditConfigComponent:[{path:"admin/auditconfig/auditconfigSearch",name:"AdminAuditConfigSearch"},{path:"admin/auditconfig/auditconfigAdd",name:"AdminAuditConfigAdd"},{path:"admin/auditconfig/auditconfigEdit",name:"AdminAuditConfigEdit"},{path:"admin/auditconfig/auditconfigView",name:"AdminAuditConfigView"}]}},function(e,t,l){"use strict";var o=l(2),a=(l.n(o),l(16)),i=l(19);l.n(i);t.a={name:"adminuser",props:{bizKey:{type:String,default:"user"},targetURL:{type:String,default:o.usersURL},bizSearch:{type:String,default:"AdminUserSearch"},isFixedColumn:{type:Boolean,default:!0}},data:function(){return{dictDefine:[{cacheKey:"ADMIN-DICT-KEY",type:"用户类型",targetField:"userTypeName",sourceField:"userType"},{cacheKey:"ADMIN-DICT-KEY",type:"岗位名称",targetField:"positionName",sourceField:"position"}],btnList:a.a,buttonPermissionPrefix:o.userBtnPermissionPrefix,tableFields:[{prop:"userTypeName",label:"用户类型"},{prop:"code",label:"用户代码"},{prop:"loginName",label:"登录名"},{prop:"name",label:"名称"},{prop:"sex",label:"性别"},{prop:"email",label:"邮箱"},{prop:"phone",label:"固定电话"},{prop:"mobile",label:"手机"}],bizDialog:[{id:"view",dialog:"AdminUserView"},{id:"edit",dialog:"AdminUserEdit"},{id:"add",dialog:"AdminUserAdd"},{id:"key",dialog:"AdminUserResetpwd"},{id:"auth",dialog:"AdminUserAuthView"}]}},created:function(){},methods:{customTableTool:function(e,t,l){var o=this;switch(t){case"startStopUsing":var a="确定要"+(1===e.available?"停用":"启用")+"该用户吗？";l.$confirm(a,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return o.$http.request({method:"PUT",url:o.targetURL+"/"+e.id,params:{},data:{id:e.id,available:1===e.available?0:1}})}).then(function(e){console.log(e),o.$KalixMessage.processResult(e),o.$KalixEventBus.$emit(i.ON_REFRESH_DATA)});break;case"key":l.whichBizDialog="";var r=l.bizDialog.filter(function(e){return"key"===e.id});l.whichBizDialog=r[0].dialog,setTimeout(function(){l.$refs.kalixDialog.$refs.kalixBizDialog.open("",!0,e)},20);break;case"auth":l.whichBizDialog="";var n=l.bizDialog.filter(function(e){return"auth"===e.id});l.whichBizDialog=n[0].dialog,setTimeout(function(){l.$refs.kalixDialog.$refs.kalixBizDialog.open("",!1,e)},20)}}}}},function(e,t,l){"use strict";var o=l(1),a=l(2);l.n(a);t.a={name:"AdminUserAdd",data:function(){var e=this,t=function(t,l,o){""===l?o(new Error("请输入密码")):(""!==e.formModel.confirmPassword&&e.$refs.kalixBizDialog.$refs.dialogForm.validateField("confirmPassword"),o())},l=function(t,l,o){""===l?o(new Error("请再次输入密码")):l!==e.formModel.password?o(new Error("两次输入密码不一致!")):o()};return{formModel:Object.assign({},o.a),rules:{userType:[{type:"number",required:!0,message:"请选择用户类别",trigger:"change"}],code_xh:[{required:!0,message:"请输入学生学号",trigger:"blur"}],code_qy:[{required:!0,message:"请输入企业组织机构代码",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],loginName:[{required:!0,message:"请输入登录名",trigger:"blur"}],password:[{required:!0,validator:t,trigger:"blur"}],confirmPassword:[{required:!0,validator:l,trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}]},targetURL:a.usersURL,labelWidth:"140px"}},created:function(){},methods:{change:function(e){this.$refs.kalixBizDialog.$refs.dialogForm.clearValidate()}}}},function(e,t,l){"use strict";var o=l(1),a=l(2);l.n(a);t.a={name:"AdminUserEdit",data:function(){return{formModel:Object.assign({},o.a),rules:{userType:[{type:"number",required:!0,message:"请选择用户类别",trigger:"change"}],code_xh:[{required:!0,message:"请输入学生学号",trigger:"blur"}],code_qy:[{required:!0,message:"请输入企业组织机构代码",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],loginName:[{required:!0,message:"请输入登录名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}]},targetURL:a.usersURL,labelWidth:"140px"}},methods:{open:function(e){this.$refs.kalixBizDialog.open("",!0,e)},change:function(e){this.$refs.kalixBizDialog.$refs.dialogForm.clearValidate()}}}},function(e,t,l){"use strict";t.a={name:"AdminUserSearch",data:function(){return{searchFields:[{label:"用户类型",prop:"userType",type:"dict",appName:"admin",dictType:"用户类型"},{label:"登录名",prop:"loginName"},{label:"姓名/企业名称",prop:"name"}]}},created:function(){},methods:{}}},function(e,t,l){"use strict";var o=l(1);t.a={name:"AdminUserView",data:function(){return{formModel:Object.assign({},o.a),labelWidth:"140px"}},methods:{}}},function(e,t){function l(e,t){var l=e[1]||"",a=e[3];if(!a)return l;if(t&&"function"==typeof btoa){var i=o(a);return[l].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[l].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=l(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,l){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(o[i]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&o[r[0]]||(l&&!r[2]?r[2]=l:l&&(r[2]="("+r[2]+") and ("+l+")"),t.push(r))}},t}},function(e,t,l){"use strict";function o(e,t,o,i){b=o,g=i||{};var r=l.i(s.a)(e,t);return a(r),function(t){for(var o=[],i=0;i<r.length;i++){var n=r[i],d=u[n.id];d.refs--,o.push(d)}t?(r=l.i(s.a)(e,t),a(r)):r=[];for(var i=0;i<o.length;i++){var d=o[i];if(0===d.refs){for(var m=0;m<d.parts.length;m++)d.parts[m]();delete u[d.id]}}}}function a(e){for(var t=0;t<e.length;t++){var l=e[t],o=u[l.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](l.parts[a]);for(;a<l.parts.length;a++)o.parts.push(r(l.parts[a]));o.parts.length>l.parts.length&&(o.parts.length=l.parts.length)}else{for(var i=[],a=0;a<l.parts.length;a++)i.push(r(l.parts[a]));u[l.id]={id:l.id,refs:1,parts:i}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function r(e){var t,l,o=document.querySelector("style["+M+'~="'+e.id+'"]');if(o){if(b)return h;o.parentNode.removeChild(o)}if(w){var a=f++;o=c||(c=i()),t=n.bind(null,o,a,!1),l=n.bind(null,o,a,!0)}else o=i(),t=d.bind(null,o),l=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else l()}}function n(e,t,l,o){var a=l?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var i=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function d(e,t){var l=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),g.ssrId&&e.setAttribute(M,t.id),a&&(l+="\n/*# sourceURL="+a.sources[0]+" */",l+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=l;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(l))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var s=l(27),m="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!m)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u={},p=m&&(document.head||document.getElementsByTagName("head")[0]),c=null,f=0,b=!1,h=function(){},g=null,M="data-vue-ssr-id",w="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),x=function(){var e=[];return function(t,l){return e[t]=l,e.filter(Boolean).join("\n")}}()},function(e,t,l){"use strict";function o(e){l(25)}var a=l(3),i=l(22),r=l(0),n=o,d=l.i(r.a)(a.a,i.a,i.b,!1,n,"data-v-af4c4422",null);t.a=d.exports},function(e,t,l){"use strict";var o=l(4),a=l(24),i=l(0),r=l.i(i.a)(o.a,a.a,a.b,!1,null,null,null);t.a=r.exports},function(e,t,l){"use strict";var o=l(5),a=l(21),i=l(0),r=l.i(i.a)(o.a,a.a,a.b,!1,null,null,null);t.a=r.exports},function(e,t,l){"use strict";function o(e){l(26)}var a=l(6),i=l(23),r=l(0),n=o,d=l.i(r.a)(a.a,i.a,i.b,!1,n,"data-v-faa24e68",null);t.a=d.exports},function(e,t,l){"use strict";var o=l(7),a=l(20),i=l(0),r=l.i(i.a)(o.a,a.a,a.b,!1,null,null,null);t.a=r.exports},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(10),a=l(13),i=l(11),r=l(12),n=l(14),d=[o.a,a.a,i.a,r.a,n.a],s={install:function(e){d.map(function(t){e.component(t.name,t)})}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),t.default=s},function(e,t,l){"use strict";l.d(t,"a",function(){return a});var o=function(e){return 1===e.row.available},a=[{id:"view",title:"查看",isShow:!0,isPermission:!0},{id:"edit",title:"编辑",isShow:!0,isPermission:!0,cond:o},{id:"startStopUsing",title:"",isShow:!0,isPermission:!0,titleCompute:function(e){return 1===e.row.available?"停用":"启用"}},{id:"key",title:"密码",toolTipTitle:"重置密码",isShow:!0,isPermission:!0,cond:o},{id:"auth",title:"权限",toolTipTitle:"权限查看",isShow:!0,isPermission:!0}]},function(e,t,l){t=e.exports=l(8)(!1),t.push([e.i,"",""])},function(e,t,l){t=e.exports=l(8)(!1),t.push([e.i,"",""])},function(e,t){e.exports={ON_ADD_BUTTON_CLICK:"onAddBtnClick",ON_REFRESH_BUTTON_CLICK:"onRefreshBtnClick",ON_SEARCH_BUTTON_CLICK:"onSearchBtnClick",ON_TABLE_TOOLBAR_CLICK:"onTableToolBarClick",ON_TOOLBAR_CLICK:"onToolBarClick",ON_REFRESH_DATA:"refreshData",ON_INIT_DIALOG_DATA:"onInitDialogData",ON_POPOVER_CLICK:"onPopoverClick"}},function(e,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"user",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(t){e.formModel=t}}},[l("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[l("el-form-item",{attrs:{label:"用户类型",prop:"userType","label-width":e.labelWidth}},[l("kalix-dict-select",{staticStyle:{width:"100%"},attrs:{appName:"admin",dictType:"用户类型",disabled:"disabled"},model:{value:e.formModel.userType,callback:function(t){e.$set(e.formModel,"userType",t)},expression:"formModel.userType"}})],1),l("el-form-item",{attrs:{label:"头像",prop:"icon","label-width":e.labelWidth}},[l("kalix-upload",{staticStyle:{width:"100%"},attrs:{isImage:!0,readonly:"readonly"},model:{value:e.formModel.icon,callback:function(t){e.$set(e.formModel,"icon",t)},expression:"formModel.icon"}})],1),l("el-form-item",{attrs:{label:"登录名",prop:"loginName","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.loginName,callback:function(t){e.$set(e.formModel,"loginName",t)},expression:"formModel.loginName"}})],1),l("el-form-item",{attrs:{label:"状态",prop:"available","label-width":e.labelWidth}},[1===e.formModel.available?[e._v("启用")]:[e._v("停用")]],2),0===e.formModel.userType||2===e.formModel.userType?[l("el-form-item",{attrs:{label:"工号",prop:"code","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"岗位",prop:"position","label-width":e.labelWidth}},[l("el-input",{attrs:{value:e.formModel.position,readonly:"readonly"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"name","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[l("el-radio-group",{attrs:{disabled:"disabled"},model:{value:e.formModel.sex,callback:function(t){e.$set(e.formModel,"sex",t)},expression:"formModel.sex"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("el-form-item",{attrs:{label:"固定电话",prop:"phone","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}})],1),l("el-form-item",{attrs:{label:"手机",prop:"mobile","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})],1)]:1===e.formModel.userType?[l("el-form-item",{attrs:{label:"学号",prop:"code","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"name","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[l("el-radio-group",{attrs:{disabled:"disabled"},model:{value:e.formModel.sex,callback:function(t){e.$set(e.formModel,"sex",t)},expression:"formModel.sex"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("el-form-item",{attrs:{label:"固定电话",prop:"phone","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}})],1),l("el-form-item",{attrs:{label:"手机",prop:"mobile","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})],1)]:3===e.formModel.userType?[l("el-form-item",{attrs:{label:"企业组织机构代码",prop:"code","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"公司名称",prop:"name","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("el-form-item",{attrs:{label:"固定电话",prop:"phone","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}})],1),l("el-form-item",{attrs:{label:"手机",prop:"mobile","label-width":e.labelWidth}},[l("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})],1)]:void 0],2)])},a=[]},function(e,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{title:"个人信息修改",bizKey:"user","form-model":e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(t){e.formModel=t}}},[l("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[l("el-form-item",{attrs:{label:"用户类型",prop:"userType",rules:e.rules.userType,"label-width":e.labelWidth}},[l("kalix-dict-select",{attrs:{appName:"admin",dictType:"用户类型",disabled:"disabled"},on:{input:function(t){e.change(t)}},model:{value:e.formModel.userType,callback:function(t){e.$set(e.formModel,"userType",t)},expression:"formModel.userType"}})],1),l("el-form-item",{attrs:{label:"头像",prop:"icon","label-width":e.labelWidth}},[l("kalix-upload",{staticStyle:{width:"100%"},attrs:{isImage:!0},model:{value:e.formModel.icon,callback:function(t){e.$set(e.formModel,"icon",t)},expression:"formModel.icon"}})],1),l("el-form-item",{attrs:{label:"登录名",prop:"loginName",rules:e.rules.loginName,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.loginName,callback:function(t){e.$set(e.formModel,"loginName",t)},expression:"formModel.loginName"}})],1),0===e.formModel.userType||2===e.formModel.userType?[l("el-form-item",{attrs:{label:"工号",prop:"code","label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"岗位",prop:"position","label-width":e.labelWidth}},[l("kalix-dict-select",{staticStyle:{width:"100%"},attrs:{appName:"admin",dictType:"岗位名称"},model:{value:e.formModel.position,callback:function(t){e.$set(e.formModel,"position",t)},expression:"formModel.position"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"name",rules:e.rules.name,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[l("el-radio-group",{model:{value:e.formModel.sex,callback:function(t){e.$set(e.formModel,"sex",t)},expression:"formModel.sex"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email","label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("kalix-phone-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}}),l("kalix-mobile-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})]:1===e.formModel.userType?[l("el-form-item",{attrs:{label:"学号",prop:"code",rules:e.rules.code_xh,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"name",rules:e.rules.name,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[l("el-radio-group",{model:{value:e.formModel.sex,callback:function(t){e.$set(e.formModel,"sex",t)},expression:"formModel.sex"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email",rules:e.rules.email,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("kalix-phone-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}}),l("kalix-mobile-form-item",{attrs:{required:"required","label-width":e.labelWidth},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})]:3===e.formModel.userType?[l("el-form-item",{attrs:{label:"企业组织机构代码",prop:"code",rules:e.rules.code_qy,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"公司名称",prop:"name",rules:e.rules.name,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email",rules:e.rules.email,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("kalix-phone-form-item",{attrs:{required:"required","label-width":e.labelWidth},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}}),l("kalix-mobile-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})]:void 0],2)])},a=[]},function(e,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("keep-alive",[l("kalix-table",{ref:"userTable",attrs:{title:"用户列表",bizKey:e.bizKey,targetURL:e.targetURL,bizDialog:e.bizDialog,bizSearch:e.bizSearch,btnList:e.btnList,customTableTool:e.customTableTool,isFixedColumn:e.isFixedColumn,buttonPermissionPrefix:e.buttonPermissionPrefix,dictDefine:e.dictDefine}},[l("template",{slot:"tableColumnSlot"},[l("el-table-column",{attrs:{prop:"icon",label:"头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[e.row.icon?l("img",{attrs:{src:e.row.icon,width:"32",height:"32",alt:""}}):l("img",{attrs:{src:"/static/images/default_user.png",width:"32",height:"32",alt:""}})]}}])}),l("el-table-column",{attrs:{prop:"userTypeName",label:"用户类型",align:"center",width:"100px"}}),l("el-table-column",{attrs:{prop:"code",label:"工号/学号/企业组织机构代码",align:"center",width:"200px"}}),l("el-table-column",{attrs:{prop:"loginName",label:"登录名",align:"center",width:"100px"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名/企业名称",align:"center",width:"200px"}}),l("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center",width:"100px"}}),l("el-table-column",{attrs:{prop:"email",label:"邮箱",align:"center",width:"150px"}}),l("el-table-column",{attrs:{prop:"phone",label:"固定电话",align:"center",width:"150px"}}),l("el-table-column",{attrs:{prop:"mobile",label:"手机",align:"center",width:"150px"}})],1)],2)],1)},a=[]},function(e,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("kalix-search",{attrs:{title:"用户查询",searchFields:e.searchFields}})},a=[]},function(e,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"user",formModel:e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(t){e.formModel=t}}},[l("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[l("el-form-item",{attrs:{label:"用户类型",prop:"userType",rules:e.rules.userType,"label-width":e.labelWidth}},[l("kalix-dict-select",{attrs:{appName:"admin",dictType:"用户类型"},on:{input:function(t){e.change(t)}},model:{value:e.formModel.userType,callback:function(t){e.$set(e.formModel,"userType",t)},expression:"formModel.userType"}})],1),0===e.formModel.userType||2===e.formModel.userType?[l("el-form-item",{attrs:{label:"工号",prop:"code","label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"岗位",prop:"position","label-width":e.labelWidth}},[l("kalix-dict-select",{staticStyle:{width:"100%"},attrs:{appName:"admin",dictType:"岗位名称"},model:{value:e.formModel.position,callback:function(t){e.$set(e.formModel,"position",t)},expression:"formModel.position"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"name",rules:e.rules.name,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[l("el-radio-group",{model:{value:e.formModel.sex,callback:function(t){e.$set(e.formModel,"sex",t)},expression:"formModel.sex"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email","label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("kalix-phone-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}}),l("kalix-mobile-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})]:1===e.formModel.userType?[l("el-form-item",{attrs:{label:"学号",prop:"code",rules:e.rules.code_xh,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"name",rules:e.rules.name,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[l("el-radio-group",{model:{value:e.formModel.sex,callback:function(t){e.$set(e.formModel,"sex",t)},expression:"formModel.sex"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email",rules:e.rules.email,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("kalix-phone-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}}),l("kalix-mobile-form-item",{attrs:{required:"required","label-width":e.labelWidth},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})]:3===e.formModel.userType?[l("el-form-item",{attrs:{label:"企业组织机构代码",prop:"code",rules:e.rules.code_qy,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.code,callback:function(t){e.$set(e.formModel,"code",t)},expression:"formModel.code"}})],1),l("el-form-item",{attrs:{label:"企业名称",prop:"name",rules:e.rules.name,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email",rules:e.rules.email,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}})],1),l("kalix-phone-form-item",{attrs:{required:"required","label-width":e.labelWidth},model:{value:e.formModel.phone,callback:function(t){e.$set(e.formModel,"phone",t)},expression:"formModel.phone"}}),l("kalix-mobile-form-item",{attrs:{"label-width":e.labelWidth},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})]:void 0,l("el-form-item",{attrs:{label:"头像",prop:"icon","label-width":e.labelWidth}},[l("kalix-upload",{staticStyle:{width:"100%"},attrs:{isImage:!0},model:{value:e.formModel.icon,callback:function(t){e.$set(e.formModel,"icon",t)},expression:"formModel.icon"}})],1),l("el-form-item",{attrs:{label:"登录名",prop:"loginName",rules:e.rules.loginName,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.loginName,callback:function(t){e.$set(e.formModel,"loginName",t)},expression:"formModel.loginName"}})],1),l("el-form-item",{attrs:{label:"密码",prop:"password",rules:e.rules.password,"label-width":e.labelWidth}},[l("el-input",{attrs:{type:"password"},model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1),l("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword",rules:e.rules.confirmPassword,"label-width":e.labelWidth}},[l("el-input",{attrs:{type:"password"},model:{value:e.formModel.confirmPassword,callback:function(t){e.$set(e.formModel,"confirmPassword",t)},expression:"formModel.confirmPassword"}})],1),l("el-form-item",{attrs:{label:"状态",prop:"available","label-width":e.labelWidth}},[l("el-switch",{attrs:{"active-text":"停用","inactive-text":"启用","active-value":"0","inactive-value":"1"},model:{value:e.formModel.available,callback:function(t){e.$set(e.formModel,"available",t)},expression:"formModel.available"}})],1)],2)])},a=[]},function(e,t,l){var o=l(17);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=l(9).default;a("651a10ed",o,!0,{})},function(e,t,l){var o=l(18);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=l(9).default;a("bf6bb2f0",o,!0,{})},function(e,t,l){"use strict";function o(e,t){for(var l=[],o={},a=0;a<t.length;a++){var i=t[a],r=i[0],n=i[1],d=i[2],s=i[3],m={id:e+":"+a,css:n,media:d,sourceMap:s};o[r]?o[r].parts.push(m):l.push(o[r]={id:r,parts:[m]})}return l}t.a=o}])});
//# sourceMappingURL=index.js.map