export default async (Game) => {
    if (Game.playerData) {
        let dt = (+new Date() - Game.playerData.lastTime) / 100;
        Game.playerData.lastTime = +new Date();

        Game.playerData.velocityY += Game.playerData.gravity*dt;
        Game.playerData.heightPercent += -(Game.playerData.velocityY*dt);

        if (Game.playerData.heightPercent < 0) {
            Game.playerData.heightPercent = 0;
            Game.playerData.velocityY = 0;
        }
    }
}