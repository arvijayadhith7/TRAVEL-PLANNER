const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Activity = sequelize.define('Activity', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT
    },
    image: {
        type: DataTypes.STRING
    },
    tags: {
        type: DataTypes.JSON // SQLite stores JSON as text
    },
    map: {
        type: DataTypes.STRING
    }
});

module.exports = Activity;
