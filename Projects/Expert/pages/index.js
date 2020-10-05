/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/pages/index/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/reviewsBlock.js":
/*!************************************!*\
  !*** ./js/modules/reviewsBlock.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.global-this */ \"../node_modules/core-js/modules/es.global-this.js\");\n/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ \"../node_modules/tiny-slider/src/tiny-slider.js\");\n/* harmony import */ var _utils_decorators_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/decorators/debounce */ \"./js/utils/decorators/debounce.js\");\n/* harmony import */ var _utils_functions_checkDeviceWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functions/checkDeviceWidth */ \"./js/utils/functions/checkDeviceWidth.js\");\n/* harmony import */ var _utils_functions_isTextOverflows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/functions/isTextOverflows */ \"./js/utils/functions/isTextOverflows.js\");\n\n\n\n\n\nvar MOBILE_SLIDER_CARD_RATIO = 0.74;\nvar MOBILE_SLIDER_PADDING_RATIO = 0.065;\nvar SLIDER_RESIZE_DEBOUNCE_TIME = 400; // ms\n\nvar reviewsSliderWrap = document.querySelector(\".reviews-block__slider\");\nvar reviewsSliderNode = reviewsSliderWrap.querySelector(\".reviews-block__reviews-list\");\nvar reviewsSliderButtonPrevious = reviewsSliderWrap.querySelector(\".slider__button_prev\");\nvar reviewsSliderButtonNext = reviewsSliderWrap.querySelector(\".slider__button_next\");\nvar initialWindowWidth = globalThis.innerWidth;\nvar reviewsSliderOptions = {\n  container: reviewsSliderNode,\n  prevButton: reviewsSliderButtonPrevious,\n  nextButton: reviewsSliderButtonNext,\n  nav: true,\n  navPosition: \"bottom\",\n  loop: true,\n  mouseDrag: true,\n  swipeAngle: false,\n  speed: 400,\n  responsive: {\n    0: calcSliderResponsiveParams(1),\n    768: {\n      items: 2,\n      fixedWidth: false,\n      edgePadding: 12,\n      gutter: 35\n    },\n    1024: {\n      items: 3\n    },\n    1200: {\n      gutter: 50\n    }\n  }\n};\nvar reviewsSlider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__[\"tns\"])(reviewsSliderOptions);\nvar debouncedSliderResizeHandler = Object(_utils_decorators_debounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sliderResizeHandler, SLIDER_RESIZE_DEBOUNCE_TIME);\nglobalThis.addEventListener(\"resize\", debouncedSliderResizeHandler);\n\nfunction calcSliderResponsiveParams(items) {\n  var params = {\n    items: items\n  };\n  params.fixedWidth = Math.round(globalThis.innerWidth * MOBILE_SLIDER_CARD_RATIO / 2) * 2;\n  params.edgePadding = (globalThis.innerWidth - params.fixedWidth) / 2;\n  params.gutter = Math.round(globalThis.innerWidth * MOBILE_SLIDER_PADDING_RATIO);\n  return params;\n}\n\nfunction sliderResizeHandler() {\n  if (globalThis.innerWidth === initialWindowWidth) {\n    return;\n  }\n\n  initialWindowWidth = globalThis.innerWidth;\n\n  if (Object(_utils_functions_checkDeviceWidth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().isMobile) {\n    reviewsSliderOptions.responsive['0'] = calcSliderResponsiveParams(1);\n  }\n\n  reviewsSlider.destroy();\n  reviewsSlider = reviewsSlider.rebuild();\n}\n\nfunction cutReviewText() {\n  while (Object(_utils_functions_isTextOverflows__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()) {\n    console.log(1);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGVzL3Jldmlld3NCbG9jay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvcmV2aWV3c0Jsb2NrLmpzPzdhZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG5zIH0gZnJvbSAndGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWNvcmF0b3JzL2RlYm91bmNlJztcbmltcG9ydCBjaGVja0RldmljZVdpZHRoIGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9ucy9jaGVja0RldmljZVdpZHRoJztcbmltcG9ydCBpc1RleHRPdmVyZmxvd3MgZnJvbSAnLi4vdXRpbHMvZnVuY3Rpb25zL2lzVGV4dE92ZXJmbG93cyc7XG5cbmNvbnN0IE1PQklMRV9TTElERVJfQ0FSRF9SQVRJTyA9IDAuNzQ7XG5jb25zdCBNT0JJTEVfU0xJREVSX1BBRERJTkdfUkFUSU8gPSAwLjA2NTtcbmNvbnN0IFNMSURFUl9SRVNJWkVfREVCT1VOQ0VfVElNRSA9IDQwMDsgLy8gbXNcbmNvbnN0IHJldmlld3NTbGlkZXJXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJldmlld3MtYmxvY2tfX3NsaWRlcmApO1xuY29uc3QgcmV2aWV3c1NsaWRlck5vZGUgPSByZXZpZXdzU2xpZGVyV3JhcC5xdWVyeVNlbGVjdG9yKGAucmV2aWV3cy1ibG9ja19fcmV2aWV3cy1saXN0YCk7XG5jb25zdCByZXZpZXdzU2xpZGVyQnV0dG9uUHJldmlvdXMgPSByZXZpZXdzU2xpZGVyV3JhcC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyX19idXR0b25fcHJldmApO1xuY29uc3QgcmV2aWV3c1NsaWRlckJ1dHRvbk5leHQgPSByZXZpZXdzU2xpZGVyV3JhcC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyX19idXR0b25fbmV4dGApO1xubGV0IGluaXRpYWxXaW5kb3dXaWR0aCA9IGdsb2JhbFRoaXMuaW5uZXJXaWR0aDtcblxuY29uc3QgcmV2aWV3c1NsaWRlck9wdGlvbnMgPSB7XG4gIGNvbnRhaW5lcjogcmV2aWV3c1NsaWRlck5vZGUsXG4gIHByZXZCdXR0b246IHJldmlld3NTbGlkZXJCdXR0b25QcmV2aW91cyxcbiAgbmV4dEJ1dHRvbjogcmV2aWV3c1NsaWRlckJ1dHRvbk5leHQsXG4gIG5hdjogdHJ1ZSxcbiAgbmF2UG9zaXRpb246IGBib3R0b21gLFxuICBsb29wOiB0cnVlLFxuICBtb3VzZURyYWc6IHRydWUsXG4gIHN3aXBlQW5nbGU6IGZhbHNlLFxuICBzcGVlZDogNDAwLFxuICByZXNwb25zaXZlOiB7XG4gICAgMDogY2FsY1NsaWRlclJlc3BvbnNpdmVQYXJhbXMoMSksXG4gICAgNzY4OiB7XG4gICAgICBpdGVtczogMixcbiAgICAgIGZpeGVkV2lkdGg6IGZhbHNlLFxuICAgICAgZWRnZVBhZGRpbmc6IDEyLFxuICAgICAgZ3V0dGVyOiAzNVxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgaXRlbXM6IDNcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGd1dHRlcjogNTBcbiAgICB9XG4gIH1cbn07XG5sZXQgcmV2aWV3c1NsaWRlciA9IHRucyhyZXZpZXdzU2xpZGVyT3B0aW9ucyk7XG5cbmNvbnN0IGRlYm91bmNlZFNsaWRlclJlc2l6ZUhhbmRsZXIgPSBkZWJvdW5jZShzbGlkZXJSZXNpemVIYW5kbGVyLCBTTElERVJfUkVTSVpFX0RFQk9VTkNFX1RJTUUpO1xuZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKGByZXNpemVgLCBkZWJvdW5jZWRTbGlkZXJSZXNpemVIYW5kbGVyKTtcblxuZnVuY3Rpb24gY2FsY1NsaWRlclJlc3BvbnNpdmVQYXJhbXMoaXRlbXMpIHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGl0ZW1zOiBpdGVtc1xuICB9XG5cbiAgcGFyYW1zLmZpeGVkV2lkdGggPSBNYXRoLnJvdW5kKGdsb2JhbFRoaXMuaW5uZXJXaWR0aCAqIE1PQklMRV9TTElERVJfQ0FSRF9SQVRJTyAvIDIpICogMjtcbiAgcGFyYW1zLmVkZ2VQYWRkaW5nID0gKGdsb2JhbFRoaXMuaW5uZXJXaWR0aCAtIHBhcmFtcy5maXhlZFdpZHRoKSAvIDJcbiAgcGFyYW1zLmd1dHRlciA9IE1hdGgucm91bmQoZ2xvYmFsVGhpcy5pbm5lcldpZHRoICogTU9CSUxFX1NMSURFUl9QQURESU5HX1JBVElPKTtcblxuICByZXR1cm4gcGFyYW1zO1xufVxuXG5mdW5jdGlvbiBzbGlkZXJSZXNpemVIYW5kbGVyKCkge1xuICBpZiAoZ2xvYmFsVGhpcy5pbm5lcldpZHRoID09PSBpbml0aWFsV2luZG93V2lkdGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5pdGlhbFdpbmRvd1dpZHRoID0gZ2xvYmFsVGhpcy5pbm5lcldpZHRoO1xuXG4gIGlmIChjaGVja0RldmljZVdpZHRoKCkuaXNNb2JpbGUpIHtcbiAgICByZXZpZXdzU2xpZGVyT3B0aW9ucy5yZXNwb25zaXZlWycwJ10gPSBjYWxjU2xpZGVyUmVzcG9uc2l2ZVBhcmFtcygxKTtcbiAgfVxuXG4gIHJldmlld3NTbGlkZXIuZGVzdHJveSgpO1xuICByZXZpZXdzU2xpZGVyID0gcmV2aWV3c1NsaWRlci5yZWJ1aWxkKCk7XG59XG5cbmZ1bmN0aW9uIGN1dFJldmlld1RleHQoKSB7XG4gIHdoaWxlIChpc1RleHRPdmVyZmxvd3MoKSkge1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFYQTtBQVZBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/modules/reviewsBlock.js\n");

/***/ }),

/***/ "./js/pages/index/index.js":
/*!*********************************!*\
  !*** ./js/pages/index/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_reviewsBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/reviewsBlock */ \"./js/modules/reviewsBlock.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wYWdlcy9pbmRleC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3BhZ2VzL2luZGV4L2luZGV4LmpzPzZkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4uLy4uL21vZHVsZXMvcmV2aWV3c0Jsb2NrJztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/pages/index/index.js\n");

/***/ }),

/***/ "./js/utils/constants/globalVars.js":
/*!******************************************!*\
  !*** ./js/utils/constants/globalVars.js ***!
  \******************************************/
/*! exports provided: GLOBAL_VARS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLOBAL_VARS\", function() { return GLOBAL_VARS; });\n/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.global-this */ \"../node_modules/core-js/modules/es.global-this.js\");\n/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_isMobileDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/isMobileDevice */ \"./js/utils/functions/isMobileDevice.js\");\n\n\nvar GLOBAL_VARS = {\n  breakpoints: {\n    phoneMinWidth: 375,\n    phoneLandscapeMinWidth: 576,\n    tabletMinWidth: 768,\n    smallDesktopMinWidth: 1024,\n    desktopMinWidth: 1200,\n    largeDesktopMinWidth: 1400\n  },\n  initialWindowWidth: globalThis.innerWidth,\n  isAnimated: false,\n  isRequestSent: false,\n  isMobileDevice: _functions_isMobileDevice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy9jb25zdGFudHMvZ2xvYmFsVmFycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3V0aWxzL2NvbnN0YW50cy9nbG9iYWxWYXJzLmpzP2UxNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzTW9iaWxlRGV2aWNlIGZyb20gJy4uL2Z1bmN0aW9ucy9pc01vYmlsZURldmljZSc7XG5cbmV4cG9ydCBjb25zdCBHTE9CQUxfVkFSUyA9IHtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBwaG9uZU1pbldpZHRoOiAzNzUsXG4gICAgcGhvbmVMYW5kc2NhcGVNaW5XaWR0aDogNTc2LFxuICAgIHRhYmxldE1pbldpZHRoOiA3NjgsXG4gICAgc21hbGxEZXNrdG9wTWluV2lkdGg6IDEwMjQsXG4gICAgZGVza3RvcE1pbldpZHRoOiAxMjAwLFxuICAgIGxhcmdlRGVza3RvcE1pbldpZHRoOiAxNDAwXG4gIH0sXG4gIGluaXRpYWxXaW5kb3dXaWR0aDogZ2xvYmFsVGhpcy5pbm5lcldpZHRoLFxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgaXNSZXF1ZXN0U2VudDogZmFsc2UsXG4gIGlzTW9iaWxlRGV2aWNlOiBpc01vYmlsZURldmljZVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQVpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/utils/constants/globalVars.js\n");

/***/ }),

/***/ "./js/utils/decorators/debounce.js":
/*!*****************************************!*\
  !*** ./js/utils/decorators/debounce.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(func, ms, immediate) {\n  var timeout;\n  return function () {\n    var context = this;\n    var args = arguments;\n\n    var delayedFunc = function delayedFunc() {\n      timeout = null;\n\n      if (!immediate) {\n        func.apply(context, args);\n      }\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(delayedFunc, ms);\n\n    if (callNow) {\n      func.apply(context, args);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy9kZWNvcmF0b3JzL2RlYm91bmNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMvZGVjb3JhdG9ycy9kZWJvdW5jZS5qcz9iNjBiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIG1zLCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgZGVsYXllZEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRlbGF5ZWRGdW5jLCBtcyk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/utils/decorators/debounce.js\n");

/***/ }),

/***/ "./js/utils/functions/checkDeviceWidth.js":
/*!************************************************!*\
  !*** ./js/utils/functions/checkDeviceWidth.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkDeviceWidth; });\n/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.global-this */ \"../node_modules/core-js/modules/es.global-this.js\");\n/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_globalVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/globalVars */ \"./js/utils/constants/globalVars.js\");\n\n\nfunction checkDeviceWidth() {\n  var deviceWidth = {\n    isMobile: false,\n    isTablet: false,\n    isDesktop: false\n  };\n\n  if (globalThis.innerWidth < _constants_globalVars__WEBPACK_IMPORTED_MODULE_1__[\"GLOBAL_VARS\"].breakpoints.tabletMinWidth) {\n    deviceWidth.isMobile = true;\n  } else if (globalThis.innerWidth >= _constants_globalVars__WEBPACK_IMPORTED_MODULE_1__[\"GLOBAL_VARS\"].breakpoints.tabletMinWidth && globalThis.innerWidth < _constants_globalVars__WEBPACK_IMPORTED_MODULE_1__[\"GLOBAL_VARS\"].breakpoints.desktopMinWidth) {\n    deviceWidth.isTablet = true;\n  } else {\n    deviceWidth.isDesktop = true;\n  }\n\n  return deviceWidth;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy9mdW5jdGlvbnMvY2hlY2tEZXZpY2VXaWR0aC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3V0aWxzL2Z1bmN0aW9ucy9jaGVja0RldmljZVdpZHRoLmpzP2E3NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0xPQkFMX1ZBUlMgfSBmcm9tICcuLi9jb25zdGFudHMvZ2xvYmFsVmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrRGV2aWNlV2lkdGgoKSB7XG4gIGNvbnN0IGRldmljZVdpZHRoID0ge1xuICAgIGlzTW9iaWxlOiBmYWxzZSxcbiAgICBpc1RhYmxldDogZmFsc2UsXG4gICAgaXNEZXNrdG9wOiBmYWxzZVxuICB9O1xuXG4gIGlmIChnbG9iYWxUaGlzLmlubmVyV2lkdGggPCBHTE9CQUxfVkFSUy5icmVha3BvaW50cy50YWJsZXRNaW5XaWR0aCkge1xuICAgIGRldmljZVdpZHRoLmlzTW9iaWxlID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChnbG9iYWxUaGlzLmlubmVyV2lkdGggPj0gR0xPQkFMX1ZBUlMuYnJlYWtwb2ludHMudGFibGV0TWluV2lkdGggJiYgZ2xvYmFsVGhpcy5pbm5lcldpZHRoIDwgR0xPQkFMX1ZBUlMuYnJlYWtwb2ludHMuZGVza3RvcE1pbldpZHRoKSB7XG4gICAgZGV2aWNlV2lkdGguaXNUYWJsZXQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGRldmljZVdpZHRoLmlzRGVza3RvcCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlV2lkdGg7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/utils/functions/checkDeviceWidth.js\n");

/***/ }),

/***/ "./js/utils/functions/isMobileDevice.js":
/*!**********************************************!*\
  !*** ./js/utils/functions/isMobileDevice.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isMobileDevice; });\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"../node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar appleIphone = /iPhone/i;\nvar appleIpod = /iPod/i;\nvar appleTablet = /iPad/i;\nvar androidPhone = /\\bAndroid(?:.+)Mobile\\b/i; // Match `Android` AND `Mobile`\n\nvar androidTablet = /Android/i;\nvar amazonPhone = /\\bAndroid(?:.+)SD4930UR\\b/i;\nvar amazonTablet = /\\bAndroid(?:.+)(?:KF[A-Z]{2,4})\\b/i;\nvar windowsPhone = /Windows Phone/i;\nvar windowsTablet = /\\bWindows(?:.+)ARM\\b/i; // Match `Windows` AND `ARM`\n\nvar otherBlackBerry = /BlackBerry/i;\nvar otherBlackBerry10 = /BB10/i;\nvar otherOpera = /Opera Mini/i;\nvar otherChrome = /\\b(CriOS|Chrome)(?:.+)Mobile/i;\nvar otherFirefox = /Mobile(?:.+)Firefox\\b/i; // Match `Mobile` AND `Firefox`\n\nfunction match(regex, userAgent) {\n  return regex.test(userAgent);\n}\n\nfunction isMobileDevice(userAgent) {\n  var ua = userAgent || (typeof navigator !== \"undefined\" ? navigator.userAgent : \"\"); // Facebook mobile app`s integrated browser adds a bunch of strings that\n  // match everything. Strip it out if it exists.\n\n  var tmp = ua.split(\"[FBAN\");\n\n  if (typeof tmp[1] !== \"undefined\") {\n    ua = tmp[0];\n  } // Twitter mobile app`s integrated browser on iPad adds a 'Twitter for\n  // iPhone' string. Same probably happens on other tablet platforms.\n  // This will confuse detection so strip it out if it exists.\n\n\n  tmp = ua.split(\"Twitter\");\n\n  if (typeof tmp[1] !== \"undefined\") {\n    ua = tmp[0];\n  }\n\n  var result = {\n    apple: {\n      phone: match(appleIphone, ua) && !match(windowsPhone, ua),\n      ipod: match(appleIpod, ua),\n      tablet: !match(appleIphone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),\n      device: (match(appleIphone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)\n    },\n    amazon: {\n      phone: match(amazonPhone, ua),\n      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),\n      device: match(amazonPhone, ua) || match(amazonTablet, ua)\n    },\n    android: {\n      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),\n      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),\n      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\\bokhttp\\b/i, ua)\n    },\n    windows: {\n      phone: match(windowsPhone, ua),\n      tablet: match(windowsTablet, ua),\n      device: match(windowsPhone, ua) || match(windowsTablet, ua)\n    },\n    other: {\n      blackberry: match(otherBlackBerry, ua),\n      blackberry10: match(otherBlackBerry10, ua),\n      opera: match(otherOpera, ua),\n      firefox: match(otherFirefox, ua),\n      chrome: match(otherChrome, ua),\n      device: match(otherBlackBerry, ua) || match(otherBlackBerry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)\n    }\n  };\n  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device; // excludes `other` devices and ipods, targeting touchscreen phones\n\n  result.phone = result.apple.phone || result.android.phone || result.windows.phone;\n  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;\n  return result;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy9mdW5jdGlvbnMvaXNNb2JpbGVEZXZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy91dGlscy9mdW5jdGlvbnMvaXNNb2JpbGVEZXZpY2UuanM/MzA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBsZUlwaG9uZSA9IC9pUGhvbmUvaTtcbmNvbnN0IGFwcGxlSXBvZCA9IC9pUG9kL2k7XG5jb25zdCBhcHBsZVRhYmxldCA9IC9pUGFkL2k7XG5jb25zdCBhbmRyb2lkUGhvbmUgPSAvXFxiQW5kcm9pZCg/Oi4rKU1vYmlsZVxcYi9pOyAvLyBNYXRjaCBgQW5kcm9pZGAgQU5EIGBNb2JpbGVgXG5jb25zdCBhbmRyb2lkVGFibGV0ID0gL0FuZHJvaWQvaTtcbmNvbnN0IGFtYXpvblBob25lID0gL1xcYkFuZHJvaWQoPzouKylTRDQ5MzBVUlxcYi9pO1xuY29uc3QgYW1hem9uVGFibGV0ID0gL1xcYkFuZHJvaWQoPzouKykoPzpLRltBLVpdezIsNH0pXFxiL2k7XG5jb25zdCB3aW5kb3dzUGhvbmUgPSAvV2luZG93cyBQaG9uZS9pO1xuY29uc3Qgd2luZG93c1RhYmxldCA9IC9cXGJXaW5kb3dzKD86LispQVJNXFxiL2k7IC8vIE1hdGNoIGBXaW5kb3dzYCBBTkQgYEFSTWBcbmNvbnN0IG90aGVyQmxhY2tCZXJyeSA9IC9CbGFja0JlcnJ5L2k7XG5jb25zdCBvdGhlckJsYWNrQmVycnkxMCA9IC9CQjEwL2k7XG5jb25zdCBvdGhlck9wZXJhID0gL09wZXJhIE1pbmkvaTtcbmNvbnN0IG90aGVyQ2hyb21lID0gL1xcYihDcmlPU3xDaHJvbWUpKD86LispTW9iaWxlL2k7XG5jb25zdCBvdGhlckZpcmVmb3ggPSAvTW9iaWxlKD86LispRmlyZWZveFxcYi9pOyAvLyBNYXRjaCBgTW9iaWxlYCBBTkQgYEZpcmVmb3hgXG5cbmZ1bmN0aW9uIG1hdGNoKHJlZ2V4LCB1c2VyQWdlbnQpIHtcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXNlckFnZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UodXNlckFnZW50KSB7XG4gIGxldCB1YSA9IHVzZXJBZ2VudCB8fCAodHlwZW9mIG5hdmlnYXRvciAhPT0gYHVuZGVmaW5lZGAgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogYGApO1xuXG4gIC8vIEZhY2Vib29rIG1vYmlsZSBhcHBgcyBpbnRlZ3JhdGVkIGJyb3dzZXIgYWRkcyBhIGJ1bmNoIG9mIHN0cmluZ3MgdGhhdFxuICAvLyBtYXRjaCBldmVyeXRoaW5nLiBTdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuICBsZXQgdG1wID0gdWEuc3BsaXQoYFtGQkFOYCk7XG4gIGlmICh0eXBlb2YgdG1wWzFdICE9PSBgdW5kZWZpbmVkYCkge1xuICAgIHVhID0gdG1wWzBdO1xuICB9XG5cbiAgLy8gVHdpdHRlciBtb2JpbGUgYXBwYHMgaW50ZWdyYXRlZCBicm93c2VyIG9uIGlQYWQgYWRkcyBhICdUd2l0dGVyIGZvclxuICAvLyBpUGhvbmUnIHN0cmluZy4gU2FtZSBwcm9iYWJseSBoYXBwZW5zIG9uIG90aGVyIHRhYmxldCBwbGF0Zm9ybXMuXG4gIC8vIFRoaXMgd2lsbCBjb25mdXNlIGRldGVjdGlvbiBzbyBzdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuICB0bXAgPSB1YS5zcGxpdChgVHdpdHRlcmApO1xuICBpZiAodHlwZW9mIHRtcFsxXSAhPT0gYHVuZGVmaW5lZGApIHtcbiAgICB1YSA9IHRtcFswXTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBhcHBsZToge1xuICAgICAgcGhvbmU6IG1hdGNoKGFwcGxlSXBob25lLCB1YSkgJiYgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpLFxuICAgICAgaXBvZDogbWF0Y2goYXBwbGVJcG9kLCB1YSksXG4gICAgICB0YWJsZXQ6XG4gICAgICAgICAgIW1hdGNoKGFwcGxlSXBob25lLCB1YSkgJiZcbiAgICAgICAgICBtYXRjaChhcHBsZVRhYmxldCwgdWEpICYmXG4gICAgICAgICAgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpLFxuICAgICAgZGV2aWNlOlxuICAgICAgICAgIChtYXRjaChhcHBsZUlwaG9uZSwgdWEpIHx8XG4gICAgICAgICAgICAgIG1hdGNoKGFwcGxlSXBvZCwgdWEpIHx8XG4gICAgICAgICAgICAgIG1hdGNoKGFwcGxlVGFibGV0LCB1YSkpICYmXG4gICAgICAgICAgIW1hdGNoKHdpbmRvd3NQaG9uZSwgdWEpXG4gICAgfSxcbiAgICBhbWF6b246IHtcbiAgICAgIHBob25lOiBtYXRjaChhbWF6b25QaG9uZSwgdWEpLFxuICAgICAgdGFibGV0OiAhbWF0Y2goYW1hem9uUGhvbmUsIHVhKSAmJiBtYXRjaChhbWF6b25UYWJsZXQsIHVhKSxcbiAgICAgIGRldmljZTogbWF0Y2goYW1hem9uUGhvbmUsIHVhKSB8fCBtYXRjaChhbWF6b25UYWJsZXQsIHVhKVxuICAgIH0sXG4gICAgYW5kcm9pZDoge1xuICAgICAgcGhvbmU6XG4gICAgICAgICAgKCFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJiBtYXRjaChhbWF6b25QaG9uZSwgdWEpKSB8fFxuICAgICAgICAgICghbWF0Y2god2luZG93c1Bob25lLCB1YSkgJiYgbWF0Y2goYW5kcm9pZFBob25lLCB1YSkpLFxuICAgICAgdGFibGV0OlxuICAgICAgICAgICFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJlxuICAgICAgICAgICFtYXRjaChhbWF6b25QaG9uZSwgdWEpICYmXG4gICAgICAgICAgIW1hdGNoKGFuZHJvaWRQaG9uZSwgdWEpICYmXG4gICAgICAgICAgKG1hdGNoKGFtYXpvblRhYmxldCwgdWEpIHx8IG1hdGNoKGFuZHJvaWRUYWJsZXQsIHVhKSksXG4gICAgICBkZXZpY2U6XG4gICAgICAgICAgKCFtYXRjaCh3aW5kb3dzUGhvbmUsIHVhKSAmJlxuICAgICAgICAgICAgICAobWF0Y2goYW1hem9uUGhvbmUsIHVhKSB8fFxuICAgICAgICAgICAgICAgICAgbWF0Y2goYW1hem9uVGFibGV0LCB1YSkgfHxcbiAgICAgICAgICAgICAgICAgIG1hdGNoKGFuZHJvaWRQaG9uZSwgdWEpIHx8XG4gICAgICAgICAgICAgICAgICBtYXRjaChhbmRyb2lkVGFibGV0LCB1YSkpKSB8fFxuICAgICAgICAgIG1hdGNoKC9cXGJva2h0dHBcXGIvaSwgdWEpXG4gICAgfSxcbiAgICB3aW5kb3dzOiB7XG4gICAgICBwaG9uZTogbWF0Y2god2luZG93c1Bob25lLCB1YSksXG4gICAgICB0YWJsZXQ6IG1hdGNoKHdpbmRvd3NUYWJsZXQsIHVhKSxcbiAgICAgIGRldmljZTogbWF0Y2god2luZG93c1Bob25lLCB1YSkgfHwgbWF0Y2god2luZG93c1RhYmxldCwgdWEpXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgYmxhY2tiZXJyeTogbWF0Y2gob3RoZXJCbGFja0JlcnJ5LCB1YSksXG4gICAgICBibGFja2JlcnJ5MTA6IG1hdGNoKG90aGVyQmxhY2tCZXJyeTEwLCB1YSksXG4gICAgICBvcGVyYTogbWF0Y2gob3RoZXJPcGVyYSwgdWEpLFxuICAgICAgZmlyZWZveDogbWF0Y2gob3RoZXJGaXJlZm94LCB1YSksXG4gICAgICBjaHJvbWU6IG1hdGNoKG90aGVyQ2hyb21lLCB1YSksXG4gICAgICBkZXZpY2U6XG4gICAgICAgICAgbWF0Y2gob3RoZXJCbGFja0JlcnJ5LCB1YSkgfHxcbiAgICAgICAgICBtYXRjaChvdGhlckJsYWNrQmVycnkxMCwgdWEpIHx8XG4gICAgICAgICAgbWF0Y2gob3RoZXJPcGVyYSwgdWEpIHx8XG4gICAgICAgICAgbWF0Y2gob3RoZXJGaXJlZm94LCB1YSkgfHxcbiAgICAgICAgICBtYXRjaChvdGhlckNocm9tZSwgdWEpXG4gICAgfVxuICB9O1xuXG4gIHJlc3VsdC5hbnkgPVxuICAgICAgcmVzdWx0LmFwcGxlLmRldmljZSB8fFxuICAgICAgcmVzdWx0LmFuZHJvaWQuZGV2aWNlIHx8XG4gICAgICByZXN1bHQud2luZG93cy5kZXZpY2UgfHxcbiAgICAgIHJlc3VsdC5vdGhlci5kZXZpY2U7XG4gIC8vIGV4Y2x1ZGVzIGBvdGhlcmAgZGV2aWNlcyBhbmQgaXBvZHMsIHRhcmdldGluZyB0b3VjaHNjcmVlbiBwaG9uZXNcbiAgcmVzdWx0LnBob25lID1cbiAgICAgIHJlc3VsdC5hcHBsZS5waG9uZSB8fCByZXN1bHQuYW5kcm9pZC5waG9uZSB8fCByZXN1bHQud2luZG93cy5waG9uZTtcbiAgcmVzdWx0LnRhYmxldCA9XG4gICAgICByZXN1bHQuYXBwbGUudGFibGV0IHx8IHJlc3VsdC5hbmRyb2lkLnRhYmxldCB8fCByZXN1bHQud2luZG93cy50YWJsZXQ7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFHQTtBQUtBO0FBVEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUF6Q0E7QUF3REE7QUFDQTtBQUtBO0FBRUE7QUFHQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/utils/functions/isMobileDevice.js\n");

/***/ }),

/***/ "./js/utils/functions/isTextOverflows.js":
/*!***********************************************!*\
  !*** ./js/utils/functions/isTextOverflows.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isTextOverflows; });\nfunction isTextOverflows(node) {\n  return node.scrollWidth > node.clientWidth || node.scrollHeight > node.clientHeight;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy9mdW5jdGlvbnMvaXNUZXh0T3ZlcmZsb3dzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMvZnVuY3Rpb25zL2lzVGV4dE92ZXJmbG93cy5qcz8wZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGV4dE92ZXJmbG93cyhub2RlKSB7XG4gIHJldHVybiBub2RlLnNjcm9sbFdpZHRoID4gbm9kZS5jbGllbnRXaWR0aCB8fCBub2RlLnNjcm9sbEhlaWdodCA+IG5vZGUuY2xpZW50SGVpZ2h0O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/utils/functions/isTextOverflows.js\n");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map