import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { NotificationService } from "../../../Service/notification.service";
import { Doorkey } from 'src/app/Modelo/Doorkey';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona:Persona=new Persona();
  personas: Persona[]; //lista de personas vacía
  
  constructor(
              private router: Router, 
              public service: PersonaService,
              public dialogRef: MatDialogRef<AddComponent>,
              public notificationService: NotificationService 
              ) { }

  ngOnInit(): void {
    //acá trabajo el método Listar
    this.service.getPersonas()
    .subscribe((data: Persona[])=>{
      this.personas=data;
    }) //de esta manera ya estaría mostrando todo en nuestro formulario
  }

  doorkeys: Doorkey[] = [];

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
