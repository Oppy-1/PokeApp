import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PokeballsComponent } from './pages/pokeballs/pokeballs.component';
import { PokePageComponent } from './pages/poke-page/poke-page.component';
import { FavoritePokemonComponent } from './pages/poke-page/favorite-pokemon/favorite-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'info', component: InformacionComponent },
      {path: 'pokeballs', component: PokeballsComponent },
      {path: 'home', component: PokePageComponent },
      {path: 'favorite', component: FavoritePokemonComponent},
      {path: '**', component: PokePageComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokesRoutingModule { }
