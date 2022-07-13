import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  `
    li{
      cursor: pointer;
    }

`

  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias : boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino:string){
     this.mostrarSugerencias =false;
    this.hayError=false;
    this.termino=termino;
    // console.log(this.termino);

    this.paisService.buscarPais(this.termino)
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


  sugerencias( termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    // TODO: mostrar sugergencias
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => {
        this.paisesSugeridos = [];
      }
    );

  }


buscarSugerido( termino: string){
    this.buscar(termino);

}

}
