export class GameClass {
    constructor() {
        this.gameStage = 'game',

        this.animations = require('./addAnimations.js').default(this)

        this.sounds = require('./addSounds.js').default(this)
        this.images = require('./addImages.js').default(this)

        this.playerData = {
            heightPercent: 75,
            velocityY: 0,
            gravity: 0.8,
            jumpForce: -5,
            lastTime: +new Date()
        }

        this.loading = {
            total: 0,
            loaded: 0,
            msg: '',
            loadComplete: false
        }

        require('./Loading.js').default(this)

        this.PlaySong = (...event) => require('./PlaySong.js').default(this, ...event)
        this.PlayerMoveAndCollision = (event) => require('./PlayerMoveAndCollision.js').default(this, event)
        this.GameLoop = require('./GameLoop.js').default(this)
        this.AnimationSystem = require('./AnimationSystem.js').default(this)
        this.Start = (...event) => require('./Start.js').default(this, ...event)
    }
}