const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Hotel = sequelize.define('Hotel', {
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
    },
    map: {
        type: DataTypes.STRING
    }
});

module.exports = Hotel;
