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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl, title = param.title, value = param.value;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        // Inicializar o app do Firebase\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n        // Configurar o Firebase Storage\n        var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();\n        // Referência para o arquivo no Firebase Storage\n        var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n        // Obter a URL de download da imagem\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then(function(url) {\n            setImageLoaded(true);\n        // Fazer algo com a URL, se necessário\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter a URL da imagem:\", error);\n        });\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().img)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"Valor R$\",\n                            value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"q5U0tZCnTd81gyUbXG+1rfhOC4Q=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Byb2R1dG9yL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDSztBQUNzQjtBQUVuRSxJQUFNUSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7QUFDakI7QUFFZSxTQUFTQyxTQUFTLEtBQTBCO1FBQXhCQyxXQUFGLE1BQUVBLFVBQVVDLFFBQVosTUFBWUEsT0FBT0MsUUFBbkIsTUFBbUJBOztJQUNsRCxJQUFnQ2YsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWxDZ0IsV0FBeUJoQixjQUFmaUIsY0FBZWpCO0lBQ2hDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBeENrQixjQUErQmxCLGVBQWxCbUIsaUJBQWtCbkI7SUFFdENDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTW1CLFFBQVFDLFlBQVk7WUFDeEJKLFlBQVksU0FBQ0s7Z0JBQ1gsSUFBSUEsZUFBZSxJQUFJO29CQUNyQixPQUFPQSxlQUFlO2dCQUN4QixPQUFPO29CQUNMLE9BQU9BO2dCQUNUO1lBQ0Y7UUFDRixHQUFHO1FBRUgsZ0NBQWdDO1FBQ2hDbkIsMkRBQWFBLENBQUNJO1FBRWQsZ0NBQWdDO1FBQ2hDLElBQU1nQixVQUFVbkIsNERBQVVBO1FBRTFCLGdEQUFnRDtRQUNoRCxJQUFNb0IsYUFBYW5CLHFEQUFHQSxDQUFDa0IsU0FBU1Y7UUFFaEMsb0NBQW9DO1FBQ3BDUCxnRUFBY0EsQ0FBQ2tCLFlBQ1pDLEtBQUssU0FBQ0M7WUFDTFAsZUFBZTtRQUNmLHNDQUFzQztRQUN4QyxFQUNDUSxDQUFBQSxRQUFLLENBQUMsU0FBQ0M7WUFDTkMsUUFBUUMsSUFBSSxrQ0FBa0NGO1FBQ2hEO1FBRUYsT0FBTztZQUNMRyxjQUFjWDtRQUNoQjtJQUNGLEdBQUc7UUFBQ1A7S0FBUztJQUViLElBQUksQ0FBQ0ssYUFBYTtRQUNoQixxQkFDRSw4REFBQ2M7WUFBSUMsV0FBVy9CLHFFQUFlZ0M7OzhCQUM3Qiw4REFBQ0Y7b0JBQUlDLFdBQVcvQixnRUFBVWlDOzs7Ozs7OEJBRTFCLDhEQUFDSDtvQkFBSUMsV0FBVy9CLGdFQUFVa0M7O3NDQUN4Qiw4REFBQ0o7NEJBQUlDLFdBQVcvQiwrREFBU21DO3NDQUV2Qiw0RUFBQ0w7Z0NBQUlDLFdBQVcvQiw0RUFBc0JvQzs7Ozs7Ozs7Ozs7c0NBRXhDLDhEQUFDTjs0QkFBSUMsV0FBVy9CLHVFQUFpQnFDO3NDQUMvQiw0RUFBQ1A7Z0NBQUlDLFdBQVcvQix3RUFBa0JzQztnQ0FBRXRDLE9BQU87b0NBQUV1QyxPQUFPLEdBQVksT0FBVHpCLFVBQVM7Z0NBQUc7O29DQUNoRUE7b0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU10QjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVy9CLHFFQUFlZ0M7OzBCQUM3Qiw4REFBQ0Y7Z0JBQUlDLFdBQVcvQixnRUFBVWlDOzs7Ozs7MEJBRTFCLDhEQUFDSDtnQkFBSUMsV0FBVy9CLGdFQUFVa0M7O2tDQUN4Qiw4REFBQ0o7d0JBQUlDLFdBQVcvQiwrREFBU21DOzs7Ozs7a0NBR3pCLDhEQUFDSztrQ0FBSTVCOzs7Ozs7a0NBQ0wsOERBQUM2Qjs7NEJBQUc7NEJBQVM1Qjs7Ozs7OztrQ0FDYiw4REFBQ2lCO3dCQUFJQyxXQUFXL0IsdUVBQWlCcUM7a0NBQy9CLDRFQUFDUDs0QkFBSUMsV0FBVy9CLHdFQUFrQnNDOzRCQUFFdEMsT0FBTztnQ0FBRXVDLE9BQU8sR0FBWSxPQUFUekIsVUFBUzs0QkFBRzs7Z0NBQ2hFQTtnQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBN0V3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qcm9kdXRvci9pbmRleC50c3g/ZGQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCBnZXREb3dubG9hZFVSTCB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUR6OTFWOGlRR3RLTGM4QzhUemhSd0dPTDJzb0J0c01Yb1wiLFxuICBhdXRoRG9tYWluOiBcInRlc3RlZGVseXYuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ0ZXN0ZWRlbHl2XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGVkZWx5di5hcHBzcG90LmNvbVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b3IoeyBpbWFnZVVybCwgdGl0bGUsIHZhbHVlIH0pIHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFByb2dyZXNzKChwcmV2UHJvZ3Jlc3MpID0+IHtcbiAgICAgICAgaWYgKHByZXZQcm9ncmVzcyA8IDM0KSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZQcm9ncmVzcyArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZQcm9ncmVzcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMTAwKTtcblxuICAgIC8vIEluaWNpYWxpemFyIG8gYXBwIGRvIEZpcmViYXNlXG4gICAgaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbiAgICAvLyBDb25maWd1cmFyIG8gRmlyZWJhc2UgU3RvcmFnZVxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG5cbiAgICAvLyBSZWZlcsOqbmNpYSBwYXJhIG8gYXJxdWl2byBubyBGaXJlYmFzZSBTdG9yYWdlXG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBpbWFnZVVybCk7XG5cbiAgICAvLyBPYnRlciBhIFVSTCBkZSBkb3dubG9hZCBkYSBpbWFnZW1cbiAgICBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKVxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcbiAgICAgICAgLy8gRmF6ZXIgYWxnbyBjb20gYSBVUkwsIHNlIG5lY2Vzc8OhcmlvXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJybyBhbyBvYnRlciBhIFVSTCBkYSBpbWFnZW06JywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfTtcbiAgfSwgW2ltYWdlVXJsXSk7XG5cbiAgaWYgKCFpbWFnZUxvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nfT5cbiAgICAgICAgICAgIHsvKiBFeGliaXIgdW0gaW5kaWNhZG9yIGRlIGNhcnJlZ2FtZW50byBlbnF1YW50byBhIGltYWdlbSBlc3TDoSBzZW5kbyBjYXJyZWdhZGEgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9hZGluZ0luZGljYXRvcn0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PlxuICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICA8aDQ+VmFsb3IgUiR7dmFsdWV9PC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NGaWxsfSBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0+XG4gICAgICAgICAgICB7cHJvZ3Jlc3N9JVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsImluaXRpYWxpemVBcHAiLCJnZXRTdG9yYWdlIiwicmVmIiwiZ2V0RG93bmxvYWRVUkwiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwiUHJvZHV0b3IiLCJpbWFnZVVybCIsInRpdGxlIiwidmFsdWUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2UHJvZ3Jlc3MiLCJzdG9yYWdlIiwic3RvcmFnZVJlZiIsInRoZW4iLCJ1cmwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZWFkIiwiaW5mbyIsImltZyIsImxvYWRpbmdJbmRpY2F0b3IiLCJwcm9ncmVzc0JhciIsInByb2dyZXNzRmlsbCIsIndpZHRoIiwiaDMiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});