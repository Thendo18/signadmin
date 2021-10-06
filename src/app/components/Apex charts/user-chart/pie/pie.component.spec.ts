import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pieComponent } from './pie.component';

describe('PieChartComponent', () => {
  let component: pieComponent;
  let fixture: ComponentFixture<pieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
