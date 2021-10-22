import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadoresService } from 'src/app/service/jugadores.service';

@Component({
  selector: 'app-deportista',
  templateUrl: './deportista.component.html',
  styleUrls: ['./deportista.component.css']
})
export class DeportistaComponent implements OnInit {
deportista: any[] = []
id:string
  constructor(private jugadorService: JugadoresService, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.jugadores()
  }

  
  jugadores() {
    this.jugadorService.deportista(this.id).subscribe(data => {
      this.deportista.push(data.payload.data())
        })
  }

}
