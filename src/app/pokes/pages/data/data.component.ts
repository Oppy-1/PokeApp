import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit{
  @Input ()pokemonData: Pokemon = {name:'',pokedexN: 0, img:'',type:'',description:''};
  
  ngOnInit(): void {
   console.log(this.pokemonData);
  }
  goBack(){
    
  }
}
