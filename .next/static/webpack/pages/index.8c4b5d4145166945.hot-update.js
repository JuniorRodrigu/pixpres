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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Banner */ \"./pages/components/Banner/index.tsx\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nvar Home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), dados = _useState[0], setDados = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState1[0], setIsModalOpen = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), modalImage = _useState2[0], setModalImage = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var db, snapshot, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apps.length) {\n                                firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\n                            }\n                            db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore();\n                            return [\n                                4,\n                                db.collection(\"dados\").get()\n                            ];\n                        case 1:\n                            snapshot = _state.sent();\n                            data = snapshot.docs.map(function(doc) {\n                                return doc.data();\n                            });\n                            setDados(data);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    var openModal = function(imageUrl) {\n        setModalImage(imageUrl);\n        setIsModalOpen(true);\n    };\n    var closeModal = function() {\n        setIsModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerTop),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerTopLeft),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerTitle),\n                                children: \"seja bem vindo(a) \\uD83D\\uDC4B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerTopRight),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/components/Painel\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().menuButton),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().menuButtonLine)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().menuButtonLine)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().menuButtonLine)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().grid),\n                children: dados.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().produtor),\n                        onClick: function() {\n                            return openModal(item.imageUrl);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item.imageUrl,\n                            alt: \"Product\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().modal),\n                onClick: closeModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().modalContent),\n                    onClick: function(e) {\n                        return e.stopPropagation();\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: modalImage,\n                            alt: \"Modal\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closeModal,\n                            children: \"Fechar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"tuzlXxDaUhT1TxU3tuc6DWnIj5A=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1I7QUFDUjtBQUNNO0FBQ0Y7QUFDVjtBQUU3QixJQUFNTyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7QUFDakI7QUFFQSxJQUFNQyxPQUFPOztJQUNYLElBQTBCWCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE5QlksUUFBbUJaLGNBQVphLFdBQVliO0lBQzFCLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBeENjLGNBQStCZCxlQUFsQmUsaUJBQWtCZjtJQUN0QyxJQUFvQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFdBQXRDZ0IsYUFBNkJoQixlQUFqQmlCLGdCQUFpQmpCO0lBRXBDQyxnREFBU0EsQ0FBQztRQUNSLElBQU1pQjt1QkFBWTtvQkFLVkMsSUFDQUMsVUFDQUM7Ozs7NEJBTk4sSUFBSSxDQUFDbkIsZ0VBQWFvQixDQUFDQyxRQUFRO2dDQUN6QnJCLHlFQUFzQnNCLENBQUNsQjs0QkFDekI7NEJBRU1hLEtBQUtqQixxRUFBa0J1Qjs0QkFDWjs7Z0NBQU1OLEdBQUdPLFdBQVcsU0FBU0M7Ozs0QkFBeENQLFdBQVc7NEJBQ1hDLE9BQU9ELFNBQVNRLEtBQUtDLElBQUksU0FBQ0M7dUNBQVFBLElBQUlUOzs0QkFDNUNSLFNBQVNROzs7Ozs7WUFDWDs0QkFUTUg7Ozs7UUFXTkE7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFNYSxZQUFZLFNBQUNDO1FBQ2pCZixjQUFjZTtRQUNkakIsZUFBZTtJQUNqQjtJQUVBLElBQU1rQixhQUFhO1FBQ2pCbEIsZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVy9CLG1FQUFnQmdDOzswQkFDOUIsOERBQUNDO2dCQUFPRixXQUFXL0IsZ0VBQWFpQzswQkFDOUIsNEVBQUNIO29CQUFJQyxXQUFXL0IsbUVBQWdCa0M7O3NDQUM5Qiw4REFBQ0o7NEJBQUlDLFdBQVcvQix1RUFBb0JtQztzQ0FDbEMsNEVBQUNMO2dDQUFJQyxXQUFXL0IscUVBQWtCb0M7MENBQUU7Ozs7Ozs7Ozs7O3NDQUV0Qyw4REFBQ047NEJBQUlDLFdBQVcvQix3RUFBcUJxQztzQ0FDbkMsNEVBQUNwQyxrREFBSUE7Z0NBQUNxQyxNQUFLOzBDQUNULDRFQUFDUjtvQ0FBSUMsV0FBVy9CLG9FQUFpQnVDOztzREFDL0IsOERBQUNUOzRDQUFJQyxXQUFXL0Isd0VBQXFCd0M7Ozs7OztzREFDckMsOERBQUNWOzRDQUFJQyxXQUFXL0Isd0VBQXFCd0M7Ozs7OztzREFDckMsOERBQUNWOzRDQUFJQyxXQUFXL0Isd0VBQXFCd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNL0MsOERBQUN6QywwREFBTUE7Ozs7OzBCQUVQLDhEQUFDK0I7Z0JBQUlDLFdBQVcvQiw4REFBV3lDOzBCQUN4QmpDLE1BQU1pQixJQUFJLFNBQUNpQixNQUFNQzt5Q0FDaEIsOERBQUNiO3dCQUFnQkMsV0FBVy9CLGtFQUFlNEM7d0JBQUVDLFNBQVM7bUNBQU1sQixVQUFVZSxLQUFLZDs7a0NBQ3pFLDRFQUFDa0I7NEJBQUlDLEtBQUtMLEtBQUtkOzRCQUFVb0IsS0FBSTs7Ozs7O3VCQURyQkw7Ozs7Ozs7Ozs7O1lBTWJqQyw2QkFDQyw4REFBQ29CO2dCQUFJQyxXQUFXL0IsK0RBQVlpRDtnQkFBRUosU0FBU2hCOzBCQUNyQyw0RUFBQ0M7b0JBQUlDLFdBQVcvQixzRUFBbUJrRDtvQkFBRUwsU0FBUyxTQUFDTTsrQkFBTUEsRUFBRUM7OztzQ0FDckQsOERBQUNOOzRCQUFJQyxLQUFLbkM7NEJBQVlvQyxLQUFJOzs7Ozs7c0NBQzFCLDhEQUFDSzs0QkFBT1IsU0FBU2hCO3NDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQW5FTXRCO0tBQUFBO0FBcUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL0Jhbm5lcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUR6OTFWOGlRR3RLTGM4QzhUemhSd0dPTDJzb0J0c01Yb1wiLFxyXG4gIGF1dGhEb21haW46IFwidGVzdGVkZWx5di5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidGVzdGVkZWx5dlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGVkZWx5di5hcHBzcG90LmNvbVwiLFxyXG59O1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGFkb3MsIHNldERhZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxJbWFnZSwgc2V0TW9kYWxJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2RhZG9zJykuZ2V0KCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKTtcclxuICAgICAgc2V0RGFkb3MoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKGltYWdlVXJsKSA9PiB7XHJcbiAgICBzZXRNb2RhbEltYWdlKGltYWdlVXJsKTtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wTGVmdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGl0bGV9PnNlamEgYmVtIHZpbmRvKGEpIPCfkYs8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3BSaWdodH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9QYWluZWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9uTGluZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b25MaW5lfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbkxpbmV9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxCYW5uZXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAge2RhZG9zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b3J9IG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbChpdGVtLmltYWdlVXJsKX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBhbHQ9XCJQcm9kdWN0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtpc01vZGFsT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gb25DbGljaz17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0gb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17bW9kYWxJbWFnZX0gYWx0PVwiTW9kYWxcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PkZlY2hhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwiQmFubmVyIiwic3R5bGVzIiwiTGluayIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJIb21lIiwiZGFkb3MiLCJzZXREYWRvcyIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJtb2RhbEltYWdlIiwic2V0TW9kYWxJbWFnZSIsImZldGNoRGF0YSIsImRiIiwic25hcHNob3QiLCJkYXRhIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwiZG9jcyIsIm1hcCIsImRvYyIsIm9wZW5Nb2RhbCIsImltYWdlVXJsIiwiY2xvc2VNb2RhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhlYWRlciIsImhlYWRlclRvcCIsImhlYWRlclRvcExlZnQiLCJoZWFkZXJUaXRsZSIsImhlYWRlclRvcFJpZ2h0IiwiaHJlZiIsIm1lbnVCdXR0b24iLCJtZW51QnV0dG9uTGluZSIsImdyaWQiLCJpdGVtIiwiaW5kZXgiLCJwcm9kdXRvciIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJtb2RhbCIsIm1vZGFsQ29udGVudCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});