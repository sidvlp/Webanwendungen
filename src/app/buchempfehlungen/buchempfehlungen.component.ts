import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { BuchempfehlungenService } from '../buchempfehlungen.service';



@Component({
  selector: 'app-buchempfehlungen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buchempfehlungen.component.html',
  styleUrl: './buchempfehlungen.component.css'
})
export class BuchempfehlungenComponent {


  buchListe: any[] = [];
  autor : string;
  titel : string;
  jahr : string;
  seiten : number;
  verlag : string;

  constructor(private service: BuchempfehlungenService){

  }

  ngOnInit(){
    this.service.getDefaultData().subscribe((data:any)=>{
      this.buchListe = data;
    }); 
  }

  speichern() {
    console.log('Autor:', this.autor);
    if (this.autor && this.titel && this.jahr && this.seiten && this.verlag){    
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
  }else{
    alert('Please fill all fields')
  }
  }

edit(index: number){
  const buch = this.buchListe[index];

}

delete(index: number){
  if(confirm('Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?')){
   this.buchListe = this.buchListe.filter((v,i)=> i !== index)
  }
}
}





 '' // https://www.youtube.com/watch?v=hdxaL551G_Q&t=353s&ab_channel=CodeSensei }}