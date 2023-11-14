import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { SpellsDetailComponent } from './spells-detail/spells-detail.component';


@NgModule({
  declarations: [
    SpellsListComponent,
    SpellsDetailComponent
  ],
  imports: [
    CommonModule,
    SpellsRoutingModule
  ]
})
export class SpellsModule { }
