import {Component} from '@angular/core';

@Component({
  selector: 'app-basic-data-binding',
  templateUrl: './basic-data-binding.component.html',
  styleUrls: ['./basic-data-binding.component.css']
})
export class BasicDataBindingComponent {
  // String Interpolation
  myName: string = "Arunam Gupta.";

  HelloWorld(): string {
    return "Hello World!";
  }

  // Property Binding
  propertyBindingText: string = "Property Binding: This text was inserted into the <p> element using Property Binding.";

  // Event Binding
  eventBindingText: string = "Event Binding: The button has not yet been clicked.";

  eventBindingFunction(): void {
    this.eventBindingText = "Event Binding: The button was clicked!";
  }

  // $event
  dollarEvent(event: Event) {
    const element = event.target as HTMLElement;
    if (element.style.color === 'red' && element.style.background === 'yellow') {
      // If already highlighted, remove the highlighting
      element.style.color = '';
      element.style.background = '';
    } else {
      // If not highlighted, add highlighting
      element.style.color = 'red';
      element.style.background = 'yellow';
    }
  }

  // [(ngModel)] - Two-Way Binding
  ngModelText: string = "[(ngModel)] - Two-Way Binding : This text is two way bound to the input field below using ngModel. Changes will be reflected in both places.";
}
