import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-directives',
  templateUrl: './basic-directives.component.html',
  styleUrls: ['./basic-directives.component.css']
})
export class BasicDirectivesComponent {
  // ngIf
  booleanVariable: boolean = true;

  // ngStyle
  newStyle = {background: 'lightblue', color: 'red'};

  // ngClass
  // style1 and style2 are defined in directives.component.css file.
  style2Condition: boolean = true;

  // ngFor
  listOfNames = [
    {"name": "John", "age": 30},
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 35},
    {"name": "Eva", "age": 28},
    {"name": "David", "age": 40}
  ];
}
