import { TestBed } from '@angular/core/testing';

import { AuthPassService } from './auth-pass.service';

describe('AuthPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthPassService = TestBed.get(AuthPassService);
    expect(service).toBeTruthy();
  });
});
