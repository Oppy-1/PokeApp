import { Pokeballs } from './../../../common/interfaces/pokemon.interface';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../common/services/pokemon.service';



@Component({
  selector: 'app-pokeballs',
  templateUrl: './pokeballs.component.html',
  styleUrls: [ './pokeballs.component.scss' ],
})
export class PokeballsComponent implements OnInit {
constructor (private PokemonService: PokemonService) {}
pokeball: Pokeballs[] = [];
showPokeballs = false
selectPokeball: Pokeballs = {
  name: '',
  price: '' || 0,
  ratio: '' || 0,
  img: '',
  info:'',
  generation:'',
}

  ngOnInit(): void {
    this.getpokeballs();
  }
  getpokeballs(){
    this.PokemonService.getPokeballs().subscribe((res)=>{
      this.pokeball = res;
    });
  }
  selectPokeballs( pokeball: Pokeballs) {
    this.selectPokeball = pokeball
    this.showPokeballs = !this.showPokeballs;
}
}