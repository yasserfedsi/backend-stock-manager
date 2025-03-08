// routes/subComponentRoutes.js
const express = require("express");
const SubComponentController = require("../controllers/subComponentController");

const router = express.Router();

router.post("/sub-components", SubComponentController.createSubComponent);
router.get(
  "/sub-components/component/:uuid",
  SubComponentController.getSubComponentsByComponent
);
router.put(
  "/sub-components/:uuid",
  SubComponentController.updateSubComponent
);
router.delete(
  "/sub-components/:uuid",
  SubComponentController.deleteSubComponent
);

module.exports = router;
