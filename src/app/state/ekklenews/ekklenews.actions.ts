import { Action } from '@ngrx/store';
import { EventEk } from '@services/ekklenews/ekklenews.model';

export enum EkklenewsActionTypes {
  EkklenewSelected = '[Ekklenews] Selected',
  LoadEkklenews = '[Ekklenews] Load Data',
  EkklenewsLoaded = '[Ekklenews] Loaded Success',
  EkklenewsLoadedFail = '[Ekklenews] Loaded Fail',
  AddEkklenew = '[Ekklenews] Add Data',
  EkklenewAdded = '[Ekklenews] Data added',
  UpdateEkklenew = '[Ekklenews] Update Data',
  EkklenewUpdated = '[Ekklenews] Data Updated',
  DeleteEkklenew = '[Ekklenews] Delete Data',
  EkklenewDeleted = '[Ekklenews] Data Deleted',
}

export class EkklenewSelected implements Action {
  readonly type = EkklenewsActionTypes.EkklenewSelected;
  constructor(public payload: EventEk) {}
}

export class LoadEkklenews implements Action {
  readonly type = EkklenewsActionTypes.LoadEkklenews;
  constructor(public payload: string) {}
}

export class EkklenewsLoaded implements Action {
  readonly type = EkklenewsActionTypes.EkklenewsLoaded;
  constructor(public payload: EventEk[]) {}
}

export class EkklenewsLoadedFail implements Action {
  readonly type = EkklenewsActionTypes.EkklenewsLoadedFail;
  constructor(public payload: any) {}
}

export class AddEkklenew implements Action {
  readonly type = EkklenewsActionTypes.AddEkklenew;
  constructor(public payload: EventEk) {}
}

export class EkklenewAdded implements Action {
  readonly type = EkklenewsActionTypes.EkklenewAdded;
  constructor(public payload: EventEk) {}
}

export class UpdateEkklenew implements Action {
  readonly type = EkklenewsActionTypes.UpdateEkklenew;
  constructor(public payload: EventEk) {}
}

export class EkklenewUpdated implements Action {
  readonly type = EkklenewsActionTypes.EkklenewUpdated;
  constructor(public payload: EventEk) {}
}
export class DeleteEkklenew implements Action {
  readonly type = EkklenewsActionTypes.DeleteEkklenew;
  constructor(public payload: EventEk) {}
}

export class EkklenewDeleted implements Action {
  readonly type = EkklenewsActionTypes.EkklenewDeleted;
  constructor(public payload: EventEk) {}
}

export type EkklenewsActions = EkklenewSelected
  | LoadEkklenews
  | EkklenewsLoaded
  | EkklenewsLoadedFail
  | AddEkklenew
  | EkklenewAdded
  | UpdateEkklenew
  | EkklenewUpdated
  | DeleteEkklenew
  | EkklenewDeleted;
