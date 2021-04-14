module.exports = (sequelize, Sequelize) => {
    return sequelize.define("users", {
        nickname: {
            type: Sequelize.STRING
        }
    });
};