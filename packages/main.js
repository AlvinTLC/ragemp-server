const mongoose = require("mongoose");
const DATABASE = require("./config/database.js");
const resources = require("./resources.js");
const Log = require("./utils/log.js");

const runScripts = () => {
  const activeResources = resources.filter((resource) => resource.active);
  activeResources.forEach((resource) => {
    require(resource.path);
  });
  Log.sendConsole("INFO", `${activeResources.length} resources loaded`);
};

(async () => {
  try {
    Log.sendConsole("INFO", "Connecting to database...");
    await mongoose.connect(DATABASE.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    Log.sendConsoleBar("NORMAL");
    Log.sendConsole("DONE", "Database connected");
    runScripts();
  } catch (error) {
    Log.sendConsole("ERROR", error.message);
  }
})();
