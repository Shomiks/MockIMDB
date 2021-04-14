const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.comment) {
    res.status(400).send({
      message: res,
    });
    return;
  }

  // Create a Comment
  const comment = {
    comment: req.body.comment,
    movieId: req.body.movieId,
    user: req.body.user,
  };

  // Save Comment in the database
  Comments.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment.",
      });
    });
};

// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
  const movieId = req.query.movieId;
  var condition = movieId ? { movieId: { [Op.like]: `%${movieId}%` } } : null;

  Comments.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Comments.",
      });
    });
};
