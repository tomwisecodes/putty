webpackHotUpdate_N_E("pages/index",{

/***/ "./Layouts/DefaultLayout/index.jsx":
/*!*****************************************!*\
  !*** ./Layouts/DefaultLayout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/Users/tom/Documents/sites/tomWisePortfolio/putty/Layouts/DefaultLayout/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.withConfig({\n  displayName: \"DefaultLayout__Main\",\n  componentId: \"sc-1vxtm7p-0\"\n})([\"background-color:white;*{color:black;}\"]);\n_c = Main;\nvar DotWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"DefaultLayout__DotWrap\",\n  componentId: \"sc-1vxtm7p-1\"\n})([\"position:fixed;left:0;right:0;top:0;bottom:0;width:100vw;height:100vh;z-index:-1;span{position:absolute;width:100px;height:100px;border-radius:50px;opacity:1;}\"]);\n_c2 = DotWrap;\n\nvar DefaultLayout = function DefaultLayout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      display = _ref.display,\n      className = _ref.className,\n      darkMode = _ref.darkMode;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var colors = [\"#3570a2\", \"#de8e47\", \"#ce4539\", \"#e6c544\", \"#397f5f\"];\n    var blobs = document.querySelectorAll(\".blob\");\n\n    function setInitialProperties(blobs, colors) {\n      blobs.forEach(function (theThing) {\n        var circleSize = Math.round(30 + Math.random() * 100);\n        var whichColorNumber = Math.floor(Math.random() * 4) + 1;\n        theThing.style.backgroundColor = colors[whichColorNumber];\n        theThing.style.width = circleSize + \"px\";\n        theThing.style.height = circleSize + \"px\";\n        theThing.style.borderRadius = 0.5 * circleSize + \"px\";\n        theThing.style.transitionDuration = getRandomDuration();\n        theThing.style.transform = \"translate3d(235px, 684px, 0px)\";\n      });\n    }\n\n    function getRandomXPosition() {\n      return Math.round(-50 + Math.random() * 1500);\n    }\n\n    function getRandomYPosition() {\n      return Math.round(-500 + Math.random() * 1500);\n    }\n\n    function getRandomDuration() {\n      return 40 + Math.random() * 2 + \"s\";\n    }\n\n    setInitialProperties(blobs, colors);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    display: display,\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }), __jsx(Main, {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    darkMode: darkMode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), __jsx(DotWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"blob\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DefaultLayout, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c3 = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"DotWrap\");\n$RefreshReg$(_c3, \"DefaultLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0cy9EZWZhdWx0TGF5b3V0L2luZGV4LmpzeD8yZDIzIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZWQiLCJtYWluIiwiRG90V3JhcCIsImRpdiIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJkYXJrTW9kZSIsInVzZUVmZmVjdCIsImNvbG9ycyIsImJsb2JzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2V0SW5pdGlhbFByb3BlcnRpZXMiLCJmb3JFYWNoIiwidGhlVGhpbmciLCJjaXJjbGVTaXplIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwid2hpY2hDb2xvck51bWJlciIsImZsb29yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImdldFJhbmRvbUR1cmF0aW9uIiwidHJhbnNmb3JtIiwiZ2V0UmFuZG9tWFBvc2l0aW9uIiwiZ2V0UmFuZG9tWVBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw4Q0FBVjtLQUFNRixJO0FBT04sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVLQUFiO01BQU1ELE87O0FBa0JOLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0Q7QUFBQTs7QUFBQSxNQUE3Q0MsUUFBNkMsUUFBN0NBLFFBQTZDO0FBQUEsTUFBbkNDLE9BQW1DLFFBQW5DQSxPQUFtQztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDcEVDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLENBQWY7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBZDs7QUFFQSxhQUFTQyxvQkFBVCxDQUE4QkgsS0FBOUIsRUFBcUNELE1BQXJDLEVBQTZDO0FBQzNDQyxXQUFLLENBQUNJLE9BQU4sQ0FBYyxVQUFDQyxRQUFELEVBQWM7QUFDMUIsWUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBaEMsQ0FBbkI7QUFDQSxZQUFNQyxnQkFBZ0IsR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVdKLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixJQUFnQyxDQUF6RDtBQUVBSixnQkFBUSxDQUFDTyxLQUFULENBQWVDLGVBQWYsR0FBaUNkLE1BQU0sQ0FBQ1csZ0JBQUQsQ0FBdkM7QUFDQUwsZ0JBQVEsQ0FBQ08sS0FBVCxDQUFlRSxLQUFmLEdBQXVCUixVQUFVLEdBQUcsSUFBcEM7QUFDQUQsZ0JBQVEsQ0FBQ08sS0FBVCxDQUFlRyxNQUFmLEdBQXdCVCxVQUFVLEdBQUcsSUFBckM7QUFDQUQsZ0JBQVEsQ0FBQ08sS0FBVCxDQUFlSSxZQUFmLEdBQThCLE1BQU1WLFVBQU4sR0FBbUIsSUFBakQ7QUFDQUQsZ0JBQVEsQ0FBQ08sS0FBVCxDQUFlSyxrQkFBZixHQUFvQ0MsaUJBQWlCLEVBQXJEO0FBQ0FiLGdCQUFRLENBQUNPLEtBQVQsQ0FBZU8sU0FBZixHQUEyQixnQ0FBM0I7QUFDRCxPQVZEO0FBV0Q7O0FBRUQsYUFBU0Msa0JBQVQsR0FBOEI7QUFDNUIsYUFBT2IsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQyxFQUFELEdBQU1ELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUFqQyxDQUFQO0FBQ0Q7O0FBRUQsYUFBU1ksa0JBQVQsR0FBOEI7QUFDNUIsYUFBT2QsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQyxHQUFELEdBQU9ELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUFsQyxDQUFQO0FBQ0Q7O0FBRUQsYUFBU1MsaUJBQVQsR0FBNkI7QUFDM0IsYUFBTyxLQUFLWCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBckIsR0FBeUIsR0FBaEM7QUFDRDs7QUFFRE4sd0JBQW9CLENBQUNILEtBQUQsRUFBUUQsTUFBUixDQUFwQjtBQUNELEdBL0JRLEVBK0JOLEVBL0JNLENBQVQ7QUFnQ0EsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFSixPQUFqQjtBQUEwQixZQUFRLEVBQUVFLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsSUFBRDtBQUFNLFlBQVEsRUFBRUEsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQkgsUUFBM0IsQ0FGRixFQUdFLE1BQUMsMERBQUQ7QUFBUSxZQUFRLEVBQUVHLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBSkYsQ0FERjtBQVlELENBN0NEOztHQUFNSixhOztNQUFBQSxhO0FBK0NTQSw0RUFBZiIsImZpbGUiOiIuL0xheW91dHMvRGVmYXVsdExheW91dC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAqIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmA7XG5cbmNvbnN0IERvdFdyYXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAtMTtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IGNoaWxkcmVuLCBkaXNwbGF5LCBjbGFzc05hbWUsIGRhcmtNb2RlIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb2xvcnMgPSBbXCIjMzU3MGEyXCIsIFwiI2RlOGU0N1wiLCBcIiNjZTQ1MzlcIiwgXCIjZTZjNTQ0XCIsIFwiIzM5N2Y1ZlwiXTtcbiAgICBjb25zdCBibG9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvYlwiKTtcblxuICAgIGZ1bmN0aW9uIHNldEluaXRpYWxQcm9wZXJ0aWVzKGJsb2JzLCBjb2xvcnMpIHtcbiAgICAgIGJsb2JzLmZvckVhY2goKHRoZVRoaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGNpcmNsZVNpemUgPSBNYXRoLnJvdW5kKDMwICsgTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIGNvbnN0IHdoaWNoQ29sb3JOdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XG5cbiAgICAgICAgdGhlVGhpbmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW3doaWNoQ29sb3JOdW1iZXJdO1xuICAgICAgICB0aGVUaGluZy5zdHlsZS53aWR0aCA9IGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgICAgIHRoZVRoaW5nLnN0eWxlLmhlaWdodCA9IGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgICAgIHRoZVRoaW5nLnN0eWxlLmJvcmRlclJhZGl1cyA9IDAuNSAqIGNpcmNsZVNpemUgKyBcInB4XCI7XG4gICAgICAgIHRoZVRoaW5nLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFJhbmRvbUR1cmF0aW9uKCk7XG4gICAgICAgIHRoZVRoaW5nLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoMjM1cHgsIDY4NHB4LCAwcHgpXCI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21YUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgtNTAgKyBNYXRoLnJhbmRvbSgpICogMTUwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tWVBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoLTUwMCArIE1hdGgucmFuZG9tKCkgKiAxNTAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21EdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiA0MCArIE1hdGgucmFuZG9tKCkgKiAyICsgXCJzXCI7XG4gICAgfVxuXG4gICAgc2V0SW5pdGlhbFByb3BlcnRpZXMoYmxvYnMsIGNvbG9ycyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciBkaXNwbGF5PXtkaXNwbGF5fSBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICA8TWFpbiBkYXJrTW9kZT17ZGFya01vZGV9PntjaGlsZHJlbn08L01haW4+XG4gICAgICA8Rm9vdGVyIGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cbiAgICAgIDxEb3RXcmFwPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9iXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9iXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9iXCI+PC9zcGFuPlxuICAgICAgPC9Eb3RXcmFwPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layouts/DefaultLayout/index.jsx\n");

/***/ })

})