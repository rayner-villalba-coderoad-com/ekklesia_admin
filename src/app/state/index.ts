import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

// Import all reducers
import * as fromEkklenews from './ekklenews/ekklenews.reducer';
import { RouterStateUrl } from './router/router.reducer';

// Set all states for the App
export interface AppState {
  ekklenews: fromEkklenews.EkklenewsState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  ekklenews: fromEkklenews.ekklenewsReducer,
  router: routerReducer
};
