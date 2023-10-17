# Angular Reference Sheet

- [Components](#components)
    - [Lifecycle](#lifecycle)
        - [ngOnChanges](#ngonchanges)
        - [ngOnInit](#ngoninit)
        - [ngDoCheck](#ngdocheck)
        - [ngAfterContentInit](#ngaftercontentinit)
        - [ngAfterContentChecked](#ngaftercontentchecked)
        - [ngAfterViewInit](#ngafterviewinit)
        - [ngAfterViewChecked](#ngafterviewchecked)
        - [ngOnDestroy](#ngondestroy)
- [Data Binding](#data-binding)
    - [String Interpolation](#1-string-interpolation)
    - [Property Binding](#2-property-binding)
    - [Event Binding](#3-event-binding)
        - [$event](#event)
    - [Two-Way Binding - [(ngModel)]](#4-two-way-binding---ngmodel)
    - [@Input()](#input)
    - [@Output()](#output)
    - [Template Reference](#template-reference)
        - [@ViewChild](#viewchild)
    - [ng-content](#ng-content)
        - [@ContentChild()](#contentchild)
- [Directives](#directives)
    - [ngIf](#ngif)
    - [ngStyle](#ngstyle)
    - [ngClass](#ngclass)
    - [ngFor](#ngfor)
    - [ngSwitch](#ngswitch)
    - [Custom Directives](#custom-directives)
        - [Custom Attribute Directives](#custom-attribute-directives)
        - [Custom Structural Directives](#custom-structural-directives)
- [Services](#services)
- [Routing](#routing)
    - [Add a route](#add-a-route)
    - [Display the routed component](#display-the-routed-component)
    - [Route in HTML](#route-in-html)
        - [Absolute Paths](#absolute-paths)
        - [Relative Paths](#relative-paths)
    - [Active Router Styling](#active-router-styling)
    - [Route in TypeScript](#route-in-typescript)
        - [Absolute Paths](#absolute-paths-1)
        - [Relative Paths](#relative-paths-1)
    - [Route Parameters](#route-parameters)
    - [Query Parameters](#query-parameters)
    - [Nested Routing](#nested-routing)
    - [Preserving or Merging Query Parameters when navigating to sub-paths](#preserving-or-merging-query-parameters-when-navigating-to-sub-paths)
    - [Redirecting and Wildcard Route](#redirecting-and-wildcard-route)
    - [Route Guards](#route-guards)
        - [CanActivate](#canactivate)
        - [CanActivateChild](#canactivatechild)
        - [CanDeactivate](#candeactivate)
    - [Passing Static Data to a Route](#passing-static-data-to-a-route)
    - [Resolving Dynamic Data](#resolving-dynamic-data)
- [Observables](#observables)
    - [Creating a Custom Observable](#creating-a-custom-observable)
    - [Subscribing to an Observable](#subscribing-to-an-observable)
    - [Unsubscribing from an Observable](#unsubscribing-from-an-observable)
    - [Using Operators with Observables](#using-operators-with-observables)
    - [Subjects](#subjects)


## Components

**Reference: [new](Angular-Code/src/app/new)**

Components are the basic building blocks of Angular.

### Lifecycle

The lifecycle of an Angular component refers to the sequence of events that occur from the creation of the component to
its destruction. Angular components have a series of lifecycle hooks that developers can tap into to perform actions at
specific stages of a component's life.

Note: Lifecycle hooks are called after the constructor has been called.

1. #### ngOnChanges

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called after `@Input` property changes.

2. #### ngOnInit

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called once the component is initialized. Runs after the constructor.

3. #### ngDoCheck

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called during every change detection run.

4. #### ngAfterContentInit

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called after `ng-content` has been projected into the view.

5. #### ngAfterContentChecked

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called every time the projected content has been checked.

6. #### ngAfterViewInit

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called after the component's view and all child views have been initialized.

7. #### ngAfterViewChecked

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called after the component's view and all child views have been checked.

8. #### ngOnDestroy

**Reference: [lifecycle](Angular-Code/src/app/lifecycle)**

Called once the component is about to be destroyed.

## Data Binding

Data binding in Angular refers to the automatic synchronization of data between the model (component) and the view (
template) components.

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

A special variable in Angular event bindings that captures and provides access to the event object emitted by the DOM
event.

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

Directives are markers on a DOM element that tell Angular to attach a specific behavior to that element or transform the
DOM structure and appearance.

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

#### Custom Attribute Directives

**Reference: [custom-attribute-directives](Angular-Code/src/app/directives/custom-directives/custom-attribute-directives)**

Renderer: A service in Angular to perform low-level DOM manipulations in a way that is safe to use in any environment.

@HostBinding: Decorator to bind a host element property in a custom directive.

@HostListener: Decorator to subscribe to events of the host element in a custom directive.

#### Custom Structural Directives

**Reference: [custom-structural-directives](Angular-Code/src/app/directives/custom-directives/custom-structural-directives)**

User-defined directives that modify the structure of the DOM by adding, removing, or manipulating elements based on
specified conditions.

## Services

**Reference: [services](Angular-Code/src/app/services)**

Services are reusable components that provide shared business logic, data, or functionality across different parts of an
application.

## Routing

### Add a route

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent}
];
```

### Display the routed component

In `app.component.html`:

``` html
<router-outlet><router-outlet>
```

### Route in HTML

#### Absolute Paths

Absolute paths start with a `/`

``` html
<a routerLink="/home">Home</a>
<a routerLink="['/home']">Home</a>
```

#### Relative Paths

Relative paths can omit the front slash or start with `./`

``` html
<a routerLink="sub-path">Home/Sub-Path</a>
<a routerLink="./sub-path">Home/Sub-Path</a>
<a routerLink="['/home', 'sub-path']">Home/Sub-Path</a>
```

To go back one path use `../`

### Active Router Styling

`routerLinkActive` can be used to apply specific CSS class when a route is active. All parent paths will also be
considered active if a child path is accessed.

`[routerLinkActiveOptions]` can be used to apply CSS styling only when the exact path matches. (i.e. when we only want
the child path to be considered active and not the preceding parent paths.)

``` html
<a routerLink="/home"
   routerLinkActive="some-css-class"
   [routerLinkActiveOptions]="{exact: true}">Home</a>
```

### Route in TypeScript

#### Absolute Paths

``` typescript
constructor (private router: Router) {}

this.router.navigate(['/home']);
```

#### Relative Paths

Unlike `routerLink`, `Router` does not have access to the current path the component is on. That is why we have to
use `ActivatedRoute`.

``` typescript
constructor (private router: Router, private route: ActivatedRoute) {}

this.router.navigate(['sub-path'], {relativeTo: this.route});
```

### Route Parameters

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home/:paramOne/:paramTwo", component: HomeComponent}
];
```

To retrieve route parameters

``` typescript
constructor (private route: ActivatedRoute) {}

idOne: any = +this.route.snapshot.params['paramOne']; // To convert to number
idTwo: number = this.route.snapshot.params['paramTwo'];       
```

To dynamically check for changes in route parameters:

``` typescript
constructor(private route: ActivatedRoute) {}

idOne: number;
idTwo: number;
paramSubscription: Subscription = new Subscription();

this.paramSubscription = this.route.params.subscribe((params: Params) => {
    this.idOne = params['paramOne'];
    this.idTwo = params['paramTwo'];
});
```

To unsubscribe from changes:

``` typescript
this.paramSubscription.unsubscribe();
```

### Query Parameters

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent}
];
```

To set query parameters:

``` html
<a [routerLink]="[/home]"
    [queryParams]="{name:'Arunam', age: 26}"
    [fragment]="'info'">/home?name=Arunam&age=26#info</a>      
```

``` typescript
constructor (private router: Router) {}

this.router.navigate(['/home'], {
    queryParams: {name:'Arunam', age: 26}, 
    fragment: 'info'
});
```

To retrieve query parameters:

``` typescript
constructor(private route: ActivatedRoute) {}

params: any[] = this.route.snapshot.queryParams;
fragment: any = this.route.snapshot.fragment;

this.route.queryParams.subscribe(...);
this.route.fragment.subscribe(...);
```

### Nested Routing

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {
        path: "home", 
        component: HomeComponent,
        children: [
            {path: "sub-path1", component: SubPath1Component},
            {path: "sub-path2", component: SubPath2Component},
        ]
    }
];
```

Make sure to add

``` html 
<router-outlet></router-outlet>
``` 

to the parent component.

### Preserving or Merging Query Parameters when navigating to sub-paths

When navigating to a new route you can either:

`merge`: Preserves the existing query parameters while adding new ones. If there are query parameters with the same
name, the new ones will override the existing ones.

`preserve`: Preserves the existing query parameters. If you navigate to a different route without providing any query
parameters, the existing query parameters will be preserved.

``` typescript
constructor (private router: Router) {}

this.router.navigate(['sub-path'], {
    relativeTo: this.route,
    queryParams: {email: 'arunam@email.com'},
    queryParamsHandling: 'merge' 
});

this.router.navigate(['sub-path'], {
    relativeTo: this.route,
    queryParamsHandling: 'preserve' 
});
```

### Redirecting and Wildcard Route

Paths can be redirected to other paths.

Wildcard path can be used to load a component when none of the other paths match.

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "some-path", redirectTo: '/home'},
    {path: "**", redirectTo: '/page-not-found'},
];
```

### Route Guards

#### CanActivate

#### CanActivateChild

#### CanDeactivate

### Passing Static Data to a Route

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent, data: {message: "Message from route!"}},
];
```

To retrieve the data:

``` typescript
constructor(private route: ActivatedRoute) {}

// Retrieve the data once.
recievedMessage: string = this.route.snapshot.data['message'];
// Keep listening to the data for changes.
this.route.data.subscribe(...);
```

### Resolving Dynamic Data

## Observables

Observables are data sources that emit values over time and can be observed by components, enabling asynchronous programming and handling events, asynchronous requests, and data streams.

### Creating a Custom Observable

``` typescript
customObservable = new Observable((observer) => {
    setInterval(() => {
        observer.next("NEXT!");
        if (/* 'complete' condition */)
        {
            observer.complete();
        }
        if (/* 'error' condition */)
        {
            observer.error("ERROR");
        }
    }, 1000);
})
```

### Subscribing to an Observable

``` typescript
customSubscription: Subscription = new Subscription();
receivedData: any;

ngOnInit() 
{
    this.customSubscription = this.customObservable.subscribe({
        next: (data) => {
            this.receivedData = data;
        },
        error: (message) => {
            this.receivedData = message;
        },
        complete: () => {
            this.receivedData = "Complete!";
        }
    });
}
```

### Unsubscribing from an Observable

``` typescript
ngOnDestroy() 
{
    if(this.customSubscription)
    {
        this.customSubscription.unsubscribe();
    }
}
```

### Using Operators with Observables

### Subjects

Subjects are a special type of Observable that also act as an event emitter.

``` typescript
subject = new Subject<any>();

this.subject.subscribe((data) => {
    console.log(data);
});
    
this.subject.next("Message 1");
this.subject.next("Message 2");

this.subject.unsubscribe();
```