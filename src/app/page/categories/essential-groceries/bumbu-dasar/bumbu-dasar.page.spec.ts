import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BumbuDasarPage } from './bumbu-dasar.page';

describe('BumbuDasarPage', () => {
  let component: BumbuDasarPage;
  let fixture: ComponentFixture<BumbuDasarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BumbuDasarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
