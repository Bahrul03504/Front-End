import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BerandaPage } from './beranda.page';

describe('BerandaPage', () => {
  let component: BerandaPage;
  let fixture: ComponentFixture<BerandaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerandaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BerandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
