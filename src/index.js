import './style.css';
import { loadHome } from './homeTab.js';
import { loadContact } from './contactTab.js';
import { loadMenu } from './menuTab.js';

const contentDiv = document.getElementById('content');

// Adding the 'hello' class to contentDiv
contentDiv.classList.add('hello');

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
