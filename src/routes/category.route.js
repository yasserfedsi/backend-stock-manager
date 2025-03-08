// routes/categoryRoutes.js
const express = require("express");
const CategoryController = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories", CategoryController.createCategory);
router.get("/categories", CategoryController.getAllCategories);
router.put("/categories/:uuid", CategoryController.updateCategory);
router.delete("/categories/:uuid", CategoryController.deleteCategory);

module.exports = router;
