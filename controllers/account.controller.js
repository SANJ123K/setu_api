const accountModel = require("../services/account");

exports.checkAvailability = async (req, res) => {
  try {
    const { mobileNumber } = req.body; // Extract mobile number from request body
    const authToken = req.headers.authorization?.split(" ")[1]; // Extract Bearer token from headers
    const productInstanceId = req.headers["x-product-instance-id"]; // Extract Product Instance ID

    // Validate input
    if (!authToken || !productInstanceId || !mobileNumber) {
      return res.status(400).json({
        message: "Missing required fields (Authorization, x-product-instance-id, or mobileNumber)",
      });
    }

    // Call the model to check account availability
    const result = await accountModel.checkAccountAvailability(mobileNumber, authToken, productInstanceId);

    // Send success response
    res.status(200).json({
      message: "Account availability checked successfully",
      data: result,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      message: "Failed to check account availability",
      error: error.message,
    });
  }
};
