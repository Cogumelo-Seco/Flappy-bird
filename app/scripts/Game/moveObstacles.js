export default async (Game) => {
    for (let i in Game.obstacles) {
        let obstacle = Game.obstacles[i]
        obstacle.widthPercent -= Game.obstaclesSpeed

        if (obstacle.widthPercent+(obstacle.size/Game.renderState.canvas.width*100) <= Game.playerData.widthPercent && !obstacle.scored) {
            Game.score += 1
            if (Game.highestScore < Game.score) Game.highestScore = Game.score
            obstacle.scored = true
        }
        if (obstacle.widthPercent <= -100) Game.obstacles.splice(i, 1)
    }
}