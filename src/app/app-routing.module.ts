import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then(m=>m.CharactersModule)
  },
  {
    path: "spells",
    loadChildren: () => import('./spells/spells.module').then(m=>m.SpellsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
