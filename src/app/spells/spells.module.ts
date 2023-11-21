import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    SpellsRoutingModule,
    HttpClientModule
  ]
})
export class SpellsModule { }
