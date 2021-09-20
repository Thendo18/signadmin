import { TestBed } from '@angular/core/testing';

import { SignsService } from './signs.service';

describe('SignsService', () => {
  let service: SignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
