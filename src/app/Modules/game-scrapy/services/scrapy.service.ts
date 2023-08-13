import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../../Core/Domain/game.model';
import { HttpClient as http } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScrapyService {
  constructor(private http:http) {}

  public getScrapyData(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:8080/');
  }
}
