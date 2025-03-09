// routes/subCategoryRoutes.js
const express = require("express");
const SubCategoryController = require("../controllers/subCategory.controller");

const router = express.Router();

router.post("/sub-categories", SubCategoryController.createSubCategory);
router.get(
  "/sub-categories/:uuid",
  SubCategoryController.getSubCategoriesByParent
);
router.put(
  "/sub-categories/:uuid",
  SubCategoryController.updateSubCategory
);
router.delete(
  "/sub-categories/:uuid",
  SubCategoryController.deleteSubCategory
);

module.exports = router;
