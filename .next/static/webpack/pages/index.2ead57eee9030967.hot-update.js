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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"<sua-api-key>\",\n    authDomain: \"<seu-auth-domain>\",\n    projectId: \"<seu-project-id>\",\n    storageBucket: \"<seu-storage-bucket>\",\n    databaseURL: \"<sua-database-url>\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl, productId = param.productId;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), value = _useState3[0], setValue = _useState3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        // Inicializar o app do Firebase\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n        // Configurar o Firebase Storage\n        var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();\n        // Referência para o arquivo no Firebase Storage\n        var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n        // Obter a URL de download da imagem\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then(function(url) {\n            setImageLoaded(true);\n        // Fazer algo com a URL, se necessário\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter a URL da imagem:\", error);\n        });\n        // Configurar o Firebase Firestore\n        var firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n        // Consultar o documento do produto no Firestore\n        var productDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(firestore, \"produtos\", productId);\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(productDocRef).then(function(docSnapshot) {\n            if (docSnapshot.exists()) {\n                var data = docSnapshot.data();\n                setTitle(data.title);\n                setValue(data.value);\n            } else {\n                console.log(\"O documento do produto n\\xe3o existe.\");\n            }\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter o documento do produto:\", error);\n        });\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl,\n        productId\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"Valor R$\",\n                            value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"HGX+dhFyd3p1JWxWwDqc31XN4Rc=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXM0MsZ0VBQVU2Qzs7Ozs7OzBCQUUxQiw4REFBQ0g7Z0JBQUlDLFdBQVczQyxnRUFBVThDOztrQ0FDeEIsOERBQUNKO3dCQUFJQyxXQUFXM0MsK0RBQVMrQztrQ0FDdkIsNEVBQUNBOzRCQUFJSyxLQUFLckM7NEJBQVVzQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNDO2tDQUFJakM7Ozs7OztrQ0FDTCw4REFBQ2tDOzs0QkFBRzs0QkFBU2hDOzs7Ozs7O2tDQUNiLDhEQUFDbUI7d0JBQUlDLFdBQVczQyx1RUFBaUJpRDtrQ0FDL0IsNEVBQUNQOzRCQUFJQyxXQUFXM0Msd0VBQWtCa0Q7NEJBQUVsRCxPQUFPO2dDQUFFbUQsT0FBTyxHQUFZLE9BQVRsQyxVQUFTOzRCQUFHOztnQ0FDaEVBO2dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0FuR3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1Byb2R1dG9yL2luZGV4LnRzeD9kZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCI8c3VhLWFwaS1rZXk+XCIsXG4gIGF1dGhEb21haW46IFwiPHNldS1hdXRoLWRvbWFpbj5cIixcbiAgcHJvamVjdElkOiBcIjxzZXUtcHJvamVjdC1pZD5cIixcbiAgc3RvcmFnZUJ1Y2tldDogXCI8c2V1LXN0b3JhZ2UtYnVja2V0PlwiLFxuICBkYXRhYmFzZVVSTDogXCI8c3VhLWRhdGFiYXNlLXVybD5cIiwgLy8gQWRpY2lvbmUgYSBVUkwgZG8gQ2xvdWQgRmlyZXN0b3JlIHNlIG5lY2Vzc8OhcmlvXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdXRvcih7IGltYWdlVXJsLCBwcm9kdWN0SWQgfSkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PiB7XG4gICAgICAgIGlmIChwcmV2UHJvZ3Jlc3MgPCAzNCkge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3MgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICAvLyBJbmljaWFsaXphciBvIGFwcCBkbyBGaXJlYmFzZVxuICAgIGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4gICAgLy8gQ29uZmlndXJhciBvIEZpcmViYXNlIFN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuXG4gICAgLy8gUmVmZXLDqm5jaWEgcGFyYSBvIGFycXVpdm8gbm8gRmlyZWJhc2UgU3RvcmFnZVxuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgaW1hZ2VVcmwpO1xuXG4gICAgLy8gT2J0ZXIgYSBVUkwgZGUgZG93bmxvYWQgZGEgaW1hZ2VtXG4gICAgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZilcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XG4gICAgICAgIC8vIEZhemVyIGFsZ28gY29tIGEgVVJMLCBzZSBuZWNlc3PDoXJpb1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gb2J0ZXIgYSBVUkwgZGEgaW1hZ2VtOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQ29uZmlndXJhciBvIEZpcmViYXNlIEZpcmVzdG9yZVxuICAgIGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xuXG4gICAgLy8gQ29uc3VsdGFyIG8gZG9jdW1lbnRvIGRvIHByb2R1dG8gbm8gRmlyZXN0b3JlXG4gICAgY29uc3QgcHJvZHVjdERvY1JlZiA9IGRvYyhmaXJlc3RvcmUsICdwcm9kdXRvcycsIHByb2R1Y3RJZCk7XG5cbiAgICBnZXREb2MocHJvZHVjdERvY1JlZilcbiAgICAgIC50aGVuKChkb2NTbmFwc2hvdCkgPT4ge1xuICAgICAgICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gZG9jU25hcHNob3QuZGF0YSgpO1xuICAgICAgICAgIHNldFRpdGxlKGRhdGEudGl0bGUpO1xuICAgICAgICAgIHNldFZhbHVlKGRhdGEudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPIGRvY3VtZW50byBkbyBwcm9kdXRvIG7Do28gZXhpc3RlLicpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJybyBhbyBvYnRlciBvIGRvY3VtZW50byBkbyBwcm9kdXRvOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH07XG4gIH0sIFtpbWFnZVVybCwgcHJvZHVjdElkXSk7XG5cbiAgaWYgKCFpbWFnZUxvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nfT5cbiAgICAgICAgICAgIHsvKiBFeGliaXIgdW0gaW5kaWNhZG9yIGRlIGNhcnJlZ2FtZW50byBlbnF1YW50byBhIGltYWdlbSBlc3TDoSBzZW5kbyBjYXJyZWdhZGEgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9hZGluZ0luZGljYXRvcn0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPGg0PlZhbG9yIFIke3ZhbHVlfTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzRmlsbH0gc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19PlxuICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJpbml0aWFsaXplQXBwIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwiZ2V0RG9jIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsImRhdGFiYXNlVVJMIiwiUHJvZHV0b3IiLCJpbWFnZVVybCIsInByb2R1Y3RJZCIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwidGl0bGUiLCJzZXRUaXRsZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0aW1lciIsInNldEludGVydmFsIiwicHJldlByb2dyZXNzIiwic3RvcmFnZSIsInN0b3JhZ2VSZWYiLCJ0aGVuIiwidXJsIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaXJlc3RvcmUiLCJwcm9kdWN0RG9jUmVmIiwiZG9jU25hcHNob3QiLCJleGlzdHMiLCJkYXRhIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhlYWQiLCJpbmZvIiwiaW1nIiwibG9hZGluZ0luZGljYXRvciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3NGaWxsIiwid2lkdGgiLCJzcmMiLCJhbHQiLCJoMyIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ }),

/***/ "./node_modules/firebase/firestore/dist/esm/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/esm/index.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvZmlyZXN0b3JlL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvZmlyZXN0b3JlL2Rpc3QvZXNtL2luZGV4LmVzbS5qcz84NDM1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9maXJlc3RvcmUnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/firebase/firestore/dist/esm/index.esm.js\n"));

/***/ })

});