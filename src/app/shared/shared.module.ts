import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './components/searchbox/searchbox.component';




@NgModule({
  declarations: [
    SearchboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchboxComponent
  ]
})
export class SharedModule { }
