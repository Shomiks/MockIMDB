module.exports = (app) => {
  const comments = require("../controllers/comments.controller");

  var router = require("express").Router();

  // Create a new Comment
  router.post("/", comments.create);

  // Retrieve all Comments
  router.get("/", comments.findAll);

  app.use("/api/comments", router);
};
