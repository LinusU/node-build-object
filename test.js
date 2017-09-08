/* eslint-env mocha */

var assert = require('assert')
var buildObject = require('./')

describe('buildObject', function () {
  it('should throw an error on non-arrays', function () {
    assert.throws(function () { buildObject(0) }, TypeError)
    assert.throws(function () { buildObject(true) }, TypeError)
    assert.throws(function () { buildObject({}) }, TypeError)
  })

  it('should throw if the key isn\'t a string', function () {
    assert.throws(function () { buildObject([[undefined]]) }, TypeError)
    assert.throws(function () { buildObject([[null]]) }, TypeError)
    assert.throws(function () { buildObject([[true]]) }, TypeError)
    assert.throws(function () { buildObject([[{}]]) }, TypeError)
  })

  it('should return empty objects', function () {
    assert.deepStrictEqual(buildObject(), {})
    assert.deepStrictEqual(buildObject(null), {})
    assert.deepStrictEqual(buildObject(undefined), {})
    assert.deepStrictEqual(buildObject(''), {})
  })

  it('should build an empty object', function () {
    assert.deepStrictEqual(buildObject([]), {})
  })

  it('should build a simple object', function () {
    var input = [
      ['firstName', 'Linus'],
      ['lastName', 'Unnebäck']
    ]

    var output = {
      firstName: 'Linus',
      lastName: 'Unnebäck'
    }

    assert.deepStrictEqual(buildObject(input), output)
  })

  it('should override earlier values', function () {
    var input = [
      ['firstName', 'Steve'],
      ['firstName', 'Linus']
    ]

    var output = {
      firstName: 'Linus'
    }

    assert.deepStrictEqual(buildObject(input), output)
  })

  it('should be able to assign undefined', function () {
    var input = [
      ['firstName', 'Linus'],
      ['firstName', undefined]
    ]

    var output = {
      firstName: undefined
    }

    assert.deepStrictEqual(buildObject(input), output)
  })

  it('should build object with number keys', function () {
    var input = [
      [0, 'test']
    ]

    var output = {
      0: 'test'
    }

    assert.deepStrictEqual(buildObject(input), output)
  })
})
