/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
// require('./bootstrap');
// window.Vue = require('vue');
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */
// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
// const app = new Vue({
//     el: '#app'
// });

/**
 * Set burger menu onclick.
 */
var burgerMenu = document.getElementById('burger_menu');
var subMenuBurger = document.getElementById('submenu_burger');

burgerMenu.onclick = function () {
  subMenuBurger.style = "display: inline-block; position: absolute; top: 60%; right: 0; width: 250px; padding: 0;z-index:10000;";
};
/**
 * Open modal onclick
 */


var modal = document.getElementById('modal');
var modalCross = document.getElementById('closeCross');

modalCross.onclick = function () {
  modal.style.display = "none";
};
/**
 * Remove Burger menu and modal;
 */


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == subMenuBurger) {
    subMenuBurger.style.display = "none";
  }
};

/***/ }),

/***/ "./resources/sass/administration.scss":
/*!********************************************!*\
  !*** ./resources/sass/administration.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/articles/form.scss":
/*!*******************************************!*\
  !*** ./resources/sass/articles/form.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/articles/index.scss":
/*!********************************************!*\
  !*** ./resources/sass/articles/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/buttons.scss":
/*!*************************************!*\
  !*** ./resources/sass/buttons.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/event.scss":
/*!***********************************!*\
  !*** ./resources/sass/event.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/ideas.scss":
/*!***********************************!*\
  !*** ./resources/sass/ideas.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/layout.scss":
/*!************************************!*\
  !*** ./resources/sass/layout.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

<<<<<<< develop
<<<<<<< develop
<<<<<<< develop
=======
/***/ "./resources/sass/notification.scss":
/*!******************************************!*\
  !*** ./resources/sass/notification.scss ***!
=======
=======
>>>>>>> Fixing display bugs and adding comments
/***/ "./resources/sass/list-element.scss":
/*!******************************************!*\
  !*** ./resources/sass/list-element.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

>>>>>>> Adding top articles carousel base
/***/ "./resources/sass/notification.scss":
/*!******************************************!*\
  !*** ./resources/sass/notification.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {
=======
<<<<<<< develop
<<<<<<< develop
<<<<<<< develop
/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/layout.scss ./resources/sass/buttons.scss ./resources/sass/notification.scss ./resources/sass/ideas.scss ./resources/sass/administration.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\sass\app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\sass\layout.scss */"./resources/sass/layout.scss");
__webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\sass\buttons.scss */"./resources/sass/buttons.scss");
__webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\sass\notification.scss */"./resources/sass/notification.scss");
__webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\sass\ideas.scss */"./resources/sass/ideas.scss");
module.exports = __webpack_require__(/*! D:\workspace\Projet_web\laravel\bde\resources\sass\administration.scss */"./resources/sass/administration.scss");
>>>>>>> Fixing administration page

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/payment.scss":
/*!*************************************!*\
  !*** ./resources/sass/payment.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/purchase-element.scss":
/*!**********************************************!*\
  !*** ./resources/sass/purchase-element.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/purchase.scss":
/*!**************************************!*\
  !*** ./resources/sass/purchase.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/search-bar.scss":
/*!****************************************!*\
  !*** ./resources/sass/search-bar.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/top-article.scss":
/*!*****************************************!*\
  !*** ./resources/sass/top-article.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

<<<<<<< develop
/***/ 0:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/layout.scss ./resources/sass/buttons.scss ./resources/sass/notification.scss ./resources/sass/ideas.scss ./resources/sass/user.scss ./resources/sass/event.scss ./resources/sass/list-element.scss ./resources/sass/search-bar.scss ./resources/sass/administration.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< develop
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\layout.scss */"./resources/sass/layout.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\buttons.scss */"./resources/sass/buttons.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\notification.scss */"./resources/sass/notification.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\ideas.scss */"./resources/sass/ideas.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\user.scss */"./resources/sass/user.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\event.scss */"./resources/sass/event.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\list-element.scss */"./resources/sass/list-element.scss");
__webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\search-bar.scss */"./resources/sass/search-bar.scss");
module.exports = __webpack_require__(/*! C:\Users\chris\Documents\eXia\A2\Projets\Web\Sources\Laravel\BDE\resources\sass\administration.scss */"./resources/sass/administration.scss");
=======
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\layout.scss */"./resources/sass/layout.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\buttons.scss */"./resources/sass/buttons.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\notification.scss */"./resources/sass/notification.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\ideas.scss */"./resources/sass/ideas.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\user.scss */"./resources/sass/user.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\event.scss */"./resources/sass/event.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\list-element.scss */"./resources/sass/list-element.scss");
__webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\search-bar.scss */"./resources/sass/search-bar.scss");
module.exports = __webpack_require__(/*! C:\Users\emmanuel\Documents\CESI\A2\Project\WEB\BDE\Laravel\BDE\resources\sass\administration.scss */"./resources/sass/administration.scss");
=======
/***/ "./resources/sass/top-article.scss":
/*!*****************************************!*\
  !*** ./resources/sass/top-article.scss ***!
  \*****************************************/
=======
/***/ "./resources/sass/user.scss":
/*!**********************************!*\
  !*** ./resources/sass/user.scss ***!
  \**********************************/
>>>>>>> Fixing display bugs and adding comments
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/layout.scss ./resources/sass/buttons.scss ./resources/sass/notification.scss ./resources/sass/ideas.scss ./resources/sass/user.scss ./resources/sass/event.scss ./resources/sass/list-element.scss ./resources/sass/search-bar.scss ./resources/sass/top-article.scss ./resources/sass/administration.scss ./resources/sass/articles/index.scss ./resources/sass/articles/form.scss ./resources/sass/purchase-element.scss ./resources/sass/purchase.scss ./resources/sass/payment.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\layout.scss */"./resources/sass/layout.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\buttons.scss */"./resources/sass/buttons.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\notification.scss */"./resources/sass/notification.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\ideas.scss */"./resources/sass/ideas.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\user.scss */"./resources/sass/user.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\event.scss */"./resources/sass/event.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\list-element.scss */"./resources/sass/list-element.scss");
<<<<<<< develop
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\articles\index.scss */"./resources/sass/articles/index.scss");
<<<<<<< develop
module.exports = __webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\top-article.scss */"./resources/sass/top-article.scss");
>>>>>>> Adding top articles carousel base
<<<<<<< develop
>>>>>>> Adding top articles carousel base
=======
=======
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\top-article.scss */"./resources/sass/top-article.scss");
<<<<<<< develop
<<<<<<< develop
module.exports = __webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\articles\create.scss */"./resources/sass/articles/create.scss");
>>>>>>> Adding articles create
<<<<<<< develop
>>>>>>> Adding articles create
=======
=======
module.exports = __webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\articles\form.scss */"./resources/sass/articles/form.scss");
>>>>>>> Finishing shop
<<<<<<< develop
>>>>>>> Finishing shop
=======
=======
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\articles\form.scss */"./resources/sass/articles/form.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\purchase-element.scss */"./resources/sass/purchase-element.scss");
<<<<<<< develop
module.exports = __webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\purchase.scss */"./resources/sass/purchase.scss");
>>>>>>> Adding purchase component
<<<<<<< develop
>>>>>>> Adding purchase component
=======
=======
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\purchase.scss */"./resources/sass/purchase.scss");
module.exports = __webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\payment.scss */"./resources/sass/payment.scss");
>>>>>>> Adding payment confirmation views
>>>>>>> Adding payment confirmation views
=======
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\search-bar.scss */"./resources/sass/search-bar.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\top-article.scss */"./resources/sass/top-article.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\administration.scss */"./resources/sass/administration.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\articles\index.scss */"./resources/sass/articles/index.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\articles\form.scss */"./resources/sass/articles/form.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\purchase-element.scss */"./resources/sass/purchase-element.scss");
__webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\purchase.scss */"./resources/sass/purchase.scss");
module.exports = __webpack_require__(/*! D:\Dev\Laravel\BDE\Laravel\BDE\resources\sass\payment.scss */"./resources/sass/payment.scss");
>>>>>>> Fixing display bugs and adding comments


/***/ })

/******/ });