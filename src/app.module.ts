import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { Dexter, Jane } from './person/MyApp';
import { ServiceB } from './dogs/base/serviceb';
import { ServiceA } from './dogs/base/servicea';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [CatsModule, UsersModule, EmailModule],
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
