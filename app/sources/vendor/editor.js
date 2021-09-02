const project = require('./scripts/project')
const go = require('./scripts/go')

function editor (){

    this.project = new project()

    this.ul = document.createElement('ul')
    this.codearea = document.createElement('textarea')

    this.install = function (host = document.body){
        
        var li = document.createElement('li')
        var itemText = document.createTextNode('game asset')
        li.appendChild(itemText)
        this.ul.appendChild(li)

        var newProject = document.createElement('button')
        var newProjectName = document.createTextNode('new')
        newProject.appendChild(newProjectName)

        var runProject = document.createElement('button')
        var runProjectName = document.createTextNode('run')
        runProject.appendChild(runProjectName)

        host.appendChild(newProject)
        host.appendChild(runProject)
        host.appendChild(this.ul)
        host.appendChild(this.codearea)
    }

    this.start = function (){
        this.project.start()
    }

    this.update = function (){
        this.project.update()
    }
}

module.exports = editor; 