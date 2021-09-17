"use strict";

const mongoose = require("mongoose");
const config = require("./config/index.js");
const resources = require("./resources.js");
const Log = require("./utils/log.js");

const runScripts = () => {
    const activeResources = resources.filter((resource) => resource.active);
    activeResources.forEach((resource) => {
        require(resource.path);
    });
    Log.sendConsole("INFO", `${activeResources.length} resources loaded`);
};

const runServer = async () => {
    try {
        await mongoose.connect(config.database.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        Log.sendConsoleBar("NORMAL");
        Log.sendConsole("DONE", "Database connected");
        runScripts();
    } catch (error) {
        Log.sendConsole("ERROR", error.message);
    }
};

runServer();
