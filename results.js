// Results Page JavaScript - AI Travel Planner (No Prices)

document.addEventListener('DOMContentLoaded', function () {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination') || 'ooty';
    const budget = urlParams.get('budget') || 'midRange';
    const duration = urlParams.get('duration') || '3';

    // Update search pill
    document.getElementById('searchDestination').textContent = capitalizeFirst(destination);
    document.getElementById('searchBudget').textContent = getBudgetLabel(budget);
    document.getElementById('searchDuration').textContent = duration + ' Days';
    document.getElementById('destinationName').textContent = capitalizeFirst(destination);

    // Current state
    let currentCategory = 'hotels';
    let currentDestination = destination;
    let currentBudgetFilter = budget;

    // Initialize theme toggle
    initThemeToggle();

    // Set active budget from URL
    document.querySelectorAll('.budget-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.budget === budget) {
            tab.classList.add('active');
        }
    });

    // Load initial results
    loadResults();

    // Category tab click handlers
    document.querySelectorAll('.category-tab:not(.budget-tab)').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.category-tab:not(.budget-tab)').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadResults();
        });
    });

    // Budget tab handlers
    document.querySelectorAll('.budget-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.budget-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentBudgetFilter = this.dataset.budget;
            loadResults();
        });
    });

    // Apply filters
    document.getElementById('applyFilters').addEventListener('click', loadResults);

    // Reset filters
    document.getElementById('resetFilters').addEventListener('click', function () {
        document.querySelectorAll('.checkbox-group input').forEach(cb => {
            cb.checked = cb.value === '5' || cb.value === '4' || cb.value === 'wifi' || cb.value === 'restaurant';
        });
        document.querySelectorAll('.budget-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.budget-tab[data-budget="midRange"]').classList.add('active');
        currentBudgetFilter = 'midRange';
        loadResults();
    });

    // Sort change
    document.getElementById('sortBy').addEventListener('change', loadResults);

    function loadResults() {
        const grid = document.getElementById('resultsGrid');
        const destinationData = TamilNaduTourism.getDestination(currentDestination);

        if (!destinationData) {
            grid.innerHTML = '<p class="no-results">No destination found. Please try again.</p>';
            return;
        }

        let items = [];
        let cardType = 'hotel';

        switch (currentCategory) {
            case 'hotels':
                // Filter by budget category
                if (currentBudgetFilter === 'economy') {
                    items = destinationData.hotels.economy.map(h => ({ ...h, category: 'Economy', categoryIcon: '💰' }));
                } else if (currentBudgetFilter === 'luxury') {
                    items = destinationData.hotels.luxury.map(h => ({ ...h, category: 'Luxury', categoryIcon: '💎' }));
                } else {
                    items = destinationData.hotels.midRange.map(h => ({ ...h, category: 'Mid-Range', categoryIcon: '💵' }));
                }
                cardType = 'hotel';
                break;
            case 'restaurants':
                items = destinationData.restaurants;
                cardType = 'restaurant';
                break;
            case 'attractions':
                items = destinationData.attractions;
                cardType = 'attraction';
                break;
        }

        // Apply sorting
        const sortBy = document.getElementById('sortBy').value;
        switch (sortBy) {
            case 'rating':
                items.sort((a, b) => b.rating - a.rating);
                break;
            case 'recommended':
            default:
                // AI recommended order - highest rated first
                items.sort((a, b) => b.rating - a.rating);
                break;
        }

        // Update count
        document.getElementById('resultsCount').textContent = `(${items.length} AI picks)`;

        // Generate cards
        grid.innerHTML = items.map((item, index) => generateCard(item, cardType, index)).join('');

        // Add favorite button handlers
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
                this.textContent = this.classList.contains('active') ? '❤️' : '🤍';
            });
        });

        // Add to trip handlers with loading animation
        document.querySelectorAll('.add-to-trip-btn').forEach((btn, idx) => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('loading')) return;

                // Get item data from the card
                const card = this.closest('.property-card');
                const itemName = card.querySelector('.card-title').textContent;
                const itemRating = parseFloat(card.querySelector('.card-rating').textContent);
                const itemImage = card.querySelector('.card-image img').src;
                const itemType = currentCategory === 'hotels' ? 'hotel' :
                    currentCategory === 'restaurants' ? 'restaurant' : 'attraction';

                // Create item object
                const item = {
                    name: itemName,
                    rating: itemRating,
                    image: itemImage,
                    location: capitalizeFirst(currentDestination)
                };

                // Add loading state
                this.classList.add('loading');
                this.innerHTML = '<span class="btn-spinner"></span> Adding...';
                this.style.pointerEvents = 'none';

                // Save to localStorage cart
                setTimeout(() => {
                    addToTripCart(item, itemType);
                    updateCartCounter();

                    // Show success
                    this.classList.remove('loading');
                    this.classList.add('success');
                    this.innerHTML = '✓ Added to Trip!';
                    this.style.background = '#059669';

                    // Reset after delay
                    setTimeout(() => {
                        this.classList.remove('success');
                        this.innerHTML = '➕ Add to Trip';
                        this.style.background = '';
                        this.style.pointerEvents = '';
                    }, 2500);
                }, 1200);
            });
        });
    }

    function generateCard(item, type, index) {
        const isAIPick = index === 0 || item.rating >= 4.7;

        if (type === 'hotel') {
            return `
                <div class="property-card">
                    <div class="card-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'">
                        ${isAIPick ? '<span class="ai-pick-badge">🤖 AI Pick</span>' : ''}
                        <button class="favorite-btn">🤍</button>
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="card-title">${item.name}</h3>
                            <span class="card-rating">${item.rating}</span>
                        </div>
                        <p class="card-location">📍 ${item.location || capitalizeFirst(currentDestination)}</p>
                        <div class="card-category-badge ${item.category.toLowerCase().replace('-', '')}">
                            <span class="category-icon">${item.categoryIcon}</span>
                            <span class="category-text">${item.category}</span>
                        </div>
                        <div class="card-amenities">
                            ${item.amenities.slice(0, 3).map(a => `<span class="amenity-tag">${a}</span>`).join('')}
                        </div>
                        <button class="add-to-trip-btn">➕ Add to Trip</button>
                    </div>
                </div>
            `;
        } else if (type === 'restaurant') {
            return `
                <div class="property-card restaurant-card">
                    <div class="card-image">
                        <img src="${item.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400'}" alt="${item.name}">
                        ${item.rating >= 4.5 ? '<span class="ai-pick-badge">🤖 AI Pick</span>' : ''}
                        <button class="favorite-btn">🤍</button>
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="card-title">${item.name}</h3>
                            <span class="card-rating">${item.rating}</span>
                        </div>
                        <p class="card-cuisine">🍽️ ${item.cuisine}</p>
                        <p class="card-specialty">${item.specialty || ''}</p>
                        <p class="card-location">📍 ${capitalizeFirst(currentDestination)}</p>
                        <button class="add-to-trip-btn">➕ Add to Trip</button>
                    </div>
                </div>
            `;
        } else if (type === 'attraction') {
            return `
                <div class="property-card attraction-card">
                    <div class="card-image">
                        <img src="${item.image || 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400'}" alt="${item.name}">
                        ${isAIPick ? '<span class="ai-pick-badge">🤖 Must Visit</span>' : ''}
                        <button class="favorite-btn">🤍</button>
                    </div>
                    <div class="card-content">
                        <span class="card-type">${item.type}</span>
                        <div class="card-header">
                            <h3 class="card-title">${item.name}</h3>
                            <span class="card-rating">${item.rating}</span>
                        </div>
                        <p class="card-location">📍 ${capitalizeFirst(currentDestination)}</p>
                        <p class="card-duration">⏱️ ${item.duration}</p>
                        <button class="add-to-trip-btn">➕ Add to Trip</button>
                    </div>
                </div>
            `;
        }
    }

    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function getBudgetLabel(budget) {
        const labels = {
            'economy': '💰 Economy',
            'midRange': '💵 Mid-Range',
            'mid-range': '💵 Mid-Range',
            'luxury': '💎 Luxury'
        };
        return labels[budget] || '💵 Mid-Range';
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

    // Initialize cart UI
    createCartButton();
    updateCartCounter();
});

// Cart helper functions
function addToTripCart(item, type) {
    let tripCart = JSON.parse(localStorage.getItem('tripCart')) || {
        destination: new URLSearchParams(window.location.search).get('destination') || 'ooty',
        budget: new URLSearchParams(window.location.search).get('budget') || 'midRange',
        days: parseInt(new URLSearchParams(window.location.search).get('duration')) || 3,
        hotel: null,
        spots: [],
        restaurants: []
    };

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
}

function getCartCount() {
    const tripCart = JSON.parse(localStorage.getItem('tripCart'));
    if (!tripCart) return 0;
    let count = 0;
    if (tripCart.hotel) count++;
    if (tripCart.spots) count += tripCart.spots.length;
    if (tripCart.restaurants) count += tripCart.restaurants.length;
    return count;
}

function updateCartCounter() {
    const count = getCartCount();
    const counter = document.getElementById('cartCounter');
    const cartBtn = document.getElementById('floatingCartBtn');
    const headerBadge = document.getElementById('headerCartBadge');

    if (counter) {
        counter.textContent = count;
        counter.style.display = count > 0 ? 'flex' : 'none';
    }

    if (cartBtn) {
        cartBtn.style.display = count > 0 ? 'flex' : 'none';
    }

    // Update header cart badge
    if (headerBadge) {
        headerBadge.textContent = count;
    }
}

function createCartButton() {
    // Remove existing if any
    const existing = document.getElementById('floatingCartBtn');
    if (existing) existing.remove();

    // Create floating cart button
    const cartBtn = document.createElement('a');
    cartBtn.id = 'floatingCartBtn';
    cartBtn.href = 'trip-summary.html';
    cartBtn.className = 'floating-cart-btn';
    cartBtn.innerHTML = `
        🛒 View Trip
        <span class="cart-counter" id="cartCounter">0</span>
    `;

    document.body.appendChild(cartBtn);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .floating-cart-btn {
            position: fixed;
            bottom: 90px;
            right: 24px;
            display: none;
            align-items: center;
            gap: 8px;
            padding: 14px 24px;
            background: linear-gradient(135deg, #22E16B 0%, #17A34A 100%);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-size: 15px;
            font-weight: 700;
            box-shadow: 0 6px 24px rgba(34, 225, 107, 0.4);
            z-index: 1000;
            animation: cartPulse 2s ease infinite;
            transition: transform 0.2s;
        }
        
        .floating-cart-btn:hover {
            transform: translateY(-3px);
        }
        
        .cart-counter {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 24px;
            height: 24px;
            background: white;
            color: var(--primary-green);
            font-size: 13px;
            font-weight: 800;
            border-radius: 50%;
        }
        
        @keyframes cartPulse {
            0%, 100% { box-shadow: 0 6px 24px rgba(34, 225, 107, 0.4); }
            50% { box-shadow: 0 6px 32px rgba(34, 225, 107, 0.6); }
        }
        
        @media (max-width: 600px) {
            .floating-cart-btn {
                bottom: 80px;
                right: 16px;
                padding: 12px 20px;
                font-size: 14px;
            }
        }
    `;
    document.head.appendChild(style);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
