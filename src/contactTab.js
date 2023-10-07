export function loadContact() {
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
