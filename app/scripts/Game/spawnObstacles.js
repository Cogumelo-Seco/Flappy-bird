export default async (Game) => {
    if (Game.lastObstacleSpawnedTime+Game.timeToSpawnObstacle <= +new Date()) {
        Game.lastObstacleSpawnedTime = +new Date()

        let randomHeight = Math.floor(Math.random() * 60)+20
        let randomGap = Math.floor(Math.random() * 50)+80

        Game.obstacles.push({
            type: 'tube',
            size: 100,
            heightPercent: randomHeight,
            widthPercent: 100,
            gap: randomGap,
        })
    }
}