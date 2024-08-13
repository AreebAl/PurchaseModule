import { IsString, IsNumber, IsEnum, IsIBAN, Min, Max, IsBoolean } from 'class-validator';

import { AccountType } from '../enums/lives-coverd.enum';
import { Transform } from 'class-transformer';

export class PaymentDetailsDto {
    @IsString()
    bankName: string;

    @IsString()
    branchName: string;

    @IsString()
    accountHolderName: string;

    @IsIBAN() // Assuming the account number should be validated as an IBAN
    accountNumber: string;

    @IsEnum(AccountType)
    accountType: AccountType;

    @IsNumber()
    @Transform(({ value }) => Number(value))
    @Min(1)
    @Max(31)
    debitOrderDate: number;

    @IsBoolean()
    @Transform(({ value }) => value === 'true')
    confirmDetails: boolean;
}
