import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataItemListComponent } from './data-item-list.component';

describe('DataItemListComponent', () => {
  let component: DataItemListComponent;
  let fixture: ComponentFixture<DataItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
