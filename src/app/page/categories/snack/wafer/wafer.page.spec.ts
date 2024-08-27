import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaferPage } from './wafer.page';

describe('WaferPage', () => {
  let component: WaferPage;
  let fixture: ComponentFixture<WaferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
