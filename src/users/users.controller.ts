import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from 'os';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // 생성자 주입
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  // what userInfo ?
  // @Get(':id')
  // async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
  //   console.log(userId);
  //   return;
  // }
}
