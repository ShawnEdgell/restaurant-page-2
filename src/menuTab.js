export function loadMenu() {
    const contentDiv = document.createElement('div');

    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "Our Menu";
    contentDiv.appendChild(menuHeader);

    // ... other content for menu ...

    return contentDiv;
}
