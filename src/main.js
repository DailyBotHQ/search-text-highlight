/**
 * Parse text with emoji support
 * @return {string}
 */
const searchTextHl = {
  validateParams(text, query, htmlTag, hlClass, matchAll) {
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.');
    }
    if (typeof query !== 'string') {
      throw new Error('The query parameter should be a string.');
    }
    if (typeof htmlTag !== 'string') {
      throw new Error('The htmlTag parameter should be a string.');
    }
    if (typeof hlClass !== 'string') {
      throw new Error('The hlClass parameter should be a string.');
    }
    if (typeof matchAll !== 'boolean') {
      throw new Error('The matchAll parameter should be a boolean.');
    }
  },
  highlight(text='', query='', htmlTag='span', hlClass='text-highlight', matchAll=true) {
    this.validateParams(text, query, htmlTag, hlClass, matchAll)

    if (!query) {
      return text
    }

    htmlTag = htmlTag? htmlTag: 'span'
    hlClass = hlClass? hlClass: 'text-highlight'

    const modifiers = matchAll? 'g': ''
    return text.replace(new RegExp(query, modifiers), match => {
        return `<${htmlTag} class="${hlClass}">${match}</${htmlTag}>`
    })
  }
}

module.exports = searchTextHl