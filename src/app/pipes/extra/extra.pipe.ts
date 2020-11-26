import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extra'
})

// recibe el id del usuario y dependiendo si es múltiplo de 2, 3 u otro devuelve una profesión
export class ExtraPipe implements PipeTransform {

  transform(value: number): string {
    if(value % 2 == 0){
      return "Ingeniero en sistemas";
    }else if(value % 3 == 0){
      return "Ingeniero en Electrónica";
    }else{
      return "Ingeniero en Nanotecnología";
    }
  }

}
