# type

An enhanced typeof function. Reliably returns object types, and element types for modern browsers.

```javascript
import { type } from "@elucidata/type"

type(null)
// => "null"
type(window.undefinedProperty)
// => "undefined"
type("test")
// => "string"
type(new String())
// => "string"
type(1)
// => "number"
type(new Number())
// => "number"
type(true)
// => "boolean"
type(new Boolean())
// => "boolean"
type(/test/)
// => "regexp"
type(new RegExp())
// => "regexp"
type(new Date())
// => "date"
type(["test"])
// => "array"
type(new Array())
// => "array"
type({ test: "test" })
// => "object"
type(new Object())
// => "object"
type(document)
// => "document"
type(document.querySelectorAll("*"))
// => "nodelist"
type(document.body)
// => "bodyelement"
type(document.createElement("div"))
// => "divelement"
type(Symbol("test"))
// => "symbol"
```

Includes helper methods for each type that work as type guards if used in TypeScript:

```javascript
import * as type from "@elucidata/type"

type.isObject(target)
type.isNotObject(target)

type.isBoolean(target)
type.isNotBoolean(target)

type.isNumber(target)
type.isNotNumber(target)

type.isString(target)
type.isNotString(target)

type.isFunction(target)
type.isNotFunction(target)

type.isArray(target)
type.isNotArray(target)

type.isDate(target)
type.isNotDate(target)

type.isRegExp(target)
type.isNotRegExp(target)

type.isUndefined(target)
type.isNotUndefined(target)

type.isNull(target)
type.isNotNull(target)

type.isNodeList(target)
type.isNotNodeList(target)

type.isSymbol(target)
type.isNotSymbol(target)

type.isElement(target)
type.isNotElement(target)

// is[Not]Element() deals with HTMLElements

type.isElement(document.body) // => true
type.isElement({}) // => false
```

# Installation

Pick your poison:

```bash
npm install @elucidata/type
```

# Definitions

```ts
export declare const getType: (target: any) => string
export declare const of: (target: any) => string
export declare const type: (target: any) => string

export declare const isBoolean: (target: any) => target is boolean
export declare const isNotBoolean: (target: any) => target is unknown
export declare const isNumber: (target: any) => target is number
export declare const isNotNumber: (target: any) => target is unknown
export declare const isString: (target: any) => target is string
export declare const isNotString: (target: any) => target is unknown
export declare const isFunction: (target: any) => target is Function
export declare const isNotFunction: (target: any) => target is unknown
export declare const isArray: (target: any) => target is any[]
export declare const isNotArray: (target: any) => target is unknown
export declare const isDate: (target: any) => target is Date
export declare const isNotDate: (target: any) => target is unknown
export declare const isRegExp: (target: any) => target is RegExp
export declare const isNotRegExp: (target: any) => target is unknown
export declare const isUndefined: (target: any) => target is undefined
export declare const isNotUndefined: (target: any) => target is unknown
export declare const isNull: (target: any) => target is null
export declare const isNotNull: (target: any) => target is unknown
export declare const isNodeList: (target: any) => target is NodeList
export declare const isNotNodeList: (target: any) => target is unknown
export declare const isObject: (target: any) => target is Object
export declare const isNotObject: (target: any) => target is unknown
export declare const isSymbol: (target: any) => target is Symbol
export declare const isNotSymbol: (target: any) => target is unknown
export declare const isEmpty: (target: any) => boolean
export declare const isNotEmpty: (target: any) => boolean
export declare const isElement: (target: any) => target is HTMLElement
export declare const isNotElement: (target: any) => target is unknown
```
