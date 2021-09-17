const COLORS = {
    RESET: "\x1b[0m",
    ERROR: "\x1b[31m",
    INFO: "\x1b[33m",
    DONE: "\x1b[32m",
};

const BARS = {
    NORMAL: "[============================================================]",
};

class Log {
    static sendConsole(type, message) {
        const template = `${COLORS[type]}[${type}]${COLORS.RESET} : ${message}`;
        console.log(template);
    }
    static sendConsoleBar(type) {
        const template = `${COLORS.INFO}${BARS[type]}${COLORS.RESET}`;
        console.log(`\n${template}\n \n`);
    }
}

module.exports = Log;
