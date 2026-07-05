export default (Game) => {
    return [
        { dir: 'imgs/scenery/default/ground.png', local: true },
        { dir: 'imgs/scenery/default/scenery.png', local: true },
        { dir: 'imgs/scenery/default/tubes.png', animationConfigDir: 'imgs/scenery/default/tubes.json', local: true },
        
        { dir: 'imgs/scenery/dark/ground.png', local: true },
        { dir: 'imgs/scenery/dark/scenery.png', local: true },
        { dir: 'imgs/scenery/dark/tubes.png', animationConfigDir: 'imgs/scenery/dark/tubes.json', local: true },

        { dir: 'imgs/scenery/nyan/ground.png', local: true },
        { dir: 'imgs/scenery/nyan/scenery.png', local: true },
        { dir: 'imgs/scenery/nyan/tubes.png', animationConfigDir: 'imgs/scenery/nyan/tubes.json', local: true },
        
        { dir: 'imgs/scenery/guto/ground.png', local: true },
        { dir: 'imgs/scenery/guto/scenery.png', local: true },
        { dir: 'imgs/scenery/guto/tubes.png', animationConfigDir: 'imgs/scenery/guto/tubes.json', local: true },



        { dir: 'imgs/birds/default/bird.png', animationId: 'player', animationConfigDir: 'imgs/birds/default/bird.json', local: true },
        { dir: 'imgs/birds/dark/bird.png', animationId: 'player', animationConfigDir: 'imgs/birds/dark/bird.json', local: true },
        { dir: 'imgs/birds/nyan/bird.png', animationId: 'nyan', animationConfigDir: 'imgs/birds/nyan/bird.json', local: true },
        { dir: 'imgs/birds/guto/bird.png', animationId: 'player', animationConfigDir: 'imgs/birds/guto/bird.json', local: true }
    ]
}