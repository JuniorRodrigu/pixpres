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

/***/ "./pages/components/Produtor/index.tsx":
/*!*********************************************!*\
  !*** ./pages/components/Produtor/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl, productId = param.productId;\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), value = _useState3[0], setValue = _useState3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n                var app, storage, storageRef, url, error, firestore, productDocRef, docSnapshot, data, error1;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n                            storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n                            storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef)\n                            ];\n                        case 2:\n                            url = _state.sent();\n                            setImageLoaded(true);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.log(\"Erro ao obter a URL da imagem:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n                            if (!productId) {\n                                console.log(\"O productId \\xe9 inv\\xe1lido ou indefinido.\");\n                                return [\n                                    2\n                                ];\n                            }\n                            productDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(firestore, \"dados\", productId);\n                            _state.label = 5;\n                        case 5:\n                            _state.trys.push([\n                                5,\n                                7,\n                                ,\n                                8\n                            ]);\n                            return [\n                                4,\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(productDocRef)\n                            ];\n                        case 6:\n                            docSnapshot = _state.sent();\n                            if (docSnapshot.exists()) {\n                                data = docSnapshot.data();\n                                console.log(\"Dados obtidos:\", data);\n                                console.log(\"T\\xedtulo:\", data.title);\n                                console.log(\"Valor:\", data.value);\n                                setTitle(data.title);\n                                setValue(data.value);\n                            } else {\n                                console.log(\"O documento do produto n\\xe3o existe.\");\n                            }\n                            return [\n                                3,\n                                8\n                            ];\n                        case 7:\n                            error1 = _state.sent();\n                            console.log(\"Erro ao obter o documento do produto:\", error1);\n                            return [\n                                3,\n                                8\n                            ];\n                        case 8:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl,\n        productId\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    dataList.map(function(data) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: [\n                                        \"Valor R$\",\n                                        value\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 9\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"HGX+dhFyd3p1JWxWwDqc31XN4Rc=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRWpELE9BQU87b0NBQUVrRCxPQUFPLEdBQVksT0FBVGxDLFVBQVM7Z0NBQUc7O29DQUNoRUE7b0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU10QjtJQUVBLHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBVzFDLHFFQUFlMkM7OzBCQUM3Qiw4REFBQ0Y7Z0JBQUlDLFdBQVcxQyxnRUFBVTRDOzs7Ozs7MEJBRTFCLDhEQUFDSDtnQkFBSUMsV0FBVzFDLGdFQUFVNkM7O2tDQUN4Qiw4REFBQ0o7d0JBQUlDLFdBQVcxQywrREFBUzhDO2tDQUN2Qiw0RUFBQ0E7NEJBQUlLLEtBQUtyQzs0QkFBVXNDLEtBQUk7Ozs7Ozs7Ozs7O29CQUV6QkMsU0FBU0MsSUFBSSxTQUFDbEI7NkNBQ2YsOERBQUNLOzs4Q0FDRCw4REFBQ2M7Ozs7OzhDQUNELDhEQUFDQzs7d0NBQUc7d0NBQVNsQzs7Ozs7Ozs7Ozs7Ozs7a0NBR2IsOERBQUNtQjt3QkFBSUMsV0FBVzFDLHVFQUFpQmdEO2tDQUMvQiw0RUFBQ1A7NEJBQUlDLFdBQVcxQyx3RUFBa0JpRDs0QkFBRWpELE9BQU87Z0NBQUVrRCxPQUFPLEdBQVksT0FBVGxDLFVBQVM7NEJBQUc7O2dDQUNoRUE7Z0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQXZHd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUHJvZHV0b3IvaW5kZXgudHN4P2RkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUR6OTFWOGlRR3RLTGM4QzhUemhSd0dPTDJzb0J0c01Yb1wiLFxuICBhdXRoRG9tYWluOiBcInRlc3RlZGVseXYuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ0ZXN0ZWRlbHl2XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGVkZWx5di5hcHBzcG90LmNvbVwiLFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdXRvcih7IGltYWdlVXJsLCBwcm9kdWN0SWQgfSkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PiB7XG4gICAgICAgIGlmIChwcmV2UHJvZ3Jlc3MgPCAzNCkge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3MgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGltYWdlVXJsKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZik7XG4gICAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gb2J0ZXIgYSBVUkwgZGEgaW1hZ2VtOicsIGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XG5cbiAgICAgIGlmICghcHJvZHVjdElkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPIHByb2R1Y3RJZCDDqSBpbnbDoWxpZG8gb3UgaW5kZWZpbmlkby4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9kdWN0RG9jUmVmID0gZG9jKGZpcmVzdG9yZSwgJ2RhZG9zJywgcHJvZHVjdElkKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZG9jU25hcHNob3QgPSBhd2FpdCBnZXREb2MocHJvZHVjdERvY1JlZik7XG4gICAgICAgIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2NTbmFwc2hvdC5kYXRhKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0RhZG9zIG9idGlkb3M6JywgZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1TDrXR1bG86JywgZGF0YS50aXRsZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZhbG9yOicsIGRhdGEudmFsdWUpO1xuICAgICAgICAgIHNldFRpdGxlKGRhdGEudGl0bGUpO1xuICAgICAgICAgIHNldFZhbHVlKGRhdGEudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPIGRvY3VtZW50byBkbyBwcm9kdXRvIG7Do28gZXhpc3RlLicpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJybyBhbyBvYnRlciBvIGRvY3VtZW50byBkbyBwcm9kdXRvOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaERhdGEoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9O1xuICB9LCBbaW1hZ2VVcmwsIHByb2R1Y3RJZF0pO1xuXG4gIGlmICghaW1hZ2VMb2FkZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkfT48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9hZGluZ0luZGljYXRvcn0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtkYXRhTGlzdC5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgPGRpdiAgPlxuICAgICAgICA8aDM+e308L2gzPlxuICAgICAgICA8aDQ+VmFsb3IgUiR7dmFsdWV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiaW5pdGlhbGl6ZUFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJQcm9kdXRvciIsImltYWdlVXJsIiwicHJvZHVjdElkIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJ0aXRsZSIsInNldFRpdGxlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2UHJvZ3Jlc3MiLCJmZXRjaERhdGEiLCJhcHAiLCJzdG9yYWdlIiwic3RvcmFnZVJlZiIsInVybCIsImVycm9yIiwiZmlyZXN0b3JlIiwicHJvZHVjdERvY1JlZiIsImRvY1NuYXBzaG90IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJleGlzdHMiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZCIsImluZm8iLCJpbWciLCJsb2FkaW5nSW5kaWNhdG9yIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc0ZpbGwiLCJ3aWR0aCIsInNyYyIsImFsdCIsImRhdGFMaXN0IiwibWFwIiwiaDMiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});