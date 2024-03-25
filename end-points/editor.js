const express = require('express')
const router = express.Router()

// Middleware to Sanitise URL params
const {add_params_to_res_locals} = require("../modules/sanitise_tools")

// Controller for Matter
const controller = require("../controllers/editor")

// Sanitise Parameters and add to res.locals.sanitised_parameters

// Route Controllers

router.get("/html", controller.html_editor)


module.exports = router