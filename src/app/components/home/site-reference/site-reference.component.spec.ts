import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteReferenceComponent } from './site-reference.component';

describe('SiteReferenceComponent', () => {
  let component: SiteReferenceComponent;
  let fixture: ComponentFixture<SiteReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteReferenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
