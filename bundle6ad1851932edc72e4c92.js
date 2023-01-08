/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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















function showContent() {
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

  // The values below will be changed later on

  weatherImage.src = _assets_11d_svg__WEBPACK_IMPORTED_MODULE_6__;
  weatherDescription.textContent = "Thunderstorm";
  cityValue.textContent = "Dagupan";
  tempValue.textContent = "22°C";
  humidityValue.textContent = "80%";
  maxTempValue.textContent = "24°C";
  minTempValue.textContent = "20°C";
  windPressureValue.textContent = "1.63 m/s";
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


function showHeader() {
  var isSearchValid = false;
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
    var input = searchInput.value.trim();
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
      console.log("Oh hell yeah");
    } else {
      console.log("Awh hell nawh man.");
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
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n}\n\n.weather-image-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.weather-image-container .weather-image {\n  max-width: 375px;\n}\n.weather-image-container .weather-image img {\n  width: 100%;\n  height: auto;\n}\n.weather-image-container .weather-description {\n  color: #5b97aa;\n}\n\nhr {\n  background-color: #5b97aa;\n  border: 1px solid #5b97aa;\n}\n\n.weather-details {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.details {\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.details .icon-placements {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details .details-text {\n  font-weight: 400;\n  color: #5b97aa;\n}\n.details .show-hover {\n  pointer-events: none;\n  position: absolute;\n  font-weight: 800;\n  background-color: #5b97aa;\n  border-radius: 25px;\n  width: 120px;\n  padding: 10px;\n  color: #153945;\n  opacity: 0;\n  top: -50px;\n  text-align: center;\n  box-shadow: 0 3px 5px 1px #0f1c20;\n  -webkit-transform: translateY(50px);\n  -webkit-transition: 300ms ease-in-out;\n}\n.details:hover .show-hover {\n  opacity: 1;\n  -webkit-transform: translateY(0px);\n}\n\n.image-svg {\n  width: 35px;\n  height: 35px;\n}\n\n.small-svg {\n  width: 20px;\n  height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/styles/content.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;AACF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAEF;AADE;EACE,gBAAA;AAGJ;AAFI;EACE,WAAA;EACA,YAAA;AAIN;AADE;EACE,cAAA;AAGJ;;AAAA;EACE,yBAAA;EACA,yBAAA;AAGF;;AADA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AAIF;;AAFA;EACE,kBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAKF;AAJE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAMJ;AAJE;EACE,gBAAA;EACA,cAAA;AAMJ;AAJE;EACE,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,iCAAA;EACA,mCAAA;EACA,qCAAA;AAMJ;AAHE;EACE,UAAA;EACA,kCAAA;AAKJ;;AADA;EACE,WAAA;EACA,YAAA;AAIF;;AAFA;EACE,WAAA;EACA,YAAA;AAKF","sourcesContent":[".content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 100%;\r\n}\r\n.weather-image-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  .weather-image {\r\n    max-width: 375px;\r\n    img {\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n  }\r\n  .weather-description {\r\n    color: #5b97aa;\r\n  }\r\n}\r\nhr {\r\n  background-color: #5b97aa;\r\n  border: 1px solid #5b97aa;\r\n}\r\n.weather-details {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.details {\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  .icon-placements {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .details-text {\r\n    font-weight: 400;\r\n    color: #5b97aa;\r\n  }\r\n  .show-hover {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    font-weight: 800;\r\n    background-color: #5b97aa;\r\n    border-radius: 25px;\r\n    width: 120px;\r\n    padding: 10px;\r\n    color: #153945;\r\n    opacity: 0;\r\n    top: -50px;\r\n    text-align: center;\r\n    box-shadow: 0 3px 5px 1px #0f1c20;\r\n    -webkit-transform: translateY(50px);\r\n    -webkit-transition: 300ms ease-in-out;\r\n  }\r\n\r\n  &:hover .show-hover {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0px);\r\n  }\r\n}\r\n// For svgs\r\n.image-svg {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.small-svg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".header-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.header-text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7;\n}\n.header-text-container h1 {\n  font-size: 4rem;\n  font-weight: 400;\n}\n.header-text-container .sub-text {\n  font-size: 1.45rem;\n  font-weight: 300;\n}\n\n.search-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-form {\n  width: 100%;\n  display: flex;\n}\n.input-form input {\n  flex: 1;\n  outline: none;\n  border: none;\n  padding: 0.8rem;\n  font-family: \"Signika Negative\", sans-serif;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 1px solid #153945;\n  background-color: #5b97aa;\n  color: #153945;\n  font-size: 1.1rem;\n}\n.input-form ::placeholder {\n  color: #153945;\n  opacity: 0.7;\n}\n.input-form button {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 50px;\n  height: 50px;\n  font-family: \"Signika Negative\", sans-serif;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  background-color: #153945;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.9;\n  transition: opacity 250ms ease-in-out;\n}\n.input-form button img {\n  width: 25px;\n  height: 25px;\n}\n.input-form button:hover {\n  opacity: 1;\n}\n\n.input-validation-text {\n  opacity: 0;\n  color: #5b97aa;\n  padding-top: 0.2rem;\n  padding-left: 0.8rem;\n}\n\n.show-span {\n  animation-name: showInputValid;\n  animation-duration: 300ms;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n.remove-span {\n  animation-name: removeInputValid;\n  animation-duration: 300ms;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes showInputValid {\n  from {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes removeInputValid {\n  from {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,MAAA;AAEF;AADE;EACE,eAAA;EACA,gBAAA;AAGJ;AADE;EACE,kBAAA;EACA,gBAAA;AAGJ;;AAAA;EACE,aAAA;EACA,sBAAA;AAGF;;AADA;EACE,WAAA;EACA,aAAA;AAIF;AAHE;EACE,OAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,2CAAA;EACA,4BAAA;EACA,+BAAA;EACA,yBAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;AAKJ;AAHE;EACE,cAAA;EACA,YAAA;AAKJ;AAHE;EACE,eAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,2CAAA;EACA,6BAAA;EACA,gCAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,qCAAA;AAKJ;AAJI;EACE,WAAA;EACA,YAAA;AAMN;AAJI;EACE,UAAA;AAMN;;AAFA;EACE,UAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;AAKF;;AADA;EACE,8BAAA;EACA,yBAAA;EACA,sCAAA;EACA,6BAAA;AAIF;;AADA;EACE,gCAAA;EACA,yBAAA;EACA,sCAAA;EACA,6BAAA;AAIF;;AADA;EACE;IACE,UAAA;IACA,4BAAA;EAIF;EADA;IACE,UAAA;IACA,0BAAA;EAGF;AACF;AAAA;EACE;IACE,UAAA;IACA,0BAAA;EAEF;EACA;IACE,UAAA;IACA,4BAAA;EACF;AACF","sourcesContent":[".header-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 14px;\r\n}\r\n.header-text-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 7;\r\n  h1 {\r\n    font-size: 4rem;\r\n    font-weight: 400;\r\n  }\r\n  .sub-text {\r\n    font-size: 1.45rem;\r\n    font-weight: 300;\r\n  }\r\n}\r\n.search-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.input-form {\r\n  width: 100%;\r\n  display: flex;\r\n  input {\r\n    flex: 1;\r\n    outline: none;\r\n    border: none;\r\n    padding: 0.8rem;\r\n    font-family: \"Signika Negative\", sans-serif;\r\n    border-top-left-radius: 25px;\r\n    border-bottom-left-radius: 25px;\r\n    border: 1px solid #153945;\r\n    background-color: #5b97aa;\r\n    color: #153945;\r\n    font-size: 1.1rem;\r\n  }\r\n  ::placeholder {\r\n    color: #153945;\r\n    opacity: 0.7;\r\n  }\r\n  button {\r\n    cursor: pointer;\r\n    outline: none;\r\n    border: none;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-family: \"Signika Negative\", sans-serif;\r\n    border-top-right-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    background-color: #153945;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    opacity: 0.9;\r\n    transition: opacity 250ms ease-in-out;\r\n    img {\r\n      width: 25px;\r\n      height: 25px;\r\n    }\r\n    &:hover {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n.input-validation-text{\r\n  opacity: 0;\r\n  color: #5b97aa;\r\n  padding-top: 0.2rem;\r\n  padding-left: 0.8rem;\r\n}\r\n\r\n// input-validation-animations\r\n.show-span{\r\n  animation-name: showInputValid;\r\n  animation-duration: 300ms;\r\n  animation-timing-function: ease-in-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.remove-span{\r\n  animation-name: removeInputValid;\r\n  animation-duration: 300ms;\r\n  animation-timing-function: ease-in-out;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes showInputValid {\r\n  from{\r\n    opacity: 0;\r\n    transform: translateY(-50px);\r\n  }\r\n\r\n  to{\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes removeInputValid {\r\n  from{\r\n    opacity: 1;\r\n    transform: translateY(0px); \r\n  }\r\n\r\n  to{\r\n    opacity: 0;\r\n    transform: translateY(-50px);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  background-color: #5b97aa;\n  font-family: \"Signika Negative\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em 2em 0 2em;\n  gap: 10px;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  color: #153945;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #153945;\n  padding: 2em 2.5em;\n  border-radius: 25px;\n  width: 750px;\n}\n\nfooter {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.3em;\n}\nfooter a {\n  color: #153945;\n  align-self: center;\n  text-decoration: none;\n  width: fit-content;\n}\nfooter a:hover .name {\n  text-decoration: underline;\n}\nfooter a:hover .github-logo {\n  transform: rotate(360deg);\n}\nfooter .credit {\n  font-size: 1.2rem;\n  width: auto;\n  display: flex;\n  gap: 0.2em;\n}\nfooter .credit .github-logo {\n  transition: 250ms ease-in-out;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AACA;;;EAGE,sBAAA;EACA,UAAA;EACA,SAAA;AACF;;AACA;EACE,YAAA;AAEF;;AAAA;EACE,gBAAA;EACA,yBAAA;EACA,2CAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;AAGF;;AADA;EACE,aAAA;EACA,uBAAA;EACA,cAAA;AAIF;;AAFA;EACE,OAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;AAKF;;AAHA;EACE,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;AAMF;AALE;EACE,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;AAOJ;AAJM;EACE,0BAAA;AAMR;AAJM;EACE,yBAAA;AAMR;AADE;EACE,iBAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;AAGJ;AADI;EACE,6BAAA;AAGN","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Signika+Negative:wght@300;400;700&display=swap\");\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  background-color: #5b97aa;\r\n  font-family: \"Signika Negative\", sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2em 2em 0 2em;\r\n  gap: 10px;\r\n}\r\nheader {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #153945;\r\n}\r\nmain {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #153945;\r\n  padding: 2em 2.5em;\r\n  border-radius: 25px;\r\n  width: 750px;\r\n}\r\nfooter {\r\n  font-family: \"Roboto\", sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 0.3em;\r\n  a {\r\n    color: #153945;\r\n    align-self: center;\r\n    text-decoration: none;\r\n    width: fit-content;\r\n\r\n    &:hover {\r\n      .name {\r\n        text-decoration: underline;\r\n      }\r\n      .github-logo {\r\n        transform: rotate(360deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  .credit {\r\n    font-size: 1.2rem;\r\n    width: auto;\r\n    display: flex;\r\n    gap: 0.2em;\r\n\r\n    .github-logo {\r\n      transition: 250ms ease-in-out;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/downward.svg":
/*!*********************************!*\
  !*** ./src/assets/downward.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "downward.svg";

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
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Content */ "./src/components/Content.js");



var header = document.querySelector("header");
var content = document.querySelector("main");
header.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_components_Content__WEBPACK_IMPORTED_MODULE_2__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=bundle6ad1851932edc72e4c92.js.map