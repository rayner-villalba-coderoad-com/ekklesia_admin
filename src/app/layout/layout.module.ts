import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '@shared/modules/material/material.module';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ConfirmComponent} from './components/modals/confirm/confirm.component';
import { MAT_DATLOCALE_IDE_LOCALE } from '@angular/core';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, ParagraphComponent, FileUploadComponent, ConfirmComponent
    ],
    exports: [ParagraphComponent, FileUploadComponent, ConfirmComponent],
    entryComponents: [
        ConfirmComponent
    ]
})
export class LayoutModule {}
