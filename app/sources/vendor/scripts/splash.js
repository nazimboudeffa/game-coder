const page = require('./page')

function splash () {
    page.call(this,`
    function preload() {
    }
    
    function create() {
    }
    
    function update() {
    }`)

  this.name = function () {
    return 'Splash'
  }

}

module.exports = splash