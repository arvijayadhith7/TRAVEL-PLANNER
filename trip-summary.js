// Trip Summary Page JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme
    initThemeToggle();

    // Get trip data from localStorage
    const tripCart = JSON.parse(localStorage.getItem('tripCart')) || getDefaultTrip();

    // Populate page with trip data
    populateTripSummary(tripCart);

    // Button handlers
    document.getElementById('changeHotel').addEventListener('click', () => {
        window.location.href = `results.html?destination=${tripCart.destination}&budget=${tripCart.budget}`;
    });

    document.getElementById('editRoute').addEventListener('click', () => {
        window.location.href = `results.html?destination=${tripCart.destination}&budget=${tripCart.budget}`;
    });

    document.getElementById('addMoreSpots').addEventListener('click', () => {
        window.location.href = `results.html?destination=${tripCart.destination}&budget=${tripCart.budget}`;
    });

    document.getElementById('proceedBtn').addEventListener('click', generateItinerary);
});

function getDefaultTrip() {
    // Get from URL params if available
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination') || 'ooty';
    const budget = urlParams.get('budget') || 'midRange';
    const days = parseInt(urlParams.get('days')) || 3;

    const destData = TamilNaduTourism.getDestination(destination);
    if (!destData) return null;

    // Get hotels based on budget
    let hotels = [];
    if (budget === 'economy') {
        hotels = destData.hotels.economy;
    } else if (budget === 'luxury') {
        hotels = destData.hotels.luxury;
    } else {
        hotels = destData.hotels.midRange;
    }

    return {
        destination: destination,
        budget: budget,
        days: days,
        hotel: hotels[0] || destData.hotels.midRange[0],
        spots: destData.attractions.slice(0, 4),
        restaurants: destData.restaurants.slice(0, 2)
    };
}

function populateTripSummary(trip) {
    if (!trip) return;

    const destData = TamilNaduTourism.getDestination(trip.destination);

    // Populate Hotel
    if (trip.hotel) {
        document.getElementById('hotelImage').src = trip.hotel.image;
        document.getElementById('hotelName').textContent = trip.hotel.name;
        document.getElementById('hotelLocation').textContent = trip.hotel.location || capitalizeFirst(trip.destination);
        document.getElementById('hotelReviews').textContent = `(${Math.floor(Math.random() * 500 + 100)} reviews)`;
        document.getElementById('tripDates').textContent = getTripDates(trip.days);
        document.getElementById('tripGuests').textContent = '2 Adults';

        // Set category badge
        const categoryMap = {
            'economy': '💰 Economy',
            'midRange': '💵 Mid-Range',
            'luxury': '💎 Luxury'
        };
        document.getElementById('hotelCategory').textContent = categoryMap[trip.budget] || '💵 Mid-Range';
        document.getElementById('hotelCategory').className = 'hotel-category ' + trip.budget;
    }

    // Populate Spots
    const spotsList = document.getElementById('spotsList');
    spotsList.innerHTML = '';

    if (trip.spots && trip.spots.length > 0) {
        trip.spots.forEach((spot, index) => {
            const transitTime = getTransitTime();

            spotsList.innerHTML += `
                <div class="spot-item">
                    <div class="spot-image">
                        <img src="${spot.image || 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100'}" alt="${spot.name}">
                    </div>
                    <div class="spot-info">
                        <h4 class="spot-name">${spot.name}</h4>
                        <p class="spot-details">${spot.type} • ${spot.duration}</p>
                    </div>
                    <span class="spot-duration">${spot.entryFee === 0 ? 'Free' : '₹' + spot.entryFee}</span>
                </div>
                ${index < trip.spots.length - 1 ? `
                    <div class="transit-info">${transitTime} transit</div>
                ` : ''}
            `;
        });
    }

    // Populate Restaurants
    const restaurantsList = document.getElementById('restaurantsList');
    restaurantsList.innerHTML = '';

    if (trip.restaurants && trip.restaurants.length > 0) {
        trip.restaurants.forEach(restaurant => {
            restaurantsList.innerHTML += `
                <div class="restaurant-item">
                    <div class="spot-image">
                        <img src="${restaurant.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100'}" alt="${restaurant.name}">
                    </div>
                    <div class="spot-info">
                        <h4 class="spot-name">${restaurant.name}</h4>
                        <p class="spot-details">${restaurant.cuisine}</p>
                    </div>
                </div>
            `;
        });
    }

    // Update budget summary
    document.getElementById('nightsCount').textContent = trip.days;
    document.getElementById('budgetCategory').textContent = getBudgetLabel(trip.budget);

    // Update AI Tip
    updateAITip(trip, destData);
}

function getTripDates(days) {
    const start = new Date();
    start.setDate(start.getDate() + 14); // Start in 2 weeks
    const end = new Date(start);
    end.setDate(end.getDate() + days);

    const options = { month: 'short', day: 'numeric' };
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)} (${days} nights)`;
}

function getTransitTime() {
    const times = ['15 min', '20 min', '25 min', '30 min', '45 min'];
    return times[Math.floor(Math.random() * times.length)];
}

function getBudgetLabel(budget) {
    const labels = {
        'economy': '💰 Economy',
        'midRange': '💵 Mid-Range',
        'luxury': '💎 Luxury'
    };
    return labels[budget] || '💵 Mid-Range';
}

function updateAITip(trip, destData) {
    const tips = [
        `Based on your selections, visiting ${trip.spots[0]?.name || 'attractions'} in the morning gives the best experience!`,
        `Pro tip: ${destData?.name || 'This destination'} is best explored early morning when it's less crowded.`,
        `🌤️ Weather forecast looks great for your trip! Pack light layers.`,
        `💡 Consider starting your day at ${trip.spots[0]?.name || 'the main attraction'} - it's usually quieter before 10 AM.`
    ];
    document.getElementById('aiTip').textContent = tips[Math.floor(Math.random() * tips.length)];
}

function generateItinerary() {
    const btn = document.getElementById('proceedBtn');

    // Show loading
    btn.innerHTML = '<span class="btn-spinner"></span> Generating AI Itinerary...';
    btn.style.pointerEvents = 'none';

    // Simulate AI generation
    setTimeout(() => {
        btn.innerHTML = '✓ Itinerary Ready!';
        btn.style.background = '#059669';

        // Redirect to itinerary page
        setTimeout(() => {
            window.location.href = 'itinerary.html';
        }, 800);
    }, 1500);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// Export function for results page to add items
window.addToTripCart = function (item, type) {
    let tripCart = JSON.parse(localStorage.getItem('tripCart')) || getDefaultTrip();

    switch (type) {
        case 'hotel':
            tripCart.hotel = item;
            break;
        case 'attraction':
            if (!tripCart.spots) tripCart.spots = [];
            if (!tripCart.spots.find(s => s.name === item.name)) {
                tripCart.spots.push(item);
            }
            break;
        case 'restaurant':
            if (!tripCart.restaurants) tripCart.restaurants = [];
            if (!tripCart.restaurants.find(r => r.name === item.name)) {
                tripCart.restaurants.push(item);
            }
            break;
    }

    localStorage.setItem('tripCart', JSON.stringify(tripCart));
    return tripCart;
};
