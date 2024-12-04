const https = require("https");
require("dotenv").config(); // Load environment variables

exports.authenticate = () => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      hostname: "orgservice-prod.setu.co",
      path: "/v1/users/login",
      headers: {
        client: process.env.SETU_CLIENT, // Environment variable
        "content-type": "application/json",
      },
    };

    const payload = {
      clientID: process.env.SETU_CLIENT_ID, // Environment variable
      grant_type: "client_credentials",
      secret: process.env.SETU_SECRET, // Environment variable
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      console.log('come here');
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        const body = Buffer.concat(chunks);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body.toString())); // Parse and resolve response
        } else {
          reject(new Error(`API Error: ${body.toString()}`));
        }
      });
    });

    req.on("error", (err) => reject(err)); // Handle network errors

    req.write(JSON.stringify(payload)); // Send the payload
    req.end();
  });
};
