import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewroComponent } from './newro.component';

describe('NewroComponent', () => {
  let component: NewroComponent;
  let fixture: ComponentFixture<NewroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
