(function() {
  var name, type, typeList, _elementTestRe, _fn, _i, _keys, _len;

  typeList = "Boolean Number String Function Array Date RegExp Undefined Null NodeList".split(" ");

  type = (function() {
    var classToType, elemParser, name, toStr, _i, _len;
    toStr = Object.prototype.toString;
    elemParser = /\[object HTML(.*)\]/;
    classToType = {};
    for (_i = 0, _len = typeList.length; _i < _len; _i++) {
      name = typeList[_i];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    return function(obj) {
      var found, strType;
      strType = toStr.call(obj);
      if (found = classToType[strType]) {
        return found;
      } else if (found = strType.match(elemParser)) {
        return found[1].toLowerCase();
      } else {
        return "object";
      }
    };
  })();

  _fn = function(name) {
    var nameLower;
    nameLower = name.toLowerCase();
    type["is" + name] = function(target) {
      return type(target) === nameLower;
    };
    return type["isNot" + name] = function(target) {
      return type(target) !== nameLower;
    };
  };
  for (_i = 0, _len = typeList.length; _i < _len; _i++) {
    name = typeList[_i];
    _fn(name);
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = type;
  } else {
    this.type = type;
  }

  type.isEmpty = function(target) {
    var kind;
    kind = type(target);
    switch (kind) {
      case 'null':
        return true;
      case 'undefined':
        return true;
      case 'string':
        return target === '';
      case 'object':
        return _keys(target).length === 0;
      case 'array':
        return target.length === 0;
      case 'number':
        return isNaN(target);
      case 'nodelist':
        return target.length === 0;
      default:
        return false;
    }
  };

  type.isNotEmpty = function(target) {
    return !type.isEmpty(target);
  };

  type.isElement = function(target) {
    return _elementTestRe.test(type(target));
  };

  type.isNotElement = function(target) {
    return !type.isElement(target);
  };

  _elementTestRe = /element$/;

  _keys = Object.keys || function(obj) {
    var key, keys, v;
    keys = [];
    for (key in obj) {
      v = obj[key];
      keys.push(key);
    }
    return keys;
  };

}).call(this);
