import './style.css';
import { loadHome } from './homeTab.js';
import { loadContact } from './contactTab.js';
import { loadMenu } from './menuTab.js';

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
    loadTabContent(loadHome);
});

document.getElementById('contactTab').addEventListener('click', () => {
    loadTabContent(loadContact);
});

document.getElementById('menuTab').addEventListener('click', () => {
    loadTabContent(loadMenu);
});

// Load default content on page load
loadTabContent(loadHome);

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
