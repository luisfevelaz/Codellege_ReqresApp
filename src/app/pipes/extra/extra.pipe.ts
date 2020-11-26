import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extra'
})
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
