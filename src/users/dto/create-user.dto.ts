// src/users/dto/create-user.dto.ts
import { IsString, IsEmail, IsBoolean, IsDateString, ValidateNested, IsOptional, IsArray } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { AddressDto } from './address.dto';
import { EmploymentDetailsDto } from './employment-details.dto';
import { LivesCoveredDto } from './lives-covered.dto';

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
  @Transform(({ value }) => value === 'true')
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
  @Type(() => AddressDto)
  @IsOptional()
  previousResidentialAddress?: AddressDto;

  @ValidateNested()
  @Type(() => EmploymentDetailsDto)
  employmentDetails: EmploymentDetailsDto;

  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => LivesCoveredDto)
  // livesCovered: LivesCoveredDto[];
}
