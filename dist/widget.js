define(["esri/layers/FeatureLayer","esri/arcgis/utils","esri/dijit/LayerList","esri/toolbars/draw"],function(__WEBPACK_EXTERNAL_MODULE__29__,__WEBPACK_EXTERNAL_MODULE__35__,__WEBPACK_EXTERNAL_MODULE__36__,__WEBPACK_EXTERNAL_MODULE__37__){return function(e){function r(r){for(var a,u,n=r[0],c=r[1],o=r[2],d=0,_=[];d<n.length;d++)u=n[d],i[u]&&_.push(i[u][0]),i[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(l&&l(r);_.length;)_.shift()();return s.push.apply(s,o||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],a=!0,n=1;n<t.length;n++){var c=t[n];0!==i[c]&&(a=!1)}a&&(s.splice(r--,1),e=u(u.s=t[0]))}return e}var a={},i={1:0},s=[];function u(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=a,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/";var n=window.webpackJsonp=window.webpackJsonp||[],c=n.push.bind(n);n.push=r,n=n.slice();for(var o=0;o<n.length;o++)r(n[o]);var l=c;return s.push([41,0]),t()}([,,,,,,,,,,,function(e,r,t){"use strict";(function(e){var a;Object.defineProperty(r,"__esModule",{value:!0}),(a=t(0).enterModule)&&a(e);var i,s,u=r.ADD_ARTICLE="ADD_ARTICLE",n=r.ASYNC_ADD_ARTICLE="ASYNC_ADD_ARTICLE";i=t(0).default,s=t(0).leaveModule,i&&(i.register(u,"ADD_ARTICLE","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/constants/actiontype.js"),i.register(n,"ASYNC_ADD_ARTICLE","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/constants/actiontype.js"),s(e))}).call(this,t(3)(e))},,,,,,function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var a,i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s=t(11);(a=t(0).enterModule)&&a(e);var u,n,c={articles:[]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments[1];switch(r.type){case s.ADD_ARTICLE:case s.ASYNC_ADD_ARTICLE:return i({},e,{articles:e.articles.concat(r.payload)});default:return e}},l=o;r.default=l,u=t(0).default,n=t(0).leaveModule,u&&(u.register(c,"initialState","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/reducers/article.js"),u.register(o,"rootReducer","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/reducers/article.js"),u.register(l,"default","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/reducers/article.js"),n(e)),e.exports=r.default}).call(this,t(3)(e))},function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var a,i,s=t(4),u=t(17),n=(a=u)&&a.__esModule?a:{default:a};(i=t(0).enterModule)&&i(e);var c,o,l=(0,s.combineReducers)({articleState:n.default});r.default=l,c=t(0).default,o=t(0).leaveModule,c&&(c.register(l,"default","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/reducers/index.js"),o(e)),e.exports=r.default}).call(this,t(3)(e))},,function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var a,i=t(4),s=c(t(19)),u=c(t(18)),n=t(16);function c(e){return e&&e.__esModule?e:{default:e}}(a=t(0).enterModule)&&a(e);var o,l,d={},_=[],p=[s.default,(0,n.createLogger)()],f=i.compose.apply(void 0,[i.applyMiddleware.apply(void 0,p)].concat(_)),g=(0,i.createStore)(u.default,d,f);r.default=g,o=t(0).default,l=t(0).leaveModule,o&&(o.register(d,"initialState","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/store.js"),o.register(_,"enhancers","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/store.js"),o.register(p,"middleware","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/store.js"),o.register(f,"composedEnhancers","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/store.js"),o.register(g,"default","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/store.js"),l(e)),e.exports=r.default}).call(this,t(3)(e))},,,,,,,,,function(e,r){e.exports=__WEBPACK_EXTERNAL_MODULE__29__},,function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.asynAddArticle=r.addArticle=void 0;var a,i=t(11);(a=t(0).enterModule)&&a(e);var s,u,n=r.addArticle=function(e){return function(r){r({type:i.ADD_ARTICLE,payload:e})}},c=r.asynAddArticle=function(e){return function(r){return setTimeout(function(t){r({type:i.ASYNC_ADD_ARTICLE,payload:e})},3e3)}};s=t(0).default,u=t(0).leaveModule,s&&(s.register(n,"addArticle","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/actions/index.js"),s.register(c,"asynAddArticle","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/actions/index.js"),u(e))}).call(this,t(3)(e))},,,,function(e,r){e.exports=__WEBPACK_EXTERNAL_MODULE__35__},function(e,r){e.exports=__WEBPACK_EXTERNAL_MODULE__36__},function(e,r){e.exports=__WEBPACK_EXTERNAL_MODULE__37__},function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(r,t,a){return t&&e(r.prototype,t),a&&e(r,a),r}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_draw=__webpack_require__(37),_draw2=_interopRequireDefault(_draw),_LayerList=__webpack_require__(36),_LayerList2=_interopRequireDefault(_LayerList),_utils=__webpack_require__(35),_utils2=_interopRequireDefault(_utils),_reactRedux=__webpack_require__(10),_index=__webpack_require__(31),_redux=__webpack_require__(4),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);var B=function(_React$Component){function B(e){_classCallCheck(this,B);var r=_possibleConstructorReturn(this,(B.__proto__||Object.getPrototypeOf(B)).call(this,e));return r.state={isDrawing:!1,currentArticle:null},r.layerListRef=_react2.default.createRef(),r}return _inherits(B,_React$Component),_createClass(B,[{key:"componentDidMount",value:function(){var e=this;this.myWidget||(_utils2.default.createMap(this.props.map.itemId,"map").then(function(r){e.myWidget=new _LayerList2.default({map:r.map,layers:_utils2.default.getLayerList(r)},e.layerListRef.current),e.myWidget.startup()}),this.draw=new _draw2.default(this.props.map,{tooltipOffset:20,drawTime:90}))}},{key:"startDrawing",value:function(e){this.setState({isDrawing:!this.state.isDrawing}),e?this.draw.activate(_draw2.default.POLYGON):this.draw.deactivate()}},{key:"redux",value:function(){var e={};e["#"+this.state.currentArticle+" item"]="ijsd iouhdasui dhas uidhas",this.props.addArticle(e)}},{key:"reduxAsync",value:function(){var e={};e["#"+this.state.currentArticle+" item"]="asdasd vsdfsd sdfgsdgdfhfghf fgf dghdfgdfgdfg",this.props.asynAddArticle(e)}},{key:"reduxAsyncMix",value:function(){this.state.currentArticle;this.props.asynAddArticleMixing({key:"redux mixin"})}},{key:"action",value:function(){return this.state.isDrawing?"Stop":"Start"}},{key:"updateState",value:function(e){this.props.callBack(e),this.setState({currentArticle:e})}},{key:"render",value:function(){var e=this,r=this.props.list;return _react2.default.createElement("div",null,_react2.default.createElement("h2",null,"B component"),_react2.default.createElement("button",{onClick:function(){return e.redux()}},"dispacth"),_react2.default.createElement("button",{onClick:function(){return e.reduxAsync()}},"dispacth async"),_react2.default.createElement("button",{onClick:function(){return e.reduxAsyncMix()}},"dispacth async mixing"),_react2.default.createElement("button",{onClick:function(){return e.startDrawing(!e.state.isDrawing)}},this.action()," drawing"),r.map(function(r,t){return _react2.default.createElement("div",{key:t,onClick:function(t){return e.updateState(r)}},r.toString()+" item in the list  ")}),_react2.default.createElement("div",{ref:this.layerListRef}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),B}(_react2.default.Component),mapDispatchToProps=function(e){return(0,_redux.bindActionCreators)({addArticle:_index.addArticle,asynAddArticle:_index.asynAddArticle},e)},_default=(0,_reactRedux.connect)(null,mapDispatchToProps)(B),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(B,"B","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/B.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/B.js"),reactHotLoader.register(_default,"default","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/B.js"),leaveModule(module)),module.exports=exports.default}).call(this,__webpack_require__(3)(module))},,function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(r,t,a){return t&&e(r.prototype,t),a&&e(r,a),r}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_B=__webpack_require__(38),_B2=_interopRequireDefault(_B),_FeatureLayer=__webpack_require__(29),_FeatureLayer2=_interopRequireDefault(_FeatureLayer),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);var A=function(_React$Component){function A(e){_classCallCheck(this,A);var r=_possibleConstructorReturn(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,e));return r.state={selected:null},r.firePerimeterFL=new _FeatureLayer2.default("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2",{mode:_FeatureLayer2.default.MODE_ONDEMAND,outFields:["*"],id:"firePerimeterFL"}),r.props.map.addLayer(r.firePerimeterFL),r}return _inherits(A,_React$Component),_createClass(A,[{key:"changevalue",value:function(e){this.setState(function(r,t){return{selected:e}})}},{key:"render",value:function(){var e=this,r=this.state.selected;return _react2.default.createElement("div",null,_react2.default.createElement("h1",null,"A component after"),r,_react2.default.createElement(_B2.default,{list:[1,2,3,4,5,6],map:this.props.map,callBack:function(r){return e.changevalue(r)}}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),A}(_react2.default.Component),_default=A,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(A,"A","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/A.js"),reactHotLoader.register(_default,"default","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/A.js"),leaveModule(module)),module.exports=exports.default}).call(this,__webpack_require__(3)(module))},function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var a,i=o(t(40)),s=o(t(2)),u=o(t(28)),n=t(10),c=o(t(20));function o(e){return e&&e.__esModule?e:{default:e}}(a=t(0).enterModule)&&a(e);var l=function(e){return s.default.createElement(i.default,e)};l.load=function(e){u.default.render(s.default.createElement(n.Provider,{store:c.default},s.default.createElement(l,e)),document.getElementById("react-react-redux-widget"))};var d,_,p=l;r.default=p,d=t(0).default,_=t(0).leaveModule,d&&(d.register(l,"App","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/index.js"),d.register(p,"default","C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/react-redux-widget/src/index.js"),_(e)),e.exports=r.default}).call(this,t(3)(e))}])});
//# sourceMappingURL=widget.js.map