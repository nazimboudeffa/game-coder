const fs = require('fs')

const state = require('./state')
const splash = require('./splash')

function project() {

  this.states = []
  this.state = new state()
  this.index = 0

  this.start = function() {
    if (this.states.length === 0) {
      editor.project.states.push(new splash())
      //editor.go.to_state(0)
      editor.update()
    }
  }

  this.load = function (path) {
      console.log(`Load: ${path}`)
  
      let data
      try {
        data = fs.readFileSync(path, 'utf-8')
      } catch (err) {
        console.warn(`Could not load ${path}`)
        return
      }
      return data
  }

  this.update = function () {
    this.state.commit(editor.codearea.value)
  }
}

module.exports = project; 