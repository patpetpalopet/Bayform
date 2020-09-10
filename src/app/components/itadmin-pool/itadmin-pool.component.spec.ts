import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITAdminPoolComponent } from './itadmin-pool.component';

describe('ITAdminPoolComponent', () => {
  let component: ITAdminPoolComponent;
  let fixture: ComponentFixture<ITAdminPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITAdminPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITAdminPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
