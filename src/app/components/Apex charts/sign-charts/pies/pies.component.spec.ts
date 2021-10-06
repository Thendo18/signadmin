import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiesComponent } from './pies.component';

describe('PieChartComponent', () => {
  let component: PiesComponent;
  let fixture: ComponentFixture<PiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
