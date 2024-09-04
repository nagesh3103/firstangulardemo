import { TestBed } from '@angular/core/testing';

import { UserregisterService } from './userregister.service';

describe('UserregisterServiceService', () => {
  let service: UserregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
