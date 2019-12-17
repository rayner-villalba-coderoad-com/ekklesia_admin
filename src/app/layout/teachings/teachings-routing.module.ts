import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachingsListComponent } from './teachings-list/teachings-list.component';
import { TeachingPageComponent } from './teaching-page/teaching-page.component';

const routes: Routes = [
  {
    path: '',
    component: TeachingsListComponent
  },
  {
    path: 'nuevo',
    component: TeachingPageComponent
  },
  {
    path: ':teachingId',
    component: TeachingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachingsRoutingModule { }
