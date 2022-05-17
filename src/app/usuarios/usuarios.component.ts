import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @ViewChild ('cmodal') cmodal:any;
  @ViewChild ('omodal') omodal:any;

  usuarios = JSON.parse(localStorage.getItem("usuario")!);
  
  constructor(private router: Router) { 
    if(this.usuarios == null){
      setTimeout(()=>{
        this.vacio();
      },100);
    }
  }

  vacio(): void{
    this.omodal.nativeElement.click();
      setTimeout(()=>{
          this.cmodal.nativeElement.click();
          this.router.navigate(['/home']);
      },5000);
  }

  ngOnInit(): void {
  }

}
