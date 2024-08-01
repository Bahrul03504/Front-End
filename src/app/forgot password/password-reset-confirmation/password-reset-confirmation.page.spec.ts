import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordResetConfirmationPage } from './password-reset-confirmation.page';

describe('PasswordResetConfirmationPage', () => {
  let component: PasswordResetConfirmationPage;
  let fixture: ComponentFixture<PasswordResetConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
