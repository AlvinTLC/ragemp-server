const TIME_SETTINGS = require("../../../config/world.js").TIME;

const getTime = (date) => {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: TIME_SETTINGS.ZONE,
    })
  );
};

const setTime = () => {
  const date = getTime(new Date());
  mp.world.time.set(date.getHours(), date.getMinutes(), 0);
};

const refreshTime = () => {
  setInterval(() => {
    setTime();
  }, 60000);
};

(() => {
  setTime();
  refreshTime();
})();
