import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SodaPage } from './soda.page';

describe('SodaPage', () => {
  let component: SodaPage;
  let fixture: ComponentFixture<SodaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
