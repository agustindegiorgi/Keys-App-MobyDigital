import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListarComponent } from './admin/lista/listar/listar.component';
import { AddComponent } from './admin/Lista/add/add.component';
import { EditComponent } from './admin/Lista/edit/edit.component';

import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';
import { ListarUserComponent } from './user/lista/listar/listar-user.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  { path: 'admin', component: AdminComponent, data: { title: 'Admin Home' } },
  { path:'user', component: UserComponent, data: { title: 'User Home' } },

 // http://keysapp.com/

  { path: 'listar', component: ListarComponent, pathMatch: 'prefix' },
  { path: 'listar-user', component: ListarUserComponent, pathMatch: 'prefix' },
  { path: 'add', component: AddComponent, pathMatch: 'prefix' },
  { path: 'edit', component: EditComponent, pathMatch: 'prefix' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
