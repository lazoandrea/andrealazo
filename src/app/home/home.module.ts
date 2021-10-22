import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JugadoresComponent } from './component/jugadores/jugadores.component';
import { DeportistaComponent } from './component/deportista/deportista.component';




@NgModule({
  declarations: [
    HomeComponent,
    JugadoresComponent,
    DeportistaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }