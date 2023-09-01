import { Injectable } from '@angular/core';
import { map, merge, mergeMap, Observable, Subject, tap } from 'rxjs';
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
  cachedParams = new Map<string, Parameter>();
  constructor(private http: http) { }

  pushParams(param: Parameter) {
    if (!this.cachedParams.has(param.name)) {
      this.cachedParams.set(param.name, param);
    }
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

  getSpiderArgs(arg: string) {
  return  this.http.get<Parameter>(`${environment.paramsUrl}/${arg}`).pipe(
      tap((param) => this.pushParams(param)),
    );
  }

  classifier(args: Parameter[]) {
    const classifiedArgs = new Map<string, SpecificParameter[]>();

    args.forEach((arg) => {
      let values = this.cachedParams.get(arg.name)?.values;

      if (arg.name === 'regions') values = values?.filter(v => v.commonName === arg.values[0].commonName);

      values?.forEach((value) => {
        if (classifiedArgs.has(value.name)) {
          classifiedArgs.get(value.name)?.push({ [arg.name]: value.valueName });
        } else {
          classifiedArgs.set(value.name, [
            { [arg.name]: value.valueName },
          ]);
        }
      })
    });

    return classifiedArgs;
  }
}
