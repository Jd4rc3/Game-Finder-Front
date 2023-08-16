import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrapyService } from '../../services/scrapy.service';
import { Game } from 'src/app/Modules/Core/Domain/game.model';

@Component({
  selector: 'app-game-scrapy',
  templateUrl: './game-scrapy.component.html',
  styleUrls: ['./game-scrapy.component.scss'],
})
export class GameScrapyComponent implements OnInit {
  constructor(private scrapy: ScrapyService) {}
  private _games: Game[] = [];
  ngOnInit(): void {
    this.scrapy.searchGame("hollow","xbox").subscribe((data) => {
      this._games = data;
    });
  }

  @ViewChild('template', { static: true }) template!: Element;

  get games(): Game[] {
    return this._games;
  }

  print(value: string) {
    console.log(value);
  }
}
