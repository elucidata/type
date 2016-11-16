
export const getType = ((_typeList: string[]) => {
  let toStr = Object.prototype.toString
  let elemParser = /\[object HTML(.*)\]/
  let classToType = {}

  for (let name of _typeList) {
    classToType[`[object ${name}]`] = name.toLowerCase()
  }

  return (target: any): string => {
    let found
    let strType = toStr.call(target)

    if (found = classToType[strType]) {
      return found
    }
    else if (found = strType.match(elemParser)) {
      return found[1].toLowerCase()
    }
    else {
      return "object"
    }
  }
})("Boolean Number String Function Array Date RegExp Undefined Null NodeList Symbol Object".split(" "))

// Aliases for getType

export const of = getType
export const type = getType

function _isTargetOfType(type: string, shouldMatch = true): (target: any) => boolean {
  return shouldMatch
    ? target => getType(target) === type
    : target => getType(target) !== type
}

export const isBoolean = _isTargetOfType('boolean')
export const isNotBoolean = _isTargetOfType('boolean', false)

export const isNumber = _isTargetOfType('number')
export const isNotNumber = _isTargetOfType('number', false)

export const isString = _isTargetOfType('string')
export const isNotString = _isTargetOfType('string', false)

export const isFunction = _isTargetOfType('function')
export const isNotFunction = _isTargetOfType('function', false)

export const isArray = _isTargetOfType('array')
export const isNotArray = _isTargetOfType('array', false)

export const isDate = _isTargetOfType('date')
export const isNotDate = _isTargetOfType('date', false)

export const isRegExp = _isTargetOfType('regexp')
export const isNotRegExp = _isTargetOfType('regexp', false)

export const isUndefined = _isTargetOfType('undefined')
export const isNotUndefined = _isTargetOfType('undefined', false)

export const isNull = _isTargetOfType('null')
export const isNotNull = _isTargetOfType('null', false)

export const isNodeList = _isTargetOfType('nodelist')
export const isNotNodeList = _isTargetOfType('nodelist', false)

export const isObject = _isTargetOfType('object')
export const isNotObject = _isTargetOfType('object', false)

export const isSymbol = _isTargetOfType('symbol')
export const isNotSymbol = _isTargetOfType('symbol', false)

export const isEmpty = (target) => {
  switch (getType(target)) {
    case 'null': return true
    case 'undefined': return true
    case 'string': return target === ''
    case 'object': return Object.keys(target).length === 0
    case 'array': return target.length === 0
    case 'number': return isNaN(target)
    case 'nodelist': return target.length === 0
    default: return false
  }
}
export const isNotEmpty = (target) => !isEmpty(target)

const _elementTestRe = /element$/
export const isElement = target => _elementTestRe.test(getType(target))
export const isNotElement = target => !isElement(target)
