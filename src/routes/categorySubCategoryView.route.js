const express = require("express");
const categorySubCategoryViewController = require("../controllers/categorySubCategoryView.controller");

const router = express.Router();

router.get("/categorySubCategoryView", categorySubCategoryViewController.getAll);
router.get("/categorySubCategoryView/:uuid", categorySubCategoryViewController.getByCategoryId);

module.exports = router;