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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl, productId = param.productId;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), value = _useState3[0], setValue = _useState3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n                var app, storage, storageRef, url, error, firestore, productDocRef, docSnapshot, data, error1;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n                            storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n                            storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef)\n                            ];\n                        case 2:\n                            url = _state.sent();\n                            setImageLoaded(true);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.log(\"Erro ao obter a URL da imagem:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n                            if (!productId) {\n                                console.log(\"O productId \\xe9 inv\\xe1lido ou indefinido.\");\n                                return [\n                                    2\n                                ];\n                            }\n                            productDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(firestore, \"dados\", productId);\n                            _state.label = 5;\n                        case 5:\n                            _state.trys.push([\n                                5,\n                                7,\n                                ,\n                                8\n                            ]);\n                            return [\n                                4,\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(productDocRef)\n                            ];\n                        case 6:\n                            docSnapshot = _state.sent();\n                            if (docSnapshot.exists()) {\n                                data = docSnapshot.data();\n                                console.log(\"Dados obtidos:\", data);\n                                console.log(\"T\\xedtulo:\", data === null || data === void 0 ? void 0 : data.title);\n                                console.log(\"Valor:\", data === null || data === void 0 ? void 0 : data.value);\n                                setTitle(data === null || data === void 0 ? void 0 : data.title);\n                                setValue(data === null || data === void 0 ? void 0 : data.value);\n                            } else {\n                                console.log(\"O documento do produto n\\xe3o existe.\");\n                            }\n                            return [\n                                3,\n                                8\n                            ];\n                        case 7:\n                            error1 = _state.sent();\n                            console.log(\"Erro ao obter o documento do produto:\", error1);\n                            return [\n                                3,\n                                8\n                            ];\n                        case 8:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl,\n        productId\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    title && value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Valor R$\",\n                                    value\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, productId, true, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"HGX+dhFyd3p1JWxWwDqc31XN4Rc=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXMUMsNEVBQXNCK0M7Ozs7Ozs7Ozs7O3NDQUV4Qyw4REFBQ047NEJBQUlDLFdBQVcxQyx1RUFBaUJnRDtzQ0FDL0IsNEVBQUNQO2dDQUFJQyxXQUFXMUMsd0VBQWtCaUQ7Z0NBQUVqRCxPQUFPO29DQUFFa0QsT0FBTyxHQUFZLE9BQVRsQyxVQUFTO2dDQUFHOztvQ0FDaEVBO29DQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNdEI7SUFFQSxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVcxQyxxRUFBZTJDOzswQkFDN0IsOERBQUNGO2dCQUFJQyxXQUFXMUMsZ0VBQVU0Qzs7Ozs7OzBCQUUxQiw4REFBQ0g7Z0JBQUlDLFdBQVcxQyxnRUFBVTZDOztrQ0FDeEIsOERBQUNKO3dCQUFJQyxXQUFXMUMsK0RBQVM4QztrQ0FDdkIsNEVBQUNBOzRCQUFJSyxLQUFLckM7NEJBQVVzQyxLQUFJOzs7Ozs7Ozs7OztvQkFFekJoQyxTQUFTRSx1QkFDUiw4REFBQ21COzswQ0FDQyw4REFBQ1k7MENBQUlqQzs7Ozs7OzBDQUNMLDhEQUFDa0M7O29DQUFHO29DQUFTaEM7Ozs7Ozs7O3VCQUZMUDs7Ozs7a0NBS1osOERBQUMwQjt3QkFBSUMsV0FBVzFDLHVFQUFpQmdEO2tDQUMvQiw0RUFBQ1A7NEJBQUlDLFdBQVcxQyx3RUFBa0JpRDs0QkFBRWpELE9BQU87Z0NBQUVrRCxPQUFPLEdBQVksT0FBVGxDLFVBQVM7NEJBQUc7O2dDQUNoRUE7Z0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTFHd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUHJvZHV0b3IvaW5kZXgudHN4P2RkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUR6OTFWOGlRR3RLTGM4QzhUemhSd0dPTDJzb0J0c01Yb1wiLFxuICBhdXRoRG9tYWluOiBcInRlc3RlZGVseXYuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ0ZXN0ZWRlbHl2XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGVkZWx5di5hcHBzcG90LmNvbVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b3IoeyBpbWFnZVVybCwgcHJvZHVjdElkIH0pIHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0UHJvZ3Jlc3MoKHByZXZQcm9ncmVzcykgPT4ge1xuICAgICAgICBpZiAocHJldlByb2dyZXNzIDwgMzQpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlByb2dyZXNzICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcHJldlByb2dyZXNzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBpbWFnZVVybCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpO1xuICAgICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvIGFvIG9idGVyIGEgVVJMIGRhIGltYWdlbTonLCBlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xuXG4gICAgICBpZiAoIXByb2R1Y3RJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTyBwcm9kdWN0SWQgw6kgaW52w6FsaWRvIG91IGluZGVmaW5pZG8uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZHVjdERvY1JlZiA9IGRvYyhmaXJlc3RvcmUsICdkYWRvcycsIHByb2R1Y3RJZCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRvY1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKHByb2R1Y3REb2NSZWYpO1xuICAgICAgICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gZG9jU25hcHNob3QuZGF0YSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYWRvcyBvYnRpZG9zOicsIGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdUw610dWxvOicsIGRhdGE/LnRpdGxlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVmFsb3I6JywgZGF0YT8udmFsdWUpO1xuICAgICAgICAgIHNldFRpdGxlKGRhdGE/LnRpdGxlKTtcbiAgICAgICAgICBzZXRWYWx1ZShkYXRhPy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ08gZG9jdW1lbnRvIGRvIHByb2R1dG8gbsOjbyBleGlzdGUuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvIGFvIG9idGVyIG8gZG9jdW1lbnRvIGRvIHByb2R1dG86JywgZXJyb3IpO1xuICAgICAgICAvLyBMw7NnaWNhIGFkaWNpb25hbCBwYXJhIGxpZGFyIGNvbSBvIGVycm8sIHNlIG5lY2Vzc8OhcmlvXG4gICAgICAgIC8vIEV4ZW1wbG86IHNldFRpdGxlKCdFcnJvIGFvIG9idGVyIG8gdMOtdHVsbycpO1xuICAgICAgICAvLyAgICAgICAgICBzZXRWYWx1ZSgnRXJybyBhbyBvYnRlciBvIHZhbG9yJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfTtcbiAgfSwgW2ltYWdlVXJsLCBwcm9kdWN0SWRdKTtcblxuICBpZiAoIWltYWdlTG9hZGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZH0+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm99PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvYWRpbmdJbmRpY2F0b3J9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NGaWxsfSBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0+XG4gICAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkfT48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGl0bGUgJiYgdmFsdWUgJiYgKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0SWR9PlxuICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPGg0PlZhbG9yIFIke3ZhbHVlfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzRmlsbH0gc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19PlxuICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJpbml0aWFsaXplQXBwIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiZ2V0RG9jIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIlByb2R1dG9yIiwiaW1hZ2VVcmwiLCJwcm9kdWN0SWQiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsInRpdGxlIiwic2V0VGl0bGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInByZXZQcm9ncmVzcyIsImZldGNoRGF0YSIsImFwcCIsInN0b3JhZ2UiLCJzdG9yYWdlUmVmIiwidXJsIiwiZXJyb3IiLCJmaXJlc3RvcmUiLCJwcm9kdWN0RG9jUmVmIiwiZG9jU25hcHNob3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZWFkIiwiaW5mbyIsImltZyIsImxvYWRpbmdJbmRpY2F0b3IiLCJwcm9ncmVzc0JhciIsInByb2dyZXNzRmlsbCIsIndpZHRoIiwic3JjIiwiYWx0IiwiaDMiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});