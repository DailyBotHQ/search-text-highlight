import assert from 'assert'
import searchTextHighlight from '../src/main'

describe('Test search text highlight', () => {
  it('should highlight one query substring', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const result = searchTextHighlight.highlight(text, query)
    assert.equal(result, 'This is a simple but an <span class="text-highlight">amazing</span> tool for text highlight 😎.')
  })

  it('should highlight multiple query substrings', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'a'
    const result = searchTextHighlight.highlight(text, query)
    assert.equal(result, 'This is <span class="text-highlight">a</span> simple but <span class="text-highlight">a</span>n <span class="text-highlight">a</span>m<span class="text-highlight">a</span>zing tool for text highlight 😎.')
  })

  it('should highlight an unicode substring', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = '😎'
    const result = searchTextHighlight.highlight(text, query)
    assert.equal(result, 'This is a simple but an amazing tool for text highlight <span class="text-highlight">😎</span>.')
  })

  it('should do nothing with empty queries', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = ''
    const result = searchTextHighlight.highlight(text, query)
    assert.equal(result, text)
  })

  it('should be able to replace the default HTML tag', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const htmlTag = 'label'
    const result = searchTextHighlight.highlight(text, query, htmlTag)
    assert.equal(result, 'This is a simple but an <label class="text-highlight">amazing</label> tool for text highlight 😎.')
  })

  it('should be able to replace the default highlight class', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const htmlTag = 'label'
    const highlightClass = 'custom-class'
    const result = searchTextHighlight.highlight(text, query, htmlTag, highlightClass)
    assert.equal(result, 'This is a simple but an <label class="custom-class">amazing</label> tool for text highlight 😎.')
  })

  it('should be able to highlight only the first query match', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'a'
    const htmlTag = 'span'
    const highlightClass = 'text-highlight'
    const matchAll = false
    const result = searchTextHighlight.highlight(text, query, htmlTag, highlightClass, matchAll)
    assert.equal(result, 'This is <span class="text-highlight">a</span> simple but an amazing tool for text highlight 😎.')
  })

  it('should throw error with not the right type parameter', () => {
    let text = 42
    assert.throws(() => {
      searchTextHighlight.highlight(text)
    }, Error)

    text = true
    assert.throws(() => {
      searchTextHighlight.highlight(text)
    }, Error)

    text = 'This is a simple but an amazing tool for text highlight 😎.'
    let query = 5
    assert.throws(() => {
      searchTextHighlight.highlight(text, query)
    }, Error)

    query = true
    assert.throws(() => {
      searchTextHighlight.highlight(text, query)
    }, Error)

    query = 'amazing'
    let htmlTag = 563
    assert.throws(() => {
      searchTextHighlight.highlight(text, query, htmlTag)
    }, Error)

    htmlTag = false
    assert.throws(() => {
      searchTextHighlight.highlight(text, query, htmlTag)
    }, Error)

    htmlTag = 'label'
    let highlightClass = 50.0
    assert.throws(() => {
      searchTextHighlight.highlight(text, query, htmlTag, highlightClass)
    }, Error)

    highlightClass = true
    let matchAll = 'true'
    assert.throws(() => {
      searchTextHighlight.highlight(text, query, htmlTag, highlightClass, matchAll)
    }, Error)

    matchAll = 1
    assert.throws(() => {
      searchTextHighlight.highlight(text, query, htmlTag, highlightClass, matchAll)
    }, Error)
  })
})