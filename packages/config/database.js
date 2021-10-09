const dotenv = require("dotenv");
dotenv.config();

const DATABASE = {
    URL: process.env.DATABASE_URL || "mongodb://localhost:27017/ragemp-server",
    AUTO_SAVE_INTERVAL : 60000,
};

module.exports = DATABASE;
