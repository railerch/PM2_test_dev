// MODULOS
const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const url = require("url");

// CONFIG
app.set("port", 7000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get("/", (req, res) => {
    console.log(url.parse(req.url));
    res.render("index");
})

// SERVER
app.listen(app.get("port"), () => {
    console.log(`Server running at port: 7000`);
})