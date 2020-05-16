/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const homeController = require("../controller/home_controller");
const uploadController = require("../controller/upload_controller");

/**********************MAKING ROUTES*****************************/

router.get("/", homeController.Index);
router.use("/upload", require("./upload"));

/*****************EXPORTING ROUTER*******************************/
module.exports = router;