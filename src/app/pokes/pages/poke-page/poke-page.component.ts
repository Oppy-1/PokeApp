
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../common/services/pokemon.service';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss']
})
export class PokePageComponent implements OnInit{ 

constructor (private pokemonService: PokemonService, private router:Router) {}
pokemons: Pokemon [] = []
searchName = document.getElementById('searchName')
showInformation = false
selectedPokemon: Pokemon = {name:'',pokedexN: 0, img:'',type:'',description:''};
ngOnInit(): void {
this.getPokemons('')
}
getPokemons (filter:string){
  this.pokemonService.getPokemons(filter).subscribe((res)=>{
    this.pokemons = res
    })
  }
  choosePokemon(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
    this.showInformation =  !this.showInformation;
  }
  }

