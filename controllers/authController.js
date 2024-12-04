const { authenticate } = require("../services/setuServices");

exports.login = async (req, res) => {
  try {
    const result = await authenticate();
    res.status(200).json({
      message: "Authentication successful",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Authentication failed",
      error: error.message,
    });
  }
};
