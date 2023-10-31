import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';

@Pipe({
  name: 'passPage'
})
export class PassPagePipe implements PipeTransform {

  transform(  pokemons: Pokemon[], page: number = 0) : Pokemon[] {
    return pokemons.slice (page, page + 12);

  }

}
