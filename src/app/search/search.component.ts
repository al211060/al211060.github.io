import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @ViewChild ('cmodal') cmodal:any;
  @ViewChild ('omodal') omodal:any;

  nombreh:string= "";
  indice: number = 0;
  miheroe: Heroe={
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  }

  constructor(private router: Router, private heroeService: HeroeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params =>{
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreh);
      //console.log(this.indice);

      if(this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }else{
        setTimeout(()=>{
          this.fracaso();
        },100);
      }
    })
   }

  fracaso(): void{
    this.omodal.nativeElement.click();
      setTimeout(()=>{
          //console.log("Espera");
          this.cmodal.nativeElement.click();
          this.router.navigate(['/heroes']);
      },5000);
  }

  ngOnInit(): void {
  }

}
