import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { ScrapyService } from '../../../services/scrapy.service';
import { Parameter, Value } from 'src/app/Modules/Core/Domain/parameter.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  search!: string;

  debouncer: Subject<string> = new Subject<string>();

  platforms: Value[] = [];

  selectedPlatforms: Value[] = [];

  subjet: Subject<void> = new Subject<void>();

  @Output()
  event: EventEmitter<{ game: string; param: Parameter[] }> = new EventEmitter<{
    game: string;
    param: Parameter[];
  }>();

  constructor(private scrapyService: ScrapyService) {}

  ngOnDestroy(): void {
    this.subjet.next();
    this.subjet.complete();
  }

  ngOnInit(): void {
    //    gets the platforms from the backend
    this.scrapyService.getSpiderArgs('platforms').subscribe((response) => {
      // Reduce the redundancy of the platforms with the same commonName
      this.platforms = response.values.reduce((acc: Value[], curr: Value) => {
        const index = acc.findIndex((x) => x.commonName === curr.commonName);
        if (index === -1) {
          curr.valueName =
            curr.valueName.charAt(0).toUpperCase() + curr.valueName.slice(1);
          acc.push(curr);
        }
        return acc;
      }, []);
    });

    //   subscribes to the event that emits the game search
    this.debouncer.pipe(debounceTime(300)).subscribe((value) =>
      this.event.emit({
        game: value,
        param: [
          {
            id: '',
            name: 'platforms',
            values: this.selectedPlatforms.map((platform) => {
              platform.valueName = platform.valueName.toLowerCase();
              return platform;
            }),
          },
        ],
      }),
    );
  }

  onSearch() {
    this.search = this.search.trim();
    if (this.search.length > 3) {
      this.debouncer.next(this.search);
    }
  }
}
