import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { Dexter, Jane } from './person/MyApp';
import { ServiceB } from './dogs/base/serviceb';
import { ServiceA } from './dogs/base/servicea';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [CatsModule],
  controllers: [UsersController],
  providers: [
    ServiceB,
    ServiceA,
    {
      provide: 'Person',
      useClass: Jane,
    },
    UsersService,
    EmailService,
  ],
})
export class AppModule {}
