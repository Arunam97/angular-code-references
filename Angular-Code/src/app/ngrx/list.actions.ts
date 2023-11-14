import {createAction, props} from "@ngrx/store";

export const addLine = createAction(
  '[List] Add',
  props<{ line: string }>()
);

export const removeLine = createAction(
  '[List] Remove',
  props<{ index: number }>()
);

// // OLD SYNTAX: Useful to know for projects using the alternate syntax.
// export const ADD = '[List] Add';
// export const REMOVE =  '[List] Remove';
//
// export class AddLine implements Action {
//   readonly type = ADD;
//   line: string;
//
//   constructor(newLine: string){
//     this.line = newLine;
//   }
// }
//
// export class RemoveLine implements Action {
//   readonly type = REMOVE;
//   index: number;
//
//   constructor(indexToRemove: any) {
//     this.index = indexToRemove;
//   }
// }
//
// export type ListActions = AddLine | RemoveLine;
