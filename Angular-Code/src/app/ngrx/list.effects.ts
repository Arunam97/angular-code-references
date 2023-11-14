import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {addLine, removeLine} from "./list.actions";

@Injectable()
export class ListEffects {
  // Each property here is a separate effect that takes place.
  logAddLine$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addLine),
        tap((action) => console.log('Added Line:', action.line))
      ),
    { dispatch: false } // No new actions are dispatched
  );

  logRemoveLine$ = createEffect(() =>
      this.actions$.pipe(
        ofType(removeLine),
        tap((action) => console.log('Removed Line Number:', action.index + 1))
      ),
    { dispatch: false } // No new actions are dispatched
  );

  constructor(private actions$: Actions) {}
}
