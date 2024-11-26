import {
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'whatsapp-popup',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-popup.component.html',
  styleUrl: './whatsapp-popup.component.css',
})
export class WhatsappPopupComponent implements OnDestroy {
  @ViewChild('wspPopUpDiv', { static: true }) elementRef!: ElementRef;
  private readonly outsideListener: () => void;
  display: boolean = false;

  constructor(private renderer: Renderer2) {
    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );
  }

  togglePopUp() {
    this.display = !this.display;
  }

  closePopUp() {
    this.display = false;
  }

  outsideCallback(event: Event) {
    const outside = !this.elementRef.nativeElement.contains(event.target);

    if (outside) this.display = false;
  }

  ngOnDestroy() {
    if (this.outsideListener) this.outsideListener();
  }
}
