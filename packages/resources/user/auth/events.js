const {
  isUserRegistered,
  isPasswordValid,
  createUser,
  loadUser,
  saveUser,
} = require("./controller.js");
const DATABASE = require("../../../config/database.js");

mp.events.add(
  "packages/resources/user/auth/events//register",
  async (player, email, password) => {
    const isUserExists = await isUserRegistered(player, email);

    if (isUserExists) {
      player.notify("This account already exists");
    } else {
      await createUser(player, email, password);
      player.notify("Created account : " + email + " | now /login");
    }
  }
);

mp.events.add(
  "packages/resources/user/auth/events//login",
  async (player, email, password) => {
    const isUserExists = await isUserRegistered(player, email);

    if (!isUserExists) {
      player.notify("This account not exists");
    } else {
      const isPasswordRight = await isPasswordValid(player, email, password);
      if (!isPasswordRight) {
        player.notify("Invalid password");
      } else {
        await loadUser(player);
        player.notify("Logged");
      }
    }
  }
);

mp.events.add("playerQuit", async (player) => {
  const isLogged = player.getVariable("user").name ? true : false;
  if (isLogged) {
    await saveUser(player);
  }
});

mp.events.add("serverShutdown", async () => {
  mp.events.delayShutdown = true;
  mp.players.forEach(async (player) => {
    if (player.getVariable("user")) {
      await saveUser(player);
    }
  });
  mp.events.delayShutdown = false;
});

setInterval(() => {
  mp.players.forEach(async (player) => {
    if (player.getVariable("user")) {
      await saveUser(player);
    }
  });
}, DATABASE.AUTO_SAVE_INTERVAL);
