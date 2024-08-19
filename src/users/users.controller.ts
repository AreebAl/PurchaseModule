import { Controller, Post, Body, UseInterceptors, UploadedFiles, Req, ParseArrayPipe, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParentDto } from './dto/parent.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { FileSizeLimitExceptionFilter } from 'src/exception/filesize.exception';

@Controller('users')
@UseFilters(FileSizeLimitExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileExtName = extname(file.originalname);
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
          cb(null, `${randomName}${fileExtName}`);
        },
      }),
      limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB file size limit
    }),
  )
  async create(@Req() request: Request, @UploadedFiles() files: Express.Multer.File[]) {
    const { personalDetails, livesCovered, beneficiaries, paymentDetails } = request.body;

    // Convert JSON strings to objects
    const parentDto = plainToClass(ParentDto, {
      personalDetails: JSON.parse(
        personalDetails),
      livesCovered: JSON.parse(livesCovered),
      beneficiaries: JSON.parse(beneficiaries),
      paymentDetails: JSON.parse(paymentDetails),
    });

    // Validate ParentDto
    const errors = validateSync(parentDto);
    if (errors.length > 0) {
      return {
        message: errors.map(e => Object.values(e.constraints)),
        statusCode: 400,
      };
    }

    try {
      let user = await this.usersService.create(parentDto, files);
      console.log(user);
      delete user.files;
      return {
        message: 'Policy generated successfully',
        data: user,
      };
    } catch (err) {
      console.log(err, "from controller");
      throw err;  // Ensure errors are properly propagated
    }
  }
}
