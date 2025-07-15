
const levels = {
  info: '\x1b[32m%s\x1b[0m',    // Green
  warn: '\x1b[33m%s\x1b[0m',    // Yellow
  error: '\x1b[31m%s\x1b[0m',   // Red
};

const logger = {
  info: (message) => {
    console.log(levels.info, `[INFO] ${new Date().toISOString()} - ${message}`);
  },
  warn: (message) => {
    console.warn(levels.warn, `[WARN] ${new Date().toISOString()} - ${message}`);
  },
  error: (message) => {
    console.error(levels.error, `[ERROR] ${new Date().toISOString()} - ${message}`);
  },
};

export default logger;
