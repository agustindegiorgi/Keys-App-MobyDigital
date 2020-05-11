import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../../../../Service/persona.service";
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { Doorkey } from "src/app/Modelo/Doorkey";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-dialog',
  templateUrl: './ver-dialog.component.html',
  styleUrls: ['./ver-dialog.component.css']
})

export class VerDialogComponent implements OnInit {

  personas: Persona[]; //lista de personas vacía
  doorkeys: Doorkey[] = [];

  constructor(
              private service: PersonaService,
              private router: Router,
              public dialogRef: MatDialogRef<VerDialogComponent>
              ) {}

  ngOnInit(): void {
    //acá trabajo el método Listar
    this.service.getPersonas()
      .subscribe((data: Persona[])=>{
        this.personas=data;
    }) //de esta manera ya estaría mostrando todo en nuestro formulario
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
