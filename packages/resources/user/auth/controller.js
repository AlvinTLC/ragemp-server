const User = require("../../../models/User.js");

const { sendLog } = require("../../../utils/log.js");

const isUserRegistered = async (player, email) => {
  const { rgscId } = player;
  let user = await User.findOne({ rgscId, email });
  if (user === null) return false;
  return true;
};

const isPasswordValid = async (player, email, password) => {
  const { rgscId } = player;
  let user = await User.findOne({ rgscId, email });
  const isValid = await user.isValidPassword(password);
  console.log(isValid);
  return isValid;
};

const createUser = async (player, email, password) => {
  const { rgscId, name, ip } = player;
  const user = new User({
    rgscId,
    name,
    email,
    password,
    ip,
  });
  await user.save();
  sendLog("DONE", `new user (${rgscId} | ${name})`);
};

const loadUser = async (player) => {
  const { rgscId } = player;
  const user = await User.findOne({ rgscId });

  if (user.ban) {
    player.notify("You are banned");
    setTimeout(() => {
      player.kick("Banned");
    }, 3000);
  }
  player.setVariable("user", user);
  sendLog("DONE", `loaded user (${rgscId} | ${user.name})`);
};

const saveUser = async (player) => {
  const { rgscId } = player;
  const data = player.getVariable("user");
  await User.findOneAndUpdate({ rgscId }, data);
  sendLog("DONE", `saved user (${rgscId} | ${data.name})`);
};

module.exports = {
  isUserRegistered,
  isPasswordValid,
  createUser,
  loadUser,
  saveUser,
};
