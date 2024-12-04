const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const authRoutes = require("./routes/authRoutes");
const fipRouter = require("./routes/fipRoutes");
const consentRouter = require("./routes/consentRoutes");
const accountRoutes = require("./routes/accountRoutes");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/auth", authRoutes); // Mount the routes
app.use("/api", fipRouter);
app.use("/api", consentRouter);
app.use('/api', accountRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

