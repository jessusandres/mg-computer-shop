import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { SidebarMenuComponent } from '@app/shared/sidebar-menu/sidebar-menu.component';
import { TooltipModule } from 'primeng/tooltip';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@app/shared/footer/footer.component';

@Component({
  selector: 'app-primary-layout',
  standalone: true,
  imports: [
    TooltipModule,
    HeaderComponent,
    SidebarMenuComponent,
    NgIf,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './primary-layout.component.html',
  styleUrl: './primary-layout.component.scss',
})
export class PrimaryLayoutComponent {
  showHeader: boolean = true;
}
