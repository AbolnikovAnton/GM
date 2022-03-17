"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.DependentPerson = void 0;
var DependentPerson = /** @class */ (function () {
    function DependentPerson() {
        this.state = {};
    }
    DependentPerson.prototype.getById = function (id) {
        var key = Object.keys(this.state).find(function (value) { return value === id.toString(); });
        return this.state[key];
    };
    DependentPerson.prototype.add = function (person) {
        var _a;
        // add check if exists
        this.state = __assign(__assign({}, this.state), (_a = {}, _a[person.id] = person, _a));
    };
    DependentPerson.prototype.update = function (person) {
        var _a;
        this.state = __assign(__assign({}, this.state), (_a = {}, _a[person.id] = person, _a));
    };
    return DependentPerson;
}());
exports.DependentPerson = DependentPerson;
