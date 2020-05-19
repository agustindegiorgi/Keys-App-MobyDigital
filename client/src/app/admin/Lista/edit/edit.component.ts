import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { NotificationService } from "../../../Service/notification.service";
import { DoorkeyService } from 'src/app/Service/doorkey.service';
import { Doorkey } from 'src/app/Modelo/Doorkey';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  persona: Persona = new Persona();
  doorkeysList: Doorkey[]; //lista de llaves sin dueño
  doorkeys: Doorkey[] = [];

  constructor(
    private router: Router, 
    public service: PersonaService,
    public serviceDoorkey: DoorkeyService,
    public dialogRef: MatDialogRef<EditComponent>,
    public notificationService: NotificationService 
    ) { }

  ngOnInit() {
    this.onEdit();
    this.serviceDoorkey.getDoorkeysNull()
    .subscribe((data: Doorkey[])=>{
      this.doorkeysList = data;
    })
  }

  onEdit(){
    let dni=localStorage.getItem("dni");
    this.service.getPersonaDni(+dni)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  //actuliza los datos 
  onUpdate(persona: Persona){
    this.service.updatePersona(persona)
    .subscribe(data => {
      this.persona=data as any;
      this.notificationService.successUpdate(':: Se actualizó correctamente');
      this.onClose();
    })
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
    this.redirectTo('listar');
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
