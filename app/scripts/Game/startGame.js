export default async (Game) => {
    Game.playerData = JSON.parse(JSON.stringify(Game.defaultPlayerData))
    Game.playerData.lastTime = +new Date()
    Game.obstacles = []
    Game.score = 0
    Game.gameStage = 'game'
}