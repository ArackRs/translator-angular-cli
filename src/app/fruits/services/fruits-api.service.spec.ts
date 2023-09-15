import { TestBed } from '@angular/core/testing';

import { FruitsApiService } from './fruits-api.service';

describe('FruitsApiService', () => {
  let service: FruitsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
