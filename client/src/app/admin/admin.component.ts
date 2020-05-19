import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

  constructor(private router:Router) {}
   
  ngOnInit(){
    if(window.localStorage.getItem("apiMessage")!=="OK ADMIN"){
      this.router.navigate(["login"]);
    }
  }

  Listar() {
   this.router.navigate(["listar"]);
  }
   logout(){
     window.localStorage.removeItem("apiMessage");
     this.router.navigate(["login"]);
   }
}

