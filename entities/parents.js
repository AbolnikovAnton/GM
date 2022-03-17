"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Parents = void 0;
var dependentPerson_1 = require("./dependentPerson");
var Parents = /** @class */ (function (_super) {
    __extends(Parents, _super);
    function Parents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fatherId = 0;
        _this.motherId = 0;
        return _this;
    }
    Parents.prototype.getFather = function () {
        return this.getById(this.fatherId);
    };
    Parents.prototype.getMother = function () {
        return this.getById(this.motherId);
    };
    Parents.prototype.addFather = function (father) {
        this.add(father);
        this.fatherId = father.id;
    };
    Parents.prototype.addMother = function (mother) {
        this.add(mother);
        this.motherId = mother.id;
    };
    return Parents;
}(dependentPerson_1.DependentPerson));
exports.Parents = Parents;
