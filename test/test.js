import assert from 'assert'
import searchTextHl from '../src/main'

describe('Test search text highlight', () => {
  it('should highlight one query substring', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const result = searchTextHl.highlight(text, query)
    assert.equal(result, 'This is a simple but an <span class="text-highlight">amazing</span> tool for text highlight 😎.')
  })

  it('should highlight multiple query substrings', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'a'
    const result = searchTextHl.highlight(text, query)
    assert.equal(result, 'This is <span class="text-highlight">a</span> simple but <span class="text-highlight">a</span>n <span class="text-highlight">a</span>m<span class="text-highlight">a</span>zing tool for text highlight 😎.')
  })

  it('should highlight an unicode substring', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = '😎'
    const result = searchTextHl.highlight(text, query)
    assert.equal(result, 'This is a simple but an amazing tool for text highlight <span class="text-highlight">😎</span>.')
  })

  it('should do nothing with empty queries', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = ''
    const result = searchTextHl.highlight(text, query)
    assert.equal(result, text)
  })

  it('should be able to replace the default HTML tag', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const htmlTag = 'label'
    const result = searchTextHl.highlight(text, query, htmlTag)
    assert.equal(result, 'This is a simple but an <label class="text-highlight">amazing</label> tool for text highlight 😎.')
  })

  it('should be able to replace the default highlight class', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const htmlTag = 'label'
    const hlClass = 'custom-class'
    const result = searchTextHl.highlight(text, query, htmlTag, hlClass)
    assert.equal(result, 'This is a simple but an <label class="custom-class">amazing</label> tool for text highlight 😎.')
  })

  it('should be able to highlight only the first query match', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'a'
    const htmlTag = 'span'
    const hlClass = 'text-highlight'
    const matchAll = false
    const result = searchTextHl.highlight(text, query, htmlTag, hlClass, matchAll)
    assert.equal(result, 'This is <span class="text-highlight">a</span> simple but an amazing tool for text highlight 😎.')
  })

  it('should throw error with not the right type parameter', () => {
    let text = 42
    assert.throws(() => {
      searchTextHl.highlight(text)
    }, Error)

    text = true
    assert.throws(() => {
      searchTextHl.highlight(text)
    }, Error)

    text = 'This is a simple but an amazing tool for text highlight 😎.'
    let query = 5
    assert.throws(() => {
      searchTextHl.highlight(text, query)
    }, Error)

    query = true
    assert.throws(() => {
      searchTextHl.highlight(text, query)
    }, Error)

    query = 'amazing'
    let htmlTag = 563
    assert.throws(() => {
      searchTextHl.highlight(text, query, htmlTag)
    }, Error)

    htmlTag = false
    assert.throws(() => {
      searchTextHl.highlight(text, query, htmlTag)
    }, Error)

    htmlTag = 'label'
    let hlClass = 50.0
    assert.throws(() => {
      searchTextHl.highlight(text, query, htmlTag, hlClass)
    }, Error)

    hlClass = true
    let matchAll = 'true'
    assert.throws(() => {
      searchTextHl.highlight(text, query, htmlTag, hlClass, matchAll)
    }, Error)

    matchAll = 1
    assert.throws(() => {
      searchTextHl.highlight(text, query, htmlTag, hlClass, matchAll)
    }, Error)
  })
})