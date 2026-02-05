const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Restaurant = sequelize.define('Restaurant', {
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
    description: {
        type: DataTypes.TEXT
    }
});

module.exports = Restaurant;