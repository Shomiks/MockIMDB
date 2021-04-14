const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: "http://localhost:5000"
};

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

require("./routes/movies.routes")(app);
require("./routes/users.routes")(app);
require("./routes/comments.routes")(app);
require("./routes/categories.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));