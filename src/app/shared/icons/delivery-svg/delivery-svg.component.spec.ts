import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySvgComponent } from './delivery-svg.component';

describe('DeliverySvgComponent', () => {
  let component: DeliverySvgComponent;
  let fixture: ComponentFixture<DeliverySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverySvgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
