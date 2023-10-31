import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/common/interfaces/pokemon.interface';
import { getColorByType } from 'src/app/common/util/utils';

@Component({
  selector: 'pokemon-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit{
  @Input() pokemonData: Pokemon = {name:'',pokedexN: 0, img:'',type:[''],description:''};
  @Input() show: boolean = false;
  @Output() showChange= new EventEmitter<boolean>();
  


  ngOnInit(): void {
   console.log(this.pokemonData);
  }
  goBack(){
    this.showChange.emit(false); 
  }
  getColors(type: string){
    return getColorByType(type) 
  }
}
