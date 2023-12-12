import { TestBed } from '@angular/core/testing';

import { AuthoService } from './services/autho.service';

describe('AuthoService', () => {
  let service: AuthoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
