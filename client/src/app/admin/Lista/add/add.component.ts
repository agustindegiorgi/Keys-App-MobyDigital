import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { NotificationService } from "../../../Service/notification.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona:Persona=new Persona();

  constructor(
              private router: Router, 
              public service: PersonaService,
              public dialogRef: MatDialogRef<AddComponent>,
              public notificationService: NotificationService 
              ) { }

  ngOnInit(): void {
  }

  keysdoors = new FormControl();

  keysdoorList: string[] = ['Puerta central', 'Puerta cocina', 'Portón'];

  onClear() {
  this.service.form.reset();
  this.service.initializeFormGroup();
  }

  onSubmit() {
    this.service.createPersona(this.persona)
    .subscribe(data=> {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Se agregó correctamente');
    this.onClose();
    })
  }
  
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
    this.router.navigate(["listar"]);
  }

}
