const express = require("express");
const componentSubCategoryViewController = require("../controllers/componentSubCategoryView.controller");

const router = express.Router();

router.get("/componentSubCategoryView", componentSubCategoryViewController.getAll);
router.get("/componentSubCategoryView/:uuid", componentSubCategoryViewController.getByCategoryId);

module.exports = router;