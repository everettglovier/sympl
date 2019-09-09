import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplChatComponent } from './sympl-chat.component';

describe('SymplChatComponent', () => {
  let component: SymplChatComponent;
  let fixture: ComponentFixture<SymplChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymplChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
