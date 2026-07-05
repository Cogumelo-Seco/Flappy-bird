export default (Game) => {
    return {
        'scenery': {
            startFrame: 0,
            endFrame: 100,
            frame: 0,
            delay: 0,
            totalDelay: 1000/25,
            loop: true
        },
        'player': {
            startFrame: 0,
            endFrame: 2,
            frame: 0,
            delay: 0,
            totalDelay: 1000/25,
            boomerang: true
        },
        'nyan': {
            startFrame: 0,
            endFrame: 5,
            frame: 0,
            delay: 0,
            totalDelay: 1000/25,
            loop: true
        }
    }
}