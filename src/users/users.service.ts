// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ParentDto } from './dto/parent.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: ParentDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
