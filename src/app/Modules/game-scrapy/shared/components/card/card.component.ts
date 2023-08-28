import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true })
  title: string = '';

  @Input({ required: true })
  image: string = '';

  @Input({ required: true })
  template!: TemplateRef<Element>;
}
