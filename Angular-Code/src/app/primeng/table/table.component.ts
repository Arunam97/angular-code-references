import {Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      age: 28,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      age: 35,
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bobbrown@example.com',
      age: 42,
    },
    {
      id: 5,
      name: 'Eva Wilson',
      email: 'evawilson@example.com',
      age: 25,
    },
  ];
}
