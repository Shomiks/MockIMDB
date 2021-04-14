module.exports = (app) => {
  const movies = require("../controllers/movies.controller");

  var router = require("express").Router();

  // Create a new Movies
  router.post("/", movies.create);

  router.post("/multiple", movies.bulkCreate);

  // Retrieve all Movies
  router.get("/", movies.findAll);

  // Retrieve a single Movies with id
  router.get("/:id", movies.findOne);

  // Update a Movies with id
  router.put("/:id", movies.update);

  // Delete a Movies with id
  router.delete("/:id", movies.delete);

  app.use("/api/movies", router);
};
