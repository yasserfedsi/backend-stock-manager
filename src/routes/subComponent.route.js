// routes/subComponentRoutes.js
const express = require("express");
const SubComponentController = require("../controllers/subComponentController");

const router = express.Router();

router.post("/api/sub-components", SubComponentController.createSubComponent);
router.get(
  "/api/sub-components/component/:uuid",
  SubComponentController.getSubComponentsByComponent
);
router.put(
  "/api/sub-components/:uuid",
  SubComponentController.updateSubComponent
);
router.delete(
  "/api/sub-components/:uuid",
  SubComponentController.deleteSubComponent
);

module.exports = router;
