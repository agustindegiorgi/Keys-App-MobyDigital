import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from "../../../Service/persona-service";
import { Persona } from 'src/app/Modelo/Persona';
import { MatDialog } from '@angular/material/dialog';
import { VerDialogUserComponent } from './ver-dialog-user/ver-dialog-user.component';

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

  openDialog() {
    this.dialog.open(VerDialogUserComponent); 
  }

} //end class
