import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbankmasterComponent } from './newbankmaster.component';

describe('NewbankmasterComponent', () => {
  let component: NewbankmasterComponent;
  let fixture: ComponentFixture<NewbankmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbankmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbankmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
