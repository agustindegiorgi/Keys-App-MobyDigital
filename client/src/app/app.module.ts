import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; //con esta funcione el ServiceService
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //acá está el FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { LoginService } from "./service/login.service";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from "./user/user.component";
import { ListarUserComponent } from './user/lista/listar/listar-user.component';
import { HomeComponent } from "./home/home.component";
import { RootComponent } from "./root/root.component";
import { ListarComponent } from './admin/lista/listar/listar.component';
import { AddComponent } from './admin/lista/add/add.component';
import { EditComponent } from './admin/lista/edit/edit.component';
import { PersonaService } from "./service/persona-service";
import { VerDialogComponent } from "./admin/lista/listar/ver-dialog/ver-dialog.component";
import { VerDialogUserComponent } from "./user/lista/listar/ver-dialog-user/ver-dialog-user.component";

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    UserComponent,
    ListarUserComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    RootComponent
  ],
  entryComponents: [ VerDialogComponent, VerDialogUserComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    PersonaService, //declaro el servicio en providers
    LoginService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
