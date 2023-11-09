import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from './book';

@Component({
  selector: 'app-buchempfehlungen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buchempfehlungen.component.html',
  styleUrl: './buchempfehlungen.component.css'
})
export class BuchempfehlungenComponent {


  buchListe: any[] = [];
  autor : string = '';
  titel : string = '';
  jahr : string = '';
  seiten : number = 0;
  verlag : string = '';

  speichern() {
    const buchData = {
      autor: this.autor,
      titel: this.titel,
      jahr: this.jahr,
      seiten: this.seiten,
      verlag: this.verlag
    };
    this.buchListe.push(buchData);

    this.autor = '';
    this.titel = '';
    this.jahr = '';
    this.seiten = 0;
    this.verlag = '';
  }

bearbeiten(index: number){

}

löschen(index: number){

}
}
