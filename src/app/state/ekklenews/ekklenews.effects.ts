import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, catchError, mergeMap, filter } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { EkklenewsService } from '@services/ekklenews/ekklenews.service';


import * as ekklenewActions from './ekklenews.actions';
import { Action } from '@ngrx/store';
import { EventEk } from '@services/ekklenews/ekklenews.model';

@Injectable()
export class EkklenewsEffects {
  constructor(
    private actions$: Actions,
    private ekklenewsService: EkklenewsService
  ) {}

  @Effect()
  loadEkklenews$: Observable<Action> = this.actions$.pipe(
    ofType<ekklenewActions.LoadEkklenews>(ekklenewActions.EkklenewsActionTypes.LoadEkklenews),
    mergeMap((action: ekklenewActions.LoadEkklenews) =>
      this.ekklenewsService.getEkklenews().pipe(
        map((response: EventEk[]) => {
          const value = action.payload;
          const ekklenews = (value === '') ? response : response.filter(ekklenew => {
            return ekklenew.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
          return new ekklenewActions.EkklenewsLoaded(ekklenews);
        }),
        catchError(error => of(new ekklenewActions.EkklenewsLoadedFail(error)))
      )
    )
  );

  @Effect()
  addEkklenew$: Observable<Action> = this.actions$.pipe(
    ofType<ekklenewActions.AddEkklenew>(ekklenewActions.EkklenewsActionTypes.AddEkklenew),
    mergeMap((action: ekklenewActions.AddEkklenew) =>
      this.ekklenewsService.create(action.payload).pipe(
        map((res: any) => { console.log(res);
          return new ekklenewActions.EkklenewAdded(res); }),
        catchError(error => {
          console.log(error);
          return of(error);
        }))
    )
  );

  @Effect()
  updateEkklenew$: Observable<Action> = this.actions$.pipe(
    ofType<ekklenewActions.UpdateEkklenew>(ekklenewActions.EkklenewsActionTypes.UpdateEkklenew),
    mergeMap((action: ekklenewActions.UpdateEkklenew) =>
      this.ekklenewsService.update(action.payload).pipe(
        map((res: any) => new ekklenewActions.EkklenewUpdated(action.payload)),
        catchError(error => {
          console.log(error);
          return of(error);
        }))
    )
  );

  @Effect()
  deleteEkklenew$: Observable<Action> = this.actions$.pipe(
    ofType<ekklenewActions.DeleteEkklenew>(ekklenewActions.EkklenewsActionTypes.DeleteEkklenew),
    mergeMap((action: ekklenewActions.DeleteEkklenew) =>
      this.ekklenewsService.delete(action.payload).pipe(
        map((res: any) => new ekklenewActions.EkklenewDeleted(action.payload)),
        catchError(error => {
          console.log(error);
           return of(error);
        })
      )
    )
  );
}
