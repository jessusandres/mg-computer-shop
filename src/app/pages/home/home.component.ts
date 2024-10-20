import { Component } from '@angular/core';

/* Extra */
import { TooltipModule } from 'primeng/tooltip';

/* Project */
import { HeaderComponent } from '@app/shared/header/header.component';
import { SidebarMenuComponent } from '@app/shared/sidebar-menu/sidebar-menu.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TooltipModule,
    HeaderComponent,
    SidebarMenuComponent,
    NgIf,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showHeader: boolean = true;
}
