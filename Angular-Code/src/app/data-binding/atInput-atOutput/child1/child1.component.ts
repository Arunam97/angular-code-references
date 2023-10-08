import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  //@Input()
  @Input() childVariable1: string = "";
  @Input("childCustomProperty") childVariable2: string = ""; // 'childCustomProperty' will be used instead of 'childVariable2'.

  //@Output()
  @Output() childEventEmitter: EventEmitter<string> = new EventEmitter();
  @Output("childCustomEvent") childEventEmitter2: EventEmitter<string> = new EventEmitter(); // 'childCustomEvent' will be used instead of 'childEventEmitter2'.

  emitFunction() {
    this.childEventEmitter.emit("@Output(): This data was emitted from child1 component and sent to parent1 component.");
  }
}
