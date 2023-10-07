export function loadMenu() {
    const contentDiv = document.createElement('div');

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Our Menu";
    contentDiv.appendChild(menuHeader);

    // Start of Menu Items
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items-container"); // Add a class for centering

    const appetizersDiv = document.createElement("div");
    appetizersDiv.classList.add("menu-item");
    appetizersDiv.classList.add("menu-category");
    appetizersDiv.classList.add("appetizers"); // Add class for Appetizers category
    appetizersDiv.innerHTML = `
        <h2>Appetizers</h2>
        <ul>
            <li>Bruschetta - $7.99</li>
            <li>Spinach Artichoke Dip - $8.49</li>
            <li>Mozzarella Sticks - $6.99</li>
            <li>Garlic Bread - $5.99</li>
        </ul>
    `;
    menuItems.appendChild(appetizersDiv);

    const mainCoursesDiv = document.createElement("div");
    mainCoursesDiv.classList.add("menu-item");
    mainCoursesDiv.classList.add("menu-category");
    mainCoursesDiv.classList.add("main-courses"); // Add class for Main Courses category
    mainCoursesDiv.innerHTML = `
        <h2>Main Courses</h2>
        <ul>
            <li>Grilled Salmon - $16.99</li>
            <li>Chicken Alfredo - $14.99</li>
            <li>Steak and Fries - $18.99</li>
            <li>Veggie Stir-Fry - $12.99</li>
            <li>Spaghetti Carbonara - $13.99</li>
            <li>Seafood Paella - $19.99</li>
            <li>Vegetarian Lasagna - $15.99</li>
            <li>Rack of Lamb - $22.99</li>
            <li>Pork Tenderloin - $17.99</li>
            <li>Beef Tacos - $11.99</li>
            <li>Shrimp Scampi - $19.99</li>
        </ul>
    `;
    menuItems.appendChild(mainCoursesDiv);

    const dessertsDiv = document.createElement("div");
    dessertsDiv.classList.add("menu-item");
    dessertsDiv.classList.add("menu-category");
    dessertsDiv.classList.add("desserts"); // Add class for Desserts category
    dessertsDiv.innerHTML = `
        <h2>Desserts</h2>
        <ul>
            <li>Tiramisu - $6.99</li>
            <li>Chocolate Fondue - $8.99</li>
            <li>New York Cheesecake - $7.99</li>
            <li>Apple Pie - $5.99</li>
            <li>Crème Brûlée - $7.99</li>
        </ul>
    `;
    menuItems.appendChild(dessertsDiv);

    // End of Menu Items

    contentDiv.appendChild(menuItems);

    return contentDiv;
}
