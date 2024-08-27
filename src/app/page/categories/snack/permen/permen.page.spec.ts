import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermenPage } from './permen.page';

describe('PermenPage', () => {
  let component: PermenPage;
  let fixture: ComponentFixture<PermenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PermenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
