import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from "../../../Service/persona.service";
import { Persona } from 'src/app/Modelo/Persona';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VerDialogComponent } from './ver-dialog/ver-dialog.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { NotificationService } from "../../../Service/notification.service";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {

  personas: Persona[]; //lista de personas vacía
  
  constructor(
              private service:PersonaService, 
              private router:Router, 
              public dialog: MatDialog,
              public notificationService: NotificationService
              ) {}

  ngOnInit(): void {
    //acá trabajo el método Listar
    this.service.getPersonas()
    .subscribe((data: Persona[])=>{
      this.personas=data;
    }) //de esta manera ya estaría mostrando todo en nuestro formulario
  }

  Editar(persona:Persona):void
  {
    console.log(persona)
    localStorage.setItem("dni",persona.dni.toString());
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(EditComponent, dialogConfig);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(()=>{
      this.personas=this.personas.filter(p=>p!==persona);
      this.notificationService.successDelete(':: Se eliminó correctamente');
    })
  }

  openDialog(persona:Persona):void {
    console.log(persona)
    localStorage.setItem("dni",persona.dni.toString());
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(VerDialogComponent, dialogConfig); 
  }

  Nuevo() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddComponent, dialogConfig);
   }
   
} //end class
