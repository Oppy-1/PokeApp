import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ObjetOFstring'
})
export class PassPagePipe implements PipeTransform {

  transform( objeto: string[] = []): any  {
  return objeto.values()

  }

}
