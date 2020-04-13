import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbankComponent } from './masterbank.component';

describe('MasterbankComponent', () => {
  let component: MasterbankComponent;
  let fixture: ComponentFixture<MasterbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
