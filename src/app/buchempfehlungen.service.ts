
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuchempfehlungenService {
  private apiUrl = 'assets/buchempfehlungen.json'; 

  constructor(private http: HttpClient) {}

  getDefaultData() {
    return this.http.get('../../assets/defaultData.json');
  }
}
