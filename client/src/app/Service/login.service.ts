import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { 
  }

  login(username: number, password: number){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("https://keys-app-mobydigital.herokuapp.com/?username="+username +"&password="+password,{headers,responseType: 'text' as 'json'})
    // return this.http.get("http://localhost:8081?username="+username+"&password="+password,{headers,responseType: 'text' as 'json'})
    }

    form: FormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
    
    initializeFormGroup() {
      this.form.setValue({
        dni: null,
        password: null
      });
    }
}

