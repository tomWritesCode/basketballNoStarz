webpackHotUpdate("static/development/pages/teamboard.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-template-rows: repeat(5, auto);\n  font-family: sans-serif;\n\n  .Players{\n    width: 100%;\n    display: block;\n    margin: 0 auto;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    text-align: center;\n\n    .editMode{\n      margin-top: -1px;\n      height: calc( 100vh - 90px);\n      width: 100vw;\n      background-color: #2c3965;\n      color: white;\n    }\n\n    .Player1{\n      font-size: 20px;\n      display: grid;\n      grid-template-columns: 50% 50%;\n      align-self: center;\n      align-items: center;\n      text-align: center;\n      grid-column-start: 1;\n      grid-column-end: 3;\n\n      input{\n        margin-left: 10px;\n      }\n      .viewMode{\n        height: 5px;\n        z-index: -10;\n      }\n    }\n    button{\n      grid-column-start: 1;\n      grid-column-end: 3;\n      width: 150px; \n      height: 30px;\n      margin: 40px auto 0 auto;\n    }\n  }\n  \n  .title{\n    grid-column-start: 1;\n    grid-column-end: 3;\n    text-align: center;\n  }\n\n  .name{\n    min-height: 40px;\n    font-size: 30px;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n\t.team1, .team2 {\n\t\tgrid-column-start: 0;\n\t\twidth: 100%;\n\t\ttext-align: center;\n    grid-row-start: 2;\n\n    .score{\n      font-weight: bold;\n      font-family: sans-serif;\n      font-size: 100px;\n      margin-top: 10px;\n      margin-bottom: 30px;\n    }\n\t\t.scoreButtons {\n      width: 100%;\n      display: grid;\n      grid-template-columns: repeat(5, 19.5%);\n      grid-template-rows: repeat(3, 80px);\n      grid-gap: 3px;\n      margin-bottom: 40px;\n\n      .Team1Score, .Team2Score{\n        padding: 0;\n        grid-column-start: 2;\n        grid-column-end: 5;\n        font-size: 36px;\n      }\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ScoreBoard = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
var RemoveScore = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2());
var ResetButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].button(_templateObject3());
var Stats = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject4());
var PlayerStats = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject5());
var Head2Head = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject6());
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "P1Name", function (e) {
      _this.setState({
        P1NAME: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "P2Name", function (e) {
      _this.setState({
        P2NAME: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "Players", function (e) {
      var players = e.target.value;

      _this.setState({
        PLAYERS: players
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
    key: "renderInputField",
    value: function renderInputField() {
      if (this.state.MODE === 'view') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "viewMode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "editMode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          name: "Teams",
          id: "Teams",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "2v2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, "2 - 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "3v3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          },
          __self: this
        }, "3 - 3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "4v4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        }, "4 - 4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          value: "5v5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          },
          __self: this
        }, "5 - 5")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_TeamBoardStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 407
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          className: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, "Team 1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player1,
          placeholder: this.T1Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        }, "Player 2: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P1Name,
          value: this.T1Player2,
          placeholder: this.T1Player2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "Team2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          },
          __self: this
        }, "Team 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "PlayersList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player1,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437
          },
          __self: this
        }, "Player 1: "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          onChange: this.P2Name,
          value: this.T2Player2,
          placeholder: this.T2Player1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438
          },
          __self: this
        })))), this.renderButton());
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
            lineNumber: 455
          },
          __self: this
        }, "Edit Player Names");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.handleSave,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 461
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
            lineNumber: 478
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          },
          __self: this
        }, "Deduct from: ", this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          class: "teamSelected",
          onClick: this.teamSelect1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480
          },
          __self: this
        }, this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.teamSelect2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          },
          __self: this
        }, this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deductBtn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamOneDeduct3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 484
          },
          __self: this
        }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamOneDeduct2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          },
          __self: this
        }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamOneDeduct1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          },
          __self: this
        }, "1")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deduction",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 493
          },
          __self: this
        }, "Deduct from: ", this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: this.teamSelect1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          class: "teamSelected",
          onClick: this.teamSelect2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 495
          },
          __self: this
        }, this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "deductBtn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 497
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamTwoDeduct3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamTwoDeduct2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          },
          __self: this
        }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "scoreDeduction",
          onClick: this.TeamTwoDeduct1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
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
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ScoreBoard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Players",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Player1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, this.renderInputField()), this.renderButton()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "team1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, this.state.P1NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_scoreBoardAnimate_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "score",
        id: "TeamOneScore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, " ", this.state.P1SCORE, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "scoreButtons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team1Score",
        type: "button",
        onClick: this.TeamOne3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team1Score",
        type: "button",
        onClick: this.TeamOne2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team1Score",
        type: "button",
        onClick: this.TeamOne1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "1"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "team2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_assets_scoreBoardAnimate_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "score",
        id: "TeamTwoScore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, " ", this.state.P2SCORE, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "scoreButtons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team2Score",
        type: "button",
        onClick: this.TeamTwo3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team2Score",
        type: "button",
        onClick: this.TeamTwo2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "Team2Score",
        type: "button",
        onClick: this.TeamTwo1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "1"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RemoveScore, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, this.renderTeam()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Stats, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PlayerStats, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "P1Stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, this.state.P1NAME, "'s Point Breakdown"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, "3's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P1BOX3 / this.state.P1SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, "2's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P1BOX2 / this.state.P1SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, "1's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P1BOX1 / this.state.P1SCORE * 100)) || 0, "%")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "P2Stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, this.state.P2NAME, "'s Point Breakdown"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, "3's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P2BOX3 / this.state.P2SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, "2's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P2BOX2 / this.state.P2SCORE * 100)) || 0, "%"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "1's: ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(this.state.P2BOX1 / this.state.P2SCORE * 100)) || 0, "%"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Head2Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, this.state.P1NAME, " VS ", this.state.P2NAME), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, "3's: ", this.state.P1BOX3 / 3, " : ", this.state.P2BOX3 / 3), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "2's: ", this.state.P1BOX2 / 2, " : ", this.state.P2BOX2 / 2), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, "1's: ", this.state.P1BOX1, " : ", this.state.P2BOX1))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ResetButton, {
        type: "button",
        onClick: this.Reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, "Reset"));
    }
  }]);

  return TeamBoard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TeamBoard);

/***/ })

})
//# sourceMappingURL=teamboard.js.759d1297cd189816bd8c.hot-update.js.map