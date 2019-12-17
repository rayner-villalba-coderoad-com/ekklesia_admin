import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { reducers } from '.';
import { EkklenewsEffects } from './ekklenews/ekklenews.effects';
import { CustomSerializer } from './router/router.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([
      EkklenewsEffects
    ]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [{
    provide: RouterStateSerializer,
    useClass: CustomSerializer
  }]
})
export class StateModule { }
