import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/common/services/pokemon.service';
import { Types } from '../../../common/interfaces/pokemon.interface';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styles: [],
})
export class InformacionComponent implements OnInit {
  constructor(private PokemonService: PokemonService) {}
  type: Types[] = [];
  showTypes = false;
  selectType: Types = {
    type: '',
    immune: '',
    img: '',
    hability: '',
    information: '',
    strong: [],
    weak: [],
    ineffective: [],
  };
  ngOnInit(): void {
    this.getTypes();
  }
  getTypes() {
    this.PokemonService.getType().subscribe((res) => {
      this.type = res;
    });
  }
  selecType( type: Types){
    this.selectType = type
    this.showTypes = !this.showTypes;
  }
}
