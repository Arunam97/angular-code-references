import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-reference-view-child',
  templateUrl: './template-reference-view-child.component.html',
  styleUrls: ['./template-reference-view-child.component.css']
})
export class TemplateReferenceViewChildComponent {
  // @ViewChild()
  @ViewChild('viewChildTemplateReference', {static: true}) viewChildVariable!: ElementRef;
}
