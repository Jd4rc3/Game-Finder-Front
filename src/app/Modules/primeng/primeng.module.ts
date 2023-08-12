import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  exports: [CardModule, ButtonModule, TagModule],
})
export class PrimengModule {}
