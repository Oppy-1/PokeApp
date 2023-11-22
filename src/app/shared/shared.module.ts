import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [searchBoxComponent, SelectComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [searchBoxComponent, SelectComponent, SpinnerComponent],
})
export class SharedModule {}
