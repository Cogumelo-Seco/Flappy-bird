export class RenderClass {
    constructor() {
        this.canvas = document.getElementById('gameCanvas')
        this.ctx = this.canvas.getContext('2d')
        
        this.rainbowColor = 0
        this.fps = '0-0',
        this.fpsDisplay = 0

        this.scale = 0

        let functions = require('./functions').default(this.ctx, this.canvas, this)
        for (let i in functions) this[i] = functions[i]
        
        this.RenderScenery = (event) => require('./RenderScenery.js').default(this, event)
        this.RenderPlayer = (event) => require('./RenderPlayer.js').default(this, event)

        this.loop()
    }

    loop() {
        if (+new Date()-this.fps.split('-')[1] > 1000) {
            this.fpsDisplay = this.fps.split('-')[0]
            this.fps = `0-${+new Date()}`
        }
        this.fps = `${Number(this.fps.split('-')[0]) + 1}-${this.fps.split('-')[1]}`

        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.scale = (window.innerWidth+window.innerHeight)/2

        if (this.gameState && this.gameState.loading.loadComplete) {
            this.RenderScenery()
            this.RenderPlayer()
        }

        window.requestAnimationFrame(() => this.loop())
        //setTimeout(() => this.loop(), 1000/10)
    }
}