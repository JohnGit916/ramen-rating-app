const ramens = [
    {
        name: 'Gyukotsu Ramen',
        restaurant: 'Ramen House',
        image: './images/gyukotsu.jpg',
        rating: 8,
        comment: 'Rich broth with tender beef.'
    },
    {
        name: 'Kojiro Ramen',
        restaurant: 'Tokyo Bites',
        image: './images/kojiro.jpg',
        rating: 9,
        comment: 'Savory and packed with flavor.'
    },
    {
        name: 'Naruto Ramen',
        restaurant: 'Ichiraku Ramen',
        image: './images/naruto.jpg',
        rating: 10,
        comment: 'The ultimate comfort food!'
    },
    {
        name: 'Nirvana Ramen',
        restaurant: 'Zen Ramen Bar',
        image: './images/nirvana.jpg',
        rating: 7,
        comment: 'Light and refreshing with a hint of spice.'
    },
    {
        name: 'Shoyu Ramen',
        restaurant: 'Shoyu Delight',
        image: './images/shoyu.jpg',
        rating: 8.5,
        comment: 'Classic soy sauce-based goodness.'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const ramenImage = document.querySelector('#ramen-detail img');
    const ramenName = document.querySelector('#ramen-detail h2');
    const ramenRestaurant = document.querySelector('#ramen-detail h3');
    const ramenRating = document.querySelector('.rating');
    const ramenComment = document.querySelector('.comment');

    // Set default ramen details
    ramenImage.src = "images/gyukotsu.jpg";
    ramenName.textContent = "Gyukotsu Ramen";
    ramenRestaurant.textContent = "Restaurant: Ichiraku";
    ramenRating.textContent = "Rating: 9/10";
    ramenComment.textContent = "Comment: Rich broth with deep umami flavor.";
});


function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    menu.innerHTML = ''; // Clear existing content

    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        menu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailImage = document.querySelector('#ramen-detail img');
    const detailName = document.querySelector('#ramen-detail h2');
    const detailRestaurant = document.querySelector('#ramen-detail h3');
    const detailRating = document.querySelector('#ramen-detail .rating');
    const detailComment = document.querySelector('#ramen-detail .comment');

    // Display image
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;

    // Display details
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailRating.textContent = `Rating: ${ramen.rating}/10`;
    detailComment.textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newRamen = {
            name: document.getElementById('name').value,
            restaurant: document.getElementById('restaurant').value,
            image: document.getElementById('image').value,
            rating: document.getElementById('rating').value,
            comment: document.getElementById('comment').value
        };

        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener('click', () => handleClick(newRamen));
        document.getElementById('ramen-menu').appendChild(img);

        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);