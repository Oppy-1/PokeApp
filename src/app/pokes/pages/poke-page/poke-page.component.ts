import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../common/services/pokemon.service';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';



@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styles: [
  ]
})
export class PokePageComponent implements OnInit{ 

constructor (private pokemonService: PokemonService) {}
pokemons: Pokemon [] = []
ngOnInit(): void {
  this.getPokemons();
}
getPokemons (){
  this.pokemonService.getPokemons().subscribe((res)=>{
    this.pokemons = res
    })
  }
  

searchbycapital(tern:string):void{
  console.log('desde pokepage');
  console.log({tern});
}


}
