# Angular Reference Sheet

## Components

**Reference: [new](Angular-Code/src/app/new)**

Components are the basic building blocks of Angular.

### Lifecycle

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

The lifecycle of an Angular component refers to the sequence of events that occur from the creation of the component to its destruction. Angular components have a series of lifecycle hooks that developers can tap into to perform actions at specific stages of a component's life.

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

Data binding in Angular refers to the automatic synchronization of data between the model (component) and the view (template) components.

### 1. String Interpolation

**Reference: [basic-data-binding](Angular-Code/src/app/data-binding/basic-data-binding)**

Binding data values as strings directly into the template.

### 2. Property Binding

**Reference: [basic-data-binding](Angular-Code/src/app/data-binding/basic-data-binding)**

Binding data from a component to a property of a DOM element.

### 3. Event Binding

**Reference: [basic-data-binding](Angular-Code/src/app/data-binding/basic-data-binding)**

Binding methods from a component to DOM events to handle user interactions.

#### $event

**Reference: [basic-data-binding](Angular-Code/src/app/data-binding/basic-data-binding)**

A special variable in Angular event bindings that captures and provides access to the event object emitted by the DOM event.

### 4. Two-Way Binding - [(ngModel)]

**Reference: [basic-data-binding](Angular-Code/src/app/data-binding/basic-data-binding)**

Binding both the property and event together for real-time updates between the component and the view.

### @Input()

**Reference: [atInput-atOutput](Angular-Code/src/app/data-binding/atInput-atOutput)**

Decorator used to pass data into a component.

### @Output()

**Reference: [atInput-atOutput](Angular-Code/src/app/data-binding/atInput-atOutput)**

Decorator used to emit custom events from a component.

### Template Reference

**Reference: [template-reference-view-child](Angular-Code/src/app/data-binding/template-reference-view-child)**

A way to refer to a DOM element or a directive in a template.

#### @ViewChild

**Reference: [template-reference-view-child](Angular-Code/src/app/data-binding/template-reference-view-child)**

Decorator used to access a child component or directive from a parent component.

### ng-content

**Reference: [ngContent-atContentChild](Angular-Code/src/app/data-binding/ngContent-atContentChild)**

A placeholder in a component's template that allows the insertion of content from the parent component.

#### @ContentChild()

**Reference: [ngContent-atContentChild](Angular-Code/src/app/data-binding/ngContent-atContentChild)**

Decorator used to access a content child component or directive from a parent component.

## Directives

Directives are markers on a DOM element that tell Angular to attach a specific behavior to that element or transform the DOM structure and appearance.

### ngIf

**Reference: [basic-directives](Angular-Code/src/app/directives/basic-directives)**

A structural directive that conditionally includes or excludes a template based on an expression.

### ngStyle

**Reference: [basic-directives](Angular-Code/src/app/directives/basic-directives)**

A directive to set inline styles dynamically based on the component's state.

### ngClass

**Reference: [basic-directives](Angular-Code/src/app/directives/basic-directives)**

A directive to add or remove CSS classes dynamically based on the component's state.

### ngFor

**Reference: [basic-directives](Angular-Code/src/app/directives/basic-directives)**

A structural directive to iterate over a list of items.

### ngSwitch

**Reference: [basic-directives](Angular-Code/src/app/directives/basic-directives)**

A directive used for conditional rendering based on the value of an expression.

### Custom Directives

**Reference: [custom-directives](Angular-Code/src/app/directives/custom-directives)**

User-defined directives to extend the behavior of elements in the DOM.

#### Renderer

A service in Angular to perform low-level DOM manipulations in a way that is safe to use in any environment.

#### @HostBinding

Decorator to bind a host element property in a custom directive.

#### @HostListener

Decorator to subscribe to events of the host element in a custom directive.

## Services

**Reference: [services](Angular-Code/src/app/services)**