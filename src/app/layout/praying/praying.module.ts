import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrayingRoutingModule } from './praying-routing.module';
import { PrayingComponent } from './praying.component';

@NgModule({
  declarations: [PrayingComponent],
  imports: [
    CommonModule,
    PrayingRoutingModule
  ]
})
export class PrayingModule { }
