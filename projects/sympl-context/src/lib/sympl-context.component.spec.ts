import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplContextComponent } from './sympl-context.component';

describe('SymplContextComponent', () => {
  let component: SymplContextComponent;
  let fixture: ComponentFixture<SymplContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymplContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
