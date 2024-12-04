const express = require("express");
const consentRouter = express.Router();
const consentController = require("../controllers/createConsent");

// POST route for creating a consent
consentRouter.post("/create-consent", consentController.createConsent);

module.exports = consentRouter;
