import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F001listComponent } from './f001list.component';

describe('F001listComponent', () => {
  let component: F001listComponent;
  let fixture: ComponentFixture<F001listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F001listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F001listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
