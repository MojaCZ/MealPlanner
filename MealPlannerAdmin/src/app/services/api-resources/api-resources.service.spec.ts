import { TestBed } from '@angular/core/testing';

import { ApiResourcesRangeService } from './api-resources-range.service';

describe('ApiResourcesRangeService', () => {
  let service: ApiResourcesRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResourcesRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
