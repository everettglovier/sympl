import { TestBed } from '@angular/core/testing';

import { SymplFormService } from './sympl-form.service';

describe('SymplFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymplFormService = TestBed.get(SymplFormService);
    expect(service).toBeTruthy();
  });
});
