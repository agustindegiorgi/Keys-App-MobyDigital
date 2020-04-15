import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface LoginUser {

}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
  }

  login(dni: number, pass: string)
  {
    return this.http.post<LoginUser>("localhost:5000/login", {}, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
          }
        )
    });
  }
}
