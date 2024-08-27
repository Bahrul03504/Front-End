import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KacangPage } from './kacang.page';

describe('KacangPage', () => {
  let component: KacangPage;
  let fixture: ComponentFixture<KacangPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KacangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
