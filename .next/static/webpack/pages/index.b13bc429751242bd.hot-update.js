"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Banner/index.tsx":
/*!*******************************************!*\
  !*** ./pages/components/Banner/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/storage */ \"./node_modules/firebase/compat/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Banner/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nif (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apps.length) {\n    firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\n}\nvar db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore();\nvar Banner = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), favoriteImages = _useState[0], setFavoriteImages = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var unsubscribe = db.collection(\"dados\").where(\"favorito\", \"==\", \"sim\").onSnapshot(function(querySnapshot) {\n            var images = querySnapshot.docs.map(function(doc) {\n                return doc.data().imageUrl;\n            });\n            setFavoriteImages(images);\n        });\n        return function() {\n            return unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().bannerContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n            autoplay: {\n                delay: 2500,\n                disableOnInteraction: false\n            },\n            slidesPerView: 1,\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().swiper),\n            modules: [\n                swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay\n            ],\n            loop: true,\n            children: favoriteImages.map(function(imageUrl) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().slide),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageUrl,\n                        alt: \"\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().slideImage)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this)\n                }, imageUrl, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(Banner, \"kcRwrAuKot/GLhDmxofoksLt7Ug=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Jhbm5lci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNSO0FBQ1Y7QUFDRTtBQUNnQjtBQUMvQjtBQUNjO0FBRU87QUFFekMsSUFBTVEsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0FBQ2pCO0FBRUEsSUFBSSxDQUFDVCxnRUFBYVUsQ0FBQ0MsUUFBUTtJQUN6QlgseUVBQXNCWSxDQUFDUDtBQUN6QjtBQUVBLElBQU1RLEtBQUtiLHFFQUFrQmM7QUFFN0IsSUFBTUMsU0FBUzs7SUFDYixJQUE0Q2pCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQWhEa0IsaUJBQXFDbEIsY0FBckJtQixvQkFBcUJuQjtJQUU1Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFNbUIsY0FBY0wsR0FDakJNLFdBQVcsU0FDWEMsTUFBTSxZQUFZLE1BQU0sT0FDeEJDLFdBQVcsU0FBQ0M7WUFDWCxJQUFNQyxTQUFTRCxjQUFjRSxLQUFLQyxJQUFJLFNBQUNDO3VCQUFRQSxJQUFJQyxPQUFPQzs7WUFDMURYLGtCQUFrQk07UUFDcEI7UUFFRixPQUFPO21CQUFNTDs7SUFDZixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVzFCLDJFQUFzQjJCO2tCQUNwQyw0RUFBQzlCLGdEQUFNQTtZQUNMK0IsVUFBVTtnQkFDUkMsT0FBTztnQkFDUEMsc0JBQXNCO1lBQ3hCO1lBQ0FDLGVBQWU7WUFDZkwsV0FBVzFCLGtFQUFhZ0M7WUFDeEJDLFNBQVM7Z0JBQUNsQyw0Q0FBUUE7YUFBQztZQUNuQm1DLE1BQU07c0JBRUx0QixlQUFlUyxJQUFJLFNBQUNHO3FDQUNuQiw4REFBQzFCLHFEQUFXQTtvQkFBZ0I0QixXQUFXMUIsaUVBQVltQzs4QkFDakQsNEVBQUNDO3dCQUFJQyxLQUFLYjt3QkFBVWMsS0FBSTt3QkFBR1osV0FBVzFCLHNFQUFpQnVDOzs7Ozs7bUJBRHZDZjs7Ozs7Ozs7Ozs7Ozs7OztBQU81QjtHQW5DTWI7S0FBQUE7QUFxQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CYW5uZXIvaW5kZXgudHN4PzJhYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RHo5MVY4aVFHdEtMYzhDOFR6aFJ3R09MMnNvQnRzTVhvXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ0ZXN0ZWRlbHl2LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ0ZXN0ZWRlbHl2XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0ZWRlbHl2LmFwcHNwb3QuY29tXCIsXHJcbn07XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zhdm9yaXRlSW1hZ2VzLCBzZXRGYXZvcml0ZUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdkYWRvcycpXHJcbiAgICAgIC53aGVyZSgnZmF2b3JpdG8nLCAnPT0nLCAnc2ltJylcclxuICAgICAgLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGRvYy5kYXRhKCkuaW1hZ2VVcmwpO1xyXG4gICAgICAgIHNldEZhdm9yaXRlSW1hZ2VzKGltYWdlcyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyQ29udGFpbmVyfT5cclxuICAgICAgPFN3aXBlclxyXG4gICAgICAgIGF1dG9wbGF5PXt7XHJcbiAgICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3dpcGVyfVxyXG4gICAgICAgIG1vZHVsZXM9e1tBdXRvcGxheV19XHJcbiAgICAgICAgbG9vcD17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtmYXZvcml0ZUltYWdlcy5tYXAoKGltYWdlVXJsKSA9PiAoXHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbWFnZVVybH0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkF1dG9wbGF5Iiwic3R5bGVzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJmaXJlc3RvcmUiLCJCYW5uZXIiLCJmYXZvcml0ZUltYWdlcyIsInNldEZhdm9yaXRlSW1hZ2VzIiwidW5zdWJzY3JpYmUiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImltYWdlcyIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaW1hZ2VVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJiYW5uZXJDb250YWluZXIiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzbGlkZXNQZXJWaWV3Iiwic3dpcGVyIiwibW9kdWxlcyIsImxvb3AiLCJzbGlkZSIsImltZyIsInNyYyIsImFsdCIsInNsaWRlSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Banner/index.tsx\n"));

/***/ })

});