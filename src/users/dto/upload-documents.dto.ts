import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';

// export class UploadDocumentsDto {
//   @IsString()
//   documentName: string;

//   @IsString()
//   documentType: string;

//   @IsOptional()
//   @IsNumber()
//   fileSize?: number;

//   @IsString()
//   fileUrl: string;
// }



export class UploadDocumentsDto {
  @IsString()
  @IsNotEmpty()
  documentType: string;

  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  @IsOptional()
  fileType?: string;

  @IsNumber()
  @IsOptional()
  fileSize?: number;
}