import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { CantidadSalasComponent } from './cantidad-salas/cantidad-salas.component'; 
import { CantidadAsientosComponent } from './cantidad-asientos/cantidad-asientos.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'salas', component: CantidadSalasComponent },
  { path: 'asientos', component: CantidadAsientosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



  
 }
