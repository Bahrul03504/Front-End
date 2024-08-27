import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KedelaiPage } from './kedelai.page';

describe('KedelaiPage', () => {
  let component: KedelaiPage;
  let fixture: ComponentFixture<KedelaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KedelaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
