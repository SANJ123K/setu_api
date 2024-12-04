const axios = require("axios");

exports.fetchFips = async () => {
  const options = { method: "get", url: "https://fiu-sandbox.setu.co/v2/fips" };

  try {
    const response = await axios.request(options); // Perform the Axios request
    return response.data; // Return the fetched data
  } catch (error) {
    throw new Error(`Error fetching FIPs: ${error.message}`); // Handle errors
  }
};


exports.fetchById = async (fipId) => {
  const options = {
    method: "get",
    url: `https://fiu-sandbox.setu.co/v2/fips/${fipId}`,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching FIP by ID: ${error.message}`);
  }
};