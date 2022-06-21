import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { Dexter, Jane } from './person/MyApp';
import { ServiceB } from './dogs/base/serviceb';
import { ServiceA } from './dogs/base/servicea';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
    }),
  ],
  providers: [
    ServiceB,
    ServiceA,
    {
      provide: 'Person',
      useClass: Jane,
    },
  ],
})
export class AppModule {}
