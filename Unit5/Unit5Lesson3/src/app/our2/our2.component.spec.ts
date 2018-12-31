import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Our2Component } from './our2.component';

describe('Our2Component', () => {
  let component: Our2Component;
  let fixture: ComponentFixture<Our2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Our2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Our2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
