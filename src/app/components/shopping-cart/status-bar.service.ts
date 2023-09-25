import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusBarService {

  estadoBarra: string = 'Revision';

  cambiarEstadoBarra(estado:string){
    this.estadoBarra = estado;
  }

  obtenerEstadoBarra(){
    return this.estadoBarra;
  }
}
