// src/users/dto/lives-covered.dto.ts
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { Category, FamilyMember, Relationship } from '../enums/lives-coverd.enum';
import { Transform, Type } from 'class-transformer';

export class LivesCoveredDto {
  @IsEnum(Relationship)
  @IsNotEmpty()
  relationship: Relationship;

  @IsEnum(FamilyMember)
  @IsOptional()
  familyMember?: FamilyMember;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(Category)
  @IsOptional()
  category?: Category;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

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
