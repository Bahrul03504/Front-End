import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RotiDanKuePage } from './roti-dan-kue.page';

describe('RotiDanKuePage', () => {
  let component: RotiDanKuePage;
  let fixture: ComponentFixture<RotiDanKuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RotiDanKuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
