function page (text = '', path = null) {
    this.text = text.replace(/\r?\n/g, '\n')
    this.path = path
  
    this.name = function () {
      if (!this.path) { return 'Untitled' }
  
      const parts = this.path.replace(/\\/g, '/').split('/')
      return parts[parts.length - 1]
    }

    this.commit = function (text = left.textarea_el.value) {
        this.text = text
    }
}

module.exports = page