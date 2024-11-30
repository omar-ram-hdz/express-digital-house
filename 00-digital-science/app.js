const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const faviconURL = path.join(__dirname, "public", "images", "science.ico");
const favicon = require("serve-favicon");

const mainRouter = require("./routes/main");
const heroRouter = require("./routes/heroes");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(faviconURL));

app.use("/", mainRouter);
app.use("/heroes", heroRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

/* 
Ideas
- En el index incluir un menú de todos los científicos disponibles
- Implementar una página que muestre un error en caso de no encontrar el científico
*/
