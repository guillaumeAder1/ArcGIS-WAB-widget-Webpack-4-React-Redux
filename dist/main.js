define(["esri/arcgis/utils","esri/dijit/LayerList","esri/layers/FeatureLayer","esri/toolbars/draw"], function(__WEBPACK_EXTERNAL_MODULE_esri_arcgis_utils__, __WEBPACK_EXTERNAL_MODULE_esri_dijit_LayerList__, __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, __WEBPACK_EXTERNAL_MODULE_esri_toolbars_draw__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/A.js":
/*!******************!*\
  !*** ./src/A.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _B = __webpack_require__(/*! ./B */ "./src/B.js");

var _B2 = _interopRequireDefault(_B);

var _FeatureLayer = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");

var _FeatureLayer2 = _interopRequireDefault(_FeatureLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var A = function (_React$Component) {
    _inherits(A, _React$Component);

    function A(props) {
        _classCallCheck(this, A);

        var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, props));

        _this.state = {
            selected: null
        };
        _this.firePerimeterFL = new _FeatureLayer2.default("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2", {
            mode: _FeatureLayer2.default.MODE_ONDEMAND,
            outFields: ["*"],
            id: "firePerimeterFL"
        });
        _this.props.map.addLayer(_this.firePerimeterFL);
        return _this;
    }

    _createClass(A, [{
        key: 'changevalue',
        value: function changevalue(e) {
            this.setState(function (state, props) {
                return {
                    selected: e
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var current = this.state.selected;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'A component after'
                ),
                current,
                _react2.default.createElement(_B2.default, { list: [1, 2, 3, 4, 5, 6], map: this.props.map, callBack: function callBack(e) {
                        return _this2.changevalue(e);
                    } })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return A;
}(_react2.default.Component);

var _default = A;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(A, 'A', 'C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/A.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/A.js');
    leaveModule(module);
})();

;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/B.js":
/*!******************!*\
  !*** ./src/B.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _draw = __webpack_require__(/*! esri/toolbars/draw */ "esri/toolbars/draw");

var _draw2 = _interopRequireDefault(_draw);

var _LayerList = __webpack_require__(/*! esri/dijit/LayerList */ "esri/dijit/LayerList");

var _LayerList2 = _interopRequireDefault(_LayerList);

var _utils = __webpack_require__(/*! esri/arcgis/utils */ "esri/arcgis/utils");

var _utils2 = _interopRequireDefault(_utils);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ./actions/index */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var B = function (_React$Component) {
    _inherits(B, _React$Component);

    function B(props) {
        _classCallCheck(this, B);

        var _this = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, props));

        _this.state = {
            isDrawing: false
        };
        return _this;
    }

    _createClass(B, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            if (!this.myWidget) {
                _utils2.default.createMap(this.props.map.itemId, "map").then(function (response) {
                    _this2.myWidget = new _LayerList2.default({
                        map: response.map,
                        layers: _utils2.default.getLayerList(response)
                    }, "layerList");
                    _this2.myWidget.startup();
                });
                this.draw = new _draw2.default(this.props.map, {
                    tooltipOffset: 20,
                    drawTime: 90
                });
            }
        }
    }, {
        key: "startDrawing",
        value: function startDrawing(bool) {
            this.setState({
                isDrawing: !this.state.isDrawing
            });
            bool ? this.draw.activate(_draw2.default.POLYGON) : this.draw.deactivate();
        }
    }, {
        key: "redux",
        value: function redux() {
            this.props.addArticle({ 'toktok': '465465465' });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var l = this.props.list;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "B component"
                ),
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this3.redux();
                        } },
                    "dispacth"
                ),
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this3.startDrawing(!_this3.state.isDrawing);
                        } },
                    "start drawing"
                ),
                l.map(function (v, i) {
                    return _react2.default.createElement(
                        "div",
                        { key: i, onClick: function onClick(e) {
                                return _this3.props.callBack(v);
                            } },
                        v.toString() + " item in the list  "
                    );
                })
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return B;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addArticle: function addArticle(article) {
            return dispatch((0, _index.addArticle)(article));
        }
    };
};

// export default B

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(B);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(B, "B", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/B.js");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/B.js");
    reactHotLoader.register(_default, "default", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/B.js");
    leaveModule(module);
})();

;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addArticle = undefined;

var _actiontype = __webpack_require__(/*! ../constants/actiontype */ "./src/constants/actiontype.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var addArticle = exports.addArticle = function addArticle(article) {
  return { type: _actiontype.ADD_ARTICLE, payload: article };
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addArticle, "addArticle", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/actions/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/constants/actiontype.js":
/*!*************************************!*\
  !*** ./src/constants/actiontype.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var ADD_ARTICLE = exports.ADD_ARTICLE = "ADD_ARTICLE";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_ARTICLE, "ADD_ARTICLE", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/constants/actiontype.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _A = __webpack_require__(/*! ./A.js */ "./src/A.js");

var _A2 = _interopRequireDefault(_A);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _store = __webpack_require__(/*! ./store */ "./src/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

/**REACT ONLY */
// const App = (props) => {
//     return (
//         <A {...props} />
//     )
// };
// App.load = (props) => {
//     ReactDOM.render(<App {...props} />, document.getElementById("react-legend"));
// }
/**END REACT ONLY */

var App = function App(props) {
    return _react2.default.createElement(_A2.default, props);
};
App.load = function (props) {
    _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(App, props)
    ), document.getElementById("react-legend"));
};

var _default = App;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(App, "App", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/index.js");
    reactHotLoader.register(_default, "default", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/index.js");
    leaveModule(module);
})();

;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actiontype = __webpack_require__(/*! ../constants/actiontype */ "./src/constants/actiontype.js");

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    articles: []
};
var rootReducer = function rootReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _actiontype.ADD_ARTICLE:
            return _extends({}, state, { articles: [].concat(_toConsumableArray(state.articles), [action.payload]) });

        default:
            return state;
    }
};
var _default = rootReducer;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, "initialState", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/reducers/index.js");
    reactHotLoader.register(rootReducer, "rootReducer", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/reducers/index.js");
    reactHotLoader.register(_default, "default", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/reducers/index.js");
    leaveModule(module);
})();

;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _index = __webpack_require__(/*! ./reducers/index */ "./src/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var store = (0, _redux.createStore)(_index2.default);
var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, "store", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/store.js");
  reactHotLoader.register(_default, "default", "C:/Users/gader/Documents/arcgis_web_appbuilder_2.5/WebAppBuilderForArcGIS/server/apps/13/widgets/Legend/src/store.js");
  leaveModule(module);
})();

;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "esri/arcgis/utils":
/*!************************************!*\
  !*** external "esri/arcgis/utils" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_arcgis_utils__;

/***/ }),

/***/ "esri/dijit/LayerList":
/*!***************************************!*\
  !*** external "esri/dijit/LayerList" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_dijit_LayerList__;

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "esri/toolbars/draw":
/*!*************************************!*\
  !*** external "esri/toolbars/draw" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_toolbars_draw__;

/***/ })

/******/ })});;
//# sourceMappingURL=main.js.map