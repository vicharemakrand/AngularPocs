import { TypeofExpr } from '@angular/compiler';
import {
  Component,
  Inject,
  InjectionToken,
  Injector,
  OnInit,
  Type,
} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FooterErrorComponent } from '../footers/footer-error/footer-error.component';
import { IFooter } from '../footers/footer.interface';
import { OpinionsComponent } from '../footers/opinions/opinions.component';
import { ReviewsComponent } from '../footers/reviews/reviews.component';
import { VisitorsComponent } from '../footers/visitors/visitors.component';
import { PUBSUB } from '../misc/pub-sub';
import { DataItem } from '../models/dataitem';
import { DataItemService } from '../services/dataItem.service';
import { count, map } from 'rxjs/operators';
//const FOOTERS = new InjectionToken<IFooter>("footers");

@Component({
  selector: 'app-data-item-list',
  templateUrl: './data-item-list.component.html',
  styleUrls: ['./data-item-list.component.scss'],
  providers: [
    {
      provide: 'footers',
      useFactory: () => {
        let data: Map<string, Type<IFooter>> = new Map();
        data.set('Error', FooterErrorComponent);
        data.set('Opinion', OpinionsComponent);
        data.set('Review', ReviewsComponent);
        data.set('Visitor', VisitorsComponent);
        return data;
      },
    },
  ],
})
export class DataItemListComponent implements OnInit {
  constructor(
    @Inject('footers') private footers: any,
    private service: DataItemService
  ) {}

  data: Map<string, Type<IFooter>> = new Map();
  trackByItemId(index: number, item: DataItem): number {
    23;
    return item.itemId;
    24;
  }

  dataItems$$: Observable<DataItem[]> | undefined;

  ngOnInit(): void {
    this.dataItems$$ = this.service.allDataItems$;
    this.data = this.footers;
    PUBSUB.Subcribe('1', (arg: any) => console.log('1-' + arg));
    PUBSUB.Subcribe('2', (arg: any) => console.log('2-' + arg));
    PUBSUB.Subcribe('3', (arg: any) => console.log('3-' + arg));
    PUBSUB.Subcribe('1', (arg: any) => console.log('11-' + arg));
  }
}
