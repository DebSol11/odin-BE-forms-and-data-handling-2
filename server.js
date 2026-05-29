const express = require("express");
const app = express();

// global actions need to be defined here because the execute in order
app.use(logger);

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
  console.log(`User is admin = ${req.admin}`);
  console.log("Users Page");
  res.send("Users Page");
});

// middleware definition
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = true;
    next();
    return;
  }
  res.send("No auth");
}

app.listen(3000);
