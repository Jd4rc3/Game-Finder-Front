import { Injectable } from '@angular/core';
import { map, merge, mergeMap, Observable, Subject } from 'rxjs';
import { Game } from '../../Core/Domain/game.model';
import { HttpClient as http, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Response } from '../../Core/Domain/response.model';
import { Parameter } from '../../Core/Domain/parameter.model';
import { SpecificParameter } from '../../Core/Domain/specific.parameter';

@Injectable({
  providedIn: 'root',
})
export class ScrapyService {
  constructor(private http: http) { }
  params = new Subject<Parameter[]>();
  params$ = this.params.asObservable();

  pushParams(params: Parameter[]) {
    this.params.next(params);
  }

  buildArgs(
    game: string,
    args: SpecificParameter[],
    store: string,
  ): HttpParams {
    const params = args.reduce((acc, curr) => ({ ...acc, ...curr }), {});

    return new HttpParams()
      .set('crawl_args', JSON.stringify({ game, ...params }))
      .set('spider_name', store)
      .set('start_requests', 'false');
  }

  public searchGame(
    gameTitle: string,
    params: Parameter[],
  ): Observable<Game[]> {
    const spiderArgs = this.classifier(params);
    const requestList: Observable<Response>[] = [];

    spiderArgs.forEach((values, key) => {
      requestList.push(
        this.http.get<Response>(environment.apiUrl, {
          params: this.buildArgs(gameTitle, values, key),
        }),
      );
    });

    return merge(requestList).pipe(
      mergeMap((response) => response),
      map((response) => response.items),
    );
  }

  getSpiderArgs(arg: string): void {
    this.http.get<Parameter>(`${environment.paramsUrl}/${arg}`).subscribe((params) => { this.pushParams(params) });
  }

  classifier(args: Parameter[]) {
    const classifiedArgs = new Map<string, SpecificParameter[]>();

    args.forEach((arg) => {
      arg.values.forEach((value) => {
        if (classifiedArgs.has(value.name)) {
          classifiedArgs.get(value.name)?.push({ [arg.name]: value.valueName });
        } else {
          classifiedArgs.set(value.commonName, [
            { [arg.name]: value.valueName },
          ]);
        }
      });
    });

    return classifiedArgs;
  }
}
