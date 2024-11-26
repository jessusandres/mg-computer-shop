import { Component } from '@angular/core';

/* Project */
import { HomeStateProvider } from '@app/providers/home-state.provider';

@Component({
  selector: 'modal-overlay',
  standalone: true,
  imports: [],
  templateUrl: './modal-overlay.component.html',
  styleUrl: './modal-overlay.component.scss',
})
export class ModalOverlayComponent {
  display = false;

  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.homeStateProvider.modalActive$.subscribe((value) => {
      this.display = value;
    });
  }
}
