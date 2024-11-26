import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { SidebarMenuComponent } from '@app/shared/sidebar-menu/sidebar-menu.component';
import { TooltipModule } from 'primeng/tooltip';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { WhatsappPopupComponent } from '@app/shared/whatsapp-popup/whatsapp-popup.component';
import { ProductModalComponent } from '@app/shared/product-modal/product-modal.component';
import { ModalOverlayComponent } from '@app/shared/modal-overlay/modal-overlay.component';
import { CartPreviewComponent } from '@app/shared/cart-preview/cart-preview.component';

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
    WhatsappPopupComponent,
    ProductModalComponent,
    ModalOverlayComponent,
    CartPreviewComponent,
  ],
  templateUrl: './primary-layout.component.html',
  styleUrl: './primary-layout.component.scss',
})
export class PrimaryLayoutComponent {
  showHeader: boolean = true;
}
