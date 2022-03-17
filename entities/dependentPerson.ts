import { Person } from './person';

export class DependentPerson {
    private state: {} = {};

    getById(id: number): Person | undefined {
        const key = Object.keys(this.state).find((value: string) => value === id.toString());
        return this.state[key] as Person | undefined
    }

    add(person: Person) {
        // add check if exists
        this.state = { ...this.state, [person.id]: person }
    }

    update(person: Person) {
        this.state = { ...this.state, [person.id]: person }
    }
}