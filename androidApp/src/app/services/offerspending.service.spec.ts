import { TestBed } from '@angular/core/testing';

import { OfferspendingService } from './offerspending.service';

describe('OfferspendingService', () => {
  let service: OfferspendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferspendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
