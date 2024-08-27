import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GulaPage } from './gula.page';

describe('GulaPage', () => {
  let component: GulaPage;
  let fixture: ComponentFixture<GulaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
