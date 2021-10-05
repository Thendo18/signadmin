import { ComponentFixture, TestBed } from '@angular/core/testing';

import { piechartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: piechartComponent;
  let fixture: ComponentFixture<piechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ piechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(piechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
