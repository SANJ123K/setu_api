const axios = require("axios");

/**
 * Create a consent request to the Setu API
 * @param {Object} consentData - The consent data payload
 * @param {string} authToken - The authorization token
 * @param {string} productInstanceId - The product instance ID
 * @returns {Promise<Object>} - The response from the API
 */
exports.createConsent = async (consentData, authToken, productInstanceId) => {
  const options = {
    method: "post",
    url: "https://fiu-sandbox.setu.co/v2/consents",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "x-product-instance-id": productInstanceId,
      "Content-Type": "application/json",
    },
    data: consentData,
  };

  try {
    console.log('hello');
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    // Extract error details for better debugging
    const errorMessage = error.response
      ? `${error.response.status} - ${JSON.stringify(error.response.data)}`
      : error.message;
    throw new Error(`API Error: ${errorMessage}`);
  }
};
