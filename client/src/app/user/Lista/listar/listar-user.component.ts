import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from "../../../Service/persona.service";
import { Persona } from 'src/app/Modelo/Persona';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VerDialogUserComponent } from './ver-dialog-user/ver-dialog-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})

export class ListarUserComponent {
  
  personas: Persona[]; //lista de personas vacía
  persona: Persona = new Persona();

  constructor(
              private service:PersonaService,
              private router:Router,
              public dialog: MatDialog
              ) {}

 listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['dni', 'name', 'lastname', 'email', 'telephone', 'action-doorkeys'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  
  ngOnInit(): void {
    if(window.localStorage.getItem("apiMessage")!=="OK USER") {
      this.router.navigate(["login"]);
    }
    //acá trabajo el método Listar
    this.service.getPersonas()
    .subscribe((data: Persona[]) => {
      this.personas=data; //de esta manera ya estaría mostrando todo en nuestro formulario
        this.listData = new MatTableDataSource(this.personas);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
    })
  }
 
  openDialog(persona: Persona): void{
    console.log(persona)
    const dialogConfig = new MatDialogConfig();
    localStorage.setItem("dni",persona.dni.toString());
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "37%";
    this.dialog.open(VerDialogUserComponent, dialogConfig); 
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  logout(){
    window.localStorage.removeItem("apiMessage");
    this.router.navigate(["login"]);
  }

} //end class
