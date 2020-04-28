import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplSpinnerComponent } from './sympl-spinner.component';

describe('SymplSpinnerComponent', () => {
  let component: SymplSpinnerComponent;
  let fixture: ComponentFixture<SymplSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymplSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
