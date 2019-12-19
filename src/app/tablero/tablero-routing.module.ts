import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {
    path: '', component: TableroComponent,
    children: [
      { path: '', component: PerfilComponent},
      { path: 'perfil', component: PerfilComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }
