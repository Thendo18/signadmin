import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestureComponent } from './view-gesture.component';

describe('ViewGestureComponent', () => {
  let component: ViewGestureComponent;
  let fixture: ComponentFixture<ViewGestureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGestureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
