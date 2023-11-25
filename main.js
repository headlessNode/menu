/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menuStyle.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menuStyle.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wrapper {
    height: 100dvh;
    width: 100%;
    border: 1px solid black;
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
}

.menu-btn {
    display: none;
    height: 60px;
    width: 45px;
    padding: 8px;
    cursor: pointer;
    position: relative;
    border: none;
    background: #7B2CBF;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

#top-line,
#mid-line,
#btm-line {
    stroke: #000;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-miterlimit: 10;
}

.menu-btn:hover #top-line,
.menu-btn:hover #mid-line,
.menu-btn:hover #btm-line {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation-name: dash;
    animation-duration: 6s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-btn-show {
    display: grid;
}

.menu-btn-hide {
    display: none;
}

.menu-show {
    display: grid;
    grid-template-rows: 1fr 1fr;
    transform-origin: top left;
    animation-name: menu-show;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-hide {
    display: none;
}

.menu {
    position: relative;
    width: 100%;
    height: 100%;
    grid-row: 1/3;
    transform-origin: top left;
}

.menu-top {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #7B2CBF;
    clip-path: ellipse(100% 89.5% at 2px 9px);
    z-index: 1;
    opacity: 1;
    animation-name: top-circle;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-btm {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background: #9D4EDD;
    clip-path: ellipse(100% 90% at 25px 7px);
    top: 0;
    left: 0;
    z-index: 0;
    animation-name: mid-circle;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.hide-menu-btn {
    padding: 5px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #7B2CBF;
    grid-row: 3/4;
    align-self: center;
    justify-self: center;
    cursor: pointer;
}

.cross-icon {
    stroke-width: 5px;
}

.show-hide-btn {
    display: grid;
    animation-name: show-hide-btn;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.remove-hide-btn {
    display: none;
}

@keyframes menu-show {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes show-hide-btn {
    0% {
        opacity: 0;
        transform: translateY(90px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes dash {
    0% {
        stroke-dashoffset: 500;
    }
    40% {
        stroke-dashoffset: 300;
    }
    60% {
        stroke-dashoffset: 200;
    }
    80% {
        stroke-dashoffset: 100;
    }
    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes top-circle {
    0% {
        clip-path: ellipse(0px 0px at 0px 0px);
    }
    100% {
        clip-path: ellipse(100% 89.5% at 2px 9px);
    }
}

@keyframes mid-circle {
    0% {
        clip-path: ellipse(0px 0px at 0px 0px);
    }
    100% {
        clip-path: ellipse(100% 90% at 25px 12px);
    }
}
`, "",{"version":3,"sources":["webpack://./src/menuStyle.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;;;IAGI,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;;;IAGI,qBAAqB;IACrB,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;IACtB,mCAAmC;IACnC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,0BAA0B;IAC1B,yBAAyB;IACzB,yBAAyB;IACzB,sCAAsC;IACtC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;IACzC,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,sBAAsB;IACtB,sCAAsC;IACtC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;IACxC,MAAM;IACN,OAAO;IACP,UAAU;IACV,0BAA0B;IAC1B,sBAAsB;IACtB,sCAAsC;IACtC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,yBAAyB;IACzB,sCAAsC;IACtC,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,0BAA0B;IAC9B;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,sCAAsC;IAC1C;IACA;QACI,yCAAyC;IAC7C;AACJ;;AAEA;IACI;QACI,sCAAsC;IAC1C;IACA;QACI,yCAAyC;IAC7C;AACJ","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.wrapper {\n    height: 100dvh;\n    width: 100%;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 5fr 1fr;\n}\n\n.menu-btn {\n    display: none;\n    height: 60px;\n    width: 45px;\n    padding: 8px;\n    cursor: pointer;\n    position: relative;\n    border: none;\n    background: #7B2CBF;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#top-line,\n#mid-line,\n#btm-line {\n    stroke: #000;\n    stroke-width: 3;\n    stroke-linecap: round;\n    stroke-miterlimit: 10;\n}\n\n.menu-btn:hover #top-line,\n.menu-btn:hover #mid-line,\n.menu-btn:hover #btm-line {\n    stroke-dasharray: 500;\n    stroke-dashoffset: 500;\n    animation-name: dash;\n    animation-duration: 6s;\n    animation-timing-function: ease-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-btn-show {\n    display: grid;\n}\n\n.menu-btn-hide {\n    display: none;\n}\n\n.menu-show {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    transform-origin: top left;\n    animation-name: menu-show;\n    animation-duration: 500ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-hide {\n    display: none;\n}\n\n.menu {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-row: 1/3;\n    transform-origin: top left;\n}\n\n.menu-top {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #7B2CBF;\n    clip-path: ellipse(100% 89.5% at 2px 9px);\n    z-index: 1;\n    opacity: 1;\n    animation-name: top-circle;\n    animation-duration: 2s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-btm {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n    background: #9D4EDD;\n    clip-path: ellipse(100% 90% at 25px 7px);\n    top: 0;\n    left: 0;\n    z-index: 0;\n    animation-name: mid-circle;\n    animation-duration: 1s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.hide-menu-btn {\n    padding: 5px;\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 50%;\n    background: #7B2CBF;\n    grid-row: 3/4;\n    align-self: center;\n    justify-self: center;\n    cursor: pointer;\n}\n\n.cross-icon {\n    stroke-width: 5px;\n}\n\n.show-hide-btn {\n    display: grid;\n    animation-name: show-hide-btn;\n    animation-duration: 300ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.remove-hide-btn {\n    display: none;\n}\n\n@keyframes menu-show {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes show-hide-btn {\n    0% {\n        opacity: 0;\n        transform: translateY(90px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\n@keyframes dash {\n    0% {\n        stroke-dashoffset: 500;\n    }\n    40% {\n        stroke-dashoffset: 300;\n    }\n    60% {\n        stroke-dashoffset: 200;\n    }\n    80% {\n        stroke-dashoffset: 100;\n    }\n    100% {\n        stroke-dashoffset: 0;\n    }\n}\n\n@keyframes top-circle {\n    0% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n    }\n    100% {\n        clip-path: ellipse(100% 89.5% at 2px 9px);\n    }\n}\n\n@keyframes mid-circle {\n    0% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n    }\n    100% {\n        clip-path: ellipse(100% 90% at 25px 12px);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/menuStyle.css":
/*!***************************!*\
  !*** ./src/menuStyle.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menuStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menuStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/menuStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menuStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menuStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menuStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menuStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menuStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuStyle.css */ "./src/menuStyle.css");


// DOM
const wrapper =
  document.querySelector(".wrapper");
const menuBtn =
  document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.classList.add('menu-btn-show');
menuBtn.innerHTML ='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="menu-icon" viewBox="0 0 40 60" xml:space="preserve"><switch><g><path id="btm-line" class="st0" d="M2 17.72h36"/><path id="mid-line" class="st0" d="M38 30H2"/><path id="top-line" class="st0" d="M2 42.28h36"/></g></switch></svg>';
wrapper.appendChild(menuBtn);

const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('menu-hide');
const menuTop = document.createElement('div');
menuTop.classList.add('menu-top');
const menuBottom = document.createElement('div');
menuBottom.classList.add('menu-btm');
menu.appendChild(menuTop);
menu.appendChild(menuBottom);
wrapper.appendChild(menu);

const hideMenuBtn = document.createElement('button');
hideMenuBtn.classList.add('hide-menu-btn');
hideMenuBtn.classList.add('remove-hide-btn');
hideMenuBtn.innerHTML = '<svg class="cross-icon" xml:space="preserve" viewBox="0 0 40 40"><switch><g stroke="#000" stroke-linecap="round" stroke-miterlimit="10"><path d="M10 29.19 30 9"/><path fill="#fff" d="M30 29.19 10 9"/></g></switch></svg>';
wrapper.appendChild(hideMenuBtn);

function showMenu(){
  menuBtn.classList.remove('menu-btn-show');
  menuBtn.classList.add('menu-btn-hide');
  menu.classList.remove('menu-hide');
  menu.classList.add('menu-show');
  hideMenuBtn.classList.remove('remove-hide-btn');
  hideMenuBtn.classList.add('show-hide-btn');
}

function hideMenu(){
  menuBtn.classList.remove('menu-btn-hide');
  menuBtn.classList.add('menu-btn-show');
  menu.classList.remove('menu-show');
  menu.classList.add('menu-hide');
  menu.style.background = 'none';
  hideMenuBtn.classList.remove('show-hide-btn');
  hideMenuBtn.classList.add('remove-hide-btn');
}

menuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1B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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0F5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRCIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnUvLi9zcmMvbWVudVN0eWxlLmNzcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL3NyYy9tZW51U3R5bGUuY3NzP2IyZmYiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZW51L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lbnUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVudS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVudS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lbnUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZW51L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tZW51Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDBkdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xufVxuXG4ubWVudS1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuI3RvcC1saW5lLFxuI21pZC1saW5lLFxuI2J0bS1saW5lIHtcbiAgICBzdHJva2U6ICMwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG59XG5cbi5tZW51LWJ0bjpob3ZlciAjdG9wLWxpbmUsXG4ubWVudS1idG46aG92ZXIgI21pZC1saW5lLFxuLm1lbnUtYnRuOmhvdmVyICNidG0tbGluZSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNTAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGRhc2g7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1idG4tc2hvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLm1lbnUtYnRuLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LXNob3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtZW51LXNob3c7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXJvdzogMS8zO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xufVxuXG4ubWVudS10b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA4OS41JSBhdCAycHggOXB4KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcC1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1idG0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogIzlENEVERDtcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA5MCUgYXQgMjVweCA3cHgpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1pZC1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGlkZS1tZW51LWJ0biB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM3QjJDQkY7XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Jvc3MtaWNvbiB7XG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XG59XG5cbi5zaG93LWhpZGUtYnRuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93LWhpZGUtYnRuO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLnJlbW92ZS1oaWRlLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBtZW51LXNob3cge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3ctaGlkZS1idG4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwMDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyB0b3AtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgODkuNSUgYXQgMnB4IDlweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1pZC1jaXJjbGUge1xuICAgIDAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA5MCUgYXQgMjVweCAxMnB4KTtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLHlDQUF5QztJQUM3QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLHlDQUF5QztJQUM3QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICM3QjJDQkY7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0b3AtbGluZSxcXG4jbWlkLWxpbmUsXFxuI2J0bS1saW5lIHtcXG4gICAgc3Ryb2tlOiAjMDAwO1xcbiAgICBzdHJva2Utd2lkdGg6IDM7XFxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xcbn1cXG5cXG4ubWVudS1idG46aG92ZXIgI3RvcC1saW5lLFxcbi5tZW51LWJ0bjpob3ZlciAjbWlkLWxpbmUsXFxuLm1lbnUtYnRuOmhvdmVyICNidG0tbGluZSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDUwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRhc2g7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLm1lbnUtYnRuLXNob3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVudS1idG4taGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZW51LXNob3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICBhbmltYXRpb24tbmFtZTogbWVudS1zaG93O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5tZW51LWhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5tZW51LXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgODkuNSUgYXQgMnB4IDlweCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b3AtY2lyY2xlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5tZW51LWJ0bSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICM5RDRFREQ7XFxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDkwJSBhdCAyNXB4IDdweCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1pZC1jaXJjbGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmhpZGUtbWVudS1idG4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcm9zcy1pY29uIHtcXG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XFxufVxcblxcbi5zaG93LWhpZGUtYnRuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3ctaGlkZS1idG47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnJlbW92ZS1oaWRlLWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgbWVudS1zaG93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaG93LWhpZGUtYnRuIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgICAwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNTAwO1xcbiAgICB9XFxuICAgIDQwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMzAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0b3AtY2lyY2xlIHtcXG4gICAgMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA4OS41JSBhdCAycHggOXB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1pZC1jaXJjbGUge1xcbiAgICAwJSB7XFxuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMHB4IDBweCBhdCAwcHggMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDkwJSBhdCAyNXB4IDEycHgpO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbWVudVN0eWxlLmNzc1wiO1xuXG4vLyBET01cbmNvbnN0IHdyYXBwZXIgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG5jb25zdCBtZW51QnRuID1cbiAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xubWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bi1zaG93Jyk7XG5tZW51QnRuLmlubmVySFRNTCA9JzxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMFwiIHk9XCIwXCIgY2xhc3M9XCJtZW51LWljb25cIiB2aWV3Qm94PVwiMCAwIDQwIDYwXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48c3dpdGNoPjxnPjxwYXRoIGlkPVwiYnRtLWxpbmVcIiBjbGFzcz1cInN0MFwiIGQ9XCJNMiAxNy43MmgzNlwiLz48cGF0aCBpZD1cIm1pZC1saW5lXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTM4IDMwSDJcIi8+PHBhdGggaWQ9XCJ0b3AtbGluZVwiIGNsYXNzPVwic3QwXCIgZD1cIk0yIDQyLjI4aDM2XCIvPjwvZz48L3N3aXRjaD48L3N2Zz4nO1xud3JhcHBlci5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtaGlkZScpO1xuY29uc3QgbWVudVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudVRvcC5jbGFzc0xpc3QuYWRkKCdtZW51LXRvcCcpO1xuY29uc3QgbWVudUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudUJvdHRvbS5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bScpO1xubWVudS5hcHBlbmRDaGlsZChtZW51VG9wKTtcbm1lbnUuYXBwZW5kQ2hpbGQobWVudUJvdHRvbSk7XG53cmFwcGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG5jb25zdCBoaWRlTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaGlkZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZS1tZW51LWJ0bicpO1xuaGlkZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWhpZGUtYnRuJyk7XG5oaWRlTWVudUJ0bi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImNyb3NzLWljb25cIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48c3dpdGNoPjxnIHN0cm9rZT1cIiMwMDBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiPjxwYXRoIGQ9XCJNMTAgMjkuMTkgMzAgOVwiLz48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzAgMjkuMTkgMTAgOVwiLz48L2c+PC9zd2l0Y2g+PC9zdmc+JztcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaGlkZU1lbnVCdG4pO1xuXG5mdW5jdGlvbiBzaG93TWVudSgpe1xuICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnRuLXNob3cnKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bi1oaWRlJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1oaWRlJyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XG4gIGhpZGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZS1oaWRlLWJ0bicpO1xuICBoaWRlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93LWhpZGUtYnRuJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVNZW51KCl7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idG4taGlkZScpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuLXNob3cnKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWhpZGUnKTtcbiAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xuICBoaWRlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWhpZGUtYnRuJyk7XG4gIGhpZGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1oaWRlLWJ0bicpO1xufVxuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpO1xuaGlkZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTWVudSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9