import { DependentPerson } from './dependentPerson';
import { Person } from './person';
import { ParentsApi } from './interfaces/interfaces';

export class Parents extends DependentPerson implements ParentsApi {

    private fatherId: number = 0;
    private motherId: number = 0;

    getFather(): Person {
        return this.getById(this.fatherId);
    }

    getMother(): Person {
        return this.getById(this.motherId);
    }

    addFather(father: Person) {
        this.add(father)
        this.fatherId = father.id;
    }
    addMother(mother: Person) {
        this.add(mother)
        this.motherId = mother.id;
    }
    
}
