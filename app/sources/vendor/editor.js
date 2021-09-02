const project = require('./scripts/project')
const go = require('./scripts/go')

function editor (){

    this.project = new project()

    this.install = function (host = document.body){

        this.explorer = document.createElement('ul')
        this.explorer.setAttribute('id', 'explorer')
        this.vision = document.createElement('div')
        this.vision.setAttribute('id', 'vision')
        this.codearea = document.createElement('textarea')
        this.codearea.setAttribute('id', 'codearea')
        this.asset = document.createElement('ul')
        this.asset.setAttribute('id', 'asset')
        this.gamescript = document.createElement('script')

        var wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'wrapper');

        var newProject = document.createElement('button')
        var newProjectName = document.createTextNode('new')
        newProject.appendChild(newProjectName)

        var runProject = document.createElement('a')
        var runProjectName = document.createTextNode('run')
        runProject.setAttribute('href','run.html')
        runProject.setAttribute('target', '_blank')
        runProject.appendChild(runProjectName)

        var li = document.createElement('li')
        var itemText = document.createTextNode('game assets')
        li.appendChild(itemText)
        this.explorer.appendChild(li)

        var li = document.createElement('li')
        var itemText = document.createTextNode('asset')
        li.appendChild(itemText)
        this.asset.appendChild(li)

        wrapper.appendChild(this.explorer)
        wrapper.appendChild(this.vision)
        //wrapper.appendChild(this.codearea)
        wrapper.appendChild(this.asset)

        host.appendChild(newProject)
        host.appendChild(runProject)
        host.appendChild(wrapper)
    }

    this.start = function (){
        this.project.start()
    }

    this.update = function (){
        this.project.update()
    }
}

module.exports = editor; 