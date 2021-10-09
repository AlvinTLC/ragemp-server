const hasPermission = (player, permission) => (player.getVariable("permissions") === permission);

module.exports = {
    hasPermission
};
