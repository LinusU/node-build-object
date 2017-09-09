'use strict'

const allowedKeyTypes = ['string', 'number']

module.exports = function buildObject (items) {
  if (items == null) return {}

  if (typeof items[Symbol.iterator] !== 'function') {
    throw new TypeError(`Expected items to be an iterable, got ${typeof items}`)
  }

  const result = {}

  for (const item of items) {
    if (typeof item !== 'object') {
      throw new TypeError(`Iterator value ${item} is not an entry object`)
    }

    if (allowedKeyTypes.indexOf(typeof item[0]) === -1) {
      throw new TypeError(`Expected key to be one of types ${allowedKeyTypes.join(', ')}, got ${typeof item[0]}`)
    }

    result[item[0]] = item[1]
  }

  return result
}
