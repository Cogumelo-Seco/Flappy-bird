export default async function GameLoop(Game) {
    if (!Game.playerData) Game.playerData = JSON.parse(JSON.stringify(Game.defaultPlayerData))

    if (Game.gameStage == 'game') {
        Game.movePlayer()
        Game.moveObstacles()
        Game.spawnObstacles()
        Game.checkPlayerCollision()
    }

    setTimeout(() => GameLoop(Game), 1000/30)
}