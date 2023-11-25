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
    width: 768px;
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
    stroke: #fff;
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

.menu {
    position: relative;
    width: 100%;
    height: 100%;
    grid-row: 1/3;
    z-index: 1;
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
    animation-duration: 1s;
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
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu.menu-show{
    display: grid;
    grid-template-rows: 1fr 1fr;
}

.menu-show {
    transform-origin: top left;
    animation-name: menu-show;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-remove{
    display: none;
}

.menu-hide-visually {
    transform-origin: top left;
    animation-name: menu-hide;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.hide-menu-top{
    transform-origin: top left;
    animation-name: hide-top-circle;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.hide-menu-btm{
    transform-origin: top left;
    animation-name: hide-btm-circle;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.hide-menu-btn {
    padding: 5px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: #7B2CBF;
    grid-row: 3/4;
    align-self: center;
    justify-self: center;
    cursor: pointer;
}

.cross-icon {
    stroke-width: 3px;
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

 @keyframes menu-hide {
    0%{
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}

@keyframes hide-top-circle {
    0% {
        clip-path: ellipse(100% 89.5% at 2px 9px);
        transform: scale(1);
    }
    100% {
        clip-path: ellipse(0px 0px at 0px 0px);
        transform: scale(0);
    }
}

@keyframes hide-btm-circle {
    0% {
        clip-path: ellipse(100% 90% at 25px 12px);
        transform: scale(1);
    }
    100% {
        clip-path: ellipse(0px 0px at 0px 0px);
        transform: scale(0);
    }
}

@media screen and (max-width: 768px) {
    .wrapper {
      width: 100%;
    }
}  `, "",{"version":3,"sources":["webpack://./src/menuStyle.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.wrapper {\n    height: 100dvh;\n    width: 768px;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 5fr 1fr;\n}\n\n.menu-btn {\n    display: none;\n    height: 60px;\n    width: 45px;\n    padding: 8px;\n    cursor: pointer;\n    position: relative;\n    border: none;\n    background: #7B2CBF;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#top-line,\n#mid-line,\n#btm-line {\n    stroke: #fff;\n    stroke-width: 3;\n    stroke-linecap: round;\n    stroke-miterlimit: 10;\n}\n\n.menu-btn:hover #top-line,\n.menu-btn:hover #mid-line,\n.menu-btn:hover #btm-line {\n    stroke-dasharray: 500;\n    stroke-dashoffset: 500;\n    animation-name: dash;\n    animation-duration: 6s;\n    animation-timing-function: ease-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-btn-show {\n    display: grid;\n}\n\n.menu-btn-hide {\n    display: none;\n}\n\n.menu {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-row: 1/3;\n    z-index: 1;\n    transform-origin: top left;\n}\n\n.menu-top {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #7B2CBF;\n    clip-path: ellipse(100% 89.5% at 2px 9px);\n    z-index: 1;\n    opacity: 1;\n    animation-name: top-circle;\n    animation-duration: 1s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-btm {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n    background: #9D4EDD;\n    clip-path: ellipse(100% 90% at 25px 7px);\n    top: 0;\n    left: 0;\n    z-index: 0;\n    animation-name: mid-circle;\n    animation-duration: 500ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu.menu-show{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.menu-show {\n    transform-origin: top left;\n    animation-name: menu-show;\n    animation-duration: 500ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-remove{\n    display: none;\n}\n\n.menu-hide-visually {\n    transform-origin: top left;\n    animation-name: menu-hide;\n    animation-duration: 1.5s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.hide-menu-top{\n    transform-origin: top left;\n    animation-name: hide-top-circle;\n    animation-duration: 1s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.hide-menu-btm{\n    transform-origin: top left;\n    animation-name: hide-btm-circle;\n    animation-duration: 2s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.hide-menu-btn {\n    padding: 5px;\n    width: 60px;\n    height: 60px;\n    border: none;\n    border-radius: 50%;\n    background: #7B2CBF;\n    grid-row: 3/4;\n    align-self: center;\n    justify-self: center;\n    cursor: pointer;\n}\n\n.cross-icon {\n    stroke-width: 3px;\n}\n\n.show-hide-btn {\n    display: grid;\n    animation-name: show-hide-btn;\n    animation-duration: 300ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.remove-hide-btn {\n    display: none;\n}\n\n@keyframes menu-show {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes show-hide-btn {\n    0% {\n        opacity: 0;\n        transform: translateY(90px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\n@keyframes dash {\n    0% {\n        stroke-dashoffset: 500;\n    }\n    40% {\n        stroke-dashoffset: 300;\n    }\n    60% {\n        stroke-dashoffset: 200;\n    }\n    80% {\n        stroke-dashoffset: 100;\n    }\n    100% {\n        stroke-dashoffset: 0;\n    }\n}\n\n@keyframes top-circle {\n    0% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n        \n    }\n    100% {\n        clip-path: ellipse(100% 89.5% at 2px 9px);\n    }\n}\n\n@keyframes mid-circle {\n    0% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n    }\n    100% {\n        clip-path: ellipse(100% 90% at 25px 12px);\n    }\n}\n\n @keyframes menu-hide {\n    0%{\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(0);\n    }\n}\n\n@keyframes hide-top-circle {\n    0% {\n        clip-path: ellipse(100% 89.5% at 2px 9px);\n        transform: scale(1);\n    }\n    100% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n        transform: scale(0);\n    }\n}\n\n@keyframes hide-btm-circle {\n    0% {\n        clip-path: ellipse(100% 90% at 25px 12px);\n        transform: scale(1);\n    }\n    100% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n        transform: scale(0);\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .wrapper {\n      width: 100%;\n    }\n}  "],"sourceRoot":""}]);
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
menu.classList.add('menu-remove');
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
hideMenuBtn.innerHTML = '<svg class="cross-icon" xml:space="preserve" viewBox="0 0 40 40"><switch><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10"><path d="M10 29.19 30 9"/><path fill="#fff" d="M30 29.19 10 9"/></g></switch></svg>';
wrapper.appendChild(hideMenuBtn);

function showMenu(){
  
  menu.classList.remove('menu-hide-visually');
  menu.classList.remove('menu-remove');
  menuBtn.classList.remove('menu-btn-show');
  menuBtn.classList.add('menu-btn-hide');
  menuTop.classList.remove("hide-menu-top");
  menuBottom.classList.remove("hide-menu-btm");
  menu.classList.add('menu-show');
  hideMenuBtn.classList.remove('remove-hide-btn');
  hideMenuBtn.classList.add('show-hide-btn');
}

function hideMenu(){

  menu.classList.remove('menu-show');

  menuTop.classList.add("hide-menu-top");
  menuBottom.classList.add("hide-menu-btm");

  menu.classList.add('menu-hide-visually');

  hideMenuBtn.classList.remove('show-hide-btn');
  hideMenuBtn.classList.add('remove-hide-btn');
  
  setTimeout(()=>{
    menu.classList.add('menu-remove');
    menuBtn.classList.remove('menu-btn-hide');
    menuBtn.classList.add('menu-btn-show');
  }, 1000);

}

menuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0F5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51Ly4vc3JjL21lbnVTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21lbnUvLi9zcmMvbWVudVN0eWxlLmNzcz9iMmZmIiwid2VicGFjazovL21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVudS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZW51L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lbnUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lbnUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZW51L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVudS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWVudS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIHdpZHRoOiA3NjhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XG59XG5cbi5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICM3QjJDQkY7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4jdG9wLWxpbmUsXG4jbWlkLWxpbmUsXG4jYnRtLWxpbmUge1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDM7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbn1cblxuLm1lbnUtYnRuOmhvdmVyICN0b3AtbGluZSxcbi5tZW51LWJ0bjpob3ZlciAjbWlkLWxpbmUsXG4ubWVudS1idG46aG92ZXIgI2J0bS1saW5lIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1MDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwMDtcbiAgICBhbmltYXRpb24tbmFtZTogZGFzaDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tZW51LWJ0bi1zaG93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWVudS1idG4taGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xufVxuXG4ubWVudS10b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA4OS41JSBhdCAycHggOXB4KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcC1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1idG0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogIzlENEVERDtcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA5MCUgYXQgMjVweCA3cHgpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1pZC1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS5tZW51LXNob3d7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG59XG5cbi5tZW51LXNob3cge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtZW51LXNob3c7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1yZW1vdmV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtaGlkZS12aXN1YWxseSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtaGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhpZGUtbWVudS10b3B7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGUtdG9wLWNpcmNsZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5oaWRlLW1lbnUtYnRte1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBoaWRlLWJ0bS1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGlkZS1tZW51LWJ0biB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM3QjJDQkY7XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Jvc3MtaWNvbiB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG59XG5cbi5zaG93LWhpZGUtYnRuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93LWhpZGUtYnRuO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLnJlbW92ZS1oaWRlLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBtZW51LXNob3cge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3ctaGlkZS1idG4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwMDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyB0b3AtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDg5LjUlIGF0IDJweCA5cHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtaWQtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgOTAlIGF0IDI1cHggMTJweCk7XG4gICAgfVxufVxuXG4gQGtleWZyYW1lcyBtZW51LWhpZGUge1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaGlkZS10b3AtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDg5LjUlIGF0IDJweCA5cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGUtYnRtLWNpcmNsZSB7XG4gICAgMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA5MCUgYXQgMjVweCAxMnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAud3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59ICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7O0lBRTFDO0lBQ0E7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSjs7Q0FFQztJQUNHO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kseUNBQXlDO1FBQ3pDLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5Q0FBeUM7UUFDekMsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxzQ0FBc0M7UUFDdEMsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtNQUNFLFdBQVc7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDc2OHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdG9wLWxpbmUsXFxuI21pZC1saW5lLFxcbiNidG0tbGluZSB7XFxuICAgIHN0cm9rZTogI2ZmZjtcXG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyICN0b3AtbGluZSxcXG4ubWVudS1idG46aG92ZXIgI21pZC1saW5lLFxcbi5tZW51LWJ0bjpob3ZlciAjYnRtLWxpbmUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1MDA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBkYXNoO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5tZW51LWJ0bi1zaG93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1lbnUtYnRuLWhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgei1pbmRleDogMTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5tZW51LXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgODkuNSUgYXQgMnB4IDlweCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b3AtY2lyY2xlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5tZW51LWJ0bSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICM5RDRFREQ7XFxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDkwJSBhdCAyNXB4IDdweCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1pZC1jaXJjbGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLm1lbnUubWVudS1zaG93e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5tZW51LXNob3cge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtc2hvdztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ubWVudS1yZW1vdmV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZW51LWhpZGUtdmlzdWFsbHkge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtaGlkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5oaWRlLW1lbnUtdG9we1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGUtdG9wLWNpcmNsZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uaGlkZS1tZW51LWJ0bXtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBoaWRlLWJ0bS1jaXJjbGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmhpZGUtbWVudS1idG4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcm9zcy1pY29uIHtcXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XFxufVxcblxcbi5zaG93LWhpZGUtYnRuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3ctaGlkZS1idG47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnJlbW92ZS1oaWRlLWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgbWVudS1zaG93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaG93LWhpZGUtYnRuIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgICAwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNTAwO1xcbiAgICB9XFxuICAgIDQwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMzAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0b3AtY2lyY2xlIHtcXG4gICAgMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDg5LjUlIGF0IDJweCA5cHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbWlkLWNpcmNsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgOTAlIGF0IDI1cHggMTJweCk7XFxuICAgIH1cXG59XFxuXFxuIEBrZXlmcmFtZXMgbWVudS1oaWRlIHtcXG4gICAgMCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUtdG9wLWNpcmNsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDg5LjUlIGF0IDJweCA5cHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUtYnRtLWNpcmNsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDkwJSBhdCAyNXB4IDEycHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAud3JhcHBlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59ICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51U3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51U3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21lbnVTdHlsZS5jc3NcIjtcblxuLy8gRE9NXG5jb25zdCB3cmFwcGVyID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuY29uc3QgbWVudUJ0biA9XG4gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5tZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbm1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWVudS1idG4tc2hvdycpO1xubWVudUJ0bi5pbm5lckhUTUwgPSc8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBcIiB5PVwiMFwiIGNsYXNzPVwibWVudS1pY29uXCIgdmlld0JveD1cIjAgMCA0MCA2MFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHN3aXRjaD48Zz48cGF0aCBpZD1cImJ0bS1saW5lXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTIgMTcuNzJoMzZcIi8+PHBhdGggaWQ9XCJtaWQtbGluZVwiIGNsYXNzPVwic3QwXCIgZD1cIk0zOCAzMEgyXCIvPjxwYXRoIGlkPVwidG9wLWxpbmVcIiBjbGFzcz1cInN0MFwiIGQ9XCJNMiA0Mi4yOGgzNlwiLz48L2c+PC9zd2l0Y2g+PC9zdmc+JztcbndyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LXJlbW92ZScpO1xuY29uc3QgbWVudVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudVRvcC5jbGFzc0xpc3QuYWRkKCdtZW51LXRvcCcpO1xuY29uc3QgbWVudUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudUJvdHRvbS5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bScpO1xubWVudS5hcHBlbmRDaGlsZChtZW51VG9wKTtcbm1lbnUuYXBwZW5kQ2hpbGQobWVudUJvdHRvbSk7XG53cmFwcGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG5jb25zdCBoaWRlTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaGlkZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZS1tZW51LWJ0bicpO1xuaGlkZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWhpZGUtYnRuJyk7XG5oaWRlTWVudUJ0bi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImNyb3NzLWljb25cIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48c3dpdGNoPjxnIHN0cm9rZT1cIiNmZmZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiPjxwYXRoIGQ9XCJNMTAgMjkuMTkgMzAgOVwiLz48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzAgMjkuMTkgMTAgOVwiLz48L2c+PC9zd2l0Y2g+PC9zdmc+JztcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaGlkZU1lbnVCdG4pO1xuXG5mdW5jdGlvbiBzaG93TWVudSgpe1xuICBcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWhpZGUtdmlzdWFsbHknKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXJlbW92ZScpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnRuLXNob3cnKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bi1oaWRlJyk7XG4gIG1lbnVUb3AuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtbWVudS10b3BcIik7XG4gIG1lbnVCb3R0b20uY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtbWVudS1idG1cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XG4gIGhpZGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZS1oaWRlLWJ0bicpO1xuICBoaWRlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93LWhpZGUtYnRuJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVNZW51KCl7XG5cbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcblxuICBtZW51VG9wLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW1lbnUtdG9wXCIpO1xuICBtZW51Qm90dG9tLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW1lbnUtYnRtXCIpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1oaWRlLXZpc3VhbGx5Jyk7XG5cbiAgaGlkZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1oaWRlLWJ0bicpO1xuICBoaWRlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtaGlkZS1idG4nKTtcbiAgXG4gIHNldFRpbWVvdXQoKCk9PntcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtcmVtb3ZlJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWJ0bi1oaWRlJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bi1zaG93Jyk7XG4gIH0sIDEwMDApO1xuXG59XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XG5oaWRlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNZW51KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=