import {createReducer, on} from "@ngrx/store";
import {addLine, removeLine} from "./list.actions";

const listInitialState: string[] = [];

export const listReducer = createReducer(
  listInitialState,
  on(addLine, (state, action) =>
  {
    return state.concat(action.line);
  }),
  on(removeLine, (state, action) =>
  {
    return state.slice(0, action.index).concat(state.slice(action.index + 1));
  })
);

// // OLD SYNTAX: Useful to know for projects using the alternate syntax.
// export function listReducer(state = listInitialState, action: ListActions | Action)
// {
//   if (action.type === ADD)
//   {
//     return state.concat((action as AddLine).line);
//   }
//   if (action.type === REMOVE)
//   {
//     return state.slice(0, (action as RemoveLine).index).concat(state.slice((action as RemoveLine).index + 1));
//   }
//   return state;
// }
