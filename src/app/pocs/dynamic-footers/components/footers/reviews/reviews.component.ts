import { Component, OnInit } from '@angular/core';
import { IFooter } from '../footer.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements IFooter, OnInit {
  constructor() {}
  data: any;
  execute(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {}
}
