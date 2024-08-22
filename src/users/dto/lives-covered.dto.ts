// src/users/dto/lives-covered.dto.ts
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { CATEGORY, FAMILYMEMBER, RELATIONSHIP } from '../enums/lives-coverd.enum';
import { Transform, Type } from 'class-transformer';

export class LivesCoveredDto {
 
  @IsEnum(CATEGORY)
  @IsOptional()
  category?: CATEGORY;
  
  @IsEnum(RELATIONSHIP)
  @IsNotEmpty()
  relationship: RELATIONSHIP;

  @IsEnum(FAMILYMEMBER)
  @IsOptional()
  familyMember?: FAMILYMEMBER;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date) 
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsString()
  @IsOptional()
  botswanaId?: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional() // Making it optional based on API usage
  coverAmount?: number;

  // Child-specific fields
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  isStudent?: boolean;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  hasSpecialNeeds?: boolean;
}
