import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnergyDrinkPage } from './energy-drink.page';

describe('EnergyDrinkPage', () => {
  let component: EnergyDrinkPage;
  let fixture: ComponentFixture<EnergyDrinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyDrinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
