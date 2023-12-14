/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/PorjectsItems.js":
/*!**********************************!*\
  !*** ./src/App/PorjectsItems.js ***!
  \**********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelpers */ \"./src/Utility/DOMHelpers.js\");\n\r\n// import { Tooltip } from './Tool-tip';\r\n\r\nclass ProjectItem {\r\n    // hasActiveTooltip = false;\r\n\r\n    constructor(id, updateProjectListsFunction, type) {\r\n        this.id = id;\r\n        this.hasActiveTooltip = false;\r\n        this.updateProjectListsHandler = updateProjectListsFunction;\r\n        this.connectMoreInfoButton();\r\n        this.connectSwitchButton(type);\r\n        this.connectDrag();\r\n    }\r\n\r\n    showMoreInfoHandler() {\r\n        if (this.hasActiveTooltip) {\r\n            return;\r\n        }\r\n        const projectElement = document.getElementById(this.id);\r\n        const tooltipText = projectElement.dataset.extraInfo;\r\n        __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Tool-tip */ \"./src/App/Tool-tip.js\")).then(module => {\r\n            const tooltip = new module.Tooltip(\r\n                () => {\r\n                    this.hasActiveTooltip = false;\r\n                },\r\n                tooltipText,\r\n                this.id\r\n            );\r\n            tooltip.attach();\r\n            this.hasActiveTooltip = true;\r\n        });\r\n    }\r\n\r\n    connectDrag() {\r\n        const item = document.getElementById(this.id);\r\n        item.addEventListener('dragstart', event => {\r\n            event.dataTransfer.setData('text/plain', this.id);\r\n            event.dataTransfer.effectAllowed = 'move';\r\n        });\r\n\r\n        item.addEventListener('dragend', event => {\r\n            console.log(event);\r\n        });\r\n    }\r\n\r\n    connectMoreInfoButton() {\r\n        const projectItemElement = document.getElementById(this.id);\r\n        const moreInfoBtn = projectItemElement.querySelector(\r\n            'button:first-of-type'\r\n        );\r\n        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\r\n    }\r\n\r\n    connectSwitchButton(type) {\r\n        const projectItemElement = document.getElementById(this.id);\r\n        let switchBtn = projectItemElement.querySelector('button:last-of-type');\r\n        switchBtn = _Utility_DOMHelpers__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\r\n        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\r\n        switchBtn.addEventListener(\r\n            'click',\r\n            this.updateProjectListsHandler.bind(null, this.id)\r\n        );\r\n    }\r\n\r\n    update(updateProjectListsFn, type) {\r\n        this.updateProjectListsHandler = updateProjectListsFn;\r\n        this.connectSwitchButton(type);\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1BvcmplY3RzSXRlbXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1BvcmplY3RzSXRlbXMuanM/MWFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET01IZWxwZXJ9IGZyb20gJy4uL1V0aWxpdHkvRE9NSGVscGVycyc7XHJcbi8vIGltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuL1Rvb2wtdGlwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbSB7XHJcbiAgICAvLyBoYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQsIHVwZGF0ZVByb2plY3RMaXN0c0Z1bmN0aW9uLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlciA9IHVwZGF0ZVByb2plY3RMaXN0c0Z1bmN0aW9uO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdERyYWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TW9yZUluZm9IYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0FjdGl2ZVRvb2x0aXApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gcHJvamVjdEVsZW1lbnQuZGF0YXNldC5leHRyYUluZm87XHJcbiAgICAgICAgaW1wb3J0KCcuL1Rvb2wtdGlwJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gbmV3IG1vZHVsZS5Ub29sdGlwKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0b29sdGlwLmF0dGFjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0FjdGl2ZVRvb2x0aXAgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3REcmFnKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RNb3JlSW5mb0J1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICBjb25zdCBtb3JlSW5mb0J0biA9IHByb2plY3RJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnYnV0dG9uOmZpcnN0LW9mLXR5cGUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtb3JlSW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICBsZXQgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKTtcclxuICAgICAgICBzd2l0Y2hCdG4gPSBET01IZWxwZXIuY2xlYXJFdmVudExpc3RlbmVycyhzd2l0Y2hCdG4pO1xyXG4gICAgICAgIHN3aXRjaEJ0bi50ZXh0Q29udGVudCA9IHR5cGUgPT09ICdhY3RpdmUnID8gJ0ZpbmlzaCcgOiAnQWN0aXZhdGUnO1xyXG4gICAgICAgIHN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RMaXN0c0hhbmRsZXIuYmluZChudWxsLCB0aGlzLmlkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHVwZGF0ZVByb2plY3RMaXN0c0ZuLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRm47XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/PorjectsItems.js\n");

/***/ }),

/***/ "./src/App/ProjectsLists.js":
/*!**********************************!*\
  !*** ./src/App/ProjectsLists.js ***!
  \**********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _PorjectsItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PorjectsItems */ \"./src/App/PorjectsItems.js\");\n/* harmony import */ var _Utility_DOMHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelpers */ \"./src/Utility/DOMHelpers.js\");\n\r\n\r\n\r\n// const ProjectItem = 'abc';\r\n\r\nclass ProjectList {\r\n    // projects = [];\r\n\r\n    constructor(type) {\r\n        this.type = type;\r\n        this.projects = [];\r\n        const prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n        for (const prjItem of prjItems) {\r\n            this.projects.push(\r\n                new _PorjectsItems__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type)\r\n            );\r\n        }\r\n        console.log(this.projects);\r\n        this.connectDroppable();\r\n    }\r\n\r\n    connectDroppable() {\r\n        const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n        list.addEventListener('dragenter', event => {\r\n            if (event.dataTransfer.types[0] === 'text/plain') {\r\n                list.parentElement.classList.add('droppable');\r\n                event.preventDefault();\r\n            }\r\n        });\r\n\r\n        list.addEventListener('dragover', event => {\r\n            if (event.dataTransfer.types[0] === 'text/plain') {\r\n                event.preventDefault();\r\n            }\r\n        });\r\n\r\n        list.addEventListener('dragleave', event => {\r\n            if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n                list.parentElement.classList.remove('droppable');\r\n            }\r\n        });\r\n\r\n        list.addEventListener('drop', event => {\r\n            const prjId = event.dataTransfer.getData('text/plain');\r\n            if (this.projects.find(p => p.id === prjId)) {\r\n                return;\r\n            }\r\n            document.getElementById(prjId)\r\n                .querySelector('button:last-of-type')\r\n                .click();\r\n            list.parentElement.classList.remove('droppable');\r\n            event.preventDefault(); // not required\r\n        });\r\n\r\n    }\r\n\r\n    setSwitchHandlerFunction(switchHandlerFunction) {\r\n        this.switchHandler = switchHandlerFunction;\r\n    }\r\n\r\n    addProject(project) {\r\n        this.projects.push(project);\r\n        _Utility_DOMHelpers__WEBPACK_IMPORTED_MODULE_1__[\"moveElement\"](project.id, `#${this.type}-projects ul`);\r\n        project.update(this.switchProject.bind(this), this.type);\r\n    }\r\n\r\n    switchProject(projectId) {\r\n        // const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n        // this.projects.splice(projectIndex, 1);\r\n        this.switchHandler(this.projects.find(p => p.id === projectId));\r\n        this.projects = this.projects.filter(p => p.id !== projectId);\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RzTGlzdHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Byb2plY3RzTGlzdHMuanM/NDQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0SXRlbSBhcyBQcmpJdGVtIH0gZnJvbSAnLi9Qb3JqZWN0c0l0ZW1zJztcclxuaW1wb3J0ICogYXMgRE9NSCBmcm9tICcuLi9VdGlsaXR5L0RPTUhlbHBlcnMnO1xyXG5cclxuLy8gY29uc3QgUHJvamVjdEl0ZW0gPSAnYWJjJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdCB7XHJcbiAgICAvLyBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgICAgICBjb25zdCBwcmpJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3R5cGV9LXByb2plY3RzIGxpYCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHByakl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcmpJdGVtKHByakl0ZW0uaWQsIHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdERyb3BwYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3REcm9wcGFibGUoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKTtcclxuXHJcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSAndGV4dC9wbGFpbicpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJqSWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJqSWQpXHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKTtcclxuICAgICAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBub3QgcmVxdWlyZWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKHN3aXRjaEhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3dpdGNoSGFuZGxlciA9IHN3aXRjaEhhbmRsZXJGdW5jdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgRE9NSC5tb3ZlRWxlbWVudChwcm9qZWN0LmlkLCBgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xyXG4gICAgICAgIHByb2plY3QudXBkYXRlKHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFByb2plY3QocHJvamVjdElkKSB7XHJcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hIYW5kbGVyKHRoaXMucHJvamVjdHMuZmluZChwID0+IHAuaWQgPT09IHByb2plY3RJZCkpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwID0+IHAuaWQgIT09IHByb2plY3RJZCk7XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectsLists.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelpers.js":
/*!***********************************!*\
  !*** ./src/Utility/DOMHelpers.js ***!
  \***********************************/
/*! exports provided: DOMHelper, clearEventListeners, moveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearEventListeners\", function() { return clearEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveElement\", function() { return moveElement; });\nclass DOMHelper {\r\n    static clearEventListeners(element) {\r\n        const clonedElement = element.cloneNode(true);\r\n        element.replaceWith(clonedElement);\r\n        return clonedElement;\r\n    }\r\n\r\n    static moveElement(elementId, newDestinationSelector) {\r\n        const element = document.getElementById(elementId);\r\n        const destinationElement = document.querySelector(newDestinationSelector);\r\n        destinationElement.append(element);\r\n        element.scrollIntoView({ behavior: 'smooth' });\r\n    }\r\n}\r\n\r\nfunction clearEventListeners(element) {\r\n    const clonedElement = element.cloneNode(true);\r\n    element.replaceWith(clonedElement);\r\n    return clonedElement;\r\n}\r\n\r\nfunction moveElement(elementId, newDestinationSelector) {\r\n    const element = document.getElementById(elementId);\r\n    const destinationElement = document.querySelector(newDestinationSelector);\r\n    destinationElement.append(element);\r\n    element.scrollIntoView({ behavior: 'smooth' });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdHkvRE9NSGVscGVycy5qcz8wODA5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBET01IZWxwZXIge1xyXG4gICAgc3RhdGljIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZEVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3ZlRWxlbWVudChlbGVtZW50SWQsIG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xyXG4gICAgICAgIGRlc3RpbmF0aW9uRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xyXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcclxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZUVsZW1lbnQoZWxlbWVudElkLCBuZXdEZXN0aW5hdGlvblNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XHJcbiAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelpers.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectsLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectsLists */ \"./src/App/ProjectsLists.js\");\n\r\n\r\nclass App {\r\n    static init() {\r\n        const activeProjectsList = new _App_ProjectsLists__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('active');\r\n        const finishedProjectsList = new _App_ProjectsLists__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('finished');\r\n        activeProjectsList.setSwitchHandlerFunction(\r\n            finishedProjectsList.addProject.bind(finishedProjectsList)\r\n        );\r\n        finishedProjectsList.setSwitchHandlerFunction(\r\n            activeProjectsList.addProject.bind(activeProjectsList)\r\n        );\r\n\r\n        // const timerId = setTimeout(this.startAnalytics, 3000);\r\n        //\r\n        // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\r\n        //   clearTimeout(timerId);\r\n        // });\r\n    }\r\n\r\n    static startAnalytics() {\r\n        const analyticsScript = document.createElement('script');\r\n        analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\r\n        analyticsScript.defer = true;\r\n        document.head.append(analyticsScript);\r\n    }\r\n}\r\n\r\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9BcHAvUHJvamVjdHNMaXN0cyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RMaXN0KCdhY3RpdmUnKTtcclxuICAgICAgICBjb25zdCBmaW5pc2hlZFByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgnZmluaXNoZWQnKTtcclxuICAgICAgICBhY3RpdmVQcm9qZWN0c0xpc3Quc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKFxyXG4gICAgICAgICAgICBmaW5pc2hlZFByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoZmluaXNoZWRQcm9qZWN0c0xpc3QpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaW5pc2hlZFByb2plY3RzTGlzdC5zZXRTd2l0Y2hIYW5kbGVyRnVuY3Rpb24oXHJcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUHJvamVjdHNMaXN0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmFseXRpY3MsIDMwMDApO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AtYW5hbHl0aWNzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdGFydEFuYWx5dGljcygpIHtcclxuICAgICAgICBjb25zdCBhbmFseXRpY3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBhbmFseXRpY3NTY3JpcHQuc3JjID0gJ2Fzc2V0cy9zY3JpcHRzL1V0aWxpdHkvQW5hbHl0aWNzLmpzJztcclxuICAgICAgICBhbmFseXRpY3NTY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGFuYWx5dGljc1NjcmlwdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFwcC5pbml0KCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });