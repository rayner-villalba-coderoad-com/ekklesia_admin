import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachingsRoutingModule } from './teachings-routing.module';
import { TeachingsListComponent } from './teachings-list/teachings-list.component';
import { TeachingPageComponent } from './teaching-page/teaching-page.component';
import { MaterialModule } from '@shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from './../layout.module';
@NgModule({
  declarations: [TeachingsListComponent, TeachingPageComponent],
  imports: [
    CommonModule,
    TeachingsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class TeachingsModule { }
