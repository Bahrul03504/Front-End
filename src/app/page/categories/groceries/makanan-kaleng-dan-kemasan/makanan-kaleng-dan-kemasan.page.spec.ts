import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakananKalengDanKemasanPage } from './makanan-kaleng-dan-kemasan.page';

describe('MakananKalengDanKemasanPage', () => {
  let component: MakananKalengDanKemasanPage;
  let fixture: ComponentFixture<MakananKalengDanKemasanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakananKalengDanKemasanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
