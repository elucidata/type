
typeList= "Boolean Number String Function Array Date RegExp Undefined Null NodeList".split(" ")

type= do ->
  toStr= Object::toString
  elemParser= /\[object HTML(.*)\]/
  classToType= {}
  for name in typeList
    classToType["[object " + name + "]"] = name.toLowerCase()
  (obj) ->
    strType= toStr.call(obj)
    if found= classToType[strType]
      found
    else if found= strType.match(elemParser)
      found[1].toLowerCase()
    else
      "object"

for name in typeList
  do (name)->
    nameLower= name.toLowerCase()
    type["is#{ name }"]= (target)-> type(target) is nameLower
    type["isNot#{ name }"]= (target)-> type(target) isnt nameLower

if module?
  module.exports= type
else
  @type= type


type.isEmpty= (target)->
  kind= type target
  switch kind
    when 'null' then yes
    when 'undefined' then yes
    when 'string' then target is ''
    when 'object' then _keys(target).length is 0
    when 'array' then target.length is 0
    when 'number' then isNaN target
    when 'nodelist' then target.length is 0
    else no

type.isNotEmpty= (target)->
  not type.isEmpty target


type.isElement= (target)->
  _elementTestRe.test type(target)

type.isNotElement= (target)->
  not type.isElement target



_elementTestRe= /element$/

_keys= Object.keys or (obj)->
  keys= []
  for key,v of obj
    keys.push key
  keys
