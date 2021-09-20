import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cardsComponent } from './cards.component';

describe('cardsComponent', () => {
  let component: cardsComponent;
  let fixture: ComponentFixture<cardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
