export const getType = ((_typeList: string[]) => {
  let toStr = Object.prototype.toString
  let elemParser = /\[object HTML(.*)\]/
  let classToType = {}

  for (let name of _typeList) {
    classToType[`[object ${name}]`] = name.toLowerCase()
  }

  return (target: any): string => {
    let found: any
    let strType = toStr.call(target)

    if ((found = classToType[strType])) {
      return found
    } else if ((found = strType.match(elemParser))) {
      return found[1].toLowerCase()
    } else {
      return "object"
    }
  }
})(
  "Boolean Number String Function Array Date RegExp Undefined Null NodeList Symbol Object".split(
    " "
  )
)

// Aliases for getType

export const of = getType
export const type = getType

function _isTargetOfType<T>(type: string) {
  return (target: any): target is T => getType(target) === type
}
function _isNotTargetOfType(type: string) {
  return (target: any): target is unknown => getType(target) !== type
}

export const isBoolean = _isTargetOfType<boolean>("boolean")
export const isNotBoolean = _isNotTargetOfType("boolean")

export const isNumber = _isTargetOfType<number>("number")
export const isNotNumber = _isNotTargetOfType("number")

export const isString = _isTargetOfType<string>("string")
export const isNotString = _isNotTargetOfType("string")

export const isFunction = _isTargetOfType<Function>("function")
export const isNotFunction = _isNotTargetOfType("function")

export const isArray = _isTargetOfType<Array<any>>("array")
export const isNotArray = _isNotTargetOfType("array")

export const isDate = _isTargetOfType<Date>("date")
export const isNotDate = _isNotTargetOfType("date")

export const isRegExp = _isTargetOfType<RegExp>("regexp")
export const isNotRegExp = _isNotTargetOfType("regexp")

export const isUndefined = _isTargetOfType<undefined>("undefined")
export const isNotUndefined = _isNotTargetOfType("undefined")

export const isNull = _isTargetOfType<null>("null")
export const isNotNull = _isNotTargetOfType("null")

export const isNodeList = _isTargetOfType<NodeList>("nodelist")
export const isNotNodeList = _isNotTargetOfType("nodelist")

export const isObject = _isTargetOfType<Object>("object")
export const isNotObject = _isNotTargetOfType("object")

export const isSymbol = _isTargetOfType<Symbol>("symbol")
export const isNotSymbol = _isNotTargetOfType("symbol")

export const isEmpty = (target) => {
  switch (getType(target)) {
    case "null":
      return true
    case "undefined":
      return true
    case "string":
      return target === ""
    case "object":
      return Object.keys(target).length === 0
    case "array":
      return target.length === 0
    case "number":
      return isNaN(target)
    case "nodelist":
      return target.length === 0
    default:
      return false
  }
}
export const isNotEmpty = (target) => !isEmpty(target)

const _elementTestRe = /element$/
export const isElement = (target: any): target is HTMLElement =>
  _elementTestRe.test(getType(target))
export const isNotElement = (target: any): target is unknown =>
  !isElement(target)
