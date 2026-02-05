const colors = require('colors');
const { sequelize, connectDB } = require('./config/db');
const Hotel = require('./models/Hotel');
const Activity = require('./models/Activity');
const Restaurant = require('./models/Restaurant');
const Database = require('./data/source'); // Use source.js as it has the correct structure

// Connect to DB
connectDB();

const importData = async () => {
    try {
        // Sync database first to ensure tables exist
        await sequelize.sync({ force: true }); // This drops tables and recreates them
        console.log('Tables Dropped and Recreated...'.cyan);

        await Hotel.bulkCreate(Database.hotels);
        await Activity.bulkCreate(Database.activities);
        await Restaurant.bulkCreate(Database.restaurants);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
