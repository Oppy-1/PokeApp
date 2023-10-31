import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styles: [
  ]
})
export class InformacionComponent {
@Input() pokemon: Pokemon = {
  name: '',
  pokedexN: 0,
  img: '',
  type: [''],
  description: ''
}
}
