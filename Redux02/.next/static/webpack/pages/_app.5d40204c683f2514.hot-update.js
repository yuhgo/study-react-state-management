"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/state/todos.ts":
/*!****************************!*\
  !*** ./src/state/todos.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": function() { return /* binding */ addTodo; },\n/* harmony export */   \"todosReducer\": function() { return /* binding */ todosReducer; },\n/* harmony export */   \"toggleTodo\": function() { return /* binding */ toggleTodo; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar initialState = [\n    {\n        id: 1,\n        text: \"foo\",\n        isDone: false\n    },\n    {\n        id: 2,\n        text: \"bar\",\n        isDone: true\n    }, \n];\nvar todosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"todos\",\n    initialState: initialState,\n    reducers: {\n        addTodo: function(state, action) {\n            state.push({\n                id: state.length + 1,\n                text: action.payload.text,\n                isDone: false\n            });\n        },\n        toggleTodo: function(state, action) {\n            var newState = state.map(function(todo) {\n                if (todo.id === action.payload.id) {\n                    return _objectSpread({}, todo, {\n                        isDone: !todo.isDone\n                    });\n                }\n                return todo;\n            });\n            return newState;\n        }\n    }\n});\nvar _actions = todosSlice.actions;\nvar addTodo = _actions.addTodo, toggleTodo = _actions.toggleTodo;\nvar todosReducer = todosSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBRzlELElBQU1DLFlBQVksR0FBVztJQUMzQjtRQUFFQyxFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsS0FBSztRQUFFQyxNQUFNLEVBQUUsS0FBSztLQUFFO0lBQ3JDO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxLQUFLO1FBQUVDLE1BQU0sRUFBRSxJQUFJO0tBQUU7Q0FDckM7QUFFRCxJQUFNQyxVQUFVLEdBQUdMLDZEQUFXLENBQUM7SUFDN0JNLElBQUksRUFBRSxPQUFPO0lBQ2JMLFlBQVksRUFBWkEsWUFBWTtJQUNaTSxRQUFRLEVBQUU7UUFDUkMsT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBRUMsTUFBeUMsRUFBSztZQUM3REQsS0FBSyxDQUFDRSxJQUFJLENBQUM7Z0JBQ1RULEVBQUUsRUFBRU8sS0FBSyxDQUFDRyxNQUFNLEdBQUcsQ0FBQztnQkFDcEJULElBQUksRUFBRU8sTUFBTSxDQUFDRyxPQUFPLENBQUNWLElBQUk7Z0JBQ3pCQyxNQUFNLEVBQUUsS0FBSzthQUNkLENBQUMsQ0FBQztTQUNKO1FBQ0RVLFVBQVUsRUFBRSxTQUFDTCxLQUFLLEVBQUVDLE1BQXVDLEVBQUs7WUFDOUQsSUFBTUssUUFBUSxHQUFHTixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7Z0JBQ25DLElBQUlBLElBQUksQ0FBQ2YsRUFBRSxLQUFLUSxNQUFNLENBQUNHLE9BQU8sQ0FBQ1gsRUFBRSxFQUFFO29CQUNqQyxPQUFPLGtCQUFLZSxJQUFJO3dCQUFFYixNQUFNLEVBQUUsQ0FBQ2EsSUFBSSxDQUFDYixNQUFNO3NCQUFFLENBQUM7aUJBQzFDO2dCQUNELE9BQU9hLElBQUksQ0FBQzthQUNiLENBQUM7WUFDRixPQUFPRixRQUFRLENBQUM7U0FDakI7S0FDRjtDQUNGLENBQUM7SUFFcUNWLFFBQWtCLEdBQWxCQSxVQUFVLENBQUNhLE9BQU87QUFBbEQsSUFBUVYsT0FBTyxHQUFpQkgsUUFBa0IsQ0FBMUNHLE9BQU8sRUFBRU0sVUFBVSxHQUFLVCxRQUFrQixDQUFqQ1MsVUFBVSxDQUF3QjtBQUNuRCxJQUFNSyxZQUFZLEdBQUdkLFVBQVUsQ0FBQ2UsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdGF0ZS90b2Rvcy50cz85ZjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUb2RvW10gPSBbXG4gIHsgaWQ6IDEsIHRleHQ6IFwiZm9vXCIsIGlzRG9uZTogZmFsc2UgfSxcbiAgeyBpZDogMiwgdGV4dDogXCJiYXJcIiwgaXNEb25lOiB0cnVlIH0sXG5dO1xuXG5jb25zdCB0b2Rvc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInRvZG9zXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRUb2RvOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQaWNrPFRvZG8sIFwidGV4dFwiPj4pID0+IHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICBpZDogc3RhdGUubGVuZ3RoICsgMSxcbiAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWQudGV4dCxcbiAgICAgICAgaXNEb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG9nZ2xlVG9kbzogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UGljazxUb2RvLCBcImlkXCI+PikgPT4ge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZS5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4udG9kbywgaXNEb25lOiAhdG9kby5pc0RvbmUgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkVG9kbywgdG9nZ2xlVG9kbyB9ID0gdG9kb3NTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHRvZG9zUmVkdWNlciA9IHRvZG9zU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImlkIiwidGV4dCIsImlzRG9uZSIsInRvZG9zU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb2RvIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwibGVuZ3RoIiwicGF5bG9hZCIsInRvZ2dsZVRvZG8iLCJuZXdTdGF0ZSIsIm1hcCIsInRvZG8iLCJhY3Rpb25zIiwidG9kb3NSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/todos.ts\n");

/***/ })

});