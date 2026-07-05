export default async(Render, event) => {
    
    let screenElements = document.getElementById('screenElements')
    let notUpdate = screenElements && !screenElements.getElementsByClassName('gameInfoElement')[0]
    try {
        let gameInfoElement = screenElements.getElementsByClassName('gameInfoElement')[0] || document.createElement('div')
        
        if (notUpdate) screenElements.innerHTML = ''
        gameInfoElement.className = 'gameInfoElement stage'

        let gameStyle = document.getElementById('gameStyle') || document.createElement('style')
        gameStyle.id = 'gameStyle'
        gameStyle.innerHTML = `
            #score {
                position: absolute;
                left: 0;
                top: 20%;
                width: 100%;
                color: white;
                font-size: 3vw;
                text-align: center;
                font-family: 'fbfont2', sans-serif;
                -webkit-text-stroke: 2px black;
            }
        `
        if (notUpdate) gameInfoElement.appendChild(gameStyle)

        let score = document.getElementById('score') || document.createElement('h1')
        score.id = 'score'
        score.innerHTML = Render.gameState.score
        if (notUpdate) gameInfoElement.appendChild(score)

        if (notUpdate) screenElements.appendChild(gameInfoElement)
    } catch (err) { console.error(err) }
}