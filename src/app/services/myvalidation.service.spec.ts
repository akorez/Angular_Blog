import { TestBed } from '@angular/core/testing';

import { MyvalidationService } from './myvalidation.service';

describe('MyvalidationService', () => {
  let service: MyvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
