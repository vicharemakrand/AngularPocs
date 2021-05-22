import { Component, OnInit } from '@angular/core';
import { IFooter } from '../footer.interface';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss'],
})
export class VisitorsComponent implements IFooter, OnInit {
  constructor() {}
  data: any;
  execute(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
