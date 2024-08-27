import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakananSiapSajiPage } from './makanan-siap-saji.page';

describe('MakananSiapSajiPage', () => {
  let component: MakananSiapSajiPage;
  let fixture: ComponentFixture<MakananSiapSajiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakananSiapSajiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
