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
    placeholderImage.src = 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';  // You can replace this with your own placeholder URL
    placeholderImage.alt = 'Delightful Dishes Placeholder';
    placeholderImage.className = 'restaurant-image';  // Added class for styling in CSS
    contentDiv.appendChild(placeholderImage);

    return contentDiv;
}
