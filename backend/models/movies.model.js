module.exports = (sequelize, Sequelize) => {
    return sequelize.define("movies", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        categoryId: {
            type: Sequelize.INTEGER
        },
        imdbId: {
            type: Sequelize.STRING
        },
        imageUrl: {
            type: Sequelize.STRING
        }
    });
};