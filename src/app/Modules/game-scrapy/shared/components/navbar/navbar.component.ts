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
import { GameSearch } from 'src/app/Modules/Core/Domain/game-search.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  search!: string;

  bouncer: Subject<string> = new Subject<string>();

  platforms: Value[] = [];

  selectedPlatforms: Value[] = [];

  regions: Value[] = [];

  selectedRegions: Value[] = [];

  subject: Subject<void> = new Subject<void>();

  @Output()
  OnSearch: EventEmitter<GameSearch> = new EventEmitter<GameSearch>();

  constructor(private scrapyService: ScrapyService) {}

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  ngOnInit(): void {
    this.scrapyService
      .getSpiderArgs('platforms')
      .subscribe((response: Parameter) => {
        this.platforms = this.removeDuplicates(response.values);
      });

    this.scrapyService
      .getSpiderArgs('regions')
      .subscribe((response: Parameter) => {
        this.regions = this.removeDuplicates(response.values);
      });

    //   subscribes to the event that emits the game search
    this.bouncer.pipe(debounceTime(600)).subscribe((value) =>
      this.OnSearch.emit({
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
          {
            id: '',
            name: 'regions',
            values: this.selectedRegions.map((region) => {
              region.valueName = region.valueName.toLowerCase();
              return region;
            }),
          },
        ],
      }),
    );
  }

  onSearch() {
    this.search = this.search.trim();
    if (this.search.length > 3) {
      this.bouncer.next(this.search);
    }
  }

  removeDuplicates(arr: Value[]) {
    const result: Value[] = [];
    const map = new Map();
    for (const item of arr) {
      if (!map.has(item.commonName)) {
        map.set(item.commonName, true);
        result.push(item);
      }
    }
    return result;
  }
}
