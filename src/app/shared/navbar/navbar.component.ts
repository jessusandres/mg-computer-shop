import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CurrencyPipe, NgForOf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

/* Project */
import { ArrowDownSvgComponent } from '@app/shared/icons/arrow-down-svg/arrow-down-svg.component';
import { DeliverySvgComponent } from '@app/shared/icons/delivery-svg/delivery-svg.component';
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { TCategory, TCurrency, TMenu } from '@app/types';
import { NavbarItemComponent } from '@app/shared/navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ArrowDownSvgComponent,
    DeliverySvgComponent,
    NgForOf,
    RouterLink,
    NgStyle,
    CurrencyPipe,
    NavbarItemComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('currencyDiv', { static: true }) currencyDivRef!: ElementRef;
  private readonly outsideListener: () => void;

  showCurrency = false;
  exchangeValue!: number;
  selectedCurrency!: TCurrency;
  categories: TCategory[];
  menus: TMenu[];
  currencies: TCurrency[] = [];

  constructor(
    private renderer: Renderer2,
    private homeStateProvider: HomeStateProvider,
  ) {
    this.menus = this.homeStateProvider.menus;
    this.categories = this.homeStateProvider.categories;
    // this.currencies = this.homeStateProvider.currencies;

    this.outsideListener = this.renderer.listen(
      'window',
      'click',
      this.outsideCallback.bind(this),
    );
  }

  ngOnInit() {
    this.homeStateProvider.selectedCurrency$.subscribe((currencyTerm) => {
      this.currencies = this.homeStateProvider.currencies.filter(
        (c) => c.term !== currencyTerm,
      );

      this.selectedCurrency =
        this.homeStateProvider.currencies.find(
          (c) => c.term === currencyTerm,
        ) || this.currencies[0];
    });

    this.homeStateProvider.exchangeValue$.subscribe((exchangeValue) => {
      this.exchangeValue = exchangeValue;
    });
  }

  ngOnDestroy() {
    if (this.outsideListener) this.outsideListener();
  }

  setShowCurrency(show: boolean) {
    this.showCurrency = show;
  }

  setCurrency(currency: string) {
    this.showCurrency = false;
    this.homeStateProvider.setSelectedCurrency(currency);
    // this.showCurrency = !this.showCurrency;
  }

  outsideCallback(event: Event) {
    const outside = !this.currencyDivRef.nativeElement.contains(event.target);

    if (outside) this.showCurrency = false;
  }
}
