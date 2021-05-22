import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { count, filter } from 'rxjs/operators';
import { DataItem } from '../models/dataitem';

@Injectable({
  providedIn: 'root',
})
export class DataItemService {
  allDataItems$!: Observable<DataItem[]>;
  totalCount$!: Observable<DataItem[]>;

  allItems = new BehaviorSubject<DataItem[]>(this.getDataItems(10));
  constructor() {
    this.allDataItems$ = this.allItems.asObservable();
    this.totalCount$ = this.allItems.asObservable();
  }

  private getDataItems(count: number): DataItem[] {
    let items: DataItem[] = [];

    for (let i = 0; i <= count; i++) {
      items.push({
        itemId: i,
        title: `Title ${i}`,
        categoryType: this.getCategory(i),
        description: `Description ${i}`,
      } as DataItem);
    }

    return items;
  }

  private getCategory(i: number): string {
    if (i > 0 && i < 3) return 'Opinion';

    if (i > 3 && i < 6) return 'Review';

    if (i > 6) return 'Visitor';

    return 'Review1';
  }

  getFilterData(searchText: string) {
    this.allItems.next(this.getDataItems(searchText.length));
  }
}
