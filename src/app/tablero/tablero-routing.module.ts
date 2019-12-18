import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';


const routes: Routes = [
  { path: 'tablero', component: TableroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }
