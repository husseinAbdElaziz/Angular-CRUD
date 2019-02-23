import { TestBed } from '@angular/core/testing';

import { ApiCRUDService } from './api-crud.service';

describe('ApiCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCRUDService = TestBed.get(ApiCRUDService);
    expect(service).toBeTruthy();
  });
});
