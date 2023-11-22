import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';
import { getColorByType } from '../../../../common/util/utils';
import { PokemonService } from 'src/app/common/services/pokemon.service';
@Component({
  selector: 'app-favorite-pokemon',
  templateUrl: './favorite-pokemon.component.html',
  styleUrls: ['./favorite-pokemon.component.scss']
})
export class FavoritePokemonComponent implements OnInit {
  cacheStore: Pokemon [] = []
  constructor(private pokemonservice: PokemonService ){
  }
  ngOnInit(): void {
   this.loadLocalStorage()
  }
  loadLocalStorage(){
  if( !localStorage.getItem('pokemons')) return;
  this.cacheStore = JSON.parse(localStorage.getItem('pokemons')!);
}



getColors(type: string) {
  return getColorByType(type);
} 
}
