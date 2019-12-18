import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { TableroComponent } from './tablero.component';
import { CompartirModule } from '../compartir/compartir.module';

@NgModule({
  declarations: [TableroComponent],
  imports: [
    CommonModule,
    TableroRoutingModule,
    CompartirModule,
  ]
})
export class TableroModule { }
