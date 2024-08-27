import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CokelatPage } from './cokelat.page';

describe('CokelatPage', () => {
  let component: CokelatPage;
  let fixture: ComponentFixture<CokelatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CokelatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
