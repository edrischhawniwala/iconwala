import { IsString, IsInt, validateSync, ValidationError, Min } from 'class-validator';

import { combineValidationError } from '../../core/entity';

export interface ISale {
  productCode: string;
  userEmail: string;
  quantity: number;
}

export class Sale implements ISale {

  @IsString()
  public productCode: string;

  @IsString()
  public userEmail: string;

  @IsInt()
  @Min(1)
  public quantity: number;

  public validate(): ValidationError[] { return validateSync(this); }
  public validateErrMsg(): string { return combineValidationError(this); }

  constructor(obj: any) {
    this.productCode = obj['productCode'];
    this.userEmail = obj['userEmail'];
    this.quantity = obj['quantity'];
  }

}