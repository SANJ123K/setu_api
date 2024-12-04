const express = require("express");
const fipRouter = express.Router();
const fipsController = require("../controllers/fetchFIP.controllers");

// Define a route for getting FIPs
fipRouter.get("/fips", fipsController.getFips)
         .get('/fips/:id', fipsController.getFipsById);

module.exports = fipRouter;
