webpackHotUpdate_N_E("pages/index",{

/***/ "./Layouts/DefaultLayout/index.jsx":
/*!*****************************************!*\
  !*** ./Layouts/DefaultLayout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/Users/tom/Documents/sites/tomWisePortfolio/putty/Layouts/DefaultLayout/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.withConfig({\n  displayName: \"DefaultLayout__Main\",\n  componentId: \"sc-1vxtm7p-0\"\n})([\"*{color:black;}\"]);\n_c = Main;\nvar DotWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"DefaultLayout__DotWrap\",\n  componentId: \"sc-1vxtm7p-1\"\n})([\"position:fixed;left:0;right:0;top:0;bottom:0;width:100vw;height:100vh;z-index:10;opacity:1 !important;visibility:visible !important;span{position:absolute;width:100px;height:100px;border-radius:50px;}\"]);\n_c2 = DotWrap;\n\nvar DefaultLayout = function DefaultLayout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      display = _ref.display,\n      className = _ref.className,\n      darkMode = _ref.darkMode;\n  var colors = [\"#3570a2\", \"#de8e47\", \"#ce4539\", \"#e6c544\", \"#397f5f\"];\n\n  function getRandomXPosition() {\n    return Math.round(-50 + Math.random() * 1500);\n  }\n\n  function getRandomYPosition() {\n    return Math.round(-500 + Math.random() * 1500);\n  }\n\n  function getRandomDuration() {\n    return 40 + Math.random() * 2 + \"s\";\n  }\n\n  function setInitialProperties(blobs, colors) {\n    blobs.forEach(function (theThing) {\n      var circleSize = Math.round(30 + Math.random() * 100);\n      var whichColorNumber = Math.floor(Math.random() * 4) + 1;\n      theThing.style.backgroundColor = colors[whichColorNumber];\n      theThing.style.width = circleSize + \"px\";\n      theThing.style.height = circleSize + \"px\";\n      theThing.style.borderRadius = 0.5 * circleSize + \"px\";\n    });\n  }\n\n  function moveBlob(blobs) {\n    blobs.forEach(function (theThing) {\n      theThing.style.transitionDuration = getRandomDuration();\n      theThing.style.transform = \"translate3d(\".concat(getRandomXPosition(), \"px, \").concat(getRandomYPosition(), \"px, 0px)\");\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var blobs = document.querySelectorAll(\".blob\");\n    setInitialProperties(blobs, colors);\n    var timeout = setTimeout(function () {\n      moveBlob(blobs);\n    }, getRandomDuration());\n    return function () {\n      return clearTimeout(timeout);\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    display: display,\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }), __jsx(Main, {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }), __jsx(DotWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlob();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlob();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlob();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DefaultLayout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c3 = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"DotWrap\");\n$RefreshReg$(_c3, \"DefaultLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0cy9EZWZhdWx0TGF5b3V0L2luZGV4LmpzeD8yZDIzIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZWQiLCJtYWluIiwiRG90V3JhcCIsImRpdiIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJkYXJrTW9kZSIsImNvbG9ycyIsImdldFJhbmRvbVhQb3NpdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldFJhbmRvbVlQb3NpdGlvbiIsImdldFJhbmRvbUR1cmF0aW9uIiwic2V0SW5pdGlhbFByb3BlcnRpZXMiLCJibG9icyIsImZvckVhY2giLCJ0aGVUaGluZyIsImNpcmNsZVNpemUiLCJ3aGljaENvbG9yTnVtYmVyIiwiZmxvb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibW92ZUJsb2IiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2Zvcm0iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsdUJBQVY7S0FBTUYsSTtBQU1OLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnTkFBYjtNQUFNRCxPOztBQW1CTixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdEO0FBQUE7O0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUFBLE1BQW5DQyxPQUFtQyxRQUFuQ0EsT0FBbUM7QUFBQSxNQUExQkMsU0FBMEIsUUFBMUJBLFNBQTBCO0FBQUEsTUFBZkMsUUFBZSxRQUFm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QUFBdUIsV0FBTyxFQUFFO0FBQUEsYUFBTW9CLFFBQVEsRUFBZDtBQUFBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFFBQVEsRUFBZDtBQUFBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFFBQVEsRUFBZDtBQUFBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUpGLENBREY7QUFZRCxDQWxERDs7R0FBTXhCLGE7O01BQUFBLGE7QUFvRFNBLDRFQUFmIiwiZmlsZSI6Ii4vTGF5b3V0cy9EZWZhdWx0TGF5b3V0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgKiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5jb25zdCBEb3RXcmFwID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTA7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuYDtcblxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IGNoaWxkcmVuLCBkaXNwbGF5LCBjbGFzc05hbWUsIGRhcmtNb2RlIH0pID0+IHtcbiAgY29uc3QgY29sb3JzID0gW1wiIzM1NzBhMlwiLCBcIiNkZThlNDdcIiwgXCIjY2U0NTM5XCIsIFwiI2U2YzU0NFwiLCBcIiMzOTdmNWZcIl07XG4gIGZ1bmN0aW9uIGdldFJhbmRvbVhQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgtNTAgKyBNYXRoLnJhbmRvbSgpICogMTUwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5kb21ZUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoLTUwMCArIE1hdGgucmFuZG9tKCkgKiAxNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUR1cmF0aW9uKCkge1xuICAgIHJldHVybiA0MCArIE1hdGgucmFuZG9tKCkgKiAyICsgXCJzXCI7XG4gIH1cbiAgZnVuY3Rpb24gc2V0SW5pdGlhbFByb3BlcnRpZXMoYmxvYnMsIGNvbG9ycykge1xuICAgIGJsb2JzLmZvckVhY2goKHRoZVRoaW5nKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVTaXplID0gTWF0aC5yb3VuZCgzMCArIE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3Qgd2hpY2hDb2xvck51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMTtcblxuICAgICAgdGhlVGhpbmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW3doaWNoQ29sb3JOdW1iZXJdO1xuICAgICAgdGhlVGhpbmcuc3R5bGUud2lkdGggPSBjaXJjbGVTaXplICsgXCJweFwiO1xuICAgICAgdGhlVGhpbmcuc3R5bGUuaGVpZ2h0ID0gY2lyY2xlU2l6ZSArIFwicHhcIjtcbiAgICAgIHRoZVRoaW5nLnN0eWxlLmJvcmRlclJhZGl1cyA9IDAuNSAqIGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbW92ZUJsb2IoYmxvYnMpIHtcbiAgICBibG9icy5mb3JFYWNoKCh0aGVUaGluZykgPT4ge1xuICAgICAgdGhlVGhpbmcuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0UmFuZG9tRHVyYXRpb24oKTtcbiAgICAgIHRoZVRoaW5nLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2dldFJhbmRvbVhQb3NpdGlvbigpfXB4LCAke2dldFJhbmRvbVlQb3NpdGlvbigpfXB4LCAwcHgpYDtcbiAgICB9KTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJsb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9iXCIpO1xuICAgIHNldEluaXRpYWxQcm9wZXJ0aWVzKGJsb2JzLCBjb2xvcnMpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1vdmVCbG9iKGJsb2JzKTtcbiAgICB9LCBnZXRSYW5kb21EdXJhdGlvbigpKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgZGlzcGxheT17ZGlzcGxheX0gZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgPE1haW4gZGFya01vZGU9e2RhcmtNb2RlfT57Y2hpbGRyZW59PC9NYWluPlxuICAgICAgPEZvb3RlciBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICA8RG90V3JhcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYlwiIG9uQ2xpY2s9eygpID0+IG1vdmVCbG9iKCl9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYlwiIG9uQ2xpY2s9eygpID0+IG1vdmVCbG9iKCl9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYlwiIG9uQ2xpY2s9eygpID0+IG1vdmVCbG9iKCl9Pjwvc3Bhbj5cbiAgICAgIDwvRG90V3JhcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layouts/DefaultLayout/index.jsx\n");

/***/ })

})