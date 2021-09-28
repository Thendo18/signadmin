import {  TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { chartsComponent } from './charts.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        chartsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(chartsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng2-chart'`, () => {
    const fixture = TestBed.createComponent(chartsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng2-chart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(chartsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng2-chart app is running!');
  });
});
