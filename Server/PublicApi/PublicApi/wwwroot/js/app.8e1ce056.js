(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)s=o[d],r[s]&&m.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2163:function(t,e,a){},"47e7":function(t,e,a){"use strict";var n=a("6288"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("8c4f"),i=a("bc3a"),s=a.n(i),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-sidebar-menu",{attrs:{menu:t.menu}})],1),a("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Project: Tree Recognition")]),a("v-toolbar-items",[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"/",dark:""},scopedSlots:t._u([{key:"item",fn:function(e){return[e.item.disabled?a("span",[t._v("\n\t\t\t\t\t\t"+t._s(e.item.text)+"\n\t\t\t\t\t")]):a("router-link",{staticClass:"white--text",attrs:{to:e.item.href}},[t._v("\n\t\t\t\t\t\t"+t._s(e.item.text)+"\n\t\t\t\t\t")])]}}])})],1)],1),a("v-content",[a("router-view")],1),a("v-footer")],1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{dense:""}},[t._l(t.menu,function(e){return[e.children?a("v-list-group",{key:e.id},t._l(e.children,function(t){return a("v-sidebar-menu-item",{key:t.id,attrs:{item:t}})}),1):a("v-sidebar-menu-item",{key:e.id,attrs:{item:e}})]})],2)},d=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("\n\t\t\t"+t._s(t.item.icon)+"\n\t\t")])],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{attrs:{to:{name:t.item.routeName}}},[t._v("\n\t\t\t\t"+t._s(t.item.title)+"\n\t\t\t")])],1)],1)],1)},h=[],p=a("d225"),f=a("bd86"),v=function t(e,a,n,r){Object(p["a"])(this,t),Object(f["a"])(this,"id",null),Object(f["a"])(this,"title",""),Object(f["a"])(this,"routeName",""),Object(f["a"])(this,"icon",""),Object(f["a"])(this,"children",[]),this.id=Math.random(),this.title=e||null,this.routeName=a||null,this.icon=n||null,this.children=r||null},b=[new v("Home","home","home"),new v("Admin","admin","person"),new v("About","about","about-outline")],g={name:"v-sidebar-menu-item",props:{item:{type:v,default:null}}},x=g,y=a("2877"),w=a("6544"),_=a.n(w),V=a("132d"),j=a("ba95"),O=a("40fe"),k=a("5d23"),T=Object(y["a"])(x,m,h,!1,null,"792d6dea",null),P=T.exports;_()(T,{VIcon:V["a"],VListTile:j["a"],VListTileAction:O["a"],VListTileContent:k["a"],VListTileTitle:k["c"]});var C={name:"v-sidebar-menu",components:{VSidebarMenuItem:P},props:{menu:{type:Array,default:function(){return[]}}}},R=C,L=a("8860"),$=a("56b0"),F=Object(y["a"])(R,u,d,!1,null,"20123cd8",null),S=F.exports;_()(F,{VList:L["a"],VListGroup:$["a"]});var M={name:"App",components:{VSidebarMenu:S},computed:{breadcrumbs:function(){var t=this.$route.matched;return t.map(function(e){return{text:e.meta.breadcrumb,disabled:t.indexOf(e)==t.length-1,href:e.path}})}},data:function(){return{drawer:!1,menu:b}}},A=M,D=a("7496"),E=a("2bc5"),I=a("549c"),G=a("553a"),N=a("f774"),q=a("71d9"),U=a("2a7f"),H=a("706c"),B=Object(y["a"])(A,l,c,!1,null,null,null),J=B.exports;_()(B,{VApp:D["a"],VBreadcrumbs:E["a"],VContent:I["a"],VFooter:G["a"],VNavigationDrawer:N["a"],VToolbar:q["a"],VToolbarItems:U["a"],VToolbarSideIcon:H["a"],VToolbarTitle:U["b"]});a("ca1a"),a("2163");var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":"",fluid:""}},[a("v-layout",{attrs:{col:""}},[a("v-flex",{attrs:{shrink:"",xs12:"",md2:""}},[a("v-file-field",{attrs:{label:"Select images",multiple:""},model:{value:t.imagesPayload,callback:function(e){t.imagesPayload=e},expression:"imagesPayload"}})],1),a("v-spacer"),a("v-flex",{attrs:{md1:""}},[a("v-btn",{attrs:{loading:t.processing,disabled:t.processing},on:{click:t.SendImages}},[t._v("\n\t\t\t\tSend\n\t\t\t\t"),a("v-icon",{attrs:{right:""}},[t._v("\n\t\t\t\t\tcloud_upload\n\t\t\t\t")])],1)],1)],1),t._l(t.imagesMatrix(t.imagePredictions).reverse(),function(e){return a("v-layout",{key:e[0],attrs:{row:"",wrap:""}},t._l(e[1],function(e){return a("v-flex",{key:e.id,class:t.imagesFlexClasses,attrs:{xs12:""}},[a("v-image-prediction",{attrs:{item:e}})],1)}),1)}),a("v-layout",{attrs:{col:"",wrap:""}},t._l(t.predictionRequestHistory,function(e,n){return a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs5:""}},[a("v-divider")],1),a("v-flex",{attrs:{xs2:""}},[a("h4",{staticClass:"display2"},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])]),a("v-flex",{attrs:{xs5:""}},[a("v-divider")],1)],1),t._l(t.imagesMatrix(e.imagePredictions),function(e){return a("v-layout",{key:e[0],attrs:{row:"",wrap:""}},t._l(e[1],function(e){return a("v-flex",{key:e.id,class:t.imagesFlexClasses,attrs:{xs12:""}},[a("v-image-prediction",{attrs:{item:e}})],1)}),1)})],2)}),1)],2)},K=[],W=(a("96cf"),a("3b8d")),Z=(a("c5f6"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-text-field",t._b({ref:"textField",on:{click:function(e){return e.stopPropagation(),t.openFileDialog(e)}}},"v-text-field",t.$props,!1)),a("input",{ref:"filePlaceholder",staticClass:"hidden",attrs:{type:"file",multiple:t.multiple},on:{change:t.onFileChange}})],1)}),z=[],X=a("2677"),Y={name:"v-file-field",props:["multiple","label","placeholder"],components:{VTextField:X["a"]},methods:{onFileChange:function(t){this.$emit("input",t.target.files)},openFileDialog:function(){this.$refs.textField.blur(),this.$refs.filePlaceholder.click()}}},tt=Y,et=(a("47e7"),Object(y["a"])(tt,Z,z,!1,null,"001a59f3",null)),at=et.exports;_()(et,{VTextField:X["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-img",{attrs:{src:t.imageSrc,height:"200"}}),a("v-card-title",{staticClass:"pa-1",attrs:{"primary-title":""}},[a("h2",[t._v(t._s(t.item.file.name))])]),a("v-card-text",{staticClass:"pa-0"},[a("v-list",{attrs:{dense:""}},t._l(t.orderedResultKeys,function(e){return a("v-list-tile",{key:e},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t")]),a("v-list-tile-sub-title",[t._v("\n\t\t\t\t\t\t"+t._s(Math.floor(1e4*t.item.results[e])/100)+"%\n\t\t\t\t\t")])],1)],1)}),1)],1)],1)},rt=[],it=(a("55dd"),a("a4bb")),st=a.n(it),ot=a("795b"),lt=a.n(ot),ct=a("b0b4"),ut=function(){function t(e,a){Object(p["a"])(this,t),Object(f["a"])(this,"id",void 0),Object(f["a"])(this,"file",void 0),Object(f["a"])(this,"results",void 0),Object(f["a"])(this,"_cachedSrc",void 0),this.id=Math.random(),this.file=e,this.results=a||null}return Object(ct["a"])(t,[{key:"src",get:function(){var t=this;return this._cachedSrc||new lt.a(function(e,a){var n=new FileReader;n.onload=function(){t._cachedSrc=n.result,e(n.result)},n.readAsDataURL(t.file)})}}]),t}(),dt={name:"image-prediction",props:{item:{type:ut,default:null}},computed:{orderedResultKeys:function(){var t=this;if(!this.item.results)return[];var e=st()(this.item.results);return e.sort(function(e,a){return t.item.results[e]>t.item.results[a]?-1:1}),e}},data:function(){return{imageSrc:""}},mounted:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.item.src;case 2:this.imageSrc=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mt=dt,ht=a("b0af"),pt=a("99d9"),ft=a("12b2"),vt=a("adda"),bt=Object(y["a"])(mt,nt,rt,!1,null,"2b5c7fd6",null),gt=bt.exports;_()(bt,{VCard:ht["a"],VCardText:pt["a"],VCardTitle:ft["a"],VImg:vt["a"],VList:L["a"],VListTile:j["a"],VListTileContent:k["a"],VListTileSubTitle:k["b"],VListTileTitle:k["c"]});a("ac6a");var xt=a("308d"),yt=a("6bb5"),wt=a("4e2b"),_t=(a("a481"),function(){function t(e,a){Object(p["a"])(this,t),Object(f["a"])(this,"baseUrl",void 0),Object(f["a"])(this,"axios",void 0),this.baseUrl=a,this.axios=e}return Object(ct["a"])(t,[{key:"PostAsync",value:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e,a,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post(this.getPath(e),a,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e,a,n){return t.apply(this,arguments)}return e}()},{key:"GetAsync",value:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.get(this.getPath(e),a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"getPath",value:function(t){return(this.baseUrl&&"".concat(this.baseUrl).concat(t)||t).replace(/^\/*/g,"")}}]),t}()),Vt=function(t){function e(t,a){return Object(p["a"])(this,e),Object(xt["a"])(this,Object(yt["a"])(e).call(this,t,a))}return Object(wt["a"])(e,t),Object(ct["a"])(e,[{key:"GetPredictions",value:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,e.forEach(function(t){a.append("images",t)}),t.next=4,this.PostAsync("",a,{headers:{"Content-Type":"multipart/form-data"}});case 4:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(_t),jt={name:"home",components:{VFileField:at,VImagePrediction:gt},watch:{imagesPayload:function(t){for(var e in console.log("images changed.. : ",t),t){var a=t[e];a instanceof File&&-1===this.images.map(function(t){return t.name}).indexOf(a.name)&&(this.images.push(a),this.imagePredictions.push(new ut(a)))}}},computed:{imagesFlexClasses:function(){var t={};return t["md"+Number(Math.round(12/this.imagesPerRow))]=!0,t}},data:function(){return{imagesPerRow:4,imagesPayload:[],imagePredictions:[],images:[],predictions:[],predictionRequestHistory:[],httpProvider:null,processing:!1}},methods:{imagesMatrix:function(t){for(var e=[],a=0;a<Math.ceil(t.length/this.imagesPerRow);a++)e.push([Math.random(),t.slice(a*this.imagesPerRow,(a+1)*this.imagesPerRow)]);return e},SendImages:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.processing){t.next=2;break}return t.abrupt("return");case 2:this.processing=!0,t.prev=3,e=this.recognitionManager.GetPredictions(this.images);case 5:return t.prev=5,t.next=8,e;case 8:return this.predictions=t.sent.data,console.log("images: ",this.images),console.log("predictions: ",this.predictions),this.predictionRequestHistory.push({id:Math.floor(100*Math.random()),imagePredictions:this.images.map(function(t){return new ut(t,a.predictions[t.name])})}),this.imagePredictions=[],this.images=[],this.processing=!1,t.finish(5);case 16:case"end":return t.stop()}},t,this,[[3,,5,16]])}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.recognitionManager=new Vt(this.$http,"http://localhost:5000/api/")}},Ot=jt,kt=a("8336"),Tt=a("a523"),Pt=a("ce7e"),Ct=a("0e8f"),Rt=a("a722"),Lt=a("9910"),$t=Object(y["a"])(Ot,Q,K,!1,null,null,null),Ft=$t.exports;_()($t,{VBtn:kt["a"],VContainer:Tt["a"],VDivider:Pt["a"],VFlex:Ct["a"],VIcon:V["a"],VLayout:Rt["a"],VSpacer:Lt["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-card",[a("v-list",[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",["database"===t.$route.name?a("span",[t._v("\n\t\t\t\t\t\t\t\t\tDatabase tables\n\t\t\t\t\t\t\t\t")]):a("router-link",{attrs:{to:{name:"database"}}},[t._v("\n\t\t\t\t\t\t\t\t\tDatabase tables\n\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",md10:""}},[a("router-view")],1)],1)],1)},Mt=[],At=function(t){function e(t,a){return Object(p["a"])(this,e),Object(xt["a"])(this,Object(yt["a"])(e).call(this,t,a))}return Object(wt["a"])(e,t),Object(ct["a"])(e,[{key:"GetTables",value:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.GetAsync("admin/database/gettables");case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"GetTableData",value:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.GetAsync("admin/database/".concat(e,"/data"),{params:{tableName:e}});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(_t),Dt={name:"admin-template"},Et=Dt,It=Object(y["a"])(Et,St,Mt,!1,null,"7395e179",null),Gt=It.exports;_()(It,{VCard:ht["a"],VContainer:Tt["a"],VFlex:Ct["a"],VLayout:Rt["a"],VList:L["a"],VListTile:j["a"],VListTileContent:k["a"],VListTileTitle:k["c"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md9:""}},[t.tableFromQuery?a("v-table-view",{attrs:{"table-name":t.tableFromQuery,items:t.tableData,"is-loading":t.loaderIsActive}}):t._e()],1),a("v-flex",{attrs:{xs12:"",md2:"","order-xs1":""}},[a("v-card",[a("v-list",t._l(t.tables,function(e){return a("v-list-tile",{key:e},[a("v-list-tile-title",[a("router-link",{attrs:{to:{query:Object.assign({},t.$route.query,{table:e})}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t\t")])],1)],1)}),1)],1)],1)],1)],1)},qt=[],Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("h5",{staticClass:"display-1"},[t._v("\n\t\t\t"+t._s(t.tableName)+"\n\t\t")])]),a("v-layout",{attrs:{col:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-data-table",{attrs:{headers:t.headers,items:t.items,loading:t.isLoading,"select-all":""},scopedSlots:t._u([{key:"headers",fn:function(e){return t._l(e.headers,function(e){return a("th",{key:e.value,staticClass:"text-xs-left"},[t._v("\n\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t")])})}},{key:"items",fn:function(e){return t._l(t.headers,function(n){return a("td",{key:n.value},[t._v("\n\t\t\t\t\t\t"+t._s(e.item[n.value])+"\n\t\t\t\t\t")])})}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)},Ht=[],Bt={name:"v-table-view",props:["tableName","items","isLoading"],watch:{selected:function(t){this.$emit("onSelectedChanged",t)}},computed:{headers:function(){var t=this;if(0===(this.items||{}).length)return[];var e=st()(this.items[0]).filter(function(e){return null!==t.items[0][e]&&!(t.items[0][e]instanceof Array)}).map(function(t){return[t,t[0].toLocaleUpperCase()+t.slice(1).replace(/([A-Z])/g," $1")]}).map(function(t){return{text:t[1],value:t[0],sortable:!0}});return e}},data:function(){return{selected:[]}},methods:{}},Jt=Bt,Qt=a("8fea"),Kt=Object(y["a"])(Jt,Ut,Ht,!1,null,"19194090",null),Wt=Kt.exports;_()(Kt,{VCard:ht["a"],VCardTitle:ft["a"],VDataTable:Qt["a"],VFlex:Ct["a"],VLayout:Rt["a"]});var Zt={name:"database",components:{VTableView:Wt},watch:{$route:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.query.table){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.loadTableData(e);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},computed:{tableFromQuery:function(){return this.$route.query.table||""},loaderIsActive:function(){return 0!==this.loadings}},data:function(){return{dbManager:null,loadings:0,tables:[],tableData:[],currentPage:0}},methods:{loadTables:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadings++,t.prev=1,t.next=4,this.dbManager.GetTables();case 4:this.tables=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:this.loadings--;case 11:case"end":return t.stop()}},t,this,[[1,7]])}));function e(){return t.apply(this,arguments)}return e}(),loadTableData:function(){var t=Object(W["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.query.table,a){t.next=3;break}return t.abrupt("return");case 3:return this.loadings++,t.prev=4,t.next=7,this.dbManager.GetTableData(a);case 7:this.tableData=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.error(t.t0);case 13:this.loadings--;case 14:case"end":return t.stop()}},t,this,[[4,10]])}));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){console.log("mounted"),this.dbManager=new At(this.$http,"http://localhost:5000/api/"),this.loadTables(),this.loadTableData(this.$route)}},zt=Zt,Xt=Object(y["a"])(zt,Nt,qt,!1,null,"f1d56d2e",null),Yt=Xt.exports;_()(Xt,{VCard:ht["a"],VContainer:Tt["a"],VFlex:Ct["a"],VLayout:Rt["a"],VList:L["a"],VListTile:j["a"],VListTileTitle:k["c"]});var te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-heigth":"","align-center":""}},[a("v-layout",{attrs:{col:""}},[a("v-flex",{attrs:{"align-self-center":"",shrink:""}},[a("h1",{staticClass:"display4"},[t._v("\n\t\t\t\tAbout project\n\t\t\t")])]),a("v-flex",[a("p",[t._v("\n\t\t\t\tThis project has been created for Secondary school leaving thesis.\n\t\t\t\tOn this website's home page you can select images from input and these images will be sent to its API for processing.\n\t\t\t\tSide note to processing: We store images we receive, anonymously.. Just images, nothing else. By using this application you agree\n\t\t\t\tthat we have right to process your sent images the way described above..\n\t\t\t")])])],1)],1)},ee=[],ae={name:"about"},ne=ae,re=Object(y["a"])(ne,te,ee,!1,null,"3619ed95",null),ie=re.exports;_()(re,{VContainer:Tt["a"],VFlex:Ct["a"],VLayout:Rt["a"]});var se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",column:""}},[a("v-flex",{attrs:{shrink:""}},[a("h1",{staticClass:"display4 error--text"},[t._v("\n\t\t\t\t404: Not found\n\t\t\t")])]),a("v-flex",[a("h4",{staticClass:"display-1"},[t._v("\n\t\t\t\tBack to "),a("router-link",{attrs:{to:"/"}},[t._v("\n\t\t\t\t\tHome\n\t\t\t\t")])],1)])],1)],1)},oe=[],le={name:"not-found",data:function(){return{}}},ce=le,ue=Object(y["a"])(ce,se,oe,!1,null,null,null),de=ue.exports;_()(ue,{VContainer:Tt["a"],VFlex:Ct["a"],VLayout:Rt["a"]});var me=[{path:"/",name:"home",component:Ft,meta:{breadcrumb:""}},{path:"/admin",name:"admin",component:Gt,meta:{breadcrumb:"admin"},children:[{path:"database",name:"database",component:Yt,meta:{breadcrumb:"database"}}]},{path:"/about",name:"about",component:ie,meta:{breadcrumb:"about"}},{path:"*",component:de}];n["a"].config.productionTip=!1,n["a"].prototype.$http=s.a,n["a"].use(r["a"]),new n["a"]({router:new r["a"]({routes:me}),render:function(t){return t(J)}}).$mount("#app")},6288:function(t,e,a){},ca1a:function(t,e,a){}});
//# sourceMappingURL=app.8e1ce056.js.map