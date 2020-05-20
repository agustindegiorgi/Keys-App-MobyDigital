import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom'
  }

  //NOTIFICACIÓN CUANDO AGREGAS A UNA PERSONA A LA LISTA
  success(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }
  
  //NOTIFICACIÓN CUANDO ELIMINAS A UNA PERSONA DE LA LISTA
  successDelete(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  //NOTIFICACIÓN CUANDO ELIMINAS A UNA PERSONA DE LA LISTA
  successUpdate(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  //NOTIFICACIÓN CUANDO INICIAS SESIÓN
  successLogin(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }
}
