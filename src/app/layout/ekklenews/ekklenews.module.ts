import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EkklenewsRoutingModule } from './ekklenews-routing.module';
import { EkklenewsListComponent } from './list/ekklenews-list.component';
import { EkklenewsPageComponent } from './page/ekklenews-page.component';
import { MaterialModule } from '@shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from './../layout.module';
@NgModule({
  declarations: [EkklenewsListComponent, EkklenewsPageComponent],
  imports: [
    CommonModule,
    EkklenewsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class EkklenewsModule {}
