"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/meetups";
exports.ids = ["pages/api/meetups"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/meetups.js":
/*!******************************!*\
  !*** ./pages/api/meetups.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async ()=>{\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://khiem:phamduykhiem@cluster0.pbnv8dq.mongodb.net/\");\n    const db = client.db();\n    const meetupCollections = db.collection(\"meetups\");\n    const data = await meetupCollections.find().toArray();\n    return data;\n    client.close();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVldHVwcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsT0FBTyxHQUFHLFVBQVc7SUFDdkIsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLHdEQUFtQixDQUFDLGdFQUFnRSxDQUFDO0lBRTFHLE1BQU1JLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7SUFFdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUVsRCxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLElBQUksRUFBRSxDQUFDQyxPQUFPLEVBQUU7SUFFckQsT0FBT0YsSUFBSTtJQUVYTCxNQUFNLENBQUNRLEtBQUssRUFBRTtBQUNsQixDQUFDO0FBQ0QsaUVBQWVULE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL21lZXR1cHMuanM/YjUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL2toaWVtOnBoYW1kdXlraGllbUBjbHVzdGVyMC5wYm52OGRxLm1vbmdvZGIubmV0L1wiKVxyXG5cclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9ucyA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9ucy5maW5kKCkudG9BcnJheSgpXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImZpbmQiLCJ0b0FycmF5IiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/meetups.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meetups.js"));
module.exports = __webpack_exports__;

})();