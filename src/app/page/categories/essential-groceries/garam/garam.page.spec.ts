import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaramPage } from './garam.page';

describe('GaramPage', () => {
  let component: GaramPage;
  let fixture: ComponentFixture<GaramPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
