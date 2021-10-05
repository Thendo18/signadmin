import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsComponent } from './graphs.component';

describe('SignChartsComponent', () => {
  let component: graphsComponent ;
  let fixture: ComponentFixture<graphsComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ graphsComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(graphsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
