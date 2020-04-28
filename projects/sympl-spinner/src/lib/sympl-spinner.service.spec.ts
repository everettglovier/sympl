import { TestBed } from '@angular/core/testing';

import { SymplSpinnerService } from './sympl-spinner.service';

describe('SymplSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymplSpinnerService = TestBed.get(SymplSpinnerService);
    expect(service).toBeTruthy();
  });
});
