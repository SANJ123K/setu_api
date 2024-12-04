const https = require("https");

exports.checkAccountAvailability = (mobileNumber, authToken, productInstanceId) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      hostname: "fiu-sandbox.setu.co",
      port: null,
      path: "/v2/account-availability",
      headers: {
        Authorization: `Bearer ${authToken}`, // Bearer token dynamically passed
        "x-product-instance-id": productInstanceId, // Product instance ID dynamically passed
        "Content-Type": "application/json",
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];

      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        const body = Buffer.concat(chunks);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body.toString())); // Successful response
        } else {
          reject(new Error(`API Error: ${body.toString()}`)); // Handle API errors
        }
      });
    });

    req.on("error", (err) => {
      reject(err); // Handle network errors
    });

    req.write(JSON.stringify({ mobileNumber })); // Send request payload
    req.end();
  });
};
