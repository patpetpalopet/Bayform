import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F001Component } from './f001.component';

describe('F001Component', () => {
  let component: F001Component;
  let fixture: ComponentFixture<F001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
