import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankbranchComponent } from './bankbranch.component';

describe('BankbranchComponent', () => {
  let component: BankbranchComponent;
  let fixture: ComponentFixture<BankbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankbranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
