import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InviteStaffComponent } from './invite-staff.component';

describe('InviteStaffComponent', () => {
  let component: InviteStaffComponent;
  let fixture: ComponentFixture<InviteStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InviteStaffComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InviteStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
