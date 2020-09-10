import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Operation3Component } from './operation3.component';

describe('Operation3Component', () => {
  let component: Operation3Component;
  let fixture: ComponentFixture<Operation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Operation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Operation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
