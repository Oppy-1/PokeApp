import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../common/services/pokemon.service';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';
import { Router } from '@angular/router';
import { getColorByType } from 'src/app/common/util/utils';

type generacion = 'primera'| 'segunda'| 'tercera'

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss'],
})
export class PokePageComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private router: Router) {}
  pokemons: Pokemon[] = [];
  searchName = document.getElementById('searchName')!;
  page: number = 0;
  generacion: Pokemon[] = []
  showInformation = false;
  selectedPokemon: Pokemon = {
    name: '',
    pokedexN: 0,
    img: '',
    type: [''],
    description: '',
  };
  ngOnInit(): void {
    this.getPokemons('');
  }

  getPokemons(filter: string) {
    this.pokemonService.getPokemons(filter).subscribe((res) => {
      this.pokemons = res;
    });
  }
  nextPage() {
    this.page += 12;
  }

  priviusPage() {
    if (this.page > 0) this.page -= 12;
  }
  choosePokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.showInformation = !this.showInformation;
  }
  getColors(type: string) {
    return getColorByType(type);
  }
}
