// routes/subCategoryRoutes.js
const express = require("express");
const SubCategoryController = require("../controllers/subCategoryController");

const router = express.Router();

router.post("/sub-categories", SubCategoryController.createSubCategory);
router.get(
  "/api/sub-categories/:uuid",
  SubCategoryController.getSubCategoriesByParent
);
router.put(
  "/api/sub-categories/:uuid",
  SubCategoryController.updateSubCategory
);
router.delete(
  "/api/sub-categories/:uuid",
  SubCategoryController.deleteSubCategory
);

module.exports = router;
