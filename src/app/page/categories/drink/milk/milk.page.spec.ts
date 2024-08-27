import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkPage } from './milk.page';

describe('MilkPage', () => {
  let component: MilkPage;
  let fixture: ComponentFixture<MilkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
