export function loadHome() {
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
