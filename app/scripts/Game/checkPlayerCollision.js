export default async (Game) => {
    let playerData = Game.playerData
    for (let obstacle of Game.obstacles) {
        if (
            obstacle.widthPercent <= playerData.widthPercent &&
            obstacle.widthPercent+(obstacle.size/Game.renderState.canvas.width*100) >= playerData.widthPercent-(playerData.size/Game.renderState.canvas.width*100) &&
            !(
                playerData.heightPercent <= obstacle.heightPercent+(obstacle.gap/Game.renderState.groundY*100) &&
                playerData.heightPercent >= obstacle.heightPercent-(obstacle.gap/Game.renderState.groundY*100)+(playerData.size/Game.renderState.canvas.width*100)
            )
        ) {
            Game.gameStage = 'menu'
            Game.playerData = JSON.parse(JSON.stringify(Game.defaultPlayerData))
            Game.obstacles = []
        }
    }

    if (playerData.heightPercent <= 0) {
        Game.gameStage = 'menu'
        Game.playerData = JSON.parse(JSON.stringify(Game.defaultPlayerData))
        Game.obstacles = []
    }
}