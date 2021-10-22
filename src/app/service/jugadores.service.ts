import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private firestore: AngularFirestore) { }

    jugadores():  Observable<any> {
    return this.firestore.collection('jugadores').snapshotChanges();
  }

  deportista(id:string):  Observable<any> {
    return this.firestore.collection('jugadores').doc(id).snapshotChanges();
  }
}
