import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../../../../Service/persona.service";
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { Doorkey } from "src/app/Modelo/Doorkey";
import { MatDialogRef } from '@angular/material/dialog';
import { DoorkeyService } from 'src/app/Service/doorkey.service';
import { NotificationService } from "../../../../Service/notification.service";

@Component({
  selector: 'app-ver-dialog',
  templateUrl: './ver-dialog.component.html',
  styleUrls: ['./ver-dialog.component.css']
})

export class VerDialogComponent implements OnInit {
  
  persona: Persona = new Persona();
  doorkey: Doorkey = new Doorkey();
  
  doorkeys: Doorkey[] = [];

  constructor(
              private service: PersonaService,
              private router: Router,
              public dialogRef: MatDialogRef<VerDialogComponent>,
              public serviceDoorkey: DoorkeyService,
              public notificationService: NotificationService
              ) {}

  ngOnInit(): void {
    let dni = localStorage.getItem("dni");
    console.log(dni)
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

