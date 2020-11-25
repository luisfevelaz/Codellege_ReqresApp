import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extra'
})
export class ExtraPipe implements PipeTransform {

  transform(value: number): boolean {
    return (value % 2 == 0)? true : false;
  }

}
