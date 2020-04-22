import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from "../Modelo/Persona";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private http:HttpClient) { }

<<<<<<< HEAD
  private Url:string="http://localhost:8081/api"; //host de backend, la barra '/' sola es el index
=======
  private Url:string="http://localhost:8080/api/users"; //host de backend, la barra '/' sola es el index
>>>>>>> parent of 8cad147a... front-

  getPersonas():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url); //obtengo todos los datos de la URL de arriba, que se refiere al backend
    
  }

  createPersona(persona:Persona) {
    return this.http.post<Persona>(this.Url+"/add",persona);
  }

  getPersonaDni(dni:number){
    return this.http.get<Persona>(this.Url+"/"+dni);
  }

  updatePersona(persona:Persona){
    return this.http.put(this.Url+"/update/"+persona.dni,persona);
  } //borré el <Persona>, es decir el template, porque eso es "a este objeto lo casteo", casteo es 

  deletePersona(persona:Persona){
    return this.http.delete(this.Url+"/delete/"+persona.dni);
  }
}
