const {
  createCharacter,
  loadCharacter,
  saveCharacter,
} = require("./controllers/auth.js");
const DATABASE = require("../../../config/database.js");

mp.events.add(
  "packages/resources/character/auth/events//create",
  async (player, firstName, lastName, date, sex) => {
    await createCharacter(player, firstName, lastName, date, sex);
    player.notify(
      "Created character : " + firstName + " | now /selectcharacter"
    );
  }
);

mp.events.add(
  "packages/resources/character/auth/events//load",
  async (player, id) => {
    const character = await loadCharacter(player, id);
    player.notify("Loaded character : " + character.identification.firstName);
  }
);

mp.events.add("playerQuit", async (player) => {
  if (player.getVariable("character")) {
    await saveCharacter(player);
  }
});

mp.events.add("serverShutdown", async () => {
  mp.events.delayShutdown = true;
  mp.players.forEach(async (player) => {
    if (player.getVariable("character")) {
      await saveCharacter(player);
    }
  });
  mp.events.delayShutdown = false;
});

setInterval(() => {
  mp.players.forEach(async (player) => {
    if (player.getVariable("character")) {
      await saveCharacter(player);
    }
  });
}, DATABASE.AUTO_SAVE_INTERVAL);
