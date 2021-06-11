webpackHotUpdate_N_E("pages/index",{

/***/ "./Layouts/DefaultLayout/index.jsx":
/*!*****************************************!*\
  !*** ./Layouts/DefaultLayout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tom_Documents_sites_tomWisePortfolio_putty_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/tom/Documents/sites/tomWisePortfolio/putty/Layouts/DefaultLayout/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main.withConfig({\n  displayName: \"DefaultLayout__Main\",\n  componentId: \"sc-1vxtm7p-0\"\n})([\"background-color:white;*{color:black;}\"]);\n_c = Main;\nvar DotWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"DefaultLayout__DotWrap\",\n  componentId: \"sc-1vxtm7p-1\"\n})([\"position:fixed;left:0;right:0;top:0;bottom:0;width:100vw;height:100vh;z-index:-1;span{position:absolute;top:0;left:50%;background-color:red;}\"]);\n_c2 = DotWrap;\n\nvar DefaultLayout = function DefaultLayout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      display = _ref.display,\n      className = _ref.className,\n      darkMode = _ref.darkMode;\n  var transforms = [\"transform\", \"msTransform\", \"webkitTransform\", \"mozTransform\", \"oTransform\"];\n  var colors = [\"#3570a2\", \"#de8e47\", \"#ce4539\", \"#e6c544\", \"#397f5f\"];\n  var transitionDurations = [\"transitionDuration\", \"msTransitionDuration\", \"webkitTransitionDuration\", \"mozTransitionDuration\", \"oTransitionDuration\"];\n  var transitionDurationProperty = getSupportedPropertyName(transitionDurations);\n  var blobs = document.querySelectorAll(\".blob\");\n  var transformProperty = getSupportedPropertyName(transforms);\n\n  function setInitialProperties(blobs, colors) {\n    blobs.forEach(function (theThing) {\n      var circleSize = Math.round(30 + Math.random() * 100);\n      var whichColorNumber = Math.floor(Math.random() * 4) + 1;\n      console.log(\"hello\", whichColorNumber);\n      theThing.style.backgroundColor = colors[whichColorNumber];\n      theThing.style.width = circleSize + \"px\";\n      theThing.style.height = circleSize + \"px\";\n      theThing.style.borderRadius = 0.5 * circleSize + \"px\";\n      setTranslate3DTransform(theThing);\n    });\n    setTimeout(kickOffTransition, 100);\n  }\n\n  function kickOffTransition() {\n    for (var i = 0; i < blobs.length; Object(_Users_tom_Documents_sites_tomWisePortfolio_putty_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"i\"), i++) {\n      var theThing = blobs[i];\n      theThing.addEventListener(\"transitionend\", updatePosition, false);\n      theThing.addEventListener(\"webkitTransitionEnd\", updatePosition, false);\n      theThing.addEventListener(\"mozTransitionEnd\", updatePosition, false);\n      theThing.addEventListener(\"msTransitionEnd\", updatePosition, false);\n      theThing.addEventListener(\"oTransitionEnd\", updatePosition, false);\n      setTranslate3DTransform(theThing);\n      setTransitionDuration(theThing);\n    }\n  }\n\n  function updatePosition(e) {\n    var theThing = e.currentTarget;\n\n    if (e.propertyName.indexOf(\"transform\") != -1) {\n      setTranslate3DTransform(theThing);\n      setTransitionDuration(theThing);\n    }\n  }\n\n  function getRandomXPosition() {\n    return Math.round(-50 + Math.random() * 1500);\n  }\n\n  function getRandomYPosition() {\n    return Math.round(-500 + Math.random() * 1500);\n  }\n\n  function getRandomDuration() {\n    return 40 + Math.random() * 2 + \"s\";\n  }\n\n  function getSupportedPropertyName(properties) {\n    for (var i = 0; i < properties.length; Object(_Users_tom_Documents_sites_tomWisePortfolio_putty_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"i\"), i++) {\n      if (typeof document.body.style[properties[i]] != \"undefined\") {\n        return properties[i];\n      }\n    }\n\n    return null;\n  }\n\n  function setTranslate3DTransform(element) {\n    element.style[transformProperty] = \"translate3d(\" + getRandomXPosition() + \"px\" + \", \" + getRandomYPosition() + \"px\" + \", 0)\";\n  }\n\n  function setTransitionDuration(element) {\n    if (transitionDurationProperty) {\n      element.style[transitionDurationProperty] = getRandomDuration();\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setInitialProperties(blobs, colors);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    display: display,\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }), __jsx(Main, {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }), __jsx(DotWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DefaultLayout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c3 = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"DotWrap\");\n$RefreshReg$(_c3, \"DefaultLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0cy9EZWZhdWx0TGF5b3V0L2luZGV4LmpzeD8yZDIzIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZWQiLCJtYWluIiwiRG90V3JhcCIsImRpdiIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJkYXJrTW9kZSIsInRyYW5zZm9ybXMiLCJjb2xvcnMiLCJ0cmFuc2l0aW9uRHVyYXRpb25zIiwidHJhbnNpdGlvbkR1cmF0aW9uUHJvcGVydHkiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJibG9icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRyYW5zZm9ybVByb3BlcnR5Iiwic2V0SW5pdGlhbFByb3BlcnRpZXMiLCJmb3JFYWNoIiwidGhlVGhpbmciLCJjaXJjbGVTaXplIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwid2hpY2hDb2xvck51bWJlciIsImZsb29yIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzZXRUcmFuc2xhdGUzRFRyYW5zZm9ybSIsInNldFRpbWVvdXQiLCJraWNrT2ZmVHJhbnNpdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlUG9zaXRpb24iLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJlIiwiY3VycmVudFRhcmdldCIsInByb3BlcnR5TmFtZSIsImluZGV4T2YiLCJnZXRSYW5kb21YUG9zaXRpb24iLCJnZXRSYW5kb21ZUG9zaXRpb24iLCJnZXRSYW5kb21EdXJhdGlvbiIsInByb3BlcnRpZXMiLCJib2R5IiwiZWxlbWVudCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFB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QUE7QUFBQSxJQUhGLENBSkYsQ0FERjtBQVlELENBL0dEOztHQUFNSixhOztNQUFBQSxhO0FBaUhTQSw0RUFBZiIsImZpbGUiOiIuL0xheW91dHMvRGVmYXVsdExheW91dC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAqIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmA7XG5cbmNvbnN0IERvdFdyYXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAtMTtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5gO1xuXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4sIGRpc3BsYXksIGNsYXNzTmFtZSwgZGFya01vZGUgfSkgPT4ge1xuICBjb25zdCB0cmFuc2Zvcm1zID0gW1xuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJtc1RyYW5zZm9ybVwiLFxuICAgIFwid2Via2l0VHJhbnNmb3JtXCIsXG4gICAgXCJtb3pUcmFuc2Zvcm1cIixcbiAgICBcIm9UcmFuc2Zvcm1cIixcbiAgXTtcbiAgY29uc3QgY29sb3JzID0gW1wiIzM1NzBhMlwiLCBcIiNkZThlNDdcIiwgXCIjY2U0NTM5XCIsIFwiI2U2YzU0NFwiLCBcIiMzOTdmNWZcIl07XG4gIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbnMgPSBbXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIixcbiAgICBcIm1zVHJhbnNpdGlvbkR1cmF0aW9uXCIsXG4gICAgXCJ3ZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cIixcbiAgICBcIm1velRyYW5zaXRpb25EdXJhdGlvblwiLFxuICAgIFwib1RyYW5zaXRpb25EdXJhdGlvblwiLFxuICBdO1xuICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb25Qcm9wZXJ0eSA9XG4gICAgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICBjb25zdCBibG9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvYlwiKTtcbiAgY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUodHJhbnNmb3Jtcyk7XG5cbiAgZnVuY3Rpb24gc2V0SW5pdGlhbFByb3BlcnRpZXMoYmxvYnMsIGNvbG9ycykge1xuICAgIGJsb2JzLmZvckVhY2goKHRoZVRoaW5nKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVTaXplID0gTWF0aC5yb3VuZCgzMCArIE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3Qgd2hpY2hDb2xvck51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIiwgd2hpY2hDb2xvck51bWJlcik7XG4gICAgICB0aGVUaGluZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbd2hpY2hDb2xvck51bWJlcl07XG4gICAgICB0aGVUaGluZy5zdHlsZS53aWR0aCA9IGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgICB0aGVUaGluZy5zdHlsZS5oZWlnaHQgPSBjaXJjbGVTaXplICsgXCJweFwiO1xuICAgICAgdGhlVGhpbmcuc3R5bGUuYm9yZGVyUmFkaXVzID0gMC41ICogY2lyY2xlU2l6ZSArIFwicHhcIjtcbiAgICAgIHNldFRyYW5zbGF0ZTNEVHJhbnNmb3JtKHRoZVRoaW5nKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KGtpY2tPZmZUcmFuc2l0aW9uLCAxMDApO1xuICB9XG5cbiAgZnVuY3Rpb24ga2lja09mZlRyYW5zaXRpb24oKSB7XG4gICAgZm9yIChjb25zdCBpID0gMDsgaSA8IGJsb2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aGVUaGluZyA9IGJsb2JzW2ldO1xuXG4gICAgICB0aGVUaGluZy5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB1cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xuICAgICAgdGhlVGhpbmcuYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgdXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcbiAgICAgIHRoZVRoaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3pUcmFuc2l0aW9uRW5kXCIsIHVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICB0aGVUaGluZy5hZGRFdmVudExpc3RlbmVyKFwibXNUcmFuc2l0aW9uRW5kXCIsIHVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICB0aGVUaGluZy5hZGRFdmVudExpc3RlbmVyKFwib1RyYW5zaXRpb25FbmRcIiwgdXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcblxuICAgICAgc2V0VHJhbnNsYXRlM0RUcmFuc2Zvcm0odGhlVGhpbmcpO1xuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRoZVRoaW5nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihlKSB7XG4gICAgdmFyIHRoZVRoaW5nID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgaWYgKGUucHJvcGVydHlOYW1lLmluZGV4T2YoXCJ0cmFuc2Zvcm1cIikgIT0gLTEpIHtcbiAgICAgIHNldFRyYW5zbGF0ZTNEVHJhbnNmb3JtKHRoZVRoaW5nKTtcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0aGVUaGluZyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tWFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKC01MCArIE1hdGgucmFuZG9tKCkgKiAxNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbVlQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgtNTAwICsgTWF0aC5yYW5kb20oKSAqIDE1MDApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIDQwICsgTWF0aC5yYW5kb20oKSAqIDIgKyBcInNcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0aWVzW2ldXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNEVHJhbnNmb3JtKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9XG4gICAgICBcInRyYW5zbGF0ZTNkKFwiICtcbiAgICAgIGdldFJhbmRvbVhQb3NpdGlvbigpICtcbiAgICAgIFwicHhcIiArXG4gICAgICBcIiwgXCIgK1xuICAgICAgZ2V0UmFuZG9tWVBvc2l0aW9uKCkgK1xuICAgICAgXCJweFwiICtcbiAgICAgIFwiLCAwKVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkR1cmF0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uUHJvcGVydHkpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvbkR1cmF0aW9uUHJvcGVydHldID0gZ2V0UmFuZG9tRHVyYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbml0aWFsUHJvcGVydGllcyhibG9icywgY29sb3JzKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGRpc3BsYXk9e2Rpc3BsYXl9IGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cbiAgICAgIDxNYWluIGRhcmtNb2RlPXtkYXJrTW9kZX0+e2NoaWxkcmVufTwvTWFpbj5cbiAgICAgIDxGb290ZXIgZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgPERvdFdyYXA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2JcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2JcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2JcIj48L3NwYW4+XG4gICAgICA8L0RvdFdyYXA+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layouts/DefaultLayout/index.jsx\n");

/***/ })

})