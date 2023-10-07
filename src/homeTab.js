export function loadHome() {
    const contentDiv = document.createElement('div');

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Delightful Dishes";
    contentDiv.appendChild(headline);

    // ... other content for home ...

    return contentDiv;
}
