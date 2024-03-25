require('dotenv').config();

const express = require('express')
const helmet = require("helmet");
const editor_end_points = require("./end-points/editor")
const catch_all = require("./end-points/catch-all")

const dev_machine = process.env.DEV_MACHINE || false
const port = process.env.PORT || 8082;

// Create Proxy
const app = express()

// Set Helmet usage for security
//proxy.use(helmet());

// Variables for use in templates
app.locals.dev_machine = dev_machine
app.locals.title = process.env.SERVER_NAME
app.locals.server_admin_email = process.env.SERVER_ADMIN_EMAIL
app.locals.bug_reports_email = process.env.BUG_REPORTS_EMAIL
app.locals.software_version = process.env.SOFTWARE_VERSION

// Remove fingerprinting of the Server Software
app.disable('x-powered-by');

// Directory for serving static files
app.use(express.static('public'))

// Set EJS as templating engine  
app.set('view engine', 'ejs'); 

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Parse application/json
app.use(express.json());

// Log request
app.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path)

    next()
})

// Handles errors
app.use((err, req, res, next) => {
    console.log("error caught by PROXY:", err)
})

// Route traffic to relevant service
app.use(editor_end_points)

// Catch all Router
app.use(catch_all)

// Start Server
app.listen(port, () => console.log(`Proxy Server is listening on port: ${port}`));