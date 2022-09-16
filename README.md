# unicode-rgi-emoji-modifier-sequence

_unicode-rgi-emoji-modifier-sequence_ is the set of Unicode symbols that can serve as a base for emoji modifiers, i.e. those with the `Emoji_Modifier_Base` property.

It’s based on [`emoji-data.txt` v15.0](https://unicode.org/Public/emoji/15.0/emoji-sequences.txt). See [_UTR51: Diversity Implementations_](http://unicode.org/reports/tr51/#Diversity_Implementations) for more information.

## Installation

To use _unicode-rgi-emoji-modifier-sequence_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install unicode-rgi-emoji-modifier-sequence
```

Then, `import` it:

```js
import modifiableEmoji from 'unicode-rgi-emoji-modifier-sequence'
```

## Usage

This module exports a `Set` object. The most common usage is to check if a given code point is an emoji modifier base:

```js
modifiableEmoji.has(🖖)
// → true
```

## Attribution & License

Original author: [Mathias Bynens](https://mathiasbynens.be/)

_unicode-emoji-modifier-base_ is available under the [MIT](https://mths.be/mit) license.
