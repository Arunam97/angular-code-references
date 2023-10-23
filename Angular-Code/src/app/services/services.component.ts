import {Component} from '@angular/core';
import {BasicService} from "./basic-service/basic.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
  // providers: [BasicService] -> Use this if you want a new instance of the service rather than the common one.
})

// Make sure to declare all services needed in the constructor.
export class ServicesComponent {

  constructor(private basicService: BasicService) {
    this.basicService.serviceEmitter.subscribe(
      (message: string) => {
        console.log("Emitter Message: " + message);
      }
    )
  }

  basicServiceValue: string = "";
  people: { name: string, email: string }[] = [];

  ngOnInit() {
    this.basicServiceValue = this.basicService.serviceFunction("Value passed into BasicService.");
    this.people = this.basicService.getPeople();
  }

  addPerson(name: string, email: string) {
    this.basicService.addPerson({name: name, email: email});
    this.basicService.serviceEmitter.emit(name + " was added.");
  }
}
