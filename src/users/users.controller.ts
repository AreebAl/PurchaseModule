import { Controller, Post, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParentDto } from './dto/parent.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  @UseInterceptors(
    FilesInterceptor('files', 4, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileExtName = extname(file.originalname);
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
          cb(null, `${randomName}${fileExtName}`);
        },
      }),
    }),
  )
  create(@Body() parentDto: ParentDto, @UploadedFiles() files:  Express.Multer.File[]) {
    try {
      let user = this.usersService.create(parentDto, files);
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
