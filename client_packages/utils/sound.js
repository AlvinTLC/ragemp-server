const SOUNDS_TYPES = {
  ERROR: {
    name: "ERROR",
    setName: "HUD_AMMO_SHOP_SOUNDSET",
  },
};

const playAudio = (name, setName, instant) =>
  mp.game.audio.playSoundFrontend(-1, name, setName, instant);

const playSound = (type) => {
  const sound = SOUNDS_TYPES[type];
  playAudio(sound.name, sound.setName, true);
};

const playCustomSound = (name, setName) => {
  playAudio(name, setName, true);
};

exports = {
  playSound,
  playCustomSound,
};
