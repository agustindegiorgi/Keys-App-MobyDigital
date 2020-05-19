import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: number;
  password: number;
  message: any;

  constructor(private loginService: LoginService, private router: Router) {

  }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    let resp = this.loginService.login(this.username, this.password);

    resp.subscribe(data => {
      console.log(data)
      this.message = data;
      if (data == 'OK ADMIN' ) {
        window.localStorage.setItem("apiMessage",data.toString()) 
       this.router.navigate(["admin"])
      }
      else {
        if (data == 'OK USER') {
          window.localStorage.setItem("apiMessage",data.toString())
          this.router.navigate(["user"])
        }
        else {
          alert('Usuario o Contraseña mal ingresados')
        }
      }
    });
  }

  onKeyDown(e: KeyboardEvent) {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || 
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return;  // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput: string = event.clipboardData
      .getData('text/plain')
      .replace(/\D/g, ''); // get a digit-only string
    document.execCommand('insertText', false, pastedInput);
  }

} //Fin clase
