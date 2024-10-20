import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuSubItemComponent } from './sidebar-menu-sub-item.component';

describe('SidebarMenuSubItemComponent', () => {
  let component: SidebarMenuSubItemComponent;
  let fixture: ComponentFixture<SidebarMenuSubItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuSubItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
