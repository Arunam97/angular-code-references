import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  // Lifecycle Logs
  lifecycleLogs: string[] = [];

  // constructor
  constructor() {
    this.lifecycleLogs.push("constructor() called.");
  }

  // ngOnChanges
  @Input() inputData1 = "";
  ngOnChanges(changes: SimpleChanges): void {
    this.lifecycleLogs.push("ngOnChanges(changes) called.");
    for (let changedInput in changes)
    {
      let changedProperty = changes[changedInput];
      let before  = JSON.stringify(changedProperty.previousValue);
      let after = JSON.stringify(changedProperty.currentValue);
      this.lifecycleLogs.push("ngOnChanges(changes): Value of " + changedInput + " changed from " + before + " to " + after + ".");
    }
  }

  // ngOnInit
  ngOnInit() {
    this.lifecycleLogs.push("ngOnInit() called.");
  }

  // ngDoCheck
  ngDoCheck() {
    this.lifecycleLogs.push("ngDoCheck() called.");
  }

  // ngAfterContentInit
  ngAfterContentInit() {
    this.lifecycleLogs.push("ngAfterContentInit() called.");
  }

  // ngAfterContentChecked
  ngAfterContentChecked() {
    this.lifecycleLogs.push("ngAfterContentChecked() called.");
  }

  // ngAfterViewInit
  ngAfterViewInit() {
    this.lifecycleLogs.push("ngAfterViewInit() called.");
  }

  // ngAfterViewChecked
  ngAfterViewChecked() {
    this.lifecycleLogs.push("ngAfterViewChecked() called.");
  }

  // ngOnDestroy
  ngOnDestroy() {
    this.lifecycleLogs.push("ngOnDestroy() called.");
  }
}
