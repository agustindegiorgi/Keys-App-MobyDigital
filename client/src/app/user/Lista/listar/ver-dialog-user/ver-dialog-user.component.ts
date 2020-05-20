import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../../../../Service/persona.service";
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { Doorkey } from "src/app/Modelo/Doorkey";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-dialog-user',
  templateUrl: './ver-dialog-user.component.html',
  styleUrls: ['./ver-dialog-user.component.css']
})
export class VerDialogUserComponent implements OnInit {

  persona: Persona = new Persona();
  doorkeys: Doorkey[] = [];
  
  constructor(
              private service: PersonaService, 
              private router: Router,
              public dialogRef: MatDialogRef<VerDialogUserComponent>
              ) {}

  ngOnInit(): void {
    let dni = localStorage.getItem("dni");
    this.service.getPersonaDni(+dni)
    .subscribe(data => {
      this.persona = data;
    })
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}

