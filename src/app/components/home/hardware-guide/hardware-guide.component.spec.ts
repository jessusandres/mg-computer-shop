import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareGuideComponent } from './hardware-guide.component';

describe('HardwareGuideComponent', () => {
  let component: HardwareGuideComponent;
  let fixture: ComponentFixture<HardwareGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareGuideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HardwareGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
