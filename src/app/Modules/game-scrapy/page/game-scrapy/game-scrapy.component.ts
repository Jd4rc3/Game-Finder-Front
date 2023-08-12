import { Component, OnInit } from '@angular/core';
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
    this.scrapy.getScrapyData().subscribe((data) => {
      this._games = data;
    });
  }

  get games(): Game[] {
    return this._games;
  }
}
