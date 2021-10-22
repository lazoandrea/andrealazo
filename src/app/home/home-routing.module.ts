import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportistaComponent } from './component/deportista/deportista.component';
import { JugadoresComponent } from './component/jugadores/jugadores.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
  { path: '', redirectTo: '' },
  {
    path: '',
    component: HomeComponent,
    children: [
       { path: 'jugadores', component: JugadoresComponent },
       { path: 'deportista/:id', component: DeportistaComponent },


 
     
     { path: '', redirectTo: 'jugadores' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
