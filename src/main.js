import Utils from './utils'

const searchTextHl = {
  highlight(text='', query='', options={}) {
    Utils.validate.highlight(text, query, options)

    options = Utils.getOptions(options)

    if (!query) {
      return text
    }

    let modifiers = options.matchAll? 'g': ''
    modifiers += options.caseSensitive? '': 'i'
    return text.replace(new RegExp(query, modifiers), match => {
        return `<${options.htmlTag} class="${options.hlClass}">${match}</${options.htmlTag}>`
    })
  }
}

module.exports = searchTextHl