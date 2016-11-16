var assert = require('assert')
var Type = require('../index')

describe('Type', () => {
  describe('of(target: any): string', () => {
    it('should exist', () => {
      assert.ok(Type.of)
    })

    function testIt(type, target, extra) {
      it(`${type} should return "${type}" ${extra || ''}`, () => {
        assert.equal(Type.of(target), type)
      })
    }

    testIt('boolean', true, '(true)')
    testIt('boolean', false, '(false)')
    testIt('number', 1, '(integer)')
    testIt('number', 0, '(0)')
    testIt('number', 3.5, '(float)')
    testIt('object', {})
    testIt('function', () => {}, "() => {}")
    testIt('function', function(){}, "function () {}")
    testIt('null', null)
    testIt('undefined')
    testIt('undefined', void 0, '(void 0)')
    testIt('string', '')
    testIt('regexp', /test/)
    testIt('date', new Date())
    testIt('array', [])
    testIt('symbol', Symbol('test'))

    // TODO: How to test for 'nodelist' and html elements?

  })

  describe('is*(target): boolean', () => {

    function testIt(type, target, extra) {
      it(`is${type} should return true ${extra || ''}`, () => {
        var typeChecker = Type[`is${type}`]
        assert.equal(typeChecker(target), true)
      })
    }

    testIt('Boolean', true, '(true)')
    testIt('Boolean', false, '(false)')
    testIt('Number', 1, '(integer)')
    testIt('Number', 0, '(0)')
    testIt('Number', 3.5, '(float)')
    testIt('Object', {})
    testIt('Null', null)
    testIt('Undefined')
    testIt('Undefined', void 0, '(void 0)')
    testIt('Function', () => {}, '() => {}')
    testIt('Function', function(){}, 'function() {}')
    testIt('String', '')
    testIt('RegExp', /test/)
    testIt('Date', new Date())
    testIt('Array', [])
    testIt('Symbol', Symbol('test'))
    testIt('Empty', [], '[]')
    testIt('Empty', {}, '{}')
    testIt('Empty', '', '""')
    testIt('Empty', null, 'null')
    testIt('Empty', void 0, 'undefined')
    testIt('Empty', (1 / 'a'), 'NaN')

    // isNodeList
    // isNotNodeList
    // isElement
    // isNotElement

  })

  describe('isNot*(target): boolean', () => {

    function testIt(type, target, extra) {
      it(`isNot${type} should return false ${extra || ''}`, () => {
        var typeChecker = Type[`isNot${type}`]
        assert.equal(typeChecker(target), false)
      })
    }

    testIt('Boolean', true, '(true)')
    testIt('Boolean', false, '(false)')
    testIt('Number', 1, '(integer)')
    testIt('Number', 0, '(0)')
    testIt('Number', 3.5, '(float)')
    testIt('Object', {})
    testIt('Null', null)
    testIt('Undefined')
    testIt('Undefined', void 0, '(void 0)')
    testIt('Function', () => {}, '() => {}')
    testIt('Function', function(){}, 'function() {}')
    testIt('String', '')
    testIt('RegExp', /test/)
    testIt('Date', new Date())
    testIt('Array', [])
    testIt('Symbol', Symbol('test'))
    testIt('Empty', [], '[]')
    testIt('Empty', {}, '{}')
    testIt('Empty', '', '""')
    testIt('Empty', null, 'null')
    testIt('Empty', void 0, 'undefined')
    testIt('Empty', (1 / 'a'), 'NaN')

    
    // isNodeList
    // isNotNodeList
    // isElement
    // isNotElement

  })

  describe('checking types', () => {

    function testIt(type, target, extra) {
      it(`isNot${type} should return false ${extra || ''}`, () => {
        var typeChecker = Type[`isNot${type}`]
        assert.equal(typeChecker(target), false)
      })
    }

    testIt('Boolean', true, '(true)')
    testIt('Boolean', false, '(false)')
    testIt('Number', 1, '(integer)')
    testIt('Number', 0, '(0)')
    testIt('Number', 3.5, '(float)')
    testIt('Object', {})
    testIt('Null', null)
    testIt('Undefined')
    testIt('Undefined', void 0, '(void 0)')
    testIt('Function', () => {}, '() => {}')
    testIt('Function', function(){}, 'function() {}')
    testIt('String', '')
    testIt('RegExp', /test/)
    testIt('Date', new Date())
    testIt('Array', [])
    testIt('Symbol', Symbol('test'))
    testIt('Empty', [], '[]')
    testIt('Empty', {}, '{}')
    testIt('Empty', '', '""')
    testIt('Empty', null, 'null')
    testIt('Empty', void 0, 'undefined')
    testIt('Empty', (1 / 'a'), 'NaN')

    
    // isNodeList
    // isNotNodeList
    // isElement
    // isNotElement

  })
})
