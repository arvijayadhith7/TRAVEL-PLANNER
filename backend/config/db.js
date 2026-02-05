const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../database.sqlite'),
    logging: false // Disable logging for cleaner output
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('SQLite Database Connected via Sequelize...');

        // Sync models (create tables if not exist)
        await sequelize.sync();
        console.log('Database Synced.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

module.exports = { sequelize, connectDB };
