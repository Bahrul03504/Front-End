import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DagingDanIkanPage } from './daging-dan-ikan.page';

describe('DagingDanIkanPage', () => {
  let component: DagingDanIkanPage;
  let fixture: ComponentFixture<DagingDanIkanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DagingDanIkanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
