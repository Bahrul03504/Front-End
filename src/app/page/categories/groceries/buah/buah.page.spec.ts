import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuahPage } from './buah.page';

describe('BuahPage', () => {
  let component: BuahPage;
  let fixture: ComponentFixture<BuahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
