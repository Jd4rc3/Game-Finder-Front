import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public search!: FormControl;

  subjet:Subject<void> = new Subject<void>();

  @Output()
  event: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.search = new FormControl('');
  }
  ngOnDestroy(): void {
    this.subjet.next();
    this.subjet.complete();
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
       takeUntil(this.subjet), 
        debounceTime(500))
      .subscribe((value: string) => value && this.event.emit(value));
  }
}
