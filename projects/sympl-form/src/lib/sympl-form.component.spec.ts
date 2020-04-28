import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplFormComponent } from './sympl-form.component';

describe('SymplFormComponent', () => {
  let component: SymplFormComponent;
  let fixture: ComponentFixture<SymplFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymplFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
