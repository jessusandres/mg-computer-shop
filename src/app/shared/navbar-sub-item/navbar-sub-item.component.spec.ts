import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSubItemComponent } from './navbar-sub-item.component';

describe('NavbarSubItemComponent', () => {
  let component: NavbarSubItemComponent;
  let fixture: ComponentFixture<NavbarSubItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSubItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
