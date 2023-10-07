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

      // Add the "active" class to the "Home" tab button
      if (buttonData.id === 'homeTab') {
          btn.classList.add('active');
      }

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

    // Add the footer to the contentDiv
    contentDiv.appendChild(createFooter());
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Delightful Dishes © 2023. All Rights Reserved.';
    footer.classList.add('site-footer');
    return footer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CcUI7QUFDbUI7QUFDTTtBQUNOOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUNBQXFDLGlEQUFRLEVBQUU7QUFDdkQsUUFBUSxxQ0FBcUMsaURBQVEsRUFBRTtBQUN2RCxRQUFRLDJDQUEyQyx1REFBVztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxpREFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNsRW5CO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLTIvLi9zcmMvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtMi8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0yLy4vc3JjL21lbnVUYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5cbiAgICAvLyBBZGRyZXNzXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjEyMyBGb29kIFN0cmVldCwgVGFzdHkgVG93biwgMTIzNDVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgLy8gUGhvbmUgTnVtYmVyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICgxMjMpIDQ1Ni03ODkwXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICAvLyBFbWFpbFxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBpbmZvQGRlbGlnaHRmdWxkaXNoZXMuY29tXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgICAvLyBIb3VycyBvZiBPcGVyYXRpb25cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9IGBcbiAgICA8c3Ryb25nPkhvdXJzIG9mIE9wZXJhdGlvbjo8L3N0cm9uZz48YnI+XG4gICAgTW9uZGF5IC0gRnJpZGF5OiA5YW0gLSA5cG08YnI+XG4gICAgU2F0dXJkYXk6IDEwYW0gLSAxMHBtPGJyPlxuICAgIFN1bmRheTogMTFhbSAtIDhwbVxuICAgIGA7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcIm10LTIwXCIpOyAvLyBBcHBseSB0aGUgbWFyZ2luLXRvcCB1dGlsaXR5IGNsYXNzIHRvIHRoZSBob3VycyBwYXJhZ3JhcGhcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIC8vIEVtYmVkIEdvb2dsZSBNYXBzIGlmcmFtZVxuICAgIGNvbnN0IG1hcElmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgbWFwSWZyYW1lLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTE1NTAuNDc0OTc3ODI4Njk1ITJkLTc5LjUxODMyNTI2NTk4ODYxITNkNDMuNjM1MjkzNTc1NTcwNCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODgyYjM2ZjU0ODVlNjk4NyUzQTB4MTRhZmI4MGQ4M2Y3NWRjYSEyc09sZCUyME1pbGwlMjBUb3JvbnRvJTIwSG90ZWwhNWUwITNtMiExc2VuITJzY2EhNHYxNjk2NjYyMTE2MTc5ITVtMiExc2VuITJzY2FcIjtcbiAgICBtYXBJZnJhbWUud2lkdGggPSBcIjYwMFwiO1xuICAgIG1hcElmcmFtZS5oZWlnaHQgPSBcIjQ1MFwiO1xuICAgIG1hcElmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICBtYXBJZnJhbWUuYWxsb3dGdWxsc2NyZWVuID0gXCJcIjtcbiAgICBtYXBJZnJhbWUubG9hZGluZyA9IFwibGF6eVwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFwSWZyYW1lKTtcblxuICAgIHJldHVybiBjb250ZW50RGl2O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VcIik7XG5cbiAgICAvLyBIZWFkbGluZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIERlbGlnaHRmdWwgRGlzaGVzXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICAvLyBMb3JlbSBpcHN1bVxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHNpdCBhbWV0IHVybmEgYXQgbWFnbmEgY3Vyc3VzIG1vbGxpcy4gQ3VyYWJpdHVyIHNlZCBsaWd1bGEgZXVpc21vZCwgdnVscHV0YXRlIHF1YW0gcXVpcywgZmVybWVudHVtIHJpc3VzLiBQcm9pbiBpZCBpcHN1bSBzaXQgYW1ldCBlbmltIGdyYXZpZGEgZmFjaWxpc2lzIGFjIGluIHZlbGl0LlwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIC8vIEltYWdlc1xuICAgIGNvbnN0IGltYWdlVXJscyA9IFtcbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE1OTQyNDAwNDIwLTJiOThmZWQxZjUxNT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05ODcmcT04MCcsXG4gICAgICAgICdodHRwczovL3lvdXItaW1hZ2UtdXJsLWhlcmUuY29tL2ltYWdlMi5qcGcnLCAvLyBSZXBsYWNlIHdpdGggeW91ciBzZWNvbmQgaW1hZ2UgVVJMXG4gICAgICAgICdodHRwczovL3lvdXItaW1hZ2UtdXJsLWhlcmUuY29tL2ltYWdlMy5qcGcnLCAvLyBSZXBsYWNlIHdpdGggeW91ciB0aGlyZCBpbWFnZSBVUkxcbiAgICAgICAgLy8gLi4uIEFkZCBtb3JlIFVSTHMgYXMgbmVlZGVkXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgaW1hZ2VVcmwgb2YgaW1hZ2VVcmxzKSB7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgIGltZy5hbHQgPSAnRGVsaWdodGZ1bCBEaXNoZXMgSW1hZ2UnOyAgLy8gWW91IGNhbiBtb2RpZnkgdGhpcyBpZiBuZWVkZWQgZm9yIGVhY2ggaW1hZ2VcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50LWltYWdlJzsgICAvLyBDbGFzcyBmb3Igc3R5bGluZ1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9ob21lVGFiLmpzJztcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSAnLi9jb250YWN0VGFiLmpzJztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9tZW51VGFiLmpzJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xuICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYnNEaXYuaWQgPSAndGFicyc7XG4gIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0YWJzRGl2KTtcblxuICBjb25zdCBidXR0b25zID0gW1xuICAgICAgeyBpZDogJ2hvbWVUYWInLCB0ZXh0OiAnSG9tZScsIGxvYWRlcjogbG9hZEhvbWUgfSxcbiAgICAgIHsgaWQ6ICdtZW51VGFiJywgdGV4dDogJ01lbnUnLCBsb2FkZXI6IGxvYWRNZW51IH0sXG4gICAgICB7IGlkOiAnY29udGFjdFRhYicsIHRleHQ6ICdDb250YWN0JywgbG9hZGVyOiBsb2FkQ29udGFjdCB9XG4gIF07XG5cbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbkRhdGEgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG4uaWQgPSBidXR0b25EYXRhLmlkO1xuICAgICAgYnRuLnRleHRDb250ZW50ID0gYnV0dG9uRGF0YS50ZXh0O1xuXG4gICAgICAvLyBBZGQgdGhlIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIFwiSG9tZVwiIHRhYiBidXR0b25cbiAgICAgIGlmIChidXR0b25EYXRhLmlkID09PSAnaG9tZVRhYicpIHtcbiAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBsb2FkVGFiQ29udGVudChidXR0b25EYXRhLmxvYWRlcik7XG4gICAgICAgICAgc2V0QWN0aXZlVGFiKGJ1dHRvbkRhdGEuaWQpO1xuICAgICAgfSk7XG4gICAgICB0YWJzRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFiQ29udGVudChsb2FkRnVuY3Rpb24pIHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gTG9hZCBuZXcgY29udGVudFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZEZ1bmN0aW9uKCkpO1xuXG4gICAgLy8gQWRkIHRoZSBmb290ZXIgdG8gdGhlIGNvbnRlbnREaXZcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdEZWxpZ2h0ZnVsIERpc2hlcyDCqSAyMDIzLiBBbGwgUmlnaHRzIFJlc2VydmVkLic7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3NpdGUtZm9vdGVyJyk7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlVGFiKHRhYklkKSB7XG4gICAgY29uc3QgdGFicyA9IFsnaG9tZVRhYicsICdtZW51VGFiJywgJ2NvbnRhY3RUYWInXTtcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJJZCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbi8vIEluaXRpYWxpemF0aW9uIGNhbGxzXG5pbml0QnV0dG9ucygpO1xubG9hZFRhYkNvbnRlbnQobG9hZEhvbWUpOyAvLyBMb2FkIHRoZSBkZWZhdWx0IGNvbnRlbnQgKGhvbWUgdGFiKVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgLy8gU3RhcnQgb2YgTWVudSBJdGVtc1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLWNvbnRhaW5lclwiKTsgLy8gQWRkIGEgY2xhc3MgZm9yIGNlbnRlcmluZ1xuXG4gICAgY29uc3QgYXBwZXRpemVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwZXRpemVyc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIGFwcGV0aXplcnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XG4gICAgYXBwZXRpemVyc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYXBwZXRpemVyc1wiKTsgLy8gQWRkIGNsYXNzIGZvciBBcHBldGl6ZXJzIGNhdGVnb3J5XG4gICAgYXBwZXRpemVyc0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5BcHBldGl6ZXJzPC9oMj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NjI0MTA3Mi00ODAxMGFkMjg2MmM/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTg3JnE9ODBcIiBhbHQ9XCJBcHBldGl6ZXJzIEltYWdlXCIgY2xhc3M9XCJyZXN0YXVyYW50LWltYWdlXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5CcnVzY2hldHRhIC0gJDcuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlNwaW5hY2ggQXJ0aWNob2tlIERpcCAtICQ4LjQ5PC9saT5cbiAgICAgICAgICAgIDxsaT5Nb3p6YXJlbGxhIFN0aWNrcyAtICQ2Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5HYXJsaWMgQnJlYWQgLSAkNS45OTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYDtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc0Rpdik7XG5cbiAgICBjb25zdCBtYWluQ291cnNlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvdXJzZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluQ291cnNlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXRlZ29yeVwiKTtcbiAgICBtYWluQ291cnNlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb3Vyc2VzXCIpOyAvLyBBZGQgY2xhc3MgZm9yIE1haW4gQ291cnNlcyBjYXRlZ29yeVxuICAgIG1haW5Db3Vyc2VzRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgyPk1haW4gQ291cnNlczwvaDI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDAxODk1NDkzMzYtZTZlOTljMzY3OWZlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIgYWx0PVwiQXBwZXRpemVycyBJbWFnZVwiIGNsYXNzPVwicmVzdGF1cmFudC1pbWFnZVwiIGFsdD1cIk1haW4gQ291cnNlcyBJbWFnZVwiIGNsYXNzPVwicmVzdGF1cmFudC1pbWFnZVwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+R3JpbGxlZCBTYWxtb24gLSAkMTYuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkNoaWNrZW4gQWxmcmVkbyAtICQxNC45OTwvbGk+XG4gICAgICAgICAgICA8bGk+U3RlYWsgYW5kIEZyaWVzIC0gJDE4Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5WZWdnaWUgU3Rpci1GcnkgLSAkMTIuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlNwYWdoZXR0aSBDYXJib25hcmEgLSAkMTMuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlNlYWZvb2QgUGFlbGxhIC0gJDE5Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5WZWdldGFyaWFuIExhc2FnbmEgLSAkMTUuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPlJhY2sgb2YgTGFtYiAtICQyMi45OTwvbGk+XG4gICAgICAgICAgICA8bGk+UG9yayBUZW5kZXJsb2luIC0gJDE3Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5CZWVmIFRhY29zIC0gJDExLjk5PC9saT5cbiAgICAgICAgICAgIDxsaT5TaHJpbXAgU2NhbXBpIC0gJDE5Ljk5PC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtYWluQ291cnNlc0Rpdik7XG5cbiAgICBjb25zdCBkZXNzZXJ0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBkZXNzZXJ0c0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXRlZ29yeVwiKTtcbiAgICBkZXNzZXJ0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydHNcIik7IC8vIEFkZCBjbGFzcyBmb3IgRGVzc2VydHMgY2F0ZWdvcnlcbiAgICBkZXNzZXJ0c0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5EZXNzZXJ0czwvaDI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODg5MDAxMjgzMjMtMjE1MDM5ODNhMDdlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk4NyZxPTgwXCIgYWx0PVwiRGVzc2VydHMgSW1hZ2VcIiBjbGFzcz1cInJlc3RhdXJhbnQtaW1hZ2VcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlRpcmFtaXN1IC0gJDYuOTk8L2xpPlxuICAgICAgICAgICAgPGxpPkNob2NvbGF0ZSBGb25kdWUgLSAkOC45OTwvbGk+XG4gICAgICAgICAgICA8bGk+TmV3IFlvcmsgQ2hlZXNlY2FrZSAtICQ3Ljk5PC9saT5cbiAgICAgICAgICAgIDxsaT5BcHBsZSBQaWUgLSAkNS45OTwvbGk+XG4gICAgICAgICAgICA8bGk+Q3LDqG1lIEJyw7tsw6llIC0gJDcuOTk8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIGA7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2KTtcblxuICAgIC8vIEVuZCBvZiBNZW51IEl0ZW1zXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9