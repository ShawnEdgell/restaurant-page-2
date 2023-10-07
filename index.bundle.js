"use strict";
(self["webpackChunkrestaurant_page_2"] = self["webpackChunkrestaurant_page_2"] || []).push([["index"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact Us";
    contentDiv.appendChild(contactHeader);

    // Address
    const address = document.createElement("p");
    address.textContent = "123 Food Street, Tasty Town, 12345";
    contentDiv.appendChild(address);

    // Phone Number
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: (123) 456-7890";
    contentDiv.appendChild(phoneNumber);

    // Email
    const email = document.createElement("p");
    email.textContent = "Email: info@delightfuldishes.com";
    contentDiv.appendChild(email);

    // Hours of Operation
    const hours = document.createElement("p");
    hours.innerHTML = `
        <strong>Hours of Operation:</strong><br>
        Monday - Friday: 9am - 9pm<br>
        Saturday: 10am - 10pm<br>
        Sunday: 11am - 8pm
    `;
    contentDiv.appendChild(hours);

    // Embed Google Maps iframe
    const mapIframe = document.createElement("iframe");
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11550.474977828695!2d-79.51832526598861!3d43.6352935755704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b36f5485e6987%3A0x14afb80d83f75dca!2sOld%20Mill%20Toronto%20Hotel!5e0!3m2!1sen!2sca!4v1696662116179!5m2!1sen!2sca";
    mapIframe.width = "600";
    mapIframe.height = "450";
    mapIframe.style.border = "0";
    mapIframe.allowFullscreen = "";
    mapIframe.loading = "lazy";
    contentDiv.appendChild(mapIframe);

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

    // Headline
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Delightful Dishes";
    contentDiv.appendChild(headline);

    // Lorem ipsum
    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna at magna cursus mollis. Curabitur sed ligula euismod, vulputate quam quis, fermentum risus. Proin id ipsum sit amet enim gravida facilisis ac in velit.";
    contentDiv.appendChild(paragraph);

    // Placeholder image
    const placeholderImage = document.createElement('img');
    placeholderImage.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';  // You can replace this with your own placeholder URL
    placeholderImage.alt = 'Delightful Dishes Placeholder';
    placeholderImage.className = 'restaurant-image';  // Added class for styling in CSS
    contentDiv.appendChild(placeholderImage);

    return contentDiv;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab.js */ "./src/homeTab.js");
/* harmony import */ var _contactTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab.js */ "./src/contactTab.js");
/* harmony import */ var _menuTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuTab.js */ "./src/menuTab.js");





const contentDiv = document.getElementById('content');

function initButtons() {
    const tabsDiv = document.createElement('div');
    tabsDiv.id = 'tabs';
    document.body.prepend(tabsDiv);

    const buttons = [
        { id: 'homeTab', text: 'Home', loader: _homeTab_js__WEBPACK_IMPORTED_MODULE_1__.loadHome },
        { id: 'menuTab', text: 'Menu', loader: _menuTab_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu },
        { id: 'contactTab', text: 'Contact', loader: _contactTab_js__WEBPACK_IMPORTED_MODULE_2__.loadContact }
    ];

    buttons.forEach(buttonData => {
        const btn = document.createElement('button');
        btn.id = buttonData.id;
        btn.textContent = buttonData.text;
        btn.addEventListener('click', () => {
            loadTabContent(buttonData.loader);
            setActiveTab(buttonData.id);
        });
        tabsDiv.appendChild(btn);
    });
}

function loadTabContent(loadFunction) {
    // Clear existing content
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    // Load new content
    contentDiv.appendChild(loadFunction());
}

function addFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Delightful Dishes © 2023. All Rights Reserved.';
    footer.classList.add('site-footer');
    document.body.appendChild(footer);
}

function setActiveTab(tabId) {
    const tabs = ['homeTab', 'menuTab', 'contactTab'];
    tabs.forEach(tab => {
        document.getElementById(tab).classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Initialization calls
initButtons();
loadTabContent(_homeTab_js__WEBPACK_IMPORTED_MODULE_1__.loadHome); // Load the default content (home tab)
addFooter();


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

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Our Menu";
    contentDiv.appendChild(menuHeader);

    // Start of Menu Items
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items-container"); // Add a class for centering

    const appetizersDiv = document.createElement("div");
    appetizersDiv.classList.add("menu-item");
    appetizersDiv.classList.add("menu-category");
    appetizersDiv.classList.add("appetizers"); // Add class for Appetizers category
    appetizersDiv.innerHTML = `
        <h2>Appetizers</h2>
        <img src="https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Appetizers Image" class="restaurant-image">
        <ul>
            <li>Bruschetta - $7.99</li>
            <li>Spinach Artichoke Dip - $8.49</li>
            <li>Mozzarella Sticks - $6.99</li>
            <li>Garlic Bread - $5.99</li>
        </ul>
    `;
    menuItems.appendChild(appetizersDiv);

    const mainCoursesDiv = document.createElement("div");
    mainCoursesDiv.classList.add("menu-item");
    mainCoursesDiv.classList.add("menu-category");
    mainCoursesDiv.classList.add("main-courses"); // Add class for Main Courses category
    mainCoursesDiv.innerHTML = `
        <h2>Main Courses</h2>
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Appetizers Image" class="restaurant-image" alt="Main Courses Image" class="restaurant-image">
        <ul>
            <li>Grilled Salmon - $16.99</li>
            <li>Chicken Alfredo - $14.99</li>
            <li>Steak and Fries - $18.99</li>
            <li>Veggie Stir-Fry - $12.99</li>
            <li>Spaghetti Carbonara - $13.99</li>
            <li>Seafood Paella - $19.99</li>
            <li>Vegetarian Lasagna - $15.99</li>
            <li>Rack of Lamb - $22.99</li>
            <li>Pork Tenderloin - $17.99</li>
            <li>Beef Tacos - $11.99</li>
            <li>Shrimp Scampi - $19.99</li>
        </ul>
    `;
    menuItems.appendChild(mainCoursesDiv);

    const dessertsDiv = document.createElement("div");
    dessertsDiv.classList.add("menu-item");
    dessertsDiv.classList.add("menu-category");
    dessertsDiv.classList.add("desserts"); // Add class for Desserts category
    dessertsDiv.innerHTML = `
        <h2>Desserts</h2>
        <img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Desserts Image" class="restaurant-image">
        <ul>
            <li>Tiramisu - $6.99</li>
            <li>Chocolate Fondue - $8.99</li>
            <li>New York Cheesecake - $7.99</li>
            <li>Apple Pie - $5.99</li>
            <li>Crème Brûlée - $7.99</li>
        </ul>
    `;
    menuItems.appendChild(dessertsDiv);

    // End of Menu Items

    contentDiv.appendChild(menuItems);

    return contentDiv;
}

document.getElementById("content").appendChild(loadMenu());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc01BQXNNO0FBQ3RNO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ21CO0FBQ007QUFDTjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHFDQUFxQyxpREFBUSxFQUFFO0FBQ3pELFVBQVUscUNBQXFDLGlEQUFRLEVBQUU7QUFDekQsVUFBVSwyQ0FBMkMsdURBQVc7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsaURBQVEsR0FBRztBQUMxQjs7Ozs7Ozs7Ozs7Ozs7O0FDMURPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL21lbnVUYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5cbiAgICAvLyBBZGRyZXNzXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjEyMyBGb29kIFN0cmVldCwgVGFzdHkgVG93biwgMTIzNDVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgLy8gUGhvbmUgTnVtYmVyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICgxMjMpIDQ1Ni03ODkwXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICAvLyBFbWFpbFxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBpbmZvQGRlbGlnaHRmdWxkaXNoZXMuY29tXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgICAvLyBIb3VycyBvZiBPcGVyYXRpb25cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0cm9uZz5Ib3VycyBvZiBPcGVyYXRpb246PC9zdHJvbmc+PGJyPlxuICAgICAgICBNb25kYXkgLSBGcmlkYXk6IDlhbSAtIDlwbTxicj5cbiAgICAgICAgU2F0dXJkYXk6IDEwYW0gLSAxMHBtPGJyPlxuICAgICAgICBTdW5kYXk6IDExYW0gLSA4cG1cbiAgICBgO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgLy8gRW1iZWQgR29vZ2xlIE1hcHMgaWZyYW1lXG4gICAgY29uc3QgbWFwSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBtYXBJZnJhbWUuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMTU1MC40NzQ5Nzc4Mjg2OTUhMmQtNzkuNTE4MzI1MjY1OTg4NjEhM2Q0My42MzUyOTM1NzU1NzA0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODJiMzZmNTQ4NWU2OTg3JTNBMHgxNGFmYjgwZDgzZjc1ZGNhITJzT2xkJTIwTWlsbCUyMFRvcm9udG8lMjBIb3RlbCE1ZTAhM20yITFzZW4hMnNjYSE0djE2OTY2NjIxMTYxNzkhNW0yITFzZW4hMnNjYVwiO1xuICAgIG1hcElmcmFtZS53aWR0aCA9IFwiNjAwXCI7XG4gICAgbWFwSWZyYW1lLmhlaWdodCA9IFwiNDUwXCI7XG4gICAgbWFwSWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgIG1hcElmcmFtZS5hbGxvd0Z1bGxzY3JlZW4gPSBcIlwiO1xuICAgIG1hcElmcmFtZS5sb2FkaW5nID0gXCJsYXp5XCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYXBJZnJhbWUpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gSGVhZGxpbmVcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBEZWxpZ2h0ZnVsIERpc2hlc1wiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgLy8gTG9yZW0gaXBzdW1cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBzaXQgYW1ldCB1cm5hIGF0IG1hZ25hIGN1cnN1cyBtb2xsaXMuIEN1cmFiaXR1ciBzZWQgbGlndWxhIGV1aXNtb2QsIHZ1bHB1dGF0ZSBxdWFtIHF1aXMsIGZlcm1lbnR1bSByaXN1cy4gUHJvaW4gaWQgaXBzdW0gc2l0IGFtZXQgZW5pbSBncmF2aWRhIGZhY2lsaXNpcyBhYyBpbiB2ZWxpdC5cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAvLyBQbGFjZWhvbGRlciBpbWFnZVxuICAgIGNvbnN0IHBsYWNlaG9sZGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwbGFjZWhvbGRlckltYWdlLnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNDY3NDkwMDI0Ny0wODc3ZGY5Y2M4MzY/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MCZxPTgwJzsgIC8vIFlvdSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggeW91ciBvd24gcGxhY2Vob2xkZXIgVVJMXG4gICAgcGxhY2Vob2xkZXJJbWFnZS5hbHQgPSAnRGVsaWdodGZ1bCBEaXNoZXMgUGxhY2Vob2xkZXInO1xuICAgIHBsYWNlaG9sZGVySW1hZ2UuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnQtaW1hZ2UnOyAgLy8gQWRkZWQgY2xhc3MgZm9yIHN0eWxpbmcgaW4gQ1NTXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwbGFjZWhvbGRlckltYWdlKTtcblxuICAgIHJldHVybiBjb250ZW50RGl2O1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gJy4vaG9tZVRhYi5qcyc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vY29udGFjdFRhYi5qcyc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudVRhYi5qcyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBpbml0QnV0dG9ucygpIHtcbiAgICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFic0Rpdi5pZCA9ICd0YWJzJztcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQodGFic0Rpdik7XG5cbiAgICBjb25zdCBidXR0b25zID0gW1xuICAgICAgICB7IGlkOiAnaG9tZVRhYicsIHRleHQ6ICdIb21lJywgbG9hZGVyOiBsb2FkSG9tZSB9LFxuICAgICAgICB7IGlkOiAnbWVudVRhYicsIHRleHQ6ICdNZW51JywgbG9hZGVyOiBsb2FkTWVudSB9LFxuICAgICAgICB7IGlkOiAnY29udGFjdFRhYicsIHRleHQ6ICdDb250YWN0JywgbG9hZGVyOiBsb2FkQ29udGFjdCB9XG4gICAgXTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b25EYXRhID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5pZCA9IGJ1dHRvbkRhdGEuaWQ7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ1dHRvbkRhdGEudGV4dDtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9hZFRhYkNvbnRlbnQoYnV0dG9uRGF0YS5sb2FkZXIpO1xuICAgICAgICAgICAgc2V0QWN0aXZlVGFiKGJ1dHRvbkRhdGEuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFic0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFiQ29udGVudChsb2FkRnVuY3Rpb24pIHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gTG9hZCBuZXcgY29udGVudFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEZ1bmN0aW9uKCkpO1xufVxuXG5mdW5jdGlvbiBhZGRGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0RlbGlnaHRmdWwgRGlzaGVzIMKpIDIwMjMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuJztcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnc2l0ZS1mb290ZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVRhYih0YWJJZCkge1xuICAgIGNvbnN0IHRhYnMgPSBbJ2hvbWVUYWInLCAnbWVudVRhYicsICdjb250YWN0VGFiJ107XG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiSWQpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG4vLyBJbml0aWFsaXphdGlvbiBjYWxsc1xuaW5pdEJ1dHRvbnMoKTtcbmxvYWRUYWJDb250ZW50KGxvYWRIb21lKTsgLy8gTG9hZCB0aGUgZGVmYXVsdCBjb250ZW50IChob21lIHRhYilcbmFkZEZvb3RlcigpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgLy8gU3RhcnQgb2YgTWVudSBJdGVtc1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLWNvbnRhaW5lclwiKTsgLy8gQWRkIGEgY2xhc3MgZm9yIGNlbnRlcmluZ1xuXG4gICAgY29uc3QgYXBwZXRpemVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwZXRpemVyc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIGFwcGV0aXplcnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XG4gICAgYXBwZXRpemVyc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYXBwZXRpemVyc1wiKTsgLy8gQWRkIGNsYXNzIGZvciBBcHBldGl6ZXJzIGNhdGVnb3J5XG4gICAgYXBwZXRpemVyc0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5BcHBldGl6ZXJzPC9oMj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NjI0MTA3Mi00ODAxMGFkMjg2MmM/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTg3JnE9ODBcIiBhbHQ9XCJBcHBldGl6ZXJzIEltYWdlXCIgY2xhc3M9XCJyZXN0YXVyYW50LWltYWdlXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5CcnVzY2hldHRhIC0gJDcuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlNwaW5hY2ggQXJ0aWNob2tlIERpcCAtICQ4LjQ5PC9saT5cbiAgICAgICAgICAgIDxsaT5Nb3p6YXJlbGxhIFN0aWNrcyAtICQ2Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5HYXJsaWMgQnJlYWQgLSAkNS45OTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYDtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc0Rpdik7XG5cbiAgICBjb25zdCBtYWluQ291cnNlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvdXJzZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluQ291cnNlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXRlZ29yeVwiKTtcbiAgICBtYWluQ291cnNlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb3Vyc2VzXCIpOyAvLyBBZGQgY2xhc3MgZm9yIE1haW4gQ291cnNlcyBjYXRlZ29yeVxuICAgIG1haW5Db3Vyc2VzRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgyPk1haW4gQ291cnNlczwvaDI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDAxODk1NDkzMzYtZTZlOTljMzY3OWZlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIgYWx0PVwiQXBwZXRpemVycyBJbWFnZVwiIGNsYXNzPVwicmVzdGF1cmFudC1pbWFnZVwiIGFsdD1cIk1haW4gQ291cnNlcyBJbWFnZVwiIGNsYXNzPVwicmVzdGF1cmFudC1pbWFnZVwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+R3JpbGxlZCBTYWxtb24gLSAkMTYuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkNoaWNrZW4gQWxmcmVkbyAtICQxNC45OTwvbGk+XG4gICAgICAgICAgICA8bGk+U3RlYWsgYW5kIEZyaWVzIC0gJDE4Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5WZWdnaWUgU3Rpci1GcnkgLSAkMTIuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlNwYWdoZXR0aSBDYXJib25hcmEgLSAkMTMuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlNlYWZvb2QgUGFlbGxhIC0gJDE5Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5WZWdldGFyaWFuIExhc2FnbmEgLSAkMTUuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlJhY2sgb2YgTGFtYiAtICQyMi45OTwvbGk+XG4gICAgICAgICAgICA8bGk+UG9yayBUZW5kZXJsb2luIC0gJDE3Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5CZWVmIFRhY29zIC0gJDExLjk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TaHJpbXAgU2NhbXBpIC0gJDE5Ljk5PC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtYWluQ291cnNlc0Rpdik7XG5cbiAgICBjb25zdCBkZXNzZXJ0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBkZXNzZXJ0c0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXRlZ29yeVwiKTtcbiAgICBkZXNzZXJ0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydHNcIik7IC8vIEFkZCBjbGFzcyBmb3IgRGVzc2VydHMgY2F0ZWdvcnlcbiAgICBkZXNzZXJ0c0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5EZXNzZXJ0czwvaDI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODg5MDAxMjgzMjMtMjE1MDM5ODNhMDdlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk4NyZxPTgwXCIgYWx0PVwiRGVzc2VydHMgSW1hZ2VcIiBjbGFzcz1cInJlc3RhdXJhbnQtaW1hZ2VcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlRpcmFtaXN1IC0gJDYuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkNob2NvbGF0ZSBGb25kdWUgLSAkOC45OTwvbGk+XG4gICAgICAgICAgICA8bGk+TmV3IFlvcmsgQ2hlZXNlY2FrZSAtICQ3Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5BcHBsZSBQaWUgLSAkNS45OTwvbGk+XG4gICAgICAgICAgICA8bGk+Q3LDqG1lIEJyw7tsw6llIC0gJDcuOTk8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIGA7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2KTtcblxuICAgIC8vIEVuZCBvZiBNZW51IEl0ZW1zXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9