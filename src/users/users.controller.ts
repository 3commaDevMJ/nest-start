import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from 'os';
import { UsersService } from './users.service';
import { ValidationPipe } from '../pipe/validation.pipe';

@Controller('users')
export class UsersController {
  // 생성자 주입
  constructor(private userService: UsersService) {}

  @Get()
  getENV(): string {
    console.log(process.env.DATABASE_HOST);
    return process.env.DATABASE_HOST;
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.userService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;
    return await this.userService.login(email, password);
  }

  // what userInfo ?
  @Get(':id')
  async getUserInfo(@Param('id', ValidationPipe) userId: string) {
    if (+userId < 1) {
      // throw new BadRequestException('id는 0보다 큰 정수여야 합니다.');
      throw new HttpException(
        {
          errorMessage: 'id는 0보다 큰 정수여야 합니다',
          foo: 'bar',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.userService.getUserInfo(userId);
  }
}
