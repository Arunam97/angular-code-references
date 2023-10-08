# Angular Reference Sheet

## Components

**Reference: [new](Angular-Code/src/app/new)**

Components are the basic building blocks of Angular.

### Lifecycle

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

When an Angular component is loaded and executed on a browser it goes through different stages of its lifecycle. We can use lifecycle hooks provided by Angular to run our code after specific stages of the component have completed.

1. #### ngOnChanges

Called after `@Input` property changes.

2. #### ngOnInit

Called once the component is initialized. Runs after the constructor.

3. #### ngDoCheck

Called during every change detection run.

4. #### ngAfterContentInit

Called after `ng-content` has been projected into the view.

5. #### ngAfterContentChecked

Called every time the projected content has been checked.

6. #### ngAfterViewInit

Called after the component's view and all child views have been initialized.

7. #### ngAfterViewChecked

Called after the component's view and all child views have been checked.

8. #### ngOnDestroy

Called once the component is about to be destroyed.

## Data Binding

### 1. String Interpolation

### 2. Property Binding

### 3. Event Binding

#### $event

### 4. Two-Way Binding - [(ngModel)]

### @Input()

### @Output()

### Element Reference

### @ViewChild

### ng-content

#### @ContentChild()

## Directives

### ngIf

### ngStyle

### ngClass

### ngFor

### Custom Directives

#### Renderer

#### @HostListener

#### @HostBinding