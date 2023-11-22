import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokesRoutingModule } from './pokes-routing.module';
import { PokePageComponent } from './pages/poke-page/poke-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

import { PokeballsComponent } from './pages/pokeballs/pokeballs.component';
import { MaterialModule } from '../material/material.module';
import { DataComponent } from './pages/data/data.component';
import { PassPagePipe } from './pipes/pass-page.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeballsInfoComponent } from './pages/pokeballs/pokeballs-info/pokeballs-info.component';
import { InformacionTiposComponent } from './pages/informacion/informacion-tipos/informacion-tipos.component';
import { FavoritePokemonComponent } from './pages/poke-page/favorite-pokemon/favorite-pokemon.component';




@NgModule({
  declarations: [
    PokePageComponent,
    LayoutPageComponent,
    InformacionComponent,
    PokeballsComponent,
    DataComponent,
    PassPagePipe,
    PokeballsInfoComponent,
    InformacionTiposComponent,
    FavoritePokemonComponent

  ],
  imports: [CommonModule, PokesRoutingModule, MaterialModule, SharedModule,ReactiveFormsModule,FormsModule],
})
export class PokesModule {}
