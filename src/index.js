import './style.css';
import { loadHome } from './homeTab.js';
import { loadContact } from './contactTab.js';
import { loadMenu } from './menuTab.js';

const contentDiv = document.getElementById('content');

function initButtons() {
    const tabsDiv = document.createElement('div');
    tabsDiv.id = 'tabs';
    document.body.prepend(tabsDiv);

    const buttons = [
        { id: 'homeTab', text: 'Home', loader: loadHome },
        { id: 'menuTab', text: 'Menu', loader: loadMenu },
        { id: 'contactTab', text: 'Contact', loader: loadContact }
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
loadTabContent(loadHome); // Load the default content (home tab)
