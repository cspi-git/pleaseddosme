"use strict";

// Dependencies
const express = require("express")
const helmet = require("helmet")
const path = require("path")

// Variables
const web = express()
const port = 8080 || process.env.PORT

/// Configurations
//* Express
web.use(helmet({ contentSecurityPolicy: false }))

// Main
web.use(express.static(path.join(__dirname, "public")))
web.listen(port, ()=>{console.log(`Website is running. Port: ${port}`)})