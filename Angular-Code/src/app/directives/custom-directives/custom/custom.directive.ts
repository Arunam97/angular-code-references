import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {}

  ngOnInit() {
    this.elementRef.nativeElement.innerText = "Custom Directive: This text is provided by the 'custom' directive. It is made bold by the Renderer. The highlighting while hovering is done using HostBinding and HostListener.";
    // Renderer
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
  }

  // @HostBinding
  // HostBinding('value') myValue; <-> [value]="myValue"
  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
  @HostBinding('style.color') color : string = 'black';

  // @HostListener
  // HostListener('click') myClick(){ } <-> (click)="myClick()"
  @HostListener('mouseenter') onMouseEnter (eventData: Event) {
    this.backgroundColor = "yellow";
    this.color = "red";
  }

  @HostListener('mouseleave') onMouseLeave (eventData: Event) {
    this.backgroundColor = "transparent";
    this.color = "black";
  }
}
