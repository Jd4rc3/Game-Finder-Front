import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import games from 'src/assets/games';
import { Game } from '../../Core/Domain/game.model';

@Injectable({
  providedIn: 'root',
})
export class ScrapyService {
  constructor() {}

  public getScrapyData(): Observable<Game[]> {
    return of(games);
  }
}
