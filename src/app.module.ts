import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Dexter, Jane } from './person/MyApp';
import { ServiceB } from './dogs/base/serviceb';
import { ServiceA } from './dogs/base/servicea';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    ServiceB,
    ServiceA,
    {
      provide: 'Person',
      useClass: Jane,
    },
  ],
})
export class AppModule {}
