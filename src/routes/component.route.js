// routes/componentRoutes.js
const express = require("express");
const ComponentController = require("../controllers/component.controller");

const router = express.Router();

router.post("/components", ComponentController.createComponent);
router.get("/components", ComponentController.getAllComponents);
router.get(
  "/components/category/:uuid",
  ComponentController.getComponentsByCategory
);
router.get(
  "/components/sub_category/:uuid",
  ComponentController.getComponentsBySubCategory
);
router.put("/components/:uuid", ComponentController.updateComponent);
router.delete("/components/:uuid", ComponentController.deleteComponent);

module.exports = router;
