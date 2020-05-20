import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoorkeyService } from 'src/app/Service/doorkey.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/Service/notification.service';
import { Doorkey } from 'src/app/Modelo/Doorkey';

@Component({
  selector: 'app-add-doorkeys',
  templateUrl: './add-doorkeys.component.html',
  styleUrls: ['./add-doorkeys.component.css']
})

export class AddDoorkeysComponent implements OnInit {

  doorkey: Doorkey = new Doorkey();

  constructor(
              private router: Router,
              public serviceDoorkey: DoorkeyService,
              public dialogRef: MatDialogRef<AddDoorkeysComponent>,
              public notificationService: NotificationService 
              ) { }

  ngOnInit(): void {}

  onClear() {
    this.serviceDoorkey.form.reset();
    this.serviceDoorkey.initializeFormGroup();
  }

    redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  onClose() {
    this.serviceDoorkey.form.reset();
    this.serviceDoorkey.initializeFormGroup();
    this.dialogRef.close();
    this.redirectTo('listar');
  }

  onSubmit() {
    this.serviceDoorkey.createDoorkey(this.doorkey)
    .subscribe(data => {
    this.serviceDoorkey.form.reset();
    this.serviceDoorkey.initializeFormGroup();
    this.notificationService.success(':: Se agregó correctamente');
    this.onClose();
    })
  }
}
