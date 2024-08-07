// src/users/dto/create-user.dto.ts
import { IsString, IsEmail, IsBoolean, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';
import { EmploymentDetailsDto } from './employment-details.dto';

export class CreateUserDto {
  @IsString()
  title: string;

  @IsString()
  firstName: string;

  @IsString()
  surname: string;

  @IsString()
  nationality: string;

  @IsString()
  botswanaIdNumber: string;

  @IsDateString()
  idExpiryDate: string;

  @IsBoolean()
  isPip: boolean;

  @IsEmail()
  email: string;

  @IsString()
  contactNumber: string;

  @ValidateNested()
  @Type(() => AddressDto)
  residentialAddress: AddressDto;

  @ValidateNested()
  @Type(() => AddressDto)
  postalAddress: AddressDto;

  @ValidateNested()
  @Type(() => EmploymentDetailsDto)
  employmentDetails: EmploymentDetailsDto;
}
