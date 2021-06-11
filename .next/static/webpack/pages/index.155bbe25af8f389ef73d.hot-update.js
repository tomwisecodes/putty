webpackHotUpdate_N_E("pages/index",{

/***/ "./Layouts/DefaultLayout/index.jsx":
/*!*****************************************!*\
  !*** ./Layouts/DefaultLayout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tom_Documents_sites_tomWisePortfolio_putty_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/tom/Documents/sites/tomWisePortfolio/putty/Layouts/DefaultLayout/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main.withConfig({\n  displayName: \"DefaultLayout__Main\",\n  componentId: \"sc-1vxtm7p-0\"\n})([\"background-color:white;*{color:black;}\"]);\n_c = Main;\nvar DotWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"DefaultLayout__DotWrap\",\n  componentId: \"sc-1vxtm7p-1\"\n})([\"position:fixed;left:0;right:0;top:0;bottom:0;width:100vw;height:100vh;z-index:-1;span{position:absolute;top:0;left:50%;background-color:red;}\"]);\n_c2 = DotWrap;\n\nvar DefaultLayout = function DefaultLayout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      display = _ref.display,\n      className = _ref.className,\n      darkMode = _ref.darkMode;\n\n  function setInitialProperties(blobs, colors) {\n    blobs.forEach(function (theThing) {\n      var circleSize = Math.round(30 + Math.random() * 100);\n      var whichColorNumber = Math.floor(Math.random() * 4) + 1;\n      console.log(\"hello\", whichColorNumber);\n      theThing.style.backgroundColor = colors[whichColorNumber];\n      theThing.style.width = circleSize + \"px\";\n      theThing.style.height = circleSize + \"px\";\n      theThing.style.borderRadius = 0.5 * circleSize + \"px\";\n      setTranslate3DTransform(theThing);\n    });\n    setTimeout(kickOffTransition, 100);\n  }\n\n  function kickOffTransition() {\n    for (var i = 0; i < theThings.length; Object(_Users_tom_Documents_sites_tomWisePortfolio_putty_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"i\"), i++) {\n      var theThing = theThings[i];\n      theThing.addEventListener(\"transitionend\", updatePosition, false);\n      theThing.addEventListener(\"webkitTransitionEnd\", updatePosition, false);\n      theThing.addEventListener(\"mozTransitionEnd\", updatePosition, false);\n      theThing.addEventListener(\"msTransitionEnd\", updatePosition, false);\n      theThing.addEventListener(\"oTransitionEnd\", updatePosition, false);\n      setTranslate3DTransform(theThing);\n      setTransitionDuration(theThing);\n    }\n  }\n\n  function updatePosition(e) {\n    var theThing = e.currentTarget;\n\n    if (e.propertyName.indexOf(\"transform\") != -1) {\n      setTranslate3DTransform(theThing);\n      setTransitionDuration(theThing);\n    }\n  }\n\n  function getRandomXPosition() {\n    return Math.round(-50 + Math.random() * 1500);\n  }\n\n  function getRandomYPosition() {\n    return Math.round(-500 + Math.random() * 1500);\n  }\n\n  function getRandomDuration() {\n    return 40 + Math.random() * 2 + \"s\";\n  }\n\n  function getSupportedPropertyName(properties) {\n    for (var i = 0; i < properties.length; Object(_Users_tom_Documents_sites_tomWisePortfolio_putty_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"i\"), i++) {\n      if (typeof document.body.style[properties[i]] != \"undefined\") {\n        return properties[i];\n      }\n    }\n\n    return null;\n  }\n\n  function setTranslate3DTransform(element) {\n    element.style[transformProperty] = \"translate3d(\" + getRandomXPosition() + \"px\" + \", \" + getRandomYPosition() + \"px\" + \", 0)\";\n  }\n\n  function setTransitionDuration(element) {\n    if (transitionDurationProperty) {\n      element.style[transitionDurationProperty] = getRandomDuration();\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var colors = [\"#3570a2\", \"#de8e47\", \"#ce4539\", \"#e6c544\", \"#397f5f\"];\n    var blobs = document.querySelectorAll(\".blob\");\n    setInitialProperties(blobs, colors);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    display: display,\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }), __jsx(Main, {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }), __jsx(DotWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DefaultLayout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c3 = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"DotWrap\");\n$RefreshReg$(_c3, \"DefaultLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0cy9EZWZhdWx0TGF5b3V0L2luZGV4LmpzeD8yZDIzIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZWQiLCJtYWluIiwiRG90V3JhcCIsImRpdiIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJkYXJrTW9kZSIsInNldEluaXRpYWxQcm9wZXJ0aWVzIiwiYmxvYnMiLCJjb2xvcnMiLCJmb3JFYWNoIiwidGhlVGhpbmciLCJjaXJjbGVTaXplIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwid2hpY2hDb2xvck51bWJlciIsImZsb29yIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzZXRUcmFuc2xhdGUzRFRyYW5zZm9ybSIsInNldFRpbWVvdXQiLCJraWNrT2ZmVHJhbnNpdGlvbiIsImkiLCJ0aGVUaGluZ3MiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlUG9zaXRpb24iLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJlIiwiY3VycmVudFRhcmdldCIsInByb3BlcnR5TmFtZSIsImluZGV4T2YiLCJnZXRSYW5kb21YUG9zaXRpb24iLCJnZXRSYW5kb21ZUG9zaXRpb24iLCJnZXRSYW5kb21EdXJhdGlvbiIsImdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSIsInByb3BlcnRpZXMiLCJkb2N1bWVudCIsImJvZHkiLCJlbGVtZW50IiwidHJhbnNmb3JtUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb25Qcm9wZXJ0eSIsInVzZUVmZmVjdCIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFWO0tBQU1G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QTFCLENBQWQ7QUFDQTFDLHdCQUFvQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FBcEI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0EsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFTCxPQUFqQjtBQUEwQixZQUFRLEVBQUVFLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsSUFBRDtBQUFNLFlBQVEsRUFBRUEsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQkgsUUFBM0IsQ0FGRixFQUdFLE1BQUMsMERBQUQ7QUFBUSxZQUFRLEVBQUVHLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBSkYsQ0FERjtBQVlELENBN0ZEOztHQUFNSixhOztNQUFBQSxhO0FBK0ZTQSw0RUFBZiIsImZpbGUiOiIuL0xheW91dHMvRGVmYXVsdExheW91dC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAqIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmA7XG5cbmNvbnN0IERvdFdyYXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAtMTtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5gO1xuXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4sIGRpc3BsYXksIGNsYXNzTmFtZSwgZGFya01vZGUgfSkgPT4ge1xuICBmdW5jdGlvbiBzZXRJbml0aWFsUHJvcGVydGllcyhibG9icywgY29sb3JzKSB7XG4gICAgYmxvYnMuZm9yRWFjaCgodGhlVGhpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZVNpemUgPSBNYXRoLnJvdW5kKDMwICsgTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICBjb25zdCB3aGljaENvbG9yTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxO1xuICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiLCB3aGljaENvbG9yTnVtYmVyKTtcbiAgICAgIHRoZVRoaW5nLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1t3aGljaENvbG9yTnVtYmVyXTtcbiAgICAgIHRoZVRoaW5nLnN0eWxlLndpZHRoID0gY2lyY2xlU2l6ZSArIFwicHhcIjtcbiAgICAgIHRoZVRoaW5nLnN0eWxlLmhlaWdodCA9IGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgICB0aGVUaGluZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSAwLjUgKiBjaXJjbGVTaXplICsgXCJweFwiO1xuICAgICAgc2V0VHJhbnNsYXRlM0RUcmFuc2Zvcm0odGhlVGhpbmcpO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoa2lja09mZlRyYW5zaXRpb24sIDEwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBraWNrT2ZmVHJhbnNpdGlvbigpIHtcbiAgICBmb3IgKGNvbnN0IGkgPSAwOyBpIDwgdGhlVGhpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdGhlVGhpbmcgPSB0aGVUaGluZ3NbaV07XG5cbiAgICAgIHRoZVRoaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICB0aGVUaGluZy5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCB1cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xuICAgICAgdGhlVGhpbmcuYWRkRXZlbnRMaXN0ZW5lcihcIm1velRyYW5zaXRpb25FbmRcIiwgdXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcbiAgICAgIHRoZVRoaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJtc1RyYW5zaXRpb25FbmRcIiwgdXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcbiAgICAgIHRoZVRoaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJvVHJhbnNpdGlvbkVuZFwiLCB1cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xuXG4gICAgICBzZXRUcmFuc2xhdGUzRFRyYW5zZm9ybSh0aGVUaGluZyk7XG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24odGhlVGhpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKGUpIHtcbiAgICB2YXIgdGhlVGhpbmcgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICBpZiAoZS5wcm9wZXJ0eU5hbWUuaW5kZXhPZihcInRyYW5zZm9ybVwiKSAhPSAtMSkge1xuICAgICAgc2V0VHJhbnNsYXRlM0RUcmFuc2Zvcm0odGhlVGhpbmcpO1xuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRoZVRoaW5nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5kb21YUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoLTUwICsgTWF0aC5yYW5kb20oKSAqIDE1MDApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tWVBvc2l0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKC01MDAgKyBNYXRoLnJhbmRvbSgpICogMTUwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5kb21EdXJhdGlvbigpIHtcbiAgICByZXR1cm4gNDAgKyBNYXRoLnJhbmRvbSgpICogMiArIFwic1wiO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnRpZXNbaV1dICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlM0RUcmFuc2Zvcm0oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID1cbiAgICAgIFwidHJhbnNsYXRlM2QoXCIgK1xuICAgICAgZ2V0UmFuZG9tWFBvc2l0aW9uKCkgK1xuICAgICAgXCJweFwiICtcbiAgICAgIFwiLCBcIiArXG4gICAgICBnZXRSYW5kb21ZUG9zaXRpb24oKSArXG4gICAgICBcInB4XCIgK1xuICAgICAgXCIsIDApXCI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24oZWxlbWVudCkge1xuICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb25Qcm9wZXJ0eSkge1xuICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uRHVyYXRpb25Qcm9wZXJ0eV0gPSBnZXRSYW5kb21EdXJhdGlvbigpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9ycyA9IFtcIiMzNTcwYTJcIiwgXCIjZGU4ZTQ3XCIsIFwiI2NlNDUzOVwiLCBcIiNlNmM1NDRcIiwgXCIjMzk3ZjVmXCJdO1xuICAgIGNvbnN0IGJsb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9iXCIpO1xuICAgIHNldEluaXRpYWxQcm9wZXJ0aWVzKGJsb2JzLCBjb2xvcnMpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgZGlzcGxheT17ZGlzcGxheX0gZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgPE1haW4gZGFya01vZGU9e2RhcmtNb2RlfT57Y2hpbGRyZW59PC9NYWluPlxuICAgICAgPEZvb3RlciBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICA8RG90V3JhcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYlwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYlwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvYlwiPjwvc3Bhbj5cbiAgICAgIDwvRG90V3JhcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layouts/DefaultLayout/index.jsx\n");

/***/ })

})