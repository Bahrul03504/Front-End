import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SayuranPage } from './sayuran.page';

describe('SayuranPage', () => {
  let component: SayuranPage;
  let fixture: ComponentFixture<SayuranPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SayuranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
