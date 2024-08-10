const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/api_social_network_db");

module.exports = mongoose.connection;