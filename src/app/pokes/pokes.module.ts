
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokesRoutingModule } from './pokes-routing.module';
import { PokePageComponent } from './pages/poke-page/poke-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InformacionComponent } from './pages/informacion/informacion.component';


import { PokeballsComponent } from './pages/pokeballs/pokeballs.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { searchboxComponent } from '../shared/components/search-box/search-box.component';
import { DataComponent } from './pages/data/data.component';




@NgModule({
  declarations: [
    PokePageComponent,
    LayoutPageComponent,
    InformacionComponent,
    PokeballsComponent,
    searchboxComponent,
    DataComponent,
  ],
  imports: [
    CommonModule,
    PokesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PokesModule { }
