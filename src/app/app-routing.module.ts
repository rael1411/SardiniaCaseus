import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';


const routes: Routes = [
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contatti', component: ContattiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }