import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {addLine, removeLine} from "./list.actions";
import {selectList, selectTotalLetters, selectTotalWords} from "./list.selectors";

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent {
  list$: Observable<string[]>; // Observable to store the list defined in list.reducer.ts
  totalWords$: Observable<number>; // Observable for Selector
  totalLetters$: Observable<number>; // Observable for Selector
  lineInput: string = ""; // Used for two-way binding with the input field.

  constructor(private store: Store<{ listReducerImport: string[] }>) {
    // this.list$ = store.select('listReducerImport');
    this.list$ = store.select(selectList); // list.selectors.ts - Select entire list
    this.totalWords$ = this.store.select(selectTotalWords); // list.selectors.ts - Select total number of words
    this.totalLetters$ = this.store.select(selectTotalLetters); // list.selectors.ts - Select total number of letters.
  }

  addToList() {
    this.store.dispatch(addLine({line: this.lineInput})) // The 'line' variable is defined in 'addLine' function in list.actions.ts
    this.lineInput = "";
  }

  removeLine(lineNumber: number) {
    this.store.dispatch(removeLine({index: lineNumber}));
  }

  // // OLD SYNTAX: Useful to know for projects using the alternate syntax.
  // addToList() {
  //   this.store.dispatch(new AddLine(this.lineInput));
  //   this.lineInput = "";
  // }
  //
  // removeLine(lineNumber: number) {
  //   this.store.dispatch(new RemoveLine(lineNumber));
  // }
}
