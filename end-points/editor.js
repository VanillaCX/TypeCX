const express = require('express')
const router = express.Router()

// Middleware to Sanitise URL params
const {add_params_to_res_locals} = require("../modules/sanitise_tools")

// Controller for Matter
const controller = require("../controllers/editor")

// Sanitise Parameters and add to res.locals.sanitised_parameters

// Route Controllers

router.get("/html", controller.html_editor)
router.get("/html2", controller.html_editor2)
router.get("/html3", controller.html_editor3)
router.get("/html4", controller.html_editor4)
router.get("/html5", controller.html_editor5)
router.get("/html6", controller.html_editor6)
router.get("/html7", controller.html_editor7)
router.get("/html8", controller.html_editor8)
router.get("/html9", controller.html_editor9)
router.get("/html10", controller.html_editor10)
router.get("/html11", controller.html_editor11)
router.get("/html12", controller.html_editor12)
router.get("/html13", controller.html_editor13)


module.exports = router