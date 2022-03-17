import { Person } from './../person';

export interface ParentsApi {
    addMother(mother: Person): void;
    addFather(father: Person): void;
}

export interface ChildrenApi {
    addChild(child: Person): void;
}

export interface CoupleApi {
    getMarried(spouse: Person): void;
    divorceById(id: number): void;
}