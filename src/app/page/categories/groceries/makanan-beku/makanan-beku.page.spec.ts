import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakananBekuPage } from './makanan-beku.page';

describe('MakananBekuPage', () => {
  let component: MakananBekuPage;
  let fixture: ComponentFixture<MakananBekuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakananBekuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
