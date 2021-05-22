import { Component, OnInit } from '@angular/core';
import { PUBSUB } from 'src/app/misc/pub-sub';
import { IFooter } from '../footer.interface';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss'],
})
export class OpinionsComponent implements IFooter, OnInit {
  constructor() {}
  data: any;
  execute(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  publish(): void {
    PUBSUB.Publish('1', 1);

    setTimeout(() => {
      let i = 1;
      PUBSUB.Publish('2', ++i);
    }, 2000);
  }
}
