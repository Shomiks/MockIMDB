const db = require("../models");
const Movies = db.movies;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: res,
    });
    return;
  }

  // Create a Movie
  const movie = {
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
  };

  // Save Movie in the database
  Movies.create(movie)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Movie.",
      });
    });
};

exports.bulkCreate = (req, res) => {
  // Validate request

  // Create a Movie

  // Save Movie in the database
  Movies.bulkCreate(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Movie.",
      });
    });
};

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Movies.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Movies.",
      });
    });
};

// Find a single Movie with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Movies.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Movie with id=" + id,
      });
    });
};

// Update a Movie by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Movies.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Movie was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Movie with id=" + id,
      });
    });
};
// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Movies.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Movie was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Movie with id=" + id,
      });
    });
};

