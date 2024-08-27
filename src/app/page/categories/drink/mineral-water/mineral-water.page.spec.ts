import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MineralWaterPage } from './mineral-water.page';

describe('MineralWaterPage', () => {
  let component: MineralWaterPage;
  let fixture: ComponentFixture<MineralWaterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralWaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
