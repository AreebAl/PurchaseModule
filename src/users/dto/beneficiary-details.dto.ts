// import { IsString, IsOptional, IsEmail, IsPhoneNumber, IsDate, IsEnum } from 'class-validator';
// import { Relationship, FamilyMember, Category } from '../enums/lives-coverd.enum'; // Import your enums
// import { Type } from 'class-transformer';

// export class BeneficiaryDetailsDto {
//   @IsEnum(Relationship)
//   relationship: Relationship;

//   @IsOptional()
//   @IsString()
//   title?: string;

//   @IsString()
//   firstName: string;

//   @IsString()
//   surname: string;

//   @IsDate()
//   @Type(() => Date) 
//   dateOfBirth: Date;

//   @IsEnum(FamilyMember)
//   familyMember: FamilyMember;

//   @IsString()
//   nationality: string;

//   @IsOptional()
//   @IsString()
//   idNumber?: string;

//   @IsOptional()
//   @IsEmail()
//   email?: string;

//   @IsOptional()
//   @IsPhoneNumber(null)
//   cellphoneNumber?: string;

//   @IsEnum(Category)
//   category: Category;
// }







import { IsString, IsOptional, IsDate, IsEnum, IsPhoneNumber, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { Relationship, FamilyMember, Category } from '../enums/lives-coverd.enum'; // Import your enums

export class BeneficiaryDetailsDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEnum(FamilyMember)
  dependantType: FamilyMember;

  @IsString()
  nationalId: string;

  @IsDate()
  @Type(() => Date) 
  dateOfBirth: Date;

  @IsEnum(Relationship)
  relationship: Relationship;

//   @IsEnum(Category)
//   category: Category;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsOptional()
  @IsPhoneNumber('BW') 
  mobileNumber?: string;

//   @IsOptional()
//   @IsString()
//   addressLine1?: string;

//   @IsOptional()
//   @IsString()
//   addressLine2?: string;

//   @IsOptional()
//   @IsString()
//   addressLine3?: string;

//   @IsOptional()
//   @IsString()
//   addressLine4?: string;

//   @IsOptional()
//   @IsString()
//   addressLine5?: string;

//   @IsOptional()
//   @IsString()
//   addressLine6?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  countryCode?: string;

//   @IsOptional()
//   @IsPhoneNumber('BW') // Specifies Botswana country code
//   cellphoneNumber?: string;
}
