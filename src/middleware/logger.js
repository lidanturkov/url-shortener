const Log = require("../models/Log");

const addLog = async (info) => {
  let log = new Log({
    info,
    date: new Date(),
  });
  await log.save();
};

module.exports = addLog;
