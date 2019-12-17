import { TestBed } from '@angular/core/testing';

import { TeachingsService } from './teachings.service';

describe('TeachingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachingsService = TestBed.get(TeachingsService);
    expect(service).toBeTruthy();
  });
});
