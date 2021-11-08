const fixPosition = (position) => {
    const safeZoneValue = mp.game.graphics.getSafeZoneSize();
    let positionX = position[0] - (1.0 - safeZoneValue) * 0.5;
    let positionY = position[1] + (1.0 - safeZoneValue) * 0.5;
    return [positionX, positionY];
};

exports = {
    fixPosition
}