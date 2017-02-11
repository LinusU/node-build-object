# Build Object

Create an object from an iterable of key/value-pairs.

## Installation

```sh
npm install --save build-object
```

## Usage

```js
const buildObject = require('build-object')

const me = buildObject([
  ['firstName', 'Linus'],
  ['lastName', 'Unnebäck']
])

console.log(me)
// => { firstName: 'Linus', lastName: 'Unnebäck' }
```

## API

### `buildObject(items) => object`

Build an object from `items`.

`items` should be an iterable (e.g. an array) where each item is a key/value pair.

If the same key is specified twice, the latter will take precedence.

A `TypeError` will be thrown in the following conditions:

- `items` is not an iterable
- any element in `items` is not an object
- any key is not a string
