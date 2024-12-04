const fipsModel = require("../services/fipServices");

exports.getFips = async (req, res) => {
  try {
    const fipsData = await fipsModel.fetchFips(); 
    res.status(200).json({
      message: "FIPs fetched successfully",
      data: fipsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch FIPs",
      error: error.message,
    });
  }
};


exports.getFipsById = async (req, res) => {
  try {
    const fipId = req.params.id;
    const fipData = await fipsModel.fetchById(fipId);
    res.status(200).json({
      message: "FIP fetched successfully",
      data: fipData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch FIP",
      error: error.message,
    });
  }
};