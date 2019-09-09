import { TestBed } from '@angular/core/testing';

import { SymplChatService } from './sympl-chat.service';

describe('SymplChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymplChatService = TestBed.get(SymplChatService);
    expect(service).toBeTruthy();
  });
});
