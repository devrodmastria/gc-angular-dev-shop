import { TestBed } from '@angular/core/testing';

import { DevListService } from './dev-list.service';

describe('DevListService', () => {
  let service: DevListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
