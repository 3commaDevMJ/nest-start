import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EmailModule } from '../email/email.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [EmailModule, CqrsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
