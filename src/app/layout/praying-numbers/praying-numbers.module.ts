import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrayingNumbersRoutingModule } from './praying-numbers-routing.module';
import { PrayingNumbersComponent } from './praying-numbers.component';

@NgModule({
  declarations: [PrayingNumbersComponent],
  imports: [
    CommonModule,
    PrayingNumbersRoutingModule
  ]
})
export class PrayingNumbersModule { }
