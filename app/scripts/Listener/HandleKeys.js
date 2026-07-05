export default async(Listener, { event, on }) => {
    let keys = {
        /*KeyUp: state.game?.state.smallFunctions.getConfig('KeyUp'),
        KeyDown: state.game?.state.smallFunctions.getConfig('KeyDown'),
        KeyLeft: state.game?.state.smallFunctions.getConfig('KeyLeft'),
        KeyRight: state.game?.state.smallFunctions.getConfig('KeyRight'),
        KeyEnter: state.game?.state.smallFunctions.getConfig('KeyEnter'),
        KeyExit: state.game?.state.smallFunctions.getConfig('KeyExit')*/
    }

    let keyPressed = event.code
    let lastClick = Listener.keys[keyPressed]
    let hold = !Listener.keys[keyPressed] || +new Date()-Listener.keys[keyPressed]?.time <= 1000/15
    Listener.keys[keyPressed] = {
        key: event.key || '',
        code: keyPressed || '',
        hold,
        clicked: on,
        time: +new Date(),
        lastClickTime: lastClick?.time || null
    }
    let keyInfo = Listener.keys[keyPressed]

    

    if (/[0-9]/g.test(event.key)) {
        if (event.key == '1') Listener.gameState.gameStyle = 'nyan'
        if (event.key == '2') Listener.gameState.gameStyle = 'guto'
        if (event.key == '3') Listener.gameState.gameStyle = 'dark'
        if (event.key == '4') Listener.gameState.gameStyle = 'default'
    } else {
        if ((event.type == 'keyup' || keyPressed == 'MouseClick') && Listener.gameState.gameStage == 'game' && !hold && Listener.gameState.playerData.heightPercent < 100) Listener.gameState.playerData.velocityY = Listener.gameState.playerData.jumpForce;

        if ((event.type == 'keyup' || keyPressed == 'MouseClick') && Listener.gameState.gameStage == 'menu') {
            Listener.gameState.startGame()
        }
    }
}