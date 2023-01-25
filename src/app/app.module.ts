import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { CantidadSalasComponent } from './cantidad-salas/cantidad-salas.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CantidadAsientosComponent } from './cantidad-asientos/cantidad-asientos.component';
import { EntradasComponent } from './entradas/entradas.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { PrincipalComponent } from './principal/principal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    CarteleraComponent,
    CantidadSalasComponent,
    FooterComponent,
    HeaderComponent,
    CantidadAsientosComponent,
    EntradasComponent,
    DisponibilidadComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
