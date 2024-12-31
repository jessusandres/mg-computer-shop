import { Injectable } from '@angular/core';
import { Currencies } from '@app/data';
import { BehaviorSubject } from 'rxjs';
import { generateRandom } from '@app/helpers';

@Injectable({
  providedIn: 'root',
})
export class CurrencyStateProvider {
  private _currencies = Currencies;

  private _selectedCurrency = new BehaviorSubject<string>('PEN');
  selectedCurrency$ = this._selectedCurrency.asObservable();

  private _exchangeValue = new BehaviorSubject<number>(0);
  exchangeValue$ = this._exchangeValue.asObservable();

  constructor() {
    this.fetchExchangeType(this._selectedCurrency.getValue());
  }

  get currencies() {
    return this._currencies;
  }

  get selectedCurrency() {
    return this._selectedCurrency.getValue();
  }

  fetchExchangeType(currency: string) {
    console.log({ currency });
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(() => {
        this._exchangeValue.next(+generateRandom(3.75, 4.1).toFixed(2));
      });
  }

  setSelectedCurrency(value: string) {
    this._selectedCurrency.next(value);

    this._exchangeValue.next(0);
    this.fetchExchangeType(value);
  }
}
