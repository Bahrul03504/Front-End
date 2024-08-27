import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EssentialGroceriesPage } from './essential-groceries.page';

describe('EssentialGroceriesPage', () => {
  let component: EssentialGroceriesPage;
  let fixture: ComponentFixture<EssentialGroceriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialGroceriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
