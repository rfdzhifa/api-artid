module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        quiz: {
            type: Sequelize.STRING,
        },
        a: {
            type: Sequelize.STRING,
        },
        b: {
            type: Sequelize.STRING,
        },
        key: {
            type: Sequelize.STRING,
        },
        contentId: {
            type: Sequelize.INTEGER,
        }
    });
    return Quiz;
}