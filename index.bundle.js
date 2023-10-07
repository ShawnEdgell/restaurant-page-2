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
    placeholderImage.src = 'https://via.placeholder.com/150';  // You can replace this with your own placeholder URL
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
    // Get or create the 'tabs' container for the buttons
    let tabsDiv = document.getElementById('tabs');
    if (!tabsDiv) {
        tabsDiv = document.createElement('div');
        tabsDiv.id = 'tabs';
        document.body.prepend(tabsDiv);
    }

    const homeButton = document.createElement('button');
    homeButton.id = 'homeTab';
    homeButton.textContent = 'Home';
    tabsDiv.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.id = 'menuTab';
    menuButton.textContent = 'Menu';
    tabsDiv.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.id = 'contactTab';
    contactButton.textContent = 'Contact';
    tabsDiv.appendChild(contactButton);
}

// Call the initButtons function to create and append buttons
initButtons();

// Event listeners for tab clicks
document.getElementById('homeTab').addEventListener('click', () => {
    loadTabContent(_homeTab_js__WEBPACK_IMPORTED_MODULE_1__.loadHome);
});

document.getElementById('contactTab').addEventListener('click', () => {
    loadTabContent(_contactTab_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);
});

document.getElementById('menuTab').addEventListener('click', () => {
    loadTabContent(_menuTab_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu);
});

// Load default content on page load
loadTabContent(_homeTab_js__WEBPACK_IMPORTED_MODULE_1__.loadHome);

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

// Call the function to add the footer
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ21CO0FBQ007QUFDTjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpREFBUTtBQUMzQixDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLHVEQUFXO0FBQzlCLENBQUM7O0FBRUQ7QUFDQSxtQkFBbUIsaURBQVE7QUFDM0IsQ0FBQzs7QUFFRDtBQUNBLGVBQWUsaURBQVE7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9jb250YWN0VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL2hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvbWVudVRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICAgIC8vIEFkZHJlc3NcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzIEZvb2QgU3RyZWV0LCBUYXN0eSBUb3duLCAxMjM0NVwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICAvLyBQaG9uZSBOdW1iZXJcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCJQaG9uZTogKDEyMykgNDU2LTc4OTBcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIC8vIEVtYWlsXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGluZm9AZGVsaWdodGZ1bGRpc2hlcy5jb21cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIC8vIEhvdXJzIG9mIE9wZXJhdGlvblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3Ryb25nPkhvdXJzIG9mIE9wZXJhdGlvbjo8L3N0cm9uZz48YnI+XG4gICAgICAgIE1vbmRheSAtIEZyaWRheTogOWFtIC0gOXBtPGJyPlxuICAgICAgICBTYXR1cmRheTogMTBhbSAtIDEwcG08YnI+XG4gICAgICAgIFN1bmRheTogMTFhbSAtIDhwbVxuICAgIGA7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAvLyBFbWJlZCBHb29nbGUgTWFwcyBpZnJhbWVcbiAgICBjb25zdCBtYXBJZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIG1hcElmcmFtZS5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDExNTUwLjQ3NDk3NzgyODY5NSEyZC03OS41MTgzMjUyNjU5ODg2MSEzZDQzLjYzNTI5MzU3NTU3MDQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg4MmIzNmY1NDg1ZTY5ODclM0EweDE0YWZiODBkODNmNzVkY2EhMnNPbGQlMjBNaWxsJTIwVG9yb250byUyMEhvdGVsITVlMCEzbTIhMXNlbiEyc2NhITR2MTY5NjY2MjExNjE3OSE1bTIhMXNlbiEyc2NhXCI7XG4gICAgbWFwSWZyYW1lLndpZHRoID0gXCI2MDBcIjtcbiAgICBtYXBJZnJhbWUuaGVpZ2h0ID0gXCI0NTBcIjtcbiAgICBtYXBJZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIwXCI7XG4gICAgbWFwSWZyYW1lLmFsbG93RnVsbHNjcmVlbiA9IFwiXCI7XG4gICAgbWFwSWZyYW1lLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1hcElmcmFtZSk7XG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBIZWFkbGluZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIERlbGlnaHRmdWwgRGlzaGVzXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICAvLyBMb3JlbSBpcHN1bVxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHNpdCBhbWV0IHVybmEgYXQgbWFnbmEgY3Vyc3VzIG1vbGxpcy4gQ3VyYWJpdHVyIHNlZCBsaWd1bGEgZXVpc21vZCwgdnVscHV0YXRlIHF1YW0gcXVpcywgZmVybWVudHVtIHJpc3VzLiBQcm9pbiBpZCBpcHN1bSBzaXQgYW1ldCBlbmltIGdyYXZpZGEgZmFjaWxpc2lzIGFjIGluIHZlbGl0LlwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIC8vIFBsYWNlaG9sZGVyIGltYWdlXG4gICAgY29uc3QgcGxhY2Vob2xkZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBsYWNlaG9sZGVySW1hZ2Uuc3JjID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnOyAgLy8gWW91IGNhbiByZXBsYWNlIHRoaXMgd2l0aCB5b3VyIG93biBwbGFjZWhvbGRlciBVUkxcbiAgICBwbGFjZWhvbGRlckltYWdlLmFsdCA9ICdEZWxpZ2h0ZnVsIERpc2hlcyBQbGFjZWhvbGRlcic7XG4gICAgcGxhY2Vob2xkZXJJbWFnZS5jbGFzc05hbWUgPSAncmVzdGF1cmFudC1pbWFnZSc7ICAvLyBBZGRlZCBjbGFzcyBmb3Igc3R5bGluZyBpbiBDU1NcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVySW1hZ2UpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9ob21lVGFiLmpzJztcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSAnLi9jb250YWN0VGFiLmpzJztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9tZW51VGFiLmpzJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xuICAgIC8vIEdldCBvciBjcmVhdGUgdGhlICd0YWJzJyBjb250YWluZXIgZm9yIHRoZSBidXR0b25zXG4gICAgbGV0IHRhYnNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFicycpO1xuICAgIGlmICghdGFic0Rpdikge1xuICAgICAgICB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYnNEaXYuaWQgPSAndGFicyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0YWJzRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5pZCA9ICdob21lVGFiJztcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5pZCA9ICdtZW51VGFiJztcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5pZCA9ICdjb250YWN0VGFiJztcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHRhYnNEaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59XG5cbi8vIENhbGwgdGhlIGluaXRCdXR0b25zIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIGJ1dHRvbnNcbmluaXRCdXR0b25zKCk7XG5cbi8vIEV2ZW50IGxpc3RlbmVycyBmb3IgdGFiIGNsaWNrc1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkVGFiQ29udGVudChsb2FkSG9tZSk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkVGFiQ29udGVudChsb2FkQ29udGFjdCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkVGFiQ29udGVudChsb2FkTWVudSk7XG59KTtcblxuLy8gTG9hZCBkZWZhdWx0IGNvbnRlbnQgb24gcGFnZSBsb2FkXG5sb2FkVGFiQ29udGVudChsb2FkSG9tZSk7XG5cbmZ1bmN0aW9uIGxvYWRUYWJDb250ZW50KGxvYWRGdW5jdGlvbikge1xuICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIG5ldyBjb250ZW50XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkRnVuY3Rpb24oKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnRGVsaWdodGZ1bCBEaXNoZXMgwqkgMjAyMy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4nO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdzaXRlLWZvb3RlcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gYWRkIHRoZSBmb290ZXJcbmFkZEZvb3RlcigpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgLy8gU3RhcnQgb2YgTWVudSBJdGVtc1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLWNvbnRhaW5lclwiKTsgLy8gQWRkIGEgY2xhc3MgZm9yIGNlbnRlcmluZ1xuXG4gICAgY29uc3QgYXBwZXRpemVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwZXRpemVyc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIGFwcGV0aXplcnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XG4gICAgYXBwZXRpemVyc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYXBwZXRpemVyc1wiKTsgLy8gQWRkIGNsYXNzIGZvciBBcHBldGl6ZXJzIGNhdGVnb3J5XG4gICAgYXBwZXRpemVyc0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5BcHBldGl6ZXJzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkJydXNjaGV0dGEgLSAkNy45OTwvbGk+XG4gICAgICAgICAgICA8bGk+U3BpbmFjaCBBcnRpY2hva2UgRGlwIC0gJDguNDk8L2xpPlxuICAgICAgICAgICAgPGxpPk1venphcmVsbGEgU3RpY2tzIC0gJDYuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkdhcmxpYyBCcmVhZCAtICQ1Ljk5PC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChhcHBldGl6ZXJzRGl2KTtcblxuICAgIGNvbnN0IG1haW5Db3Vyc2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ291cnNlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5Db3Vyc2VzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhdGVnb3J5XCIpO1xuICAgIG1haW5Db3Vyc2VzRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvdXJzZXNcIik7IC8vIEFkZCBjbGFzcyBmb3IgTWFpbiBDb3Vyc2VzIGNhdGVnb3J5XG4gICAgbWFpbkNvdXJzZXNEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+TWFpbiBDb3Vyc2VzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkdyaWxsZWQgU2FsbW9uIC0gJDE2Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5DaGlja2VuIEFsZnJlZG8gLSAkMTQuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlN0ZWFrIGFuZCBGcmllcyAtICQxOC45OTwvbGk+XG4gICAgICAgICAgICA8bGk+VmVnZ2llIFN0aXItRnJ5IC0gJDEyLjk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TcGFnaGV0dGkgQ2FyYm9uYXJhIC0gJDEzLjk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TZWFmb29kIFBhZWxsYSAtICQxOS45OTwvbGk+XG4gICAgICAgICAgICA8bGk+VmVnZXRhcmlhbiBMYXNhZ25hIC0gJDE1Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5SYWNrIG9mIExhbWIgLSAkMjIuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlBvcmsgVGVuZGVybG9pbiAtICQxNy45OTwvbGk+XG4gICAgICAgICAgICA8bGk+QmVlZiBUYWNvcyAtICQxMS45OTwvbGk+XG4gICAgICAgICAgICA8bGk+U2hyaW1wIFNjYW1waSAtICQxOS45OTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYDtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZXNEaXYpO1xuXG4gICAgY29uc3QgZGVzc2VydHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XG4gICAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpOyAvLyBBZGQgY2xhc3MgZm9yIERlc3NlcnRzIGNhdGVnb3J5XG4gICAgZGVzc2VydHNEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+RGVzc2VydHM8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+VGlyYW1pc3UgLSAkNi45OTwvbGk+XG4gICAgICAgICAgICA8bGk+Q2hvY29sYXRlIEZvbmR1ZSAtICQ4Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5OZXcgWW9yayBDaGVlc2VjYWtlIC0gJDcuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkFwcGxlIFBpZSAtICQ1Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5DcsOobWUgQnLDu2zDqWUgLSAkNy45OTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYDtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZGVzc2VydHNEaXYpO1xuXG4gICAgLy8gRW5kIG9mIE1lbnUgSXRlbXNcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIHJldHVybiBjb250ZW50RGl2O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9