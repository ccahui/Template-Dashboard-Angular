import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './compartir/error404/error404.component';


const routes: Routes = [
  { path: 'error', component: Error404Component },
  { path: '**', pathMatch: 'full', redirectTo: '/error' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

