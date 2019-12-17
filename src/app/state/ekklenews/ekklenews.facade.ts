import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';

import { selectAllEkklenews, selectCurrentEkklenew } from './ekklenews.selectors';
import * as EkklenewsActions from './ekklenews.actions';
import { EkklenewsState } from './ekklenews.reducer';
import { Observable } from 'rxjs';
import { EventEk } from '@services/ekklenews/ekklenews.model';

@Injectable({
  providedIn: 'root'
})
export class EkklenewsFacade {
  ekklenews$: Observable<EventEk[]>;
  currentEkklenew$: Observable<EventEk>;

  constructor(private store: Store<EkklenewsState>, private actions$: ActionsSubject) {
    this.ekklenews$ = this.store.pipe(select(selectAllEkklenews));
    this.currentEkklenew$ = this.store.pipe(select(selectCurrentEkklenew));
  }

  selectEkklenew(itemId) {
    this.store.dispatch(new EkklenewsActions.EkklenewSelected(itemId));
  }

  loadEkklenews(value) {
    this.store.dispatch(new EkklenewsActions.LoadEkklenews(value));
  }

  addEkklenew(item) {
    this.store.dispatch(new EkklenewsActions.AddEkklenew(item));
  }

  updateEkklenew(item) {
    this.store.dispatch(new EkklenewsActions.UpdateEkklenew(item));
  }

  deleteEkklenew(item) {
    this.store.dispatch(new EkklenewsActions.DeleteEkklenew(item));
  }
}
