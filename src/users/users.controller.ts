// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ParentDto } from './dto/parent.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() parentDto: ParentDto) {
    const user= this.usersService.create(parentDto);
    return {
        message: 'Policy generated successfully',
        data: user,
      };
  }
}
