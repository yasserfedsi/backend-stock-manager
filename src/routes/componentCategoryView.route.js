const express = require("express");
const componentCategoryViewController = require("../controllers/componentCategoryView.controller");

const router = express.Router();

router.get("/componentCategoryView", componentCategoryViewController.getAll);
router.get("/componentCategoryView/:uuid", componentCategoryViewController.getByCategoryId);

module.exports = router;