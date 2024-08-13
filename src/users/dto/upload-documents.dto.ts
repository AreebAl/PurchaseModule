import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';

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
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Object)  // Expecting files to be objects representing the files
  files: any[];
}