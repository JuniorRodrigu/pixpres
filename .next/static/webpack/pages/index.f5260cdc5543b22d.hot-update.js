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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_Produtor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Produtor */ \"./pages/components/Produtor/index.tsx\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Banner */ \"./pages/components/Banner/index.tsx\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n// Home.tsx\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDz91V8iQGtKLc8C8TzhRwGOL2soBtsMXo\",\n    authDomain: \"testedelyv.firebaseapp.com\",\n    projectId: \"testedelyv\",\n    storageBucket: \"testedelyv.appspot.com\"\n};\nvar Home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), dados = _useState[0], setDados = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState1[0], setIsModalOpen = _useState1[1];\n    var openModal = function() {\n        setIsModalOpen(true);\n    };\n    var closeModal = function() {\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var db, snapshot, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            // Inicializar o Firebase\n                            if (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apps.length) {\n                                firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(firebaseConfig);\n                            }\n                            db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore();\n                            return [\n                                4,\n                                db.collection(\"dados\").get()\n                            ];\n                        case 1:\n                            snapshot = _state.sent();\n                            data = snapshot.docs.map(function(doc) {\n                                return doc.data();\n                            });\n                            setDados(data);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    var handlerSearch = function(searchValue) {\n    // Lógica de pesquisa aqui\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerTop),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerTopLeft),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerTitle),\n                                    children: \"seja bem vindo(a) \\uD83D\\uDC4B\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerSubtitle),\n                                    children: \"O que deseja pra hoje?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerTopRight),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().menuButton),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().menuButtonLine)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().menuButtonLine)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().menuButtonLine)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),\n                children: dados.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Produtor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        imageUrl: item.imageUrl,\n                        onImageClick: openModal\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_6___default()), {\n                isOpen: isModalOpen,\n                onRequestClose: closeModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Suporte Royal\\\\Desktop\\\\pixpres\\\\pages\\\\index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"zKv1r5qS6PBNhDOX8L96RGuLuNo=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7Ozs7Ozs7QUFDd0M7QUFDUjtBQUNSO0FBQ1U7QUFDSjtBQUNUO0FBQ087QUFFdkMsSUFBTVEsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0FBQ2pCO0FBRUEsSUFBTUMsT0FBTzs7SUFDWCxJQUEwQlosWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBOUJhLFFBQW1CYixjQUFaYyxXQUFZZDtJQUMxQixJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXhDZSxjQUErQmYsZUFBbEJnQixpQkFBa0JoQjtJQUV0QyxJQUFNaUIsWUFBWTtRQUNoQkQsZUFBZTtJQUNqQjtJQUVBLElBQU1FLGFBQWE7UUFDakJGLGVBQWU7SUFDakI7SUFFQWYsZ0RBQVNBLENBQUM7UUFDUixJQUFNa0I7dUJBQVk7b0JBT1ZDLElBR0FDLFVBQ0FDOzs7OzRCQVZOLHlCQUF5Qjs0QkFDekIsSUFBSSxDQUFDcEIsZ0VBQWFxQixDQUFDQyxRQUFRO2dDQUN6QnRCLHlFQUFzQnVCLENBQUNsQjs0QkFDekI7NEJBR01hLEtBQUtsQixxRUFBa0J3Qjs0QkFHWjs7Z0NBQU1OLEdBQUdPLFdBQVcsU0FBU0M7Ozs0QkFBeENQLFdBQVc7NEJBQ1hDLE9BQU9ELFNBQVNRLEtBQUtDLElBQUksU0FBQ0M7dUNBQVFBLElBQUlUOzs0QkFFNUNSLFNBQVNROzs7Ozs7WUFDWDs0QkFkTUg7Ozs7UUFnQk5BO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBTWEsZ0JBQWdCLFNBQUNDO0lBQ3JCLDBCQUEwQjtJQUM1QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXN0Isb0VBQWdCOEI7OzBCQUM5Qiw4REFBQ0M7Z0JBQU9GLFdBQVc3QixpRUFBYStCOzBCQUM5Qiw0RUFBQ0g7b0JBQUlDLFdBQVc3QixvRUFBZ0JnQzs7c0NBQzlCLDhEQUFDSjs0QkFBSUMsV0FBVzdCLHdFQUFvQmlDOzs4Q0FDbEMsOERBQUNMO29DQUFJQyxXQUFXN0Isc0VBQWtCa0M7OENBQUU7Ozs7Ozs4Q0FDcEMsOERBQUNOO29DQUFJQyxXQUFXN0IseUVBQXFCbUM7OENBQUU7Ozs7Ozs7Ozs7OztzQ0FFekMsOERBQUNQOzRCQUFJQyxXQUFXN0IseUVBQXFCb0M7c0NBQ25DLDRFQUFDUjtnQ0FBSUMsV0FBVzdCLHFFQUFpQnFDOztrREFDL0IsOERBQUNUO3dDQUFJQyxXQUFXN0IseUVBQXFCc0M7Ozs7OztrREFDckMsOERBQUNWO3dDQUFJQyxXQUFXN0IseUVBQXFCc0M7Ozs7OztrREFDckMsOERBQUNWO3dDQUFJQyxXQUFXN0IseUVBQXFCc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzdDLDhEQUFDeEMsMERBQU1BOzs7OzswQkFDUCw4REFBQzhCO2dCQUFJQyxXQUFXN0IsK0RBQVd1QzswQkFDeEJoQyxNQUFNaUIsSUFBSSxTQUFDZ0IsTUFBTUM7eUNBQ2hCLDhEQUFDNUMsNERBQVFBO3dCQUFhNkMsVUFBVUYsS0FBS0U7d0JBQVVDLGNBQWNoQzt1QkFBOUM4Qjs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDMUMsb0RBQUtBO2dCQUFDNkMsUUFBUW5DO2dCQUFhb0MsZ0JBQWdCakM7Ozs7Ozs7Ozs7OztBQUtsRDtHQWhFTU47S0FBQUE7QUFrRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSG9tZS50c3hcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJztcclxuaW1wb3J0IFByb2R1dG9yIGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdXRvcic7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL0Jhbm5lcic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUR6OTFWOGlRR3RLTGM4QzhUemhSd0dPTDJzb0J0c01Yb1wiLFxyXG4gIGF1dGhEb21haW46IFwidGVzdGVkZWx5di5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidGVzdGVkZWx5dlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGVkZWx5di5hcHBzcG90LmNvbVwiLFxyXG59O1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGFkb3MsIHNldERhZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBJbmljaWFsaXphciBvIEZpcmViYXNlXHJcbiAgICAgIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT2J0ZXIgdW1hIHJlZmVyw6puY2lhIHBhcmEgbyBGaXJlc3RvcmVcclxuICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcbiAgICAgIC8vIE9idGVyIG9zIGRhZG9zIGRvIEZpcmVzdG9yZVxyXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2RhZG9zJykuZ2V0KCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKTtcclxuXHJcbiAgICAgIHNldERhZG9zKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJTZWFyY2ggPSAoc2VhcmNoVmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgLy8gTMOzZ2ljYSBkZSBwZXNxdWlzYSBhcXVpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wTGVmdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGl0bGV9PnNlamEgYmVtIHZpbmRvKGEpIPCfkYs8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJTdWJ0aXRsZX0+TyBxdWUgZGVzZWphIHByYSBob2plPzwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRvcFJpZ2h0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9ufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b25MaW5lfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b25MaW5lfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b25MaW5lfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICB7ZGFkb3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1dG9yIGtleT17aW5kZXh9IGltYWdlVXJsPXtpdGVtLmltYWdlVXJsfSBvbkltYWdlQ2xpY2s9e29wZW5Nb2RhbH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzTW9kYWxPcGVufSBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgey8qIENvbnRlw7pkbyBkbyBtb2RhbCAqL31cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwiUHJvZHV0b3IiLCJCYW5uZXIiLCJNb2RhbCIsInN0eWxlcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJIb21lIiwiZGFkb3MiLCJzZXREYWRvcyIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiZmV0Y2hEYXRhIiwiZGIiLCJzbmFwc2hvdCIsImRhdGEiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJkb2NzIiwibWFwIiwiZG9jIiwiaGFuZGxlclNlYXJjaCIsInNlYXJjaFZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGVyVG9wIiwiaGVhZGVyVG9wTGVmdCIsImhlYWRlclRpdGxlIiwiaGVhZGVyU3VidGl0bGUiLCJoZWFkZXJUb3BSaWdodCIsIm1lbnVCdXR0b24iLCJtZW51QnV0dG9uTGluZSIsImdyaWQiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZVVybCIsIm9uSW1hZ2VDbGljayIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});