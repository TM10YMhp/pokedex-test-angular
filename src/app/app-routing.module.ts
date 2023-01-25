import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon').then(e => e.PokemonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
