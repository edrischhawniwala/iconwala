import { IsString, MaxLength, validateSync, IsNumber, ValidationError } from 'class-validator';

import { combineValidationError } from '../../core/entity';

export interface IProduct {
  code: string;
  name: string;
  desc: string;
  tag: string;
  price: number;
}

export class Product implements IProduct {

  @IsString()
  @MaxLength(20)
  public code: string;

  @IsString()
  @MaxLength(20)
  public name: string;

  @IsString()
  public desc: string;

  @IsString()
  public tag: string;

  @IsNumber()
  public price: number;

  public validate(): ValidationError[] { return validateSync(this); }
  public validateErrMsg(): string { return combineValidationError(this); }

  constructor(obj: any) {
    this.code = obj['code'];
    this.name = obj['name'];
    this.desc = obj['desc'];
    this.tag = obj['tag'];
    this.price = obj['price'];
  }

}