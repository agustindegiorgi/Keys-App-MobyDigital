import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona-service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  persona:Persona = new Persona();
  constructor(private router:Router,private service:PersonaService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let dni=localStorage.getItem("dni");
    this.service.getPersonaDni(+dni)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  
  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data as any;
      alert("Actualizado exitosamente!");
      this.router.navigate(["listar"]);
    })
  }

}
