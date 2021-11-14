const Character = require("../../../../models/Character.js");

const { sendLog } = require("../../../../utils/log.js");

const createIdCard = (player, sex) => {
  const { rgscId } = player;

  const rgscIdCut = rgscId.toString().slice(0, 3);
  const randomNumber = Math.floor(Math.random() * (90000 - 10000) + 10000);

  return `${sex}${randomNumber}${Number(rgscIdCut)}`; //return example M59000223
};

const createCharacter = async (player, firstName, lastName, date, sex) => {
  const { rgscId } = player;
  const idCard = createIdCard(player, sex);
  const character = new Character({
    rgscId,
    identification: {
      idCard,
      firstName,
      lastName,
      date,
      sex,
    },
  });
  await character.save();
  sendLog("DONE", `new user (${rgscId} | ${firstName} | ${idCard})`);
};

const loadCharacter = async (player, id) => {
  const { rgscId } = player;
  const characters = await Character.find({ rgscId });
  const character = characters[id];
  player.setVariable("character", character);
  sendLog(
    "DONE",
    `loaded character (${rgscId} | ${data.identification.idCard})`
  );
  return character;
};

const saveCharacter = async (player) => {
  const { rgscId } = player;
  const data = player.getVariable("character");
  await Character.findOneAndUpdate(
    { rgscId, identification: { idCard: data.identification.idCard } },
    data
  );
  sendLog(
    "DONE",
    `saved character (${rgscId} | ${data.identification.idCard})`
  );
};

module.exports = {
  createCharacter,
  loadCharacter,
  saveCharacter,
};
