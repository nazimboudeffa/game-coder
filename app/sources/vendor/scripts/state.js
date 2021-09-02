function state (text='', path= null){
    this.text = text
    this.path=path

    this.commit = function (text = editor.codearea.value) {
        this.text = text
    }
}

module.exports = state