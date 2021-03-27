import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayUserComponent } from './display-user/display-user.component';
import { PageNotFoundComponent } from '../shared/shared_components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayUserComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
