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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtor; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/components/Produtor/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nfunction Produtor(param) {\n    var imageUrl = param.imageUrl;\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), progress = _useState[0], setProgress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageLoaded = _useState1[0], setImageLoaded = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), items = _useState2[0], setItems = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            setProgress(function(prevProgress) {\n                if (prevProgress < 34) {\n                    return prevProgress + 1;\n                } else {\n                    return prevProgress;\n                }\n            });\n        }, 100);\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\n        var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();\n        var storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, imageUrl);\n        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then(function(url) {\n            setImageLoaded(true);\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter a URL da imagem:\", error);\n        });\n        var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n        var dadosCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"dados\");\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(dadosCollection).then(function(querySnapshot) {\n            var data = querySnapshot.docs.map(function(doc) {\n                return doc.data();\n            });\n            var itemsData = data.map(function(item) {\n                return {\n                    title: item.title,\n                    value: item.value\n                };\n            });\n            setItems(itemsData);\n        })[\"catch\"](function(error) {\n            console.log(\"Erro ao obter os dados do Firestore:\", error);\n        });\n        return function() {\n            clearInterval(timer);\n        };\n    }, [\n        imageUrl\n    ]);\n    if (!imageLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().loadingIndicator)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                                style: {\n                                    width: \"\".concat(progress, \"%\")\n                                },\n                                children: [\n                                    progress,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().head)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    items.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: [\n                                        \"Valor R$\",\n                                        item.value\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressFill),\n                            style: {\n                                width: \"\".concat(progress, \"%\")\n                            },\n                            children: [\n                                progress,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\components\\\\Produtor\\\\index.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Produtor, \"sVv6g68Ja41vHX1ZMCSEKDhKFfg=\");\n_c = Produtor;\nvar _c;\n$RefreshReg$(_c, \"Produtor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7NkNBQ2hCLDhEQUFDWjs7OENBQ0MsOERBQUNhOzhDQUFJakIsS0FBS0M7Ozs7Ozs4Q0FDViw4REFBQ2lCOzt3Q0FBRzt3Q0FBU2xCLEtBQUtFOzs7Ozs7OzsyQkFGVmM7Ozs7OztrQ0FNWiw4REFBQ1o7d0JBQUlDLFdBQVc3Qyx1RUFBaUJtRDtrQ0FDL0IsNEVBQUNQOzRCQUFJQyxXQUFXN0Msd0VBQWtCb0Q7NEJBQUVwRCxPQUFPO2dDQUFFcUQsT0FBTyxHQUFZLE9BQVR0QyxVQUFTOzRCQUFHOztnQ0FDaEVBO2dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0EvRndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1Byb2R1dG9yL2luZGV4LnRzeD9kZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUR6OTFWOGlRR3RLTGM4QzhUemhSd0dPTDJzb0J0c01Yb1wiLFxuICBhdXRoRG9tYWluOiBcInRlc3RlZGVseXYuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ0ZXN0ZWRlbHl2XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGVkZWx5di5hcHBzcG90LmNvbVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b3IoeyBpbWFnZVVybCB9KSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0UHJvZ3Jlc3MoKHByZXZQcm9ncmVzcykgPT4ge1xuICAgICAgICBpZiAocHJldlByb2dyZXNzIDwgMzQpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlByb2dyZXNzICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcHJldlByb2dyZXNzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgaW1hZ2VVcmwpO1xuXG4gICAgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZilcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJybyBhbyBvYnRlciBhIFVSTCBkYSBpbWFnZW06JywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xuICAgIGNvbnN0IGRhZG9zQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdkYWRvcycpO1xuXG4gICAgZ2V0RG9jcyhkYWRvc0NvbGxlY3Rpb24pXG4gICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKTtcblxuICAgICAgICBjb25zdCBpdGVtc0RhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldEl0ZW1zKGl0ZW1zRGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJybyBhbyBvYnRlciBvcyBkYWRvcyBkbyBGaXJlc3RvcmU6JywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfTtcbiAgfSwgW2ltYWdlVXJsXSk7XG5cbiAgaWYgKCFpbWFnZUxvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWR9PjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sb2FkaW5nSW5kaWNhdG9yfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzRmlsbH0gc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19PlxuICAgICAgICAgICAgICB7cHJvZ3Jlc3N9JVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZH0+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZ30+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxoND5WYWxvciBSJHtpdGVtLnZhbHVlfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzRmlsbH0gc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19PlxuICAgICAgICAgICAge3Byb2dyZXNzfSVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJpbml0aWFsaXplQXBwIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwiUHJvZHV0b3IiLCJpbWFnZVVybCIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiaXRlbXMiLCJzZXRJdGVtcyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2UHJvZ3Jlc3MiLCJzdG9yYWdlIiwic3RvcmFnZVJlZiIsInRoZW4iLCJ1cmwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRiIiwiZGFkb3NDb2xsZWN0aW9uIiwicXVlcnlTbmFwc2hvdCIsImRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaXRlbXNEYXRhIiwiaXRlbSIsInRpdGxlIiwidmFsdWUiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZCIsImluZm8iLCJpbWciLCJsb2FkaW5nSW5kaWNhdG9yIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc0ZpbGwiLCJ3aWR0aCIsInNyYyIsImFsdCIsImluZGV4IiwiaDMiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Produtor/index.tsx\n"));

/***/ })

});