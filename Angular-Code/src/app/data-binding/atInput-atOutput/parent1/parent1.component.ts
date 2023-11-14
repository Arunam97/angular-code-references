import {Component} from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  // @Input()
  parentVariable1: string = "This text is sent over to child1 using @Input.";
  parentVariable2: string = "This text is sent over to child1 using @Input and custom input property.";

  // @Output()
  receivedMessage: string = "";

  emitReceiver(emittedMessage: string) {
    this.receivedMessage = emittedMessage;
  }
}
