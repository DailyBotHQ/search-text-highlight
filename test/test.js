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
    const options = { htmlTag: 'label' }
    const result = searchTextHl.highlight(text, query, options)
    assert.equal(result, 'This is a simple but an <label class="text-highlight">amazing</label> tool for text highlight 😎.')
  })

  it('should be able to replace the default highlight class', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'amazing'
    const options = { htmlTag: 'label', hlClass: 'custom-class' }
    const result = searchTextHl.highlight(text, query, options)
    assert.equal(result, 'This is a simple but an <label class="custom-class">amazing</label> tool for text highlight 😎.')
  })

  it('should be able to highlight only the first query match', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'a'
    const options = { matchAll: false }
    const result = searchTextHl.highlight(text, query, options)
    assert.equal(result, 'This is <span class="text-highlight">a</span> simple but an amazing tool for text highlight 😎.')
  })

  it('should be able to highlight witch case sensitve match', () => {
    const text = 'This is a simple but an amazing tool for text highlight 😎.'
    const query = 'Amazing'
    const options = { caseSensitive: true }
    const result = searchTextHl.highlight(text, query, options)
    assert.equal(result, 'This is a simple but an amazing tool for text highlight 😎.')
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

    let options = true
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { htmlTag: 563 }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { htmlTag: false }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { hlClass: 50.0 }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { hlClass: true }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { matchAll: 'true' }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { matchAll: 1 }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { caseSensitive: 42 }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

    options = { caseSensitive: 'false' }
    assert.throws(() => {
      searchTextHl.highlight(text, query, options)
    }, Error)

  })
})