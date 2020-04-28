import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from "../../../Service/persona-service";
import { Persona } from 'src/app/Modelo/Persona';
import { VerDialogUserComponent } from './ver-dialog-user/ver-dialog-user.compon

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})

export class ListarUserComponent {
  personas: Persona[]; //lista de personas vacía
  constructor(private service:PersonaService, private router:Router, public dialog: MatDialog) {

  }

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
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(()=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }

  openDialog() {
    this.dialog.open(VerDialogUserComponent); 
  }

} //end class
