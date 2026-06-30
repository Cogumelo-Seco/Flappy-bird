export default async(Render, event) => {
    let playerAnimationFrame = Render.gameState.animations['player'].frame
    let playerImageData = Render.gameState.images['imgs/birds/default/bird.png']

    let playerSize = 50
    let playerX = Render.canvas.width*0.25
    let playerY = (Render.groundY-(playerSize*1.5))*(1-Render.gameState.playerData.heightPercent/100)+playerSize

    let playerRotation = 0
    if (Render.gameState.playerData.velocityY < 0) playerRotation = -(Render.gameState.playerData.velocityY/Render.gameState.playerData.jumpForce*45)
    if (Render.gameState.playerData.velocityY > (Render.gameState.playerData.jumpForce/2)*-1) 
        playerRotation = (Render.gameState.playerData.velocityY-((Render.gameState.playerData.jumpForce/2)*-1))/Render.gameState.playerData.velocityY*90

    Render.ctx.save(); 
    Render.ctx.translate(playerX-playerSize/2, playerY);
    Render.ctx.rotate((playerRotation * Math.PI) / 180);
    
    Render.ctx.drawImage(
        playerImageData.image,
        playerImageData.animationConfig[playerAnimationFrame].x,
        playerImageData.animationConfig[playerAnimationFrame].y,
        playerImageData.animationConfig[playerAnimationFrame].width,
        playerImageData.animationConfig[playerAnimationFrame].height,
        -Math.floor(playerSize*(1.28))/2, -playerSize/2,
        Math.floor(playerSize*(1.28)),
        playerSize
    )
    
    Render.ctx.restore();
}