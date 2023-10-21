import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PokeballsComponent } from './pages/pokeballs/pokeballs.component';
import { SearchComponent } from './pages/search/search.component';
import { PokePageComponent } from './pages/poke-page/poke-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'info', component: InformacionComponent },
      {path: 'pokeballs', component: PokeballsComponent },
      {path: 'search', component: SearchComponent },
      {path: 'home', component: PokePageComponent },
      {path: '**', component: PokePageComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokesRoutingModule { }
