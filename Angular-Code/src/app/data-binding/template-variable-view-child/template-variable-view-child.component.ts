import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-variable-view-child',
  templateUrl: './template-variable-view-child.component.html',
  styleUrls: ['./template-variable-view-child.component.css']
})
export class TemplateVariableViewChildComponent {
  // @ViewChild()
  @ViewChild('viewChildTemplateReference', {static: true}) viewChildVariable!: ElementRef;
}
