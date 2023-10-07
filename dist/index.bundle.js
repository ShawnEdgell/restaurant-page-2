"use strict";
(self["webpackChunkrestaurant_page_2"] = self["webpackChunkrestaurant_page_2"] || []).push([["index"],{

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
    const contentDiv = document.createElement('div');

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us";
    contentDiv.appendChild(contactHeader);

    // ... other content for contact ...

    return contentDiv;
}


/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
    const contentDiv = document.createElement('div');

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Delightful Dishes";
    contentDiv.appendChild(headline);

    // ... other content for home ...

    return contentDiv;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab.js */ "./src/homeTab.js");
/* harmony import */ var _contactTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactTab.js */ "./src/contactTab.js");
/* harmony import */ var _menuTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab.js */ "./src/menuTab.js");




const contentDiv = document.getElementById('content');

document.getElementById('homeTab').addEventListener('click', () => {
    loadTabContent(_homeTab_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);
});

document.getElementById('contactTab').addEventListener('click', () => {
    loadTabContent(_contactTab_js__WEBPACK_IMPORTED_MODULE_1__.loadContact);
});

document.getElementById('menuTab').addEventListener('click', () => {
    loadTabContent(_menuTab_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu);
});

// Load default content on page load
loadTabContent(_homeTab_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);

function loadTabContent(loadFunction) {
    // Clear existing content
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    // Load new content
    contentDiv.appendChild(loadFunction());
}


/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
    const contentDiv = document.createElement('div');

    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "Our Menu";
    contentDiv.appendChild(menuHeader);

    // ... other content for menu ...

    return contentDiv;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWd0M7QUFDTTtBQUNOOztBQUV4Qzs7QUFFQTtBQUNBLG1CQUFtQixpREFBUTtBQUMzQixDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLHVEQUFXO0FBQzlCLENBQUM7O0FBRUQ7QUFDQSxtQkFBbUIsaURBQVE7QUFDM0IsQ0FBQzs7QUFFRDtBQUNBLGVBQWUsaURBQVE7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL2NvbnRhY3RUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvaG9tZVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9tZW51VGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgLy8gLi4uIG90aGVyIGNvbnRlbnQgZm9yIGNvbnRhY3QgLi4uXG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBEZWxpZ2h0ZnVsIERpc2hlc1wiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgLy8gLi4uIG90aGVyIGNvbnRlbnQgZm9yIGhvbWUgLi4uXG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cbiIsImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9ob21lVGFiLmpzJztcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSAnLi9jb250YWN0VGFiLmpzJztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9tZW51VGFiLmpzJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZFRhYkNvbnRlbnQobG9hZEhvbWUpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZFRhYkNvbnRlbnQobG9hZENvbnRhY3QpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZFRhYkNvbnRlbnQobG9hZE1lbnUpO1xufSk7XG5cbi8vIExvYWQgZGVmYXVsdCBjb250ZW50IG9uIHBhZ2UgbG9hZFxubG9hZFRhYkNvbnRlbnQobG9hZEhvbWUpO1xuXG5mdW5jdGlvbiBsb2FkVGFiQ29udGVudChsb2FkRnVuY3Rpb24pIHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gTG9hZCBuZXcgY29udGVudFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEZ1bmN0aW9uKCkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgLy8gLi4uIG90aGVyIGNvbnRlbnQgZm9yIG1lbnUgLi4uXG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==