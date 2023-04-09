const fs = require('fs');

module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define('content', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cover: {
            type: Sequelize.TEXT, // Changed data type to TEXT for storing base64 data
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        meta: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    });

    return Content;
};
