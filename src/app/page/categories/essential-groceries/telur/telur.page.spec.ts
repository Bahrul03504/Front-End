import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelurPage } from './telur.page';

describe('TelurPage', () => {
  let component: TelurPage;
  let fixture: ComponentFixture<TelurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
