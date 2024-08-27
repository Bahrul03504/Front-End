import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SusuPage } from './susu.page';

describe('SusuPage', () => {
  let component: SusuPage;
  let fixture: ComponentFixture<SusuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SusuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
