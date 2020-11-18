import { TestBed } from '@angular/core/testing';

import { DummyLibService } from './dummy-lib.service';

describe('DummyLibService', () => {
  let service: DummyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
