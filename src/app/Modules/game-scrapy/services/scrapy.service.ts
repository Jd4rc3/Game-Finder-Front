import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../../Core/Domain/game.model';
import { HttpParams, HttpClient as http } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Response } from '../../Core/Domain/response.model';

@Injectable({
  providedIn: 'root',
})
export class ScrapyService {
  constructor(private http: http) {}

  buildArgs(game: string, platform: string) {
    return new HttpParams()
      .set('crawl_args', JSON.stringify({ game }))
      .set('spider_name', platform)
      .set('start_requests', 'false');
  }

  public searchGame(gameTitle: string, platform: string): Observable<Game[]> {
    return this.http
      .get<Response>(environment.apiUrl, {
        params: this.buildArgs(gameTitle, platform),
      })
      .pipe(map((response: Response) => response.items as Game[]));
  }
}
