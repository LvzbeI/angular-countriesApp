import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {


  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino:string){
    this.hayError=false;
    this.termino=termino;
    // console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
    .subscribe( paises =>{
      console.log(paises);

      this.paises=paises;
    }, (error)=>{
      this.hayError=true;
      this.paises=[];
      // console.log('Error mi compa');
      // console.info(error);
    });
  }





}
