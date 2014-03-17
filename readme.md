# type

Simple js component that is an enhanced typeof function. Reliably returns object types, and element types for modern browsers.

```javascript
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
```

Includes helper methods for each type:

```javascript
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

Or just include `test.js` in your page directly.
