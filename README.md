# Search Text Highlight

This tool allow find a string or substring from a text and highlight it with html wrapper and unicode support.

---

[![Code Check && Release](https://github.com/DailyBotHQ/search-text-highlight/actions/workflows/release_and_publish.yml/badge.svg?branch=main)](https://github.com/DailyBotHQ/search-text-highlight/actions/workflows/release_and_publish.yml)
[![GitHub license](https://img.shields.io/github/license/DailyBotHQ/search-text-highlight)](https://github.com/DailyBotHQ/search-text-highlight/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/DailyBotHQ/search-text-highlight)](https://github.com/DailyBotHQ/search-text-highlight)
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
> import searchTextHL from 'search-text-highlight'
```

Basic usage

```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> searchTextHL.highlight(text, query)
This is a simple but an <span class="text-highlight">amazing</span> tool for text highlight 😎.
```

Highlight multiple match substrings.

```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'a'
> searchTextHL.highlight(text, query)
This is <span class="text-highlight">a</span> simple but <span class="text-highlight">a</span>n <span class="text-highlight">a</span>m<span class="text-highlight">a</span>zing tool for text highlight 😎.
```

Customize html tag; the default is a `span`.

```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> const options = { htmlTag: 'label' }
> searchTextHL.highlight(text, query, options)
This is a simple but an <label class="text-highlight">amazing</label> tool for text highlight 😎.
```

Customize highlight class.

```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'amazing'
> const options = { htmlTag: 'label', hlClass: 'custom-class' }
> searchTextHL.highlight(text, query, options)
This is a simple but an <label class="custom-class">amazing</label> tool for text highlight 😎.
```

Highlight only the first query match.

```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'a'
> const options = { htmlTag: 'label', hlClass: 'custom-class', matchAll: false }
> searchTextHL.highlight(text, query, options)
This is <label class="custom-class">a</label> simple but an amazing tool for text highlight 😎.
```

Highlight with a case sensitive query

```javascript
> const text = 'This is a simple but an amazing tool for text highlight 😎.'
> const query = 'AMAZING'
> const options = { caseSensitive: true }
> searchTextHL.highlight(text, query, options)
This is a simple but an amazing tool for text highlight 😎.
```

## All value params for `highlight` method

| Name    | Type   | Default | Description                           |
| :------ | :----- | :------ | :------------------------------------ |
| text    | string | ''      | base message                          |
| query   | string | ''      | substring for highlight in message    |
| options | object | {}      | parameterizable options for highlight |

### All properties of highlight `options`

| Name          | Type    | Default          | Description                                                                            |
| :------------ | :------ | :--------------- | :------------------------------------------------------------------------------------- |
| htmlTag       | string  | 'span'           | custom highlight HTML Tag wrapper                                                      |
| hlClass       | string  | 'text-highlight' | custom highlight class                                                                 |
| matchAll      | boolean | true             | match all instances of the query in text message, not just one                         |
| caseSensitive | boolean | false            | match query text distinguish between uppercase (capital) and lowercase (small) letters |

### Css Styles

Use these css styles in your html code to highlight the found text.

```css
:root {
  --light-blue-color: #b1d9ff;
  --dark-blue-color: #508fca;
}

.text-highlight {
  background: var(--light-blue-color);
  border-radius: 2px;
  padding: 0 2px;
  border: 1px solid var(--dark-blue-color);
}
```

## :electric_plug: Powered by [DailyBot](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=search-text-highlight)

DailyBot is an [AI Assistant](https://www.dailybot.com/product/ai) powered by ChatGPT that takes chat and collaboration to the next level helping to automate: daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, chatops and more. [Learn more](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser).

## License

Search text highlight is [MIT licensed](./LICENSE).
