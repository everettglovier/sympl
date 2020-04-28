import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplToggleComponent } from './sympl-toggle.component';

describe('SymplToggleComponent', () => {
  let component: SymplToggleComponent;
  let fixture: ComponentFixture<SymplToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymplToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
