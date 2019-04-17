module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/thomaswhitaker/Desktop/Code/Basketball/basketballNoStarz/Components/Header.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 0;\n  color: white;\n  font-family: sans-serif;\n\n  img{\n    height: 60px;\n    margin-bottom: 0\n  }\n  .left{\n    margin-right: 20px;\n  }\n  .right{\n    margin-left: 20px;\n  }\n\n  @media(max-width: 500px){\n    font-size: 18px;\n\n    img{\n      max-height: 40px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject());

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    style: {
      background: "#2c3965",
      textAlign: "center",
      height: '90px',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "0 auto",
      padding: "1.45rem 1.0875rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/icon.png",
    style: {
      height: '60px'
    },
    className: "left",
    alt: "Basketball",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "Basketball NoStarz", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/icon.png",
    style: {
      height: '60px'
    },
    className: "right",
    alt: "Basketball",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/Meta.js":
/*!****************************!*\
  !*** ./Components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomaswhitaker/Desktop/Code/Basketball/basketballNoStarz/Components/Meta.js";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "NoStarz"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./Components/Page.js":
/*!****************************!*\
  !*** ./Components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./Components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Meta */ "./Components/Meta.js");






var _jsxFileName = "/Users/thomaswhitaker/Desktop/Code/Basketball/basketballNoStarz/Components/Page.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n                html {\n                  box-sizing: border-box;\n                  font-size: 10px;\n                }\n                *, *:before, *:after {\n                  box-sizing: inherit;\n                }\n                body {\n                  padding: 0;\n                  margin: 0;\n                  font-size: 1.5rem;\n                  line-height: 2;\n                }\n              "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  max-width: 100vw;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  background: white;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject(), function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2());

var Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["Global"], {
        styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject3()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./Components/TeamBoard.js":
/*!*********************************!*\
  !*** ./Components/TeamBoard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_scoreBoardAnimate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/scoreBoardAnimate.js */ "./assets/scoreBoardAnimate.js");
/* harmony import */ var _assets_TeamBoardStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/TeamBoardStyle */ "./assets/TeamBoardStyle.js");









var _jsxFileName = "/Users/thomaswhitaker/Desktop/Code/Basketball/basketballNoStarz/Components/TeamBoard.js";

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  text-align: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  display: grid;\n  grid-template-columns: 50% 50%;\n  text-align: center;\n\n  @media(max-width: 450px){\n    grid-template-columns: 100%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  margin-top: 20px; \n  font-family: sans-serif;\n\n  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  font-family: sans-serif;\n  height: 40px;\n  width: 120px;\n  display: block;\n  margin: 0 auto;\n  font-size: 20px;\n  margin-bottom: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  text-align: center;\n  font-family: sans-serif;\n  font-weight: bold;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: background-repeat(3,100px);\n  \n  h3{\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n  }\n  button{\n    width: 120px;\n    height: 40px;\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n  }\n  .scoreDeduction{\n    width: 60px;\n    height: 40px;\n  }\n\n  .teamSelected{\n    background-color: #2c3965;\n    color: white;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-template-rows: repeat(5, auto);\n  font-family: sans-serif;\n\n  .Players{\n    width: 100%;\n    display: block;\n    margin: 0 auto;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    text-align: center;\n\n    .editMode{\n      margin-top: -1px;\n      height: calc( 100vh - 90px);\n      width: 98.3vw;\n      background-color: #2c3965;\n      color: white;\n    }\n\n    .Player1{\n      font-size: 20px;\n      display: grid;\n      grid-template-columns: 50% 50%;\n      align-self: center;\n      align-items: center;\n      text-align: center;\n      grid-column-start: 1;\n      grid-column-end: 3;\n\n      input{\n        margin-left: 10px;\n      }\n      .viewMode{\n        height: 5px;\n        z-index: -10;\n      }\n    }\n    button{\n      grid-column-start: 1;\n      grid-column-end: 3;\n      width: 150px; \n      height: 30px;\n      margin: 40px auto 0 auto;\n    }\n  }\n  \n  .title{\n    grid-column-start: 1;\n    grid-column-end: 3;\n    text-align: center;\n  }\n\n  .name{\n    min-height: 40px;\n    font-size: 30px;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n\t.team1, .team2 {\n\t\tgrid-column-start: 0;\n\t\twidth: 100%;\n\t\ttext-align: center;\n    grid-row-start: 2;\n\n    .score{\n      font-weight: bold;\n      font-family: sans-serif;\n      font-size: 100px;\n      margin-top: 10px;\n      margin-bottom: 30px;\n    }\n\t\t.scoreButtons {\n      width: 100%;\n      display: grid;\n      grid-template-columns: repeat(5, 19.5%);\n      grid-template-rows: repeat(3, 80px);\n      grid-gap: 3px;\n      margin-bottom: 40px;\n\n      .Team1Score, .Team2Score{\n        padding: 0;\n        grid-column-start: 2;\n        grid-column-end: 5;\n        font-size: 36px;\n      }\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ScoreBoard = _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject());
var RemoveScore = _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject2());
var ResetButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default.a.button(_templateObject3());
var Stats = _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject4());
var PlayerStats = _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject5());
var Head2Head = _emotion_styled__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject6());
var TeamOne = 'TeamOneScore';
var TeamTwo = 'TeamTwoScore';

function ScoreAnimate(TEAM) {
  document.getElementById(TEAM).classList.add('bucket');
  setTimeout(function () {
    document.getElementById(TEAM).classList.remove('bucket');
  }, 1500);
} // THIS IS STATE!!!!


var TeamBoard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TeamBoard, _Component);

  function TeamBoard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TeamBoard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TeamBoard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamOne3", function () {
      _this.setState({
        P1SCORE: _this.state.P1SCORE + 3
      });

      _this.setState({
        P1BOX3: _this.state.P1BOX3 + 3
      });

      ScoreAnimate(TeamOne);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamOneDeduct3", function () {
      _this.setState({
        P1SCORE: _this.state.P1SCORE - 3
      });

      _this.setState({
        P1BOX3: _this.state.P1BOX3 - 3
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamOne2", function () {
      _this.setState({
        P1SCORE: _this.state.P1SCORE + 2
      });

      _this.setState({
        P1BOX2: _this.state.P1BOX2 + 2
      });

      ScoreAnimate(TeamOne);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamOneDeduct2", function () {
      _this.setState({
        P1SCORE: _this.state.P1SCORE - 2
      });

      _this.setState({
        P1BOX2: _this.state.P1BOX2 - 2
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamOne1", function () {
      _this.setState({
        P1SCORE: _this.state.P1SCORE + 1
      });

      _this.setState({
        P1BOX1: _this.state.P1BOX1 + 1
      });

      ScoreAnimate(TeamOne);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamOneDeduct1", function () {
      _this.setState({
        P1SCORE: _this.state.P1SCORE - 1
      });

      _this.setState({
        P1BOX1: _this.state.P1BOX1 - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamTwo3", function () {
      _this.setState({
        P2SCORE: _this.state.P2SCORE + 3
      });

      _this.setState({
        P2BOX3: _this.state.P2BOX3 + 3
      });

      ScoreAnimate(TeamTwo);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamTwoDeduct3", function () {
      _this.setState({
        P2SCORE: _this.state.P2SCORE - 3
      });

      _this.setState({
        P2BOX3: _this.state.P2BOX3 - 3
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamTwo2", function () {
      _this.setState({
        P2SCORE: _this.state.P2SCORE + 2
      });

      _this.setState({
        P2BOX2: _this.state.P2BOX2 + 2
      });

      ScoreAnimate(TeamTwo);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamTwoDeduct2", function () {
      _this.setState({
        P2SCORE: _this.state.P2SCORE - 2
      });

      _this.setState({
        P2BOX2: _this.state.P2BOX2 - 2
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamTwo1", function () {
      _this.setState({
        P2SCORE: _this.state.P2SCORE + 1
      });

      _this.setState({
        P2BOX1: _this.state.P2BOX1 + 1
      });

      ScoreAnimate(TeamTwo);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "TeamTwoDeduct1", function () {
      _this.setState({
        P2SCORE: _this.state.P2SCORE - 1
      });

      _this.setState({
        P2BOX1: _this.state.P2BOX1 - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "Reset", function () {
      _this.setState({
        P1NAME: 'Team 1',
        T1Player1: 'Player 1',
        T1Player2: 'Player 2',
        T1Player3: 'Player 3',
        T1Player4: 'Player 4',
        T1Player5: 'Player 5',
        P2NAME: 'Team 2',
        T2Player1: 'Player 1',
        T2Player2: 'Player 2',
        T2Player3: 'Player 3',
        T2Player4: 'Player 4',
        T2Player5: 'Player 5',
        P1SCORE: 0,
        P2SCORE: 0,
        P1BOX3: 0,
        P1BOX2: 0,
        P1BOX1: 0,
        T1P1BOX3: 0,
        T1P1BOX2: 0,
        T1P1BOX1: 0,
        T1P2BOX3: 0,
        T1P2BOX2: 0,
        T1P2BOX1: 0,
        T1P3BOX3: 0,
        T1P3BOX2: 0,
        T1P3BOX1: 0,
        T1P4BOX3: 0,
        T1P4BOX2: 0,
        T1P4BOX1: 0,
        T1P5BOX3: 0,
        T1P5BOX2: 0,
        T1P5BOX1: 0,
        P2BOX3: 0,
        P2BOX2: 0,
        P2BOX1: 0,
        T2P1BOX3: 0,
        T2P1BOX2: 0,
        T2P1BOX1: 0,
        T2P2BOX3: 0,
        T2P2BOX2: 0,
        T2P2BOX1: 0,
        T2P3BOX3: 0,
        T2P3BOX2: 0,
        T2P3BOX1: 0,
        T2P4BOX3: 0,
        T2P4BOX2: 0,
        T2P4BOX1: 0,
        T2P5BOX3: 0,
        T2P5BOX2: 0,
        T2P5BOX1: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "T1P1Name", function (e) {
      _this.setState({
        T1Player1: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "T1P2Name", function (e) {
      _this.setState({
        T1Player2: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "T1P3Name", function (e) {
      _this.setState({
        T1Player3: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "T1P5Name", function (e) {
      _this.setState({
        T1Player5: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "T1P5Name", function (e) {
      _this.setState({
        T1Player5: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "P2Name", function (e) {
      _this.setState({
        P2NAME: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSave", function () {
      if (_this.state.INPUT1 === '') {
        _this.setState({
          INPUT1: 'Player 1',
          MODE: 'view'
        });
      } else {
        _this.setState({
          P1NAME: _this.state.INPUT1,
          P2NAME: _this.state.INPUT2,
          MODE: 'view'
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEdit", function () {
      _this.setState({
        MODE: 'edit'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "Players", function (e) {
      _this.setState({
        PLAYERS: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "teamSelect1", function () {
      _this.setState({
        TEAMSELECT: 'Team1'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "teamSelect2", function () {
      _this.setState({
        TEAMSELECT: 'Team2'
      });
    });

    _this.state = {
      PLAYERS: '2v2',
      P1NAME: 'Team 1',
      T1Player1: 'Player 1',
      T1Player2: 'Player 2',
      T1Player3: 'Player 3',
      T1Player4: 'Player 4',
      T1Player5: 'Player 5',
      P2NAME: 'Team 2',
      T2Player1: 'Player 1',
      T2Player2: 'Player 2',
      T2Player3: 'Player 3',
      T2Player4: 'Player 4',
      T2Player5: 'Player 5',
      P1SCORE: 0,
      P2SCORE: 0,
      P1BOX3: 0,
      P1BOX2: 0,
      P1BOX1: 0,
      T1P1BOX3: 0,
      T1P1BOX2: 0,
      T1P1BOX1: 0,
      T1P2BOX3: 0,
      T1P2BOX2: 0,
      T1P2BOX1: 0,
      T1P3BOX3: 0,
      T1P3BOX2: 0,
      T1P3BOX1: 0,
      T1P4BOX3: 0,
      T1P4BOX2: 0,
      T1P4BOX1: 0,
      T1P5BOX3: 0,
      T1P5BOX2: 0,
      T1P5BOX1: 0,
      P2BOX3: 0,
      P2BOX2: 0,
      P2BOX1: 0,
      T2P1BOX3: 0,
      T2P1BOX2: 0,
      T2P1BOX1: 0,
      T2P2BOX3: 0,
      T2P2BOX2: 0,
      T2P2BOX1: 0,
      T2P3BOX3: 0,
      T2P3BOX2: 0,
      T2P3BOX1: 0,
      T2P4BOX3: 0,
      T2P4BOX2: 0,
      T2P4BOX1: 0,
      T2P5BOX3: 0,
      T2P5BOX2: 0,
      T2P5BOX1: 0,
      MODE: 'edit',
      INPUT1: '',
      INPUT2: '',
      TEAMSELECT: 'Team1'
    };
    return _this;
  } // THIS IS STATE!!!


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TeamBoard, [{
    key: "renderTeams",
    value: function renderTeams() {
      if (this.state.PLAYERS === "2") {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_TeamBoardStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          className: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, "Team 1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }, this.state.T1Player1 === '' ? 'Player 1:' : this.state.T1Player1, ":"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.T1P1Name,
          value: this.T1Player1,
          placeholder: this.state.T1Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.T1P2Name,
          value: this.T1Player2,
          placeholder: this.state.T1Player2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          },
          __self: this
        }, "Team 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player1,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player2,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }))));
      } else if (this.state.PLAYERS === "3") {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_TeamBoardStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          className: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 453
          },
          __self: this
        }, "Team 1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.T1P1Name,
          value: this.T1Player1,
          placeholder: this.T1Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 463
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.T1P2Name,
          value: this.T1Player2,
          placeholder: this.T1Player2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, "Player 3: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.T1P3Name,
          value: this.T1Player3,
          placeholder: this.T1Player3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 477
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, "Team 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player1,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player2,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 489
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, "Player 3: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player3,
          placeholder: this.T2Player3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 495
          },
          __self: this
        }))));
      } else if (this.state.PLAYERS === "4") {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_TeamBoardStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 506
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 507
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          className: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 508
          },
          __self: this
        }, "Team 1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 511
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 512
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.T1P1Name,
          value: this.T1Player1,
          placeholder: this.T1Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player2,
          placeholder: this.T1Player2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524
          },
          __self: this
        }, "Player 3: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player3,
          placeholder: this.T1Player3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 530
          },
          __self: this
        }, "Player 4: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player4,
          placeholder: this.T1Player4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539
          },
          __self: this
        }, "Team 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 543
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player1,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 549
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player2,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555
          },
          __self: this
        }, "Player 3: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player3,
          placeholder: this.T2Player3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 561
          },
          __self: this
        }, "Player 4: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player4,
          placeholder: this.T2Player4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 562
          },
          __self: this
        }))));
      } else if (this.state.PLAYERS === "5") {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_TeamBoardStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          className: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575
          },
          __self: this
        }, "Team 1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player1,
          placeholder: this.T1Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 585
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player2,
          placeholder: this.T1Player2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 591
          },
          __self: this
        }, "Player 3: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player3,
          placeholder: this.T1Player3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, "Player 4: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player4,
          placeholder: this.T1Player4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603
          },
          __self: this
        }, "Player 5: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player5,
          placeholder: this.T1Player5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 604
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          },
          __self: this
        }, "Team 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 616
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player1,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 617
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 622
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player2,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          },
          __self: this
        }, "Player 3: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player3,
          placeholder: this.T2Player3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 629
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 634
          },
          __self: this
        }, "Player 4: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player4,
          placeholder: this.T2Player4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 635
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 640
          },
          __self: this
        }, "Player 5: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player5,
          placeholder: this.T2Player5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 641
          },
          __self: this
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 651
          },
          __self: this
        });
      }
    }
  }, {
    key: "renderInputField",
    value: function renderInputField() {
      if (this.state.MODE === 'view') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "viewMode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "editMode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 660
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          name: "Teams",
          id: "Teams",
          onChange: this.Players.bind(this),
          value: this.state.PLAYERS,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 661
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 662
          },
          __self: this
        }, "Select Team Size"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 663
          },
          __self: this
        }, "2 - 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 664
          },
          __self: this
        }, "3 - 3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 665
          },
          __self: this
        }, "4 - 4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 666
          },
          __self: this
        }, "5 - 5")), this.renderTeams(), this.renderButton());
      }
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (this.state.MODE === 'view') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.handleEdit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          },
          __self: this
        }, "Edit Player Names");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.handleSave,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 684
          },
          __self: this
        }, "Save Player Names");
      }
    }
  }, {
    key: "renderTeam",
    value: function renderTeam() {
      if (this.state.TEAMSELECT === 'Team1') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deduction",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 701
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 702
          },
          __self: this
        }, "Deduct from: ", this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          class: "teamSelected",
          onClick: this.teamSelect1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 703
          },
          __self: this
        }, this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.teamSelect2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 704
          },
          __self: this
        }, this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deductBtn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 706
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamOneDeduct3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 707
          },
          __self: this
        }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamOneDeduct2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 708
          },
          __self: this
        }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamOneDeduct1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 709
          },
          __self: this
        }, "1")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deduction",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 715
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 716
          },
          __self: this
        }, "Deduct from: ", this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.teamSelect1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717
          },
          __self: this
        }, this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          class: "teamSelected",
          onClick: this.teamSelect2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 718
          },
          __self: this
        }, this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deductBtn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamTwoDeduct3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          },
          __self: this
        }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamTwoDeduct2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 722
          },
          __self: this
        }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamTwoDeduct1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 723
          },
          __self: this
        }, "1")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_scoreBoardAnimate_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ScoreBoard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Players",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Player1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736
        },
        __self: this
      }, this.renderInputField()), this.renderButton()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "team1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743
        },
        __self: this
      }, this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_scoreBoardAnimate_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "score",
        id: "TeamOneScore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744
        },
        __self: this
      }, " ", this.state.P1SCORE, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "scoreButtons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team1Score",
        type: "button",
        onClick: this.TeamOne3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team1Score",
        type: "button",
        onClick: this.TeamOne2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team1Score",
        type: "button",
        onClick: this.TeamOne1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        },
        __self: this
      }, "1"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "team2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }, this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_scoreBoardAnimate_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "score",
        id: "TeamTwoScore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755
        },
        __self: this
      }, " ", this.state.P2SCORE, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "scoreButtons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team2Score",
        type: "button",
        onClick: this.TeamTwo3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team2Score",
        type: "button",
        onClick: this.TeamTwo2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team2Score",
        type: "button",
        onClick: this.TeamTwo1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760
        },
        __self: this
      }, "1"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RemoveScore, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767
        },
        __self: this
      }, this.renderTeam()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Stats, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PlayerStats, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "P1Stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        },
        __self: this
      }, this.state.P1NAME, "'s Point Breakdown"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        __self: this
      }, "3's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P1BOX3 / this.state.P1SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        __self: this
      }, "2's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P1BOX2 / this.state.P1SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        __self: this
      }, "1's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P1BOX1 / this.state.P1SCORE * 100)) || 0, "%")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "P2Stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780
        },
        __self: this
      }, this.state.P2NAME, "'s Point Breakdown"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781
        },
        __self: this
      }, "3's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P2BOX3 / this.state.P2SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        __self: this
      }, "2's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P2BOX2 / this.state.P2SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783
        },
        __self: this
      }, "1's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P2BOX1 / this.state.P2SCORE * 100)) || 0, "%"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Head2Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        __self: this
      }, this.state.P1NAME, " VS ", this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788
        },
        __self: this
      }, "3's: ", this.state.P1BOX3 / 3, " : ", this.state.P2BOX3 / 3), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789
        },
        __self: this
      }, "2's: ", this.state.P1BOX2 / 2, " : ", this.state.P2BOX2 / 2), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790
        },
        __self: this
      }, "1's: ", this.state.P1BOX1, " : ", this.state.P2BOX1))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ResetButton, {
        type: "button",
        onClick: this.Reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795
        },
        __self: this
      }, "Reset"));
    }
  }]);

  return TeamBoard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TeamBoard);

/***/ }),

/***/ "./assets/TeamBoardStyle.js":
/*!**********************************!*\
  !*** ./assets/TeamBoardStyle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: 50% 50%;\n  width: 100%;\n\n\n  .Team1{\n    grid-column-start: 1;\n    grid-column-end: 2;\n  }\n  .team{\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .PlayersList{\n    display: grid;\n    grid-template-columns: 25% 65%;\n    align-items: center;\n    align-self: center;\n\n    input{\n      height: 20px;\n    }\n\n    h4{\n      grid-column-start: 1;\n      grid-column-end: 2;\n      margin 5px 0;\n    }\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TeamGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (TeamGroup);

/***/ }),

/***/ "./assets/scoreBoardAnimate.js":
/*!*************************************!*\
  !*** ./assets/scoreBoardAnimate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n.bucket {\n  color: ghostwhite;\n  --borderWidth: 10px;\n  position: relative;\n  border-radius: var(--borderWidth);\n  max-width: 150px;\n  margin: 0 auto;\n  z-index: 10;\n}\n\n.bucket:after {\n  content: '';\n  position: absolute;\n  top: calc(-1 * var(--borderWidth));\n  left: calc(-1 * var(--borderWidth));\n  height: calc(100% + var(--borderWidth) * 2);\n  width: calc(100% + var(--borderWidth) * 2);\n  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n  border-radius: calc(2 * var(--borderWidth));\n  z-index: -1;\n  animation: animatedGradient 300ms ease alternate infinite;\n  background-size: 300% 300%;\n  -webkit-animation: animatedGradient 300ms ease alternate infinite;\n}\n\n\n@keyframes animatedGradient {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ScoreBoardAnimate = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ScoreBoardAnimate);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/teamboard.js":
/*!****************************!*\
  !*** ./pages/teamboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_TeamBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/TeamBoard */ "./Components/TeamBoard.js");
/* harmony import */ var _Components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Page */ "./Components/Page.js");
var _jsxFileName = "/Users/thomaswhitaker/Desktop/Code/Basketball/basketballNoStarz/pages/teamboard.js";




var TeamScoreboard = function TeamScoreboard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_TeamBoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamScoreboard);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/teamboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomaswhitaker/Desktop/Code/Basketball/basketballNoStarz/pages/teamboard.js */"./pages/teamboard.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=teamboard.js.map