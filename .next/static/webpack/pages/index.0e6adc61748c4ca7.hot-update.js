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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), value = _useState3[0], setValue = _useState3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 1000);\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n        var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();\n        var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then(function(url) {\n            setImageLoaded(true);\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter a URL da imagem:\", error);\n        });\n        var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n        var dadosCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"dados\");\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(dadosCollection).then(function(querySnapshot) {\n            var data = querySnapshot.docs.map(function(doc) {\n                return doc.data();\n            });\n            var firstItem = data[0];\n            var itemTitle = firstItem.title;\n            var itemValue = firstItem.value;\n            setTitle(itemTitle);\n            setValue(itemValue);\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter os dados do Firestore:\", error);\n        });\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"Valor R$\",\n                            value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"HGX+dhFyd3p1JWxWwDqc31XN4Rc=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZCLDRFQUFDQTs0QkFBSUssS0FBS3pDOzRCQUFVMEMsS0FBSTs7Ozs7Ozs7Ozs7a0NBRTFCLDhEQUFDQztrQ0FBSXRDOzs7Ozs7a0NBQ0wsOERBQUN1Qzs7NEJBQUc7NEJBQVNyQzs7Ozs7OztrQ0FDYiw4REFBQ3dCO3dCQUFJQyxXQUFXOUMsdUVBQWlCb0Q7a0NBQy9CLDRFQUFDUDs0QkFBSUMsV0FBVzlDLHdFQUFrQnFEOzRCQUFFckQsT0FBTztnQ0FBRXNELE9BQU8sR0FBWSxPQUFUdkMsVUFBUzs0QkFBRzs7Z0NBQ2hFQTtnQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBekZ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qcm9kdXRvci9pbmRleC50c3g/ZGQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCBnZXREb3dubG9hZFVSTCB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEejkxVjhpUUd0S0xjOEM4VHpoUndHT0wyc29CdHNNWG9cIixcbiAgYXV0aERvbWFpbjogXCJ0ZXN0ZWRlbHl2LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidGVzdGVkZWx5dlwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRlc3RlZGVseXYuYXBwc3BvdC5jb21cIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1dG9yKHsgaW1hZ2VVcmwgfSkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PiB7XG4gICAgICAgIGlmIChwcmV2UHJvZ3Jlc3MgPCAzNCkge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3MgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcmV2UHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuXG4gICAgaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGltYWdlVXJsKTtcblxuICAgIGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpXG4gICAgICAudGhlbigodXJsKSA9PiB7XG4gICAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gb2J0ZXIgYSBVUkwgZGEgaW1hZ2VtOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbiAgICBjb25zdCBkYWRvc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAnZGFkb3MnKTtcblxuICAgIGdldERvY3MoZGFkb3NDb2xsZWN0aW9uKVxuICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gZGF0YVswXTtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZmlyc3RJdGVtLnRpdGxlO1xuICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBmaXJzdEl0ZW0udmFsdWU7XG5cbiAgICAgICAgc2V0VGl0bGUoaXRlbVRpdGxlKTtcbiAgICAgICAgc2V0VmFsdWUoaXRlbVZhbHVlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvIGFvIG9idGVyIG9zIGRhZG9zIGRvIEZpcmVzdG9yZTonLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9O1xuICB9LCBbaW1hZ2VVcmxdKTtcblxuICBpZiAoIWltYWdlTG9hZGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZH0+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm99PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvYWRpbmdJbmRpY2F0b3J9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NGaWxsfSBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0+XG4gICAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkfT48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxoND5WYWxvciBSJHt2YWx1ZX08L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0ZpbGx9IHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fT5cbiAgICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiaW5pdGlhbGl6ZUFwcCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIlByb2R1dG9yIiwiaW1hZ2VVcmwiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsInRpdGxlIiwic2V0VGl0bGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInByZXZQcm9ncmVzcyIsInN0b3JhZ2UiLCJzdG9yYWdlUmVmIiwidGhlbiIsInVybCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJkYWRvc0NvbGxlY3Rpb24iLCJxdWVyeVNuYXBzaG90IiwiZGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJmaXJzdEl0ZW0iLCJpdGVtVGl0bGUiLCJpdGVtVmFsdWUiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZCIsImluZm8iLCJpbWciLCJsb2FkaW5nSW5kaWNhdG9yIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc0ZpbGwiLCJ3aWR0aCIsInNyYyIsImFsdCIsImgzIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});