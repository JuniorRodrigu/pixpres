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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl, title = param.title, value = param.value;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        // Inicializar o app do Firebase\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n        // Configurar o Firebase Storage\n        var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();\n        // Referência para o arquivo no Firebase Storage\n        var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n        // Obter a URL de download da imagem\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then(function(url) {\n            setImageLoaded(true);\n        // Fazer algo com a URL, se necessário\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter a URL da imagem:\", error);\n        });\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"Valor R$\",\n                            value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"q5U0tZCnTd81gyUbXG+1rfhOC4Q=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Byb2R1dG9yL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDSztBQUNzQjtBQUVuRSxJQUFNUSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7QUFDakI7QUFFZSxTQUFTQyxTQUFTLEtBQTBCO1FBQXhCQyxXQUFGLE1BQUVBLFVBQVVDLFFBQVosTUFBWUEsT0FBT0MsUUFBbkIsTUFBbUJBOztJQUNsRCxJQUFnQ2YsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWxDZ0IsV0FBeUJoQixjQUFmaUIsY0FBZWpCO0lBQ2hDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBeENrQixjQUErQmxCLGVBQWxCbUIsaUJBQWtCbkI7SUFFdENDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTW1CLFFBQVFDLFlBQVk7WUFDeEJKLFlBQVksU0FBQ0s7Z0JBQ1gsSUFBSUEsZUFBZSxJQUFJO29CQUNyQixPQUFPQSxlQUFlO2dCQUN4QixPQUFPO29CQUNMLE9BQU9BO2dCQUNUO1lBQ0Y7UUFDRixHQUFHO1FBRUgsZ0NBQWdDO1FBQ2hDbkIsMkRBQWFBLENBQUNJO1FBRWQsZ0NBQWdDO1FBQ2hDLElBQU1nQixVQUFVbkIsNERBQVVBO1FBRTFCLGdEQUFnRDtRQUNoRCxJQUFNb0IsYUFBYW5CLHFEQUFHQSxDQUFDa0IsU0FBU1Y7UUFFaEMsb0NBQW9DO1FBQ3BDUCxnRUFBY0EsQ0FBQ2tCLFlBQ1pDLEtBQUssU0FBQ0M7WUFDTFAsZUFBZTtRQUNmLHNDQUFzQztRQUN4QyxFQUNDUSxDQUFBQSxRQUFLLENBQUMsU0FBQ0M7WUFDTkMsUUFBUUMsSUFBSSxrQ0FBa0NGO1FBQ2hEO1FBRUYsT0FBTztZQUNMRyxjQUFjWDtRQUNoQjtJQUNGLEdBQUc7UUFBQ1A7S0FBUztJQUViLElBQUksQ0FBQ0ssYUFBYTtRQUNoQixxQkFDRSw4REFBQ2M7WUFBSUMsV0FBVy9CLHFFQUFlZ0M7OzhCQUM3Qiw4REFBQ0Y7b0JBQUlDLFdBQVcvQixnRUFBVWlDOzs7Ozs7OEJBRTFCLDhEQUFDSDtvQkFBSUMsV0FBVy9CLGdFQUFVa0M7O3NDQUN4Qiw4REFBQ0o7NEJBQUlDLFdBQVcvQiwrREFBU21DO3NDQUV2Qiw0RUFBQ0w7Z0NBQUlDLFdBQVcvQiw0RUFBc0JvQzs7Ozs7Ozs7Ozs7c0NBRXhDLDhEQUFDTjs0QkFBSUMsV0FBVy9CLHVFQUFpQnFDO3NDQUMvQiw0RUFBQ1A7Z0NBQUlDLFdBQVcvQix3RUFBa0JzQztnQ0FBRXRDLE9BQU87b0NBQUV1QyxPQUFPLEdBQVksT0FBVHpCLFVBQVM7Z0NBQUc7O29DQUNoRUE7b0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU10QjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVy9CLHFFQUFlZ0M7OzBCQUM3Qiw4REFBQ0Y7Z0JBQUlDLFdBQVcvQixnRUFBVWlDOzs7Ozs7MEJBRTFCLDhEQUFDSDtnQkFBSUMsV0FBVy9CLGdFQUFVa0M7O2tDQUN4Qiw4REFBQ0o7d0JBQUlDLFdBQVcvQiwrREFBU21DO2tDQUN2Qiw0RUFBQ0E7NEJBQUlLLEtBQUs3Qjs0QkFBVThCLEtBQUk7Ozs7Ozs7Ozs7O2tDQUUxQiw4REFBQ0M7a0NBQUk5Qjs7Ozs7O2tDQUNMLDhEQUFDK0I7OzRCQUFHOzRCQUFTOUI7Ozs7Ozs7a0NBQ2IsOERBQUNpQjt3QkFBSUMsV0FBVy9CLHVFQUFpQnFDO2tDQUMvQiw0RUFBQ1A7NEJBQUlDLFdBQVcvQix3RUFBa0JzQzs0QkFBRXRDLE9BQU87Z0NBQUV1QyxPQUFPLEdBQVksT0FBVHpCLFVBQVM7NEJBQUc7O2dDQUNoRUE7Z0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTdFd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUHJvZHV0b3IvaW5kZXgudHN4P2RkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEejkxVjhpUUd0S0xjOEM4VHpoUndHT0wyc29CdHNNWG9cIixcbiAgYXV0aERvbWFpbjogXCJ0ZXN0ZWRlbHl2LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidGVzdGVkZWx5dlwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRlc3RlZGVseXYuYXBwc3BvdC5jb21cIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1dG9yKHsgaW1hZ2VVcmwsIHRpdGxlLCB2YWx1ZSB9KSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PiB7XG4gICAgICAgIGlmIChwcmV2UHJvZ3Jlc3MgPCAzNCkge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3MgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICAvLyBJbmljaWFsaXphciBvIGFwcCBkbyBGaXJlYmFzZVxuICAgIGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4gICAgLy8gQ29uZmlndXJhciBvIEZpcmViYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuXG4gICAgLy8gUmVmZXLDqm5jaWEgcGFyYSBvIGFycXVpdm8gbm8gRmlyZWJhc2UgU3RvcmFnZVxuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgaW1hZ2VVcmwpO1xuXG4gICAgLy8gT2J0ZXIgYSBVUkwgZGUgZG93bmxvYWQgZGEgaW1hZ2VtXG4gICAgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZilcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XG4gICAgICAgIC8vIEZhemVyIGFsZ28gY29tIGEgVVJMLCBzZSBuZWNlc3PDoXJpb1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gb2J0ZXIgYSBVUkwgZGEgaW1hZ2VtOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH07XG4gIH0sIFtpbWFnZVVybF0pO1xuXG4gIGlmICghaW1hZ2VMb2FkZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkfT48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZ30+XG4gICAgICAgICAgICB7LyogRXhpYmlyIHVtIGluZGljYWRvciBkZSBjYXJyZWdhbWVudG8gZW5xdWFudG8gYSBpbWFnZW0gZXN0w6Egc2VuZG8gY2FycmVnYWRhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvYWRpbmdJbmRpY2F0b3J9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NGaWxsfSBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0+XG4gICAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkfT48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxoND5WYWxvciBSJHt2YWx1ZX08L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiaW5pdGlhbGl6ZUFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJQcm9kdXRvciIsImltYWdlVXJsIiwidGl0bGUiLCJ2YWx1ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInByZXZQcm9ncmVzcyIsInN0b3JhZ2UiLCJzdG9yYWdlUmVmIiwidGhlbiIsInVybCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhlYWQiLCJpbmZvIiwiaW1nIiwibG9hZGluZ0luZGljYXRvciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3NGaWxsIiwid2lkdGgiLCJzcmMiLCJhbHQiLCJoMyIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});