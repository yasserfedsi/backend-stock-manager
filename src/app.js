const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./routes/category.route");
const subCategoryRoutes = require("./routes/subCategory.route");
const componentRoutes = require("./routes/component.route");
const subComponentRoutes = require("./routes/subComponent.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", categoryRoutes);
app.use("/api", subCategoryRoutes);
app.use("/api", componentRoutes);
app.use("/api", subComponentRoutes);

module.exports = app;
