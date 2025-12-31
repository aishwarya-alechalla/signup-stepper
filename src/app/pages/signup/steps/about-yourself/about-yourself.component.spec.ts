import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutYourselfComponent } from './about-yourself.component';

describe('AboutYourselfComponent', () => {
  let component: AboutYourselfComponent;
  let fixture: ComponentFixture<AboutYourselfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AboutYourselfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
