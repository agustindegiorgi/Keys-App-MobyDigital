import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Persona } from 'src/app/Modelo/Persona';
import { Doorkey } from 'src/app/Modelo/Doorkey';
import { PersonaService } from 'src/app/Service/persona.service';
import { DoorkeyService } from 'src/app/Service/doorkey.service';

import { MatDialogRef } from "@angular/material/dialog";
import { NotificationService } from "../../../Service/notification.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona();
  personas: Persona[]; //lista de personas vacía
  doorkeys: Doorkey[] = [];
  doorkeysList: Doorkey[];
  
  constructor(
              private router: Router, 
              public service: PersonaService,
              public serviceDoorkey: DoorkeyService,
              public dialogRef: MatDialogRef<AddComponent>,
              public notificationService: NotificationService 
              ) { }

  ngOnInit(): void {
    this.serviceDoorkey.getDoorkeys()
    .subscribe((data: Doorkey[])=>{
      this.doorkeysList=data;
    }) //acá traigo la lista de llaves al selector
  }

  onClear() {
  this.service.form.reset();
  this.service.initializeFormGroup();
  }

  onSubmit() {
    this.service.createPersona(this.persona)
    .subscribe(data => {
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
    this.redirectTo('listar');
  }

    redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
