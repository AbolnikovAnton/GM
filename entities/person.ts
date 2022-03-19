import { Gender, MaritalStatus } from "../enums/enums";
import { Parents } from './parents';
import { DependentPerson } from './dependentPerson';
import { ChildrenApi, ParentsApi, CoupleApi } from './interfaces/interfaces';

export class Person implements ParentsApi, ChildrenApi, CoupleApi {
    id: number;
    name: string;
    gender: Gender;
    status: MaritalStatus;
    parents: Parents;
    children: DependentPerson;
    couple: DependentPerson

    constructor(id: number, name: string, gender: Gender) {
        this.name = name;
        this.gender = gender;
        this.id = id;
        this.status = MaritalStatus.SINGLE;
        this.parents = new Parents();
        this.children = new DependentPerson();
        this.couple = new DependentPerson();
    }

    getMarried(spouse: Person): void {
        spouse.status = MaritalStatus.MARRIED;
        this.couple.add(spouse);
        this.status = MaritalStatus.MARRIED;
    }

    divorceById(id: number): void {
        const exCouple = this.couple.getById(id)
        exCouple.status = MaritalStatus.DIVORCED
        this.status = MaritalStatus.DIVORCED;
    }

    addChild(child: Person): void {
        this.children.add(child)
    }

    addMother(mother: Person): void {
        this.parents.addMother(mother);
    }

    addFather(father: Person): void {
        this.parents.addFather(father);
    }

    show() {
        console.dir(this, { depth: null })
    }
}

