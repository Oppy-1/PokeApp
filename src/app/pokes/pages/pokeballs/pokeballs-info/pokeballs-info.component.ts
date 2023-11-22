import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokeballs } from 'src/app/common/interfaces/pokemon.interface';

@Component({
  selector: 'pokeballs-info',
  templateUrl: './pokeballs-info.component.html',
  styleUrls: ['./pokeballs-info.component.scss'],
})
export class PokeballsInfoComponent {
  @Input() pokeballInfo: Pokeballs = {
    name: '',
    price: '' || 0,
    img: '',
    ratio: '' || 0,
    info: '',
    generation: '',
  };
  @Input() show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();
  
}
