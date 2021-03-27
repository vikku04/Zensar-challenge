// Angular Related
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { DisplayUserComponent } from './display-user/display-user.component';
import { DisplayUserHeaderComponent } from './display-user/display-user-header/display-user-header.component';

import { AddUserComponent } from '../crud-modules/add-user/add-user.component';
import { EditUserComponent } from '../crud-modules/edit-user/edit-user.component';
import { DeleteUserComponent } from '../crud-modules/delete-user/delete-user.component';


@NgModule({
  declarations: [
    DisplayUserComponent,
    DisplayUserHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DisplayUserComponent,
    DisplayUserHeaderComponent
  ],
  entryComponents: [AddUserComponent, EditUserComponent, DeleteUserComponent]
})
export class UserModule { }
