import { TestBed } from '@angular/core/testing';

import { SymplToggleService } from './sympl-toggle.service';

describe('SymplToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymplToggleService = TestBed.get(SymplToggleService);
    expect(service).toBeTruthy();
  });
});
