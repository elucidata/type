# type

Simple js component that is an enhanced typeof function. Reliably returns object types, and element types for modern browsers.

```javascript
type(/test/)
// => "regexp"
type("test")
// => "string"
type(new Date)
// => "date"
type(['test'])
// => "array"
type({'test':'test'})
// => "object"
type(document)
// => "document"
type(document.querySelectorAll('*'))
// => "nodelist"
type(document.body)
// => "bodyelement"
```