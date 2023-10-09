import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective {
  // Custom Attribute Directive
  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.innerText = "Custom Attribute Directive: This text is provided by the 'custom-attribute' directive. It is made bold by the Renderer. The highlighting while hovering is done using HostBinding and HostListener.";
    // Renderer
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    console.log("Tag = " + this.elementRef.nativeElement.tagName);
  }

  // @HostBinding
  // HostBinding('value') myValue; <-> [value]="myValue"
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  // @HostListener
  // HostListener('click') myClick(){ } <-> (click)="myClick()"
  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.backgroundColor = "yellow";
    this.color = "red";
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.backgroundColor = "transparent";
    this.color = "black";
  }

}
