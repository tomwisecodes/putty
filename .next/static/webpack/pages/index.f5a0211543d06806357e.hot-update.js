webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Grid */ \"./components/Grid/index.jsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ \"./components/Container/index.jsx\");\n/* harmony import */ var _Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layouts/DefaultLayout */ \"./Layouts/DefaultLayout/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_MouseCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MouseCircle */ \"./components/MouseCircle/index.jsx\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero/index.jsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ \"./data.js\");\n/* harmony import */ var _components_Menu_mobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Menu/mobileMenu */ \"./components/Menu/mobileMenu.jsx\");\n/* harmony import */ var _components_FirstLoad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FirstLoad */ \"./components/FirstLoad/index.jsx\");\n/* harmony import */ var _components_SkillSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SkillSection */ \"./components/SkillSection/index.jsx\");\nvar _jsxFileName = \"/Users/tom/Documents/sites/putty/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar PageWrap = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).withConfig({\n  displayName: \"pages__PageWrap\",\n  componentId: \"sc-1mizdm8-0\"\n})([\"min-height:60vh;margin-top:40vh;display:flex;flex-direction:column;justify-content:space-between;position:relative;z-index:1;h1{font-size:50px;line-height:50px;margin-bottom:12px;max-width:570px;font-weight:400;}h2{font-size:20px;line-height:24px;margin-bottom:6px;max-width:600px;@media (max-width:769px){margin-bottom:48px;font-size:20px;line-height:24px;}}\"]);\n_c = PageWrap;\nvar ContactWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"pages__ContactWrap\",\n  componentId: \"sc-1mizdm8-1\"\n})([\"display:flex;flex-direction:column;padding-bottom:24px;max-width:400px;p,a{font-size:20px;line-height:24px;margin-bottom:6px;}\"]);\n_c2 = ContactWrap;\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showdef = _useState[0],\n      setShowDef = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      mouseX = _useState2[0],\n      setMouseX = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      mouseY = _useState3[0],\n      setMouseY = _useState3[1];\n\n  function isTouchDevice() {\n    if (true) {\n      return \"ontouchstart\" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;\n    }\n\n    return null;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    isTouchDevice();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(PageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Putty studio is the best design studio in the world\"), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Experts in: UX Design & Research, UI Design, Product Design Systems, Javascript Framework Development, Wordpress Development\")), __jsx(ContactWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, \"Get in touch for more information or to hear about our work:\"), __jsx(\"a\", {\n    href: \"mailto:hello@putty.studio\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"hello@putty.studio\"), __jsx(\"a\", {\n    href: \"tel:07917621285\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"+44 79176 21285\")))));\n};\n\n_s(HomePage, \"hgJ2lNFT8Zbiz9Aw0kMJvYGUPos=\");\n\n_c3 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"PageWrap\");\n$RefreshReg$(_c2, \"ContactWrap\");\n$RefreshReg$(_c3, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJQYWdlV3JhcCIsInN0eWxlZCIsIkNvbnRhaW5lciIsIkNvbnRhY3RXcmFwIiwiZGl2IiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInNob3dkZWYiLCJzZXRTaG93RGVmIiwibW91c2VYIiwic2V0TW91c2VYIiwibW91c2VZIiwic2V0TW91c2VZIiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLDZEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsK1dBQWQ7S0FBTUYsUTtBQTJCTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0lBQWpCO01BQU1ELFc7O0FBWU4sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUNkQyxPQURjO0FBQUEsTUFDTEMsVUFESzs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxJQUFELENBRmY7QUFBQSxNQUVkRyxNQUZjO0FBQUEsTUFFTkMsU0FGTTs7QUFBQSxtQkFHT0osc0RBQVEsQ0FBQyxJQUFELENBSGY7QUFBQSxNQUdkSyxNQUhjO0FBQUEsTUFHTkMsU0FITTs7QUFLckIsV0FBU0MsYUFBVCxHQUF5QjtBQUN2QixjQUFtQztBQUNqQyxhQUNFLGtCQUFrQkMsTUFBbEIsSUFDQUMsU0FBUyxDQUFDQyxjQUFWLEdBQTJCLENBRDNCLElBRUFELFNBQVMsQ0FBQ0UsZ0JBQVYsR0FBNkIsQ0FIL0I7QUFLRDs7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLGlCQUFhO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0UsbUVBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0lBRkYsQ0FERixFQVFFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFERixFQUVFO0FBQUcsUUFBSSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsRUFHRTtBQUFHLFFBQUksRUFBQyxpQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLENBUkYsQ0FERixDQURGLENBREY7QUFvQkQsQ0F4Q0Q7O0dBQU1SLFE7O01BQUFBLFE7QUEwQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCIuLi9MYXlvdXRzL0RlZmF1bHRMYXlvdXRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTW91c2VDaXJjbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW91c2VDaXJjbGVcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9cIjtcbmltcG9ydCBjbGllbnRzIGZyb20gXCIuLi9kYXRhXCI7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51L21vYmlsZU1lbnVcIjtcbmltcG9ydCBGaXJzdExvYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlyc3RMb2FkXCI7XG5pbXBvcnQgU2tpbGxTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NraWxsU2VjdGlvblwiO1xuXG5jb25zdCBQYWdlV3JhcCA9IHN0eWxlZChDb250YWluZXIpYFxuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBtYXJnaW4tdG9wOiA0MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG1heC13aWR0aDogNTcwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IENvbnRhY3RXcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHAsXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbmA7XG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dkZWYsIHNldFNob3dEZWZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW91c2VYLCBzZXRNb3VzZVhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttb3VzZVksIHNldE1vdXNlWV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdyB8fFxuICAgICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwIHx8XG4gICAgICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzVG91Y2hEZXZpY2UoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgICA8UGFnZVdyYXA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5QdXR0eSBzdHVkaW8gaXMgdGhlIGJlc3QgZGVzaWduIHN0dWRpbyBpbiB0aGUgd29ybGQ8L2gxPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICBFeHBlcnRzIGluOiBVWCBEZXNpZ24gJiBSZXNlYXJjaCwgVUkgRGVzaWduLCBQcm9kdWN0IERlc2lnblxuICAgICAgICAgICAgICBTeXN0ZW1zLCBKYXZhc2NyaXB0IEZyYW1ld29yayBEZXZlbG9wbWVudCwgV29yZHByZXNzIERldmVsb3BtZW50XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb250YWN0V3JhcD5cbiAgICAgICAgICAgIDxwPkdldCBpbiB0b3VjaCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvciB0byBoZWFyIGFib3V0IG91ciB3b3JrOjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aGVsbG9AcHV0dHkuc3R1ZGlvXCI+aGVsbG9AcHV0dHkuc3R1ZGlvPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDowNzkxNzYyMTI4NVwiPis0NCA3OTE3NiAyMTI4NTwvYT5cbiAgICAgICAgICA8L0NvbnRhY3RXcmFwPlxuICAgICAgICA8L1BhZ2VXcmFwPlxuICAgICAgPC9EZWZhdWx0TGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})