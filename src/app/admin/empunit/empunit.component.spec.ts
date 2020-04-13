import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpunitComponent } from './empunit.component';

describe('EmpunitComponent', () => {
  let component: EmpunitComponent;
  let fixture: ComponentFixture<EmpunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
