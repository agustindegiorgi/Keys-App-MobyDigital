import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { ListarComponent } from './admin/lista/listar/listar.component';
import { ListarUserComponent } from './user/lista/listar/listar-user.component'
import { AddComponent } from './admin/lista/add/add.component';
import { EditComponent } from './admin/lista/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent, data: { title: 'Home' } },
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
