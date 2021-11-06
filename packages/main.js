const mongoose = require("mongoose");

const { sendLog, sendBar } = require("./utils/log.js");

const DATABASE = require("./config/database.js");
const RESOURCES = require("./resources.json");

const startResources = () => {
  const activeResources = RESOURCES.filter((resource) => resource.active);
  activeResources.map((resource) => require(resource.path));

  sendLog("INFO", `${activeResources.length} resources loaded`);
};

const startDatabase = () => {
  return new Promise(async (resolve, reject) => {
    sendLog("INFO", "Connecting to database...");
    await mongoose.connect(DATABASE.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    sendLog("DONE", "Database connected");
    resolve();
  });
};

try {
  setTimeout(async () => {
    sendBar("NORMAL");
    await startDatabase();
    startResources();
  }, 2000);
} catch (error) {
  sendLog("ERROR", error);
}
