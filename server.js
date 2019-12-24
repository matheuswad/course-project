const express = require("express");
const path = require("path");
const navigationRoutes = require("./routes/navigation.js");
const rootDir = require("./utils/rootDir");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(navigationRoutes);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
