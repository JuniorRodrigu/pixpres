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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"YOUR_API_KEY\",\n    authDomain: \"YOUR_AUTH_DOMAIN\",\n    projectId: \"YOUR_PROJECT_ID\",\n    storageBucket: \"YOUR_STORAGE_BUCKET\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl;\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), items = _useState2[0], setItems = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n        var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();\n        var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then(function(url) {\n            setImageLoaded(true);\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter a URL da imagem:\", error);\n        });\n        var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n        var dadosCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"dados\");\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(dadosCollection).then(function(querySnapshot) {\n            var data = querySnapshot.docs.map(function(doc) {\n                return doc.data();\n            });\n            var itemsData = data.map(function(item) {\n                return {\n                    title: item.title,\n                    value: item.value\n                };\n            });\n            setItems(itemsData);\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter os dados do Firestore:\", error);\n        });\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    items.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: [\n                                        \"Valor R$\",\n                                        item.value\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"sVv6g68Ja41vHX1ZMCSEKDhKFfg=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7NkNBQ2hCLDhEQUFDWjs7OENBQ0MsOERBQUNhOzhDQUFJakIsS0FBS0M7Ozs7Ozs4Q0FDViw4REFBQ2lCOzt3Q0FBRzt3Q0FBU2xCLEtBQUtFOzs7Ozs7OzsyQkFGVmM7Ozs7OztrQ0FNWiw4REFBQ1o7d0JBQUlDLFdBQVc3Qyx1RUFBaUJtRDtrQ0FDL0IsNEVBQUNQOzRCQUFJQyxXQUFXN0Msd0VBQWtCb0Q7NEJBQUVwRCxPQUFPO2dDQUFFcUQsT0FBTyxHQUFZLE9BQVR0QyxVQUFTOzRCQUFHOztnQ0FDaEVBO2dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0EvRndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1Byb2R1dG9yL2luZGV4LnRzeD9kZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIllPVVJfQVBJX0tFWVwiLFxuICBhdXRoRG9tYWluOiBcIllPVVJfQVVUSF9ET01BSU5cIixcbiAgcHJvamVjdElkOiBcIllPVVJfUFJPSkVDVF9JRFwiLFxuICBzdG9yYWdlQnVja2V0OiBcIllPVVJfU1RPUkFHRV9CVUNLRVRcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1dG9yKHsgaW1hZ2VVcmwgfSkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFByb2dyZXNzKChwcmV2UHJvZ3Jlc3MpID0+IHtcbiAgICAgICAgaWYgKHByZXZQcm9ncmVzcyA8IDM0KSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZQcm9ncmVzcyArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZQcm9ncmVzcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMTAwKTtcblxuICAgIGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGltYWdlVXJsKTtcblxuICAgIGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpXG4gICAgICAudGhlbigodXJsKSA9PiB7XG4gICAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gb2J0ZXIgYSBVUkwgZGEgaW1hZ2VtOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbiAgICBjb25zdCBkYWRvc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAnZGFkb3MnKTtcblxuICAgIGdldERvY3MoZGFkb3NDb2xsZWN0aW9uKVxuICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XG5cbiAgICAgICAgY29uc3QgaXRlbXNEYXRhID0gZGF0YS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRJdGVtcyhpdGVtc0RhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gb2J0ZXIgb3MgZGFkb3MgZG8gRmlyZXN0b3JlOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH07XG4gIH0sIFtpbWFnZVVybF0pO1xuXG4gIGlmICghaW1hZ2VMb2FkZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkfT48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9hZGluZ0luZGljYXRvcn0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8aDQ+VmFsb3IgUiR7aXRlbS52YWx1ZX08L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiaW5pdGlhbGl6ZUFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIlByb2R1dG9yIiwiaW1hZ2VVcmwiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsIml0ZW1zIiwic2V0SXRlbXMiLCJ0aW1lciIsInNldEludGVydmFsIiwicHJldlByb2dyZXNzIiwic3RvcmFnZSIsInN0b3JhZ2VSZWYiLCJ0aGVuIiwidXJsIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImRhZG9zQ29sbGVjdGlvbiIsInF1ZXJ5U25hcHNob3QiLCJkYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsIml0ZW1zRGF0YSIsIml0ZW0iLCJ0aXRsZSIsInZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhlYWQiLCJpbmZvIiwiaW1nIiwibG9hZGluZ0luZGljYXRvciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3NGaWxsIiwid2lkdGgiLCJzcmMiLCJhbHQiLCJpbmRleCIsImgzIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});