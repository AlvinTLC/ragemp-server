const fs = require("fs");

const COLORS = {
  RESET: "\x1b[0m",
  ERROR: "\x1b[31m",
  INFO: "\x1b[33m",
  DONE: "\x1b[32m",
  SERVER: "\x1B[35m",
};

const BARS = {
  NORMAL: "[============================================================]",
};

const saveLog = (type, message) => {
  const date = new Date();
  const template = `${date} [${type}] ${message}`;

  if (!fs.existsSync(`./logs/${type}`)) {
    fs.mkdirSync(`./logs/${type}`, {
      recursive: true,
    });
  }
  fs.appendFileSync(`./logs/${type}/data.log`, template + "\n");
};

const sendLog = (type, message) => {
  const color = COLORS[type];
  const template = `${COLORS.SERVER}[S]${color}[${type}]${COLORS.RESET} ${message}`;
  console.log(template);
  saveLog(type, message);
};

const sendBar = (type) => {
  const barType = BARS[type];
  const template = `${COLORS.INFO}${barType}${COLORS.RESET}`;
  console.log(`\n${template}\n \n`);
};

module.exports = { sendLog, sendBar };
