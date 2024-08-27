import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KopiTehPage } from './kopi-teh.page';

describe('KopiTehPage', () => {
  let component: KopiTehPage;
  let fixture: ComponentFixture<KopiTehPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KopiTehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
