import { ComponentFixture, TestBed } from '@angular/core/testing';

import { piesComponent } from './pies.component';

describe('PieChartComponent', () => {
  let component: piesComponent;
  let fixture: ComponentFixture<piesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ piesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(piesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
