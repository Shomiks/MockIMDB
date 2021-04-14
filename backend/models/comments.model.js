module.exports = (sequelize, Sequelize) => {
  return sequelize.define("comments", {
    comment: {
      type: Sequelize.STRING,
    },
    movieId: {
      type: Sequelize.INTEGER,
    },
    user: {
      type: Sequelize.STRING,
    }
  });
};
