const express = require("express");
const accRouter = express.Router();
const accountController = require("../controllers/account.controller");
// POST route for checking account availability
accRouter.post("/account-availability", accountController.checkAvailability);

module.exports = accRouter;
