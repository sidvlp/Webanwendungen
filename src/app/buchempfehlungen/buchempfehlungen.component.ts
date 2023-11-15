import { Component, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';




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

editForm = new FormGroup({
  autor: new FormControl('', [Validators.required]),
  titel: new FormControl('', Validators.required),
  jahr: new FormControl('', [Validators.required]),
  seiten: new FormControl('', Validators.required),
  verlag: new FormControl('', [Validators.required]),
});
editIndex: number;
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

  this.saveBookListToLocalStorage();

}


  constructor(private http: HttpClient, public dialog: MatDialog){

  }

  ngOnInit(){
    this.buchListe = this.getDataFromLocalStorage();
    if(!this.buchListe){
      this.initBookList();
    }
  }

  private url =
  'https://my-json-server.typicode.com/sidvlp/Webanwendungen/books';

  getData() {
    return this.http.get(this.url);
  }

  deleteBook(index: number) {
    if(confirm('Mächten Sie diesen Eintrag wirklich löschen?')){
      this.buchListe.splice(index, 1);
      this.saveBookListToLocalStorage();
    }
  
  }

  editBook(index: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this.buchListe[index],
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      
        this.buchListe[index] = result;
  
        this.saveBookListToLocalStorage();
      }
    });
  }

  saveChanges() {
    
  }

  getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('buchListe')!);
  }

  saveBookListToLocalStorage() {
    localStorage.setItem('buchListe', JSON.stringify(this.buchListe));
  }

 initBookList(){
  this.getData().subscribe((response) =>{
    this.buchListe = response;
    this.saveBookListToLocalStorage();
  });
 }

clearData(){
  if (confirm('Möchten Sie wirklich die Tabelle zurücksetzen?')) {
    localStorage.removeItem('buchListe');
    this.initBookList();
  }
}


}







 '' // https://www.youtube.com/watch?v=hdxaL551G_Q&t=353s&ab_channel=CodeSensei }}