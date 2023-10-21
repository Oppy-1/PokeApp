import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {
@Input()
public placeholder: string = '';

@Output()
public onValue = new EventEmitter <string>();

emitValue( value:string): void{
  this.onValue.emit(value);
}
}
