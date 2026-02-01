// AI Itinerary Generator - JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme
    initThemeToggle();

    // Get trip data from localStorage
    const tripCart = JSON.parse(localStorage.getItem('tripCart'));

    if (!tripCart || !tripCart.destination) {
        alert('No trip data found. Redirecting to home...');
        window.location.href = 'index.html';
        return;
    }

    // Generate AI itinerary
    const itinerary = generateAIItinerary(tripCart);

    // Populate the page
    populateItinerary(itinerary, tripCart);

    // Event listeners
    document.getElementById('prevDay').addEventListener('click', () => changeDay(-1));
    document.getElementById('nextDay').addEventListener('click', () => changeDay(1));
    document.getElementById('shareBtn').addEventListener('click', shareItinerary);
    document.getElementById('printBtn').addEventListener('click', () => window.print());
    document.getElementById('editTripBtn').addEventListener('click', () => {
        window.location.href = `trip-summary.html`;
    });
    document.getElementById('saveItineraryBtn').addEventListener('click', saveItinerary);

    // Mobile actions
    document.querySelectorAll('.bottom-action').forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.classList.contains('share')) shareItinerary();
            if (this.classList.contains('save')) saveItinerary();
            if (this.classList.contains('edit')) window.location.href = 'trip-summary.html';
        });
    });
});

let currentDay = 1;
let totalDays = 3;

function generateAIItinerary(tripCart) {
    const destination = TamilNaduTourism.getDestination(tripCart.destination);
    if (!destination) return null;

    totalDays = tripCart.days || 3;
    const spots = tripCart.spots || destination.attractions.slice(0, 6);
    const restaurants = tripCart.restaurants || destination.restaurants.slice(0, 3);
    const hotel = tripCart.hotel || destination.hotels.midRange[0];

    // Generate day-by-day itinerary
    const dailyPlans = [];

    for (let day = 1; day <= totalDays; day++) {
        const dayPlan = {
            day: day,
            date: getDateForDay(day),
            weather: getWeatherForDay(day),
            activities: []
        };

        // Morning activity
        const morningSpot = spots[(day - 1) * 2] || spots[0];
        if (morningSpot) {
            dayPlan.activities.push({
                time: '8:00 AM',
                type: 'activity',
                name: morningSpot.name,
                description: `Start your day at this beautiful ${morningSpot.type}. Best visited in the morning when it's less crowded.`,
                duration: morningSpot.duration || '2-3 hours',
                image: morningSpot.image,
                rating: morningSpot.rating
            });
        }

        // Lunch
        const lunchPlace = restaurants[(day - 1) % restaurants.length];
        if (lunchPlace) {
            dayPlan.activities.push({
                time: '12:30 PM',
                type: 'meal',
                name: lunchPlace.name,
                description: `Enjoy authentic ${lunchPlace.cuisine} cuisine. ${lunchPlace.specialty || 'Known for local delicacies.'}`,
                duration: '1-1.5 hours',
                image: lunchPlace.image
            });
        }

        // Afternoon activity
        const afternoonSpot = spots[(day - 1) * 2 + 1] || spots[1];
        if (afternoonSpot) {
            dayPlan.activities.push({
                time: '2:30 PM',
                type: 'activity',
                name: afternoonSpot.name,
                description: `Explore this ${afternoonSpot.type} during the pleasant afternoon hours.`,
                duration: afternoonSpot.duration || '2 hours',
                image: afternoonSpot.image,
                rating: afternoonSpot.rating
            });
        }

        // Evening leisure / Check into hotel (Day 1)
        if (day === 1) {
            dayPlan.activities.push({
                time: '5:30 PM',
                type: 'hotel',
                name: hotel.name,
                description: `Check into your ${tripCart.budget === 'luxury' ? 'luxury' : tripCart.budget === 'economy' ? 'comfortable' : 'elegant'} stay. Relax and freshen up.`,
                duration: '1-2 hours',
                image: hotel.image
            });
        } else {
            dayPlan.activities.push({
                time: '5:30 PM',
                type: 'leisure',
                name: 'Evening Leisure',
                description: `Free time to explore the local area, shop for souvenirs, or relax at your hotel.`,
                duration: '2 hours',
                image: destination.image
            });
        }

        // Dinner
        const dinnerPlace = restaurants[(day) % restaurants.length] || restaurants[0];
        if (dinnerPlace) {
            dayPlan.activities.push({
                time: '8:00 PM',
                type: 'meal',
                name: dinnerPlace.name,
                description: `End your day with a delicious dinner. ${dinnerPlace.specialty || 'Try their signature dishes!'}`,
                duration: '1.5 hours',
                image: dinnerPlace.image
            });
        }

        dailyPlans.push(dayPlan);
    }

    return {
        destination: destination,
        hotel: hotel,
        budget: tripCart.budget,
        totalDays: totalDays,
        dailyPlans: dailyPlans,
        totalSpots: spots.length,
        totalMeals: restaurants.length * 2
    };
}

function getDateForDay(day) {
    const start = new Date();
    start.setDate(start.getDate() + 14 + day - 1);
    return start.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function getWeatherForDay(day) {
    const weathers = [
        { icon: '☀️', temp: 22, desc: 'Sunny and pleasant', humidity: 65, wind: 12 },
        { icon: '⛅', temp: 20, desc: 'Partly cloudy', humidity: 70, wind: 15 },
        { icon: '🌤️', temp: 24, desc: 'Warm and clear', humidity: 60, wind: 10 },
        { icon: '☁️', temp: 19, desc: 'Cloudy but dry', humidity: 75, wind: 18 },
        { icon: '🌧️', temp: 18, desc: 'Light showers expected', humidity: 80, wind: 20 }
    ];
    return weathers[(day - 1) % weathers.length];
}

function populateItinerary(itinerary, tripCart) {
    if (!itinerary) return;

    // Header info
    document.getElementById('tripDestination').textContent = `📍 ${capitalizeFirst(tripCart.destination)}`;
    document.getElementById('tripDates').textContent = `${getDateForDay(1)} - ${getDateForDay(totalDays)}`;

    const budgetLabels = {
        'economy': '💰 Economy',
        'midRange': '💵 Mid-Range',
        'luxury': '💎 Luxury'
    };
    document.getElementById('tripCategory').textContent = budgetLabels[tripCart.budget] || '💵 Mid-Range';

    // Hero section
    document.getElementById('heroDestination').textContent = capitalizeFirst(tripCart.destination);
    document.getElementById('heroSubtitle').textContent = `${totalDays} days of curated experiences based on your preferences`;
    document.getElementById('totalDays').textContent = totalDays;
    document.getElementById('totalSpots').textContent = itinerary.totalSpots;
    document.getElementById('totalMeals').textContent = itinerary.totalMeals;

    // Generate day tabs
    const dayTabs = document.getElementById('dayTabs');
    dayTabs.innerHTML = '';

    for (let i = 1; i <= totalDays; i++) {
        const tab = document.createElement('button');
        tab.className = `day-tab ${i === 1 ? 'active' : ''}`;
        tab.dataset.day = i;
        tab.innerHTML = `
            <span class="day-number">Day ${i}</span>
            <span class="day-date">${getDateForDay(i)}</span>
        `;
        tab.addEventListener('click', () => selectDay(i));
        dayTabs.appendChild(tab);
    }

    // Budget sidebar
    updateBudgetSidebar(tripCart);

    // Load first day
    showDay(1, itinerary);

    // Store itinerary globally
    window.currentItinerary = itinerary;
}

function showDay(day, itinerary) {
    itinerary = itinerary || window.currentItinerary;
    if (!itinerary) return;

    currentDay = day;
    const dayPlan = itinerary.dailyPlans[day - 1];

    // Update weather
    const weather = dayPlan.weather;
    document.getElementById('weatherIcon').textContent = weather.icon;
    document.getElementById('weatherTemp').textContent = `${weather.temp}°C`;
    document.getElementById('weatherDesc').textContent = weather.desc;
    document.getElementById('humidity').textContent = `${weather.humidity}%`;
    document.getElementById('wind').textContent = `${weather.wind} km/h`;

    // Generate timeline
    const timeline = document.getElementById('timelineContainer');
    timeline.innerHTML = '<div class="timeline">' +
        dayPlan.activities.map(activity => generateTimelineItem(activity)).join('') +
        '</div>';

    // Update navigation
    document.getElementById('prevDay').disabled = day === 1;
    document.getElementById('nextDay').disabled = day === totalDays;
    document.getElementById('nextDay').textContent = day === totalDays ? 'Complete!' : 'Next Day →';

    // Update tabs
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.classList.toggle('active', parseInt(tab.dataset.day) === day);
    });

    // Update AI tips
    updateAITips(day, itinerary);
}

function generateTimelineItem(activity) {
    const typeClass = activity.type === 'meal' ? 'meal' :
        activity.type === 'transport' ? 'transport' : '';

    return `
        <div class="timeline-item ${typeClass}">
            <div class="item-header">
                <span class="item-time">${activity.time}</span>
                <span class="item-duration">${activity.duration}</span>
            </div>
            <div class="item-content">
                <div class="item-image">
                    <img src="${activity.image || 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=200'}" alt="${activity.name}">
                </div>
                <div class="item-details">
                    <span class="item-type ${typeClass}">${getTypeLabel(activity.type)}</span>
                    <h4 class="item-name">${activity.name}</h4>
                    <p class="item-description">${activity.description}</p>
                </div>
            </div>
        </div>
    `;
}

function getTypeLabel(type) {
    const labels = {
        'activity': '🎯 Activity',
        'meal': '🍽️ Dining',
        'hotel': '🏨 Check-in',
        'transport': '🚗 Transport',
        'leisure': '🌅 Leisure'
    };
    return labels[type] || '📍 Stop';
}

function selectDay(day) {
    showDay(day, window.currentItinerary);
}

function changeDay(delta) {
    const newDay = currentDay + delta;
    if (newDay >= 1 && newDay <= totalDays) {
        selectDay(newDay);
    }
}

function updateBudgetSidebar(tripCart) {
    const budgetIcons = {
        'economy': '💰',
        'midRange': '💵',
        'luxury': '💎'
    };
    const budgetTexts = {
        'economy': 'Budget-Friendly Trip',
        'midRange': 'Comfortable Experience',
        'luxury': 'Luxury Experience'
    };

    const categoryDisplay = document.getElementById('budgetCategoryDisplay');
    categoryDisplay.innerHTML = `
        <span class="budget-icon">${budgetIcons[tripCart.budget] || '💵'}</span>
        <span class="budget-text">${budgetTexts[tripCart.budget] || 'Comfortable Experience'}</span>
    `;

    // Update category colors
    const colors = {
        'economy': { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', color: '#92400e' },
        'midRange': { bg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', color: '#065f46' },
        'luxury': { bg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)', color: '#5b21b6' }
    };

    const colorScheme = colors[tripCart.budget] || colors.midRange;
    categoryDisplay.style.background = colorScheme.bg;
    categoryDisplay.querySelector('.budget-text').style.color = colorScheme.color;
}

function updateAITips(day, itinerary) {
    const tips = [
        `Today starts early! Have breakfast at the hotel before heading out.`,
        `💡 Try to reach ${itinerary.dailyPlans[day - 1].activities[0]?.name || 'your first stop'} by 9 AM for the best experience.`,
        `📸 Don't forget your camera - today has great photo opportunities!`,
        `🧥 Carry a light jacket, evenings can get chilly in ${capitalizeFirst(itinerary.destination.name)}.`
    ];

    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = tips.slice(0, 3).map(tip => `<li>${tip}</li>`).join('');
}

function shareItinerary() {
    const shareData = {
        title: `My ${capitalizeFirst(window.currentItinerary?.destination?.name || 'Trip')} Itinerary`,
        text: `Check out my ${totalDays}-day trip plan created with TRIPIFY AI!`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('📋 Link copied to clipboard!');
    }
}

function saveItinerary() {
    const btn = document.getElementById('saveItineraryBtn') ||
        document.querySelector('.bottom-action.save');

    btn.innerHTML = '<span class="btn-spinner"></span> Saving...';
    btn.disabled = true;

    setTimeout(() => {
        localStorage.setItem('savedItinerary', JSON.stringify({
            itinerary: window.currentItinerary,
            savedAt: new Date().toISOString()
        }));

        btn.innerHTML = '✓ Saved!';
        btn.style.background = '#059669';

        setTimeout(() => {
            btn.innerHTML = '💾 Save Itinerary';
            btn.style.background = '';
            btn.disabled = false;
        }, 2000);
    }, 1000);
}

function capitalizeFirst(str) {
    if (!str) return '';
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
