// routes/categoryRoutes.js
const express = require("express");
const CategoryController = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories", CategoryController.createCategory);
router.get("/api/categories", CategoryController.getAllCategories);
router.put("/api/categories/:uuid", CategoryController.updateCategory);
router.delete("/api/categories/:uuid", CategoryController.deleteCategory);

module.exports = router;
