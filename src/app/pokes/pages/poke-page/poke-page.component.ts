import { Pokemon } from './../../../common/interfaces/pokemon.interface';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../common/services/pokemon.service';
import { getColorByType } from 'src/app/common/util/utils';


@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss'],
})
export class PokePageComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  loadingInfo = false;
  generationsOptions = [1, 2, 3,];
  searchName = document.getElementById('searchName')!;
  showInformation = false;
  generation: number = 0;
  selectedPokemon: Pokemon = {
    name: '',
    pokedexN: 0,
    img: '',
    type: [''],
    description: '',
    skill: []
  };
  ngOnInit(): void {
    this.getPokemons('');
  }
  getPokemons(filter: string) {
    this.pokemonService.getPokemons(filter).subscribe((res) => {
      this.pokemons = res;
      this.filteredPokemons = this.filterForGeneration(
        this.pokemons,
        this.generation
      );
    });
  }
  choosePokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.showInformation = !this.showInformation;
  }
  getColors(type: string) {
    return getColorByType(type);
  }
  filterForGeneration(pokemon: Pokemon[], generation: number): Pokemon[] {
    let inicio: number;
    let final: number;

    if (generation === 1) {
      inicio = 1;
      final = 151;
    } else if (generation === 2) {
      inicio = 152;
      final = 251;
    } else if (generation === 3) {
      inicio = 252;
      final = 350;
    } else if (generation === 0) {
      inicio  = 1 ;
      final = 500;
    }

    return pokemon.filter(
      (pokemon) => pokemon.pokedexN >= inicio && pokemon.pokedexN <= final
    );
  }

  generationChange(selectedGeneration: number) {
    this.loadingInfo = true;
    setTimeout(() => {
      this.generation = selectedGeneration;
      this.getPokemons('');
      this.loadingInfo = false;
    }, 1500);
  }
}
