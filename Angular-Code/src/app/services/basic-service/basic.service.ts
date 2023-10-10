import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  serviceFunction(value: string) {
    return "BasicService was executed: " + value;
  }

  listOfPeople = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com'
    },
    {
      name: 'Bob Smith',
      email: 'bob.smith@example.com'
    }
  ];

  getPeople() {
    return this.listOfPeople;
  }

  addPerson(person: { name: string, email: string }) {
    this.listOfPeople.push(person);
  }

  serviceEmitter = new EventEmitter<string>();
}
