import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    TagModule,
    ImageModule,
    MenubarModule,
    InputTextModule,
    MessagesModule,
    MultiSelectModule,
  ],
})
export class PrimengModule {}
