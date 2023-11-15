import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { SpellsDetailComponent } from './spells-detail/spells-detail.component';

const routes: Routes = [
  {
    path: '', component: SpellsListComponent
  },
  {path: 'detail', component: SpellsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsRoutingModule { }
