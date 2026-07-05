export default async(Render, event) => {
    for (let obstacle of Render.gameState.obstacles) {
        let obstacleX = Render.canvas.width*(obstacle.widthPercent/100)
        let obstacleY = Render.groundY*(1-obstacle.heightPercent/100)
        Render.canvas.height*(obstacle.heightPercent/100)

        let tubeImageData = Render.gameState.images[`imgs/scenery/${Render.gameState.gameStyle}/tubes.png`]

        Render.ctx.drawImage(
            tubeImageData.image,
            tubeImageData.animationConfig[1].x,
            tubeImageData.animationConfig[1].y,
            tubeImageData.animationConfig[1].width,
            tubeImageData.animationConfig[1].height,
            obstacleX,
            obstacleY-Render.canvas.height-obstacle.gap,
            obstacle.size, 
            Render.canvas.height
        )

        Render.ctx.drawImage(
            tubeImageData.image,
            tubeImageData.animationConfig[0].x,
            tubeImageData.animationConfig[0].y,
            tubeImageData.animationConfig[0].width,
            tubeImageData.animationConfig[0].height,
            obstacleX,
            obstacleY+obstacle.gap,
            obstacle.size, 
            Render.canvas.height
        )

        /* Render.ctx.fillStyle = 'red'
        Render.ctx.fillRect(obstacleX, obstacleY-Render.canvas.height-obstacle.gap, obstacle.size, Render.canvas.height)

        Render.ctx.fillStyle = 'red'
        Render.ctx.fillRect(obstacleX, obstacleY+obstacle.gap, obstacle.size, Render.canvas.height) */
    }
}