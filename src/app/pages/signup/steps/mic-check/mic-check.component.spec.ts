import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MicCheckComponent } from './mic-check.component';

describe('MicCheckComponent', () => {
  let component: MicCheckComponent;
  let fixture: ComponentFixture<MicCheckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MicCheckComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MicCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
