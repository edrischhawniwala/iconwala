import { IsString, MaxLength, validateSync, IsNumber, ValidationError, IsArray, IsBase64 } from 'class-validator';
import { Document } from 'mongodb';
import { combineValidationError } from '../../core/entity';

export class Icon implements Document, IIcon {

  @IsString()
  public id: string;

  @IsString()
  public iconPackId: string;

  @IsString()
  @IsBase64()
  @MaxLength(15728640) // An Icon should be 15 MB max
  public iconBase64: string;

  @IsString()
  @MaxLength(20)
  public name: string;

  @IsArray()
  public tags: string[];

  @IsString()
  public desc: string;

  @IsNumber()
  public price: number;

  public validate(): ValidationError[] { return validateSync(this); }
  public validateErrMsg(): string { return combineValidationError(this); }

  constructor(obj: any) {
    // super();
    this.id = obj.id;
    this.iconPackId = obj.iconPackId;
    this.iconBase64 = obj.iconBase64;
    this.name = obj.name;
    this.desc = obj.desc;
    this.tags = obj.tags;
    this.price = obj.price;
  }

}

export interface IIcon {
  id: string;
  iconPackId: string;
  iconBase64: string;
  name: string;
  tags: string[];
  desc: string;
  price: number;
}