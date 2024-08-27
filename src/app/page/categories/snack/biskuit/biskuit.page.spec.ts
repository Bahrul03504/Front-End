import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiskuitPage } from './biskuit.page';

describe('BiskuitPage', () => {
  let component: BiskuitPage;
  let fixture: ComponentFixture<BiskuitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiskuitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
