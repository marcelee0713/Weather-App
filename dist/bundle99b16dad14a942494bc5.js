/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ClearContainer.js":
/*!******************************************!*\
  !*** ./src/components/ClearContainer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearOutContainer": () => (/* binding */ clearOutContainer)
/* harmony export */ });
function clearOutContainer(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showContent)
/* harmony export */ });
/* harmony import */ var _styles_content_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/content.scss */ "./src/styles/content.scss");
/* harmony import */ var _assets_01d_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/01d.svg */ "./src/assets/01d.svg");
/* harmony import */ var _assets_02d_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/02d.svg */ "./src/assets/02d.svg");
/* harmony import */ var _assets_03_4d_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/03-4d.svg */ "./src/assets/03-4d.svg");
/* harmony import */ var _assets_09d_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/09d.svg */ "./src/assets/09d.svg");
/* harmony import */ var _assets_10d_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/10d.svg */ "./src/assets/10d.svg");
/* harmony import */ var _assets_11d_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/11d.svg */ "./src/assets/11d.svg");
/* harmony import */ var _assets_13d_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/13d.svg */ "./src/assets/13d.svg");
/* harmony import */ var _assets_city_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/city.svg */ "./src/assets/city.svg");
/* harmony import */ var _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/humidity.svg */ "./src/assets/humidity.svg");
/* harmony import */ var _assets_temperature_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/temperature.svg */ "./src/assets/temperature.svg");
/* harmony import */ var _assets_upward_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/upward.svg */ "./src/assets/upward.svg");
/* harmony import */ var _assets_downward_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/downward.svg */ "./src/assets/downward.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/wind.svg */ "./src/assets/wind.svg");















function showContent(description, iconId, city, temp, humidity, maxTemp, minTemp, windPressure) {
  var content = document.createElement("div");
  var weatherImageContainer = document.createElement("div");
  var line = document.createElement("hr");
  var weatherDetails = document.createElement("div");

  // Inside weatherImageContainer
  var weatherImgHolder = document.createElement("div");
  var weatherDescription = document.createElement("h2");

  // Inside weatherImgHolder
  var weatherImage = document.createElement("img");

  // Inside weatherDetails
  var cityDetail = document.createElement("div");
  var tempDetail = document.createElement("div");
  var humidityDetail = document.createElement("div");
  var maxTempDetail = document.createElement("div");
  var minTempDetail = document.createElement("div");
  var windPressureDetail = document.createElement("div");

  // Inside every Details
  var citySvgPlacements = document.createElement("div");
  var tempSvgPlacements = document.createElement("div");
  var humiditySvgPlacements = document.createElement("div");
  var maxTempSvgPlacements = document.createElement("div");
  var minTempSvgPlacements = document.createElement("div");
  var windPressureSvgPlacements = document.createElement("div");

  // Inside every SvgPlacements
  var citySvg = document.createElement("img");
  var tempSvg = document.createElement("img");
  var humiditySvg = document.createElement("img");
  var maxTempSvg1 = document.createElement("img");
  var maxTempSvg2 = document.createElement("img");
  var minTempSvg1 = document.createElement("img");
  var minTempSvg2 = document.createElement("img");
  var windPressureSvg = document.createElement("img");
  var cityValue = document.createElement("div");
  var tempValue = document.createElement("div");
  var humidityValue = document.createElement("div");
  var maxTempValue = document.createElement("div");
  var minTempValue = document.createElement("div");
  var windPressureValue = document.createElement("div");
  var cityHover = document.createElement("div");
  var tempHover = document.createElement("div");
  var humidityHover = document.createElement("div");
  var maxTempHover = document.createElement("div");
  var minTempHover = document.createElement("div");
  var windPressureHover = document.createElement("div");
  content.appendChild(weatherImageContainer);
  content.appendChild(line);
  content.appendChild(weatherDetails);
  weatherImageContainer.appendChild(weatherImgHolder);
  weatherImageContainer.appendChild(weatherDescription);
  weatherImgHolder.appendChild(weatherImage);
  weatherDetails.appendChild(cityDetail);
  weatherDetails.appendChild(tempDetail);
  weatherDetails.appendChild(humidityDetail);
  weatherDetails.appendChild(maxTempDetail);
  weatherDetails.appendChild(minTempDetail);
  weatherDetails.appendChild(windPressureDetail);
  cityDetail.appendChild(citySvgPlacements);
  tempDetail.appendChild(tempSvgPlacements);
  humidityDetail.appendChild(humiditySvgPlacements);
  maxTempDetail.appendChild(maxTempSvgPlacements);
  minTempDetail.appendChild(minTempSvgPlacements);
  windPressureDetail.appendChild(windPressureSvgPlacements);
  cityDetail.appendChild(cityValue);
  tempDetail.appendChild(tempValue);
  humidityDetail.appendChild(humidityValue);
  maxTempDetail.appendChild(maxTempValue);
  minTempDetail.appendChild(minTempValue);
  windPressureDetail.appendChild(windPressureValue);
  cityDetail.appendChild(cityHover);
  tempDetail.appendChild(tempHover);
  humidityDetail.appendChild(humidityHover);
  maxTempDetail.appendChild(maxTempHover);
  minTempDetail.appendChild(minTempHover);
  windPressureDetail.appendChild(windPressureHover);
  citySvgPlacements.appendChild(citySvg);
  tempSvgPlacements.appendChild(tempSvg);
  humiditySvgPlacements.appendChild(humiditySvg);
  maxTempSvgPlacements.appendChild(maxTempSvg1);
  maxTempSvgPlacements.appendChild(maxTempSvg2);
  minTempSvgPlacements.appendChild(minTempSvg1);
  minTempSvgPlacements.appendChild(minTempSvg2);
  windPressureSvgPlacements.appendChild(windPressureSvg);
  content.classList.add("content");
  weatherImageContainer.classList.add("weather-image-container");
  weatherDetails.classList.add("weather-details");
  weatherImgHolder.classList.add("weather-image");
  weatherDescription.classList.add("weather-description");
  weatherImage.classList.add("weather-image");
  weatherImage.setAttribute("id", "weather-image-svg");
  cityDetail.classList.add("details");
  tempDetail.classList.add("details");
  humidityDetail.classList.add("details");
  maxTempDetail.classList.add("details");
  minTempDetail.classList.add("details");
  windPressureDetail.classList.add("details");
  citySvgPlacements.classList.add("icon-placements");
  tempSvgPlacements.classList.add("icon-placements");
  humiditySvgPlacements.classList.add("icon-placements");
  maxTempSvgPlacements.classList.add("icon-placements");
  minTempSvgPlacements.classList.add("icon-placements");
  windPressureSvgPlacements.classList.add("icon-placements");
  cityValue.classList.add("details-text");
  tempValue.classList.add("details-text");
  humidityValue.classList.add("details-text");
  maxTempValue.classList.add("details-text");
  minTempValue.classList.add("details-text");
  windPressureValue.classList.add("details-text");
  cityValue.setAttribute("id", "city");
  tempValue.setAttribute("id", "temp");
  humidityValue.setAttribute("id", "humidity");
  maxTempValue.setAttribute("id", "max-temp");
  minTempValue.setAttribute("id", "min-temp");
  windPressureValue.setAttribute("id", "wind-pressure");
  citySvg.classList.add("image-svg");
  citySvg.classList.add("large-svg");
  tempSvg.classList.add("image-svg");
  humiditySvg.classList.add("image-svg");
  maxTempSvg1.classList.add("image-svg");
  maxTempSvg2.classList.add("image-svg");
  maxTempSvg2.classList.add("small-svg");
  minTempSvg1.classList.add("image-svg");
  minTempSvg2.classList.add("image-svg");
  minTempSvg2.classList.add("small-svg");
  windPressureSvg.classList.add("image-svg");
  cityHover.classList.add("show-hover");
  tempHover.classList.add("show-hover");
  humidityHover.classList.add("show-hover");
  maxTempHover.classList.add("show-hover");
  minTempHover.classList.add("show-hover");
  windPressureHover.classList.add("show-hover");
  if (iconId === "01") {
    weatherImage.src = _assets_01d_svg__WEBPACK_IMPORTED_MODULE_1__;
  } else if (iconId === "02") {
    weatherImage.src = _assets_02d_svg__WEBPACK_IMPORTED_MODULE_2__;
  } else if (iconId === "03" || iconId === "04") {
    weatherImage.src = _assets_03_4d_svg__WEBPACK_IMPORTED_MODULE_3__;
  } else if (iconId === "09") {
    weatherImage.src = _assets_09d_svg__WEBPACK_IMPORTED_MODULE_4__;
  } else if (iconId === "10") {
    weatherImage.src = _assets_10d_svg__WEBPACK_IMPORTED_MODULE_5__;
  } else if (iconId === "11") {
    weatherImage.src = _assets_11d_svg__WEBPACK_IMPORTED_MODULE_6__;
  } else if (iconId === "13") {
    weatherImage.src = _assets_13d_svg__WEBPACK_IMPORTED_MODULE_7__;
  } else if (iconId === "50") {
    weatherImage.src = _assets_13d_svg__WEBPACK_IMPORTED_MODULE_7__;
  }
  weatherDescription.textContent = description;
  cityValue.textContent = city;
  tempValue.textContent = temp;
  humidityValue.textContent = humidity;
  maxTempValue.textContent = maxTemp;
  minTempValue.textContent = minTemp;
  windPressureValue.textContent = windPressure;
  citySvg.src = _assets_city_svg__WEBPACK_IMPORTED_MODULE_8__;
  tempSvg.src = _assets_temperature_svg__WEBPACK_IMPORTED_MODULE_10__;
  humiditySvg.src = _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_9__;
  maxTempSvg1.src = _assets_temperature_svg__WEBPACK_IMPORTED_MODULE_10__;
  maxTempSvg2.src = _assets_upward_svg__WEBPACK_IMPORTED_MODULE_11__;
  minTempSvg1.src = _assets_temperature_svg__WEBPACK_IMPORTED_MODULE_10__;
  minTempSvg2.src = _assets_downward_svg__WEBPACK_IMPORTED_MODULE_12__;
  windPressureSvg.src = _assets_wind_svg__WEBPACK_IMPORTED_MODULE_13__;
  cityHover.textContent = "City";
  tempHover.textContent = "Temperature";
  humidityHover.textContent = "Humidity";
  maxTempHover.textContent = "Max Temp";
  minTempHover.textContent = "Min Temp";
  windPressureHover.textContent = "Wind Pressure";
  return content;
}

/***/ }),

/***/ "./src/components/FetchData.js":
/*!*************************************!*\
  !*** ./src/components/FetchData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAndDisplayData)
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _ClearContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClearContainer */ "./src/components/ClearContainer.js");
/* harmony import */ var _Handles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Handles */ "./src/components/Handles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var content = document.querySelector("main");
function getWeatherData(_x) {
  return _getWeatherData.apply(this, arguments);
}
function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var res, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&APPID=bbd7bbdb21ca1a1f84cabddafa1297c5"), {
            mode: "cors"
          });
        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();
        case 5:
          result = _context.sent;
          if (!(result.cod === "404")) {
            _context.next = 8;
            break;
          }
          throw new Error("404 Error");
        case 8:
          return _context.abrupt("return", result);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getWeatherData.apply(this, arguments);
}
function getAndDisplayData(_x2) {
  return _getAndDisplayData.apply(this, arguments);
}
function _getAndDisplayData() {
  _getAndDisplayData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0,_ClearContainer__WEBPACK_IMPORTED_MODULE_1__.clearOutContainer)(content);
          content.appendChild((0,_Handles__WEBPACK_IMPORTED_MODULE_2__.showLoadingScreen)());
          getWeatherData(city).then(function (res) {
            // weather icon
            var temp = (res.main.temp - 273.15).toString().slice(0, 5);
            var maxTemp = (res.main.temp_max - 273.15).toString().slice(0, 5);
            var minTemp = (res.main.temp_min - 273.15).toString().slice(0, 5);
            var humidity = res.main.humidity.toString() + "%";
            var city = res.name;
            var windPressure = res.wind.speed.toString();
            // prettier-ignore
            var description = capitalizeFirstLetter(res.weather[0].description);
            var iconId = res.weather[0].icon.slice(0, -1);
            (0,_ClearContainer__WEBPACK_IMPORTED_MODULE_1__.clearOutContainer)(content);
            content.appendChild((0,_Content__WEBPACK_IMPORTED_MODULE_0__["default"])(description, iconId, city, temp, humidity, maxTemp, minTemp, windPressure));
          })["catch"](function (res) {
            (0,_ClearContainer__WEBPACK_IMPORTED_MODULE_1__.clearOutContainer)(content);
            content.appendChild((0,_Handles__WEBPACK_IMPORTED_MODULE_2__.handleError)());
          });
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getAndDisplayData.apply(this, arguments);
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./src/components/Handles.js":
/*!***********************************!*\
  !*** ./src/components/Handles.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleDefault": () => (/* binding */ handleDefault),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "showLoadingScreen": () => (/* binding */ showLoadingScreen)
/* harmony export */ });
/* harmony import */ var _styles_handle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/handle.scss */ "./src/styles/handle.scss");
/* harmony import */ var _assets_default_placeholder_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/default_placeholder.svg */ "./src/assets/default_placeholder.svg");
/* harmony import */ var _assets_error_placeholder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/error_placeholder.svg */ "./src/assets/error_placeholder.svg");



function handleDefault() {
  var container = document.createElement("div");
  var defaultImageContainer = document.createElement("div");
  var defaultImage = document.createElement("img");
  var welcomeText = document.createElement("h2");
  container.classList.add("default-container");
  defaultImageContainer.classList.add("default-image-container");
  defaultImage.src = _assets_default_placeholder_svg__WEBPACK_IMPORTED_MODULE_1__;
  welcomeText.classList.add("welcome-text");
  container.appendChild(defaultImageContainer);
  container.appendChild(welcomeText);
  defaultImageContainer.appendChild(defaultImage);
  welcomeText.textContent = "Welcome!";
  return container;
}
function handleError() {
  var container = document.createElement("div");
  var errorImageContainer = document.createElement("div");
  var errorImage = document.createElement("img");
  var errorText = document.createElement("h2");
  container.classList.add("error-container");
  errorImageContainer.classList.add("error-image-container");
  errorImage.src = _assets_error_placeholder_svg__WEBPACK_IMPORTED_MODULE_2__;
  errorText.classList.add("error-text");
  container.appendChild(errorImageContainer);
  container.appendChild(errorText);
  errorImageContainer.appendChild(errorImage);
  errorText.textContent = "Something went wrong!";
  return container;
}
function showLoadingScreen() {
  var container = document.createElement("div");
  var circle1 = document.createElement("div");
  var circle2 = document.createElement("div");
  var circle3 = document.createElement("div");
  var circle4 = document.createElement("div");
  var circle5 = document.createElement("div");
  container.classList.add("loading-screen-container");
  circle1.classList.add("circle");
  circle2.classList.add("circle");
  circle3.classList.add("circle");
  circle4.classList.add("circle");
  circle5.classList.add("circle");
  container.appendChild(circle1);
  container.appendChild(circle2);
  container.appendChild(circle3);
  container.appendChild(circle4);
  container.appendChild(circle5);
  return container;
}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHeader)
/* harmony export */ });
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/search.svg */ "./src/assets/search.svg");
/* harmony import */ var _FetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchData */ "./src/components/FetchData.js");



function showHeader(content) {
  var isSearchValid = false;
  var input = "";
  var container = document.createElement("div");
  var textContainer = document.createElement("div");
  var searchContainer = document.createElement("div");
  var bigText = document.createElement("h1");
  var subText = document.createElement("div");
  var searchForm = document.createElement("form");
  var inputValidationText = document.createElement("span");
  var searchInput = document.createElement("input");
  var searchButton = document.createElement("button");
  var imgBtn = document.createElement("img");
  container.appendChild(textContainer);
  container.appendChild(searchContainer);
  textContainer.appendChild(bigText);
  textContainer.appendChild(subText);
  searchContainer.appendChild(searchForm);
  searchContainer.appendChild(inputValidationText);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  searchButton.appendChild(imgBtn);
  container.classList.add("header-container");
  textContainer.classList.add("header-text-container");
  subText.classList.add("sub-text");
  searchContainer.classList.add("search-container");
  searchForm.classList.add("input-form");
  searchForm.setAttribute("method", "get");
  searchForm.setAttribute("action", "");
  inputValidationText.classList.add("input-validation-text");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Enter your city...");
  searchInput.setAttribute("name", "search-city");
  searchInput.setAttribute("id", "search");
  imgBtn.src = _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__;
  searchButton.classList.add("search-btn");
  searchButton.setAttribute("id", "search-city-btn");
  searchButton.setAttribute("type", "submit");
  bigText.textContent = "Weather App";
  subText.textContent = "Nice weather we're having...";
  inputValidationText.textContent = "placeholder";
  searchInput.addEventListener("input", function () {
    input = searchInput.value.trim();
    isSearchValid = input !== "" ? true : false;
    if (isSearchValid) {
      inputValidationText.classList.add("remove-span");
      inputValidationText.classList.remove("show-span");
    } else {
      inputValidationText.classList.remove("remove-span");
      inputValidationText.classList.add("show-span");
      inputValidationText.textContent = "Please enter an input!";
      inputValidationText.style.color = "red";
    }
  });
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (isSearchValid) {
      (0,_FetchData__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
    } else {
      inputValidationText.classList.remove("remove-span");
      inputValidationText.classList.add("show-span");
      inputValidationText.textContent = "Please enter an input";
      inputValidationText.style.color = "red";
    }
  });
  return container;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n  animation-name: showContent;\n  animation-duration: 1.2s;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes showContent {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n.weather-image-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.weather-image-container .weather-image {\n  max-width: 375px;\n}\n.weather-image-container .weather-image img {\n  width: 100%;\n  height: auto;\n}\n.weather-image-container .weather-description {\n  color: #5b97aa;\n}\n\nhr {\n  background-color: #5b97aa;\n  border: 1px solid #5b97aa;\n}\n\n.weather-details {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.details {\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.details .icon-placements {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details .details-text {\n  font-weight: 400;\n  color: #5b97aa;\n}\n.details .show-hover {\n  pointer-events: none;\n  position: absolute;\n  font-weight: 800;\n  background-color: #5b97aa;\n  border-radius: 25px;\n  width: 120px;\n  padding: 10px;\n  color: #153945;\n  opacity: 0;\n  top: -50px;\n  text-align: center;\n  box-shadow: 0 3px 5px 1px #0f1c20;\n  -webkit-transform: translateY(50px);\n  -webkit-transition: 300ms ease-in-out;\n}\n.details:hover .show-hover {\n  opacity: 1;\n  -webkit-transform: translateY(0px);\n}\n\n.image-svg {\n  width: 35px;\n  height: 35px;\n}\n\n.small-svg {\n  width: 20px;\n  height: 20px;\n}\n\n@media only screen and (max-width: 50em) {\n  .weather-image-container .weather-image {\n    max-width: 325px;\n  }\n  .weather-image-container .weather-image img {\n    width: 100%;\n    height: auto;\n  }\n  .weather-image-container .weather-description {\n    font-size: 1.3rem;\n  }\n  .details .details-text {\n    font-size: 0.9rem;\n  }\n  .details .show-hover {\n    font-size: 0.8rem;\n    background-color: #5b97aa;\n    border-radius: 25px;\n    width: 90px;\n  }\n  .details:hover .show-hover {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n  .image-svg {\n    width: 30px;\n    height: 30px;\n  }\n  .small-svg {\n    width: 15px;\n    height: 15px;\n  }\n}\n@media only screen and (max-width: 38.125em) {\n  .weather-image-container .weather-image {\n    max-width: 300px;\n  }\n  .weather-image-container .weather-image img {\n    width: 100%;\n    height: auto;\n  }\n  .weather-image-container .weather-description {\n    font-size: 1.3rem;\n  }\n  .weather-details {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 0.6rem;\n  }\n  .details .details-text {\n    font-size: 0.85rem;\n  }\n  .details .show-hover {\n    font-size: 0.75rem;\n    background-color: #5b97aa;\n    border-radius: 25px;\n    width: 85px;\n  }\n  .details:hover .show-hover {\n    opacity: 1;\n    font-weight: 400;\n    -webkit-transform: translateY(0px);\n  }\n  .image-svg {\n    width: 25px;\n    height: 25px;\n  }\n  .small-svg {\n    width: 15px;\n    height: 15px;\n  }\n}\n@media only screen and (max-width: 28.75em) {\n  .weather-image-container .weather-description {\n    font-size: 1.1rem;\n  }\n  .weather-details {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1rem;\n  }\n  .image-svg {\n    width: 25px;\n    height: 25px;\n  }\n  .small-svg {\n    width: 15px;\n    height: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/content.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;EACA,2BAAA;EACA,wBAAA;EACA,sCAAA;EACA,6BAAA;AACF;;AACA;EACE;IACE,UAAA;IACA,6BAAA;EAEF;EAAA;IACE,UAAA;IACA,0BAAA;EAEF;AACF;AAAA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAEF;AADE;EACE,gBAAA;AAGJ;AAFI;EACE,WAAA;EACA,YAAA;AAIN;AADE;EACE,cAAA;AAGJ;;AAAA;EACE,yBAAA;EACA,yBAAA;AAGF;;AADA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AAIF;;AAFA;EACE,kBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAKF;AAJE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAMJ;AAJE;EACE,gBAAA;EACA,cAAA;AAMJ;AAJE;EACE,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,iCAAA;EACA,mCAAA;EACA,qCAAA;AAMJ;AAHE;EACE,UAAA;EACA,kCAAA;AAKJ;;AADA;EACE,WAAA;EACA,YAAA;AAIF;;AAFA;EACE,WAAA;EACA,YAAA;AAKF;;AAHA;EAEI;IACE,gBAAA;EAKJ;EAJI;IACE,WAAA;IACA,YAAA;EAMN;EAHE;IACE,iBAAA;EAKJ;EADE;IACE,iBAAA;EAGJ;EADE;IACE,iBAAA;IACA,yBAAA;IACA,mBAAA;IACA,WAAA;EAGJ;EAAE;IACE,UAAA;IACA,kCAAA;EAEJ;EAEA;IACE,WAAA;IACA,YAAA;EAAF;EAEA;IACE,WAAA;IACA,YAAA;EAAF;AACF;AAGA;EAEI;IACE,gBAAA;EAFJ;EAGI;IACE,WAAA;IACA,YAAA;EADN;EAIE;IACE,iBAAA;EAFJ;EAKA;IACE,aAAA;IACA,kCAAA;IACA,gBAAA;EAHF;EAME;IACE,kBAAA;EAJJ;EAME;IACE,kBAAA;IACA,yBAAA;IACA,mBAAA;IACA,WAAA;EAJJ;EAOE;IACE,UAAA;IACA,gBAAA;IACA,kCAAA;EALJ;EASA;IACE,WAAA;IACA,YAAA;EAPF;EASA;IACE,WAAA;IACA,YAAA;EAPF;AACF;AAUA;EAEI;IACE,iBAAA;EATJ;EAYA;IACE,aAAA;IACA,8BAAA;IACA,cAAA;EAVF;EAaA;IACE,WAAA;IACA,YAAA;EAXF;EAaA;IACE,WAAA;IACA,YAAA;EAXF;AACF","sourcesContent":[".content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 100%;\r\n  animation-name: showContent;\r\n  animation-duration: 1.2s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes showContent {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(-100px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n.weather-image-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  .weather-image {\r\n    max-width: 375px;\r\n    img {\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n  }\r\n  .weather-description {\r\n    color: #5b97aa;\r\n  }\r\n}\r\nhr {\r\n  background-color: #5b97aa;\r\n  border: 1px solid #5b97aa;\r\n}\r\n.weather-details {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.details {\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  .icon-placements {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .details-text {\r\n    font-weight: 400;\r\n    color: #5b97aa;\r\n  }\r\n  .show-hover {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    font-weight: 800;\r\n    background-color: #5b97aa;\r\n    border-radius: 25px;\r\n    width: 120px;\r\n    padding: 10px;\r\n    color: #153945;\r\n    opacity: 0;\r\n    top: -50px;\r\n    text-align: center;\r\n    box-shadow: 0 3px 5px 1px #0f1c20;\r\n    -webkit-transform: translateY(50px);\r\n    -webkit-transition: 300ms ease-in-out;\r\n  }\r\n\r\n  &:hover .show-hover {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0px);\r\n  }\r\n}\r\n// For svgs\r\n.image-svg {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.small-svg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n@media only screen and (max-width: 50em) {\r\n  .weather-image-container {\r\n    .weather-image {\r\n      max-width: 325px;\r\n      img {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n    .weather-description {\r\n      font-size: 1.3rem;\r\n    }\r\n  }\r\n  .details {\r\n    .details-text {\r\n      font-size: 0.9rem;\r\n    }\r\n    .show-hover {\r\n      font-size: 0.8rem;\r\n      background-color: #5b97aa;\r\n      border-radius: 25px;\r\n      width: 90px;\r\n    }\r\n\r\n    &:hover .show-hover {\r\n      opacity: 1;\r\n      -webkit-transform: translateY(0px);\r\n    }\r\n  }\r\n  // For svgs\r\n  .image-svg {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n  .small-svg {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 38.125em) {\r\n  .weather-image-container {\r\n    .weather-image {\r\n      max-width: 300px;\r\n      img {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n    .weather-description {\r\n      font-size: 1.3rem;\r\n    }\r\n  }\r\n  .weather-details {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 0.6rem;\r\n  }\r\n  .details {\r\n    .details-text {\r\n      font-size: 0.85rem;\r\n    }\r\n    .show-hover {\r\n      font-size: 0.75rem;\r\n      background-color: #5b97aa;\r\n      border-radius: 25px;\r\n      width: 85px;\r\n    }\r\n\r\n    &:hover .show-hover {\r\n      opacity: 1;\r\n      font-weight: 400;\r\n      -webkit-transform: translateY(0px);\r\n    }\r\n  }\r\n  // For svgs\r\n  .image-svg {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n  .small-svg {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 28.75em) {\r\n  .weather-image-container {\r\n    .weather-description {\r\n      font-size: 1.1rem;\r\n    }\r\n  }\r\n  .weather-details {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 1rem;\r\n  }\r\n  // For svgs\r\n  .image-svg {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n  .small-svg {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/handle.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/handle.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading-screen-container {\n  display: flex;\n  gap: 20px;\n}\n.loading-screen-container .circle {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #5b97aa;\n  perspective: 1000px;\n  opacity: 0;\n}\n.loading-screen-container .circle:nth-child(1) {\n  animation-name: loadingScreen;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: -150ms;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n}\n@keyframes loadingScreen {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.loading-screen-container .circle:nth-child(2) {\n  animation-name: loadingScreen;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 0ms;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n}\n@keyframes loadingScreen {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.loading-screen-container .circle:nth-child(3) {\n  animation-name: loadingScreen;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 150ms;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n}\n@keyframes loadingScreen {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.loading-screen-container .circle:nth-child(4) {\n  animation-name: loadingScreen;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 300ms;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n}\n@keyframes loadingScreen {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.loading-screen-container .circle:nth-child(5) {\n  animation-name: loadingScreen;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 450ms;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n}\n@keyframes loadingScreen {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.loading-screen-container .circle:nth-child(6) {\n  animation-name: loadingScreen;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-delay: 600ms;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n}\n@keyframes loadingScreen {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.default-container,\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  animation-name: showPlaceholders;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n.default-container h2,\n.error-container h2 {\n  color: #5b97aa;\n}\n.default-container .default-image-container,\n.default-container .error-image-container,\n.error-container .default-image-container,\n.error-container .error-image-container {\n  max-width: 400px;\n}\n.default-container .default-image-container img,\n.default-container .error-image-container img,\n.error-container .default-image-container img,\n.error-container .error-image-container img {\n  width: 100%;\n  height: auto;\n}\n\n@keyframes showPlaceholders {\n  from {\n    opacity: 0;\n    transform: translateX(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media only screen and (max-width: 50em) {\n  .default-container h2,\n  .error-container h2 {\n    color: #5b97aa;\n    font-size: 1.3rem;\n  }\n  .default-container .default-image-container,\n  .default-container .error-image-container,\n  .error-container .default-image-container,\n  .error-container .error-image-container {\n    max-width: 350px;\n  }\n  .default-container .default-image-container img,\n  .default-container .error-image-container img,\n  .error-container .default-image-container img,\n  .error-container .error-image-container img {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 38.125em) {\n  .default-container h2,\n  .error-container h2 {\n    color: #5b97aa;\n    font-size: 1.1rem;\n  }\n  .default-container .default-image-container,\n  .default-container .error-image-container,\n  .error-container .default-image-container,\n  .error-container .error-image-container {\n    max-width: 300px;\n  }\n  .default-container .default-image-container img,\n  .default-container .error-image-container img,\n  .error-container .default-image-container img,\n  .error-container .error-image-container img {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 28.75em) {\n  .loading-screen-container {\n    gap: 10px;\n  }\n  .loading-screen-container .circle {\n    width: 15px;\n    height: 15px;\n  }\n  .default-container h2,\n  .error-container h2 {\n    color: #5b97aa;\n    font-size: 0.9rem;\n  }\n  .default-container .default-image-container,\n  .default-container .error-image-container,\n  .error-container .default-image-container,\n  .error-container .error-image-container {\n    max-width: 300px;\n  }\n  .default-container .default-image-container img,\n  .default-container .error-image-container img,\n  .error-container .default-image-container img,\n  .error-container .error-image-container img {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/handle.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,SAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,UAAA;AAEJ;AAAM;EACE,6BAAA;EACA,sBAAA;EACA,sCAAA;EACA,uBAAA;EACA,6BAAA;EACA,mCAAA;AAER;AAAM;EACE;IACE,UAAA;IACA,mBAAA;EAER;EAAM;IACE,YAAA;IACA,qBAAA;EAER;EAAM;IACE,UAAA;IACA,mBAAA;EAER;AACF;AAtBM;EACE,6BAAA;EACA,sBAAA;EACA,sCAAA;EACA,oBAAA;EACA,6BAAA;EACA,mCAAA;AAwBR;AAtBM;EACE;IACE,UAAA;IACA,mBAAA;EAwBR;EAtBM;IACE,YAAA;IACA,qBAAA;EAwBR;EAtBM;IACE,UAAA;IACA,mBAAA;EAwBR;AACF;AA5CM;EACE,6BAAA;EACA,sBAAA;EACA,sCAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;AA8CR;AA5CM;EACE;IACE,UAAA;IACA,mBAAA;EA8CR;EA5CM;IACE,YAAA;IACA,qBAAA;EA8CR;EA5CM;IACE,UAAA;IACA,mBAAA;EA8CR;AACF;AAlEM;EACE,6BAAA;EACA,sBAAA;EACA,sCAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;AAoER;AAlEM;EACE;IACE,UAAA;IACA,mBAAA;EAoER;EAlEM;IACE,YAAA;IACA,qBAAA;EAoER;EAlEM;IACE,UAAA;IACA,mBAAA;EAoER;AACF;AAxFM;EACE,6BAAA;EACA,sBAAA;EACA,sCAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;AA0FR;AAxFM;EACE;IACE,UAAA;IACA,mBAAA;EA0FR;EAxFM;IACE,YAAA;IACA,qBAAA;EA0FR;EAxFM;IACE,UAAA;IACA,mBAAA;EA0FR;AACF;AA9GM;EACE,6BAAA;EACA,sBAAA;EACA,sCAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;AAgHR;AA9GM;EACE;IACE,UAAA;IACA,mBAAA;EAgHR;EA9GM;IACE,YAAA;IACA,qBAAA;EAgHR;EA9GM;IACE,UAAA;IACA,mBAAA;EAgHR;AACF;;AA3GA;;EAEE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EAYA,gCAAA;EACA,sCAAA;EACA,sBAAA;EACA,6BAAA;AAmGF;AAjHE;;EACE,cAAA;AAoHJ;AAlHE;;;;EAEE,gBAAA;AAsHJ;AArHI;;;;EACE,WAAA;EACA,YAAA;AA0HN;;AAjHA;EACE;IACE,UAAA;IACA,6BAAA;EAoHF;EAlHA;IACE,UAAA;IACA,0BAAA;EAoHF;AACF;AAjHA;EAGI;;IACE,cAAA;IACA,iBAAA;EAkHJ;EAhHE;;;;IAEE,gBAAA;EAoHJ;EAnHI;;;;IACE,WAAA;EAwHN;AACF;AAnHA;EAGI;;IACE,cAAA;IACA,iBAAA;EAoHJ;EAlHE;;;;IAEE,gBAAA;EAsHJ;EArHI;;;;IACE,WAAA;EA0HN;AACF;AArHA;EACE;IACE,SAAA;EAuHF;EAtHE;IACE,WAAA;IACA,YAAA;EAwHJ;EAnHE;;IACE,cAAA;IACA,iBAAA;EAsHJ;EApHE;;;;IAEE,gBAAA;EAwHJ;EAvHI;;;;IACE,WAAA;EA4HN;AACF","sourcesContent":[".loading-screen-container {\r\n  display: flex;\r\n  gap: 20px;\r\n  .circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    background-color: #5b97aa;\r\n    perspective: 1000px;\r\n    opacity: 0;\r\n    @for $i from 1 through 6 {\r\n      &:nth-child(#{$i}) {\r\n        animation-name: loadingScreen;\r\n        animation-duration: 2s;\r\n        animation-timing-function: ease-in-out;\r\n        animation-delay: (150ms * $i) - 300;\r\n        animation-fill-mode: forwards;\r\n        animation-iteration-count: infinite;\r\n      }\r\n      @keyframes loadingScreen {\r\n        0% {\r\n          opacity: 1;\r\n          transform: scale(1);\r\n        }\r\n        50% {\r\n          opacity: 0.2;\r\n          transform: scale(0.8);\r\n        }\r\n        100% {\r\n          opacity: 1;\r\n          transform: scale(1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.default-container,\r\n.error-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  h2 {\r\n    color: #5b97aa;\r\n  }\r\n  .default-image-container,\r\n  .error-image-container {\r\n    max-width: 400px;\r\n    img {\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n  }\r\n  animation-name: showPlaceholders;\r\n  animation-timing-function: ease-in-out;\r\n  animation-duration: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes showPlaceholders {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(-100px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 50em) {\r\n  .default-container,\r\n  .error-container {\r\n    h2 {\r\n      color: #5b97aa;\r\n      font-size: 1.3rem;\r\n    }\r\n    .default-image-container,\r\n    .error-image-container {\r\n      max-width: 350px;\r\n      img {\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 38.125em) {\r\n  .default-container,\r\n  .error-container {\r\n    h2 {\r\n      color: #5b97aa;\r\n      font-size: 1.1rem;\r\n    }\r\n    .default-image-container,\r\n    .error-image-container {\r\n      max-width: 300px;\r\n      img {\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 28.75em) {\r\n  .loading-screen-container {\r\n    gap: 10px;\r\n    .circle {\r\n      width: 15px;\r\n      height: 15px;\r\n    }\r\n  }\r\n  .default-container,\r\n  .error-container {\r\n    h2 {\r\n      color: #5b97aa;\r\n      font-size: 0.9rem;\r\n    }\r\n    .default-image-container,\r\n    .error-image-container {\r\n      max-width: 300px;\r\n      img {\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.header-text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7;\n}\n.header-text-container h1 {\n  font-size: 4rem;\n  font-weight: 400;\n}\n.header-text-container .sub-text {\n  font-size: 1.45rem;\n  font-weight: 300;\n}\n\n.search-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-form {\n  width: 100%;\n  display: flex;\n}\n.input-form input {\n  flex: 1;\n  outline: none;\n  border: none;\n  padding: 0.8rem;\n  font-family: \"Signika Negative\", sans-serif;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 1px solid #153945;\n  background-color: #5b97aa;\n  color: #153945;\n  font-size: 1.1rem;\n}\n.input-form ::placeholder {\n  color: #153945;\n  opacity: 0.7;\n}\n.input-form button {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 50px;\n  height: 50px;\n  font-family: \"Signika Negative\", sans-serif;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  background-color: #153945;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.9;\n  transition: opacity 250ms ease-in-out;\n}\n.input-form button img {\n  width: 25px;\n  height: 25px;\n}\n.input-form button:hover {\n  opacity: 1;\n}\n\n.input-validation-text {\n  opacity: 0;\n  color: #5b97aa;\n  padding-top: 0.2rem;\n  padding-left: 0.8rem;\n}\n\n.show-span {\n  animation-name: showInputValid;\n  animation-duration: 300ms;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n.remove-span {\n  animation-name: removeInputValid;\n  animation-duration: 300ms;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes showInputValid {\n  from {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes removeInputValid {\n  from {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n}\n@media only screen and (max-width: 50em) {\n  .header-text-container h1 {\n    font-size: 3.5rem;\n  }\n  .header-text-container .sub-text {\n    font-size: 1.25rem;\n  }\n}\n@media only screen and (max-width: 38.125em) {\n  .header-text-container h1 {\n    font-size: 3.2rem;\n  }\n  .header-text-container .sub-text {\n    font-size: 1.15rem;\n  }\n  .input-form {\n    width: 100%;\n    display: flex;\n  }\n  .input-form input {\n    font-size: 0.9rem;\n  }\n  .input-form ::placeholder {\n    color: #153945;\n    opacity: 0.7;\n  }\n  span {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (max-width: 28.75em) {\n  .header-text-container h1 {\n    font-size: 2.8rem;\n  }\n  .header-text-container .sub-text {\n    font-size: 1.05rem;\n  }\n  .input-form {\n    width: 100%;\n    display: flex;\n  }\n  .input-form input {\n    font-size: 0.8rem;\n  }\n  .input-form ::placeholder {\n    color: #153945;\n    opacity: 0.7;\n  }\n  span {\n    font-size: 0.7rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,MAAA;AAEF;AADE;EACE,eAAA;EACA,gBAAA;AAGJ;AADE;EACE,kBAAA;EACA,gBAAA;AAGJ;;AAAA;EACE,aAAA;EACA,sBAAA;AAGF;;AADA;EACE,WAAA;EACA,aAAA;AAIF;AAHE;EACE,OAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,2CAAA;EACA,4BAAA;EACA,+BAAA;EACA,yBAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;AAKJ;AAHE;EACE,cAAA;EACA,YAAA;AAKJ;AAHE;EACE,eAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,2CAAA;EACA,6BAAA;EACA,gCAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,qCAAA;AAKJ;AAJI;EACE,WAAA;EACA,YAAA;AAMN;AAJI;EACE,UAAA;AAMN;;AAFA;EACE,UAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;AAKF;;AADA;EACE,8BAAA;EACA,yBAAA;EACA,sCAAA;EACA,6BAAA;AAIF;;AADA;EACE,gCAAA;EACA,yBAAA;EACA,sCAAA;EACA,6BAAA;AAIF;;AADA;EACE;IACE,UAAA;IACA,4BAAA;EAIF;EADA;IACE,UAAA;IACA,0BAAA;EAGF;AACF;AAAA;EACE;IACE,UAAA;IACA,0BAAA;EAEF;EACA;IACE,UAAA;IACA,4BAAA;EACF;AACF;AAEA;EAEI;IACE,iBAAA;EADJ;EAGE;IACE,kBAAA;EADJ;AACF;AAKA;EAEI;IACE,iBAAA;EAJJ;EAME;IACE,kBAAA;EAJJ;EAOA;IACE,WAAA;IACA,aAAA;EALF;EAME;IACE,iBAAA;EAJJ;EAME;IACE,cAAA;IACA,YAAA;EAJJ;EAOA;IACE,iBAAA;EALF;AACF;AAQA;EAEI;IACE,iBAAA;EAPJ;EASE;IACE,kBAAA;EAPJ;EAUA;IACE,WAAA;IACA,aAAA;EARF;EASE;IACE,iBAAA;EAPJ;EASE;IACE,cAAA;IACA,YAAA;EAPJ;EAUA;IACE,iBAAA;EARF;AACF","sourcesContent":[".header-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 14px;\r\n}\r\n.header-text-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 7;\r\n  h1 {\r\n    font-size: 4rem;\r\n    font-weight: 400;\r\n  }\r\n  .sub-text {\r\n    font-size: 1.45rem;\r\n    font-weight: 300;\r\n  }\r\n}\r\n.search-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.input-form {\r\n  width: 100%;\r\n  display: flex;\r\n  input {\r\n    flex: 1;\r\n    outline: none;\r\n    border: none;\r\n    padding: 0.8rem;\r\n    font-family: \"Signika Negative\", sans-serif;\r\n    border-top-left-radius: 25px;\r\n    border-bottom-left-radius: 25px;\r\n    border: 1px solid #153945;\r\n    background-color: #5b97aa;\r\n    color: #153945;\r\n    font-size: 1.1rem;\r\n  }\r\n  ::placeholder {\r\n    color: #153945;\r\n    opacity: 0.7;\r\n  }\r\n  button {\r\n    cursor: pointer;\r\n    outline: none;\r\n    border: none;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-family: \"Signika Negative\", sans-serif;\r\n    border-top-right-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    background-color: #153945;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    opacity: 0.9;\r\n    transition: opacity 250ms ease-in-out;\r\n    img {\r\n      width: 25px;\r\n      height: 25px;\r\n    }\r\n    &:hover {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n.input-validation-text {\r\n  opacity: 0;\r\n  color: #5b97aa;\r\n  padding-top: 0.2rem;\r\n  padding-left: 0.8rem;\r\n}\r\n\r\n// input-validation-animations\r\n.show-span {\r\n  animation-name: showInputValid;\r\n  animation-duration: 300ms;\r\n  animation-timing-function: ease-in-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.remove-span {\r\n  animation-name: removeInputValid;\r\n  animation-duration: 300ms;\r\n  animation-timing-function: ease-in-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes showInputValid {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(-50px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes removeInputValid {\r\n  from {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translateY(-50px);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 50em) {\r\n  .header-text-container {\r\n    h1 {\r\n      font-size: 3.5rem;\r\n    }\r\n    .sub-text {\r\n      font-size: 1.25rem;\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 38.125em) {\r\n  .header-text-container {\r\n    h1 {\r\n      font-size: 3.2rem;\r\n    }\r\n    .sub-text {\r\n      font-size: 1.15rem;\r\n    }\r\n  }\r\n  .input-form {\r\n    width: 100%;\r\n    display: flex;\r\n    input {\r\n      font-size: 0.9rem;\r\n    }\r\n    ::placeholder {\r\n      color: #153945;\r\n      opacity: 0.7;\r\n    }\r\n  }\r\n  span {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 28.75em) {\r\n  .header-text-container {\r\n    h1 {\r\n      font-size: 2.8rem;\r\n    }\r\n    .sub-text {\r\n      font-size: 1.05rem;\r\n    }\r\n  }\r\n  .input-form {\r\n    width: 100%;\r\n    display: flex;\r\n    input {\r\n      font-size: 0.8rem;\r\n    }\r\n    ::placeholder {\r\n      color: #153945;\r\n      opacity: 0.7;\r\n    }\r\n  }\r\n  span {\r\n    font-size: 0.7rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&family=Signika+Negative:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  background-color: #5b97aa;\n  font-family: \"Signika Negative\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em 2em 0 2em;\n  gap: 10px;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  color: #153945;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #153945;\n  padding: 2em 2.5em;\n  border-radius: 25px;\n  width: 750px;\n}\n\nfooter {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.3em;\n}\nfooter a {\n  color: #153945;\n  align-self: center;\n  text-decoration: none;\n  width: fit-content;\n}\nfooter a:hover .name {\n  text-decoration: underline;\n}\nfooter a:hover .github-logo {\n  transform: rotate(360deg);\n}\nfooter .credit {\n  font-size: 1.2rem;\n  width: auto;\n  display: flex;\n  gap: 0.2em;\n}\nfooter .credit .github-logo {\n  transition: 250ms ease-in-out;\n}\n\n@media only screen and (max-width: 50em) {\n  body {\n    padding: 1.2em 1.2em 0 1.2em;\n  }\n  main {\n    width: 600px;\n  }\n}\n@media only screen and (max-width: 38.125em) {\n  body {\n    padding: 1em 1em 0 1em;\n  }\n  main {\n    width: 450px;\n  }\n}\n@media only screen and (max-width: 28.75em) {\n  body {\n    padding: 0.6em 0.6em 0 0.6em;\n  }\n  main {\n    width: 310px;\n  }\n  footer .credit {\n    font-size: 0.9rem;\n    width: auto;\n    display: flex;\n    gap: 0.2em;\n  }\n  footer .credit .github-logo {\n    transition: 250ms ease-in-out;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AACA;;;EAGE,sBAAA;EACA,UAAA;EACA,SAAA;AACF;;AACA;EACE,YAAA;AAEF;;AAAA;EACE,gBAAA;EACA,yBAAA;EACA,2CAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;AAGF;;AADA;EACE,aAAA;EACA,uBAAA;EACA,cAAA;AAIF;;AAFA;EACE,OAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;AAKF;;AAHA;EACE,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;AAMF;AALE;EACE,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;AAOJ;AAJM;EACE,0BAAA;AAMR;AAJM;EACE,yBAAA;AAMR;AADE;EACE,iBAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;AAGJ;AADI;EACE,6BAAA;AAGN;;AAEA;EACE;IACE,4BAAA;EACF;EACA;IACE,YAAA;EACF;AACF;AAEA;EACE;IACE,sBAAA;EAAF;EAEA;IACE,YAAA;EAAF;AACF;AAGA;EACE;IACE,4BAAA;EADF;EAGA;IACE,YAAA;EADF;EAIE;IACE,iBAAA;IACA,WAAA;IACA,aAAA;IACA,UAAA;EAFJ;EAII;IACE,6BAAA;EAFN;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Signika+Negative:wght@300;400;700&display=swap\");\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  background-color: #5b97aa;\r\n  font-family: \"Signika Negative\", sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2em 2em 0 2em;\r\n  gap: 10px;\r\n}\r\nheader {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #153945;\r\n}\r\nmain {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #153945;\r\n  padding: 2em 2.5em;\r\n  border-radius: 25px;\r\n  width: 750px;\r\n}\r\nfooter {\r\n  font-family: \"Roboto\", sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 0.3em;\r\n  a {\r\n    color: #153945;\r\n    align-self: center;\r\n    text-decoration: none;\r\n    width: fit-content;\r\n\r\n    &:hover {\r\n      .name {\r\n        text-decoration: underline;\r\n      }\r\n      .github-logo {\r\n        transform: rotate(360deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  .credit {\r\n    font-size: 1.2rem;\r\n    width: auto;\r\n    display: flex;\r\n    gap: 0.2em;\r\n\r\n    .github-logo {\r\n      transition: 250ms ease-in-out;\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 50em) {\r\n  body {\r\n    padding: 1.2em 1.2em 0 1.2em;\r\n  }\r\n  main {\r\n    width: 600px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 38.125em) {\r\n  body {\r\n    padding: 1em 1em 0 1em;\r\n  }\r\n  main {\r\n    width: 450px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 28.75em) {\r\n  body {\r\n    padding: 0.6em 0.6em 0 0.6em;\r\n  }\r\n  main {\r\n    width: 310px;\r\n  }\r\n  footer {\r\n    .credit {\r\n      font-size: 0.9rem;\r\n      width: auto;\r\n      display: flex;\r\n      gap: 0.2em;\r\n\r\n      .github-logo {\r\n        transition: 250ms ease-in-out;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/content.scss":
/*!*********************************!*\
  !*** ./src/styles/content.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./content.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/content.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/handle.scss":
/*!********************************!*\
  !*** ./src/styles/handle.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_handle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./handle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/handle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_handle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_handle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_handle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_handle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/01d.svg":
/*!****************************!*\
  !*** ./src/assets/01d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01d.svg";

/***/ }),

/***/ "./src/assets/02d.svg":
/*!****************************!*\
  !*** ./src/assets/02d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02d.svg";

/***/ }),

/***/ "./src/assets/03-4d.svg":
/*!******************************!*\
  !*** ./src/assets/03-4d.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03-4d.svg";

/***/ }),

/***/ "./src/assets/09d.svg":
/*!****************************!*\
  !*** ./src/assets/09d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09d.svg";

/***/ }),

/***/ "./src/assets/10d.svg":
/*!****************************!*\
  !*** ./src/assets/10d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10d.svg";

/***/ }),

/***/ "./src/assets/11d.svg":
/*!****************************!*\
  !*** ./src/assets/11d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d.svg";

/***/ }),

/***/ "./src/assets/13d.svg":
/*!****************************!*\
  !*** ./src/assets/13d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13d.svg";

/***/ }),

/***/ "./src/assets/city.svg":
/*!*****************************!*\
  !*** ./src/assets/city.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "city.svg";

/***/ }),

/***/ "./src/assets/default_placeholder.svg":
/*!********************************************!*\
  !*** ./src/assets/default_placeholder.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "default_placeholder.svg";

/***/ }),

/***/ "./src/assets/downward.svg":
/*!*********************************!*\
  !*** ./src/assets/downward.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "downward.svg";

/***/ }),

/***/ "./src/assets/error_placeholder.svg":
/*!******************************************!*\
  !*** ./src/assets/error_placeholder.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "error_placeholder.svg";

/***/ }),

/***/ "./src/assets/humidity.svg":
/*!*********************************!*\
  !*** ./src/assets/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "humidity.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "search.svg";

/***/ }),

/***/ "./src/assets/temperature.svg":
/*!************************************!*\
  !*** ./src/assets/temperature.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "temperature.svg";

/***/ }),

/***/ "./src/assets/upward.svg":
/*!*******************************!*\
  !*** ./src/assets/upward.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "upward.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wind.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Handles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Handles */ "./src/components/Handles.js");



var header = document.querySelector("header");
var content = document.querySelector("main");
header.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_components_Handles__WEBPACK_IMPORTED_MODULE_2__.handleDefault)());
})();

/******/ })()
;
//# sourceMappingURL=bundle99b16dad14a942494bc5.js.map