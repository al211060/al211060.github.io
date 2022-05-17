import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @ViewChild ('cmodal') cmodal:any;

  datos!: FormGroup;
  usuario:any={
    nombre:"xxx",
    apellido:"yyyy",
    genero:"",
    correo:"zzz@www.com",
    fnac:"01/01/0001"
  }
  usuarios = JSON.parse(localStorage.getItem("usuario")!);

  

  constructor() {
    this.datos = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)] ),
      'apellido': new FormControl('', [Validators.required, Validators.minLength(3)] ),
      'genero': new FormControl('', Validators.required),
      'correo': new FormControl('',[Validators.required,Validators.email]),
      'fnac': new FormControl('', Validators.required)
      });
      this.datos.setValue(this.usuario);
      if(this.usuarios == null){
        this.usuarios = [];
      }
  }

  guardarCambios():void{
    this.usuarios.push(this.datos.value);
    localStorage.setItem("usuario",JSON.stringify(this.usuarios));
    this.datos.reset(this.usuario);
    this.cmodal.nativeElement.click();
  }

  ngOnInit(): void {
  }

}
