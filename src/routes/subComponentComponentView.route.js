const express = require("express");
const subComponentComponentViewController = require("../controllers/subComponentComponentView.controller");

const router = express.Router();

router.get("/subComponentComponentView", subComponentComponentViewController.getAll);
router.get("/subComponentComponentView/:uuid", subComponentComponentViewController.getByCategoryId);

module.exports = router;