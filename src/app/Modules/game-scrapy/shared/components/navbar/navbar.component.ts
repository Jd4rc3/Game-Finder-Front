import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public search!: FormControl;

  @Output()
  event: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.search = new FormControl('');
  }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(
      (value: string) => value && this.event.emit(value)
    );
  }
}
