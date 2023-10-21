import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'auth',
  loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule),
},
{
  path:'poke',
  loadChildren: () => import ('./pokes/pokes.module').then(m => m.PokesModule),
},
{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
