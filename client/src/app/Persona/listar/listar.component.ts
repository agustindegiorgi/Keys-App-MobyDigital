import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from "../../Service/persona-service";
import { Persona } from 'src/app/Modelo/Persona';
import { MatDialog } from '@angular/material/dialog';
import { VerDialogComponent } from './ver-dialog/ver-dialog.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {
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

  Editar(persona:Persona):void{
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
    this.dialog.open(VerDialogComponent); 
  }

} //end class
