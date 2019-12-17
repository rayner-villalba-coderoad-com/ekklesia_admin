import { TestBed } from '@angular/core/testing';

import { EkklenewsService } from './ekklenews.service';

describe('EkklenewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EkklenewsService = TestBed.get(EkklenewsService);
    expect(service).toBeTruthy();
  });
});
