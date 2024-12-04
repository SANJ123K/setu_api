const consentModel = require("../services/consentServices");

/**
 * Controller for creating consent
 */
exports.createConsent = async (req, res) => {
  const consentData = req.body; // Get data from request body
  const authToken = req.headers.authorization; // Extract Authorization token
  const productInstanceId = req.headers["x-product-instance-id"]; // Extract Product Instance ID

  // Validate headers
  if (!authToken || !productInstanceId) {
    return res.status(400).json({
      message: "Missing Authorization token or Product Instance ID in headers",
    });
  }

  try {
    const result = await consentModel.createConsent(consentData, authToken, productInstanceId);
    res.status(200).json({
      message: "Consent created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create consent",
      error: error.message,
    });
  }
};
