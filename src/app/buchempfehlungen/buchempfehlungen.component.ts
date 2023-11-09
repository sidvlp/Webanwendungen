import { Component, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-buchempfehlungen',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './buchempfehlungen.component.html',
  styleUrl: './buchempfehlungen.component.css'
})
export class BuchempfehlungenComponent {



bookForm = new FormGroup({
  autor: new FormControl('', [Validators.required]),
  titel: new FormControl('', Validators.required),
  jahr: new FormControl('', [Validators.required]),
  seiten: new FormControl('', Validators.required),
  verlag: new FormControl('', [Validators.required]),
})
  buchListe: any;

addBook(){

  if(this.bookForm.valid){
    const newBook = {
      autor: this.bookForm.get('autor')?.value,
      titel: this.bookForm.get('titel')?.value,
      jahr: this.bookForm.get('jahr')?.value,
      seiten: this.bookForm.get('seiten')?.value,
      verlag: this.bookForm.get('verlag')?.value
    };
    this.buchListe.push(newBook);
  }

  this.saveTripListToLocalStorage;

}


  constructor(private http: HttpClient){

  }

  private url =
  'https://my-json-server.typicode.com/Convi57/Webanwendungen/trips';

  getPosts() {
    return this.http.get(this.url);
  }

  getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('buchListe')!);
  }

  saveTripListToLocalStorage() {
    localStorage.setItem('buchListe', JSON.stringify(this.buchListe));
  }

 initBookList(){
  this.getPosts().subscribe((response) =>{
    this.buchListe = response;
    this.saveTripListToLocalStorage();
  });
 }

}







 '' // https://www.youtube.com/watch?v=hdxaL551G_Q&t=353s&ab_channel=CodeSensei }}