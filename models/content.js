module.exports = (sequelize, Sequelize) => {
    const content = sequelize.define('content', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cover: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.TEXT,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    });
    return content;
}
