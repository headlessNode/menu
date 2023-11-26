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
    font-family:Arial, Helvetica, sans-serif;
}

.wrapper {
    position: absolute;
    top: 0;
    height: 800px;
    width: 375px;
    border: 1px solid black;
    display: grid;
    grid-template-rows: 5rem 6fr 1fr;
    gap: 10px;
}

.header{
    width: 100%;
    height: 5rem;
    background: #7B2CBF;
    display: grid;
    grid-template-columns: 95px 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
}

.header h1{
    grid-column: 2/3;
    justify-self: start;
}

.menu-btn {
    display: grid;
    height: 60px;
    width: 40px;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
    border: none;
    background: #7B2CBF;
    justify-self: flex-start;
}

.main-body{
    grid-row: 2/3;
    display: grid;
    grid-template-rows: 60px 1fr;
    width: 100%;
    height: 100%;
    gap: 20px;
    justify-items: center;
    align-items: center;
    z-index: 1;
}

.main-body-header{
    width: 100%;
    height: 60px;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-body-content{
    width: 100%;
    height: 100%;
    gap: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
    align-items: center;
}

.main-body-content p{
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    box-shadow: 2px 2px 2px 2px rgba(169, 169, 169, 0.7);
    border-radius: 5px;
    padding: 20px;
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

.menu {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 2;
    transform-origin: top left;
}

.menu-top {
    position: absolute;
    display: grid;
    width: 100%;
    height: 100%;
    background: #7B2CBF;
    clip-path: ellipse(100% 69.5% at 2px 9px);
    z-index: 2;
    opacity: 1;
    animation-name: top-circle;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-top .menu-items-container{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(7, 60px);
    align-items: center;
    top: 2%;
    left: 10%;
    gap: 2rem;
    font-size: medium;
    font-weight:bold;
    color: white;
    width: 80%;
    height: fit-content;
    padding: 20px;
}

.menu-top .menu-items-container > p{
    grid-column: 1/2;
    justify-self: start;
    border-bottom: 0px solid white;
    transition: border 300ms ease-in-out;
    padding: 5px;
    cursor: pointer;
}

.menu-items-container .menu-pic{
    grid-row: 1/2;
    grid-column: 2/3;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: white;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-items-container .menu-pic > svg{
    width: 50px;
    height: 50px;
}

.menu-items-container > p:hover{
    border-bottom: 1px solid white;
}

.menu-items-container > *{
    animation-name: menu-items-animation;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}

.menu-btm {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #9D4EDD;
    clip-path: ellipse(100% 70% at 40px 9px);
    top: 0;
    left: 0;
    z-index: 1;
    animation-name: mid-circle;
    animation-duration: 300ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-modal{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(169, 169, 169, 0.5);
    backdrop-filter: blur(5px);
    clip-path: circle(150% at top left);
    top: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    animation-name: modal-animation;
    animation-duration: 100ms;
    animation-timing-function: linear;
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
    animation-duration: 10ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-remove{
    display: none;
}

.hide-menu-top{
    clip-path: ellipse(0px 0px at 0px 0px);
    transform-origin: top left;
    animation-name: hide-top-circle;
    animation-duration: 300ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.hide-menu-btm{
    clip-path: ellipse(0px 0px at 0px 0px);
    transform-origin: top left;
    animation-name: hide-btm-circle;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.menu-modal-hide{
    clip-path: circle(0px at top left);
    transform-origin: top left;
    animation-name: menu-modal-hide;
    animation-duration: 800ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;    
}


.hide-menu-btn {
    position: absolute;
    bottom: 10%;
    left: 40%;
    padding: 5px;
    width: 60px;
    height: 60px;
    border: none;
    z-index: 1;
    border-radius: 50%;
    background: #7B2CBF;
    align-self: center;
    justify-self: center;
    cursor: pointer;
}

.cross-icon {
    stroke-width: 3px;
}

.show-hide-btn {
    display: grid;
    opacity: 0;
    animation-name: show-hide-btn;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 300ms;
}

.remove-hide-btn {
    animation-name: remove-hide-btn;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 300ms;
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
        clip-path: ellipse(100% 69.5% at 2px 9px);
    }
}

@keyframes mid-circle {
    0% {
        clip-path: ellipse(0px 0px at 0px 0px);
    }
    100% {
        clip-path: ellipse(100% 70% at 40px 9px);
    }
}

@keyframes modal-animation {
    0% {
        clip-path: circle(0px at top left);
    }
    100% {
        clip-path: circle(150% at top left);
    }
}

@keyframes menu-items-animation {
    0%{
        opacity: 0;
        transform: translateY(50px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes hide-top-circle {
    0% {
        clip-path: ellipse(100% 69.5% at 2px 9px);
    
    }
    100% {
        clip-path: ellipse(0px 0px at 0px 0px);
    }
}

@keyframes hide-btm-circle {
    0% {
        clip-path: ellipse(100% 70% at 40px 9px);
    }
    100% {
        clip-path: ellipse(0px 0px at 0px 0px);
        
    }
}

@keyframes remove-hide-btn {
    0%{
        opacity: 1;
        transform: translateY(0);
    }
    100%{
        opacity: 0;
        transform: translateY(90px);
    }
}

@keyframes menu-modal-hide {
    0%{
        clip-path: circle(150% at top left);
        
    }
    100%{
        clip-path: circle((0px at top left));
        
    }
}

@media screen and (max-width: 375px) {
    .wrapper {
      width: 100%;
    }
}
@media screen and (max-height: 800px) {
    .wrapper{
        height: 100svh;
    }
}  `, "",{"version":3,"sources":["webpack://./src/menuStyle.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n.wrapper {\n    position: absolute;\n    top: 0;\n    height: 800px;\n    width: 375px;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 5rem 6fr 1fr;\n    gap: 10px;\n}\n\n.header{\n    width: 100%;\n    height: 5rem;\n    background: #7B2CBF;\n    display: grid;\n    grid-template-columns: 95px 1fr;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.header h1{\n    grid-column: 2/3;\n    justify-self: start;\n}\n\n.menu-btn {\n    display: grid;\n    height: 60px;\n    width: 40px;\n    margin-left: 20px;\n    cursor: pointer;\n    position: relative;\n    border: none;\n    background: #7B2CBF;\n    justify-self: flex-start;\n}\n\n.main-body{\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n    width: 100%;\n    height: 100%;\n    gap: 20px;\n    justify-items: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.main-body-header{\n    width: 100%;\n    height: 60px;\n    grid-row: 1/2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-body-content{\n    width: 100%;\n    height: 100%;\n    gap: 40px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    justify-items: center;\n    align-items: center;\n}\n\n.main-body-content p{\n    height: 100%;\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    text-align: center;\n    box-shadow: 2px 2px 2px 2px rgba(169, 169, 169, 0.7);\n    border-radius: 5px;\n    padding: 20px;\n}\n\n#top-line,\n#mid-line,\n#btm-line {\n    stroke: #fff;\n    stroke-width: 3;\n    stroke-linecap: round;\n    stroke-miterlimit: 10;\n}\n\n.menu-btn:hover #top-line,\n.menu-btn:hover #mid-line,\n.menu-btn:hover #btm-line {\n    stroke-dasharray: 500;\n    stroke-dashoffset: 500;\n    animation-name: dash;\n    animation-duration: 6s;\n    animation-timing-function: ease-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    z-index: 2;\n    transform-origin: top left;\n}\n\n.menu-top {\n    position: absolute;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background: #7B2CBF;\n    clip-path: ellipse(100% 69.5% at 2px 9px);\n    z-index: 2;\n    opacity: 1;\n    animation-name: top-circle;\n    animation-duration: 500ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-top .menu-items-container{\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(7, 60px);\n    align-items: center;\n    top: 2%;\n    left: 10%;\n    gap: 2rem;\n    font-size: medium;\n    font-weight:bold;\n    color: white;\n    width: 80%;\n    height: fit-content;\n    padding: 20px;\n}\n\n.menu-top .menu-items-container > p{\n    grid-column: 1/2;\n    justify-self: start;\n    border-bottom: 0px solid white;\n    transition: border 300ms ease-in-out;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.menu-items-container .menu-pic{\n    grid-row: 1/2;\n    grid-column: 2/3;\n    height: 60px;\n    width: 60px;\n    border-radius: 50%;\n    background: white;\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-items-container .menu-pic > svg{\n    width: 50px;\n    height: 50px;\n}\n\n.menu-items-container > p:hover{\n    border-bottom: 1px solid white;\n}\n\n.menu-items-container > *{\n    animation-name: menu-items-animation;\n    animation-duration: 500ms;\n    animation-timing-function: ease-in-out;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n}\n\n.menu-btm {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #9D4EDD;\n    clip-path: ellipse(100% 70% at 40px 9px);\n    top: 0;\n    left: 0;\n    z-index: 1;\n    animation-name: mid-circle;\n    animation-duration: 300ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-modal{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(169, 169, 169, 0.5);\n    backdrop-filter: blur(5px);\n    clip-path: circle(150% at top left);\n    top: 0;\n    left: 0;\n    z-index: 0;\n    overflow: hidden;\n    animation-name: modal-animation;\n    animation-duration: 100ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n.menu.menu-show{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.menu-show {\n    transform-origin: top left;\n    animation-name: menu-show;\n    animation-duration: 10ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-remove{\n    display: none;\n}\n\n.hide-menu-top{\n    clip-path: ellipse(0px 0px at 0px 0px);\n    transform-origin: top left;\n    animation-name: hide-top-circle;\n    animation-duration: 300ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.hide-menu-btm{\n    clip-path: ellipse(0px 0px at 0px 0px);\n    transform-origin: top left;\n    animation-name: hide-btm-circle;\n    animation-duration: 500ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.menu-modal-hide{\n    clip-path: circle(0px at top left);\n    transform-origin: top left;\n    animation-name: menu-modal-hide;\n    animation-duration: 800ms;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;    \n}\n\n\n.hide-menu-btn {\n    position: absolute;\n    bottom: 10%;\n    left: 40%;\n    padding: 5px;\n    width: 60px;\n    height: 60px;\n    border: none;\n    z-index: 1;\n    border-radius: 50%;\n    background: #7B2CBF;\n    align-self: center;\n    justify-self: center;\n    cursor: pointer;\n}\n\n.cross-icon {\n    stroke-width: 3px;\n}\n\n.show-hide-btn {\n    display: grid;\n    opacity: 0;\n    animation-name: show-hide-btn;\n    animation-duration: 300ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-delay: 300ms;\n}\n\n.remove-hide-btn {\n    animation-name: remove-hide-btn;\n    animation-duration: 300ms;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-delay: 300ms;\n}\n\n@keyframes menu-show {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes show-hide-btn {\n    0% {\n        opacity: 0;\n        transform: translateY(90px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\n@keyframes dash {\n    0% {\n        stroke-dashoffset: 500;\n    }\n    40% {\n        stroke-dashoffset: 300;\n    }\n    60% {\n        stroke-dashoffset: 200;\n    }\n    80% {\n        stroke-dashoffset: 100;\n    }\n    100% {\n        stroke-dashoffset: 0;\n    }\n}\n\n@keyframes top-circle {\n    0% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n        \n    }\n    100% {\n        clip-path: ellipse(100% 69.5% at 2px 9px);\n    }\n}\n\n@keyframes mid-circle {\n    0% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n    }\n    100% {\n        clip-path: ellipse(100% 70% at 40px 9px);\n    }\n}\n\n@keyframes modal-animation {\n    0% {\n        clip-path: circle(0px at top left);\n    }\n    100% {\n        clip-path: circle(150% at top left);\n    }\n}\n\n@keyframes menu-items-animation {\n    0%{\n        opacity: 0;\n        transform: translateY(50px);\n    }\n    100%{\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\n@keyframes hide-top-circle {\n    0% {\n        clip-path: ellipse(100% 69.5% at 2px 9px);\n    \n    }\n    100% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n    }\n}\n\n@keyframes hide-btm-circle {\n    0% {\n        clip-path: ellipse(100% 70% at 40px 9px);\n    }\n    100% {\n        clip-path: ellipse(0px 0px at 0px 0px);\n        \n    }\n}\n\n@keyframes remove-hide-btn {\n    0%{\n        opacity: 1;\n        transform: translateY(0);\n    }\n    100%{\n        opacity: 0;\n        transform: translateY(90px);\n    }\n}\n\n@keyframes menu-modal-hide {\n    0%{\n        clip-path: circle(150% at top left);\n        \n    }\n    100%{\n        clip-path: circle((0px at top left));\n        \n    }\n}\n\n@media screen and (max-width: 375px) {\n    .wrapper {\n      width: 100%;\n    }\n}\n@media screen and (max-height: 800px) {\n    .wrapper{\n        height: 100svh;\n    }\n}  "],"sourceRoot":""}]);
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
const wrapper = document.querySelector(".wrapper");
// PAGE HEADER
const header = document.createElement('div');
header.classList.add('header');
wrapper.appendChild(header);
// MENU BTN
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML ='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="menu-icon" viewBox="0 0 40 60" xml:space="preserve"><switch><g><path id="btm-line" class="st0" d="M2 17.72h36"/><path id="mid-line" class="st0" d="M38 30H2"/><path id="top-line" class="st0" d="M2 42.28h36"/></g></switch></svg>';
header.appendChild(menuBtn);
// HEADER HEADING
const heading = document.createElement('h1');
heading.textContent = "Menu Design"
header.appendChild(heading);
// MAIN BODY
const mainBody = document.createElement('div');
mainBody.classList.add('main-body');
const mainBodyHeader = document.createElement('h2');
mainBodyHeader.classList.add('main-body-header');
mainBodyHeader.textContent = 'Lorem Ipsum';
// MAIN BODY CONTENT
const mainBodyContent = document.createElement('div');
mainBodyContent.classList.add('main-body-content');

const mainBodyParagraphOne = document.createElement('p');
mainBodyParagraphOne.textContent = 'Lorem Ipsum is simply dummy text';
const mainBodyParagraphTwo = document.createElement('p');
mainBodyParagraphTwo.textContent = 'Lorem Ipsum is simply dummy text';
const mainBodyParagraphThree = document.createElement('p');
mainBodyParagraphThree.textContent = 'Lorem Ipsum is simply dummy text';
const mainBodyParagraphFour = document.createElement('p');
mainBodyParagraphFour.textContent = 'Lorem Ipsum is simply dummy text';

mainBodyContent.appendChild(mainBodyParagraphOne);
mainBodyContent.appendChild(mainBodyParagraphTwo);
mainBodyContent.appendChild(mainBodyParagraphThree);
mainBodyContent.appendChild(mainBodyParagraphFour);

mainBody.appendChild(mainBodyHeader);
mainBody.appendChild(mainBodyContent);

wrapper.appendChild(mainBody);

// MENU

const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('menu-remove');
const menuTop = document.createElement('div');
menuTop.classList.add('menu-top');
const menuItemsContainer = document.createElement('menuItenContainer');
menuItemsContainer.classList.add('menu-items-container');
const menuItemOne = document.createElement('p');
menuItemOne.textContent = "Home";
const menuItemTwo = document.createElement('p');
menuItemTwo.textContent = "Feedback";
const menuItemThree = document.createElement('p');
menuItemThree.textContent = "Settings";
const menuItemFour = document.createElement('p');
menuItemFour.textContent = "Logout";


const menuPic = document.createElement('div');
menuPic.classList.add('menu-pic');
menuPic.innerHTML = '<svg fill="#000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>';
menuItemsContainer.appendChild(menuItemOne);
menuItemsContainer.appendChild(menuItemTwo);
menuItemsContainer.appendChild(menuItemThree);
menuItemsContainer.appendChild(menuItemFour);
menuItemsContainer.appendChild(menuPic);

menuTop.appendChild(menuItemsContainer);

const menuBottom = document.createElement('div');
menuBottom.classList.add('menu-btm');
const menuModal = document.createElement('div');
menuModal.classList.add('menu-modal');

menu.appendChild(menuTop);
menu.appendChild(menuBottom);
menu.appendChild(menuModal);


const hideMenuBtn = document.createElement('button');
hideMenuBtn.classList.add('hide-menu-btn');
hideMenuBtn.classList.add('remove-hide-btn');
hideMenuBtn.innerHTML = '<svg class="cross-icon" xml:space="preserve" viewBox="0 0 40 40"><switch><g stroke="#fff" stroke-linecap="round" stroke-miterlimit="10"><path d="M10 29.19 30 9"/><path fill="#fff" d="M30 29.19 10 9"/></g></switch></svg>';
menu.appendChild(hideMenuBtn);

wrapper.appendChild(menu);

function showMenu(){
  
  // main menu container
  menu.classList.remove('menu-hide-visually');
  menu.classList.remove('menu-remove');
  // menu top
  menuTop.classList.remove("hide-menu-top");
  // menu bottom
  menuBottom.classList.remove("hide-menu-btm");
  // menu modal
  menuModal.classList.remove("menu-modal-hide");
  
  menu.classList.add('menu-show');
  hideMenuBtn.classList.remove('remove-hide-btn');
  hideMenuBtn.classList.add('show-hide-btn');
}

function hideMenu(){

  menu.classList.remove('menu-show');
  hideMenuBtn.classList.remove('show-hide-btn');
  hideMenuBtn.classList.add('remove-hide-btn');
  menuTop.classList.add("hide-menu-top");
  menuBottom.classList.add("hide-menu-btm");
  menuModal.classList.add("menu-modal-hide");
  menu.classList.add('menu-hide-visually');


  setTimeout(()=>{
    menu.classList.add('menu-remove');
    menuBtn.classList.add('menu-btn-show');
  }, 1000);

}

menuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8s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Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51Ly4vc3JjL21lbnVTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21lbnUvLi9zcmMvbWVudVN0eWxlLmNzcz9iMmZmIiwid2VicGFjazovL21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVudS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZW51L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lbnUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lbnUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZW51L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVudS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWVudS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ud3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIHdpZHRoOiAzNzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSA2ZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTVweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyIGgxe1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLm1lbnUtYnRuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbn1cblxuLm1haW4tYm9keXtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5tYWluLWJvZHktaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tYm9keS1jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDQwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tYm9keS1jb250ZW50IHB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMTY5LCAxNjksIDE2OSwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI3RvcC1saW5lLFxuI21pZC1saW5lLFxuI2J0bS1saW5lIHtcbiAgICBzdHJva2U6ICNmZmY7XG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG59XG5cbi5tZW51LWJ0bjpob3ZlciAjdG9wLWxpbmUsXG4ubWVudS1idG46aG92ZXIgI21pZC1saW5lLFxuLm1lbnUtYnRuOmhvdmVyICNidG0tbGluZSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNTAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGRhc2g7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbn1cblxuLm1lbnUtdG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA2OS41JSBhdCAycHggOXB4KTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcC1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1lbnUtdG9wIC5tZW51LWl0ZW1zLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgNjBweCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDIlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICBnYXA6IDJyZW07XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tZW51LXRvcCAubWVudS1pdGVtcy1jb250YWluZXIgPiBwe1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LWl0ZW1zLWNvbnRhaW5lciAubWVudS1waWN7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtaXRlbXMtY29udGFpbmVyIC5tZW51LXBpYyA+IHN2Z3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5tZW51LWl0ZW1zLWNvbnRhaW5lciA+IHA6aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubWVudS1pdGVtcy1jb250YWluZXIgPiAqe1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtZW51LWl0ZW1zLWFuaW1hdGlvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG59XG5cbi5tZW51LWJ0bSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOUQ0RUREO1xuICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDcwJSBhdCA0MHB4IDlweCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBhbmltYXRpb24tbmFtZTogbWlkLWNpcmNsZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1tb2RhbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IHRvcCBsZWZ0KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsLWFuaW1hdGlvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1lbnUubWVudS1zaG93e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xufVxuXG4ubWVudS1zaG93IHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICBhbmltYXRpb24tbmFtZTogbWVudS1zaG93O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1lbnUtcmVtb3Zle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlLW1lbnUtdG9we1xuICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBoaWRlLXRvcC1jaXJjbGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhpZGUtbWVudS1idG17XG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGUtYnRtLWNpcmNsZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWVudS1tb2RhbC1oaWRle1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDBweCBhdCB0b3AgbGVmdCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtbW9kYWwtaGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICBcbn1cblxuXG4uaGlkZS1tZW51LWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcbn1cblxuLnNob3ctaGlkZS1idG4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb24tbmFtZTogc2hvdy1oaWRlLWJ0bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcbn1cblxuLnJlbW92ZS1oaWRlLWJ0biB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJlbW92ZS1oaWRlLWJ0bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcbn1cblxuQGtleWZyYW1lcyBtZW51LXNob3cge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3ctaGlkZS1idG4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwMDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyB0b3AtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDY5LjUlIGF0IDJweCA5cHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtaWQtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgNzAlIGF0IDQwcHggOXB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbW9kYWwtYW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDBweCBhdCB0b3AgbGVmdCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IHRvcCBsZWZ0KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbWVudS1pdGVtcy1hbmltYXRpb24ge1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlLXRvcC1jaXJjbGUge1xuICAgIDAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgNjkuNSUgYXQgMnB4IDlweCk7XG4gICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMHB4IDBweCBhdCAwcHggMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaGlkZS1idG0tY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDcwJSBhdCA0MHB4IDlweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMHB4IDBweCBhdCAwcHggMHB4KTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJlbW92ZS1oaWRlLWJ0biB7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtZW51LW1vZGFsLWhpZGUge1xuICAgIDAle1xuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IHRvcCBsZWZ0KTtcbiAgICAgICAgXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKCgwcHggYXQgdG9wIGxlZnQpKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgIC53cmFwcGVye1xuICAgICAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICB9XG59ICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7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Q0o7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQzs7SUFFdkM7SUFDQTtRQUNJLG9DQUFvQzs7SUFFeEM7QUFDSjs7QUFFQTtJQUNJO01BQ0UsV0FBVztJQUNiO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDZmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgYmFja2dyb3VuZDogIzdCMkNCRjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5NXB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tYWluLWJvZHl7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubWFpbi1ib2R5LWhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWJvZHktY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ib2R5LWNvbnRlbnQgcHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3RvcC1saW5lLFxcbiNtaWQtbGluZSxcXG4jYnRtLWxpbmUge1xcbiAgICBzdHJva2U6ICNmZmY7XFxuICAgIHN0cm9rZS13aWR0aDogMztcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxufVxcblxcbi5tZW51LWJ0bjpob3ZlciAjdG9wLWxpbmUsXFxuLm1lbnUtYnRuOmhvdmVyICNtaWQtbGluZSxcXG4ubWVudS1idG46aG92ZXIgI2J0bS1saW5lIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNTAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNTAwO1xcbiAgICBhbmltYXRpb24tbmFtZTogZGFzaDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG59XFxuXFxuLm1lbnUtdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA2OS41JSBhdCAycHggOXB4KTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcC1jaXJjbGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5tZW51LXRvcCAubWVudS1pdGVtcy1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCA2MHB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiAyJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tZW51LXRvcCAubWVudS1pdGVtcy1jb250YWluZXIgPiBwe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW1zLWNvbnRhaW5lciAubWVudS1waWN7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtcy1jb250YWluZXIgLm1lbnUtcGljID4gc3Zne1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtcy1jb250YWluZXIgPiBwOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5tZW51LWl0ZW1zLWNvbnRhaW5lciA+ICp7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBtZW51LWl0ZW1zLWFuaW1hdGlvbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG5cXG4ubWVudS1idG0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICM5RDRFREQ7XFxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDcwJSBhdCA0MHB4IDlweCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1pZC1jaXJjbGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5tZW51LW1vZGFse1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIGxlZnQpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb2RhbC1hbmltYXRpb247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcbi5tZW51Lm1lbnUtc2hvd3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1zaG93IHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBtZW51LXNob3c7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLm1lbnUtcmVtb3Zle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZS1tZW51LXRvcHtcXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICBhbmltYXRpb24tbmFtZTogaGlkZS10b3AtY2lyY2xlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uaGlkZS1tZW51LWJ0bXtcXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICBhbmltYXRpb24tbmFtZTogaGlkZS1idG0tY2lyY2xlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ubWVudS1tb2RhbC1oaWRle1xcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgwcHggYXQgdG9wIGxlZnQpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1lbnUtbW9kYWwtaGlkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgXFxufVxcblxcblxcbi5oaWRlLW1lbnUtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjN0IyQ0JGO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcm9zcy1pY29uIHtcXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XFxufVxcblxcbi5zaG93LWhpZGUtYnRuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3ctaGlkZS1idG47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuXFxuLnJlbW92ZS1oaWRlLWJ0biB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByZW1vdmUtaGlkZS1idG47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuXFxuQGtleWZyYW1lcyBtZW51LXNob3cge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3ctaGlkZS1idG4ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGFzaCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MDA7XFxuICAgIH1cXG4gICAgNDAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7XFxuICAgIH1cXG4gICAgNjAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMDA7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRvcC1jaXJjbGUge1xcbiAgICAwJSB7XFxuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMHB4IDBweCBhdCAwcHggMHB4KTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgNjkuNSUgYXQgMnB4IDlweCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtaWQtY2lyY2xlIHtcXG4gICAgMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDBweCAwcHggYXQgMHB4IDBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTAwJSA3MCUgYXQgNDBweCA5cHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbW9kYWwtYW5pbWF0aW9uIHtcXG4gICAgMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMHB4IGF0IHRvcCBsZWZ0KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIGxlZnQpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbWVudS1pdGVtcy1hbmltYXRpb24ge1xcbiAgICAwJXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUtdG9wLWNpcmNsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMDAlIDY5LjUlIGF0IDJweCA5cHgpO1xcbiAgICBcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaGlkZS1idG0tY2lyY2xlIHtcXG4gICAgMCUge1xcbiAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDEwMCUgNzAlIGF0IDQwcHggOXB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSgwcHggMHB4IGF0IDBweCAwcHgpO1xcbiAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByZW1vdmUtaGlkZS1idG4ge1xcbiAgICAwJXtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTBweCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtZW51LW1vZGFsLWhpZGUge1xcbiAgICAwJXtcXG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIGxlZnQpO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKCgwcHggYXQgdG9wIGxlZnQpKTtcXG4gICAgICAgIFxcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcXG4gICAgLndyYXBwZXJ7XFxuICAgICAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgfVxcbn0gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbWVudVN0eWxlLmNzc1wiO1xuXG4vLyBET01cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4vLyBQQUdFIEhFQURFUlxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG53cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4vLyBNRU5VIEJUTlxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5tZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbm1lbnVCdG4uaW5uZXJIVE1MID0nPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwXCIgeT1cIjBcIiBjbGFzcz1cIm1lbnUtaWNvblwiIHZpZXdCb3g9XCIwIDAgNDAgNjBcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxzd2l0Y2g+PGc+PHBhdGggaWQ9XCJidG0tbGluZVwiIGNsYXNzPVwic3QwXCIgZD1cIk0yIDE3LjcyaDM2XCIvPjxwYXRoIGlkPVwibWlkLWxpbmVcIiBjbGFzcz1cInN0MFwiIGQ9XCJNMzggMzBIMlwiLz48cGF0aCBpZD1cInRvcC1saW5lXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTIgNDIuMjhoMzZcIi8+PC9nPjwvc3dpdGNoPjwvc3ZnPic7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4vLyBIRUFERVIgSEVBRElOR1xuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51IERlc2lnblwiXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4vLyBNQUlOIEJPRFlcbmNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQm9keS5jbGFzc0xpc3QuYWRkKCdtYWluLWJvZHknKTtcbmNvbnN0IG1haW5Cb2R5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbm1haW5Cb2R5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4tYm9keS1oZWFkZXInKTtcbm1haW5Cb2R5SGVhZGVyLnRleHRDb250ZW50ID0gJ0xvcmVtIElwc3VtJztcbi8vIE1BSU4gQk9EWSBDT05URU5UXG5jb25zdCBtYWluQm9keUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Cb2R5Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWJvZHktY29udGVudCcpO1xuXG5jb25zdCBtYWluQm9keVBhcmFncmFwaE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1haW5Cb2R5UGFyYWdyYXBoT25lLnRleHRDb250ZW50ID0gJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0JztcbmNvbnN0IG1haW5Cb2R5UGFyYWdyYXBoVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubWFpbkJvZHlQYXJhZ3JhcGhUd28udGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQnO1xuY29uc3QgbWFpbkJvZHlQYXJhZ3JhcGhUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1haW5Cb2R5UGFyYWdyYXBoVGhyZWUudGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQnO1xuY29uc3QgbWFpbkJvZHlQYXJhZ3JhcGhGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubWFpbkJvZHlQYXJhZ3JhcGhGb3VyLnRleHRDb250ZW50ID0gJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0JztcblxubWFpbkJvZHlDb250ZW50LmFwcGVuZENoaWxkKG1haW5Cb2R5UGFyYWdyYXBoT25lKTtcbm1haW5Cb2R5Q29udGVudC5hcHBlbmRDaGlsZChtYWluQm9keVBhcmFncmFwaFR3byk7XG5tYWluQm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkJvZHlQYXJhZ3JhcGhUaHJlZSk7XG5tYWluQm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkJvZHlQYXJhZ3JhcGhGb3VyKTtcblxubWFpbkJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHlIZWFkZXIpO1xubWFpbkJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHlDb250ZW50KTtcblxud3JhcHBlci5hcHBlbmRDaGlsZChtYWluQm9keSk7XG5cbi8vIE1FTlVcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtcmVtb3ZlJyk7XG5jb25zdCBtZW51VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51VG9wLmNsYXNzTGlzdC5hZGQoJ21lbnUtdG9wJyk7XG5jb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZW51SXRlbkNvbnRhaW5lcicpO1xubWVudUl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMtY29udGFpbmVyJyk7XG5jb25zdCBtZW51SXRlbU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVJdGVtT25lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5jb25zdCBtZW51SXRlbVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVJdGVtVHdvLnRleHRDb250ZW50ID0gXCJGZWVkYmFja1wiO1xuY29uc3QgbWVudUl0ZW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVJdGVtVGhyZWUudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG5jb25zdCBtZW51SXRlbUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5tZW51SXRlbUZvdXIudGV4dENvbnRlbnQgPSBcIkxvZ291dFwiO1xuXG5cbmNvbnN0IG1lbnVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVQaWMuY2xhc3NMaXN0LmFkZCgnbWVudS1waWMnKTtcbm1lbnVQaWMuaW5uZXJIVE1MID0gJzxzdmcgZmlsbD1cIiMwMDBcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTYgMTUuNTAzQTUuMDQxIDUuMDQxIDAgMSAwIDE2IDUuNDJhNS4wNDEgNS4wNDEgMCAwIDAgMCAxMC4wODN6bTAgMi4yMTVjLTYuNzAzIDAtMTEgMy42OTktMTEgNS41djMuMzYzaDIydi0zLjM2M2MwLTIuMTc4LTQuMDY4LTUuNS0xMS01LjV6XCIvPjwvc3ZnPic7XG5tZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1PbmUpO1xubWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtVHdvKTtcbm1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbVRocmVlKTtcbm1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUZvdXIpO1xubWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQaWMpO1xuXG5tZW51VG9wLmFwcGVuZENoaWxkKG1lbnVJdGVtc0NvbnRhaW5lcik7XG5cbmNvbnN0IG1lbnVCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVCb3R0b20uY2xhc3NMaXN0LmFkZCgnbWVudS1idG0nKTtcbmNvbnN0IG1lbnVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudU1vZGFsLmNsYXNzTGlzdC5hZGQoJ21lbnUtbW9kYWwnKTtcblxubWVudS5hcHBlbmRDaGlsZChtZW51VG9wKTtcbm1lbnUuYXBwZW5kQ2hpbGQobWVudUJvdHRvbSk7XG5tZW51LmFwcGVuZENoaWxkKG1lbnVNb2RhbCk7XG5cblxuY29uc3QgaGlkZU1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmhpZGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUtbWVudS1idG4nKTtcbmhpZGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1oaWRlLWJ0bicpO1xuaGlkZU1lbnVCdG4uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJjcm9zcy1pY29uXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHN3aXRjaD48ZyBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIj48cGF0aCBkPVwiTTEwIDI5LjE5IDMwIDlcIi8+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTMwIDI5LjE5IDEwIDlcIi8+PC9nPjwvc3dpdGNoPjwvc3ZnPic7XG5tZW51LmFwcGVuZENoaWxkKGhpZGVNZW51QnRuKTtcblxud3JhcHBlci5hcHBlbmRDaGlsZChtZW51KTtcblxuZnVuY3Rpb24gc2hvd01lbnUoKXtcbiAgXG4gIC8vIG1haW4gbWVudSBjb250YWluZXJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWhpZGUtdmlzdWFsbHknKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXJlbW92ZScpO1xuICAvLyBtZW51IHRvcFxuICBtZW51VG9wLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLW1lbnUtdG9wXCIpO1xuICAvLyBtZW51IGJvdHRvbVxuICBtZW51Qm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLW1lbnUtYnRtXCIpO1xuICAvLyBtZW51IG1vZGFsXG4gIG1lbnVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1tb2RhbC1oaWRlXCIpO1xuICBcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcbiAgaGlkZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlLWhpZGUtYnRuJyk7XG4gIGhpZGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3ctaGlkZS1idG4nKTtcbn1cblxuZnVuY3Rpb24gaGlkZU1lbnUoKXtcblxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xuICBoaWRlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWhpZGUtYnRuJyk7XG4gIGhpZGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1oaWRlLWJ0bicpO1xuICBtZW51VG9wLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW1lbnUtdG9wXCIpO1xuICBtZW51Qm90dG9tLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW1lbnUtYnRtXCIpO1xuICBtZW51TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1lbnUtbW9kYWwtaGlkZVwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWhpZGUtdmlzdWFsbHknKTtcblxuXG4gIHNldFRpbWVvdXQoKCk9PntcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtcmVtb3ZlJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bi1zaG93Jyk7XG4gIH0sIDEwMDApO1xuXG59XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XG5oaWRlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNZW51KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=