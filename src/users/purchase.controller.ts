import { Controller, Post, Body, UseInterceptors, UploadedFiles, Req, ParseArrayPipe, UseFilters } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseDto } from './dto/purchase.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { FileSizeLimitExceptionFilter } from 'src/exception/filesize.exception';
import { randomUUID } from 'crypto';

@Controller('funeral')
// @UseFilters(FileSizeLimitExceptionFilter)
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post('/purchase')
  // @UseInterceptors(
  //   FilesInterceptor('files', 5, {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, cb) => {
  //         const fileExtName = extname(file.originalname);
  //         const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
  //         cb(null, `${randomName}${fileExtName}`);
  //       },
  //     }),
  //     limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB file size limit
  //   }),
  // )
  async create(@Body() purchaseDto: PurchaseDto) {
    // const { personalDetails, livesCovered, beneficiaries, paymentDetails } = request.body;

    // Convert JSON strings to objects
    // const purchaseDto = plainToClass(PurchaseDto, {
    //   personalDetails: JSON.parse(
    //     personalDetails),
    //   livesCovered: JSON.parse(livesCovered),
    //   beneficiaries: JSON.parse(beneficiaries),
    //   paymentDetails: JSON.parse(paymentDetails),
    // });

    // // Validate ParentDto
    // const errors = validateSync(purchaseDto);
    // if (errors.length > 0) {
    //   return {
    //     message: errors.map(e => Object.values(e.constraints)),
    //     statusCode: 400,
    //   };
    // }

    try {
      let purchaseDetails = await this.purchaseService.create(purchaseDto);
      console.log(purchaseDetails);
      //delete purchaseDetails.files;
      return {
        message: 'Policy applied successfully',
        data: purchaseDetails,
        id:randomUUID(),
        activationDate:Date.now()
      };
    } catch (err) {
      console.log(err, "from controller");
      throw err;  // Ensure errors are properly propagated
    }
  }
}
