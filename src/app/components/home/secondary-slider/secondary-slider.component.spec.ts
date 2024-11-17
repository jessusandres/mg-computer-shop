import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySliderComponent } from './secondary-slider.component';

describe('SecondarySliderComponent', () => {
  let component: SecondarySliderComponent;
  let fixture: ComponentFixture<SecondarySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondarySliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondarySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
