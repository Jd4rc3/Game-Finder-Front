import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrapyService } from '../../services/scrapy.service';
import { Game } from 'src/app/Modules/Core/Domain/game.model';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-game-scrapy',
  templateUrl: './game-scrapy.component.html',
  styleUrls: ['./game-scrapy.component.scss'],
})
export class GameScrapyComponent implements OnInit {
  messages: Message[] = [];
  showLoader = false;
  _games: Game[] = [];

  constructor(private scrapy: ScrapyService) { }

  ngOnInit(): void {
    this.messages = [
      { severity: 'info', summary: 'Info', detail: 'Por favor ingresa el nombre de un juego' },
    ];
  }

  @ViewChild('template', { static: true }) template!: Element;

  get games(): Game[] {
    return this._games;
  }

  search(value: string) {
    this.showLoader = true;
    this._games = [];
    this.scrapy.searchGame(value, 'xbox').subscribe((data) => {
      this._games = data;
      this.showLoader = false;
    });
  }
}
