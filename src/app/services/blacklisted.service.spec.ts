import { TestBed } from '@angular/core/testing';

import { BlacklistedService } from './blacklisted.service';

describe('BlacklistedService', () => {
  let service: BlacklistedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlacklistedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
