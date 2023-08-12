import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameScrapyComponent } from './page/game-scrapy/game-scrapy.component';

const routes: Routes = [
  {
    path: '',
    component: GameScrapyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameScrapyRoutingModule {}
