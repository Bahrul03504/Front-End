import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinyakGorengPage } from './minyak-goreng.page';

describe('MinyakGorengPage', () => {
  let component: MinyakGorengPage;
  let fixture: ComponentFixture<MinyakGorengPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinyakGorengPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
