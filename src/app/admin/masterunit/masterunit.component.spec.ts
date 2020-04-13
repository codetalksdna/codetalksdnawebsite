import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterunitComponent } from './masterunit.component';

describe('MasterunitComponent', () => {
  let component: MasterunitComponent;
  let fixture: ComponentFixture<MasterunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
