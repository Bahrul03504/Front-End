import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerasPage } from './beras.page';

describe('BerasPage', () => {
  let component: BerasPage;
  let fixture: ComponentFixture<BerasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
