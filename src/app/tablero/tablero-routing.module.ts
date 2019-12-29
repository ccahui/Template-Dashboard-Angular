import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {
    path: '', component: TableroComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: '', pathMatch: 'full', redirectTo: 'perfil' },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }
