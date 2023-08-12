import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () =>
      import('./Modules/game-scrapy/game-scrapy.module').then(
        (m) => m.GameScrapyModule
      ),
  },
  {
    path: '**',
    redirectTo: 'shop',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
