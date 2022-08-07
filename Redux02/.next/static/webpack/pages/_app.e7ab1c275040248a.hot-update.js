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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": function() { return /* binding */ addTodo; },\n/* harmony export */   \"todosReducer\": function() { return /* binding */ todosReducer; },\n/* harmony export */   \"toggleTodo\": function() { return /* binding */ toggleTodo; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar initialState = [\n    {\n        id: 1,\n        text: \"foo\",\n        isDone: false\n    },\n    {\n        id: 2,\n        text: \"bar\",\n        isDone: true\n    }, \n];\nvar todosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"todos\",\n    initialState: initialState,\n    reducers: {\n        addTodo: function(state, action) {\n            state.push({\n                id: state.length + 1,\n                text: action.payload.text,\n                isDone: false\n            });\n            var newState = _toConsumableArray(state).concat([\n                newTodo\n            ]);\n            return newState;\n        },\n        toggleTodo: function(state, action) {\n            var newState = state.map(function(todo) {\n                if (todo.id === action.payload.id) {\n                    return _objectSpread({}, todo, {\n                        isDone: !todo.isDone\n                    });\n                }\n                return todo;\n            });\n            return newState;\n        }\n    }\n});\nvar _actions = todosSlice.actions;\nvar addTodo = _actions.addTodo, toggleTodo = _actions.toggleTodo;\nvar todosReducer = todosSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUc5RCxJQUFNQyxZQUFZLEdBQVc7SUFDM0I7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLEtBQUs7UUFBRUMsTUFBTSxFQUFFLEtBQUs7S0FBRTtJQUNyQztRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsS0FBSztRQUFFQyxNQUFNLEVBQUUsSUFBSTtLQUFFO0NBQ3JDO0FBRUQsSUFBTUMsVUFBVSxHQUFHTCw2REFBVyxDQUFDO0lBQzdCTSxJQUFJLEVBQUUsT0FBTztJQUNiTCxZQUFZLEVBQVpBLFlBQVk7SUFDWk0sUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUVDLE1BQXlDLEVBQUs7WUFDN0RELEtBQUssQ0FBQ0UsSUFBSSxDQUFFO2dCQUNWVCxFQUFFLEVBQUVPLEtBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUM7Z0JBQ3BCVCxJQUFJLEVBQUVPLE1BQU0sQ0FBQ0csT0FBTyxDQUFDVixJQUFJO2dCQUN6QkMsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUM7WUFDSCxJQUFNVSxRQUFRLEdBQUcsbUJBQUlMLEtBQUssQ0FBTEEsUUFBSjtnQkFBV00sT0FBTzthQUFDO1lBQ3BDLE9BQU9ELFFBQVEsQ0FBQztTQUNqQjtRQUNERSxVQUFVLEVBQUUsU0FBQ1AsS0FBSyxFQUFFQyxNQUF1QyxFQUFLO1lBQzlELElBQU1JLFFBQVEsR0FBR0wsS0FBSyxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO2dCQUNuQyxJQUFJQSxJQUFJLENBQUNoQixFQUFFLEtBQUtRLE1BQU0sQ0FBQ0csT0FBTyxDQUFDWCxFQUFFLEVBQUU7b0JBQ2pDLE9BQU8sa0JBQUtnQixJQUFJO3dCQUFFZCxNQUFNLEVBQUUsQ0FBQ2MsSUFBSSxDQUFDZCxNQUFNO3NCQUFFLENBQUM7aUJBQzFDO2dCQUNELE9BQU9jLElBQUksQ0FBQzthQUNiLENBQUM7WUFDRixPQUFPSixRQUFRLENBQUM7U0FDakI7S0FDRjtDQUNGLENBQUM7SUFFcUNULFFBQWtCLEdBQWxCQSxVQUFVLENBQUNjLE9BQU87QUFBbEQsSUFBUVgsT0FBTyxHQUFpQkgsUUFBa0IsQ0FBMUNHLE9BQU8sRUFBRVEsVUFBVSxHQUFLWCxRQUFrQixDQUFqQ1csVUFBVSxDQUF3QjtBQUNuRCxJQUFNSSxZQUFZLEdBQUdmLFVBQVUsQ0FBQ2dCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RhdGUvdG9kb3MudHM/OWYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVG9kb1tdID0gW1xuICB7IGlkOiAxLCB0ZXh0OiBcImZvb1wiLCBpc0RvbmU6IGZhbHNlIH0sXG4gIHsgaWQ6IDIsIHRleHQ6IFwiYmFyXCIsIGlzRG9uZTogdHJ1ZSB9LFxuXTtcblxuY29uc3QgdG9kb3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ0b2Rvc1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVG9kbzogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UGljazxUb2RvLCBcInRleHRcIj4+KSA9PiB7XG4gICAgICBzdGF0ZS5wdXNoICh7XG4gICAgICAgIGlkOiBzdGF0ZS5sZW5ndGggKyAxLFxuICAgICAgICB0ZXh0OiBhY3Rpb24ucGF5bG9hZC50ZXh0LFxuICAgICAgICBpc0RvbmU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZSwgbmV3VG9kb107XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcbiAgICB0b2dnbGVUb2RvOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQaWNrPFRvZG8sIFwiaWRcIj4+KSA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlLm1hcCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi50b2RvLCBpc0RvbmU6ICF0b2RvLmlzRG9uZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb2RvLCB0b2dnbGVUb2RvIH0gPSB0b2Rvc1NsaWNlLmFjdGlvbnM7XG5leHBvcnQgY29uc3QgdG9kb3NSZWR1Y2VyID0gdG9kb3NTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaWQiLCJ0ZXh0IiwiaXNEb25lIiwidG9kb3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJsZW5ndGgiLCJwYXlsb2FkIiwibmV3U3RhdGUiLCJuZXdUb2RvIiwidG9nZ2xlVG9kbyIsIm1hcCIsInRvZG8iLCJhY3Rpb25zIiwidG9kb3NSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/todos.ts\n");

/***/ })

});