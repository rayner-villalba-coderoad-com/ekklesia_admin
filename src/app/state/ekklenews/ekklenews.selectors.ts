import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEkklenews from './ekklenews.reducer';
import { EventEk } from '@services/ekklenews/ekklenews.model';
import { getRouterState } from './../router/router.reducer';
// Ekklenews Selectors
export const selectEkklenewsState = createFeatureSelector<fromEkklenews.EkklenewsState>('ekklenews');

export const selectEkklenewsIds = createSelector(
  selectEkklenewsState,
  fromEkklenews.selectEkklenewsIds
);

export const selectEkklenewsEntities = createSelector(
  selectEkklenewsState,
  fromEkklenews.selectEkklenewEntities
);

export const selectAllEkklenews = createSelector(
  selectEkklenewsState,
  fromEkklenews.selectAllEkklenews
);

export const selectCurrentEkklenewId = createSelector(
  selectEkklenewsState,
  fromEkklenews.getSelectedEkklenewId
);

export const selectCurrentEkklenew = createSelector(
  selectEkklenewsEntities,
  getRouterState,
  (ekklenewsEntities, router): EventEk => {
    if (router.state && ekklenewsEntities[router.state.params.ekklenewId]) {
      return ekklenewsEntities[router.state.params.ekklenewId];
    } else {
      const emptyEkklenew: EventEk = {
        id: null,
        title: '',
        subtitle: '',
        eventDate: null,
        type: 'video',
        banner: null,
        description: ''
      };

      return emptyEkklenew;
    }
  }
);
