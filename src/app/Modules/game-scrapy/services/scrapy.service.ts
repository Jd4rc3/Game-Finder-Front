import { Injectable } from '@angular/core';
import { Observable, map, merge, mergeMap } from 'rxjs';
import { Game } from '../../Core/Domain/game.model';
import { HttpParams, HttpClient as http } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Response } from '../../Core/Domain/response.model';
import { Parameter, Value } from '../../Core/Domain/parameter.model';

@Injectable({
  providedIn: 'root',
})
export class ScrapyService {
  constructor(private http: http) { }
  cachePlatforms: Value[] = [];

  buildArgs(game: string, platforms: string, store: string = 'eneba') {
    return new HttpParams()
      .set('crawl_args', JSON.stringify({ game, platforms, regions: 'global,colombia,latam', blacklist: 'argentina' }))
      .set('spider_name', store)
      .set('start_requests', 'false');
  }

  public searchGame(gameTitle: string, platform: string): Observable<Game[]> {
    return merge(this.cachePlatforms.map((_) => {
      return this.http.get<Response>(environment.apiUrl, {
        params: this.buildArgs(gameTitle, platform),
      });
    })).pipe(mergeMap((response) => response), map((response) => response.items));
  }

  public getSpiderArgs(arg: string): Observable<Parameter> {
    const obs = this.http.get<Parameter>(`${environment.paramsUrl}/${arg}`);
    obs.subscribe((response) => this.cachePlatforms = response.values);

    return obs
  }

}
