// Requiring npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// Mongoose connection
mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/workout", {  useNewUrlParser: true, useUnifiedTopology: true  });
// mongoose.connect(process.env.MONGODB_URI  || 'heroku?', {  useNewUrlParser: true, useUnifiedTopology: true  });


// Requiring routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Listening...
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });