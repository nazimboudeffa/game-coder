const page = require('./page')

function splash () {
    page.call(this,`
        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        function preload() {
        }
        
        function create() {
        }
        
        function update() {
        }
    `)

  this.name = function () {
    return 'Splash'
  }

}

module.exports = splash