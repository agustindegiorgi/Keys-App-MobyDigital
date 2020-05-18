import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router:Router) { }

    
  ngOnInit(){
    if(window.localStorage.getItem("apiMessage")!=="OK USER"){
      this.router.navigate(["login"]);
    }
  }


  Listar() {
    this.router.navigate(["listar-user"]);
   }

   logout(){
    window.localStorage.removeItem("apiMessage");
    this.router.navigate(["login"]);
  }

}
