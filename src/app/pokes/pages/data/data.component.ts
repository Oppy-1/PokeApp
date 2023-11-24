import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon, Skill } from 'src/app/common/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/common/services/pokemon.service';
import { getColorByType } from 'src/app/common/util/utils';

@Component({
  selector: 'pokemon-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @Input() pokemonData: Pokemon = {
    name: '',
    pokedexN: 0,
    img: '',
    type: [''],
    description: '',
    skill: [],
  };
  skills: Skill[] = []
  edistPowers: boolean  = false
  @Input()
  ngSwitchCase: number = 0
  @Input() show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();
  cacheStore: Pokemon[] = [];
  isFavorite: boolean = true;
  ngOnInit(): void {
    this.checkFavorite();
    this.getSkills();
 }
 getSkills(){
  this.pokemonService.getSkills().subscribe((res)=>{
     this.skills = res
  })
  
 }
  goBack() {
    this.showChange.emit(false);
  }
  getColors(type: string) {
    return getColorByType(type);
  }
  loadLocalStorage() {
    if (localStorage.getItem('pokemons') === null) {
      return;
    } else {
      this.cacheStore = JSON.parse(localStorage.getItem('pokemons')!);
    }
  }
  saveLocalStorage() {
    this.cacheStore = JSON.parse(localStorage.getItem('pokemons')!);
    const pokemonIndex = this.cacheStore.findIndex(
      (existingPokemon: { pokedexN: number }) =>
        existingPokemon.pokedexN === this.pokemonData.pokedexN
    );
    if (pokemonIndex === -1) {
      this.cacheStore.push(this.pokemonData);
      localStorage.setItem('pokemons', JSON.stringify(this.cacheStore));
      this.isFavorite = true;
    } else {
      this.cacheStore.splice(pokemonIndex, 1);
      localStorage.setItem('pokemons', JSON.stringify(this.cacheStore));
      this.isFavorite = false;
    }
  }
  checkFavorite() {
    this.cacheStore = JSON.parse(localStorage.getItem('pokemons')!) || [];
    const pokemonIndex = this.cacheStore.findIndex(
      (existingPokemon: { pokedexN: number }) =>
        existingPokemon.pokedexN == this.pokemonData.pokedexN
    );
    if (pokemonIndex === -1) {
      this.isFavorite = false;
    } else {
      this.isFavorite = true;
    }
  }
  edistPower(){
    this.ngSwitchCase == 0 ? this.ngSwitchCase = 1 : this.ngSwitchCase = 0
  }
}
