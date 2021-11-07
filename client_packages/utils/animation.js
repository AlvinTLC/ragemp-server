const requestClipSet = (clipSetName) => {
  mp.game.streaming.requestClipSet(clipSetName);
  while (!mp.game.streaming.hasClipSetLoaded(clipSetName)) mp.game.wait(0);
};

exports = { requestClipSet };
