// Array of ramen objects, each containing details like name, restaurant, image, rating, and comment
const ramens = [
    { name: 'Gyukotsu Ramen', restaurant: 'Ramen House', image: './images/gyukotsu.jpg', rating: 8, comment: 'Rich broth with tender beef.' },
    { name: 'Kojiro Ramen', restaurant: 'Tokyo Bites', image: './images/kojiro.jpg', rating: 9, comment: 'Savory and packed with flavor.' },
    { name: 'Naruto Ramen', restaurant: 'Ichiraku Ramen', image: './images/naruto.jpg', rating: 10, comment: 'The ultimate comfort food!' },
    { name: 'Nirvana Ramen', restaurant: 'Zen Ramen Bar', image: './images/nirvana.jpg', rating: 7, comment: 'Light and refreshing with a hint of spice.' },
    { name: 'Shoyu Ramen', restaurant: 'Shoyu Delight', image: './images/shoyu.jpg', rating: 8.5, comment: 'Classic soy sauce-based goodness.' }
];

// Set default ramen details on page load
window.addEventListener('DOMContentLoaded', () => {
    const ramenImage = document.querySelector('#ramen-detail img');
    const ramenName = document.querySelector('#ramen-detail h2');
    const ramenRestaurant = document.querySelector('#ramen-detail h3');
    const ramenRating = document.querySelector('.rating');
    const ramenComment = document.querySelector('.comment');

    // Display default ramen details
    ramenImage.src = "images/gyukotsu.jpg"; 
    ramenName.textContent = "Gyukotsu Ramen";
    ramenRestaurant.textContent = "Restaurant: Ichiraku";
    ramenRating.textContent = "Rating: 9/10";
    ramenComment.textContent = "Comment: Rich broth with deep umami flavor.";
});

// Function to display all ramen images in the menu section
function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    menu.innerHTML = ''; // Clear existing content to avoid duplicates

    // Loop through each ramen object and create an image element
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;

        // Add click event to display ramen details when clicked
        img.addEventListener('click', () => handleClick(ramen));
        menu.appendChild(img);
    });
}

// Function to display details of the selected ramen
function handleClick(ramen) {
    const detailImage = document.querySelector('#ramen-detail img');
    const detailName = document.querySelector('#ramen-detail h2');
    const detailRestaurant = document.querySelector('#ramen-detail h3');
    const detailRating = document.querySelector('#ramen-detail .rating');
    const detailComment = document.querySelector('#ramen-detail .comment');

    // Update the ramen detail section with the selected ramen's details
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailRating.textContent = `Rating: ${ramen.rating}/10`;
    detailComment.textContent = `Comment: ${ramen.comment}`;
}

// Function to add a new ramen entry through the submission form
function addCreateListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('create', (e) => {
        e.preventDefault(); // Prevent page refresh

        // Create a new ramen object using form inputs
        const newRamen = {
            name: document.getElementById('name').value,
            restaurant: document.getElementById('restaurant').value,
            image: document.getElementById('image').value,
            rating: document.getElementById('rating').value,
            comment: document.getElementById('comment').value
        };

        // Create a new image for the newly added ramen in the menu
        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener('click', () => handleClick(newRamen));
        document.getElementById('ramen-menu').appendChild(img);

        // Reset the form fields for a clean entry
        form.reset();
    });
}

// Main function to initialize the app by displaying existing ramens and adding create functionality
function main() {
    displayRamens();
    addCreateListener();
}

// Ensure main() runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);
