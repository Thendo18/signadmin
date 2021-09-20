import { TestBed } from '@angular/core/testing';

import { RequestedService  } from './requested.service';

describe('RequestedService', () => {
  let service: RequestedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
