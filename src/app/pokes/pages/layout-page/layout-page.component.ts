import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Pokemons', icon: 'list', url: './poke' },
    { label: 'Pokeballs', icon: 'list', url: './pokeballs' },
    { label: 'Tipos', icon: 'search', url: './info' },
    {label: 'favoritos', icon: 'favorite', url:'./favorite'},
  ]

}
