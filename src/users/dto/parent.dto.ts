import { ValidateNested, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';
import { LivesCoveredDto } from './lives-covered.dto';

export class ParentDto {
  @ValidateNested()
  @Type(() => CreateUserDto)
  personalDetails: CreateUserDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LivesCoveredDto)
  livesCovered: LivesCoveredDto[];
}
