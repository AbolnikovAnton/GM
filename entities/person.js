"use strict";
exports.__esModule = true;
exports.Person = void 0;
var enums_1 = require("../enums/enums");
var parents_1 = require("./parents");
var dependentPerson_1 = require("./dependentPerson");
var Person = /** @class */ (function () {
    function Person(id, name, gender) {
        this.name = name;
        this.gender = gender;
        this.id = id;
        this.status = enums_1.MaritalStatus.SINGLE;
        this.parents = new parents_1.Parents();
        this.children = new dependentPerson_1.DependentPerson();
        this.couple = new dependentPerson_1.DependentPerson();
    }
    Person.prototype.getMarried = function (spouse) {
        spouse.status = enums_1.MaritalStatus.MARRIED;
        this.couple.add(spouse);
        this.status = enums_1.MaritalStatus.MARRIED;
    };
    Person.prototype.divorceById = function (id) {
        // finde index in 
        var exCouple = this.couple.getById(id);
        // update peson and save
        exCouple.status = enums_1.MaritalStatus.DIVORCED;
        // updade status
        this.status = enums_1.MaritalStatus.DIVORCED;
    };
    Person.prototype.addChild = function (child) {
        this.children.add(child);
    };
    Person.prototype.addMother = function (mother) {
        this.parents.addMother(mother);
    };
    Person.prototype.addFather = function (father) {
        this.parents.addFather(father);
    };
    Person.prototype.show = function () {
        console.dir(this, { depth: null });
    };
    return Person;
}());
exports.Person = Person;
