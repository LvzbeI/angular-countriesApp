import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{


  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string ='';

  debouncer: Subject<string> = new Subject();


  termino: string = '';





  // suscribir al debuncer y emitir valor
    ngOnInit(): void {
      this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor =>{
        this.onDebounce.emit(valor);
        // console.log('debouncer:', valor);

      })
    // throw new Error('Method not implemented.');
  }
  buscar(){
    this.onEnter.emit( this.termino);
  }



  teclaPresionada(  event:any){
    this.debouncer.next( this.termino );
      // const valor= event.target.value;
      // console.log(valor);
      // console.log(this.termino);


  }




}
