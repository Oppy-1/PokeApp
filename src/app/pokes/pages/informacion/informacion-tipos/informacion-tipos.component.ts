import { Component, EventEmitter, Input, Output,} from '@angular/core';
import {  Types } from 'src/app/common/interfaces/pokemon.interface';
import { getColorByType } from '../../../../common/util/utils';

@Component({
  selector: 'information-type',
  templateUrl: './informacion-tipos.component.html',
  styleUrls: ['./informacion-tipos.component.scss']
})
export class InformacionTiposComponent {

@Input() typesInfo: Types  = {
  type: '',
  immune: '',
  img: '',
  hability: '',
  information: '',
  strong: [],
  weak: [],
  ineffective: [],
}

@Input() show: boolean = false;
@Output() showChange = new EventEmitter<boolean>();


getColors(type: string){
  return getColorByType(type) 
}

}
