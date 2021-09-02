function go () {
    this.to_state = function (id=0){
        const page = editor.project.state()
        editor.load(state.text)
        editor.update()
    }
}

module.exports = go