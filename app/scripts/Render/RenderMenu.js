export default async(Render, event) => {
    
    let screenElements = document.getElementById('screenElements')
    let notUpdate = screenElements && !screenElements.getElementsByClassName('menuElement')[0]
    try {
        let menuElement = screenElements.getElementsByClassName('menuElement')[0] || document.createElement('div')
        
        if (notUpdate) screenElements.innerHTML = ''
        menuElement.className = 'menuElement stage'

        let menuStyle = document.getElementById('menuStyle') || document.createElement('style')
        menuStyle.id = 'menuStyle'
        menuStyle.innerHTML = `
            #menuTitle {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                color: white;
                font-size: 8vw;
                text-align: center;
                font-family: 'fbfont2', sans-serif;
                -webkit-text-stroke: 2px black;
            }
        
            #highestScore {
                position: absolute;
                left: 0;
                top: 40%;
                width: 100%;
                color: white;
                font-size: 3vw;
                text-align: center;
                font-family: 'fbfont2', sans-serif;
                -webkit-text-stroke: 2px black;
            }

            #skinMessage {
                position: absolute;
                left: 0;
                bottom: 0;
                margin-left: 5px;
                color: white;
                font-size: 14px;
                font-family: 'fbfont2', sans-serif;
                -webkit-text-stroke: 1px black;
            }

            #startMessage {
                position: absolute;
                left: 0;
                top: 60%;
                width: 100%;
                color: white;
                font-size: 3vw;
                text-align: center;
                font-family: 'fbfont2', sans-serif;
                -webkit-text-stroke: 2px black;
                animation: startMesageAnimation 1s infinite ease-in-out;
            }

            @keyframes startMesageAnimation {
                0% { opacity: 1; }
                50% { opacity: 0.1; }
                100% { opacity: 1; }
            }

            @media (max-width: 650px) {
                #menuTitle {
                    font-size: 18vw;
                }
                #highestScore {
                    font-size: 6vw;
                }
                #skinMessage {
                    display: none;
                }
                #startMessage {
                    font-size: 6vw;
                }
            }
        `
        if (notUpdate) menuElement.appendChild(menuStyle)

        let menuTitle = document.getElementById('menuTitle') || document.createElement('h1')
        menuTitle.id = 'menuTitle'
        menuTitle.innerHTML = 'Cogu Flappy Bird'
        if (notUpdate) menuElement.appendChild(menuTitle)

        let highestScore = document.getElementById('highestScore') || document.createElement('h1')
        highestScore.id = 'highestScore'
        highestScore.innerHTML = 'Highest Score: ' + Render.gameState.highestScore
        if (notUpdate) menuElement.appendChild(highestScore)

        let startMessage = document.getElementById('startMessage') || document.createElement('h1')
        startMessage.id = 'startMessage'
        startMessage.innerHTML = 'Press Any Key to Start'
        if (notUpdate) menuElement.appendChild(startMessage)

        let skinMessage = document.getElementById('skinMessage') || document.createElement('h1')
        skinMessage.id = 'skinMessage'
        skinMessage.innerHTML = 'Select the skin using the number keys on the keyboard'
        if (notUpdate) menuElement.appendChild(skinMessage)

        if (notUpdate) screenElements.appendChild(menuElement)
    } catch (err) { console.error(err) }
}