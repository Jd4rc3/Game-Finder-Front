import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrapyService } from '../../services/scrapy.service';
import { Game } from 'src/app/Modules/Core/Domain/game.model';
import { Message } from 'primeng/api';
import { Parameter } from '../../../Core/Domain/parameter.model';

@Component({
  selector: 'app-game-scrapy',
  templateUrl: './game-scrapy.component.html',
  styleUrls: ['./game-scrapy.component.scss'],
})
export class GameScrapyComponent implements OnInit {
  messages: Message[] = [];
  showLoader = false;
  _games: Game[] = [];

  constructor(private scrapy: ScrapyService) {}

  ngOnInit(): void {
    this.messages = [
      {
        severity: 'info',
        summary: 'Info',
        detail: 'Por favor ingresa el nombre de un juego',
      },
    ];
  }

  @ViewChild('template', { static: true }) template!: Element;

  get games(): Game[] {
    return this._games;
  }

  search(value: { game: string; param: Parameter[] }) {
    this.showLoader = true;
    this._games = [];
    this.scrapy
      .searchGame(value.game, value.param)
      .subscribe((data: Game[]) => {
        this._games.push(...data);
        this.showLoader = false;
      });
  }
}
