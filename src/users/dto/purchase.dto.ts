import { ValidateNested, IsOptional, IsArray, IsEnum, IsBoolean } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { PersonalDetailsDto } from './personal-details.dto';
import { LivesCoveredDto } from './lives-covered.dto';
import { BeneficiaryDetailsDto } from './beneficiary-details.dto';
import { PaymentDetailsDto } from './payment-details.dto';
import { UploadDocumentsDto } from './upload-documents.dto';
import { COVERTYPE } from '../enums/lives-coverd.enum';

export class PurchaseDto {

  @IsEnum(COVERTYPE)
  coverType: COVERTYPE;

  @ValidateNested()
  @Type(() => PersonalDetailsDto)
  personalDetails: PersonalDetailsDto;

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

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(()=>UploadDocumentsDto)
  uploadDocuments:UploadDocumentsDto[];

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  confirmDetails: boolean;

}
