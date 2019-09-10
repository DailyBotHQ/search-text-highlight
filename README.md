# Search text hihglight

This tool allow find a string or substring from a text and highlight it with html wrapper with unicode support.

---

[![Build Status](https://travis-ci.org/RockaLabs/search-text-highlight.svg?branch=master)](https://travis-ci.org/RockaLabs/search-text-highlight)
[![dependencies Status](https://david-dm.org/RockaLabs/search-text-highlight/status.svg)](https://david-dm.org/RockaLabs/search-text-highlight)
[![total downloads](https://img.shields.io/npm/dt/search-text-highlight.svg)](https://www.npmjs.com/package/search-text-highlight)



## Installation

```
npm install search-text-highlight --save

or

yarn add search-text-highlight
```

## Usage

Import
```javascript
> import searchTextHl from 'search-text-highlight'
```

Basic usage.
```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> searchTextHl.highlight(text, query)
This is a simple but an <span class="text-highlight">amazing</span> tool for text highlight 😎.
```

Highlight multiple match substrings.
```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'a'
> searchTextHl.highlight(text, query)
This is <span class="text-highlight">a</span> simple but <span class="text-highlight">a</span>n <span class="text-highlight">a</span>m<span class="text-highlight">a</span>zing tool for text highlight 😎.
```

Customize html tag; the default is a `span`.
```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> const htmlTag = 'label'
> searchTextHl.highlight(text, query, htmlTag)
This is a simple but an <label class="text-highlight">amazing</label> tool for text highlight 😎.
```

Customize highlight class.
```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> const htmlTag = 'label'
> const hlClass = 'custom-class'
> searchTextHl.highlight(text, query, htmlTag, hlClass)
This is a simple but an <label class="custom-class">amazing</label> tool for text highlight 😎.
```

Highlight only the first query match.
```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> const htmlTag = 'label'
> const hlClass = 'custom-class'
> const matchAll = false
> searchTextHl.highlight(text, query, htmlTag, hlClass, matchAll)
This is <label class="custom-class">a</label> simple but an amazing tool for text highlight 😎.
```


## All value params for `highlight` method

text, query, htmlTag, hlClass

| Name           | Type    | Default            | Description                                                      |
| :------------- | :------ | :----------------- | :--------------------------------------------------------------- |
| text           | string  | ''                 | base message                                                     |
| query          | string  | ''                 | substring for highlight in message                               |
| htmlTag        | string  | 'span'             | custom highlight HTML Tag wrapper                                |
| hlClass        | string  | 'text-highlight'   | custom highlight class                                           |
| matchAll       | boolean | true               | match all instances of the query in text message, not just one   |



## :electric_plug: Powered by [RockaLabs](https://rocka.co/)

## License

Search text highlight is [MIT licensed](./LICENSE).
