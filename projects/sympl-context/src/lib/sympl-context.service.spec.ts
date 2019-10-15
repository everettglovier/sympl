import { TestBed } from '@angular/core/testing';

import { SymplContextService } from './sympl-context.service';

describe('SymplContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymplContextService = TestBed.get(SymplContextService);
    expect(service).toBeTruthy();
  });
});
