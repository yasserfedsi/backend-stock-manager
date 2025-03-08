// routes/componentRoutes.js
const express = require("express");
const ComponentController = require("../controllers/componentController");

const router = express.Router();

router.post("/components", ComponentController.createComponent);
router.get("/api/components", ComponentController.getAllComponents);
router.get(
  "/api/components/category/:uuid",
  ComponentController.getComponentsByCategory
);
router.get(
  "/api/components/sub_category/:uuid",
  ComponentController.getComponentsBySubCategory
);
router.put("/api/components/:uuid", ComponentController.updateComponent);
router.delete("/api/components/:uuid", ComponentController.deleteComponent);

module.exports = router;
