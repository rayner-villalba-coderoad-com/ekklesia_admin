import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

import { createFeatureSelector } from '@ngrx/store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot) {
    const { url, root: {queryParams} } = routerState;
    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');
