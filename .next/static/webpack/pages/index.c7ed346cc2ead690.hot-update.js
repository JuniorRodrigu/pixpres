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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/storage */ \"./node_modules/firebase/compat/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\",\n    messagingSenderId: \"280921941952\",\n    appId: \"1:280921941952:web:94cc4b8002e3de4de34a25\",\n    measurementId: \"G-NBT902G1TC\"\n};\nif (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apps.length) {\n    firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\n}\nvar db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore();\nvar Banner = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), favoriteImages = _useState[0], setFavoriteImages = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var unsubscribe = db.collection(\"dados\").where(\"favorito\", \"==\", \"sim\").onSnapshot(function(querySnapshot) {\n            var images = querySnapshot.docs.map(function(doc) {\n                return doc.data().imageUrl;\n            });\n            setFavoriteImages(images);\n        });\n        return function() {\n            return unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n            autoplay: {\n                delay: 2500,\n                disableOnInteraction: false\n            },\n            slidesPerView: 1,\n            modules: [\n                swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay\n            ],\n            loop: true,\n            children: favoriteImages.map(function(imageUrl) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: styles.slide,\n                        src: imageUrl,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this)\n                }, imageUrl, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Banner\\\\index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Banner, \"kcRwrAuKot/GLhDmxofoksLt7Ug=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Jhbm5lci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUNWO0FBQ0U7QUFDZ0I7QUFDL0I7QUFDYztBQUVsQyxJQUFNTyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxJQUFJLENBQUNYLGdFQUFhWSxDQUFDQyxRQUFRO0lBQ3pCYix5RUFBc0JjLENBQUNWO0FBQ3pCO0FBRUEsSUFBTVcsS0FBS2YscUVBQWtCZ0I7QUFFN0IsSUFBTUMsU0FBUzs7SUFDYixJQUE0Q25CLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQWhEb0IsaUJBQXFDcEIsY0FBckJxQixvQkFBcUJyQjtJQUU1Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFNcUIsY0FBY0wsR0FDakJNLFdBQVcsU0FDWEMsTUFBTSxZQUFZLE1BQU0sT0FDeEJDLFdBQVcsU0FBQ0M7WUFDWCxJQUFNQyxTQUFTRCxjQUFjRSxLQUFLQyxJQUFJLFNBQUNDO3VCQUFRQSxJQUFJQyxPQUFPQzs7WUFDMURYLGtCQUFrQk07UUFDcEI7UUFFRixPQUFPO21CQUFNTDs7SUFDZixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1c7a0JBQ0MsNEVBQUM5QixnREFBTUE7WUFDTCtCLFVBQVU7Z0JBQ1JDLE9BQU87Z0JBQ1BDLHNCQUFzQjtZQUN4QjtZQUNBQyxlQUFlO1lBQ2ZDLFNBQVM7Z0JBQUNqQyw0Q0FBUUE7YUFBQztZQUNuQmtDLE1BQU07c0JBRUxuQixlQUFlUyxJQUFJLFNBQUNHO3FDQUNuQiw4REFBQzVCLHFEQUFXQTs4QkFDViw0RUFBQ29DO3dCQUFJQyxXQUFXQyxPQUFPQzt3QkFBT0MsS0FBS1o7d0JBQVVhLEtBQUk7Ozs7OzttQkFEakNiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBbENNYjtLQUFBQTtBQW9DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0Jhbm5lci9pbmRleC50c3g/MmFiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L3N0b3JhZ2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEejkxVjhpUUd0S0xjOEM4VHpoUndHT0wyc29CdHNNWG9cIixcbiAgYXV0aERvbWFpbjogXCJ0ZXN0ZWRlbHl2LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidGVzdGVkZWx5dlwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRlc3RlZGVseXYuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjgwOTIxOTQxOTUyXCIsXG4gIGFwcElkOiBcIjE6MjgwOTIxOTQxOTUyOndlYjo5NGNjNGI4MDAyZTNkZTRkZTM0YTI1XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1OQlQ5MDJHMVRDXCJcbn07XG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG59XG5cbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3QgW2Zhdm9yaXRlSW1hZ2VzLCBzZXRGYXZvcml0ZUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGRiXG4gICAgICAuY29sbGVjdGlvbignZGFkb3MnKVxuICAgICAgLndoZXJlKCdmYXZvcml0bycsICc9PScsICdzaW0nKVxuICAgICAgLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpLmltYWdlVXJsKTtcbiAgICAgICAgc2V0RmF2b3JpdGVJbWFnZXMoaW1hZ2VzKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIGF1dG9wbGF5PXt7XG4gICAgICAgICAgZGVsYXk6IDI1MDAsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9fVxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxuICAgICAgICBtb2R1bGVzPXtbQXV0b3BsYXldfVxuICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgPlxuICAgICAgICB7ZmF2b3JpdGVJbWFnZXMubWFwKChpbWFnZVVybCkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2ltYWdlVXJsfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9IHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkF1dG9wbGF5IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsIkJhbm5lciIsImZhdm9yaXRlSW1hZ2VzIiwic2V0RmF2b3JpdGVJbWFnZXMiLCJ1bnN1YnNjcmliZSIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiaW1hZ2VzIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJpbWFnZVVybCIsImRpdiIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwibG9vcCIsImltZyIsImNsYXNzTmFtZSIsInN0eWxlcyIsInNsaWRlIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Banner/index.tsx\n"));

/***/ })

});