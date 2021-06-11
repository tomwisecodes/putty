webpackHotUpdate_N_E("pages/index",{

/***/ "./Layouts/DefaultLayout/index.jsx":
/*!*****************************************!*\
  !*** ./Layouts/DefaultLayout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/Users/tom/Documents/sites/tomWisePortfolio/putty/Layouts/DefaultLayout/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.withConfig({\n  displayName: \"DefaultLayout__Main\",\n  componentId: \"sc-1vxtm7p-0\"\n})([\"*{color:black;}\"]);\n_c = Main;\nvar DotWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"DefaultLayout__DotWrap\",\n  componentId: \"sc-1vxtm7p-1\"\n})([\"position:fixed;left:0;right:0;top:0;bottom:0;width:100vw;height:100vh;z-index:0;opacity:1 !important;visibility:visible !important;span{position:absolute;width:100px;height:100px;border-radius:50px;:nth-child(1){top:30%;left:12%;}:nth-child(2){top:10%;left:90%;}:nth-child(3){top:90%;left:50%;}}\"]);\n_c2 = DotWrap;\n\nvar DefaultLayout = function DefaultLayout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      display = _ref.display,\n      className = _ref.className,\n      darkMode = _ref.darkMode;\n  var blob1 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var blob2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var blob3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var colors = [\"#3570a2\", \"#de8e47\", \"#ce4539\", \"#e6c544\", \"#397f5f\"];\n\n  function getRandomXPosition() {\n    return Math.round(-50 + Math.random() * 1500 * (Math.round(Math.random()) ? 1 : -1));\n  }\n\n  function getRandomYPosition() {\n    return Math.round(-50 + Math.random() * 1500 * (Math.round(Math.random()) ? 1 : -1));\n  }\n\n  function getRandomDuration() {\n    return 40 + Math.random() * 2 + \"s\";\n  }\n\n  function setInitialProperties(blobs, colors) {\n    blobs.forEach(function (theThing) {\n      var circleSize = Math.round(30 + Math.random() * 100);\n      var whichColorNumber = Math.floor(Math.random() * 4) + 1;\n      theThing.style.backgroundColor = colors[whichColorNumber];\n      theThing.style.width = circleSize + \"px\";\n      theThing.style.height = circleSize + \"px\";\n      theThing.style.borderRadius = 0.5 * circleSize + \"px\";\n    });\n  }\n\n  function moveBlobStart(blobs) {\n    blobs.forEach(function (theThing) {\n      theThing.style.transitionDuration = getRandomDuration();\n      theThing.style.transform = \"translate3d(\".concat(getRandomXPosition(), \"px, \").concat(getRandomYPosition(), \"px, 0px)\");\n    });\n  }\n\n  function moveBlobNow(blob) {\n    blob.current.style.transitionDuration = getRandomDuration();\n    blob.current.style.transform = \"translate3d(\".concat(getRandomXPosition(), \"px, \").concat(getRandomYPosition(), \"px, 0px)\");\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var blobs = document.querySelectorAll(\".blob\");\n    setInitialProperties(blobs, colors);\n    var timeout = setTimeout(function () {\n      moveBlobStart(blobs);\n    }, 3000);\n    return function () {\n      return clearTimeout(timeout);\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    display: display,\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }), __jsx(Main, {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }), __jsx(DotWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    ref: blob1,\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlobNow(blob1);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    ref: blob2,\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlobNow(blob2);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    ref: blob3,\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlobNow(blob3);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    ref: blob3,\n    className: \"blob\",\n    onClick: function onClick() {\n      return moveBlobNow(blob3);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DefaultLayout, \"VNhzUQtwZp1yccCOMsBOuPD9t28=\");\n\n_c3 = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"DotWrap\");\n$RefreshReg$(_c3, \"DefaultLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0cy9EZWZhdWx0TGF5b3V0L2luZGV4LmpzeD8yZDIzIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZWQiLCJtYWluIiwiRG90V3JhcCIsImRpdiIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJkYXJrTW9kZSIsImJsb2IxIiwidXNlUmVmIiwiYmxvYjIiLCJibG9iMyIsImNvbG9ycyIsImdldFJhbmRvbVhQb3NpdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldFJhbmRvbVlQb3NpdGlvbiIsImdldFJhbmRvbUR1cmF0aW9uIiwic2V0SW5pdGlhbFByb3BlcnRpZXMiLCJibG9icyIsImZvckVhY2giLCJ0aGVUaGluZyIsImNpcmNsZVNpemUiLCJ3aGljaENvbG9yTnVtYmVyIiwiZmxvb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibW92ZUJsb2JTdGFydCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zZm9ybSIsIm1vdmVCbG9iTm93IiwiYmxvYiIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsdUJBQVY7S0FBTUYsSTtBQU1OLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSwrU0FBYjtNQUFNRCxPOztBQStCTixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdEO0FBQUE7O0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUFBLE1BQW5DQyxP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QSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRTtBQUNFLE9BQUcsRUFBRUEsS0FEUDtBQUVFLGFBQVMsRUFBQyxNQUZaO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTXVCLFdBQVcsQ0FBQ3ZCLEtBQUQsQ0FBakI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FKRixDQURGO0FBNkJELENBOUVEOztHQUFNUixhOztNQUFBQSxhO0FBZ0ZTQSw0RUFBZiIsImZpbGUiOiIuL0xheW91dHMvRGVmYXVsdExheW91dC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gICoge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYDtcblxuY29uc3QgRG90V3JhcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICA6bnRoLWNoaWxkKDEpIHtcbiAgICAgIHRvcDogMzAlO1xuICAgICAgbGVmdDogMTIlO1xuICAgIH1cbiAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIHRvcDogMTAlO1xuICAgICAgbGVmdDogOTAlO1xuICAgIH1cbiAgICA6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHRvcDogOTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IGNoaWxkcmVuLCBkaXNwbGF5LCBjbGFzc05hbWUsIGRhcmtNb2RlIH0pID0+IHtcbiAgY29uc3QgYmxvYjEgPSB1c2VSZWYoKTtcbiAgY29uc3QgYmxvYjIgPSB1c2VSZWYoKTtcbiAgY29uc3QgYmxvYjMgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29sb3JzID0gW1wiIzM1NzBhMlwiLCBcIiNkZThlNDdcIiwgXCIjY2U0NTM5XCIsIFwiI2U2YzU0NFwiLCBcIiMzOTdmNWZcIl07XG4gIGZ1bmN0aW9uIGdldFJhbmRvbVhQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICAgIC01MCArIE1hdGgucmFuZG9tKCkgKiAxNTAwICogKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPyAxIDogLTEpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbVlQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICAgIC01MCArIE1hdGgucmFuZG9tKCkgKiAxNTAwICogKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPyAxIDogLTEpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUR1cmF0aW9uKCkge1xuICAgIHJldHVybiA0MCArIE1hdGgucmFuZG9tKCkgKiAyICsgXCJzXCI7XG4gIH1cbiAgZnVuY3Rpb24gc2V0SW5pdGlhbFByb3BlcnRpZXMoYmxvYnMsIGNvbG9ycykge1xuICAgIGJsb2JzLmZvckVhY2goKHRoZVRoaW5nKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVTaXplID0gTWF0aC5yb3VuZCgzMCArIE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3Qgd2hpY2hDb2xvck51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMTtcblxuICAgICAgdGhlVGhpbmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW3doaWNoQ29sb3JOdW1iZXJdO1xuICAgICAgdGhlVGhpbmcuc3R5bGUud2lkdGggPSBjaXJjbGVTaXplICsgXCJweFwiO1xuICAgICAgdGhlVGhpbmcuc3R5bGUuaGVpZ2h0ID0gY2lyY2xlU2l6ZSArIFwicHhcIjtcbiAgICAgIHRoZVRoaW5nLnN0eWxlLmJvcmRlclJhZGl1cyA9IDAuNSAqIGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbW92ZUJsb2JTdGFydChibG9icykge1xuICAgIGJsb2JzLmZvckVhY2goKHRoZVRoaW5nKSA9PiB7XG4gICAgICB0aGVUaGluZy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRSYW5kb21EdXJhdGlvbigpO1xuICAgICAgdGhlVGhpbmcuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7Z2V0UmFuZG9tWFBvc2l0aW9uKCl9cHgsICR7Z2V0UmFuZG9tWVBvc2l0aW9uKCl9cHgsIDBweClgO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1vdmVCbG9iTm93KGJsb2IpIHtcbiAgICBibG9iLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0UmFuZG9tRHVyYXRpb24oKTtcbiAgICBibG9iLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7Z2V0UmFuZG9tWFBvc2l0aW9uKCl9cHgsICR7Z2V0UmFuZG9tWVBvc2l0aW9uKCl9cHgsIDBweClgO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmxvYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2JcIik7XG4gICAgc2V0SW5pdGlhbFByb3BlcnRpZXMoYmxvYnMsIGNvbG9ycyk7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbW92ZUJsb2JTdGFydChibG9icyk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGRpc3BsYXk9e2Rpc3BsYXl9IGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cbiAgICAgIDxNYWluIGRhcmtNb2RlPXtkYXJrTW9kZX0+e2NoaWxkcmVufTwvTWFpbj5cbiAgICAgIDxGb290ZXIgZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgPERvdFdyYXA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgcmVmPXtibG9iMX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9iXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvYk5vdyhibG9iMSl9XG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgcmVmPXtibG9iMn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9iXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvYk5vdyhibG9iMil9XG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgcmVmPXtibG9iM31cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9iXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvYk5vdyhibG9iMyl9XG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgcmVmPXtibG9iM31cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9iXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvYk5vdyhibG9iMyl9XG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L0RvdFdyYXA+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layouts/DefaultLayout/index.jsx\n");

/***/ })

})