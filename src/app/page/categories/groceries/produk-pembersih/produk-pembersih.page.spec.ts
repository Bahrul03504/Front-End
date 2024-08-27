import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukPembersihPage } from './produk-pembersih.page';

describe('ProdukPembersihPage', () => {
  let component: ProdukPembersihPage;
  let fixture: ComponentFixture<ProdukPembersihPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukPembersihPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
