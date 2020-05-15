import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from "../Modelo/Persona";
import { Observable } from 'rxjs';
import { Doorkey } from '../Modelo/Doorkey';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DoorkeyService {

  constructor(private http:HttpClient) { }

  //host de backend, la barra '/' sola es el home//host de backend, la barra '/' sola es el home
  private Url:string="https://keys-app-mobydigital.herokuapp.com/api";
  //private Url:string="http://localhost:8081/api";

  getDoorkeys():Observable<Doorkey[]> {
    return this.http.get<Doorkey[]>(this.Url + "/doorkeys"); //obtengo todos los datos de la URL de arriba, que se refiere al backend
  }
  getDoorkeysnull():Observable<Doorkey[]> {
    return this.http.get<Doorkey[]>(this.Url + "/doorkeysnull"); //obtengo todas las llaves sin dueño
  }
  
  createDoorkey(doorkey:Doorkey) {
    return this.http.post<Doorkey>(this.Url + "/doorkey", doorkey);
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: ''
    });
  }
}
