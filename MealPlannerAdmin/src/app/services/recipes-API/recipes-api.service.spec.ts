import { TestBed } from '@angular/core/testing';

import { RecipesAPIService } from './recipes-api.service';

describe('RecipesAPIService', () => {
  let service: RecipesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
