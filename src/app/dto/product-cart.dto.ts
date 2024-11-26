import { TProductCart } from '@app/types';
import { IsNumber, IsString, IsUrl, Min } from 'class-validator';

export class DProductCart implements TProductCart {
  @Min(1)
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsUrl()
  image: string;

  @IsNumber()
  @Min(1)
  pricePEN: number;

  @IsNumber()
  @Min(1)
  priceUSD: number;

  @IsNumber()
  @Min(1)
  priceEUR: number;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(1)
  warehouse: number;

  constructor(product: TProductCart) {
    this.id = product.id;
    this.name = product.name;
    this.image = product.image;
    this.pricePEN = product.pricePEN;
    this.priceUSD = product.priceUSD;
    this.priceEUR = product.priceEUR;
    this.quantity = product.quantity;
    this.warehouse = product.warehouse;
  }
}
