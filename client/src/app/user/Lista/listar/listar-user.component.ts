import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from "../../../Service/persona.service";
import { Persona } from 'src/app/Modelo/Persona';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VerDialogUserComponent } from './ver-dialog-user/ver-dialog-user.component';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})

export class ListarUserComponent {
  
  constructor(
              private service:PersonaService,
              private router:Router,
              public dialog: MatDialog
              ) {}

  personas: Persona[]; //lista de personas vacía
  ngOnInit(): void {

    if(window.localStorage.getItem("apiMessage")!=="OK USER"){
      this.router.navigate(["login"]);
    }
    //acá trabajo el método Listar
    this.service.getPersonas()
    .subscribe((data: Persona[])=>{
      this.personas=data;
    }) //de esta manera ya estaría mostrando todo en nuestro formulario
  }
 

  openDialog(persona: Persona): void{
    console.log(persona)
    const dialogConfig = new MatDialogConfig();
    localStorage.setItem("dni",persona.dni.toString());
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(VerDialogUserComponent, dialogConfig); 
  }

  logout(){
    window.localStorage.removeItem("apiMessage");
    this.router.navigate(["login"]);
  }

} //end class
