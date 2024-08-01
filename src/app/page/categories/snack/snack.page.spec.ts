import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackPage } from './snack.page';

describe('SnackPage', () => {
  let component: SnackPage;
  let fixture: ComponentFixture<SnackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
