import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EkklenewsListComponent } from './list/ekklenews-list.component';
import { EkklenewsPageComponent } from './page/ekklenews-page.component';

const routes: Routes = [
  {
    path: '',
    component: EkklenewsListComponent
  },
  {
    path: 'nuevo',
    component: EkklenewsPageComponent
  },
  {
    path: ':ekklenewId',
    component: EkklenewsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkklenewsRoutingModule {}
