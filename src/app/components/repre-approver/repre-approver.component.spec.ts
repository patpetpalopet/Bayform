import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepreApproverComponent } from './repre-approver.component';

describe('RepreApproverComponent', () => {
  let component: RepreApproverComponent;
  let fixture: ComponentFixture<RepreApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepreApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepreApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
