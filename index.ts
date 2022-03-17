import { Person } from "./entities/person";
import { Gender, MaritalStatus } from "./enums/enums";


var nextId = 0;
const me = new Person(nextId++, 'Anton', Gender.male);

me.addFather(new Person(nextId++, 'Vasily', Gender.male));
me.addMother(new Person(nextId++, 'Maria', Gender.female));
me.addChild(new Person(nextId++, 'Emily', Gender.female));
me.getMarried(new Person(nextId++, 'Ana', Gender.female));
me.divorceById(nextId - 1);

me.show();

