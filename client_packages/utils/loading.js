const loadingBar = ({ text = "undefined", duration = 5000 }) => {
  mp.game.ui.setLoadingPromptTextEntry("STRING");
  mp.game.ui.addTextComponentSubstringPlayerName(text);
  mp.game.ui.showLoadingPrompt(1);

  setTimeout(() => {
    mp.game.invoke("0x10D373323E5B9C0D"); //stop after 15s
  }, duration);
};

exports = {
  loadingBar,
};
