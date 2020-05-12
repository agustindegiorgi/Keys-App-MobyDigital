import { TestBed } from '@angular/core/testing';

import { DoorkeyService } from './doorkey.service';

describe('DoorkeyService', () => {
  let service: DoorkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoorkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
