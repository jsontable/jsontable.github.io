(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00df":function(t,e,n){"use strict";var s=n("a91f"),a=n.n(s);a.a},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},1922:function(t,e,n){"use strict";var s=n("5edc"),a=n.n(s);a.a},"1a5c":function(t,e,n){"use strict";var s=n("b176"),a=n.n(s);a.a},"2fb7":function(t,e,n){},"380d":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TreeState}));var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__),_Users_jianwuchen_opensource_JsonTreeTable_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("9f12"),_Users_jianwuchen_opensource_JsonTreeTable_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("53fe"),lodash__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__),jsonex_treedoc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("f815"),_History__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("e58a"),_Tree__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b983"),o,TreeState=function(){function TreeState(t,e){Object(_Users_jianwuchen_opensource_JsonTreeTable_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["a"])(this,TreeState),this.parseResult="OBJECT",this.tree=this.buildTree(t,e),this.history=new _History__WEBPACK_IMPORTED_MODULE_5__["a"],this.selected=null,this.initialNode=null,this.tree&&this.select(this.tree.root,!0)}return Object(_Users_jianwuchen_opensource_JsonTreeTable_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["a"])(TreeState,[{key:"buildTree",value:function(t,e){if(!t||"Tree"===t.constructor.name)return this.parseResult="TREE",t;var n=lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isString(t)?this.parseJson(t):t;return n?new _Tree__WEBPACK_IMPORTED_MODULE_6__["b"](n,e):null}},{key:"select",value:function(t,e){null!=this.tree&&(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isString(t)&&(t=this.tree.root.getByPath(t),!t)||(e&&(this.initialNode=t),this.selected!==t&&(this.selected=t,this.history.append(t))))}},{key:"isRootSelected",value:function(){return null!=this.tree&&this.selected===this.tree.root}},{key:"isInitialNodeSelected",value:function(){return null!=this.tree&&this.selected===this.initialNode}},{key:"canBack",value:function(){return this.history.canBack()}},{key:"canForward",value:function(){return this.history.canForward()}},{key:"back",value:function(){this.selected=this.history.back()}},{key:"forward",value:function(){this.selected=this.history.forward()}},{key:"parseJson",value:function parseJson(jsonStr){try{var json=JSON.parse(jsonStr);return this.parseResult="JSON_PARSE",json}catch(e){try{return eval("o=".concat(jsonStr)),this.parseResult="EVAL",o}catch(e1){try{var o1=jsonex_treedoc__WEBPACK_IMPORTED_MODULE_4__["a"].get().parse(new jsonex_treedoc__WEBPACK_IMPORTED_MODULE_4__["b"](jsonStr).setDefaultRootType(jsonex_treedoc__WEBPACK_IMPORTED_MODULE_4__["c"].MAP)).toObject();return this.parseResult="TDJSON_PARSE",o1}catch(e2){this.parseResult="Error:".concat(e2.message),console.error(e2)}}}return null}}]),TreeState}()},"433d":function(t,e,n){},"56a2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("358c"),i=n("5f5b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container",attrs:{id:"app"}},[n("div",{staticClass:"inputline"},[n("h4",[t._v("Tree Table Viewer for JSON, Prototext, jsonex, json5, hjson")]),t._v(" | Sample Data: "),n("b-form-select",{staticClass:"mb-3",staticStyle:{width:"auto"},attrs:{options:t.jsonTypeNames},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("json-tree-table",{attrs:{data:t.jsonData,"inital-path":"activityHistory"}}),n("div",[n("hr"),n("div",[t._v("Json Table")]),n("json-table",{attrs:{"table-data":t.tstateTable,options:t.jsonTableOptions}}),n("hr"),n("div",[t._v("MSplitPanel")]),n("m-split-panel-test")],1)],1)},o=[],l=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[t._e(),n("b-button-group",{staticClass:"mx-1"},[n("b-btn",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:t.format}},[t._v("format")])],1)],1),n("m-split-panel",{staticStyle:{width:"99%",height:"100%"}},[n("div",{staticStyle:{width:"100%"},attrs:{slot:"source",grow:20},slot:"source"},[n("div",{staticClass:"status-msg",class:{error:t.hasError}},[t._v(t._s(t.parseResult))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonStr,expression:"jsonStr"}],staticStyle:{width:"100%","min-height":"400px",height:"100%","flex-grow":"1",overflow:"auto"},domProps:{value:t.jsonStr},on:{input:function(e){e.target.composing||(t.jsonStr=e.target.value)}}})]),n("div",{attrs:{slot:"tree",grow:30},slot:"tree"},[t.tstate.tree?n("tree-view",{attrs:{"json-tree":t.tstate.tree,options:{maxDepth:2,rootObjectKey:"root"}},on:{nodeClicked:t.nodeClicked}}):n("div",[t._v("No Data")])],1),n("div",{attrs:{slot:"table",grow:50},slot:"table"},[t.tstate.tree?n("div",[n("json-table",{attrs:{"table-data":t.tstate},on:{nodeClicked:t.nodeClicked}})],1):n("div",[t._v("No Data")])])])],1)},u=[],d=(n("2ca0"),n("2ef0")),h=n.n(d),p=n("380d"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("tree-view-item",{staticClass:"item-root",attrs:{data:t.tree.root,"max-depth":t.allOptions.maxDepth,"current-depth":0},on:{nodeClicked:t.nodeClicked}})],1)},_=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[t.data.isSimpleType()?n("div",[n("span",{staticClass:"key"},[t._v(t._s(t.data.key)+": ")]),n("span",{staticClass:"value"},[t._v(t._s(t.data.obj))])]):n("div",{staticClass:"leaf"},[n("div",{staticClass:"node",on:{click:function(e){return e.stopPropagation(),t.toggleOpen()}}},[n("span",{staticClass:"key key-with-chevron",class:{opened:t.isOpen()}},[n("a",{attrs:{href:"#/"},on:{click:function(e){return e.stopPropagation(),t.$emit("nodeClicked",t.data)}}},[t._v(t._s(t.data.key))])]),n("span",{staticClass:"hint"},[t._v(t._s(t.data.typeSizeLabel))])]),t._l(t.data.children,(function(e,s){return[n("keep-alive",{key:s},[t.isOpen()?n("tree-view-item",{key:s,attrs:{"max-depth":t.maxDepth,"current-depth":t.currentDepth+1,data:e},on:{nodeClicked:t.nodeClicked}}):t._e()],1)]}))],2)])},m=[],v=(n("a9e3"),n("b983")),y={name:"tree-view-item",props:{data:v["a"],maxDepth:Number,currentDepth:Number,modifiable:Boolean},data:function(){return{open:this.currentDepth<this.maxDepth}},methods:{isOpen:function(){return this.open},toggleOpen:function(){this.open=!this.open},nodeClicked:function(t){this.$emit("nodeClicked",t)}}},O=y,g=(n("b501"),n("2877")),j=Object(g["a"])(O,b,m,!1,null,"1b544ee5",null),w=j.exports,S={components:{TreeViewItem:w},name:"tree-view",props:{data:[String,Object],jsonTree:v["b"],options:Object},methods:{nodeClicked:function(t){this.$emit("nodeClicked",t)}},computed:{allOptions:function(){return h.a.extend({},{rootObjectKey:"root",maxDepth:4,modifiable:!1},this.options||{})},tree:function(){return null!=this.jsonTree?this.jsonTree:new v["b"](this.data,this.allOptions.rootObjectKey)}}},k=S,P=(n("8a2e"),Object(g["a"])(k,f,_,!1,null,"615a88ea",null)),T=P.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" query: "+t._s(t.query)+" "),n("datatable",t._b({},"datatable",t.tableOpt,!1),[n("div",{staticStyle:{display:"flex"}},[n("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"outline-secondary",pressed:t.isExpanded,title:"expand"},on:{"update:pressed":function(e){t.isExpanded=e}}},[n("i",{staticClass:"fa fa-arrows-h"})]),t._v(" "),n("b-button-group",{staticClass:"mx-1"},[t.tstate.canBack()?n("b-btn",{attrs:{size:"sm",title:"back"},on:{click:function(e){return t.tstate.back()}}},[n("i",{staticClass:"fa fa-arrow-left"})]):t._e(),t.tstate.canForward()?n("b-btn",{attrs:{size:"sm",title:"forward"},on:{click:function(e){return t.tstate.forward()}}},[n("i",{staticClass:"fa fa-arrow-right"})]):t._e()],1),t.tstate.isRootSelected()?t._e():n("json-path",{attrs:{"tree-node":t.selected},on:{nodeClicked:t.nodeClicked}})],1)])],1)},C=[],E=(n("7db0"),n("a434"),n("b0c0"),n("caad"),n("fb6a"),n("4e82"),n("2532"),{filter:function(t,e,n){var s=e;return t.forEach((function(t){var e=t.field,a=n[t.field];a&&(h.a.isArray(a)?s=s.filter((function(t){return a.includes(t[e])})):h.a.isString(a)?s=s.filter((function(t){return t[e]&&"".concat(t[e]).toLowerCase().includes(a.toLowerCase())})):console.log("Unknown query: ".concat(JSON.stringify(a))))})),n.sort&&(s=h.a.orderBy(s,n.sort,n.order)),s.slice(n.offset,n.offset+n.limit)}}),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-header"},[t._v(" "+t._s(t.title)+" "),n("b-button",{staticStyle:{padding:"0px"},attrs:{tabindex:"0",size:"sm",variant:"link",id:t.filterBtnId}},[n("i",{staticClass:"m-2 fa fa-filter",class:{"text-muted":!t.keyword},staticStyle:{margin:"1px !important"}})]),n("b-popover",{attrs:{target:t.filterBtnId,triggers:"click blur",placement:"bottom"},on:{show:t.onShowPopover}},[n("div",{staticClass:"input-group input-group-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"input",staticClass:"form-control",attrs:{type:"search",placeholder:"Search "+t.field+"..."},domProps:{value:t.keyword},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-default fa fa-search",on:{click:t.search}})])])])],1)},M=[],z=(n("ac1f"),n("841c"),{props:["field","title","query"],data:function(){return{keyword:""}},watch:{keyword:function(t){""===t&&this.search()}},methods:{search:function(){var t=this.query;this.$set(t,this.field,this.keyword),t.offset=0,this.$root.$emit("bv::hide::popover")},onShowPopover:function(){var t=this;s["default"].nextTick((function(){return t.$refs.input.focus({preventScroll:!0})}))}},computed:{filterBtnId:function(){return"filterbtn-".concat(this.field)}}}),A=z,R=(n("a604"),Object(g["a"])(A,D,M,!1,null,null,null)),I=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.html?n("div",{domProps:{innerHTML:t._s(t.html)}}):null===t.strVal?n("div",[n("tree-view-item",{staticClass:"tree-view-item-root",staticStyle:{"margin-left":"0!important"},attrs:{data:t.value,"max-depth":0,"current-depth":0},on:{nodeClicked:t.nodeClicked}})],1):n("div",[t._v(" "+t._s(t.strVal)+" ")])])},N=[],B={components:{TreeViewItem:w},props:["field","value","row","xprops","columns"],methods:{nodeClicked:function(t){this.xprops.tstate.select(t)}},computed:{strVal:function(){return this.value?this.value.isObject()?null:this.value.obj:""},html:function(){var t=h.a.find(this.columns,{field:this.field});return t&&t.html&&t.html(this.value,this.row)}}},$=B,H=Object(g["a"])($,L,N,!1,null,null,null),q=H.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.row["@value"].isObject()?n("div",[n("a",{attrs:{href:"#/"},on:{click:function(e){return e.stopPropagation(),t.nodeClicked(t.row["@value"])}}},[t._v(t._s(this.value))])]):n("div",[t._v(t._s(this.value))])])},K=[],J={props:["value","row","xprops"],methods:{nodeClicked:function(t){this.xprops.tstate.select(t)}}},W=J,V=Object(g["a"])(W,U,K,!1,null,null,null),F=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"breadcrumb"},[t.items?t._l(t.items,(function(e){return n("li",{key:e.text,class:["breadcrumb-item",e.active?"active":null]},[e.active?n("span",{domProps:{innerHTML:t._s(e.text)}}):n("b-link",{attrs:{to:e.to||e.href||e.link},domProps:{innerHTML:t._s(e.text)},on:{click:function(n){return t.onclick(e)}}})],1)})):t._e(),t._t("default")],2)},G=[],Z={props:["treeNode"],methods:{onclick:function(t){this.$emit("nodeClicked",t.node)}},computed:{items:function(){var t=[];if(!this.treeNode)return null;t.unshift({text:this.treeNode.key,active:!0});for(var e=this.treeNode.parent;null!==e;e=e.parent)t.unshift({text:e.key,href:"",node:e});return t}}},Y=Z,Q=(n("1922"),Object(g["a"])(Y,X,G,!1,null,null,null)),tt=Q.exports;function et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?et(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):et(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var st="@value",at="#",it="@key",rt={name:"json-table",props:{tableData:{TreeState:p["a"],Tree:v["b"],Object:Object,String:String},options:Object},components:{JsonPath:tt},data:function(){return{tableOpt:{tblClass:"table-bordered",pageSizeOptions:[5,20,50,100,200],columns:[],data:[],rawData:[],total:0,query:{limit:100,offset:0},xprops:{tstate:this.tstate}},defTableOpt:null,tstate:null,isExpanded:!1}},methods:{rebuildTable:function(t){this.defTableOpt||(this.defTableOpt=this.tableOpt),this.defTableOpt.columns=[],this.tableOpt=nt({},this.defTableOpt,{},this.applyCustomOpts&&this.options),this.buildTable(t),this.queryData(),this.tableOpt.xprops.tstate=this.tstate},buildTable:function(t){if(this.tableOpt.rawData=[],t){var e=t.isArray(),n=e?at:it;this.addColumn(n,0);for(var s=0,a=Object.keys(t.children);s<a.length;s++){var i,r=a[s],o=t.children[r],c=(i={},Object(l["a"])(i,n,e?Number(r):r),Object(l["a"])(i,st,o),i);if(this.tableOpt.rawData.push(c),this.isExpanded&&o&&!o.isLeaf())for(var u=0,d=Object.keys(o.children);u<d.length;u++){var h=d[u];this.addColumn(h),c[h]=o.children[h]}else this.addColumn(st,1)}}},addColumn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableOpt.columns.length,n=0===e,s=this.tableOpt.columns,a=s.find((function(e){return e.field===t}));a||(a={field:t,visible:n||!(this.applyCustomOpts&&this.options.columns)},s.splice(e,0,a)),a.processed||(a.title=a.title||t,a.sortable=!0,a.thComp=a.thComp||I,a.tdComp=a.tdComp||(n?F:q),a.processed=!0,n&&(a.thClass="jsontable-min",a.tdClass="jsontable-min"))},defaultExpand:function(t){if(!t)return!1;for(var e={},n=0,s=0,a=Object.keys(t.children);s<a.length;s++){var i=a[s],r=t.children[i];if(r&&!r.isLeaf())for(var o=0,l=Object.keys(r.children);o<l.length;o++){var c=l[o];e[c]=null,n++}}var u=Object.keys(e).length*Object.keys(t.children).length;return 4*n>u},nodeClicked:function(t){this.tstate.select(t)},queryData:function(){var t=this.tableOpt;t.data=E.filter(t.columns,t.rawData,t.query),t.total=t.rawData.length}},watch:{query:{deep:!0,handler:function(){this.queryData()}},isExpanded:function(){this.rebuildTable(this.selected)},tableData:{immediate:!0,handler:function(t){this.tstate=t&&"TreeState"===t.constructor.name?t:new p["a"](t)}},selected:{immediate:!0,handler:function(t){this.isExpanded=this.defaultExpand(t),this.tableOpt.query.offset=0,this.rebuildTable(t)}},options:function(){this.rebuildTable(this.selected)}},computed:{selected:function(){return this.tstate&&this.tstate.selected},applyCustomOpts:function(){return this.tstate.isInitialNodeSelected()&&this.isExpanded&&this.options},query:function(){return this.tableOpt.query}}},ot=rt,lt=(n("00df"),Object(g["a"])(ot,x,C,!1,null,null,null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parent"},[n("resize-observer",{staticStyle:{width:"100%","z-index":"-1"},on:{notify:t.onWindowResize}}),n("div",{staticClass:"sp-container",on:{mousemove:t.resizing,mouseup:t.stopResize}},[t._l(t.paneSet.panes,(function(e,s){return[n("div",{key:"sp_"+s},[n("div",{staticClass:"sp-panel",style:t.panelStyle(s)},[t._t(e.name)],2),s<t.paneSet.panes.length-1?n("div",{staticClass:"sp-handle",style:t.handleStyle(s),on:{mousedown:function(e){return e.preventDefault(),t.startResize(s,e)}}}):t._e()])]}))],2)],1)},dt=[],ht=(n("e25e"),n("6eb0"),n("252c")),pt=(n("a630"),n("b680"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("8b83")),ft=n("c65a"),_t=n("c03e"),bt=n("53fe"),mt=n("9f12"),vt=function t(){Object(mt["a"])(this,t)};vt.NORMAL=new vt,vt.MAXIMIZED=new vt,vt.MIIMIZED=new vt;var yt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(mt["a"])(this,t),this.min=e,this.max=n}return Object(bt["a"])(t,[{key:"contains",value:function(t){return t>this.min&&t<this.max}},{key:"add",value:function(t){this.min+=t.min,this.max===Number.MAX_VALUE&&t.max===Number.MAX_VALUE||(this.max+=t.max)}}]),t}(),Ot=function(t){function e(t,n,s,a,i){var r;return Object(mt["a"])(this,e),r=Object(pt["a"])(this,Object(ft["a"])(e).call(this,s||10,a||Number.MAX_VALUE)),r.name=t,r.size=n,r.curSize=n,r.grow=i||1,r.status=vt.NORMAL,r.paneSet=null,r}return Object(_t["a"])(e,t),Object(bt["a"])(e,[{key:"getDisplaySize",value:function(){return null!=this.paneSet.maxPane?this.paneSet.maxPane===this?this.paneSet.totalSize:0:this.status===vt.NORMAL?this.curSize:0}},{key:"toString",value:function(){return"{name:".concat(this.name,",curSize:").concat(this.curSize.toFixed(2),", grow:").concat(this.grow.toFixed(2),"}")}}]),e}(yt),gt=function(){function t(){Object(mt["a"])(this,t),this.totalSize=0,this.panes=[],this.maxPane=null}return Object(bt["a"])(t,[{key:"toString",value:function(){return"{totalSize:".concat(this.totalSize,",panes:[").concat(this.panes,"]}")}},{key:"addPane",value:function(t){t.paneSet=this,this.panes.push(t)}},{key:"setPaneStatus",value:function(t,e){var n=this.panes.find((function(e){return e.name===t}));if(!n)throw new Error("Pane not found: name=".concat(t));n.status!==e&&(e===vt.MAXIMIZED?this.maxPane=n:n.status=e,this.calculateSize())}},{key:"calculateSize",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.panes.length,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.totalSize,a=new Set,i={size:s,grow:0},r=e;r<n;r++){var o=this.panes[r];o.size?(i.size-=o.size,o.size=0):o.status===vt.NORMAL&&(a.add(o),i.grow+=o.grow)}while(a.size>0){var l=t.findOutFit(a,i);if(!l)break;a.delete(l),i.size-=l.curSize,i.grow-=l.grow}var c=i.size/i.grow;a.forEach((function(t){t.curSize=c*t.grow})),this.panes.forEach((function(t){t.grow=t.curSize}))}},{key:"getSizeRange",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.panes.length,n=new yt,s=t;s<e;s++){var a=this.panes[s];a.status===vt.NORMAL&&n.add(a)}return n}},{key:"getHandlePos",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this.panes[n].getDisplaySize();return e}},{key:"moveHandle",value:function(t,e){this.getSizeRange(0,t+1).contains(e)&&this.getSizeRange(t+1).contains(this.totalSize-e)&&(this.calculateSize(0,t+1,e),this.calculateSize(t+1,this.panes.length,this.totalSize-this.getHandlePos(t)))}}],[{key:"findOutFit",value:function(t,e){for(var n=e.size/e.grow,s=null,a=0,i=0,r=0,o=Array.from(t);r<o.length;r++){var l=o[r],c=n*l.grow;c<l.min&&l.min-c>a?(s=l,a=l.min-c,i=l.min):c>l.max&&c-l.max>a&&(s=l,a=c-l.max,i=l.max)}return null!=s&&(s.curSize=i),s}}]),t}(),jt=function(t,e,n){var s=t.data.on;if(s&&s[e]){var a=s[e],i=a.fns||a.fn;"function"===typeof i&&i(n)}},wt={components:{ResizeObserver:ht["a"]},props:{params:Boolean},data:function(){return{resizeIndex:-1,startPos:-1,startHandlePos:-1,paneSet:new gt,vnodes:[]}},methods:{setPaneStatus:function(t,e){this.paneSet.setPaneStatus(t,e)},startResize:function(t,e){this.resizeIndex=t,jt(this.vnodes[t],"update:test",2),this.startPos=e.clientX,this.startHandlePos=this.paneSet.getHandlePos(t),console.log("startResize: resizingIndex=".concat(this.resizeIndex,", startPos=").concat(this.startPos,", startHandlePos=").concat(this.startHandlePos))},resizing:function(t){this.resizeIndex<0||(console.log("Moving: clientX=".concat(t.clientX)),this.paneSet.moveHandle(this.resizeIndex,this.startHandlePos+t.clientX-this.startPos),this.$forceUpdate())},stopResize:function(){this.resizeIndex=-1},onWindowResize:function(){var t=this;console.log("resized:width=".concat(this.$el.clientWidth)),this.$emit("resize"),h.a.debounce((function(){t.paneSet.totalSize=t.$el.clientWidth,t.paneSet.calculateSize(),console.log("paneSet:".concat(t.paneSet))}),100)()}},computed:{panelStyle:function(){var t=this;return function(e){return{width:"".concat(t.paneSet.panes[e].getDisplaySize(),"px")}}},handleStyle:function(){var t=this;return function(e){return{width:"5px",height:"100%",top:"0",left:"".concat(t.paneSet.getHandlePos(e),"px"),"border-left":"1px solid grey",cursor:"col-resize"}}}},mounted:function(){var t=0;for(var e in this.$slots){var n=this.$slots[e][0],s=n.data,a=s.attrs,i=s.slot;console.log("test:".concat(a.test)),a.test=2,n.context.$emit("update:test",2),this.vnodes[t++]=n,this.paneSet.addPane(new Ot(i,parseInt(a.size),parseInt(a.min),parseInt(a.max),parseInt(a.grow)))}this.paneSet.totalSize=this.$el.clientWidth,this.paneSet.calculateSize()}},St=wt,kt=(n("be41"),Object(g["a"])(St,ut,dt,!1,null,"275f2560",null)),Pt=kt.exports,Tt={name:"app",components:{TreeView:T,JsonTable:ct,MSplitPanel:Pt},props:{data:[Object,Array,String],options:Object,initalPath:String,rootObjectKey:String},data:function(){return{showSource:!1,showTree:!0,showTable:!0,selectedNode:null,jsonStr:null,tstate:null,parseResult:null,error:{color:"red"}}},watch:{data:{immediate:!0,handler:function(t){this.jsonStr=h.a.isString(t)?t:this.jsonStr=JSON.stringify(t,null,"  ")}},jsonStr:{immediate:!0,handler:function(t){this.tstate=new p["a"](t,this.rootObjectKey),this.parseResult=this.tstate.parseResult,console.log("ParseResult=".concat(this.parseResult)),this.initalPath&&this.tstate.select(this.initalPath,!0)}}},methods:{nodeClicked:function(t){this.tstate.select(t)},format:function(){this.jsonStr=JSON.stringify(this.tstate.tree.obj,null,2)}},computed:{hasError:function(){return this.parseResult.startsWith("Error")}}},xt=Tt,Ct=(n("1a5c"),Object(g["a"])(xt,c,u,!1,null,null,null)),Et=Ct.exports,Dt={jsonTypeNames:["empty","object","array","jsonStr","jsonex","textproto","json5","hjson"],jsonTypes:{empty:{},jsonStr:'\n    {\n      refundAmtMoney:"USD 15.32",\n      activityHistory:[\n      {\n        $type:"ActivityHist",\n        creationDate:"2014/10/02 10:20:37",\n        lastModifiedDate:"2014/10/02 10:20:37",\n        runtimeContext:"t=118",\n        partitionKey:0,\n        activityType:"1-buyerCreateCancel",\n      },\n      {\n        $type:"ActivityHistBoImpl",\n        creationDate:"2014/10/02 11:15:13",\n        lastModifiedDate:"2014/10/02 11:15:13",\n        runtimeContext:"m=t=148",\n        partitionKey:0,\n        activityType:"6-sellerApprove",\n      }]\n    }\n    ',object:{testArray:["Just a Test String","in a Test Array",0,1,!0,!1],component:"vue-json-tree-view",descripton:"A JSON Tree View built in Vue.js",tags:[{name:"vue.js"},{name:"JSON"}],steps:["HTML Template","Root Component","View Component",{"Transformation Logic":["Transform Objects","Transform Arrays","Transform Values"]},"Animate","Allow Options","Blog about it..."],obj:{key1:"val1",key2:"val2"}},array:[{col1:"value11",col2:"value12"},{col1:"value21",col3:"value23"},"value",{col1:"value31",col2:"value32",col3:"value33"},["abc","def",{a:1,b:2}]],textproto:"\n    n: {\n      n1: {\n        n11: 1\n        # Duplicated key; ':' is emitted before '{'\n        n11 {\n          n111: false\n        }\n        n12: \"2\"\n      }\n      # Multi-line comments\n      # Line2\n      ########\n      n1: {\n        n11: \"abcd\"\n        #  Extension keys\n        [d.e.f]: 4\n        n11: \"multiline 1\n\"\n        'line2'\n      }\n      n2: [1,2,3]\n      n2 [3,4,5]  # ':' is emitted before '['\n      \"n3\" [6, 7, 8, 9]\n    }\n    ",json5:"\n    // https://spec.json5.org/\n    {\n      // comments\n      unquoted: 'and you can quote me on that',\n      singleQuotes: 'I can use \"double quotes\" here',\n      lineBreaks: \"Look, Mom!     No \\n's!\",\n      hexadecimal: 0xdecaf,\n      leadingDecimalPoint: .8675309, andTrailing: 8675309.,\n      positiveSign: +1,\n      trailingComma: 'in objects', andIn: ['arrays',],\n      \"backwardsCompatible\": \"with JSON\",\n    }\n    ",jsonex:'\n    // Some comments\n    {\n      "total": 100000000000000000000,\n      "longNum": 10000000000,\n      "limit": 10,\n    \n      /* block comments */\n      "data": [\n        {\n          "name": "Some Name 1",  // More line comments\n          "address": {\n            "streetLine": "1st st",\n            city: "san jose",\n          },\n          "createdAt": "2017-07-14T17:17:33.010Z",\n        },\n        {\n          "name": "Some Name 2",\n          "address": /*comments*/ {\n            "streetLine": "2nd st",\n            city: "san jose",\n          },\n          "createdAt": "2017-07-14T17:17:33.010Z",\n        },\n        `Multiple line literal\n        Line2`\n      ],\n    }    \n    ',hjson:"\n    {\n      // use #, // or /**/ comments,\n      // omit quotes for keys\n      key: 1\n      // omit quotes for strings\n      contains: everything on this line\n      // omit commas at the end of a line\n      cool: {\n        foo: 1\n        bar: 2\n      }\n      // allow trailing commas\n      list: [\n        1,\n        2,\n      ]\n      // and use multiline strings\n      realist:\n        '''\n        My half empty glass,\n        I will fill your empty half.\n        Now you are half full.\n        '''\n    }\n    "}},Mt=function(t,e){var n=e._c;return n("b",[e._v(e._s(e.props.value.obj))])},zt=[],At={},Rt=Object(g["a"])(At,Mt,zt,!0,null,null,null),It=Rt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parent"},[n("div",[n("b-button-group",{staticClass:"mx-1"},[n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.p1},on:{"update:pressed":function(e){t.p1=e}}},[t._v("p1")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.p2},on:{"update:pressed":function(e){t.p2=e},click:t.togglePane}},[t._v("p2")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.p3},on:{"update:pressed":function(e){t.p3=e},click:t.togglePane}},[t._v("p2")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.p4},on:{"update:pressed":function(e){t.p4=e},click:t.togglePane}},[t._v("p4")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.param[0],expression:"param[0]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.param[0])?t._i(t.param[0],null)>-1:t.param[0]},on:{change:function(e){var n=t.param[0],s=e.target,a=!!s.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);s.checked?r<0&&t.$set(t.param,0,n.concat([i])):r>-1&&t.$set(t.param,0,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.param,0,a)}}}),t._v(" "+t._s(t.param)+" test: "+t._s(t.test)+" ")],1),n("MSplitPanel",{ref:"mpanel",attrs:{params:t.param}},[n("div",{staticStyle:{"background-color":"red",width:"100%"},attrs:{slot:"p1",size:300,min:250,max:350,show:t.p1,param:t.param},slot:"p1"},[t._v(" Panel1 ")]),n("div",{attrs:{slot:"p2",grow:10,show:t.p2,test:t.test},on:{"update:test":function(e){t.test=e}},slot:"p2"},[t._v(" Panel2")]),n("div",{attrs:{slot:"p3",grow:20,show:t.p3,test:t.test},on:{"update:test":function(e){t.test=e}},slot:"p3"},[t._v(" Panel3 ")]),n("div",{attrs:{slot:"p4",size:200,show:t.p4,test:t.test},on:{"update:test":function(e){t.test=e}},slot:"p4"},[t._v(" Panel4 ")])])],1)},Nt=[],Bt={name:"MSplitPanelTest",components:{MSplitPanel:Pt},props:{id:String},data:function(){return{param:[!0],p1:!0,p2:!0,p3:!0,p4:!0,test:1}},methods:{togglePane:function(){this.setOnePane("p1",this.p1),this.setOnePane("p2",this.p2),this.setOnePane("p3",this.p3),this.setOnePane("p4",this.p4)},setOnePane:function(t,e){var n=this.$refs.mpanel;n.setPaneStatus(t,e?vt.NORMAL:vt.MIIMIZED)}}},$t=Bt,Ht=(n("d8d0"),Object(g["a"])($t,Lt,Nt,!1,null,"5305780c",null)),qt=Ht.exports;function Ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ut(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ut(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Jt={name:"app",components:{JsonTreeTable:Et,JsonTable:ct,MSplitPanelTest:qt},data:function(){return Kt({selected:Dt.jsonTypeNames[0]},Dt,{jsonTableOptions:{Pagination:!1,columns:[{field:"activityType"},{field:"partitionKey",tdComp:It},{field:"creationDate",html:function(t,e){return'<a href="http://abc.com/'.concat(e.runtimeContext.obj,'">').concat(t.obj,"</a>")}}]}})},computed:{jsonData:function(){return this.jsonTypes[this.selected]},tstateTable:function(){var t=new p["a"](this.jsonTypes.jsonStr);return t.select(t.tree.root.getByPath("/activityHistory"),!0),t}}},Wt=Jt,Vt=(n("034f"),Object(g["a"])(Wt,r,o,!1,null,null,null)),Ft=Vt.exports;s["default"].config.productionTip=!1,s["default"].use(a["a"]),s["default"].use(i["a"]),s["default"].component("tree-view-item",w),s["default"].config.performance=!0,new s["default"]({render:function(t){return t(Ft)}}).$mount("#app")},"5edc":function(t,e,n){},"85ec":function(t,e,n){},"8a2e":function(t,e,n){"use strict";var s=n("c429"),a=n.n(s);a.a},a604:function(t,e,n){"use strict";var s=n("2fb7"),a=n.n(s);a.a},a91f:function(t,e,n){},b176:function(t,e,n){},b501:function(t,e,n){"use strict";var s=n("433d"),a=n.n(s);a.a},b983:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("c975"),n("baa5"),n("4e82"),n("0d03"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("1276"),n("ddb0");var s=n("2fa7"),a=n("9f12"),i=n("53fe"),r=n("2ef0"),o=n.n(r),l=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,null,[{key:"getSimpleTypeName",value:function(t){var e=t.indexOf("<");e>0&&(t=t.substr(0,e));var n=t.lastIndexOf(".");return n<0?t:t.substring(e+1,n)}}]),t}(),c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";Object(a["a"])(this,t),this.obj=e,this.hashMap={},this.tagType=t.TAG_TYPE,this.tagHash=t.TAG_HASH,this.tagHashPrefix=t.TAG_HASH_PREFIX,this.root=new u(this,null,n,e)}return Object(i["a"])(t,[{key:"toString",value:function(){return"root:".concat(this.root.toString())}}]),t}();Object(s["a"])(c,"TAG_TYPE","$type"),Object(s["a"])(c,"TAG_HASH","$hash"),Object(s["a"])(c,"TAG_HASH_PREFIX","$hash:");var u=function(){function t(e,n,s,i){Object(a["a"])(this,t),this.tree=e,this.parent=n,this.key=s,this.obj=i,this._children=null,this.hash&&(this.tree.hashMap[this.hash]=this)}return Object(i["a"])(t,[{key:"getChildValue",value:function(t){return this.obj&&this.obj[t]}},{key:"toString",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=o.a.isObject(this.obj)?"(".concat(this.typeSizeLabel,")"):"",n="".concat(t).concat(this.key).concat(e,": ").concat(this.obj,"\n"),s=0,a=Object.keys(this.children);s<a.length;s++){var i=a[s];n+=this.children[i].toString("".concat(t,"  "))}return n}},{key:"isLeaf",value:function(){return o.a.isEmpty(this.children)}},{key:"isArray",value:function(){return o.a.isArray(this.obj)}},{key:"isObject",value:function(){return o.a.isObject(this.obj)}},{key:"isSimpleType",value:function(){return!this.isArray()&&!this.isObject()}},{key:"getByPath",value:function(t){if(o.a.isString(t)&&(t=t.split("/")),0===t.length)return this;var e=null;return e=".."===t[0]?this.parent:""===t[0]?this.tree.root:"."===t[0]?this:this.children[t[0]],t.shift(),e?e.getByPath(t):null}},{key:"hash",get:function(){return this.getChildValue(this.tree.tagHash)}},{key:"typeSizeLabel",get:function(){var t=o.a.isArray(this.obj)?"[".concat(this.obj.length,"]"):"{".concat(Object.keys(this.obj).length,"}"),e=this.typeLabel;return this.hash&&(e+="@".concat(this.hash)),e.length>0&&(t+=" <".concat(e,">")),t}},{key:"typeLabel",get:function(){var t=null;return this.type&&(t=this.type),t?l.getSimpleTypeName(t):""}},{key:"type",get:function(){return this.getChildValue(this.tree.tagType)}},{key:"size",get:function(){return o.a.size(this.children)}},{key:"children",get:function(){if(null==this._children){this._children={};var e=o.a.isArray(this.obj),n=o.a.isObject(this.obj);if(!n)return this._children;var s=this.obj?Object.keys(this.obj):[];!e&&this.tree.sorted&&s.sort();var a=!0,i=!1,r=void 0;try{for(var l,c=s[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value,d=this.obj[u];null!==d&&u!==this.tree.tagType&&u!==this.tree.tagHash&&(this.children[u]=new t(this.tree,this,u,d,this))}}catch(h){i=!0,r=h}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}}return this._children}}]),t}();Object.defineProperty(u.prototype,"typeSizeLabel",{enumerable:!0}),Object.defineProperty(u.prototype,"children",{enumerable:!0})},be41:function(t,e,n){"use strict";var s=n("f766"),a=n.n(s);a.a},c429:function(t,e,n){},d8d0:function(t,e,n){"use strict";var s=n("56a2"),a=n.n(s);a.a},e58a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("9f12"),a=n("53fe"),i=function(){function t(){Object(s["a"])(this,t),this.items=[],this.pos=-1}return Object(a["a"])(t,[{key:"canBack",value:function(){return this.pos>0}},{key:"back",value:function(){return this.canBack()?this.items[--this.pos]:null}},{key:"canForward",value:function(){return this.pos<this.items.length-1}},{key:"forward",value:function(){return this.canForward()?this.items[++this.pos]:null}},{key:"append",value:function(t){this.items.length=++this.pos,this.items.push(t)}}]),t}()},f766:function(t,e,n){}});
//# sourceMappingURL=app.636bc82f.js.map