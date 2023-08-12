import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameScrapyRoutingModule } from './game-scrapy-routing.module';
import { GameScrapyComponent } from './page/game-scrapy/game-scrapy.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [GameScrapyComponent],
  imports: [CommonModule, GameScrapyRoutingModule, PrimengModule],
})
export class GameScrapyModule {}
