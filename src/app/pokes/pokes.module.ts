import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokesRoutingModule } from './pokes-routing.module';
import { PokePageComponent } from './pages/poke-page/poke-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

import { SearchComponent } from './pages/search/search.component';
import { PokeballsComponent } from './pages/pokeballs/pokeballs.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PokePageComponent,
    LayoutPageComponent,
    InformacionComponent,
    PokeballsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PokesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PokesModule { }
