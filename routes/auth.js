var express = require("express");
var router = express.Router();
var userController = require("../controller/userController");
var shopController = require("../controller/shopController");
var serviceController = require("../controller/serviceController");
var utilController = require("../controller/utilController");

router.get("/", function (req, res, next) {});
router.post(
  "/register/shop",
  userController.addUser,
  serviceController.addService,
  shopController.addShop,
  utilController.sendResult
);
module.exports = router;