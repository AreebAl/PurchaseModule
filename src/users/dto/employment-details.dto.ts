// src/users/dto/employment-details.dto.ts
import { IsString } from 'class-validator';

export class EmploymentDetailsDto {
  @IsString()
  status: string;

  @IsString()
  occupation: string;

  @IsString()
  sourceOfIncome: string;
}
