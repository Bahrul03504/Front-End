import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TepungPage } from './tepung.page';

describe('TepungPage', () => {
  let component: TepungPage;
  let fixture: ComponentFixture<TepungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TepungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
