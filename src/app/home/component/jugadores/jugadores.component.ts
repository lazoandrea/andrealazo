import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/service/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  jugadores: any[] = [];

  constructor(private _estudianteService: JugadoresService) { }

  ngOnInit(): void {
    this. jugadoress()
  }



  jugadoress() {
    this._estudianteService.jugadores().subscribe(data => {
      this.jugadores = [];
      data.forEach((element:any)=> {
        this.jugadores.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(this.jugadores)
      });
    })
  }

}
