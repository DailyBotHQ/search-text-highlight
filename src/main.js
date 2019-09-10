/**
 * Parse text with emoji support
 * @return {string}
 */
const searchTextHighligh = {
  validateParams(text, query, htmlTag, highlightClass, matchAll) {
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.');
    }
    if (typeof query !== 'string') {
      throw new Error('The query parameter should be a string.');
    }
    if (typeof htmlTag !== 'string') {
      throw new Error('The htmlTag parameter should be a string.');
    }
    if (typeof highlightClass !== 'string') {
      throw new Error('The highlightClass parameter should be a string.');
    }
    if (typeof matchAll !== 'boolean') {
      throw new Error('The matchAll parameter should be a boolean.');
    }
  },
  highlight(text='', query='', htmlTag='span', highlightClass='text-highlight', matchAll=true) {
    this.validateParams(text, query, htmlTag, highlightClass, matchAll)

    if (!query) {
      return text
    }

    htmlTag = htmlTag? htmlTag: 'span'
    highlightClass = highlightClass? highlightClass: 'text-highlight'

    const modifiers = matchAll? 'g': ''
    return text.replace(new RegExp(query, modifiers), match => {
        return `<${htmlTag} class="${highlightClass}">${match}</${htmlTag}>`
    })
  }
}

module.exports = searchTextHighligh