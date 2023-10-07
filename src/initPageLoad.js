export function initPageLoad() {
    const contentDiv = document.getElementById("content");

    // Image
    const restaurantImage = new Image(400, 300);
    restaurantImage.src = "path_to_your_image_here.jpg";
    restaurantImage.alt = "Delightful Dishes Restaurant Image";
    contentDiv.appendChild(restaurantImage);

    // Headline
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Delightful Dishes";
    contentDiv.appendChild(headline);

    // Copy
    const paragraph = document.createElement("p");
    paragraph.textContent = "Experience a culinary journey like no other. At Delightful Dishes, we offer not just meals, but memories. Each plate is a symphony of flavors, lovingly crafted to tantalize your taste buds. Join us for an unforgettable dining experience.";
    contentDiv.appendChild(paragraph);
}