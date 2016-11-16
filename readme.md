# type

Simple js component that is an enhanced typeof function. Reliably returns object types, and element types for modern browsers.

```javascript
import {type} from 'elucidata-type'

type(null)
// => "null"
type(window.undefinedProperty)
// => "undefined"
type("test")
// => "string"
type(new String)
// => "string"
type(1)
// => "number"
type(new Number)
// => "number"
type(true)
// => "boolean"
type(new Boolean)
// => "boolean"
type(/test/)
// => "regexp"
type(new RegExp)
// => "regexp"
type(new Date)
// => "date"
type(['test'])
// => "array"
type(new Array)
// => "array"
type({'test':'test'})
// => "object"
type(new Object)
// => "object"
type(document)
// => "document"
type(document.querySelectorAll('*'))
// => "nodelist"
type(document.body)
// => "bodyelement"
type(document.createElement('div'))
// => "divelement"
type(Symbol('test'))
// => "symbol"
```

Includes helper methods for each type:

```javascript
import * as type from 'elucidata-type'

type.isObject( target )
type.isNotObject( target )

type.isBoolean( target )
type.isNotBoolean( target )

type.isNumber( target )
type.isNotNumber( target )

type.isString( target )
type.isNotString( target )

type.isFunction( target )
type.isNotFunction( target )

type.isArray( target )
type.isNotArray( target )

type.isDate( target )
type.isNotDate( target )

type.isRegExp( target )
type.isNotRegExp( target )

type.isUndefined( target )
type.isNotUndefined( target )

type.isNull( target )
type.isNotNull( target )

type.isNodeList( target )
type.isNotNodeList( target )

type.isSymbol( target )
type.isNotSymbol( target )

type.isElement( target )
type.isNotElement( target )

// is[Not]Element() deals with HTMLElements

type.isElement(document.body) // => true
type.isElement({}) // => false
```


# Installation

Pick your poison:

```bash
npm install elucidata-type
```

```bash
bower install elucidata-type
```

# Definitions

```ts
export declare const getType: (target: any) => string;
export declare const of: (target: any) => string;
export declare const type: (target: any) => string;
export declare const isBoolean: (target: any) => boolean;
export declare const isNotBoolean: (target: any) => boolean;
export declare const isNumber: (target: any) => boolean;
export declare const isNotNumber: (target: any) => boolean;
export declare const isString: (target: any) => boolean;
export declare const isNotString: (target: any) => boolean;
export declare const isFunction: (target: any) => boolean;
export declare const isNotFunction: (target: any) => boolean;
export declare const isArray: (target: any) => boolean;
export declare const isNotArray: (target: any) => boolean;
export declare const isDate: (target: any) => boolean;
export declare const isNotDate: (target: any) => boolean;
export declare const isRegExp: (target: any) => boolean;
export declare const isNotRegExp: (target: any) => boolean;
export declare const isUndefined: (target: any) => boolean;
export declare const isNotUndefined: (target: any) => boolean;
export declare const isNull: (target: any) => boolean;
export declare const isNotNull: (target: any) => boolean;
export declare const isNodeList: (target: any) => boolean;
export declare const isNotNodeList: (target: any) => boolean;
export declare const isObject: (target: any) => boolean;
export declare const isNotObject: (target: any) => boolean;
export declare const isSymbol: (target: any) => boolean;
export declare const isNotSymbol: (target: any) => boolean;
export declare const isEmpty: (target: any) => boolean;
export declare const isNotEmpty: (target: any) => boolean;
export declare const isElement: (target: any) => boolean;
export declare const isNotElement: (target: any) => boolean;
```