import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameScrapyRoutingModule } from './game-scrapy-routing.module';
import { GameScrapyComponent } from './page/game-scrapy/game-scrapy.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CardComponent } from './shared/components/card/card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [GameScrapyComponent, CardComponent, NavbarComponent, LoadingComponent],
  imports: [
    CommonModule,
    GameScrapyRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GameScrapyModule {}
