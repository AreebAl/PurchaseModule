import { ValidateNested, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';
import { LivesCoveredDto } from './lives-covered.dto';
import { BeneficiaryDetailsDto } from './beneficiary-details.dto';
import { PaymentDetailsDto } from './payment-details.dto';

export class ParentDto {
  @ValidateNested()
  @Type(() => CreateUserDto)
  personalDetails: CreateUserDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LivesCoveredDto)
  livesCovered: LivesCoveredDto[];
 
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BeneficiaryDetailsDto)
  beneficiaries: BeneficiaryDetailsDto[];  


  @IsOptional()
  @ValidateNested()
  @Type(() => PaymentDetailsDto)
  paymentDetails?: PaymentDetailsDto;

}
