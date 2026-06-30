export default async(Render, event) => {
    let worldScale = 1.9

    let sceneryAnimationFrame = Render.gameState.animations['scenery'].frame

    let sceneryImageData = Render.gameState.images['imgs/scenery/scenery.png']
    let sceneryWidth = sceneryImageData.image.width*worldScale
    let sceneryHeight = sceneryImageData.image.height*worldScale


    let groundImageData = Render.gameState.images['imgs/scenery/ground.png']
    let groundWidth = groundImageData.image.width*worldScale
    let groundHeight = groundImageData.image.height*worldScale
    Render.groundY = Render.canvas.height-(groundHeight*0.7)
    

    for (let x = 0;x <= Render.canvas.width/(sceneryWidth*0.5);x++) {
        Render.ctx.drawImage(
            sceneryImageData.image, 
            sceneryWidth*x-(sceneryWidth*(sceneryAnimationFrame/100)),
            Render.groundY-(sceneryWidth*0.4),
            sceneryWidth,
            sceneryHeight
        )
    }


    for (let x = 0;x <= Render.canvas.width/(groundWidth*0.5);x++) {
        Render.ctx.drawImage(
            groundImageData.image, 
            groundWidth*x-(3*groundWidth*(sceneryAnimationFrame/100)),
            Render.groundY,
            groundWidth, 
            groundHeight
        )
    }

    
}