(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
    else {
        this['Type'] = {}
        factory({}, this['Type'])
    }
})(function (require, exports) {
    "use strict";
    exports.getType = (function (_typeList) {
        var toStr = Object.prototype.toString;
        var elemParser = /\[object HTML(.*)\]/;
        var classToType = {};
        for (var _i = 0, _typeList_1 = _typeList; _i < _typeList_1.length; _i++) {
            var name_1 = _typeList_1[_i];
            classToType[("[object " + name_1 + "]")] = name_1.toLowerCase();
        }
        return function (target) {
            var found;
            var strType = toStr.call(target);
            if (found = classToType[strType]) {
                return found;
            }
            else if (found = strType.match(elemParser)) {
                return found[1].toLowerCase();
            }
            else {
                return "object";
            }
        };
    })("Boolean Number String Function Array Date RegExp Undefined Null NodeList Symbol Object".split(" "));
    // Aliases for getType
    exports.of = exports.getType;
    exports.type = exports.getType;
    function _isTargetOfType(type, shouldMatch) {
        if (shouldMatch === void 0) { shouldMatch = true; }
        return shouldMatch
            ? function (target) { return exports.getType(target) === type; }
            : function (target) { return exports.getType(target) !== type; };
    }
    exports.isBoolean = _isTargetOfType('boolean');
    exports.isNotBoolean = _isTargetOfType('boolean', false);
    exports.isNumber = _isTargetOfType('number');
    exports.isNotNumber = _isTargetOfType('number', false);
    exports.isString = _isTargetOfType('string');
    exports.isNotString = _isTargetOfType('string', false);
    exports.isFunction = _isTargetOfType('function');
    exports.isNotFunction = _isTargetOfType('function', false);
    exports.isArray = _isTargetOfType('array');
    exports.isNotArray = _isTargetOfType('array', false);
    exports.isDate = _isTargetOfType('date');
    exports.isNotDate = _isTargetOfType('date', false);
    exports.isRegExp = _isTargetOfType('regexp');
    exports.isNotRegExp = _isTargetOfType('regexp', false);
    exports.isUndefined = _isTargetOfType('undefined');
    exports.isNotUndefined = _isTargetOfType('undefined', false);
    exports.isNull = _isTargetOfType('null');
    exports.isNotNull = _isTargetOfType('null', false);
    exports.isNodeList = _isTargetOfType('nodelist');
    exports.isNotNodeList = _isTargetOfType('nodelist', false);
    exports.isObject = _isTargetOfType('object');
    exports.isNotObject = _isTargetOfType('object', false);
    exports.isSymbol = _isTargetOfType('symbol');
    exports.isNotSymbol = _isTargetOfType('symbol', false);
    exports.isEmpty = function (target) {
        switch (exports.getType(target)) {
            case 'null': return true;
            case 'undefined': return true;
            case 'string': return target === '';
            case 'object': return Object.keys(target).length === 0;
            case 'array': return target.length === 0;
            case 'number': return isNaN(target);
            case 'nodelist': return target.length === 0;
            default: return false;
        }
    };
    exports.isNotEmpty = function (target) { return !exports.isEmpty(target); };
    var _elementTestRe = /element$/;
    exports.isElement = function (target) { return _elementTestRe.test(exports.getType(target)); };
    exports.isNotElement = function (target) { return !exports.isElement(target); };
});
