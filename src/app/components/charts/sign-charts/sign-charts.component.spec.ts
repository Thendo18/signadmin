import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignChartsComponent } from './sign-charts.component';

describe('SignChartsComponent', () => {
  let component: SignChartsComponent;
  let fixture: ComponentFixture<SignChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
