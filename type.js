(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNotElement = exports.isElement = exports.isNotEmpty = exports.isEmpty = exports.isNotSymbol = exports.isSymbol = exports.isNotObject = exports.isObject = exports.isNotNodeList = exports.isNodeList = exports.isNotNull = exports.isNull = exports.isNotUndefined = exports.isUndefined = exports.isNotRegExp = exports.isRegExp = exports.isNotDate = exports.isDate = exports.isNotArray = exports.isArray = exports.isNotFunction = exports.isFunction = exports.isNotString = exports.isString = exports.isNotNumber = exports.isNumber = exports.isNotBoolean = exports.isBoolean = exports.type = exports.of = exports.getType = void 0;
    exports.getType = (function (_typeList) {
        var toStr = Object.prototype.toString;
        var elemParser = /\[object HTML(.*)\]/;
        var classToType = {};
        for (var _i = 0, _typeList_1 = _typeList; _i < _typeList_1.length; _i++) {
            var name_1 = _typeList_1[_i];
            classToType["[object " + name_1 + "]"] = name_1.toLowerCase();
        }
        return function (target) {
            var found;
            var strType = toStr.call(target);
            if ((found = classToType[strType])) {
                return found;
            }
            else if ((found = strType.match(elemParser))) {
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
    function _isTargetOfType(type) {
        return function (target) { return exports.getType(target) === type; };
    }
    function _isNotTargetOfType(type) {
        return function (target) { return exports.getType(target) !== type; };
    }
    exports.isBoolean = _isTargetOfType("boolean");
    exports.isNotBoolean = _isNotTargetOfType("boolean");
    exports.isNumber = _isTargetOfType("number");
    exports.isNotNumber = _isNotTargetOfType("number");
    exports.isString = _isTargetOfType("string");
    exports.isNotString = _isNotTargetOfType("string");
    exports.isFunction = _isTargetOfType("function");
    exports.isNotFunction = _isNotTargetOfType("function");
    exports.isArray = _isTargetOfType("array");
    exports.isNotArray = _isNotTargetOfType("array");
    exports.isDate = _isTargetOfType("date");
    exports.isNotDate = _isNotTargetOfType("date");
    exports.isRegExp = _isTargetOfType("regexp");
    exports.isNotRegExp = _isNotTargetOfType("regexp");
    exports.isUndefined = _isTargetOfType("undefined");
    exports.isNotUndefined = _isNotTargetOfType("undefined");
    exports.isNull = _isTargetOfType("null");
    exports.isNotNull = _isNotTargetOfType("null");
    exports.isNodeList = _isTargetOfType("nodelist");
    exports.isNotNodeList = _isNotTargetOfType("nodelist");
    exports.isObject = _isTargetOfType("object");
    exports.isNotObject = _isNotTargetOfType("object");
    exports.isSymbol = _isTargetOfType("symbol");
    exports.isNotSymbol = _isNotTargetOfType("symbol");
    exports.isEmpty = function (target) {
        switch (exports.getType(target)) {
            case "null":
                return true;
            case "undefined":
                return true;
            case "string":
                return target === "";
            case "object":
                return Object.keys(target).length === 0;
            case "array":
                return target.length === 0;
            case "number":
                return isNaN(target);
            case "nodelist":
                return target.length === 0;
            default:
                return false;
        }
    };
    exports.isNotEmpty = function (target) { return !exports.isEmpty(target); };
    var _elementTestRe = /element$/;
    exports.isElement = function (target) {
        return _elementTestRe.test(exports.getType(target));
    };
    exports.isNotElement = function (target) {
        return !exports.isElement(target);
    };
});
