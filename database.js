/**
 * Tamil Nadu Tourist Database
 * Now fetches data from the backend API
 */

const Database = {
    hotels: [],
    activities: [],
    restaurants: [],

    init: async function () {
        console.log('Initializing Database from API...');
        try {
            // Fetch data from API
            // Note: Ensure the backend server is running on port 5000
            const [hotels, activities, restaurants] = await Promise.all([
                fetch('http://localhost:5000/api/hotels').then(res => res.json()),
                fetch('http://localhost:5000/api/activities').then(res => res.json()),
                fetch('http://localhost:5000/api/restaurants').then(res => res.json())
            ]);

            this.hotels = hotels;
            this.activities = activities;
            this.restaurants = restaurants;

            console.log('Database loaded:', {
                hotels: hotels.length,
                activities: activities.length,
                restaurants: restaurants.length
            });

            // Dispatch event to notify app that data is ready
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('database-ready'));
            }

        } catch (error) {
            console.error('Error fetching database:', error);
            // Fallback to empty or show error?
            // For now, simple error logging
        }
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.Database = Database;
    // Auto-initialize
    Database.init();
}

// For Node environment (if needed)
if (typeof module !== 'undefined') {
    module.exports = Database;
}
