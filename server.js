const express = require("express");
const path = require("path");
const navigationRoutes = require("./routes/navigation");
const adminRoutes = require("./routes/admin");
const rootDir = require("./utils/rootDir");
const errorController = require("./controllers/error");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(navigationRoutes);
app.use(adminRoutes);
app.use(errorController.get404);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
