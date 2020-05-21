import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from "../../../Service/persona.service";
import { Persona } from 'src/app/Modelo/Persona';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VerDialogComponent } from './ver-dialog/ver-dialog.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { NotificationService } from "../../../Service/notification.service";
import { AddDoorkeysComponent } from '../add-doorkeys/add-doorkeys.component';
import { DoorkeyService } from 'src/app/Service/doorkey.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {

  personas: Persona[]; //lista de personas vacía
  persona: Persona = new Persona();
  
  constructor(
              private service: PersonaService,
              private serviceDoorkey: DoorkeyService,
              private router: Router, 
              public dialog: MatDialog,
              public notificationService: NotificationService,
              ) {}

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['dni', 'name', 'lastname', 'email', 'telephone', 'action-doorkeys', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void {
    if (window.localStorage.getItem("apiMessage")!=="OK ADMIN") {
      this.router.navigate(["login"]);
    }
    //acá trabajo el método Listar
    this.service.getPersonas()
    .subscribe((data: Persona[]) => {
      this.personas = data; //de esta manera ya estaría mostrando todo en nuestro formulario
        this.listData = new MatTableDataSource(this.personas);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
    })
    
  }

  onEdit(persona: Persona): void
  {
    console.log(persona)
    localStorage.setItem("dni",persona.dni.toString());
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(EditComponent, dialogConfig);
  }

  onDelete(persona: Persona) {
    this.service.deletePersona(persona)
    .subscribe(() => {
      this.personas=this.personas.filter(p=>p!==persona);
      this.redirectTo('listar');
      this.notificationService.success(':: Se eliminó correctamente');
    })
  }

  openDialog(persona: Persona): void {
    console.log(persona)
    localStorage.setItem("dni",persona.dni.toString());
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
    this.dialog.open(VerDialogComponent, dialogConfig); 
  }

  onNew() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddComponent, dialogConfig);
   }
   
   addDoorkeys() {
    this.serviceDoorkey.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(AddDoorkeysComponent, dialogConfig);
    console.log(window.localStorage)
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

  redirectTo(uri:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
} //end class

