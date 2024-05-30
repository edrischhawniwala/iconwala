import { IsString, MaxLength, IsDate, IsEmail, validateSync, ValidationError } from 'class-validator';
import { get } from 'lodash';

import { combineValidationError } from '../../core/entity';

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  dob: Date;
}

export class User implements IUser {

  @IsString()
  @MaxLength(20)
  public firstname: string;

  @IsString()
  @MaxLength(20)
  public lastname: string;

  @IsEmail()
  public email: string;

  @IsDate()
  public dob: Date;

  public validate(): ValidationError[] { return validateSync(this); }
  public validateErrMsg(): string { return combineValidationError(this); }

  constructor(obj: any) {
    this.firstname = obj['firstname'];
    this.lastname = obj['lastname'];
    this.email = obj['email'];
    this.dob = new Date(obj['dob']);
  }

}