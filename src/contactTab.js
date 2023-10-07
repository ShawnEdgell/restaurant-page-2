export function loadContact() {
    const contentDiv = document.createElement('div');

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us";
    contentDiv.appendChild(contactHeader);

    // ... other content for contact ...

    return contentDiv;
}
