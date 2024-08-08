// src/users/dto/address.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class AddressDto {
  @IsString()
  @IsOptional()
  addressLine1: string;

  @IsString()
  @IsOptional()
  addressLine2?: string;

  @IsString()
  @IsOptional()
  addressLine3?: string;

  @IsString()
  @IsOptional()
  addressLine4?: string;

  @IsString()
  @IsOptional()
  addressLine5?: string;

  @IsString()
  @IsOptional()
  addressLine6?: string;

  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  postalCode: string;

  @IsString()
  @IsOptional()
  countryCode: string;
}
