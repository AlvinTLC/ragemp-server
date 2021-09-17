"use strict";

const dotenv = require("dotenv");
dotenv.config();

const config = {
    database : {
        url: process.env.DATABASE_URL || "mongodb://localhost:27017/ragemp"
    }
};

module.exports = config;