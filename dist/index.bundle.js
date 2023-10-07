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
    hours.classList.add("mt-20"); // Apply the margin-top utility class to the hours paragraph
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
    contentDiv.classList.add("home-page");

    // Headline
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Delightful Dishes";
    contentDiv.appendChild(headline);

    // Lorem ipsum
    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna at magna cursus mollis. Curabitur sed ligula euismod, vulputate quam quis, fermentum risus. Proin id ipsum sit amet enim gravida facilisis ac in velit.";
    contentDiv.appendChild(paragraph);

    // Images
    const imageUrls = [
        'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        'https://your-image-url-here.com/image2.jpg', // Replace with your second image URL
        'https://your-image-url-here.com/image3.jpg', // Replace with your third image URL
        // ... Add more URLs as needed
    ];

    for (const imageUrl of imageUrls) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Delightful Dishes Image';  // You can modify this if needed for each image
        img.className = 'restaurant-image';   // Class for styling
        contentDiv.appendChild(img);
    }

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

// Detect when the user has scrolled to the bottom of the page
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // When scrolled to the bottom, reveal the footer
      console.log("Scrolled to the bottom");
      document.querySelector('.site-footer').style.opacity = '1';
  } else {
      // When not at the bottom, hide the footer
      document.querySelector('.site-footer').style.opacity = '0';
  }
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CcUI7QUFDbUI7QUFDTTtBQUNOOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUscUNBQXFDLGlEQUFRLEVBQUU7QUFDekQsVUFBVSxxQ0FBcUMsaURBQVEsRUFBRTtBQUN6RCxVQUFVLDJDQUEyQyx1REFBVztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxpREFBUSxHQUFHO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0RU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9jb250YWN0VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL2hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvbWVudVRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICAgIC8vIEFkZHJlc3NcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzIEZvb2QgU3RyZWV0LCBUYXN0eSBUb3duLCAxMjM0NVwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICAvLyBQaG9uZSBOdW1iZXJcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCJQaG9uZTogKDEyMykgNDU2LTc4OTBcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIC8vIEVtYWlsXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGluZm9AZGVsaWdodGZ1bGRpc2hlcy5jb21cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIC8vIEhvdXJzIG9mIE9wZXJhdGlvblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gYFxuICAgIDxzdHJvbmc+SG91cnMgb2YgT3BlcmF0aW9uOjwvc3Ryb25nPjxicj5cbiAgICBNb25kYXkgLSBGcmlkYXk6IDlhbSAtIDlwbTxicj5cbiAgICBTYXR1cmRheTogMTBhbSAtIDEwcG08YnI+XG4gICAgU3VuZGF5OiAxMWFtIC0gOHBtXG4gICAgYDtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwibXQtMjBcIik7IC8vIEFwcGx5IHRoZSBtYXJnaW4tdG9wIHV0aWxpdHkgY2xhc3MgdG8gdGhlIGhvdXJzIHBhcmFncmFwaFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgLy8gRW1iZWQgR29vZ2xlIE1hcHMgaWZyYW1lXG4gICAgY29uc3QgbWFwSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBtYXBJZnJhbWUuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMTU1MC40NzQ5Nzc4Mjg2OTUhMmQtNzkuNTE4MzI1MjY1OTg4NjEhM2Q0My42MzUyOTM1NzU1NzA0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODJiMzZmNTQ4NWU2OTg3JTNBMHgxNGFmYjgwZDgzZjc1ZGNhITJzT2xkJTIwTWlsbCUyMFRvcm9udG8lMjBIb3RlbCE1ZTAhM20yITFzZW4hMnNjYSE0djE2OTY2NjIxMTYxNzkhNW0yITFzZW4hMnNjYVwiO1xuICAgIG1hcElmcmFtZS53aWR0aCA9IFwiNjAwXCI7XG4gICAgbWFwSWZyYW1lLmhlaWdodCA9IFwiNDUwXCI7XG4gICAgbWFwSWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgIG1hcElmcmFtZS5hbGxvd0Z1bGxzY3JlZW4gPSBcIlwiO1xuICAgIG1hcElmcmFtZS5sb2FkaW5nID0gXCJsYXp5XCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYXBJZnJhbWUpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiKTtcblxuICAgIC8vIEhlYWRsaW5lXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gRGVsaWdodGZ1bCBEaXNoZXNcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgIC8vIExvcmVtIGlwc3VtXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgc2l0IGFtZXQgdXJuYSBhdCBtYWduYSBjdXJzdXMgbW9sbGlzLiBDdXJhYml0dXIgc2VkIGxpZ3VsYSBldWlzbW9kLCB2dWxwdXRhdGUgcXVhbSBxdWlzLCBmZXJtZW50dW0gcmlzdXMuIFByb2luIGlkIGlwc3VtIHNpdCBhbWV0IGVuaW0gZ3JhdmlkYSBmYWNpbGlzaXMgYWMgaW4gdmVsaXQuXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgLy8gSW1hZ2VzXG4gICAgY29uc3QgaW1hZ2VVcmxzID0gW1xuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTU5NDI0MDA0MjAtMmI5OGZlZDFmNTE1P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk4NyZxPTgwJyxcbiAgICAgICAgJ2h0dHBzOi8veW91ci1pbWFnZS11cmwtaGVyZS5jb20vaW1hZ2UyLmpwZycsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHNlY29uZCBpbWFnZSBVUkxcbiAgICAgICAgJ2h0dHBzOi8veW91ci1pbWFnZS11cmwtaGVyZS5jb20vaW1hZ2UzLmpwZycsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHRoaXJkIGltYWdlIFVSTFxuICAgICAgICAvLyAuLi4gQWRkIG1vcmUgVVJMcyBhcyBuZWVkZWRcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBpbWFnZVVybCBvZiBpbWFnZVVybHMpIHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgaW1nLmFsdCA9ICdEZWxpZ2h0ZnVsIERpc2hlcyBJbWFnZSc7ICAvLyBZb3UgY2FuIG1vZGlmeSB0aGlzIGlmIG5lZWRlZCBmb3IgZWFjaCBpbWFnZVxuICAgICAgICBpbWcuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnQtaW1hZ2UnOyAgIC8vIENsYXNzIGZvciBzdHlsaW5nXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tICcuL2hvbWVUYWIuanMnO1xuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3RUYWIuanMnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL21lbnVUYWIuanMnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gaW5pdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYnNEaXYuaWQgPSAndGFicyc7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRhYnNEaXYpO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICAgICAgeyBpZDogJ2hvbWVUYWInLCB0ZXh0OiAnSG9tZScsIGxvYWRlcjogbG9hZEhvbWUgfSxcbiAgICAgICAgeyBpZDogJ21lbnVUYWInLCB0ZXh0OiAnTWVudScsIGxvYWRlcjogbG9hZE1lbnUgfSxcbiAgICAgICAgeyBpZDogJ2NvbnRhY3RUYWInLCB0ZXh0OiAnQ29udGFjdCcsIGxvYWRlcjogbG9hZENvbnRhY3QgfVxuICAgIF07XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uaWQgPSBidXR0b25EYXRhLmlkO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBidXR0b25EYXRhLnRleHQ7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxvYWRUYWJDb250ZW50KGJ1dHRvbkRhdGEubG9hZGVyKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYihidXR0b25EYXRhLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhYkNvbnRlbnQobG9hZEZ1bmN0aW9uKSB7XG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIExvYWQgbmV3IGNvbnRlbnRcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRGdW5jdGlvbigpKTtcbn1cblxuZnVuY3Rpb24gYWRkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdEZWxpZ2h0ZnVsIERpc2hlcyDCqSAyMDIzLiBBbGwgUmlnaHRzIFJlc2VydmVkLic7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3NpdGUtZm9vdGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIodGFiSWQpIHtcbiAgICBjb25zdCB0YWJzID0gWydob21lVGFiJywgJ21lbnVUYWInLCAnY29udGFjdFRhYiddO1xuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYklkKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuLy8gSW5pdGlhbGl6YXRpb24gY2FsbHNcbmluaXRCdXR0b25zKCk7XG5sb2FkVGFiQ29udGVudChsb2FkSG9tZSk7IC8vIExvYWQgdGhlIGRlZmF1bHQgY29udGVudCAoaG9tZSB0YWIpXG5hZGRGb290ZXIoKTtcblxuLy8gRGV0ZWN0IHdoZW4gdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAvLyBXaGVuIHNjcm9sbGVkIHRvIHRoZSBib3R0b20sIHJldmVhbCB0aGUgZm9vdGVyXG4gICAgICBjb25zb2xlLmxvZyhcIlNjcm9sbGVkIHRvIHRoZSBib3R0b21cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1mb290ZXInKS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB9IGVsc2Uge1xuICAgICAgLy8gV2hlbiBub3QgYXQgdGhlIGJvdHRvbSwgaGlkZSB0aGUgZm9vdGVyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1mb290ZXInKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG59KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcblxuICAgIC8vIFN0YXJ0IG9mIE1lbnUgSXRlbXNcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtcy1jb250YWluZXJcIik7IC8vIEFkZCBhIGNsYXNzIGZvciBjZW50ZXJpbmdcblxuICAgIGNvbnN0IGFwcGV0aXplcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcGV0aXplcnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBhcHBldGl6ZXJzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhdGVnb3J5XCIpO1xuICAgIGFwcGV0aXplcnNEaXYuY2xhc3NMaXN0LmFkZChcImFwcGV0aXplcnNcIik7IC8vIEFkZCBjbGFzcyBmb3IgQXBwZXRpemVycyBjYXRlZ29yeVxuICAgIGFwcGV0aXplcnNEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+QXBwZXRpemVyczwvaDI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDYyNDEwNzItNDgwMTBhZDI4NjJjP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk4NyZxPTgwXCIgYWx0PVwiQXBwZXRpemVycyBJbWFnZVwiIGNsYXNzPVwicmVzdGF1cmFudC1pbWFnZVwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+QnJ1c2NoZXR0YSAtICQ3Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TcGluYWNoIEFydGljaG9rZSBEaXAgLSAkOC40OTwvbGk+XG4gICAgICAgICAgICA8bGk+TW96emFyZWxsYSBTdGlja3MgLSAkNi45OTwvbGk+XG4gICAgICAgICAgICA8bGk+R2FybGljIEJyZWFkIC0gJDUuOTk8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIGA7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGFwcGV0aXplcnNEaXYpO1xuXG4gICAgY29uc3QgbWFpbkNvdXJzZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db3Vyc2VzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkNvdXJzZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XG4gICAgbWFpbkNvdXJzZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tY291cnNlc1wiKTsgLy8gQWRkIGNsYXNzIGZvciBNYWluIENvdXJzZXMgY2F0ZWdvcnlcbiAgICBtYWluQ291cnNlc0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5NYWluIENvdXJzZXM8L2gyPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQwMTg5NTQ5MzM2LWU2ZTk5YzM2NzlmZT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MFwiIGFsdD1cIkFwcGV0aXplcnMgSW1hZ2VcIiBjbGFzcz1cInJlc3RhdXJhbnQtaW1hZ2VcIiBhbHQ9XCJNYWluIENvdXJzZXMgSW1hZ2VcIiBjbGFzcz1cInJlc3RhdXJhbnQtaW1hZ2VcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkdyaWxsZWQgU2FsbW9uIC0gJDE2Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5DaGlja2VuIEFsZnJlZG8gLSAkMTQuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlN0ZWFrIGFuZCBGcmllcyAtICQxOC45OTwvbGk+XG4gICAgICAgICAgICA8bGk+VmVnZ2llIFN0aXItRnJ5IC0gJDEyLjk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TcGFnaGV0dGkgQ2FyYm9uYXJhIC0gJDEzLjk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TZWFmb29kIFBhZWxsYSAtICQxOS45OTwvbGk+XG4gICAgICAgICAgICA8bGk+VmVnZXRhcmlhbiBMYXNhZ25hIC0gJDE1Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5SYWNrIG9mIExhbWIgLSAkMjIuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlBvcmsgVGVuZGVybG9pbiAtICQxNy45OTwvbGk+XG4gICAgICAgICAgICA8bGk+QmVlZiBUYWNvcyAtICQxMS45OTwvbGk+XG4gICAgICAgICAgICA8bGk+U2hyaW1wIFNjYW1waSAtICQxOS45OTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYDtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZXNEaXYpO1xuXG4gICAgY29uc3QgZGVzc2VydHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XG4gICAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpOyAvLyBBZGQgY2xhc3MgZm9yIERlc3NlcnRzIGNhdGVnb3J5XG4gICAgZGVzc2VydHNEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+RGVzc2VydHM8L2gyPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg4OTAwMTI4MzIzLTIxNTAzOTgzYTA3ZT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05ODcmcT04MFwiIGFsdD1cIkRlc3NlcnRzIEltYWdlXCIgY2xhc3M9XCJyZXN0YXVyYW50LWltYWdlXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5UaXJhbWlzdSAtICQ2Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5DaG9jb2xhdGUgRm9uZHVlIC0gJDguOTk8L2xpPlxuICAgICAgICAgICAgPGxpPk5ldyBZb3JrIENoZWVzZWNha2UgLSAkNy45OTwvbGk+XG4gICAgICAgICAgICA8bGk+QXBwbGUgUGllIC0gJDUuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkNyw6htZSBCcsO7bMOpZSAtICQ3Ljk5PC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChkZXNzZXJ0c0Rpdik7XG5cbiAgICAvLyBFbmQgb2YgTWVudSBJdGVtc1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==