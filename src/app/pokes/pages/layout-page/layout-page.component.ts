import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './poke' },
    { label: 'pokeballs', icon: 'add', url: './pokeballs' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]
}
