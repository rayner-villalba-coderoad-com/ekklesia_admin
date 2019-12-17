
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { EkklenewsActions, EkklenewsActionTypes } from './ekklenews.actions';
import { EventEk } from '@services/ekklenews/ekklenews.model';

export interface EkklenewsState extends EntityState<EventEk> {
  selectedEkklenewId: string | null;
}

export const adapter: EntityAdapter<EventEk> = createEntityAdapter<EventEk>();

export const initialState: EkklenewsState = adapter.getInitialState({
  selectedEkklenewId: null
});

export function ekklenewsReducer(
  state = initialState,
  action: EkklenewsActions
): EkklenewsState {
  switch (action.type) {
    case EkklenewsActionTypes.EkklenewsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case EkklenewsActionTypes.EkklenewSelected: {
      return Object.assign({}, state, { selectedEkklenewId: action.payload });
    }

    case EkklenewsActionTypes.EkklenewAdded: {
      return adapter.addOne(action.payload, state);
    }

    case EkklenewsActionTypes.EkklenewUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case EkklenewsActionTypes.EkklenewDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedEkklenewId = (state: EkklenewsState) => state.selectedEkklenewId;
// get the selectors
const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

// select the array of Ekklenews ids
export const selectEkklenewsIds = selectIds;

// select the dictionart of Ekklenews entitties
export const selectEkklenewEntities = selectEntities;

// select the array of Ekklenews
export const selectAllEkklenews = selectAll;

