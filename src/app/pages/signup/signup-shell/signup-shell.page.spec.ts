import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupShellPage } from './signup-shell.page';

describe('SignupShellPage', () => {
  let component: SignupShellPage;
  let fixture: ComponentFixture<SignupShellPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupShellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
