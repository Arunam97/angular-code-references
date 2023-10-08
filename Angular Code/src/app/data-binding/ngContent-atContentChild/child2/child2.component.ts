import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  // @ContentChild()
  @ContentChild("ngContent1TemplateReferenceVariable", {static: true}) ngContent1Variable!: ElementRef;
  @ContentChild("ngContent2TemplateReferenceVariable", {static: true}) ngContent2Variable!: ElementRef;
  ngContent1Text = "";
  ngContent2Text = "";

  ngAfterContentInit() {
    this.ngContent1Text = this.ngContent1Variable.nativeElement.textContent;
    this.ngContent2Text = this.ngContent2Variable.nativeElement.textContent;
  }
}
