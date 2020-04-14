import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; //con esta funcione el ServiceService
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //acá está el FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AppRootComponent } from './app-root/app-root.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { PersonaService } from "./Service/persona-service";
import { VerDialogComponent } from "./Persona/listar/ver-dialog/ver-dialog.component";

@NgModule({
  declarations: [
    LoginComponent,
    AdminHomeComponent,
    AppRootComponent,
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  entryComponents: [ VerDialogComponent ],
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
    PersonaService //declaro el servicio en providers
  ], 
  bootstrap: [AppRootComponent]
})
export class AppModule { }
