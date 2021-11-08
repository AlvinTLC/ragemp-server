const sendNotify = ({ text = "Text:not defined" }) => {
  mp.game.graphics.notify(text);
};

const sendImageNotify = ({
  texture = "CHAR_BLANK_ENTRY",
  icon = 2,
  title = "Title: not defined",
  subject = "Subject: not defined",
  withDescription = false,
  description = "Description: not defined",
}) => {
  mp.game.ui.setNotificationTextEntry("STRING");
  mp.game.ui.setNotificationMessage(
    texture,
    texture,
    false,
    icon,
    title,
    subject
  );
  if (withDescription) {
    mp.game.ui.addTextComponentSubstringWebsite(description);
    mp.game.ui.drawNotification(true, true);
  }
};

const sendHelpNotify = ({ text = "Text:not defined", sound = false }) => {
  mp.game.ui.setTextComponentFormat("STRING");
  mp.game.ui.addTextComponentSubstringPlayerName(text);
  mp.game.ui.displayHelpTextFromStringLabel(0, false, sound, 1000);
};

exports = {
  sendNotify,
  sendImageNotify,
  sendHelpNotify,
};
