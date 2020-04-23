import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  { path: 'admin', component: AdminComponent, data: { title: 'Admin Home' } },
  { path:'user', component: UserComponent, data: { title: 'User Home' } },

 // http://keysapp.com/

  { path: 'listar', component: ListarComponent, pathMatch: 'prefix' },
  { path: 'add', component: AddComponent, pathMatch: 'prefix' },
  { path: 'edit', component: EditComponent, pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
