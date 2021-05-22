import { Component, OnInit } from '@angular/core';
import { IFooter } from '../footer.interface';

@Component({
  selector: 'app-footer-error',
  templateUrl: './footer-error.component.html',
  styleUrls: ['./footer-error.component.scss']
})
export class FooterErrorComponent implements IFooter, OnInit {

  constructor() { }
  data: any;
  execute(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
