import { Pokeballs } from './../../../common/interfaces/pokemon.interface';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../common/services/pokemon.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pokeballs',
  templateUrl: './pokeballs.component.html',
  styleUrls: [ './pokeballs.component.scss' ],
})
export class PokeballsComponent implements OnInit {
constructor (private PokemonService: PokemonService, private router: Router ) {}
pokeballs: Pokeballs[] = [];
  ngOnInit(): void {
    this.getpokeballs();
  }
  getpokeballs(){
    this.PokemonService.getPokeballs().subscribe((res)=>{
      this.pokeballs = res;
    });
  }
}
