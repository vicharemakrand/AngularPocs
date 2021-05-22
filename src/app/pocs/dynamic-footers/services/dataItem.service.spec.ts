import { TestBed } from '@angular/core/testing';

import { DataItemService } from './dataItem.service';

describe('DataItemService', () => {
  let service: DataItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
