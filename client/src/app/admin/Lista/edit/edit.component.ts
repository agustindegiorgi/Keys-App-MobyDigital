import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { NotificationService } from "../../../Service/notification.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  persona:Persona = new Persona();
  constructor(
    private router: Router, 
    public service: PersonaService,
    public dialogRef: MatDialogRef<EditComponent>,
    public notificationService: NotificationService 
    ) { }

  ngOnInit() {
    this.onEdit();
  }

  doorkeys = new FormControl();

  doorkeysList: string[] = ['Puerta central', 'Puerta cocina', 'Portón'];

  onEdit(){
    let dni=localStorage.getItem("dni");
    this.service.getPersonaDni(+dni)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  
  onUpdate(persona:Persona){
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
